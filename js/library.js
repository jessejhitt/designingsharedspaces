/* ============================================================
   DESIGNING SHARED SPACES TOGETHER — the intervention board
   A photo board you scroll, keep from, and then read back as a
   set: what works together, what pulls against what.
   Needs data.js, detail-data.js, evidence.js, photos.js,
   interventions.js, ui.js
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  const $ = id => document.getElementById(id);
  const KEEP_KEY = "pwr-kept-interventions";

  /* ----------------------------------------------------------
     Kept set — remembered per browser, never sent anywhere
     ---------------------------------------------------------- */
  let kept = new Set();
  try {
    const raw = localStorage.getItem(KEEP_KEY);
    if (raw) JSON.parse(raw).forEach(id => { if (interventionById(id)) kept.add(id); });
  } catch (e) { /* private window, blocked storage — carry on without it */ }

  function saveKept() {
    try { localStorage.setItem(KEEP_KEY, JSON.stringify([...kept])); } catch (e) {}
  }

  /* ----------------------------------------------------------
     Filters — short row of chips, not a facet wall
     ---------------------------------------------------------- */
  const CHIPS = [
    { key: "all",       label: "Everything",        test: () => true },
    ...INTERVENTION_FAMILIES.map(f =>
      ({ key: "fam:" + f.key, label: f.name, tone: f.tone, test: iv => iv.family === f.key })),
    { key: "small",     label: "Small & cheap",     test: iv => iv.scale === "Small" },
    { key: "nopermit",  label: "No permission",     test: iv => iv.permissions.includes("none") },
    { key: "worship",   label: "Safe beside worship", test: iv => iv.sacredness.includes("Active worship") && iv.needs.noise <= 2 },
    { key: "outdoors",  label: "Outdoors",          test: iv => !!iv.outdoor }
  ];

  let filter = "all";
  let query = "";

  function buildChips() {
    $("bb-filters").innerHTML = CHIPS.map(c =>
      `<button type="button" class="bchip${c.key === filter ? " is-on" : ""}${c.tone ? " t-" + c.tone : ""}"
        data-chip="${c.key}">${c.label}</button>`).join("");
    $("bb-filters").querySelectorAll("[data-chip]").forEach(b => {
      b.addEventListener("click", () => {
        filter = b.dataset.chip;
        buildChips();
        renderBoard();
        window.scrollTo({ top: $("board").offsetTop - 130, behavior: "smooth" });
      });
    });
  }

  function haystack(iv) {
    return [iv.name, iv.one, iv.what, iv.taster, familyOf(iv.family).name,
            (iv.uses || []).join(" "), (photoOf(iv.id) || {}).place || ""]
      .join(" ").toLowerCase();
  }

  function visible() {
    const chip = CHIPS.find(c => c.key === filter) || CHIPS[0];
    return INTERVENTIONS.filter(iv =>
      chip.test(iv) && (!query || haystack(iv).includes(query)));
  }

  /* ----------------------------------------------------------
     The board
     ----------------------------------------------------------
     A CSS masonry column layout. Each tile keeps the photo's own
     aspect ratio, so the board reads as photographs rather than
     as a grid of equal boxes.
     ---------------------------------------------------------- */
  const SCALE_TONE = { Small: "sm", Medium: "md", Large: "lg" };

  function tile(iv) {
    const ph = photoOf(iv.id);
    const fam = familyOf(iv.family);
    const on = kept.has(iv.id);
    const ratio = ph ? (ph.h / ph.w) * 100 : 70;
    return `
      <article class="tile t-${fam.tone}${on ? " kept" : ""}" data-iv="${iv.id}">
        <button type="button" class="tile-photo" data-open="${iv.id}"
                aria-label="Open ${iv.name}">
          <span class="ph" style="padding-bottom:${ratio.toFixed(1)}%">
            ${ph ? `<img src="${ph.src}" alt="${ph.caption}" loading="lazy" decoding="async">` : ""}
          </span>
          <span class="tile-scale ${SCALE_TONE[iv.scale]}">${iv.scale}</span>
          <span class="tile-over">
            <b>${iv.name}</b>
            <i>${iv.one}</i>
          </span>
        </button>
        <button type="button" class="tile-keep${on ? " on" : ""}" data-keep="${iv.id}"
                aria-pressed="${on}" aria-label="${on ? "Remove" : "Keep"} ${iv.name}">
          <span aria-hidden="true">♥</span>
        </button>
        <div class="tile-foot">
          <h3>${iv.name}</h3>
          <p class="tile-cap">${ph ? `<em>${ph.place}</em> — ${ph.caption}` : iv.one}</p>
          <p class="tile-meta">
            <span class="fam-dot"></span>${fam.name}
            <span class="sep">·</span>${FUNDING_ROUTES[iv.funding].name}
          </p>
        </div>
      </article>`;
  }

  function renderBoard() {
    const hits = visible();
    $("lib-count").textContent = hits.length === INTERVENTIONS.length
      ? `All ${INTERVENTIONS.length} interventions`
      : `${hits.length} of ${INTERVENTIONS.length} interventions`;

    $("lib-empty").hidden = hits.length > 0;
    if (!hits.length) {
      $("lib-empty").innerHTML =
        `Nothing matches that. <button type="button" class="rule-link" id="lib-reset">Show everything</button>`;
      $("board").innerHTML = "";
      $("lib-reset")?.addEventListener("click", () => {
        filter = "all"; query = ""; $("lib-q").value = ""; buildChips(); renderBoard();
      });
      return;
    }

    $("board").innerHTML = hits.map(tile).join("");
    $("board").querySelectorAll("[data-open]").forEach(b =>
      b.addEventListener("click", () => openRecord(b.dataset.open)));
    /* the name and caption open the record too — on a phone that is where people tap */
    $("board").querySelectorAll(".tile-foot").forEach(f =>
      f.addEventListener("click", () => openRecord(f.closest(".tile").dataset.iv)));
    $("board").querySelectorAll("[data-keep]").forEach(b =>
      b.addEventListener("click", e => { e.stopPropagation(); toggleKeep(b.dataset.keep); }));
  }

  function toggleKeep(id) {
    if (kept.has(id)) kept.delete(id); else kept.add(id);
    saveKept();
    /* update in place rather than re-rendering the whole board */
    document.querySelectorAll(`[data-keep="${id}"]`).forEach(b => {
      const on = kept.has(id);
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", String(on));
      b.closest(".tile")?.classList.toggle("kept", on);
    });
    document.querySelectorAll(`[data-keeptoggle="${id}"]`).forEach(b => {
      const on = kept.has(id);
      b.textContent = on ? "Kept ✓" : "Keep this";
      b.classList.toggle("on", on);
    });
    renderKept();
  }

  /* ----------------------------------------------------------
     What you kept — and how the set holds together
     ---------------------------------------------------------- */
  $("bb-kept").addEventListener("click", () => {
    if (!kept.size) return;
    $("kept-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("kept-clear").addEventListener("click", () => {
    kept.clear(); saveKept(); renderBoard(); renderKept();
  });

  function renderKept() {
    $("kept-n").textContent = kept.size;
    $("bb-kept").classList.toggle("has", kept.size > 0);

    if (!kept.size) { $("kept-panel").hidden = true; return; }
    $("kept-panel").hidden = false;

    const list = [...kept].map(interventionById).filter(Boolean);

    $("kept-lede").textContent =
      `${list.length} intervention${list.length === 1 ? "" : "s"} on your board. ` +
      `Here they are in the order they can happen, and how well they sit together.`;

    /* order by permission weight, then scale — the same order the studio uses */
    const order = { none: 0, governance: 1, licence: 2, changeuse: 3, faculty: 4, planning: 5 };
    const scaleW = { Small: 0, Medium: 1, Large: 2 };
    const sorted = [...list].sort((a, b) =>
      (Math.min(...a.permissions.map(k => order[k] ?? 9)) - Math.min(...b.permissions.map(k => order[k] ?? 9))) ||
      (scaleW[a.scale] - scaleW[b.scale]));

    $("kept-grid").innerHTML = sorted.map((iv, i) => {
      const ph = photoOf(iv.id);
      const perm = PERMISSIONS.find(p => p.key === iv.permissions[0]);
      return `
        <div class="keptcard t-${familyOf(iv.family).tone}">
          <span class="n">${i + 1}</span>
          ${ph ? `<img src="${ph.src}" alt="" loading="lazy">` : ""}
          <div>
            <h4>${iv.name}</h4>
            <p>${iv.one}</p>
            <p class="km"><b>${iv.scale}</b> · ${perm ? perm.name : "—"} · ${FUNDING_ROUTES[iv.funding].name}</p>
            <p class="kt"><b>Test it</b> ${iv.taster}</p>
            <div class="ka">
              <button type="button" class="rule-link" data-open="${iv.id}">Full record</button>
              <button type="button" class="rule-link" data-keep="${iv.id}">Remove</button>
            </div>
          </div>
        </div>`;
    }).join("");

    $("kept-grid").querySelectorAll("[data-open]").forEach(b =>
      b.addEventListener("click", () => openRecord(b.dataset.open)));
    $("kept-grid").querySelectorAll("[data-keep]").forEach(b =>
      b.addEventListener("click", () => toggleKeep(b.dataset.keep)));

    renderCompat(list);
  }

  /* how the kept set holds together, pair by pair */
  function renderCompat(list) {
    const box = $("kept-compat");
    if (list.length < 2) {
      box.innerHTML = `<p class="compat-note">Keep a second intervention and the library will
        show you how the two work together.</p>`;
      return;
    }

    const pairs = [];
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const r = pairScore(list[i], list[j]);
        if (r) pairs.push({ a: list[i], b: list[j], ...r });
      }
    }
    const clashes = pairs.filter(p => p.verdict === "tension");
    const strong = pairs.filter(p => p.verdict === "strong").sort((x, y) => y.score - x.score);
    const careful = pairs.filter(p => p.verdict === "careful");

    /* what else would go well with everything kept so far */
    const scoreById = new Map();
    list.forEach(a => partnersFor(a.id, 14).forEach(p => {
      if (kept.has(p.iv.id)) return;
      scoreById.set(p.iv.id, (scoreById.get(p.iv.id) || 0) + p.score);
    }));
    const suggest = [...scoreById.entries()]
      .sort((x, y) => y[1] - x[1]).slice(0, 6).map(([id]) => interventionById(id));

    box.innerHTML = `
      <h3>How your set holds together</h3>
      <div class="compat-cols">
        <div class="cc cc--good">
          <h4>Work well together <span>${strong.length}</span></h4>
          ${strong.length ? `<ul>${strong.slice(0, 6).map(p => `
            <li><b>${p.a.name}</b> + <b>${p.b.name}</b><em>${p.why}</em></li>`).join("")}</ul>`
            : `<p class="none">No strong pairings yet — these mostly sit in different parts of the site.</p>`}
        </div>
        <div class="cc cc--care">
          <h4>Plan the week <span>${careful.length}</span></h4>
          ${careful.length ? `<ul>${careful.slice(0, 5).map(p => `
            <li><b>${p.a.name}</b> + <b>${p.b.name}</b><em>${p.why}</em></li>`).join("")}</ul>`
            : `<p class="none">Nothing here needs careful timetabling.</p>`}
        </div>
        <div class="cc cc--clash">
          <h4>Pull against each other <span>${clashes.length}</span></h4>
          ${clashes.length ? `<ul>${clashes.map(p => `
            <li><b>${p.a.name}</b> vs <b>${p.b.name}</b><em>${p.why}</em></li>`).join("")}</ul>`
            : `<p class="none">Nothing on your board conflicts. You can pursue all of it.</p>`}
        </div>
      </div>

      ${suggest.length ? `
        <h3 class="compat-more">Goes well with what you have kept</h3>
        <div class="suggest-row">
          ${suggest.map(iv => {
            const ph = photoOf(iv.id);
            return `
              <button type="button" class="sugg" data-open="${iv.id}">
                ${ph ? `<img src="${ph.src}" alt="" loading="lazy">` : ""}
                <span><b>${iv.name}</b><i>${iv.one}</i></span>
              </button>`;
          }).join("")}
        </div>` : ""}`;

    box.querySelectorAll("[data-open]").forEach(b =>
      b.addEventListener("click", () => openRecord(b.dataset.open)));
  }

  /* ----------------------------------------------------------
     The record drawer
     ---------------------------------------------------------- */
  let lastFocus = null;

  function openRecord(id) {
    const iv = interventionById(id);
    if (!iv) return;
    lastFocus = document.activeElement;
    $("iv-body").innerHTML = recordHTML(iv);
    $("iv-drawer").hidden = false;
    $("iv-scrim").hidden = false;
    document.body.classList.add("drawer-open");
    $("iv-drawer").scrollTop = 0;
    $("iv-close").focus();
    history.replaceState(null, "", "#i/" + id);
    bindDrawer();
  }

  function bindDrawer() {
    $("iv-body").querySelectorAll("[data-open]").forEach(b =>
      b.addEventListener("click", () => openRecord(b.dataset.open)));
    $("iv-body").querySelectorAll("[data-keeptoggle]").forEach(b =>
      b.addEventListener("click", () => toggleKeep(b.dataset.keeptoggle)));
    $("iv-body").querySelectorAll("[data-jump]").forEach(a =>
      a.addEventListener("click", e => {
        e.preventDefault();
        closeRecord();
        document.querySelector(a.getAttribute("href"))
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }));
  }

  function closeRecord() {
    $("iv-drawer").hidden = true;
    $("iv-scrim").hidden = true;
    document.body.classList.remove("drawer-open");
    history.replaceState(null, "", location.pathname + location.search);
    if (lastFocus) lastFocus.focus();
  }

  $("iv-close").addEventListener("click", closeRecord);
  $("iv-scrim").addEventListener("click", closeRecord);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !$("iv-drawer").hidden) closeRecord();
  });

  function recordHTML(iv) {
    const fam = familyOf(iv.family);
    const ph = photoOf(iv.id);
    const perms = iv.permissions.map(k => PERMISSIONS.find(p => p.key === k)).filter(Boolean);
    const fund = FUNDING_ROUTES[iv.funding];
    const on = kept.has(iv.id);
    const partners = partnersFor(iv.id, 6);
    const clashes = tensionsFor(iv.id);

    const needBar = (label, v) => `
      <div class="need"><span>${label}</span>
        <i class="bar"><b style="width:${(v / 5) * 100}%"></b></i><em>${v}/5</em></div>`;

    return `
      ${ph ? `<figure class="iv-hero">
        <img src="${ph.src}" alt="${ph.caption}">
        <figcaption><b>${ph.place}</b> ${ph.caption}</figcaption>
      </figure>` : ""}

      <p class="iv-fam tone-${fam.tone}">${fam.name}</p>
      <h2 id="iv-title">${iv.name}</h2>
      <p class="iv-lead">${iv.one}</p>

      <button type="button" class="keepbtn${on ? " on" : ""}" data-keeptoggle="${iv.id}">
        ${on ? "Kept ✓" : "Keep this"}
      </button>

      <div class="iv-facts">
        <div><b>Scale</b><span>${iv.scale}</span></div>
        <div><b>Cost</b><span>${iv.cost}</span></div>
        <div><b>Timescale</b><span>${iv.timescale}</span></div>
        <div><b>Reversible</b><span>${iv.reversible}</span></div>
      </div>

      <h4>What it is</h4>
      <p>${iv.what}</p>

      <h4>Test it in a week</h4>
      <p class="iv-taster">${iv.taster}</p>
      <p class="body-sm"><a href="#taster" data-jump class="rule-link">How to run a taster session →</a></p>

      <h4>How to do it</h4>
      <ol class="iv-steps">${iv.how.map(s => `<li>${s}</li>`).join("")}</ol>

      <h4>What goes wrong</h4>
      <ul class="iv-watch">${iv.watch.map(s => `<li>${s}</li>`).join("")}</ul>

      <h4>Works well with</h4>
      <div class="partners">
        ${partners.map(p => {
          const pp = photoOf(p.iv.id);
          return `
            <button type="button" class="partner v-${p.verdict}" data-open="${p.iv.id}">
              ${pp ? `<img src="${pp.src}" alt="" loading="lazy">` : ""}
              <span>
                <b>${p.iv.name}</b>
                <i>${p.why}</i>
                <u>${p.verdict === "strong" ? "Strong pairing" : p.verdict === "good" ? "Works" : "Plan the week"}</u>
              </span>
            </button>`;
        }).join("")}
      </div>

      ${clashes.length ? `
        <h4>Pulls against</h4>
        <div class="partners">
          ${clashes.map(p => `
            <button type="button" class="partner v-tension" data-open="${p.iv.id}">
              <span><b>${p.iv.name}</b><i>${p.why}</i><u>Needs separate rooms or hours</u></span>
            </button>`).join("")}
        </div>` : ""}

      <h4>Where it fits</h4>
      <div class="iv-tags">${iv.zones.map(z => `<span class="tag">${ZONE_TYPES[z].short}</span>`).join("")}</div>
      <p class="body-sm" style="margin-top:10px">Works with:
        ${iv.sacredness.map(s => `<strong>${s}</strong>`).join(" · ")}.
        ${iv.outdoor ? "Needs outdoor ground." : ""}</p>

      <h4>What the site needs first</h4>
      <p class="body-sm">On the 0–5 scale the <a href="studio.html" class="rule-link">site studio</a> uses.</p>
      <div class="needs">
        ${needBar("Space in use", iv.needs.size)}
        ${needBar("Noise tolerated", iv.needs.noise)}
        ${needBar("Openness", iv.needs.openness)}
        ${needBar("Facilities", iv.needs.facilities)}
      </div>

      <h4>What it changes</h4>
      <div class="iv-tags">${iv.dims.map(d => `<span class="dim dim--${dimSlug(d)}">${d}</span>`).join("")}</div>

      <h4>Design questions</h4>
      <div class="iv-tags">
        ${iv.themes.map(t => { const th = themeOf(t);
          return th ? `<a class="tag tag--link" href="#checklist" data-jump>${th.name}</a>` : ""; }).join("")}
      </div>

      <h4>Permission</h4>
      <ul class="iv-perm">
        ${perms.map(p => `<li><b>${p.name}</b> — ${p.d}<br><em>${p.who} · ${p.time}</em></li>`).join("")}
      </ul>

      <h4>Funding</h4>
      <p><b>${fund.name}</b> — ${fund.d}</p>
      ${fund.where.length ? `<p class="body-sm">${fund.where.map(w => sourceLink(w)).join(" · ")}</p>` : ""}

      <h4>Seen at</h4>
      <div class="iv-precedents">
        ${iv.precedents.map(p => {
          const s = getSite(p.id);
          if (!s) return "";
          return `<a class="prec" href="site.html?id=${s.id}">
            <img src="images/${s.id}/1.jpg" alt="" loading="lazy" onerror="this.style.display='none'">
            <span><b>${s.name}</b><em>${s.borough} · ${STATUS_LABEL[s.status]}</em><i>${p.why}</i></span></a>`;
        }).join("")}
      </div>

      <h4>Sources</h4>
      <ul class="iv-sources">
        ${iv.sources.map(s => { const src = SOURCES[s];
          return src ? `<li><a href="${src.url}" target="_blank" rel="noopener">${src.title}</a><br>
            <em>${src.author}, ${src.year}</em></li>` : ""; }).join("")}
      </ul>

      <div class="iv-cta">
        <a class="btn" href="studio.html">Try this on your own site</a>
        <a class="btn btn--ghost" href="case-studies.html">Browse the case studies</a>
      </div>`;
  }

  /* ----------------------------------------------------------
     Reference sections
     ---------------------------------------------------------- */
  function buildThemes() {
    $("theme-list").innerHTML = GH_THEMES.map((t, i) => `
      <div class="theme tone-${t.tone}">
        <button type="button" class="theme-head" aria-expanded="false" data-theme="${i}">
          <span class="n">${String(i + 1).padStart(2, "0")}</span>
          <span class="tx"><b>${t.name}</b><em>${t.lead}</em></span>
          <span class="sign">+</span>
        </button>
        <div class="theme-body">
          <h4>Ask</h4>
          <ul>${t.questions.map(q => `<li>${q}</li>`).join("")}</ul>
          <h4>Seen in practice</h4>
          <p>${t.inPractice}</p>
          <h4>In a sacred building</h4>
          <p class="sacred">${t.forWorship}</p>
          <p class="src">${sourceCite(t.source)} · ${sourceLink(t.source)}</p>
        </div>
      </div>`).join("");

    $("theme-list").querySelectorAll("[data-theme]").forEach(b =>
      b.addEventListener("click", () => {
        const box = b.closest(".theme");
        const open = box.classList.toggle("open");
        b.setAttribute("aria-expanded", open ? "true" : "false");
      }));
  }

  function buildTaster() {
    $("taster-why").textContent = TASTER_PLAYBOOK.why;
    $("taster-time").textContent = TASTER_PLAYBOOK.timescale;
    $("taster-cost").textContent = TASTER_PLAYBOOK.cost;
    $("taster-steps").innerHTML = TASTER_PLAYBOOK.steps.map(s => `
      <div class="tstep"><span class="n">${s.n}</span>
        <div><h3>${s.title}</h3><p>${s.d}</p>
        <p class="tip"><b>Tip</b> ${s.tip}</p></div></div>`).join("");
    $("taster-watch").innerHTML = TASTER_PLAYBOOK.watchOut.map(w => `<li>${w}</li>`).join("");
  }

  function buildBefore() {
    $("before-list").innerHTML = GH_BEFORE.map(s => `
      <div class="step"><span class="n">${s.n}</span>
        <div><h3>${s.title}</h3><p class="lead">${s.lead}</p>
        <ul>${s.points.map(p => `<li>${p}</li>`).join("")}</ul>
        <p class="sacred"><b>In a place of worship</b> ${s.forWorship}</p>
        <p class="src">${sourceLink(s.source)}</p></div></div>`).join("");
  }

  function buildEdp() {
    $("edp-list").innerHTML = EDP_AREAS.map(a => `
      <div class="edp"><h3>${a.name}</h3><p class="lead">${a.lead}</p>
        <ul>${a.points.map(p => `<li>${p}</li>`).join("")}</ul>
        <p class="case"><b>From the research</b> ${a.failure}</p>
        <p class="src">${sourceLink(a.source)}</p></div>`).join("");
  }

  function buildPermissions() {
    $("perm-body").innerHTML = PERMISSIONS.map(p => `
      <tr><td><strong>${p.name}</strong></td>
        <td>${p.d}${p.note ? `<br><em>${p.note}</em>` : ""}</td>
        <td>${p.who}</td><td>${p.time}</td></tr>`).join("");
  }

  function buildFunding() {
    $("fund-list").innerHTML = Object.entries(FUNDING_ROUTES).map(([k, f]) => {
      const n = INTERVENTIONS.filter(i => i.funding === k).length;
      return `<div class="fund"><h3>${f.name}<span>${n}</span></h3><p>${f.d}</p>
        ${f.where.length ? `<p class="src">${f.where.map(w => sourceLink(w)).join(" · ")}</p>` : ""}</div>`;
    }).join("");
  }

  function buildResources() {
    $("res-list").innerHTML = SOURCE_LIST.map(s => `
      <div class="res"><h3><a href="${s.url}" target="_blank" rel="noopener">${s.title}</a></h3>
        <p class="by">${s.author} · ${s.year}</p><p>${s.note}</p></div>`).join("");
  }

  /* ----------------------------------------------------------
     Go
     ---------------------------------------------------------- */
  buildChips();
  buildThemes();
  buildTaster();
  buildBefore();
  buildEdp();
  buildPermissions();
  buildFunding();
  buildResources();
  renderBoard();
  renderKept();

  let qTick;
  $("lib-q").addEventListener("input", e => {
    clearTimeout(qTick);
    const v = e.target.value.trim().toLowerCase();
    qTick = setTimeout(() => { query = v; renderBoard(); }, 120);
  });

  if (location.hash.startsWith("#i/")) {
    const id = location.hash.slice(3);
    if (interventionById(id)) setTimeout(() => openRecord(id), 120);
  }
});
