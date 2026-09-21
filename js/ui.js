/* ============================================================
   Shared chrome and render helpers.
   Load after data.js on every page.
   ============================================================ */

const NAV_ITEMS = [
  { href: "how-it-works.html",  label: "How it works" },
  { href: "case-studies.html",  label: "Case studies", also: ["map.html?set=case"] },
  { href: "opportunities.html", label: "Opportunities", also: ["map.html?set=opp"] },
  { href: "interventions.html", label: "Interventions" },
  { href: "toolkit.html",       label: "Toolkit" },
  { href: "studio.html",        label: "Site studio" }
];

/* One line under the wordmark, everywhere it appears. The header used to carry
   a different, questioning version ("Why do we need a creative database of case
   studies?"); the mark now says the same thing on every page. */
const MARK_LINE = "The creative database for designing interaction in underused religious spaces.";
const MARK_TAGLINE = { home: MARK_LINE, inner: MARK_LINE };

/* ---------- the boxed wordmark ---------- */
function markHTML({ large = false, inverse = false, tagline = MARK_TAGLINE.inner, href = "index.html" } = {}) {
  const cls = ["mark", large ? "mark--lg" : "", inverse ? "mark--inverse" : ""].filter(Boolean).join(" ");
  const inner = `<b>Planning<br>with<br>Religion</b><span>${tagline}</span>`;
  return href
    ? `<a class="${cls}" href="${href}" aria-label="Planning with Religion — home">${inner}</a>`
    : `<div class="${cls}">${inner}</div>`;
}

/* ---------- header ---------- */
function headerHTML(page, inverse, large) {
  const here = page + (location.search || "");
  const links = NAV_ITEMS.map(n => {
    const active = n.href === page || (n.also || []).some(a => a === here);
    return `<a href="${n.href}"${active ? ' class="active" aria-current="page"' : ""}>${n.label}</a>`;
  }).join("");
  return `
    <div class="wrap head-row${inverse ? " head-row--inverse" : ""}">
      ${markHTML({ inverse, large, href: large ? null : "index.html" })}
      <button class="nav-toggle" aria-expanded="false" aria-controls="mainnav">Menu</button>
      <nav class="site-nav" id="mainnav" aria-label="Main">${links}</nav>
    </div>`;
}

/* ---------- footer (the call-to-action block from the Figma) ---------- */
function footerHTML() {
  return `
    <div class="wrap footer-cta">
      ${markHTML({ large: true, tagline: MARK_TAGLINE.home })}
      <div>
        <h2 class="h-display">Think you know a site<br>that belongs here?</h2>
        <div class="btn-row">
          <a class="btn" href="submit.html">Submit now</a>
          <a class="btn btn--ghost" href="toolkit.html">Explore the toolkit</a>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="colophon">
        <span>Planning with Religion — a design research database of London's underused religious infrastructure.</span>
        <span>
          <a href="case-studies.html">Case studies</a> ·
          <a href="opportunities.html">Opportunities</a> ·
          <a href="interventions.html">Intervention library</a> ·
          <a href="studio.html">Site studio</a> ·
          <a href="map.html">Map</a> ·
          <a href="toolkit.html#glossary">Glossary</a> ·
          <a href="submit.html">Submit a site</a>
        </span>
      </div>
    </div>`;
}

let navToggleBound = false;

function renderChrome() {
  const page = document.body.dataset.page || "";
  const inverse = document.body.hasAttribute("data-header-inverse");
  const large = document.body.hasAttribute("data-header-large");

  /* header — into a slot if the page provides one, otherwise prepended */
  document.querySelectorAll("[data-header-slot]").forEach(slot => {
    if (!slot.dataset.filled) {
      slot.innerHTML = headerHTML(page, inverse, large);
      slot.dataset.filled = "1";
    }
  });
  if (!document.querySelector("[data-header-slot]") &&
      !document.body.hasAttribute("data-no-header") &&
      !document.querySelector("header.site-header")) {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = headerHTML(page, inverse);
    document.body.prepend(header);
  }

  /* footer — once */
  if (!document.body.hasAttribute("data-no-footer") && !document.querySelector("footer.site-footer")) {
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = footerHTML();
    document.body.append(footer);
  }

  if (!navToggleBound) {
    navToggleBound = true;
    document.addEventListener("click", e => {
      const t = e.target.closest(".nav-toggle");
      if (!t) return;
      const nav = t.parentElement.querySelector(".site-nav");
      const open = nav.classList.toggle("open");
      t.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
}

/* ---------- small helpers ---------- */
function getSite(id) { return SITES.find(s => s.id === id); }
function detailOf(id) { return (typeof DETAIL !== "undefined" && DETAIL[id]) || {}; }

const STATUS_LABEL = { established: "Established", emerging: "Emerging", opportunity: "Opportunity" };

function heroImg(site, n = 1) { return `images/${site.id}/${n}.jpg`; }

function figureHTML(site, n = 1, cls = "card-figure", withStatus = true) {
  return `
    <div class="${cls}">
      <img src="${heroImg(site, n)}" alt="${site.shortName}" loading="lazy"
           onerror="this.style.display='none'">
      ${withStatus ? `<span class="status status--${site.status}">${STATUS_LABEL[site.status]}</span>` : ""}
    </div>`;
}

/* dimension slug -> css modifier */
function dimSlug(d) { return d.toLowerCase().replace(/[^a-z]/g, ""); }

/* ---------- cards ---------- */
function caseCard(site) {
  const d = detailOf(site.id);
  return `
  <a class="card" href="site.html?id=${site.id}">
    ${figureHTML(site)}
    <div class="card-body">
      <h3 class="h-card">${site.name}</h3>
      <p class="summary">${site.summary}</p>
      <div class="card-foot">
        <div class="pill-row">
          <span class="pill pill--sm pill--ghost">${site.typology}</span>
          <span class="pill pill--sm pill--ghost">${site.sacredness}</span>
          <span class="pill pill--sm ${site.publicness >= 4 ? "pill--green" : ""}">${TAXONOMY.publicnessLabels[site.publicness]}</span>
          <span class="pill pill--sm ${site.interaction === "High" ? "pill--red" : ""}">${site.interaction} interaction</span>
        </div>
        <span class="card-borough">${site.borough}${d.lastChecked ? " · checked " + d.lastChecked : ""}</span>
      </div>
    </div>
  </a>`;
}

function oppCard(site) {
  const o = site.opportunity;
  return `
  <a class="card" href="site.html?id=${site.id}#opportunity" data-site="${site.id}">
    ${figureHTML(site)}
    <div class="card-body">
      <h3 class="h-card">${site.name}</h3>
      <p class="summary">${o.headline}. ${site.summary}</p>
      <div class="card-foot">
        <span class="pill pill--solid">${o.oppScale}</span>
        <div class="pill-row">
          ${o.dimensions.map(x => `<span class="dim dim--${dimSlug(x)}">${x}</span>`).join("")}
        </div>
        <span class="card-borough">${site.borough} · ${o.currentState}</span>
      </div>
    </div>
  </a>`;
}

/* ---------- scroll reveal ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: .08 });
  els.forEach(e => io.observe(e));
}

/* ---------- the landing page's scroll cue ----------
   It is an ordinary anchor so it still works without JavaScript, but a link
   to the hash the page is already on is a no-op: click Scroll, scroll back up,
   click Scroll again and nothing happens. So the scroll is done explicitly,
   and the URL is left clean. */
function initScrollCue() {
  const cue = document.querySelector(".scroll-cue");
  if (!cue) return;
  cue.addEventListener("click", e => {
    const target = document.querySelector(cue.getAttribute("href") || "");
    if (!target) return;                       // let the browser handle it
    e.preventDefault();
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: still ? "auto" : "smooth", block: "start" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  initReveal();
  initScrollCue();
});
