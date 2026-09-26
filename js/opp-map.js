/* ============================================================
   Opportunities as an interactive map.

   The four forms of underuse (opportunity.currentState) are the
   primary filter: one tile each, in the colour its pins use on the
   map. Pin size shows the scale of the opportunity. Tiles drive the
   same checkboxes as the "Form of underuse" group in the Filters
   panel, so the tiles, the panel, the active chips, the map and the
   list below it always agree.
   ============================================================ */

const FORMS = [
  { key: "Vacant building",      color: "#D96629",
    def: "A building standing empty and closed — the largest untapped interiors." },
  { key: "Open but passive",     color: "#0093A5",
    def: "Fully public and open daily, but socially quiet — nothing invites people to stay." },
  { key: "In use but underused", color: "#EE9A63",
    def: "Working, but used far below capacity — whole rooms and days lie idle." },
  { key: "Restoration underway", color: "#56636C",
    def: "Change already in progress — the moment to shape what the site becomes." }
];
const FORM_OF = Object.fromEntries(FORMS.map(f => [f.key, f]));
const SCALE_RADIUS = { Small: 9, Medium: 13, Large: 17 };

function initOppMap(data) {
  const tilesEl = document.getElementById("form-tiles");
  const panel   = document.getElementById("map-panel");
  const hint    = document.getElementById("map-hint");
  const empty   = document.getElementById("map-empty");
  const formBoxes = () => [...document.querySelectorAll('input[data-facet="currentState"]')];

  /* ---------------- the form-of-underuse tiles ---------------- */
  tilesEl.innerHTML = FORMS.map(f => {
    const n = data.filter(s => s.opportunity.currentState === f.key).length;
    return `
      <button type="button" class="form-tile" data-form="${f.key}" aria-pressed="false"
              style="--c:${f.color}"${n ? "" : " disabled"}>
        <span class="ft-top"><i class="ft-dot"></i><b>${f.key}</b><span class="ft-n">${n}</span></span>
        <span class="ft-def">${f.def}</span>
      </button>`;
  }).join("");

  tilesEl.addEventListener("click", e => {
    const tile = e.target.closest(".form-tile");
    if (!tile || tile.disabled) return;
    const box = formBoxes().find(b => b.value === tile.dataset.form);
    if (!box) return;
    box.checked = !box.checked;
    box.dispatchEvent(new Event("change", { bubbles: true }));   // the filter engine takes it from here
  });

  /* ---------------- the map ---------------- */
  const L = window.L;
  const markers = {};
  let map = null, layer = null, selected = null, first = true, lastKey = "";

  if (L) {
    map = L.map("opp-map", { scrollWheelZoom: false });
    addBasemap(map);          /* CARTO Positron — see js/basemap.js */
    layer = L.layerGroup().addTo(map);

    data.forEach(s => {
      const f = FORM_OF[s.opportunity.currentState] || { color: "#56636C" };
      const r = SCALE_RADIUS[s.opportunity.oppScale] || 11;
      const m = L.circleMarker(s.coords, {
        radius: r, color: "#FFFFFF", weight: 2.5, fillColor: f.color, fillOpacity: .92
      });
      m.baseRadius = r;
      m.bindTooltip(s.shortName, { direction: "top", offset: [0, -r] });
      m.on("click", ev => { L.DomEvent.stopPropagation(ev); select(s.id); });
      markers[s.id] = m;
    });

    /* scroll-zoom only once the map has been clicked, so the page still scrolls past it */
    map.on("click", () => { map.scrollWheelZoom.enable(); closePanel(); });
    map.on("mouseout", () => map.scrollWheelZoom.disable());
  } else {
    document.getElementById("opp-map").innerHTML = `
      <div class="map-fallback">
        <h3 class="h-block">The map needs an internet connection</h3>
        <p class="body">The list below still works — every filter applies to it.</p>
      </div>`;
    hint.hidden = true;
  }

  /* ---------------- selecting a site ---------------- */
  function select(id) {
    const s = getSite(id), o = s.opportunity;
    const f = FORM_OF[o.currentState] || { color: "#56636C" };
    selected = id;
    Object.entries(markers).forEach(([k, m]) =>
      m.setStyle(k === id ? { color: "#15181B", weight: 3.5 } : { color: "#FFFFFF", weight: 2.5 }));
    markers[id].bringToFront();

    panel.innerHTML = `
      <button type="button" class="mp-close" aria-label="Close">×</button>
      <img src="images/${id}/1.jpg" alt="${s.shortName}" onerror="this.remove()">
      <div class="mp-body">
        <div class="mp-form"><i style="background:${f.color}"></i>${o.currentState}</div>
        <h3>${s.name}</h3>
        <p class="mp-head">${o.headline}</p>
        <div class="pill-row">
          <span class="pill pill--solid pill--sm">${o.oppScale}</span>
          ${o.dimensions.map(d => `<span class="dim dim--${dimSlug(d)}">${d}</span>`).join("")}
        </div>
        <p class="mp-note">${o.note}</p>
        <p class="mp-meta"><b>Who could lead</b> ${o.whoCouldLead} · <b>Borough</b> ${s.borough}</p>
        <a class="btn btn--sm" href="site.html?id=${id}#opportunity">Open the entry</a>
      </div>`;
    panel.hidden = false;
    hint.hidden = true;
    panel.scrollTop = 0;
    panel.querySelector(".mp-close").addEventListener("click", closePanel);

    if (map) bringIntoView(s.coords);
  }

  /* The room the panel leaves free: it is 340px + 16px on the right (a bottom
     sheet on phones), plus space for a pin's name label. */
  function freePadding() {
    return window.innerWidth > 760
      /* left: zoom buttons end at 44px + half the widest name label (~85px) + margin */
      ? { tl: L.point(150, 110), br: L.point(460, 60) }
      : { tl: L.point(140, 90), br: L.point(30, 385) };   // the bottom sheet takes up to 62% of the map
  }

  /* Move only as far as needed to put the pin in the free area. This is a fly,
     not a pan: a fly cleanly replaces any filter fly still in progress, where
     stopping one mid-zoom snaps the zoom and that snap later overrides a pan. */
  function bringIntoView(latlng) {
    const { tl, br } = freePadding();
    const z = Math.round(map.getZoom());            // mid-flight the zoom is fractional
    const half = map.getSize().divideBy(2);
    const c = map.project(map.getCenter(), z);
    const p = map.project(latlng, z);
    const min = c.subtract(half).add(tl), max = c.add(half).subtract(br);
    const dx = p.x < min.x ? p.x - min.x : p.x > max.x ? p.x - max.x : 0;
    const dy = p.y < min.y ? p.y - min.y : p.y > max.y ? p.y - max.y : 0;
    if (!dx && !dy && z === map.getZoom()) return;
    map.flyTo(map.unproject(c.add([dx, dy]), z), z, { duration: .4 });
  }

  function closePanel() {
    if (!selected) return;
    selected = null;
    panel.hidden = true;
    if (map) hint.hidden = false;
    Object.values(markers).forEach(m => m.setStyle({ color: "#FFFFFF", weight: 2.5 }));
  }
  document.addEventListener("keydown", e => { if (e.key === "Escape") closePanel(); });

  function highlight(id, on) {
    const m = markers[id];
    if (!m) return;
    m.setRadius(on ? m.baseRadius * 1.4 : m.baseRadius);
    if (on) m.bringToFront();
  }

  /* ---------------- called by the filter engine on every change ---------------- */
  function update(results) {
    const ids = new Set(results.map(s => s.id));

    if (layer) Object.entries(markers).forEach(([id, m]) => ids.has(id) ? layer.addLayer(m) : layer.removeLayer(m));
    if (selected && !ids.has(selected)) closePanel();

    /* the tiles mirror the "Form of underuse" checkboxes */
    const on = new Set(formBoxes().filter(b => b.checked).map(b => b.value));
    tilesEl.classList.toggle("is-filtering", on.size > 0);
    tilesEl.querySelectorAll(".form-tile").forEach(t =>
      t.setAttribute("aria-pressed", on.has(t.dataset.form) ? "true" : "false"));

    empty.hidden = results.length > 0;

    /* frame whatever is left — but only when the set actually changed */
    const key = [...ids].sort().join("|");
    if (map && results.length && key !== lastKey) {
      const pts = results.map(s => s.coords);
      /* fly rather than zoom: Leaflet silently drops a zoom requested while
         another zoom is animating, so quick successive filter clicks could
         leave the map framing the wrong sites. A fly can always be replaced. */
      /* with a site open, frame the results in the space the panel leaves */
      const pad = selected ? { paddingTopLeft: freePadding().tl, paddingBottomRight: freePadding().br }
                           : { padding: window.innerWidth > 760 ? [70, 70] : [28, 28] };   // phones: less margin, closer framing
      if (first) {
        pts.length === 1 ? map.setView(pts[0], 15) : map.fitBounds(pts, { ...pad, maxZoom: 15 });
      } else if (pts.length === 1) {
        map.flyTo(pts[0], 15, { duration: .6 });
        if (selected) map.once("moveend", () => selected && bringIntoView(getSite(selected).coords));
      } else {
        map.flyToBounds(pts, { ...pad, maxZoom: 15, duration: .6 });
      }
    }
    lastKey = key;
    first = false;

    /* hovering a card in the list lights up its pin */
    document.querySelectorAll("[data-results] .card[data-site]").forEach(card => {
      card.addEventListener("mouseenter", () => highlight(card.dataset.site, true));
      card.addEventListener("mouseleave", () => highlight(card.dataset.site, false));
    });
  }

  document.querySelector("[data-clear-from-map]").addEventListener("click", () => {
    const clear = document.querySelector("[data-clear]");
    if (clear) clear.click();
  });

  return { update };
}
