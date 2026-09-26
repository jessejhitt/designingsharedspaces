/* Interactive map. A muted CARTO basemap keeps the palette in charge.
   ?set=case  → case studies only
   ?set=opp   → opportunity sites only
   (no param) → everything */

document.addEventListener("DOMContentLoaded", () => {
  const COLORS = { established: "#0093A5", emerging: "#EE9A63", opportunity: "#D96629" };

  const set = new URLSearchParams(location.search).get("set");
  const data = set === "case" ? SITES.filter(s => s.isCaseStudy)
             : set === "opp"  ? SITES.filter(s => s.opportunity)
             : SITES;

  document.getElementById("map-title").textContent =
    set === "opp" ? "Opportunities" : set === "case" ? "Case Studies" : "The map";
  document.getElementById("back-link").href =
    set === "opp" ? "opportunities.html" : "case-studies.html";
  document.getElementById("map-count").innerHTML =
    `Showing <b>${data.length}</b> sites across ${new Set(data.map(s => s.borough)).size} boroughs`;

  const shell = document.querySelector(".map-shell");
  if (typeof window.L === "undefined") {
    shell.insertAdjacentHTML("beforeend", `
      <div class="map-fallback">
        <h3 class="h-block">The map needs an internet connection</h3>
        <p class="body">Basemap tiles could not be loaded. Browse the
           <a class="rule-link" href="case-studies.html">list instead</a>.</p>
      </div>`);
    return;
  }

  const map = window.L.map("map", { scrollWheelZoom: true });
  addBasemap(map);            /* CARTO Positron — see js/basemap.js */

  const layers = {
    established: window.L.layerGroup().addTo(map),
    emerging: window.L.layerGroup().addTo(map),
    opportunity: window.L.layerGroup().addTo(map)
  };
  const markers = {};
  const bounds = [];

  data.forEach(site => {
    const marker = window.L.circleMarker(site.coords, {
      radius: 9, color: "#FFFFFF", weight: 2.5,
      fillColor: COLORS[site.status], fillOpacity: .95
    });
    marker.bindPopup(`
      <div class="map-pop">
        <b>${site.shortName}</b>
        <span>${site.borough} · ${TAXONOMY.publicnessLabels[site.publicness]}</span>
        <a href="site.html?id=${site.id}${site.status === "opportunity" ? "#opportunity" : ""}">Open the entry →</a>
      </div>`);
    marker.addTo(layers[site.status]);
    markers[site.id] = marker;
    bounds.push(site.coords);
  });
  if (bounds.length) map.fitBounds(bounds, { padding: window.innerWidth > 760 ? [50, 50] : [22, 22] });   // phones: frame the sites closely

  ["established", "emerging", "opportunity"].forEach(k => {
    const box = document.getElementById(`toggle-${k}`);
    box.addEventListener("change", e => {
      e.target.checked ? layers[k].addTo(map) : map.removeLayer(layers[k]);
      renderList();
    });
  });

  const listEl = document.getElementById("map-list");
  function renderList() {
    const visible = data.filter(s => document.getElementById(`toggle-${s.status}`).checked);
    listEl.innerHTML = visible.map(s => `
      <button type="button" data-pan="${s.id}"
        style="display:flex; gap:10px; align-items:center; width:100%; background:none;
               border:0; border-top:1px solid var(--hair); padding:10px 2px; cursor:pointer;
               text-align:left; font-size:.875rem; color:var(--ink)">
        <span style="width:9px;height:9px;border-radius:50%;flex:none;background:${COLORS[s.status]}"></span>
        ${s.shortName}
      </button>`).join("");
    listEl.querySelectorAll("[data-pan]").forEach(btn => {
      btn.addEventListener("click", () => {
        const s = getSite(btn.dataset.pan);
        map.setView(s.coords, 16);
        markers[s.id].openPopup();
      });
    });
  }
  renderList();
});
