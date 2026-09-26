/* ============================================================
   Faceted filter engine.
     - OR within a facet   (tick two boroughs → either matches)
     - AND across facets   (borough AND governance AND …)
   Facet types, as named on the Figma:
     "multi"  multi select   — checkboxes
     "single" single select  — radio-style, one at a time
     "range"  scroll scale   — site value must be >= chosen level
   ============================================================ */

function createBrowse({ mount, data, groups, renderCard, emptyHint, onResults }) {
  const rail     = mount.querySelector(".filter-rail");
  const railBody = mount.querySelector(".filter-rail-inner");
  const grid     = mount.querySelector("[data-results]");
  const countEl  = mount.querySelector("[data-count]");
  const chipsEl  = mount.querySelector("[data-chips]");
  const state    = {};
  const facets   = [];

  groups.forEach(g => g.subs.forEach(f => facets.push(f)));

  /* ---------------- build the rail ---------------- */
  railBody.innerHTML = `
    <div class="filter-head">
      <span class="lbl">Filter</span>
      <button class="clear-filters" data-clear type="button">Clear all</button>
    </div>
    ${groups.map(g => `
      <div class="filter-group">
        <h3>${g.title}</h3>
        ${g.hint ? `<p class="hint">${g.hint}</p>` : ""}
        ${g.subs.map(facetHTML).join("")}
      </div>`).join("")}
    <button class="rail-done" data-rail-done type="button">Show results</button>`;

  function facetHTML(f) {
    const kindLabel = { single: "single select", multi: "multi select", range: "scroll scale" }[f.type || "multi"];
    const head = f.label
      ? `<h4>${f.label}<span class="kind">${kindLabel}</span></h4>`
      : "";

    if (f.type === "range") {
      state[f.key] = 1;
      return `
        <div class="filter-sub">
          ${head}
          <div class="range-wrap">
            <input type="range" min="1" max="5" step="1" value="1" style="--fill:0%"
                   data-range="${f.key}" aria-label="${f.label || f.key} — minimum level">
            <div class="range-labels"><span>L1</span><span>L2</span><span>L3</span><span>L4</span><span>L5</span></div>
            <div class="range-value" data-range-value="${f.key}">Any level of publicness</div>
          </div>
        </div>`;
    }

    state[f.key] = new Set();
    const counts = {};
    data.forEach(s => {
      const v = f.get(s);
      (Array.isArray(v) ? v : [v]).forEach(x => { if (x != null) counts[x] = (counts[x] || 0) + 1; });
    });
    const options = f.options.filter(o => counts[o]);
    const single  = f.type === "single";
    return `
      <div class="filter-sub">
        ${head}
        <div class="checks${single ? " single" : ""}">
          ${options.map(o => `
            <label>
              <input type="checkbox" data-facet="${f.key}"${single ? ' data-single="1"' : ""} value="${o}">
              <span>${o}</span><span class="count">${counts[o]}</span>
            </label>`).join("")}
        </div>
      </div>`;
  }

  /* ---------------- events ---------------- */
  railBody.addEventListener("change", e => {
    const box = e.target.closest("input[type=checkbox][data-facet]");
    if (!box) return;
    const key = box.dataset.facet;
    if (box.dataset.single) {
      railBody.querySelectorAll(`input[data-facet="${key}"]`).forEach(b => { if (b !== box) b.checked = false; });
      state[key].clear();
      if (box.checked) state[key].add(box.value);
    } else {
      box.checked ? state[key].add(box.value) : state[key].delete(box.value);
    }
    apply();
  });

  railBody.addEventListener("input", e => {
    const r = e.target.closest("input[data-range]");
    if (!r) return;
    state[r.dataset.range] = Number(r.value);
    r.style.setProperty("--fill", ((r.value - 1) / 4 * 100) + "%");
    railBody.querySelector(`[data-range-value="${r.dataset.range}"]`).innerHTML =
      r.value === "1" ? "Any level of publicness"
                      : `At least <b>${TAXONOMY.publicnessLabels[r.value]}</b>`;
    apply();
  });

  railBody.querySelector("[data-clear]").addEventListener("click", clearAll);

  function clearAll() {
    facets.forEach(f => {
      if (f.type === "range") {
        state[f.key] = 1;
        const r = railBody.querySelector(`input[data-range="${f.key}"]`);
        r.value = 1;
        r.style.setProperty("--fill", "0%");
        railBody.querySelector(`[data-range-value="${f.key}"]`).textContent = "Any level of publicness";
      } else {
        state[f.key].clear();
      }
    });
    railBody.querySelectorAll("input[type=checkbox]").forEach(b => (b.checked = false));
    apply();
  }

  /* ---------------- filtering ---------------- */
  function matches(site) {
    return facets.every(f => {
      if (f.type === "range") return f.get(site) >= state[f.key];
      const sel = state[f.key];
      if (!sel.size) return true;
      const v = f.get(site);
      return (Array.isArray(v) ? v : [v]).some(x => sel.has(x));
    });
  }

  function apply() {
    const results = data.filter(matches);
    grid.innerHTML = results.length
      ? results.map(renderCard).join("")
      : `<div class="empty-state" style="grid-column:1/-1">
           <h3>No sites match this combination — yet</h3>
           <p>${emptyHint}</p>
           <p style="margin-top:12px"><a class="rule-link" href="submit.html">Know one? Submit it.</a></p>
         </div>`;
    if (countEl) countEl.innerHTML = `Showing <b>${results.length}</b> of ${data.length} sites`;
    const done = railBody.querySelector("[data-rail-done]");
    if (done) done.textContent = `Show ${results.length} ${results.length === 1 ? "site" : "sites"}`;
    renderChips();
    updateToggle();
    if (onResults) onResults(results);     // lets a map follow the filters
  }

  function renderChips() {
    const chips = [];
    facets.forEach(f => {
      if (f.type === "range") {
        if (state[f.key] > 1) chips.push({ key: f.key, value: null, label: `Publicness ≥ L${state[f.key]}` });
      } else {
        state[f.key].forEach(v => chips.push({ key: f.key, value: v, label: v }));
      }
    });
    chipsEl.innerHTML = chips.map((c, i) =>
      `<button class="chip" type="button" data-chip="${i}" aria-label="Remove filter ${c.label}">${c.label}</button>`).join("");
    chipsEl.querySelectorAll("[data-chip]").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        const c = chips[i];
        const f = facets.find(x => x.key === c.key);
        if (f.type === "range") {
          state[c.key] = 1;
          const r = railBody.querySelector(`input[data-range="${c.key}"]`);
          r.value = 1;
          r.style.setProperty("--fill", "0%");
          railBody.querySelector(`[data-range-value="${c.key}"]`).textContent = "Any level of publicness";
        } else {
          state[c.key].delete(c.value);
          railBody.querySelectorAll(`input[data-facet="${c.key}"]`).forEach(b => {
            if (b.value === c.value) b.checked = false;
          });
        }
        apply();
      });
    });
  }

  /* ---------------- filter panel toggle ---------------- */
  const railToggle = mount.querySelector("[data-rail-toggle]");
  if (railToggle) {
    railToggle.addEventListener("click", () => {
      const open = rail.classList.toggle("open");
      railToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  /* on phones the panel is long: this button closes it and jumps to what it found */
  railBody.querySelector("[data-rail-done]")?.addEventListener("click", () => {
    rail.classList.remove("open");
    if (railToggle) railToggle.setAttribute("aria-expanded", "false");
    (rail.nextElementSibling || grid).scrollIntoView({ behavior: "smooth", block: "start" });
  });
  function activeCount() {
    return facets.reduce((n, f) =>
      n + (f.type === "range" ? (state[f.key] > 1 ? 1 : 0) : state[f.key].size), 0);
  }
  function updateToggle() {
    if (!railToggle) return;
    const n = activeCount();
    railToggle.innerHTML = `Filters${n ? ` <span class="n">${n}</span>` : ""}`;
  }

  apply();
}
