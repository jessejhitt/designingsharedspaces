/* ============================================================
   site.html?id=<site-id>
   Laid out to the Figma frame for a site (newPWR.pdf, frame 10),
   in the Figma's order:
     hero photo · Site / Intervention tags
     → Overview (text · ratings + sacredness triangle · map · quick links)
     → gallery → [photo + Interventions Process | Uses · Timetable · Context + Site analysis]
     → Publicness Analysis → Interaction Analysis
     → [publicness / interaction bars + the site-visit graph | tall photo]
     → Community comments → Opportunity
   Then the prototype's own additions, which the Figma does not show:
     the full story · what made it work · sources · related sites.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const id    = new URLSearchParams(location.search).get("id");
  const site  = getSite(id);
  const mount = document.getElementById("detail");

  if (!site) {
    mount.innerHTML = `
      <div data-header-slot></div>
      <div class="wrap" style="padding-top:60px">
        <div class="empty-state">
          <h3>Site not found</h3>
          <p>The link may be out of date. Browse the
             <a class="rule-link" href="case-studies.html">case studies</a> or
             <a class="rule-link" href="opportunities.html">opportunities</a> instead.</p>
        </div>
      </div>`;
    renderChrome();
    return;
  }

  const d = DETAIL[site.id] || {};
  const x = DETAIL_EXTRAS[site.id] || {};
  const o = site.opportunity;
  const title   = d.pageTitle   || site.name;
  const address = d.pageAddress || site.address;
  document.title = `${site.shortName} — Designing Shared Spaces Together`;

  const INTERACTION_SCALE = { Dormant: 1, Passive: 2, Emerging: 3, Active: 5 };
  /* "High Publicness" rates as High — without the strip it fell through to the
     middle step and the overall verdict looked weaker than its rows */
  const scaleOf = r => RATING_SCALE[r] || RATING_SCALE[String(r).replace(/ Publicness$/, "")]
                    || INTERACTION_SCALE[r] || 3;
  const rate = (label, tone) =>
    `<span class="rate rate--${tone}" data-scale="${scaleOf(label)}">${label}</span>`;
  /* Every site has photos 1–4; only Grand Junction has a 5th (the context shot).
     Asking for a missing one logs a 404 before the fallback, so go straight to 1. */
  const PHOTO_COUNT = { "grand-junction": 5 };
  const shot = n => (n <= (PHOTO_COUNT[site.id] || 4) ? n : 1);
  const img = (n, alt = site.shortName) =>
    `<img src="${heroImg(site, shot(n))}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='${heroImg(site, 1)}'">`;

  /* the photographer's own caption for shot n, where there is one */
  const shotCap = (s, n) => {
    const caps = (typeof CASE_CAPTIONS !== "undefined" && CASE_CAPTIONS[s.id]) || null;
    return caps && caps[n - 1] ? `<figcaption>${caps[n - 1]}</figcaption>` : "";
  };

  /* ---------------- sacredness triangle ---------------- */
  const T = x.triangle || { sacred: .34, secular: .33, multifaith: .33 };
  const V = { sacred: [111, 22], secular: [37, 147], multifaith: [185, 147] };
  const tx = T.sacred * V.sacred[0] + T.secular * V.secular[0] + T.multifaith * V.multifaith[0];
  const ty = T.sacred * V.sacred[1] + T.secular * V.secular[1] + T.multifaith * V.multifaith[1];
  const triangle = `
    <svg class="ov-tri-svg" viewBox="0 0 240 170" role="img"
         aria-label="Sacredness triangle: ${site.shortName} plotted between sacred, secular and multi-faith.">
      <polygon points="111,22 37,147 185,147" fill="none" stroke="var(--ink)" stroke-width="1.2"/>
      <text x="111" y="12" text-anchor="middle" class="tri-lbl">Sacred</text>
      <text x="0" y="166" text-anchor="start" class="tri-lbl">Secular</text>
      <text x="240" y="166" text-anchor="end" class="tri-lbl">Multi-faith</text>
      <circle cx="${tx.toFixed(1)}" cy="${ty.toFixed(1)}" r="5.5" fill="var(--red)"/>
    </svg>`;

  /* ---------------- uses: rows filled edge to edge, as on the Figma ---------------- */
  const uses = d.usesList || site.uses;
  function usesRows(list) {
    const CAP = 626, GAP = 13, cost = t => t.length * 8.6 + 48;   // panel width, pill padding
    const rows = [[]]; let w = 0;
    list.forEach(u => {
      const c = cost(u);
      if (rows.at(-1).length && w + GAP + c > CAP) { rows.push([]); w = 0; }
      w += (rows.at(-1).length ? GAP : 0) + c;
      rows.at(-1).push(u);
    });
    return rows.map(r => `<div class="uses-row${r.length === 1 ? " is-single" : ""}">${
      r.map(u => `<span class="use-pill">${u}</span>`).join("")}</div>`).join("");
  }

  /* ---------------- timetable: an even seven-day grid ---------------- */
  function timetableHTML() {
    if (!d.week) return "";
    const rows = d.week.map(r => {
      let cells = "", day = 0;
      [...r.cells].sort((a, b) => a.start - b.start).forEach(c => {
        while (day < c.start) { cells += "<td></td>"; day++; }
        const cls = ["tt-bar", c.accent ? "tt-bar--accent" : "", c.quiet ? "tt-bar--quiet" : ""].filter(Boolean).join(" ");
        cells += `<td colspan="${c.span}"><span class="${cls}" title="${c.text}">${c.text}</span></td>`;
        day = c.start + c.span;
      });
      while (day < 7) { cells += "<td></td>"; day++; }
      return `<tr><td class="rowlbl">${r.label.replace(" ", "<br>")}</td>${cells}</tr>`;
    }).join("");
    return `
      <div class="timetable">
        <table>
          <colgroup><col class="c-lbl">${DAYS.map(() => "<col>").join("")}</colgroup>
          <thead><tr><th class="rowlbl"></th>${DAYS.map(dd => `<th>${dd}</th>`).join("")}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }

  /* ---------------- analysis panels ---------------- */
  function analysisHTML(kind) {
    const a = d[kind];
    if (!a) return "";
    const tone = kind === "publicness" ? "green" : "red";
    return `
      <section class="panel panel--${tone} detail-section">
        <h2 class="panel-title">${kind === "publicness" ? "Publicness" : "Interaction"} <i>Analysis</i></h2>
        <div class="analysis">
          <table>
            <thead><tr><th>Dimension</th><th>Rating</th><th>Why</th></tr></thead>
            <tbody>
              ${a.rows.map(([dim, r, why]) =>
                `<tr><td>${dim}</td><td>${rate(r, tone)}</td><td>${why}</td></tr>`).join("")}
            </tbody>
          </table>
          <div class="analysis-notes">
            <h4>Notes</h4>
            <p>${a.notes}</p>
          </div>
        </div>
        <div class="overall-row">
          <span class="lbl">Overall</span>${rate(a.overall, tone)}
        </div>
      </section>`;
  }

  /* ---------------- site-visit graph ----------------
     From the toolkit iteration "site visit analysis": two axes crossing
     at the centre, each with the questions that place a site along it.
     Positions (0–1) are read off that graph; sites not yet on it get
     the axes and questions without a dot. */
  const sc = d.scores || { publicness: (site.publicness - 1) / 4, interaction: .5 };
  const g = d.siteVisitGraph;
  const quadrant = `
    <div class="sv-graph">
      <div class="sv-plot" role="img" aria-label="${g
        ? `${site.shortName} on the site-visit graph: designed for the most locals (vertical) against designed for familiarity and comfortability (horizontal).`
        : `Site-visit graph. ${site.shortName} has not yet been placed on it.`}">
        <i class="sv-axis sv-axis--y"></i><i class="sv-axis sv-axis--x"></i>
        <span class="sv-title sv-title--y">Designed for the most locals</span>
        <span class="sv-title sv-title--x">Designed for familiarity and comfortability</span>
        ${g ? `<span class="quad-dot" style="left:${(g.familiarity * 100).toFixed(1)}%; bottom:${(g.locals * 100).toFixed(1)}%"
              title="${site.shortName}"></span>` : ""}
      </div>
      ${g ? "" : `<p class="sv-note">Not yet placed on the site-visit graph.</p>`}
      <div class="sv-questions">
        <div>
          <h5>↑ Designed for the most locals</h5>
          <ul>
            <li>Who is the site designed for?</li>
            <li>How many faiths is it designed for?</li>
            <li>Are there community uses?</li>
            <li>Is there freedom and lingering?</li>
            <li>Are there activities or different uses at most times of the day?</li>
          </ul>
        </div>
        <div>
          <h5>→ Designed for familiarity and comfortability</h5>
          <ul>
            <li>Do people feel welcomed?</li>
            <li>Are people aware of how to use the space?</li>
            <li>Are sacred–secular distinctions clear?</li>
          </ul>
        </div>
      </div>
    </div>`;

  /* ---------------- process record ---------------- */
  const p = d.process || {};
  const spec = (title, items, note) => items && items.length ? `
    <div class="spec">
      <h4>${title}</h4>
      <div class="pill-row">${items.map(i => `<span class="proc-pill">${i}</span>`).join("")}</div>
      ${note ? `<p class="note">${note}</p>` : ""}
    </div>` : "";

  const quickLinks = d.quickLinks || site.quickLinks || [];

  /* ================================================================ page */
  mount.innerHTML = `

  <!-- ============ hero ============ -->
  <section class="detail-hero">
    <img class="hero-bg" src="${heroImg(site, 1)}" alt="">
    <div data-header-slot></div>

    <div class="wrap hero-title">
      <h1>${title}</h1>
      <p class="addr">${address}</p>
    </div>

    <div class="d-wrap hero-tags">
      <h2>Tags</h2>
      <div class="tag-groups">
        <div>
          <h3>Site</h3>
          <div class="htag-row">${(d.siteTags || []).map(t => `<span class="tag-pill">${t}</span>`).join("")}</div>
        </div>
        <div>
          <h3>Intervention</h3>
          <div class="htag-row">${(d.interventionTags || []).map(t => `<span class="tag-pill">${t}</span>`).join("")}</div>
        </div>
      </div>
    </div>
  </section>

  <div class="d-wrap">

    <!-- ============ overview ============ -->
    <section class="panel ov">
      <div class="ov-text">
        <h2>Overview</h2>
        <p>${d.overview || site.summary}</p>
        <p class="ov-status"><b>Status:</b> ${STATUS_LABEL[site.status]}<br><b>Last Updated:</b> ${d.lastChecked || "—"}</p>
        ${(d.siteTags || [])[2] ? `<span class="ov-pill">${d.siteTags[2]}</span>` : ""}
      </div>
      <div class="ov-axes">
        <div class="ov-rates">
          <div><h4>Sacredness</h4>${rate(d.sacrednessRating || "Medium", "ink")}</div>
          <div><h4>Publicness</h4>${rate((d.publicness && d.publicness.overall.replace(" Publicness", "")) || "Medium", "green")}</div>
          <div><h4>Interaction</h4>${rate((d.interaction && d.interaction.overall) || site.interaction, "red")}</div>
        </div>
        <div class="ov-tri">
          ${triangle}
          ${(d.siteTags || [])[4] ? `<span class="ov-pill">${d.siteTags[4]}</span>` : ""}
        </div>
      </div>
      <div class="ov-map" id="mini-map" role="application" aria-label="Map showing ${site.shortName}"></div>
      <div class="ov-links">
        <span class="lbl">Quick Links</span>
        ${quickLinks.map(l => `<a class="link-pill" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("")}
      </div>
    </section>

    <!-- ============ images + intervention descriptions ============ -->
    <section class="detail-section">
      <h2>Scroll site images and intervention descriptions</h2>
      <div class="gallery">
        <figure>${img(1)}${shotCap(site, 1)}</figure>
        <figure>${img(2)}${shotCap(site, 2)}</figure>
      </div>

      <div class="detail-cols">
        <div class="col-left">
          <figure class="fig-3">
            ${img(3)}
            ${(d.captions || {})[3]
              ? `<figcaption>${d.captions[3]}</figcaption>`
              : shotCap(site, 3)}
          </figure>

          <section class="panel proc">
            <h2 class="panel-title">Interventions <i>Process</i></h2>
            ${spec("Scale/s", p.scales, p.scaleNote)}
            ${spec("Included typologies", p.typologies, p.typologyNote)}
            ${spec("Delivery model", p.delivery, p.deliveryNote)}
            ${spec("Funding", p.funding, p.fundingNote)}
            ${spec("Planning application requirements", p.planning, p.planningNote)}
            ${p.notes ? `<div class="spec spec--notes"><h4>Notes</h4><p class="note">${p.notes}</p></div>` : ""}
          </section>
        </div>

        <div class="col-right">
          <section class="panel panel--buff uses">
            <h2 class="panel-title">Uses <i>${x.usesHeadline || ""}</i></h2>
            <div class="uses-rows">${usesRows(uses)}</div>
          </section>

          <section class="panel panel--buff timetable-panel">
            <h2 class="panel-title">Uses <i>Timetable</i></h2>
            ${timetableHTML()}
          </section>

          <section class="panel ctx">
            <figure class="ctx-fig">${img(5)}</figure>
            <div class="ctx-body">
              <h2 class="panel-title">Context</h2>
              <p>${d.context || ""}</p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <!-- ============ analysis ============ -->
    ${analysisHTML("publicness")}
    ${analysisHTML("interaction")}

    <!-- ============ bars + quadrant | tall photo ============ -->
    <section class="detail-section charts">
      <div class="charts-left">
        <section class="panel bars-card">
          <h4>Publicness</h4>
          <span class="bar bar--green" data-w="${(sc.publicness * 100).toFixed(0)}"></span>
          <span class="bar bar--red"   data-w="${(sc.interaction * 100).toFixed(0)}"></span>
          <h4>Interaction</h4>
        </section>
        <section class="panel quad-card">${quadrant}</section>
      </div>
      <figure class="charts-fig">${img(4)}</figure>
    </section>

    <!-- ============ community comments ============ -->
    <section class="panel detail-section comments">
      <h2 class="panel-title">Community comments</h2>
      <p class="body-sm" style="margin-top:8px">
        Know this site? Conditions on the ground change faster than any database.
        Comments are held locally in this prototype and are not sent anywhere.
      </p>
      <form class="comment-form" id="comment-form">
        <div class="field">
          <label for="c-name">Your name and connection to the site</label>
          <input type="text" id="c-name" placeholder="e.g. Anna, churchwarden">
        </div>
        <div class="field">
          <label for="c-text">Comment</label>
          <textarea id="c-text" placeholder="What have we got wrong, or missed?"></textarea>
        </div>
        <div><button class="btn btn--sm" type="submit">Post comment</button></div>
      </form>
      <div id="comment-list" style="margin-top:22px"></div>
    </section>

    <!-- ============ opportunity ============ -->
    ${o ? `
    <section class="panel detail-section opp" id="opportunity">
      <h2 class="panel-title">Opportunity</h2>
      <div class="opp-pills">
        <span class="opp-scale">${o.oppScale}</span>
        <div class="pill-row">${o.dimensions.map(dd => `<span class="dim dim--${dimSlug(dd)}">${dd === "Use" ? "Uses" : dd}</span>`).join("")}</div>
      </div>
      <h3 class="opp-head">${o.headline}</h3>
      <p class="opp-note">${o.note}</p>
      <p class="opp-meta"><b>Form of underuse</b> ${o.currentState} · <b>Who could lead</b> ${o.whoCouldLead}</p>
    </section>` : ""}

    <!-- ============ from the prototype: beyond the Figma frame ============ -->
    <section class="panel detail-section">
      <h2 class="panel-title">${site.shortName} <i>in full</i></h2>
      <div class="stack" style="margin-top:16px; max-width:78ch">
        ${site.story.map(par => `<p class="body">${par}</p>`).join("")}
      </div>
    </section>

    ${site.whatMadeItWork && site.whatMadeItWork.length ? `
    <section class="panel detail-section">
      <h2 class="panel-title">What made it <i>work</i></h2>
      <ul class="q-body" style="font-size:.9375rem; margin-top:14px; max-width:none">
        ${site.whatMadeItWork.map(w => `<li>${w}</li>`).join("")}
      </ul>
    </section>` : ""}

    <section class="panel panel--ink detail-section">
      <h2 class="panel-title">Sources</h2>
      <div class="sources-list">
        ${site.sources.map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label} ↗</a>`).join("")}
      </div>
      <p class="body-sm" style="margin-top:18px">
        Details checked against the sources above in ${d.lastChecked || "2026"}. If you know this
        site and can improve the entry, <a class="rule-link" href="submit.html">tell us</a>.
      </p>
    </section>

    <div class="detail-section">
      <div class="utility-row" style="border-top:1px solid var(--ink); padding-top:18px; margin-top:0">
        <span class="note"><strong>Related sites</strong></span>
        <a class="rule-link" href="case-studies.html">Keep browsing</a>
      </div>
      <div class="card-grid" id="related-grid"></div>
    </div>
  </div>`;

  /* ---------------- after render ---------------- */
  /* the Figma marks the section a site belongs to in the nav */
  document.body.dataset.page = site.isCaseStudy ? "case-studies.html" : "opportunities.html";
  renderChrome();

  /* the hero header is white-on-photo */
  const heroHead = mount.querySelector(".detail-hero .head-row");
  if (heroHead) {
    heroHead.classList.add("head-row--inverse");
    const m = heroHead.querySelector(".logo");
    if (m) m.classList.add("logo--inverse");
  }

  /* bars grow in once visible */
  const bars = mount.querySelectorAll(".bars-card .bar");
  const runBars = () => bars.forEach(b => { b.style.width = b.dataset.w + "%"; });
  if ("IntersectionObserver" in window && bars.length) {
    const io = new IntersectionObserver(es => {
      if (es.some(e => e.isIntersecting)) { runBars(); io.disconnect(); }
    }, { threshold: .3 });
    io.observe(bars[0].closest(".panel"));
  } else { runBars(); }

  /* mini map — the same CARTO Positron basemap as every other map here */
  if (typeof window.L !== "undefined") {
    const mini = window.L.map("mini-map", { scrollWheelZoom: false, zoomControl: false }).setView(site.coords, 15);
    addBasemap(mini);
    const tone = site.status === "opportunity" ? "#D96629" : site.status === "emerging" ? "#EE9A63" : "#0093A5";
    window.L.circleMarker(site.coords, {
      radius: 10, color: "#FFFFFF", weight: 2.5, fillColor: tone, fillOpacity: .95
    }).addTo(mini).bindPopup(`<div class="map-pop"><b>${site.shortName}</b><span>${address}</span></div>`);
    setTimeout(() => mini.invalidateSize(), 200);
  }

  /* community comments — local only */
  const KEY = `pwr-comments-${site.id}`;
  const listEl = document.getElementById("comment-list");
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
  const draw = () => {
    const items = load();
    listEl.innerHTML = items.length
      ? items.map(c => `<div class="comment"><p class="who">${c.who} · ${c.when}</p><p class="body-sm">${c.text}</p></div>`).join("")
      : `<p class="body-sm">No comments yet.</p>`;
  };
  draw();
  document.getElementById("comment-form").addEventListener("submit", e => {
    e.preventDefault();
    const who  = document.getElementById("c-name").value.trim() || "Anonymous";
    const text = document.getElementById("c-text").value.trim();
    if (!text) return;
    const items = load();
    items.unshift({ who, text, when: new Date().toISOString().slice(0, 10) });
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* storage unavailable */ }
    e.target.reset();
    draw();
  });

  /* related sites */
  const related = SITES
    .filter(s => s.id !== site.id)
    .map(s => ({
      s,
      score: (s.borough === site.borough ? 2 : 0)
           + s.uses.filter(u => site.uses.includes(u)).length
           + (s.governance === site.governance ? 1 : 0)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(r => (r.s.isCaseStudy ? caseCard(r.s) : oppCard(r.s)));
  document.getElementById("related-grid").innerHTML = related.join("");
});
