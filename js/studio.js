/* ============================================================
   DESIGNING SHARED SPACES TOGETHER — the site studio
   One page, two ways in, one reading.
   Route A  "already in use"  → publicness diagnostic
   Route B  "mostly empty"    → draw the plot + fill the week
   Route C  "looking for space" → matched opportunity sites
   Everything renders live into the reading rail; nothing is
   stored or transmitted. Data structures follow js/data.js.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ----------------------------------------------------------
     Reference data
     ---------------------------------------------------------- */

  const DIMS = [
    { key: "ownership",  label: "Ownership",         small: "Who can actually say yes" },
    { key: "management", label: "Management",        small: "Keys, bookings, someone to ask" },
    { key: "physical",   label: "Physical access",   small: "Level entry, toilets, open doors" },
    { key: "perceptual", label: "Perceptual access", small: "Does the edge say come in?" },
    { key: "social",     label: "Social inclusivity",small: "Free to enter, welcome to all" },
    { key: "animation",  label: "Animation",         small: "How often something happens" }
  ];

  /* The drawable zone vocabulary. ZONE_TYPES lives in interventions.js
     so that the library and the studio describe a site with exactly the
     same words; the studio adds a default drawn size to each. */
  const ZONE_SIZE = {
    worship: [170, 112], chapel: [78, 62], aisle: [150, 52], community: [124, 88],
    cafe: [104, 78], kitchen: [76, 58], wc: [58, 48], entrance: [84, 52],
    undercroft: [140, 96], tower: [66, 66], office: [86, 64], store: [62, 50],
    play: [104, 84], outdoor: [176, 116], churchyard: [200, 140],
    garden: [140, 104], carpark: [160, 96]
  };
  const ZONES = Object.fromEntries(Object.entries(ZONE_TYPES).map(([k, z]) => {
    const [w, h] = ZONE_SIZE[k] || [120, 90];
    return [k, { label: z.label, short: z.short, noise: z.noise, colour: z.colour, d: z.d, w, h }];
  }));
  const ZONE_ORDER = ["worship", "chapel", "aisle", "community", "cafe", "kitchen", "wc",
                      "entrance", "undercroft", "tower", "office", "store", "play",
                      "outdoor", "churchyard", "garden", "carpark"];

  /* The timetable's activity kinds, and its four bands of the day. */
  const BANDS = [
    { key: "am",   initial: "M", label: "Morning",   hours: "07–12" },
    { key: "pm",   initial: "A", label: "Afternoon", hours: "12–17" },
    { key: "eve",  initial: "E", label: "Evening",   hours: "17–21" },
    { key: "late", initial: "L", label: "Late",      hours: "21–24" }
  ];
  const ROW_KINDS = {
    worship:    { label: "Worship",    tone: "worship" },
    community:  { label: "Community",  tone: "community" },
    commercial: { label: "Commercial", tone: "commercial" },
    quiet:      { label: "Quiet",      tone: "quiet" },
    outdoor:    { label: "Outdoors",   tone: "outdoor" }
  };

  const FACILITIES = ["Kitchen", "Toilets", "Step-free access", "Storage", "Heating", "Wi-Fi"];
  const CONTEXT = ["School or nursery", "High street", "Transport hub",
                   "Housing estate", "Park or canal walk", "Care home or clinic"];
  const CTX_PUBLIC = ["High street", "Transport hub"];

  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  /* Stakeholders the matcher tests against. Needs are 0–5 on the
     same scale as the site profile; `use` names the matching
     entry in TAXONOMY.uses. */
  const GROUPS = [
    { name: "Parent & toddler group",      kind: "community",  use: "Play",
      needs: { size: 2, noise: 3, openness: 4, facilities: 3 } },
    { name: "ESOL English classes",        kind: "community",  use: "Learning",
      needs: { size: 3, noise: 1, openness: 4, facilities: 2 } },
    { name: "Food pantry & community fridge", kind: "community", use: "Everyday services",
      needs: { size: 3, noise: 1, openness: 5, facilities: 5 } },
    { name: "Debt & benefits advice clinic", kind: "community", use: "Everyday services",
      needs: { size: 1, noise: 0, openness: 3, facilities: 2 } },
    { name: "Choir & music nights",        kind: "community",  use: "Culture & music",
      needs: { size: 3, noise: 5, openness: 3, facilities: 1 } },
    { name: "Quiet prayer & reflection circle", kind: "community", use: "Quiet & reflection",
      needs: { size: 1, noise: 0, openness: 5, facilities: 0 } },
    { name: "Gardening & nature volunteers", kind: "community", use: "Nature & gardening",
      needs: { size: 2, noise: 2, openness: 4, facilities: 1 }, wantsOutdoor: true },
    { name: "Independent café",            kind: "commercial", use: "Café",
      needs: { size: 2, noise: 2, openness: 5, facilities: 4 } },
    { name: "Post office / parcel counter", kind: "commercial", use: "Everyday services",
      needs: { size: 1, noise: 1, openness: 5, facilities: 2 } }
  ];

  /* Funding follows the intervention, not the other way round.
     Each shortfall dimension maps to what would fix it and how
     that kind of fix tends to be paid for. */
  const REMEDY = {
    facilities: { tip: "Add the practical kit — kitchen, toilets, storage",
                  route: "Capital works · heritage lottery or capital grant" },
    openness:   { tip: "Signal welcome — signage, porous edges, published hours",
                  route: "Small works · charitable giving & volunteer effort" },
    noise:      { tip: "Permit livelier use at set hours; keep one quiet room",
                  route: "Governance · PCC or trustees' sign-off — no funding needed" },
    size:       { tip: "Bring another room, the yard or more hours into use",
                  route: "Programming · council & public funds" },
    ready:      { tip: "Ready to host as the site stands",
                  route: "Agree terms and dates — no funding needed" }
  };

  const TIERS = [
    { key: "design",     name: "Design first",       small: "Signage, edges, seats — no partner needed" },
    { key: "community",  name: "Community partner",  small: "A needs-based use fills the week" },
    { key: "commercial", name: "Commercial anchor",  small: "Footfall, rent and a lease" }
  ];

  /* ----------------------------------------------------------
     State
     ---------------------------------------------------------- */
  const state = {
    mode: null,                 // "diagnostic" | "builder" | "seeker"
    sacredness: null,
    siteName: "",
    dims: { ownership: 3, management: 3, physical: 3, perceptual: 3, social: 3, animation: 3 },
    zones: [],                  // {id, type, x, y, w, h, a, b}
    placed: [],                 // {id, ivId, x, y, a}  interventions pinned to the plan
    zoneWeek: {},               // zoneId -> [0..2] x 7 — the quick week under the plot
    chosen: new Set(),          // intervention ids taken into the vision
    fac: new Set(),
    ctx: new Set(),
    pendingZone: null,
    dropping: null,             // intervention id awaiting a click on the plan
    nextId: 1,

    /* the timetable — two layers, each a list of rows.
       row: { id, name, kind, cells: Set("<day>-<band>") } */
    layer: "now",
    week: { now: [], vision: [] },
    weekNextId: 1,

    /* the deeper, ten-theme assessment: themeKey -> 0..5 or null */
    deep: {},
    deckFilter: "all",
    deckIndex: 0
  };
  GH_THEMES.forEach(t => state.deep[t.key] = null);

  const $ = id => document.getElementById(id);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  /* ==========================================================
     THE GUIDE — a scripted front door, not an oracle
     ========================================================== */
  const TREE = {
    start: {
      say: "Welcome to the studio. What brings you here?",
      opts: [
        { label: "My site already has uses", next: "activeSacred" },
        { label: "My site is mostly empty or locked", next: "underType" },
        { label: "I'm looking for space for a group", next: "seekNeed" }
      ]
    },
    activeSacred: {
      say: "Good — then the question is how public it manages to be. Is worship still active there?",
      opts: [
        { label: "Active worship", go: s => { s.sacredness = "Active worship"; openDiagnostic("Noted — the reading will assume worship rhythms need protecting, the way the Sherriff Centre keeps its Lady Chapel quiet."); } },
        { label: "Semi-secular",   go: s => { s.sacredness = "Semi-secular"; openDiagnostic("Noted — sacred traces within mainly secular use, like the Garden Museum. Score the site as it behaves today."); } },
        { label: "Secular",        go: s => { s.sacredness = "Secular"; openDiagnostic("Noted. Score the site as it behaves on an ordinary Tuesday."); } }
      ]
    },
    underType: {
      say: "Underuse is where this database began. Roughly what is the site?",
      opts: [
        { label: "A church building",        go: s => openBuilder("worship", "Start by drawing the plan — the worship space is on the plot to begin with. Add halls, rooms and grounds around it.") },
        { label: "A churchyard or cemetery", go: s => openBuilder("outdoor", "Grounds first, then — they're on the plot. Add any buildings, chapels or rooms that sit within them.") },
        { label: "A hall or ancillary rooms", go: s => openBuilder("community", "The hall is on the plot. Add the rest of the site around it, then fill in the week below.") }
      ]
    },
    seekNeed: {
      say: "Then you're reading the database from the other side. What does your group need?",
      opts: [
        { label: "A regular weekly slot",  go: () => openSeeker("weekly") },
        { label: "A one-off or seasonal event", go: () => openSeeker("oneoff") },
        { label: "A long-term home",       go: () => openSeeker("longterm") }
      ]
    }
  };

  function guideSay(text, who) {
    const log = $("guide-log");
    log.appendChild(el("div", "guide-msg" + (who === "you" ? " you" : ""), text));
    log.scrollTop = log.scrollHeight;
  }

  function guideNode(id) {
    const node = TREE[id];
    guideSay(node.say);
    const opts = $("guide-opts");
    opts.innerHTML = "";
    node.opts.forEach(o => {
      const b = el("button", "btn ghost", o.label);
      b.type = "button";
      b.addEventListener("click", () => {
        guideSay(o.label, "you");
        opts.innerHTML = "";
        if (o.next) guideNode(o.next);
        else o.go(state);
      });
      opts.appendChild(b);
    });
  }

  function guideReset() {
    state.mode = null; state.sacredness = null; state.siteName = "";
    state.zones = []; state.placed = []; state.pendingZone = null; state.dropping = null;
    state.zoneWeek = {};
    state.week = { now: [], vision: [] }; state.weekNextId = 1; state.layer = "now";
    state.chosen.clear(); state.fac.clear(); state.ctx.clear();
    state.deckFilter = "all"; state.deckIndex = 0;
    GH_THEMES.forEach(t => state.deep[t.key] = null);
    DIMS.forEach(d => state.dims[d.key] = 3);
    document.querySelectorAll(".toggle-tag[aria-pressed='true']")
      .forEach(b => b.setAttribute("aria-pressed", "false"));
    $("guide-log").innerHTML = "";
    $("guide-opts").innerHTML = "";
    $("workbench").hidden = true;
    $("seeker").hidden = true;
    ["deck", "week", "deep", "vision"].forEach(id => $(id).hidden = true);
    ["tool-diagnostic", "tool-builder", "tool-week", "tool-fac", "tool-ctx"].forEach(id => $(id).hidden = true);
    $("plot").querySelectorAll(".zone, .pin").forEach(z => z.remove());
    $("placed-list").hidden = true;
    $("deep-body").hidden = true;
    $("deep-toggle").setAttribute("aria-expanded", "false");
    $("deep-toggle").textContent = "Open the checklist";
    resetBasemap();
    guideNode("start");
  }
  $("guide-restart").addEventListener("click", guideReset);

  function showStudioSections() {
    ["deck", "week", "deep", "vision"].forEach(id => $(id).hidden = false);
  }

  function openDiagnostic(msg) {
    state.mode = "diagnostic";
    guideSay(msg);
    $("seeker").hidden = true;
    $("workbench").hidden = false;
    $("tool-diagnostic").hidden = false;
    $("tool-builder").hidden = true;
    $("tool-week").hidden = true;
    $("tool-fac").hidden = false;
    $("tool-ctx").hidden = false;
    showStudioSections();
    buildDiagnostic();
    if (!state.week.now.length) seedWeek("diagnostic");
    render();
    $("workbench").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openBuilder(seedType, msg) {
    state.mode = "builder";
    guideSay(msg);
    $("seeker").hidden = true;
    $("workbench").hidden = false;
    $("tool-diagnostic").hidden = true;
    $("tool-builder").hidden = false;
    $("tool-week").hidden = false;
    $("tool-fac").hidden = false;
    $("tool-ctx").hidden = false;
    showStudioSections();
    if (!state.zones.length && seedType) addZone(seedType, 40, 40);
    if (!state.week.now.length) seedWeek(seedType);
    if (mapState.map) setTimeout(() => { mapState.map.invalidateSize(); reprojectZones(); }, 80);
    render();
    $("workbench").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ==========================================================
     ROUTE C — seeker: match real opportunity sites
     ========================================================== */
  const SEEK = {
    weekly:  { title: "Sites with weeks to fill",
               note: "Ranked for temporal room — places already open whose weeks run quiet. A regular slot is the gentlest way in; most stewards will say yes to a trial term before anything permanent.",
               score: s => (s.opportunity.dimensions.includes("Temporality") ? 3 : 0) +
                           (s.opportunity.currentState === "In use but underused" ? 2 : 0) +
                           (s.publicness >= 3 ? 1 : 0) },
    oneoff:  { title: "Sites for an event",
               note: "Ranked for open, passive ground — high publicness, low activity, where a single well-made event proves what the place can hold.",
               score: s => (s.opportunity.currentState === "Open but passive" ? 3 : 0) +
                           (s.opportunity.dimensions.includes("Use") ? 2 : 0) +
                           (s.publicness >= 4 ? 1 : 0) },
    longterm:{ title: "Sites that could become a home",
               note: "Ranked for scale and vacancy — the projects that need a committed partner, a business plan and patience, in the way the Sherriff Centre or Grand Junction were made.",
               score: s => (s.opportunity.oppScale === "Large" ? 3 : s.opportunity.oppScale === "Medium" ? 2 : 0) +
                           (s.opportunity.currentState === "Vacant building" ? 2 : 0) +
                           (s.opportunity.dimensions.length >= 2 ? 1 : 0) }
  };

  function openSeeker(need) {
    state.mode = "seeker";
    const cfg = SEEK[need];
    guideSay("These are the live opportunity sites that fit best — every one is a real entry in the database, assessed and sourced.");
    $("workbench").hidden = true;
    const ranked = SITES.filter(s => s.opportunity)
      .map(s => ({ s, sc: cfg.score(s) }))
      .sort((a, b) => b.sc - a.sc)
      .slice(0, 3);
    $("seeker-title").textContent = cfg.title;
    $("seeker-note").textContent = cfg.note;
    $("seeker-grid").innerHTML = ranked.map(r => oppCard(r.s)).join("");
    $("seeker").hidden = false;
    $("seeker").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ==========================================================
     ROUTE A — diagnostic sliders
     ========================================================== */
  function pillFor(v) {
    if (v <= 1) return '<span class="pill low">Low</span>';
    if (v <= 3) return '<span class="pill mid">Medium</span>';
    return '<span class="pill high">High</span>';
  }

  function buildDiagnostic() {
    const box = $("diag-rows");
    box.innerHTML = DIMS.map(d => `
      <div class="diag-row">
        <label for="dg-${d.key}">${d.label}<small>${d.small}</small></label>
        <input type="range" id="dg-${d.key}" min="0" max="5" step="1"
               value="${state.dims[d.key]}" aria-label="${d.label}, 0 to 5">
        <span id="dgp-${d.key}">${pillFor(state.dims[d.key])}</span>
      </div>`).join("");
    DIMS.forEach(d => {
      $("dg-" + d.key).addEventListener("input", e => {
        state.dims[d.key] = Number(e.target.value);
        $("dgp-" + d.key).innerHTML = pillFor(state.dims[d.key]);
        render();
      });
    });
  }

  /* ==========================================================
     ROUTE B — the plot
     ========================================================== */
  const plot = $("plot");

  /* ----------------------------------------------------------
     The basemap under the plot.

     Search for the site, pan and zoom it into place, then draw
     on top. Each zone keeps the ground coordinates of its two
     corners, so when the map moves the plan is reprojected and
     stays registered to the real site — and the studio can read
     back its true size in metres.

     Aerial imagery from Esri, streets from CARTO, search from
     Nominatim. The tile definitions live in js/basemap.js so this
     plan uses the same basemap as every other map on the site.
     ---------------------------------------------------------- */
  const BASEMAPS = {
    satellite: BASEMAP_LAYERS.satellite,
    street:    BASEMAP_LAYERS.light
  };

  const mapState = { map: null, layer: null, kind: "satellite", moving: false };

  function bmMsg(t) {
    const n = $("bm-msg");
    if (!t) { n.hidden = true; n.textContent = ""; return; }
    n.hidden = false; n.textContent = t;
  }

  function ensureMap(center, zoom) {
    if (typeof window.L === "undefined") {
      bmMsg("The map needs an internet connection. The plan still works without one.");
      return null;
    }
    if (!mapState.map) {
      mapState.map = window.L.map("plot-map", {
        zoomControl: false, attributionControl: true, keyboard: false,
        scrollWheelZoom: true, doubleClickZoom: true
      }).setView(center || [51.5074, -0.1278], zoom || 19);
      setBasemap(mapState.kind);
      mapState.map.on("move zoom", () => { reprojectZones(); reprojectPins(); });
      mapState.map.on("moveend zoomend", updateScale);
      $("bm-controls").hidden = false;
      state.zones.forEach(anchorZone);       // register anything already drawn
      state.placed.forEach(anchorPin);
    }
    return mapState.map;
  }

  function setBasemap(kind) {
    mapState.kind = kind;
    if (!mapState.map) return;
    if (mapState.layer) { mapState.map.removeLayer(mapState.layer); mapState.layer = null; }
    const def = BASEMAPS[kind];
    if (def) mapState.layer = window.L.tileLayer(def.url, def.opts).addTo(mapState.map);
    plot.classList.toggle("has-map", !!def);   // see-through zones over imagery
    document.querySelectorAll("#bm-controls [data-layer]").forEach(b =>
      b.classList.toggle("is-on", b.dataset.layer === kind));
    updateScale();
  }

  function setMoveMode(on) {
    if (!mapState.map) return;
    mapState.moving = on;
    plot.classList.toggle("map-move", on);
    const btn = $("bm-mode");
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.textContent = on ? "Done — back to drawing" : "Move & zoom map";
  }

  /* remember where a zone's corners sit on the ground */
  function anchorZone(z) {
    if (!mapState.map) { z.a = null; z.b = null; return; }
    z.a = mapState.map.containerPointToLatLng([z.x, z.y]);
    z.b = mapState.map.containerPointToLatLng([z.x + z.w, z.y + z.h]);
  }

  /* put every anchored zone back where the ground says it belongs */
  function reprojectZones() {
    if (!mapState.map) return;
    state.zones.forEach(z => {
      if (!z.a || !z.b) return;
      const p1 = mapState.map.latLngToContainerPoint(z.a);
      const p2 = mapState.map.latLngToContainerPoint(z.b);
      z.x = p1.x; z.y = p1.y;
      z.w = Math.max(8, p2.x - p1.x);
      z.h = Math.max(8, p2.y - p1.y);
      const n = $("zone-" + z.id);
      if (n) {
        n.style.left = z.x + "px";  n.style.top = z.y + "px";
        n.style.width = z.w + "px"; n.style.height = z.h + "px";
      }
    });
  }

  function zoneArea(z) {
    if (!mapState.map || !z.a || !z.b) return 0;
    const m = mapState.map, LL = window.L.latLng;
    const across = m.distance(z.a, LL(z.a.lat, z.b.lng));
    const down   = m.distance(z.a, LL(z.b.lat, z.a.lng));
    return across * down;
  }

  function updateScale() {
    const out = $("plot-scale");
    if (!out) return;
    if (!mapState.map) { out.hidden = true; return; }
    const typed = state.zones.filter(z => z.type !== "pending");
    const total = typed.reduce((s, z) => s + zoneArea(z), 0);
    out.hidden = false;
    out.textContent = total > 0
      ? `${typed.length} zone${typed.length === 1 ? "" : "s"} · about ${Math.round(total).toLocaleString()} m² on the ground`
      : "Draw a zone and the studio measures it";
  }

  function goTo(lat, lon, label, zoom) {
    const z = zoom || 19;
    const m = ensureMap([lat, lon], z);
    if (!m) return;
    m.invalidateSize();
    m.setView([lat, lon], z, { animate: false });
    state.zones.forEach(anchorZone);   // keep the plan on screen, re-register it here
    state.placed.forEach(anchorPin);
    updateScale();
    setMoveMode(true);
    bmMsg(label
      ? `Showing ${label}. Drag and scroll to line the site up under your plan, then press “Done — back to drawing”.`
      : "Drag and scroll to line the site up under your plan, then press “Done — back to drawing”.");
  }

  function resetBasemap() {
    /* Leaflet can throw from inside a tile request that is still in flight, so
       tear the map down defensively and reset the panel either way. */
    if (mapState.map) {
      try { mapState.map.off(); mapState.map.remove(); } catch (e) { /* already gone */ }
    }
    mapState.map = null; mapState.layer = null;
    mapState.kind = "satellite";
    mapState.moving = false;
    plot.classList.remove("map-move", "has-map");
    const c = $("bm-controls"); if (c) c.hidden = true;
    const r = $("bm-results");  if (r) { r.hidden = true; r.innerHTML = ""; }
    const s = $("plot-scale");  if (s) s.hidden = true;
    const q = $("bm-q");        if (q) q.value = "";
    const pm = $("plot-map");   if (pm) { pm.style.opacity = 1; pm.innerHTML = ""; pm.className = "plot-map"; }
    const f = $("bm-fade");     if (f) f.value = 100;
    const mb = $("bm-mode");
    if (mb) { mb.setAttribute("aria-pressed", "false"); mb.textContent = "Move & zoom map"; }
    document.querySelectorAll("#bm-controls [data-layer]").forEach(b =>
      b.classList.toggle("is-on", b.dataset.layer === "satellite"));
    bmMsg(null);
  }

  /* ----------------------------------------------------------
     Search — UK first, London first.

     Postcodes go to postcodes.io, which is the Royal Mail /ONS
     dataset and exact. Everything else goes to Photon, an OSM
     geocoder that handles building and venue names far better
     than a plain address lookup ("St Mary Magdalene Paddington",
     "Tower Hamlets Cemetery Park"). Results are bounded to
     Greater London first, then widened to the rest of the UK
     only if London has nothing. Nominatim is kept as a last
     resort. None of the three needs an API key.
     ---------------------------------------------------------- */
  const LONDON = { lat: 51.5074, lon: -0.1278 };   /* the bias point */

  function ukPostcode(q) {
    const s = q.replace(/\s+/g, "").toUpperCase();
    if (/^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2}$/.test(s))
      return { kind: "postcodes", code: s.slice(0, -3) + " " + s.slice(-3) };
    if (/^[A-Z]{1,2}\d[A-Z\d]?$/.test(s))
      return { kind: "outcodes", code: s };
    return null;
  }

  /* a Photon feature → the two lines we show in the list */
  function photonLabel(p) {
    const name = p.name || [p.housenumber, p.street].filter(Boolean).join(" ")
              || p.postcode || p.city || "Unnamed place";
    const bits = [];
    if (p.street && p.street !== name)
      bits.push([p.housenumber, p.street].filter(Boolean).join(" "));
    if (p.district && p.district !== name) bits.push(p.district);
    if (p.city && p.city !== p.district && p.city !== name) bits.push(p.city);
    if (p.postcode) bits.push(p.postcode);
    return { name, sub: bits.join(", ") };
  }

  /* how close to sit depending on what was found */
  function zoomFor(p) {
    const v = p.osm_value || "";
    if (["cemetery", "nature_reserve", "park", "forest", "reservoir", "allotments"].includes(v)) return 17;
    if (p.housenumber || v === "place_of_worship" || v === "church" || p.osm_key === "building") return 19;
    return 18;
  }

  function showResults(rows) {
    const box = $("bm-results");
    box.innerHTML = "";
    rows.forEach(r => {
      const b = document.createElement("button");
      b.type = "button";
      const n = document.createElement("b");
      n.textContent = r.name;                       // text, never markup
      b.appendChild(n);
      if (r.fromDb) {
        const tag = document.createElement("i");
        tag.className = "bm-tag";
        tag.textContent = "in the database";
        n.appendChild(tag);
      }
      if (r.sub) {
        const s = document.createElement("span");
        s.textContent = r.sub;
        b.appendChild(s);
      }
      b.addEventListener("click", () => {
        box.hidden = true;
        $("bm-q").value = r.name;
        goTo(r.lat, r.lon, r.name, r.zoom);
      });
      box.appendChild(b);
    });
    box.hidden = false;
    bmMsg(null);
  }

  /* Sites already in the database resolve exactly, and beat any geocoder:
     "Grand Junction" is not in OpenStreetMap under that name, but it is
     right here in data.js with its coordinates. */
  function matchDatabase(q) {
    const tokens = q.toLowerCase().split(/[^a-z0-9]+/).filter(t => t.length > 1);
    if (!tokens.length) return [];
    return SITES
      .map(s => {
        const hay = [s.name, s.shortName, s.address, s.borough, s.typology]
          .join(" ").toLowerCase();
        const hits = tokens.filter(t => hay.includes(t)).length;
        return { s, hits };
      })
      .filter(r => r.hits === tokens.length || (tokens.length > 2 && r.hits >= tokens.length - 1))
      .sort((a, b) => b.hits - a.hits)
      .slice(0, 3)
      .map(r => ({
        name: r.s.name, sub: r.s.address, fromDb: true, zoom: 19,
        lat: r.s.coords[0], lon: r.s.coords[1]
      }));
  }

  /* One request, biased to central London. Biasing rather than bounding is
     what makes this work: "St Mary Magdalene Paddington" returns W2 ahead of
     the Richmond church of the same name, while "Sheffield Cathedral" still
     returns Sheffield. It also keeps us to a single call on a free service. */
  function photon(q) {
    return fetch("https://photon.komoot.io/api/?lang=en&limit=8"
                 + "&q=" + encodeURIComponent(q)
                 + "&lat=" + LONDON.lat + "&lon=" + LONDON.lon)
      .then(r => { if (!r.ok) throw new Error("photon"); return r.json(); })
      .then(d => (d.features || [])
        .filter(f => (f.properties.countrycode || "GB") === "GB")
        .map(f => {
          const p = f.properties, l = photonLabel(p);
          return { name: l.name, sub: l.sub, zoom: zoomFor(p),
                   lon: f.geometry.coordinates[0], lat: f.geometry.coordinates[1] };
        }));
  }

  function nominatimGB(q) {
    return fetch("https://nominatim.openstreetmap.org/search?format=jsonv2&limit=6"
                 + "&countrycodes=gb&q=" + encodeURIComponent(q),
                 { headers: { Accept: "application/json" } })
      .then(r => { if (!r.ok) throw new Error("nominatim"); return r.json(); })
      .then(rows => rows.map(row => {
        const parts = row.display_name.split(",");
        return { name: parts[0].trim(), sub: parts.slice(1, 4).join(",").trim(),
                 zoom: 18, lat: parseFloat(row.lat), lon: parseFloat(row.lon) };
      }));
  }

  function runSearch() {
    const q = $("bm-q").value.trim();
    if (!q) return;
    $("bm-results").hidden = true;
    $("bm-results").innerHTML = "";
    bmMsg("Searching…");

    /* 1 — a UK postcode is exact, so go straight there */
    const pc = ukPostcode(q);
    if (pc) {
      fetch(`https://api.postcodes.io/${pc.kind}/${encodeURIComponent(pc.code)}`)
        .then(r => r.json())
        .then(d => {
          const res = d && d.result;
          if (!res || res.latitude == null) throw new Error("no postcode");
          goTo(res.latitude, res.longitude, pc.code, pc.kind === "postcodes" ? 19 : 16);
        })
        .catch(() => {
          bmMsg("That postcode was not recognised — searching by name instead…");
          searchByName(q);
        });
      return;
    }
    searchByName(q);
  }

  /* 2 — the database first, then the biased geocoder, then Nominatim */
  function dedupe(rows) {
    const seen = new Set();
    return rows.filter(r => {
      const key = r.name.toLowerCase() + "@" + r.lat.toFixed(4) + "," + r.lon.toFixed(4);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 8);
  }

  function searchByName(q) {
    const db = matchDatabase(q);
    const noneMsg = "Nothing found in the UK. Try the postcode, or the building name and the street.";

    photon(q)
      .then(found => {
        const rows = dedupe(db.concat(found));
        if (rows.length) { showResults(rows); return; }
        return nominatimGB(q)
          .then(r => r.length ? showResults(dedupe(r)) : bmMsg(noneMsg));
      })
      .catch(() => {
        /* the geocoder is down or rate limited — fall back, and never lose
           a site the database already knows about */
        if (db.length) { showResults(db); return; }
        nominatimGB(q)
          .then(r => r.length ? showResults(dedupe(r)) : bmMsg(noneMsg))
          .catch(() => bmMsg("The search could not be reached. Keep drawing without a map, or try again."));
      });
  }

  $("bm-go").addEventListener("click", runSearch);
  $("bm-q").addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); runSearch(); }
  });
  $("bm-mode").addEventListener("click", () => setMoveMode(!mapState.moving));
  $("bm-fade").addEventListener("input", e => {
    $("plot-map").style.opacity = e.target.value / 100;
  });
  document.querySelectorAll("#bm-controls [data-layer]").forEach(b => {
    b.addEventListener("click", () => setBasemap(b.dataset.layer));
  });

  function addZone(type, x, y) {
    const def = ZONES[type];
    const bounds = plot.getBoundingClientRect();
    const w = def.w, h = def.h;
    const z = {
      id: state.nextId++, type,
      x: Math.min(Math.max(8, x), Math.max(8, bounds.width - w - 8)),
      y: Math.min(Math.max(8, y), Math.max(8, bounds.height - h - 8)),
      w, h
    };
    state.zones.push(z);
    state.zoneWeek[z.id] = [0, 0, 0, 0, 0, 0, 0];
    drawZone(z);
    anchorZone(z);
    updateScale();
    render();
  }

  function drawZone(z) {
    const def = ZONES[z.type];
    const node = el("div", "zone " + z.type + (def ? " c-" + def.colour : ""));
    node.id = "zone-" + z.id;
    node.style.left = z.x + "px"; node.style.top = z.y + "px";
    node.style.width = z.w + "px"; node.style.height = z.h + "px";
    node.innerHTML = `<span class="zl">${def ? def.short : "New zone"}</span>
      <button type="button" class="zx" aria-label="Remove this zone">×</button>`;
    plot.appendChild(node);

    node.querySelector(".zx").addEventListener("pointerdown", e => e.stopPropagation());
    node.querySelector(".zx").addEventListener("click", e => {
      e.stopPropagation();
      removeZone(z.id);
    });

    node.addEventListener("pointerdown", e => {
      if (e.target.classList.contains("zx")) return;
      e.preventDefault();
      node.setPointerCapture(e.pointerId);
      const rect = plot.getBoundingClientRect();
      const sx = e.clientX, sy = e.clientY, ox = z.x, oy = z.y;
      const move = ev => {
        z.x = Math.max(0, Math.min(rect.width - z.w, ox + ev.clientX - sx));
        z.y = Math.max(0, Math.min(rect.height - z.h, oy + ev.clientY - sy));
        node.style.left = z.x + "px"; node.style.top = z.y + "px";
      };
      const up = () => {
        node.removeEventListener("pointermove", move);
        node.removeEventListener("pointerup", up);
        anchorZone(z);                       // re-register it on the ground
        updateScale();
      };
      node.addEventListener("pointermove", move);
      node.addEventListener("pointerup", up);
    });
  }

  function removeZone(id) {
    state.zones = state.zones.filter(z => z.id !== id);
    delete state.zoneWeek[id];
    updateScale();
    if (state.pendingZone && state.pendingZone.id === id) {
      state.pendingZone = null;
      $("type-chips").hidden = true;
    }
    const n = $("zone-" + id);
    if (n) n.remove();
    render();
  }

  /* draw-to-create */
  plot.addEventListener("pointerdown", e => {
    if (mapState.moving) return;               // the map has the pointer
    /* placing an intervention takes precedence over drawing */
    if (state.dropping) {
      e.preventDefault();
      const r = plot.getBoundingClientRect();
      placeIntervention(state.dropping, e.clientX - r.left, e.clientY - r.top);
      return;
    }
    if (e.target !== plot && !e.target.classList.contains("compass")) return;
    if (state.pendingZone) return;             // finish typing the last one first
    e.preventDefault();
    plot.setPointerCapture(e.pointerId);
    const rect = plot.getBoundingClientRect();
    const sx = e.clientX - rect.left, sy = e.clientY - rect.top;
    const draft = el("div", "draft-rect");
    draft.style.left = sx + "px"; draft.style.top = sy + "px";
    plot.appendChild(draft);
    const move = ev => {
      const cx = Math.max(0, Math.min(rect.width, ev.clientX - rect.left));
      const cy = Math.max(0, Math.min(rect.height, ev.clientY - rect.top));
      draft.style.left = Math.min(sx, cx) + "px";
      draft.style.top = Math.min(sy, cy) + "px";
      draft.style.width = Math.abs(cx - sx) + "px";
      draft.style.height = Math.abs(cy - sy) + "px";
    };
    const up = () => {
      plot.removeEventListener("pointermove", move);
      plot.removeEventListener("pointerup", up);
      const w = parseFloat(draft.style.width) || 0;
      const h = parseFloat(draft.style.height) || 0;
      const x = parseFloat(draft.style.left), y = parseFloat(draft.style.top);
      draft.remove();
      if (w < 30 || h < 30) return;            // a click, not a drawing
      const z = { id: state.nextId++, type: "pending", x, y, w, h };
      state.zones.push(z);
      state.zoneWeek[z.id] = [0, 0, 0, 0, 0, 0, 0];
      drawZone(z);
      anchorZone(z);
      state.pendingZone = z;
      const chips = $("type-chips");
      chips.hidden = false;
      $("zone-" + z.id).classList.add("selected");
    };
    plot.addEventListener("pointermove", move);
    plot.addEventListener("pointerup", up);
  });

  /* ---------- the zone palette ----------
     Seventeen zone types rather than three, so a real site can be
     described: a chapel is not a hall, and a churchyard is not a yard. */
  function paletteHTML(attr) {
    return ZONE_ORDER.map(k => {
      const z = ZONES[k];
      return `<button type="button" class="zone-btn c-${z.colour}" ${attr}="${k}"
                title="${z.d}"><i></i>${z.short}</button>`;
    }).join("");
  }

  $("zone-palette").innerHTML = paletteHTML("data-add");
  $("type-palette").innerHTML = paletteHTML("data-type");

  /* type the pending zone */
  $("type-palette").addEventListener("click", e => {
    const b = e.target.closest("[data-type]");
    if (!b) return;
    const z = state.pendingZone;
    if (!z) return;
    z.type = b.dataset.type;
    const node = $("zone-" + z.id);
    node.className = "zone " + z.type + " c-" + ZONES[z.type].colour;
    node.querySelector(".zl").textContent = ZONES[z.type].short;
    state.pendingZone = null;
    $("type-chips").hidden = true;
    updateScale();
    render();
  });

  /* add-by-button (the touch-friendly path) */
  $("zone-palette").addEventListener("click", e => {
    const b = e.target.closest("[data-add]");
    if (!b) return;
    const n = state.zones.length;
    const bounds = plot.getBoundingClientRect();
    const cols = Math.max(2, Math.floor(bounds.width / 190));
    addZone(b.dataset.add, 20 + (n % cols) * 182, 20 + Math.floor(n / cols) * 122);
  });

  /* ==========================================================
     INTERVENTIONS ON THE PLAN
     A pin is anchored to the ground exactly as a zone is, so the
     proposal stays registered to the real site through a pan.
     ========================================================== */
  function beginDrop(ivId) {
    state.dropping = ivId;
    plot.classList.add("dropping");
    $("drop-hint").hidden = false;
    $("drop-hint").textContent =
      `Placing “${interventionById(ivId).name}” — click where it goes on the plan`;
    if (mapState.moving) setMoveMode(false);
    $("workbench").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function cancelDrop() {
    state.dropping = null;
    plot.classList.remove("dropping");
    $("drop-hint").hidden = true;
  }

  function placeIntervention(ivId, x, y) {
    const p = { id: state.nextId++, ivId, x, y, a: null };
    state.placed.push(p);
    state.chosen.add(ivId);
    anchorPin(p);
    drawPin(p);
    cancelDrop();
    render();
  }

  function anchorPin(p) {
    p.a = mapState.map ? mapState.map.containerPointToLatLng([p.x, p.y]) : null;
  }

  function reprojectPins() {
    if (!mapState.map) return;
    state.placed.forEach(p => {
      if (!p.a) return;
      const pt = mapState.map.latLngToContainerPoint(p.a);
      p.x = pt.x; p.y = pt.y;
      const n = $("pin-" + p.id);
      if (n) { n.style.left = p.x + "px"; n.style.top = p.y + "px"; }
    });
  }

  function drawPin(p) {
    const iv = interventionById(p.ivId);
    const fam = familyOf(iv.family);
    const node = el("div", "pin t-" + fam.tone);
    node.id = "pin-" + p.id;
    node.style.left = p.x + "px";
    node.style.top = p.y + "px";
    node.innerHTML =
      `<span class="pdot"></span><span class="plabel">${iv.name}</span>` +
      `<button type="button" class="px" aria-label="Remove ${iv.name} from the plan">×</button>`;
    plot.appendChild(node);

    node.querySelector(".px").addEventListener("pointerdown", e => e.stopPropagation());
    node.querySelector(".px").addEventListener("click", e => {
      e.stopPropagation();
      removePin(p.id);
    });

    node.addEventListener("pointerdown", e => {
      if (e.target.classList.contains("px")) return;
      e.preventDefault(); e.stopPropagation();
      node.setPointerCapture(e.pointerId);
      const rect = plot.getBoundingClientRect();
      const sx = e.clientX, sy = e.clientY, ox = p.x, oy = p.y;
      const move = ev => {
        p.x = Math.max(0, Math.min(rect.width, ox + ev.clientX - sx));
        p.y = Math.max(0, Math.min(rect.height, oy + ev.clientY - sy));
        node.style.left = p.x + "px"; node.style.top = p.y + "px";
      };
      const up = () => {
        node.removeEventListener("pointermove", move);
        node.removeEventListener("pointerup", up);
        anchorPin(p);
      };
      node.addEventListener("pointermove", move);
      node.addEventListener("pointerup", up);
    });
  }

  function removePin(id) {
    const p = state.placed.find(x => x.id === id);
    state.placed = state.placed.filter(x => x.id !== id);
    if (p && !state.placed.some(x => x.ivId === p.ivId)) state.chosen.delete(p.ivId);
    const n = $("pin-" + id);
    if (n) n.remove();
    render();
  }

  function renderPlaced() {
    const box = $("placed-list");
    if (!state.placed.length && !state.chosen.size) { box.hidden = true; return; }
    box.hidden = false;
    const rows = [...state.chosen].map(ivId => {
      const iv = interventionById(ivId);
      const pins = state.placed.filter(p => p.ivId === ivId).length;
      const fam = familyOf(iv.family);
      return `
        <div class="placed t-${fam.tone}">
          <b>${iv.name}</b>
          <span>${pins ? pins + " on the plan" : "chosen, not yet placed"}</span>
          <button type="button" data-place="${iv.id}">${pins ? "Place another" : "Place on plan"}</button>
          <button type="button" data-drop="${iv.id}" aria-label="Remove ${iv.name}">×</button>
        </div>`;
    }).join("");
    $("placed-rows").innerHTML = rows;
    $("placed-rows").querySelectorAll("[data-place]").forEach(b =>
      b.addEventListener("click", () => beginDrop(b.dataset.place)));
    $("placed-rows").querySelectorAll("[data-drop]").forEach(b =>
      b.addEventListener("click", () => {
        const id = b.dataset.drop;
        state.chosen.delete(id);
        state.placed.filter(p => p.ivId === id).forEach(p => { const n = $("pin-" + p.id); if (n) n.remove(); });
        state.placed = state.placed.filter(p => p.ivId !== id);
        render();
      }));
  }

  /* ==========================================================
     THE WEEK, ZONE BY ZONE — the quick version under the plot
     ----------------------------------------------------------
     One row per drawn zone, one cell per day, three states:
     empty → occasional use → in full use. It is the fast way to
     say how the site is used as drawn; the fuller activity
     timetable further down the page is for naming what happens
     and proposing a different week. Both feed the reading.
     ========================================================== */
  const ZW_STATES = ["empty", "occasional use", "in full use"];

  function renderZoneWeek() {
    const grid = $("week-grid");
    if (!grid) return;
    const typed = state.zones.filter(z => z.type !== "pending");
    if (!typed.length) {
      grid.innerHTML = '<div class="studio-empty" style="grid-column:1/-1">Draw or add a zone above and its week appears here.</div>';
      return;
    }
    let html = '<span></span>' + DAYS.map(d => `<span class="wh">${d}</span>`).join("");
    typed.forEach(z => {
      const def = ZONES[z.type];
      if (!state.zoneWeek[z.id]) state.zoneWeek[z.id] = [0, 0, 0, 0, 0, 0, 0];
      html += `<span class="wz ${z.type} c-${def.colour}">${def.label}</span>`;
      state.zoneWeek[z.id].forEach((s, i) => {
        html += `<button type="button" class="wcell" data-z="${z.id}" data-i="${i}" data-s="${s}"
                  aria-label="${def.label}, ${DAYS[i]}: ${ZW_STATES[s]}. Click to change."></button>`;
      });
    });
    grid.innerHTML = html;
    grid.querySelectorAll(".wcell").forEach(c => {
      c.addEventListener("click", () => {
        const zid = Number(c.dataset.z), i = Number(c.dataset.i);
        state.zoneWeek[zid][i] = (state.zoneWeek[zid][i] + 1) % 3;
        renderZoneWeek();
        const p = renderReading();
        renderDeck(p);
        renderVision();
        /* keep focus on the cell just clicked, so it can be cycled from the keyboard */
        grid.querySelector(`.wcell[data-z="${zid}"][data-i="${i}"]`)?.focus();
      });
    });
  }

  /* the timetable's "now" layer with the quick week folded in, for the advice line */
  function mergedNowStats() {
    const t = weekStats("now"), zw = zoneWeekStats();
    const empty = DAYS.map((d, i) => (!zw.days[i] && t.byDay[i] === 0) ? d : null).filter(Boolean);
    return { ...t,
      fill: Math.max(t.fill, zw.fill),
      slots: Math.max(t.slots, zw.any ? 1 : 0),
      emptyDays: empty.length, emptyDayNames: empty };
  }

  /* how full the quick week is: 0..1, plus which days anything happens */
  function zoneWeekStats() {
    const typed = state.zones.filter(z => z.type !== "pending" && state.zoneWeek[z.id]);
    const days = DAYS.map((_, i) => typed.some(z => state.zoneWeek[z.id][i] > 0));
    const sum = typed.reduce((a, z) => a + state.zoneWeek[z.id].reduce((x, y) => x + y, 0), 0);
    return { fill: typed.length ? sum / (typed.length * 7 * 2) : 0, days, any: sum > 0 };
  }

  /* ==========================================================
     THE WEEK — an editable timetable, in two layers
     ----------------------------------------------------------
     Rows are named activities rather than rooms, because that is
     how a building's week is actually argued about. Each row has
     a kind (worship, community, commercial, quiet, outdoors) and a
     set of filled cells, one per day per band of the day.

     Two layers are kept: the week as it is, and the week being
     proposed. The reading follows whichever is on screen, so the
     difference between them is legible as a change in publicness
     rather than as a list of good intentions.
     ========================================================== */
  const cellKey = (d, b) => d + "-" + b;

  function rows() { return state.week[state.layer]; }

  function addRow(name, kind, cells) {
    const r = { id: state.weekNextId++, name, kind, cells: new Set(cells || []) };
    rows().push(r);
    return r;
  }

  /* A starting week, so nobody faces an empty grid. What a site is
     decides what is already certain to be in it. */
  function seedWeek(seedType) {
    state.week.now = []; state.week.vision = []; state.weekNextId = 1;
    const was = state.layer;
    state.layer = "now";
    if (seedType === "outdoor" || seedType === "churchyard") {
      addRow("Grounds open", "outdoor", DAYS.flatMap((_, d) => ["am", "pm"].map(b => cellKey(d, b))));
    } else {
      addRow("Sunday worship", "worship", [cellKey(6, "am")]);
      addRow("Building open", "quiet", [cellKey(6, "am"), cellKey(6, "pm")]);
    }
    state.layer = was;
  }

  /* Example weeks, taken from the database's own case studies, so that
     a group can see what a full week actually looks like before
     proposing one. */
  const WEEK_PRESETS = {
    "sunday-only": {
      label: "A church open on Sundays only — the starting point",
      site: "st-patricks-wapping",
      note: "The commonest condition in this database: a building in a busy neighbourhood, unlocked for a few hours and empty the rest of the week. Everything in the intervention deck is a way out of this grid.",
      rows: [
        { name: "Sunday Mass", kind: "worship", cells: [[6, "am"]] },
        { name: "Building unlocked", kind: "quiet", cells: [[6, "am"], [6, "pm"]] }
      ]
    },
    "first-steps": {
      label: "First steps — a taster term",
      note: "What one taster session and two partners look like on the grid. No building work, no faculty: three governance decisions and a kettle. This is the week most sites can reach within one term.",
      rows: [
        { name: "Sunday worship", kind: "worship", cells: [[6, "am"]] },
        { name: "Quiet chapel open", kind: "quiet", cells: [[0, "am"], [1, "am"], [2, "am"], [3, "am"], [4, "am"], [5, "am"], [6, "am"], [6, "pm"]] },
        { name: "Toddler group", kind: "community", cells: [[1, "am"]] },
        { name: "Warm space & tea", kind: "community", cells: [[3, "pm"]] },
        { name: "Churchyard open", kind: "outdoor", cells: DAYS.flatMap((_, d) => [[d, "am"], [d, "pm"]]) }
      ]
    },
    "sherriff": {
      label: "The Sherriff Centre — six days a centre, Sundays a church",
      site: "sheriff-centre",
      note: "An everyday service anchors the week. The post office opens Monday to Friday, the café and soft play Monday to Saturday, and the whole centre closes on Sunday for worship — while a soundproofed Lady Chapel stays quiet throughout.",
      rows: [
        { name: "Post office", kind: "commercial", cells: [0, 1, 2, 3, 4].flatMap(d => [[d, "am"], [d, "pm"]]) },
        { name: "Sanctuary café", kind: "commercial", cells: [0, 1, 2, 3, 4, 5].flatMap(d => [[d, "am"], [d, "pm"]]) },
        { name: "Hullabaloo soft play", kind: "community", cells: [0, 1, 2, 3, 4, 5].flatMap(d => [[d, "am"], [d, "pm"]]).concat([[4, "eve"]]) },
        { name: "Additional-needs session", kind: "community", cells: [[0, "eve"]] },
        { name: "Weekly classes & hire", kind: "community", cells: [[1, "eve"], [2, "eve"], [3, "eve"]] },
        { name: "Gigs & Sofar Sounds", kind: "commercial", cells: [[4, "eve"], [5, "eve"]] },
        { name: "Sunday services", kind: "worship", cells: [[6, "am"]] },
        { name: "Lady Chapel — quiet", kind: "quiet", cells: DAYS.flatMap((_, d) => [[d, "am"], [d, "pm"]]) }
      ]
    },
    "grand-junction": {
      label: "Grand Junction — worship, learning and a venue in one nave",
      site: "grand-junction",
      note: "The fullest week in the database. Free daytime classes for adults and children, a café, evening concerts and club nights, and worship continuing in the nave and the undercroft chapel — with venue income paying for the free programme.",
      rows: [
        { name: "Café", kind: "commercial", cells: [0, 1, 2, 3, 4, 5].flatMap(d => [[d, "am"], [d, "pm"]]) },
        { name: "Adult classes — yoga, English, art", kind: "community", cells: [[0, "am"], [0, "pm"], [1, "am"], [1, "pm"], [2, "am"], [2, "pm"], [3, "am"]] },
        { name: "Children & family", kind: "community", cells: [[0, "am"], [1, "pm"], [3, "am"], [5, "am"]] },
        { name: "After-school clubs", kind: "community", cells: [[0, "pm"], [1, "pm"], [2, "pm"]] },
        { name: "Community choir", kind: "community", cells: [[0, "eve"]] },
        { name: "Concerts, ceilidhs & club nights", kind: "commercial", cells: [[2, "eve"], [3, "eve"], [4, "eve"], [5, "eve"], [4, "late"], [5, "late"]] },
        { name: "Event hire", kind: "commercial", cells: [[3, "eve"], [4, "eve"], [5, "eve"], [5, "late"]] },
        { name: "Reflective services — undercroft", kind: "worship", cells: [[0, "am"], [1, "am"], [2, "am"], [3, "am"], [4, "am"]] },
        { name: "Sunday Mass", kind: "worship", cells: [[6, "am"]] },
        { name: "Heritage tours", kind: "community", cells: [[2, "am"], [5, "pm"]] }
      ]
    },
    "green": {
      label: "A churchyard or cemetery week",
      site: "tower-hamlets-cemetery-park",
      note: "Green religious infrastructure runs on a different clock: open all day every day, with programmed activity layered over a base of everyday walking, and remembrance held apart from recreation.",
      rows: [
        { name: "Grounds open", kind: "outdoor", cells: DAYS.flatMap((_, d) => [[d, "am"], [d, "pm"]]) },
        { name: "Volunteer conservation", kind: "community", cells: [[2, "am"], [5, "am"]] },
        { name: "School & outdoor classroom", kind: "community", cells: [[1, "am"], [3, "am"]] },
        { name: "Guided walks", kind: "community", cells: [[5, "pm"], [6, "pm"]] },
        { name: "Remembrance & burials", kind: "quiet", cells: [[1, "pm"], [3, "pm"]] },
        { name: "Café / kiosk", kind: "commercial", cells: [[5, "am"], [5, "pm"], [6, "am"], [6, "pm"]] }
      ]
    }
  };

  function buildPresetMenu() {
    const sel = $("week-preset");
    sel.innerHTML = '<option value="">Choose…</option>' +
      Object.entries(WEEK_PRESETS).map(([k, p]) => `<option value="${k}">${p.label}</option>`).join("");
    sel.addEventListener("change", () => {
      const p = WEEK_PRESETS[sel.value];
      if (!p) return;
      state.week[state.layer] = [];
      const was = state.weekNextId;
      p.rows.forEach(r => addRow(r.name, r.kind, r.cells.map(c => cellKey(c[0], c[1]))));
      state.weekNextId = Math.max(was, state.weekNextId);
      renderWeek(); renderReading(); renderVision();
      guideSay(p.note);
      sel.value = "";
    });
  }

  /* ---------- the grid ---------- */
  let painting = null;                       // {on: true|false}

  function renderWeek() {
    const box = $("tt");
    const list = rows();

    const head =
      `<div class="tt-row tt-head">
         <span class="tt-label"></span>
         ${DAYS.map(d => `<span class="tt-day">${d}<i>${BANDS.map(b =>
             `<u title="${b.label}, ${b.hours}">${b.initial}</u>`).join("")}</i></span>`).join("")}
       </div>`;

    if (!list.length) {
      box.innerHTML = head +
        `<div class="studio-empty">This week is empty. Load an example above, add a row,
          or take an intervention from the deck — anything you choose there is offered a
          slot here.</div>`;
      return;
    }

    const body = list.map(r => {
      const cells = DAYS.map((_, d) => BANDS.map(b => {
        const k = cellKey(d, b.key);
        const on = r.cells.has(k);
        return `<button type="button" class="tt-cell${on ? " on" : ""}" data-r="${r.id}" data-k="${k}"
                  aria-pressed="${on}"
                  aria-label="${r.name}, ${DAYS[d]} ${b.label}${on ? ", in use" : ", empty"}"></button>`;
      }).join("")).join('<span class="tt-gap"></span>');
      const n = r.cells.size;
      return `
        <div class="tt-row k-${r.kind}">
          <span class="tt-label">
            <input type="text" value="${r.name.replace(/"/g, "&quot;")}" data-rename="${r.id}"
                   aria-label="Name of this timetable row">
            <em>${ROW_KINDS[r.kind].label} · ${n} slot${n === 1 ? "" : "s"}</em>
            <button type="button" class="tt-del" data-del="${r.id}" aria-label="Remove ${r.name}">×</button>
          </span>
          ${cells}
        </div>`;
    }).join("");

    box.innerHTML = head + body;

    box.querySelectorAll(".tt-cell").forEach(c => {
      c.addEventListener("pointerdown", e => {
        e.preventDefault();
        const r = list.find(x => x.id === Number(c.dataset.r));
        const on = r.cells.has(c.dataset.k);
        painting = { on: !on };
        paint(c);
      });
      c.addEventListener("pointerenter", () => { if (painting) paint(c); });
    });

    box.querySelectorAll("[data-rename]").forEach(i => {
      i.addEventListener("change", () => {
        const r = list.find(x => x.id === Number(i.dataset.rename));
        if (r) { r.name = i.value.trim() || "Untitled"; renderWeek(); renderReading(); renderVision(); }
      });
    });
    box.querySelectorAll("[data-del]").forEach(b => {
      b.addEventListener("click", () => {
        state.week[state.layer] = list.filter(x => x.id !== Number(b.dataset.del));
        renderWeek(); renderReading(); renderVision();
      });
    });

    renderWeekRead();
  }

  function paint(cell) {
    const r = rows().find(x => x.id === Number(cell.dataset.r));
    if (!r) return;
    if (painting.on) r.cells.add(cell.dataset.k); else r.cells.delete(cell.dataset.k);
    cell.classList.toggle("on", painting.on);
    cell.setAttribute("aria-pressed", String(painting.on));
    const lab = cell.closest(".tt-row").querySelector(".tt-label em");
    if (lab) lab.textContent = `${ROW_KINDS[r.kind].label} · ${r.cells.size} slot${r.cells.size === 1 ? "" : "s"}`;
    renderWeekRead();
    renderReading();
  }
  document.addEventListener("pointerup", () => {
    if (painting) { painting = null; renderVision(); }
  });

  /* how full is this week, and where are the holes */
  function weekStats(layer) {
    const list = state.week[layer] || [];
    const filled = new Set();
    const byDay = DAYS.map(() => 0);
    let kinds = new Set();
    list.forEach(r => {
      kinds.add(r.kind);
      r.cells.forEach(k => {
        filled.add(k);
        byDay[Number(k.split("-")[0])]++;
      });
    });
    const emptyDays = byDay.filter(n => n === 0).length;
    const total = DAYS.length * BANDS.length;
    return {
      fill: filled.size / total,
      slots: filled.size,
      emptyDays,
      byDay,
      kinds,
      rows: list.length,
      emptyDayNames: DAYS.filter((_, i) => byDay[i] === 0)
    };
  }

  function renderWeekRead() {
    const s = weekStats(state.layer);
    const other = state.layer === "now" ? weekStats("vision") : weekStats("now");
    const pct = Math.round(s.fill * 100);
    const label = state.layer === "now" ? "The week now" : "The proposed week";
    let gap = "";
    if (state.layer === "vision" && other.slots) {
      const d = s.slots - other.slots;
      gap = d > 0
        ? `<span class="wr-up">+${d} slots on the week you have now</span>`
        : d < 0 ? `<span class="wr-down">${d} slots against the week you have now</span>`
                : `<span>the same number of slots as now</span>`;
    }
    $("week-read").innerHTML = `
      <div class="wr">
        <b>${label}</b>
        <span>${s.slots} of ${DAYS.length * BANDS.length} slots filled — ${pct}%</span>
        <span>${s.emptyDays
          ? s.emptyDayNames.join(", ") + (s.emptyDays === 1 ? " is empty" : " are empty")
          : "no empty days"}</span>
        ${gap}
      </div>
      <p class="wr-note">${weekAdvice(s)}</p>`;
  }

  function weekAdvice(s) {
    if (!s.slots) return "Nothing is in the week yet. Start with the hours the building is already unlocked — they count.";
    if (s.emptyDays >= 5) return `${s.emptyDays} empty days. A building used once a week is read as closed for the other six, whatever its policy says. One regular weekday slot changes that more than any building work.`;
    if (s.emptyDays >= 3) return `${s.emptyDays} empty days are a week waiting to be shared. Offer a partner a trial term in one of them — it is a decision a PCC or trustees can make in a single meeting.`;
    if (!s.kinds.has("quiet")) return "Nothing in this week is protected as quiet. One room kept quiet through opening hours is what makes every noisier use arguable — the Sherriff Centre's Lady Chapel is the model.";
    if (!s.kinds.has("commercial") && s.fill > 0.4) return "A full week with no income in it. Something here could pay — hire, a café, a lettable room — and fund the parts that cannot.";
    if (s.fill > 0.6) return "A genuinely full week. The design questions now are storage, changeover time and whether the free programme still has the good slots.";
    return "A working week with room left in it. Look at the evenings and Saturdays — they reach people who cannot come at eleven on a Tuesday.";
  }

  /* layer switching and toolbar */
  document.querySelectorAll(".week-modes [data-layer]").forEach(b => {
    b.addEventListener("click", () => {
      state.layer = b.dataset.layer;
      document.querySelectorAll(".week-modes [data-layer]")
        .forEach(x => x.classList.toggle("is-on", x === b));
      renderWeek(); renderReading(); renderVision();
    });
  });

  $("week-copy").addEventListener("click", () => {
    state.week.vision = state.week.now.map(r =>
      ({ id: state.weekNextId++, name: r.name, kind: r.kind, cells: new Set(r.cells) }));
    state.layer = "vision";
    document.querySelectorAll(".week-modes [data-layer]")
      .forEach(x => x.classList.toggle("is-on", x.dataset.layer === "vision"));
    renderWeek(); renderReading(); renderVision();
  });

  $("week-add").addEventListener("click", () => {
    const name = $("week-newrow").value.trim();
    if (!name) { $("week-newrow").focus(); return; }
    addRow(name, $("week-newkind").value, []);
    $("week-newrow").value = "";
    renderWeek(); renderVision();
  });
  $("week-newrow").addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); $("week-add").click(); }
  });

  $("week-clear").addEventListener("click", () => {
    state.week[state.layer] = [];
    renderWeek(); renderReading(); renderVision();
  });

  /* ---------- facilities & context ---------- */
  function buildToggles(mountId, options, set) {
    const mount = $(mountId);
    mount.innerHTML = "";
    options.forEach(o => {
      const b = el("button", "toggle-tag", o);
      b.type = "button";
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", () => {
        const on = set.has(o);
        on ? set.delete(o) : set.add(o);
        b.setAttribute("aria-pressed", on ? "false" : "true");
        render();
      });
      mount.appendChild(b);
    });
  }
  buildToggles("fac-row", FACILITIES, state.fac);
  buildToggles("ctx-row", CONTEXT, state.ctx);

  /* ==========================================================
     THE READING — profile, tiers, matches
     ========================================================== */
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  function profile() {
    const fac = clamp(state.fac.size, 0, 5);
    const ctxN = state.ctx.size;
    const ctxPublic = CTX_PUBLIC.some(c => state.ctx.has(c));

    if (state.mode === "diagnostic") {
      const d = state.dims;
      const w = weekStats(state.layer);
      const L = clamp(Math.round(1 + ((d.physical + d.perceptual + d.animation) / 15) * 4), 1, 5);
      const IS = (d.social + d.animation + d.management) / 3;
      return {
        L, IS, ctxPublic,
        zoneTypes: null,              /* unknown in this mode; don't gate on it */
        size: clamp(Math.round((d.ownership + d.management) / 2), 0, 5),
        noise: d.animation,
        openness: clamp(Math.round(d.social * 0.6 + Math.min(5, ctxN * 1.2) * 0.4), 0, 5),
        facilities: fac,
        emptyDays: w.slots ? w.emptyDays : null,
        weekFill: w.fill,
        hasOutdoor: true              /* unknown in this mode; don't penalise */
      };
    }

    /* builder */
    const typed = state.zones.filter(z => z.type !== "pending");
    const zoneTypes = new Set(typed.map(z => z.type));
    const w = weekStats(state.layer);
    /* Two descriptions of the same week: the quick zone-by-zone grid under
       the plot, and the activity timetable. The reading takes the fuller of
       the two, and a day only counts as empty if both say it is. */
    const zw = zoneWeekStats();
    const r = Math.max(w.fill, zw.fill);       /* 0..1 fill of the week */
    const emptyDays = DAYS.filter((_, i) => !zw.days[i] && w.byDay[i] === 0).length;
    const L = typed.length
      ? clamp(1 + Math.round(r * 3) + (fac >= 3 ? 1 : 0) + (ctxPublic ? 1 : 0), 1, 5)
      : 1;
    const mix = zoneTypes.size;
    const IS = typed.length
      ? clamp(r * 4.5 + (fac >= 2 ? 0.6 : 0) + (mix >= 3 ? 0.6 : 0) + (w.kinds.size >= 3 ? 0.5 : 0), 0, 5)
      : 0;
    const OUTDOORS = ["outdoor", "churchyard", "garden", "carpark"];
    return {
      L, IS, ctxPublic, zoneTypes,
      size: clamp(typed.length, 0, 5),
      noise: typed.length ? Math.max(...typed.map(z => ZONES[z.type].noise)) : 0,
      openness: clamp(Math.round(Math.min(5, ctxN * 1.4) * 0.6 + (fac >= 2 ? 2 : 0)), 0, 5),
      facilities: fac,
      emptyDays,
      weekFill: r,
      hasOutdoor: typed.some(z => OUTDOORS.includes(z.type))
    };
  }

  const intLabel = IS => IS < 1.7 ? "Low" : IS < 3.4 ? "Medium" : "High";

  /* ---------- quadrant ---------- */
  function renderQuadrant(p) {
    const Lx = 46, Rx = 444, Ty = 22, By = 258;
    const MX = (Lx + Rx) / 2, MY = (Ty + By) / 2;
    const px = v => Lx + ((v - 1) / 4) * (Rx - Lx);
    const py = v => By - (v / 5) * (By - Ty);
    const peers = SITES.filter(s => s.isCaseStudy).map(s => {
      const iv = { Low: 0.9, Medium: 2.6, High: 4.3 }[s.interaction];
      return `<circle cx="${px(s.publicness).toFixed(1)}" cy="${py(iv).toFixed(1)}" r="4.5"
        fill="var(--yew)" opacity=".28"><title>${s.shortName}</title></circle>`;
    }).join("");
    const active = state.mode === "diagnostic" || state.mode === "builder";
    const you = active ? `
      <circle cx="${px(p.L).toFixed(1)}" cy="${py(p.IS).toFixed(1)}" r="10"
        fill="var(--red)" stroke="#FFFFFF" stroke-width="3"/>
      <text x="${px(p.L).toFixed(1)}" y="${(py(p.IS) + (py(p.IS) < MY ? 26 : -16)).toFixed(1)}"
        text-anchor="middle" font-family="Onest,Inter,sans-serif" font-weight="600"
        font-size="14" fill="var(--ink)">your site</text>` : "";
    $("quadrant").innerHTML = `
    <svg viewBox="0 0 470 300" role="img"
         aria-label="Publicness against interaction. Your site reads ${TAXONOMY.publicnessLabels[p.L]} publicness and ${intLabel(p.IS).toLowerCase()} interaction. Faint dots are the database's case studies.">
      <rect x="${Lx}" y="${Ty}" width="${MX - Lx}" height="${MY - Ty}" fill="#EEF1F3" opacity=".55"/>
      <rect x="${MX}" y="${Ty}" width="${Rx - MX}" height="${MY - Ty}" fill="#D6EEF1" opacity=".7"/>
      <rect x="${Lx}" y="${MY}" width="${MX - Lx}" height="${By - MY}" fill="#EEF1F3" opacity=".3"/>
      <rect x="${MX}" y="${MY}" width="${Rx - MX}" height="${By - MY}" fill="#FBE3D5" opacity=".55"/>
      <line x1="${MX}" y1="${Ty}" x2="${MX}" y2="${By}" stroke="#15181B" stroke-width=".6" stroke-dasharray="4 5" opacity=".4"/>
      <line x1="${Lx}" y1="${MY}" x2="${Rx}" y2="${MY}" stroke="#15181B" stroke-width=".6" stroke-dasharray="4 5" opacity=".4"/>
      <line x1="${Lx}" y1="${By}" x2="${Rx}" y2="${By}" stroke="#15181B" stroke-width="1.4"/>
      <line x1="${Lx}" y1="${By}" x2="${Lx}" y2="${Ty}" stroke="#15181B" stroke-width="1.4"/>
      <text x="${Lx + 8}" y="${Ty + 16}" font-family="Onest,Inter,sans-serif" font-size="10.5" font-weight="700" letter-spacing=".05em" fill="#5E656B">VIBRANT, HIDDEN</text>
      <text x="${Rx - 8}" y="${Ty + 16}" text-anchor="end" font-family="Onest,Inter,sans-serif" font-size="10.5" font-weight="700" letter-spacing=".05em" fill="#00717E">THRIVING</text>
      <text x="${Lx + 8}" y="${By - 8}" font-family="Onest,Inter,sans-serif" font-size="10.5" font-weight="700" letter-spacing=".05em" fill="#5E656B">OPPORTUNITY</text>
      <text x="${Rx - 8}" y="${By - 8}" text-anchor="end" font-family="Onest,Inter,sans-serif" font-size="10.5" font-weight="700" letter-spacing=".05em" fill="#B34E16">OPEN, PASSIVE</text>
      <text x="${Lx}" y="${By + 26}" font-family="Onest,Inter,sans-serif" font-size="11.5" fill="#15181B">Low publicness</text>
      <text x="${Rx}" y="${By + 26}" text-anchor="end" font-family="Onest,Inter,sans-serif" font-size="11.5" fill="#15181B">High publicness</text>
      ${peers}${you}
    </svg>`;
    $("score-pub").textContent = active ? TAXONOMY.publicnessLabels[p.L] : "—";
    $("score-int").textContent = active ? intLabel(p.IS) : "—";
  }

  /* ---------- tiers ---------- */
  function recommendTier(p) {
    if (state.mode === "diagnostic") {
      const d = state.dims;
      const scores = [
        { key: "design",     v: (d.physical + d.perceptual) / 2, why: "access and invitation score lowest" },
        { key: "community",  v: (d.management + d.animation) / 2, why: "the week runs quietest" },
        { key: "commercial", v: (d.ownership + d.social) / 2,     why: "an anchor could carry the everyday" }
      ].sort((a, b) => a.v - b.v);
      let pick = scores[0];
      if (pick.key === "commercial" && !p.ctxPublic) pick = scores[1];
      return pick;
    }
    const typed = state.zones.filter(z => z.type !== "pending");
    if (!typed.length) return null;
    if (p.facilities <= 1)
      return { key: "design", why: "the practical kit comes before any partner" };
    if (p.emptyDays >= 3)
      return { key: "community", why: `${p.emptyDays} empty days are a week waiting to be shared` };
    if (p.ctxPublic && p.size >= 3)
      return { key: "commercial", why: "footfall on the doorstep could carry an anchor" };
    return { key: "community", why: "steady, needs-based use fits the site as drawn" };
  }

  function renderTiers(p) {
    const rec = recommendTier(p);
    $("tiers").innerHTML = TIERS.map(t => {
      const on = rec && rec.key === t.key;
      return `<div class="tier ${on ? "rec " + t.key : ""}">
        <b>${t.name}</b>
        <small>${on ? "Recommended — " + rec.why : t.small}</small>
      </div>`;
    }).join("");
    return rec;
  }

  /* ---------- matches ---------- */
  function scoreGroup(g, p) {
    const gaps = {
      size: Math.abs(p.size - g.needs.size),
      noise: Math.max(0, g.needs.noise - p.noise),
      openness: Math.max(0, g.needs.openness - p.openness),
      facilities: Math.max(0, g.needs.facilities - p.facilities)
    };
    let fit = 1 - (gaps.size / 5) * 0.6;
    fit += 1 - gaps.noise / 5;
    fit += 1 - gaps.openness / 5;
    fit += 1 - gaps.facilities / 5;
    fit = fit / 3.6;
    if (g.wantsOutdoor && !p.hasOutdoor) fit *= 0.55;
    if (g.kind === "commercial" && !p.ctxPublic) fit *= 0.6;
    if (state.sacredness === "Active worship" && g.needs.noise >= 5) fit *= 0.85;

    /* the shortfall that would move the fit most */
    const short = Object.entries(gaps)
      .filter(([k]) => k !== "size" ? true : p.size < g.needs.size)
      .sort((a, b) => b[1] - a[1])[0];
    const remedy = (short && short[1] > 0) ? REMEDY[short[0]] : REMEDY.ready;
    return { fit: Math.round(clamp(fit, 0, 1) * 100), remedy };
  }

  function renderMatches(p) {
    const active = state.mode === "diagnostic" ||
      (state.mode === "builder" && state.zones.some(z => z.type !== "pending"));
    if (!active) {
      $("matches").innerHTML = '<div class="studio-empty">The reading begins once the site is described.</div>';
      return [];
    }
    const scored = GROUPS.map(g => ({ g, ...scoreGroup(g, p) }))
      .sort((a, b) => b.fit - a.fit).slice(0, 5);
    $("matches").innerHTML = scored.map(({ g, fit, remedy }) => `
      <div class="match ${g.kind}">
        <span class="kind">${g.kind === "commercial" ? "Commercial anchor" : "Community use"}</span>
        <div class="m-head"><b>${g.name}</b><span class="fit">${fit}% fit</span></div>
        <p class="m-tip">${remedy.tip} · <span class="route">${remedy.route}</span></p>
      </div>`).join("");
    return scored;
  }

  /* ==========================================================
     THE DECK — interventions matched to this site, to swipe
     ----------------------------------------------------------
     Ranked by scoreIntervention() in interventions.js, which uses
     the same 0–5 site profile as everything else here. Cards carry
     the fit, the single thing standing in the way, the taster
     version, and two actions: take it into the vision, or place it
     on the plan.
     ========================================================== */
  const DECK_FILTERS = [
    { key: "all",   label: "Best fit" },
    { key: "now",   label: "Do this term" },
    { key: "design",label: "Design only" },
    { key: "free",  label: "No funding needed" },
    { key: "quiet", label: "Safe beside worship" }
  ];

  function buildDeckFilters() {
    $("deck-filters").innerHTML = DECK_FILTERS.map(f =>
      `<button type="button" class="dfilter${f.key === state.deckFilter ? " is-on" : ""}"
        data-dfilter="${f.key}">${f.label}</button>`).join("");
    $("deck-filters").querySelectorAll("[data-dfilter]").forEach(b => {
      b.addEventListener("click", () => {
        state.deckFilter = b.dataset.dfilter;
        state.deckIndex = 0;
        buildDeckFilters();
        renderDeck(profile());
      });
    });
  }

  function deckList(p) {
    let list = INTERVENTIONS.map(iv => ({ iv, ...scoreIntervention(iv, p, state.sacredness) }));

    switch (state.deckFilter) {
      case "now":
        list = list.filter(x => x.iv.scale === "Small" &&
          x.iv.permissions.every(k => k === "none" || k === "governance" || k === "licence"));
        break;
      case "design":
        list = list.filter(x => x.iv.family === "comfort" || x.iv.family === "threshold");
        break;
      case "free":
        list = list.filter(x => x.iv.funding === "none" || x.iv.funding === "volunteer" || x.iv.funding === "small");
        break;
      case "quiet":
        list = list.filter(x => x.iv.needs.noise <= 2 && x.iv.sacredness.includes("Active worship"));
        break;
    }
    return list.sort((a, b) => b.fit - a.fit).slice(0, 18);
  }

  function renderDeck(p) {
    const active = state.mode === "diagnostic" ||
      (state.mode === "builder" && state.zones.some(z => z.type !== "pending"));
    const rail = $("deck-rail");
    if (!active) {
      rail.innerHTML = '<div class="studio-empty">Describe the site above and the deck fills with what it could hold.</div>';
      $("deck-dots").innerHTML = "";
      $("deck-note").textContent = "";
      return;
    }

    const list = deckList(p);
    $("deck-note").textContent = list.length
      ? `${list.length} of the ${INTERVENTIONS.length} interventions in the library, ranked against the site as you have described it. Swipe or use the arrow keys. Take one into your vision and it appears in the week, on the plan and in the brief.`
      : "Nothing in the library matches that filter for this site. Try another.";

    rail.innerHTML = list.map(({ iv, fit, blocker }, i) => {
      const fam = familyOf(iv.family);
      const chosen = state.chosen.has(iv.id);
      const placed = state.placed.filter(x => x.ivId === iv.id).length;
      const bl = blocker ? BLOCKER_TEXT[blocker] : null;
      return `
        <article class="dcard t-${fam.tone}${chosen ? " chosen" : ""}" data-i="${i}" data-id="${iv.id}">
          ${(() => { const ph = photoOf(iv.id); return ph
            ? `<figure class="dphoto"><img src="${ph.src}" alt="${ph.caption}" loading="lazy">
                 <figcaption><b>${ph.place}</b> ${ph.caption}</figcaption></figure>`
            : ""; })()}
          <header>
            <span class="dfam">${fam.name}</span>
            <span class="dfit ${fit >= 70 ? "hi" : fit >= 45 ? "mid" : "lo"}">${fit}% fit</span>
          </header>
          <h3>${iv.name}</h3>
          <p class="done">${iv.one}</p>

          <div class="dmeta">
            <span><b>Scale</b>${iv.scale}</span>
            <span><b>Reversible</b>${iv.reversible}</span>
            <span><b>Permission</b>${PERMISSIONS.find(x => x.key === iv.permissions[0])?.name || "—"}</span>
            <span><b>Funding</b>${FUNDING_ROUTES[iv.funding].name}</span>
          </div>

          ${bl ? `<p class="dblock"><b>${bl.label}</b> ${bl.fix}</p>`
                : `<p class="dready"><b>Ready as the site stands</b> nothing here has to change first.</p>`}

          <p class="dtaster"><b>Test it in a week</b> ${iv.taster}</p>

          <div class="dacts">
            <button type="button" class="btn ${chosen ? "ghost" : ""}" data-choose="${iv.id}">
              ${chosen ? "In your vision ✓" : "Add to vision"}
            </button>
            <button type="button" class="btn ghost" data-drop2="${iv.id}">
              ${placed ? "Place another" : "Place on plan"}
            </button>
            <a class="btn ghost" href="interventions.html#i/${iv.id}" target="_blank" rel="noopener">Full record ↗</a>
          </div>
        </article>`;
    }).join("");

    $("deck-dots").innerHTML = list.map((_, i) =>
      `<button type="button" class="dot${i === state.deckIndex ? " on" : ""}" data-go="${i}"
         aria-label="Intervention ${i + 1} of ${list.length}"></button>`).join("");

    rail.querySelectorAll("[data-choose]").forEach(b => b.addEventListener("click", () => {
      const id = b.dataset.choose;
      if (state.chosen.has(id)) {
        state.chosen.delete(id);
        state.placed.filter(x => x.ivId === id).forEach(x => { const n = $("pin-" + x.id); if (n) n.remove(); });
        state.placed = state.placed.filter(x => x.ivId !== id);
      } else {
        state.chosen.add(id);
        offerWeekSlot(id);
      }
      render();
    }));
    rail.querySelectorAll("[data-drop2]").forEach(b => b.addEventListener("click", () => {
      if (state.mode !== "builder") {
        guideSay("The plan is only drawn in the builder route. Start over and choose “My site is mostly empty” if you want to pin interventions to a map.");
        return;
      }
      state.chosen.add(b.dataset.drop2);
      beginDrop(b.dataset.drop2);
    }));
    $("deck-dots").querySelectorAll("[data-go]").forEach(b =>
      b.addEventListener("click", () => deckGo(Number(b.dataset.go))));

    deckGo(Math.min(state.deckIndex, Math.max(0, list.length - 1)), true);
  }

  function deckGo(i, silent) {
    const cards = $("deck-rail").querySelectorAll(".dcard");
    if (!cards.length) return;
    state.deckIndex = Math.max(0, Math.min(cards.length - 1, i));
    const card = cards[state.deckIndex];
    $("deck-rail").scrollTo({ left: card.offsetLeft - 8, behavior: silent ? "auto" : "smooth" });
    $("deck-dots").querySelectorAll(".dot")
      .forEach((d, n) => d.classList.toggle("on", n === state.deckIndex));
  }

  $("deck-prev").addEventListener("click", () => deckGo(state.deckIndex - 1));
  $("deck-next").addEventListener("click", () => deckGo(state.deckIndex + 1));
  $("deck-rail").addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { e.preventDefault(); deckGo(state.deckIndex + 1); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); deckGo(state.deckIndex - 1); }
  });
  /* keep the dots honest when the rail is swiped directly */
  let scrollTick;
  $("deck-rail").addEventListener("scroll", () => {
    clearTimeout(scrollTick);
    scrollTick = setTimeout(() => {
      const cards = [...$("deck-rail").querySelectorAll(".dcard")];
      if (!cards.length) return;
      const x = $("deck-rail").scrollLeft;
      let best = 0, d = Infinity;
      cards.forEach((c, i) => { const dd = Math.abs(c.offsetLeft - 8 - x); if (dd < d) { d = dd; best = i; } });
      state.deckIndex = best;
      $("deck-dots").querySelectorAll(".dot").forEach((dot, n) => dot.classList.toggle("on", n === best));
    }, 90);
  });

  /* taking an intervention into the vision offers it a slot in the proposed week */
  function offerWeekSlot(ivId) {
    const iv = interventionById(ivId);
    if (!iv) return;
    if (!state.week.vision.length && state.week.now.length) {
      state.week.vision = state.week.now.map(r =>
        ({ id: state.weekNextId++, name: r.name, kind: r.kind, cells: new Set(r.cells) }));
    }
    const kind =
      iv.family === "quiet" ? "quiet" :
      iv.family === "grounds" ? "outdoor" :
      (iv.funding === "trading") ? "commercial" :
      iv.sacredness.length === 1 && iv.sacredness[0] === "Active worship" ? "worship" : "community";
    const was = state.layer;
    state.layer = "vision";
    if (!rows().some(r => r.name === iv.name)) addRow(iv.name, kind, []);
    state.layer = was;
  }

  /* ==========================================================
     GO DEEPER — the ten-theme design checklist
     ========================================================== */
  const DEEP_SCALE = ["Not at all", "Barely", "Partly", "Mostly", "Well", "Exemplary"];

  function buildDeep() {
    $("deep-grid").innerHTML = GH_THEMES.map((t, i) => `
      <div class="dq tone-${t.tone}">
        <div class="dq-head">
          <span class="n">${String(i + 1).padStart(2, "0")}</span>
          <div>
            <b>${t.name}</b>
            <em>${t.lead}</em>
          </div>
        </div>
        <ul class="dq-qs">${t.questions.map(q => `<li>${q}</li>`).join("")}</ul>
        <p class="dq-sacred">${t.forWorship}</p>
        <div class="dq-score">
          <input type="range" min="0" max="5" step="1" value="${state.deep[t.key] ?? 3}"
                 data-deep="${t.key}" aria-label="Score for ${t.name}, 0 to 5">
          <span data-deeplab="${t.key}">${state.deep[t.key] == null ? "Not scored" : DEEP_SCALE[state.deep[t.key]]}</span>
        </div>
        <p class="dq-src">${sourceLink(t.source)}</p>
      </div>`).join("");

    $("deep-grid").querySelectorAll("[data-deep]").forEach(r => {
      r.addEventListener("input", e => {
        const k = e.target.dataset.deep;
        state.deep[k] = Number(e.target.value);
        document.querySelector(`[data-deeplab="${k}"]`).textContent = DEEP_SCALE[state.deep[k]];
        renderDeepOut();
      });
    });
    renderDeepOut();
  }

  function renderDeepOut() {
    const scored = GH_THEMES.filter(t => state.deep[t.key] != null);
    if (!scored.length) {
      $("deep-out").innerHTML =
        `<p class="studio-empty">Move any slider and the studio starts reading the checklist back.</p>`;
      return;
    }
    const sorted = [...scored].sort((a, b) => state.deep[a.key] - state.deep[b.key]);
    const weakest = sorted.slice(0, 3);
    const strongest = sorted.slice(-2).reverse();
    const avg = scored.reduce((s, t) => s + state.deep[t.key], 0) / scored.length;

    /* interventions that engage the weakest themes and suit the site */
    const p = profile();
    const keys = weakest.map(t => t.key);
    const picks = INTERVENTIONS
      .filter(iv => iv.themes.some(t => keys.includes(t)))
      .map(iv => ({ iv, ...scoreIntervention(iv, p, state.sacredness) }))
      .sort((a, b) => b.fit - a.fit)
      .slice(0, 6);

    $("deep-out").innerHTML = `
      <div class="deep-summary">
        <div class="ds-score">
          <b>${avg.toFixed(1)}</b><span>average, across ${scored.length} of 10 themes</span>
        </div>
        <div class="ds-cols">
          <div>
            <h4>Where the design work is</h4>
            <ul>${weakest.map(t => `<li><b>${t.name}</b> — ${DEEP_SCALE[state.deep[t.key]].toLowerCase()}. ${t.lead}</li>`).join("")}</ul>
          </div>
          <div>
            <h4>What is already working</h4>
            <ul>${strongest.map(t => `<li><b>${t.name}</b> — ${DEEP_SCALE[state.deep[t.key]].toLowerCase()}.</li>`).join("")}</ul>
          </div>
        </div>
      </div>

      <h4 class="deep-h">Interventions that answer your weakest themes</h4>
      <div class="deep-picks">
        ${picks.map(({ iv, fit }) => `
          <button type="button" class="dpick t-${familyOf(iv.family).tone}" data-choose2="${iv.id}">
            <b>${iv.name}</b>
            <em>${iv.one}</em>
            <span>${fit}% fit · ${iv.scale} · ${FUNDING_ROUTES[iv.funding].name}
              ${state.chosen.has(iv.id) ? " · in your vision ✓" : ""}</span>
          </button>`).join("")}
      </div>

      <div class="deep-next">
        <h4>Doing this properly, on site</h4>
        <p>The checklist is designed to be taken to the building rather than answered from memory.
          <a href="downloads/design-checklist.html" target="_blank" rel="noopener">Print the sheet</a>,
          walk the site with two or three other people, score it separately and then compare —
          the disagreements are the most useful output. The
          <a href="downloads/assessment-checklist.html" target="_blank" rel="noopener">publicness and
          interaction sheet</a> covers the first assessment the same way.</p>
        <p>Then look at how others answered the same questions: every
          <a href="case-studies.html">case study</a> in the database carries its own publicness and
          interaction tables, scored line by line with the evidence for each score.</p>
      </div>`;

    $("deep-out").querySelectorAll("[data-choose2]").forEach(b =>
      b.addEventListener("click", () => {
        const id = b.dataset.choose2;
        if (state.chosen.has(id)) state.chosen.delete(id);
        else { state.chosen.add(id); offerWeekSlot(id); }
        render();
      }));
  }

  $("deep-toggle").addEventListener("click", () => {
    const body = $("deep-body");
    const open = body.hidden;
    body.hidden = !open;
    $("deep-toggle").setAttribute("aria-expanded", String(open));
    $("deep-toggle").textContent = open ? "Close the checklist" : "Open the checklist";
    if (open && !$("deep-grid").children.length) buildDeep();
  });

  /* ==========================================================
     FUTURE VISION — now, next, and the route between
     ========================================================== */
  function futureProfile(p) {
    /* what the chosen interventions would do to the reading */
    const chosen = [...state.chosen].map(interventionById).filter(Boolean);
    if (!chosen.length) return { ...p, none: true };
    const dims = new Set();
    chosen.forEach(iv => iv.dims.forEach(d => dims.add(d)));
    const facUp = chosen.some(iv => iv.family === "fabric") ? 1.5 : 0;
    const openUp = dims.has("Publicness") ? 1.2 : 0;
    const useUp = dims.has("Use") ? 0.8 : 0;
    const visionWeek = weekStats("vision");
    const nowWeek = weekStats("now");
    const weekGain = Math.max(0, visionWeek.fill - nowWeek.fill);
    return {
      ...p,
      L: clamp(Math.round(p.L + openUp + (weekGain > 0.15 ? 1 : 0)), 1, 5),
      IS: clamp(p.IS + useUp + weekGain * 3 + (dims.has("Interaction") ? 0.8 : 0), 0, 5),
      facilities: clamp(p.facilities + facUp, 0, 5),
      openness: clamp(p.openness + openUp, 0, 5),
      none: false
    };
  }

  function readingCard(p, title) {
    return `
      <div class="vread">
        <div class="vrow"><span>Publicness</span><b>${TAXONOMY.publicnessLabels[Math.round(p.L)]}</b></div>
        <div class="vrow"><span>Interaction</span><b>${intLabel(p.IS)}</b></div>
        <div class="vrow"><span>Week filled</span><b>${Math.round((p.weekFill || 0) * 100)}%</b></div>
        <div class="vrow"><span>Facilities</span><b>${Math.round(p.facilities)}/5</b></div>
      </div>`;
  }

  function renderVision() {
    const active = state.mode === "diagnostic" || state.mode === "builder";
    if (!active) return;
    const p = profile();
    /* "now" includes the quick zone-by-zone week, which only ever describes
       the site as it is */
    const nowFill = Math.max(weekStats("now").fill, zoneWeekStats().fill);
    const nowP = { ...p, weekFill: nowFill };
    const nextP = futureProfile({ ...p, weekFill: weekStats("vision").slots ? weekStats("vision").fill : weekStats("now").fill });

    $("vision-now").innerHTML = readingCard(nowP) +
      `<p class="vnote">${weekAdvice(mergedNowStats())}</p>`;

    if (nextP.none) {
      $("vision-next").innerHTML =
        `<p class="studio-empty">Add interventions from the deck and the second reading appears here.</p>`;
      $("vision-steps").innerHTML =
        `<p class="studio-empty">Nothing chosen yet.</p>`;
      $("vision-cases").innerHTML = "";
      $("vision-resources").innerHTML = "";
      return;
    }

    $("vision-next").innerHTML = readingCard(nextP) +
      `<p class="vnote">With ${state.chosen.size} intervention${state.chosen.size === 1 ? "" : "s"} chosen
        ${state.placed.length ? "and " + state.placed.length + " pinned to the plan" : ""}.
        These are projections from the library's own compatibility scores, not promises —
        treat them as an argument to test, and check them against the case studies below.</p>`;

    /* the route: ordered by permission weight, then scale */
    const order = { none: 0, governance: 1, licence: 2, changeuse: 3, faculty: 4, planning: 5 };
    const scaleW = { Small: 0, Medium: 1, Large: 2 };
    const steps = [...state.chosen].map(interventionById).filter(Boolean)
      .sort((a, b) =>
        (Math.min(...a.permissions.map(k => order[k] ?? 9)) - Math.min(...b.permissions.map(k => order[k] ?? 9))) ||
        (scaleW[a.scale] - scaleW[b.scale]));

    $("vision-steps").innerHTML = steps.map((iv, i) => {
      const fam = familyOf(iv.family);
      const perm = PERMISSIONS.find(x => x.key === iv.permissions[0]);
      return `
        <div class="vstep t-${fam.tone}">
          <span class="n">${i + 1}</span>
          <div>
            <h4>${iv.name}<span class="vs-scale">${iv.scale} · ${iv.timescale}</span></h4>
            <p class="vs-one">${iv.one}</p>
            <p class="vs-taster"><b>Start here</b> ${iv.taster}</p>
            <ol class="vs-how">${iv.how.slice(0, 3).map(h => `<li>${h}</li>`).join("")}</ol>
            <p class="vs-meta">
              <span><b>Permission</b> ${perm ? perm.name + " — " + perm.time : "—"}</span>
              <span><b>Funding</b> ${FUNDING_ROUTES[iv.funding].name}</span>
              <span><b>Watch</b> ${iv.watch[0]}</span>
            </p>
            <p class="vs-links">
              <a href="interventions.html#i/${iv.id}" target="_blank" rel="noopener">Full record, steps and sources ↗</a>
              · ${iv.sources.map(s => sourceLink(s)).join(" · ")}
            </p>
          </div>
        </div>`;
    }).join("");

    /* related case studies, with why */
    const why = new Map();
    steps.forEach(iv => iv.precedents.forEach(pc => {
      if (!why.has(pc.id)) why.set(pc.id, []);
      why.get(pc.id).push({ iv: iv.name, why: pc.why });
    }));
    const ranked = [...why.entries()]
      .sort((a, b) => b[1].length - a[1].length).slice(0, 3);

    $("vision-cases").innerHTML = ranked.map(([id, list]) => {
      const s = getSite(id);
      if (!s) return "";
      return `
        <div class="vcase">
          ${caseCard(s)}
          <div class="vcase-why">
            <b>Why it relates to your site</b>
            <ul>${list.slice(0, 3).map(l => `<li><em>${l.iv}</em> — ${l.why}</li>`).join("")}</ul>
          </div>
        </div>`;
    }).join("");

    /* the resources behind the chosen route */
    const srcIds = new Set();
    steps.forEach(iv => iv.sources.forEach(s => srcIds.add(s)));
    ["crossingThreshold", "edpStrategy", "glasshouse"].forEach(s => srcIds.add(s));
    $("vision-resources").innerHTML = `
      <div class="vres">
        ${[...srcIds].map(id => {
          const s = SOURCES[id];
          return s ? `<a class="vres-item" href="${s.url}" target="_blank" rel="noopener">
            <b>${s.short}</b><em>${s.title}</em><span>${s.note}</span></a>` : "";
        }).join("")}
      </div>
      <p class="vres-note">The full library carries
        <a href="interventions.html#process">the seven steps before you start</a>,
        <a href="interventions.html#taster">the taster-session playbook</a>,
        <a href="interventions.html#permissions">the permission routes</a> and
        <a href="interventions.html#funding">the funding routes</a> in full.</p>`;
  }

  /* ---------- master render ---------- */
  let lastReading = null;
  function renderReading() {
    const p = profile();
    renderQuadrant(p);
    const rec = renderTiers(p);
    const matches = renderMatches(p);
    lastReading = { p, rec, matches };
    return p;
  }
  function render() {
    renderZoneWeek();
    renderWeek();
    renderPlaced();
    const p = renderReading();
    renderDeck(p);
    renderVision();
    if (!$("deep-body").hidden) renderDeepOut();
  }

  /* ==========================================================
     TAKE IT WITH YOU — the brief & the submission file
     ========================================================== */
  function briefHTML() {
    const { p, rec, matches } = lastReading;
    const typed = state.zones.filter(z => z.type !== "pending");
    const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    const tierName = rec ? TIERS.find(t => t.key === rec.key).name : "—";
    const modeLine = state.mode === "diagnostic"
      ? `Assessed with the publicness diagnostic${state.sacredness ? " · " + state.sacredness : ""}`
      : `Drawn in the site studio · ${typed.length} zone${typed.length === 1 ? "" : "s"}${p.emptyDays != null ? " · " + p.emptyDays + " empty day" + (p.emptyDays === 1 ? "" : "s") + " a week" : ""}`;

    const dimsRows = state.mode === "diagnostic"
      ? DIMS.map(d => `<tr><td>${d.label}</td><td>${state.dims[d.key]} / 5</td></tr>`).join("")
      : typed.map(z => {
          const pins = state.placed.filter(pp => {
            const n = $("pin-" + pp.id);
            return n && pp.x >= z.x && pp.x <= z.x + z.w && pp.y >= z.y && pp.y <= z.y + z.h;
          }).map(pp => interventionById(pp.ivId).name);
          const wk = state.zoneWeek[z.id] || [];
          const used = wk.map((v, i) => v ? DAYS[i] + (v === 1 ? " (occasional)" : "") : "").filter(Boolean);
          return `<tr><td>${ZONES[z.type].label}</td><td>${used.length ? used.join(", ") : "empty all week"}</td><td>${pins.length ? pins.join(", ") : "—"}</td></tr>`;
        }).join("");

    const matchRows = matches.map(m =>
      `<tr><td>${m.g.name}${m.g.kind === "commercial" ? " *" : ""}</td><td>${m.fit}%</td><td>${m.remedy.tip}</td><td>${m.remedy.route}</td></tr>`).join("");

    /* the week, both layers, as a printable grid */
    function weekTable(layer) {
      const list = state.week[layer];
      if (!list.length) return "<p style='font-size:13px'>Nothing recorded.</p>";
      const head = `<tr><th>Activity</th>${DAYS.map(d => `<th colspan="4">${d}</th>`).join("")}</tr>`;
      const body = list.map(r =>
        `<tr><td>${r.name}<br><em style="font-size:11px">${ROW_KINDS[r.kind].label}</em></td>` +
        DAYS.map((_, d) => BANDS.map(b =>
          `<td class="${r.cells.has(cellKey(d, b.key)) ? "on" : ""}">${r.cells.has(cellKey(d, b.key)) ? "●" : ""}</td>`).join("")).join("") +
        `</tr>`).join("");
      return `<table class="tt-print">${head}${body}</table>`;
    }

    const chosen = [...state.chosen].map(interventionById).filter(Boolean);
    const order = { none: 0, governance: 1, licence: 2, changeuse: 3, faculty: 4, planning: 5 };
    chosen.sort((a, b) =>
      Math.min(...a.permissions.map(k => order[k] ?? 9)) - Math.min(...b.permissions.map(k => order[k] ?? 9)));

    const ivRows = chosen.map((iv, i) => `
      <tr>
        <td>${i + 1}</td>
        <td><strong>${iv.name}</strong><br><em>${iv.one}</em></td>
        <td>${iv.scale}<br>${iv.timescale}</td>
        <td>${PERMISSIONS.find(x => x.key === iv.permissions[0])?.name || "—"}</td>
        <td>${FUNDING_ROUTES[iv.funding].name}</td>
        <td>${iv.taster}</td>
      </tr>`).join("");

    const deepScored = GH_THEMES.filter(t => state.deep[t.key] != null);
    const deepRows = deepScored.map(t =>
      `<tr><td>${t.name}</td><td>${state.deep[t.key]} / 5</td><td>${t.lead}</td></tr>`).join("");

    return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<title>Site studio brief — Designing Shared Spaces Together</title>
<link rel="icon" type="image/png" sizes="32x32" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC/UlEQVR42u2XT2/URhjGf++MvWuzWXbVQlZEtA1KEJcECgcScUB8AdqqybmqQO21QuJCv0Th2n6EBqkIzrQciEQQKIgcEAihKK3oUhCb9e76z9oeDt6sQAqJA5vmEku+2KPxb95n5nley8W/bhl28FLs8LULsOMAVp5BJk0x5v17VQBEEKW2B6BYLmeTvwfCGEOaJMRBgEnTLYFYeVa/OHeV0PNQ60ysbAunvJfq559RO3IE5Th0O53cEBsCiAipMTyYu0pjZQWrWOw/N2+NAVCWxf7Dh5k+f46Ro5NE7XYuCJVXArdaxa1WsR23r7dIJotoje041B894saln1leWKBQKmHSdLCbMGq3+WJ6ivHTp4n8DiY1hK0Wz5eW+PvefYqlEnEQcuuXK3x75TJutUISx/0qfTDAWqnjKGLf2BiT33xNp9FAad1/t/j7HPO//kZxaAivXmfp+nVO/fgD8eoq0hv38T7Qg/BXVwmbHmGzSdC7j83OcPDEccJWC3vPHpbvLBA0myjLGqwRiQhKa0QrRGuU1n2PGJ2eIunGaNvGq9dpPv8XbdsbeshAnFBEMGlKuVZD2zqTKwxpv3qVybTdAD03wnYcRGV6myQh6nQQJTuTBQYwJl0z6v8BQIRuEGKS7OwrpbAdd0P9BwdgDKIUrf9ekCYxALpYpLTvU0ySfLwRrRc8JkmzMvcAlFb8s/gAUYqk26Vcq1EZGSGJog0t2drqSq1CAbdSwRjTNyJtWTy++SfLdxYolsv4r18zOj2FW6kQbGJE1lZWrgsFXj59ysM/rhH5fnbcgoAXT57w7PY8SmviIGBoeJiJr87SDXzYJJByAWTBI9ilEit37/Hs9jys+bsxIILtukS+j7Yszlz4iaHh4VyJmAsg9Dz8RuPdOO7t7rWgMUnCyOQkJ7//jgMTE7nj2Nqs7CLCsdmZdRsS09PfrVb55NAo+8fHEa1yfzxXBUQpvpyd2bwli2O6QdA/kgPtCUPPy9+Uigy+KRWlkG2y7N0fk12AN9LgRmAyQ8/oAAAAAElFTkSuQmCC">
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; }
  body { font-family: "Onest", "Inter", -apple-system, "Helvetica Neue", Arial, sans-serif; color: #15181B; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.5; }
  /* the site's wordmark (see .logo in css/style.css) */
  .logo { display: inline-flex; flex-direction: column; align-items: flex-start; font-size: 22px; font-weight: 800; line-height: 1.12; letter-spacing: -.012em; text-transform: uppercase; }
  .logo span { display: block; padding: 0 .2em; white-space: nowrap; }
  .logo .l1, .logo .l3 { background: #74C0C1; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .logo .l3 { align-self: flex-end; }
  h1 { font-size: 28px; margin: 22px 0 6px; font-weight: 700; line-height: 1.1; letter-spacing: -.028em; }
  .sub { color: #5E656B; margin-bottom: 22px; }
  h2 { font-size: 13px; letter-spacing: .12em; text-transform: uppercase; margin: 26px 0 10px; border-bottom: 1px solid #15181B; padding-bottom: 6px; }
  table { width: 100%; border-collapse: collapse; font-size: 13.5px; margin-bottom: 6px; }
  th, td { border: 1px solid #999; padding: 7px 9px; text-align: left; vertical-align: top; }
  .tt-print { font-size: 10px; }
  .tt-print th, .tt-print td { padding: 2px 3px; text-align: center; }
  .tt-print td:first-child, .tt-print th:first-child { text-align: left; min-width: 120px; }
  .tt-print td.on { background: #D96629; color: #fff; }
  th { font-size: 11px; text-transform: uppercase; letter-spacing: .06em; background: #E3F3F5; }
  .big { font-size: 17px; }
  footer { margin-top: 28px; font-size: 12px; color: #5E656B; }
  @media print { body { padding: 0; } }
</style></head><body>
  <span class="logo"><span class="l1">Designing</span><span>Shared Spaces</span><span class="l3">Together</span></span>
  <h1>Site studio brief</h1>
  <p class="sub">A draft for discussion — prepared ${today}. ${modeLine}.</p>

  <h2>The reading</h2>
  <p class="big">Publicness <strong>${TAXONOMY.publicnessLabels[p.L]}</strong> · Interaction <strong>${intLabel(p.IS)}</strong> · Where to act first: <strong>${tierName}</strong>${rec ? " — " + rec.why : ""}</p>

  <h2>${state.mode === "diagnostic" ? "Diagnostic scores" : "The plot"}</h2>
  <table><tr>${state.mode === "diagnostic"
      ? "<th>Dimension</th><th>Score</th>"
      : "<th>Zone</th><th>Days in use</th><th>Interventions placed here</th>"}</tr>${dimsRows}</table>
  <p style="font-size:13px">Facilities: ${[...state.fac].join(", ") || "none recorded"} · Around the site: ${[...state.ctx].join(", ") || "none recorded"}</p>

  <h2>The week as it is</h2>
  ${weekTable("now")}

  ${state.week.vision.length ? `<h2>The week proposed</h2>${weekTable("vision")}` : ""}

  <h2>Who the site could hold — and how each fix is funded</h2>
  <table><tr><th>Use</th><th>Fit</th><th>What would help</th><th>Funding route</th></tr>${matchRows}</table>
  <p style="font-size:12px; color:#5E656B">* commercial anchors pay their way — a lease conversation, not a grant application.</p>

  ${chosen.length ? `<h2>Chosen interventions, in the order they can happen</h2>
  <table><tr><th>#</th><th>Intervention</th><th>Scale</th><th>Permission</th><th>Funding</th><th>Test it first</th></tr>${ivRows}</table>
  <p style="font-size:12px; color:#5E656B">Ordered by permission weight: the things needing only a decision come before the things needing a faculty or planning permission.</p>` : ""}

  ${deepScored.length ? `<h2>The design checklist</h2>
  <table><tr><th>Theme</th><th>Score</th><th>What it asks</th></tr>${deepRows}</table>
  <p style="font-size:12px; color:#5E656B">After The Glass-House, <em>Making Buildings Work for Your Community</em> (2011), and Empowering Design Practices, <em>Explore Design: Community Buildings</em>.</p>` : ""}

  <h2>Next steps</h2>
  <p>1. Share this sheet with the PCC, trustees or Friends group and agree the first tier of action.<br>
     2. Run the cheapest taster in the table above before committing to anything permanent.<br>
     3. Visit one of the related case studies; borrow its governance and funding model, not just its look.<br>
     4. Take the design checklist to site with two or three other people, score it separately, and compare.<br>
     5. Seek pre-application advice from your diocesan body and the planning authority — it is free or cheap, and it will tell you what is likely to be approved.<br>
     6. File the site via the database's Submit page so that the next group can learn from it.</p>

  <footer>Designing Shared Spaces Together · generated by the site studio · nothing was stored or transmitted in preparing this brief.<br>
  Guidance drawn from The Glass-House Community Led Design, Empowering Design Practices, and Crossing the Threshold (Diocese of Hereford / HRBA).</footer>
</body></html>`;
  }

  $("brief-btn").addEventListener("click", () => {
    if (!lastReading || (!lastReading.matches.length)) {
      alert("Describe the site first — the brief follows the reading.");
      return;
    }
    const w = window.open("", "_blank");
    if (!w) { alert("Allow pop-ups for this page to open the brief."); return; }
    w.document.write(briefHTML());
    w.document.close();
  });

  $("json-btn").addEventListener("click", () => {
    if (!lastReading || (!lastReading.matches.length)) {
      alert("Describe the site first — the file follows the reading.");
      return;
    }
    const { p, rec, matches } = lastReading;
    const typed = state.zones.filter(z => z.type !== "pending");
    const out = {
      type: "Site studio session",
      prepared: new Date().toISOString().slice(0, 10),
      mode: state.mode,
      sacredness: state.sacredness,
      reading: {
        publicness: TAXONOMY.publicnessLabels[p.L],
        interaction: intLabel(p.IS),
        actFirst: rec ? TIERS.find(t => t.key === rec.key).name : null,
        why: rec ? rec.why : null
      },
      site: state.mode === "diagnostic"
        ? { dimensions: { ...state.dims } }
        : {
            zones: typed.map(z => ({
              type: ZONES[z.type].label,
              approxSqm: Math.round(zoneArea(z)) || null,
              daysInUse: (state.zoneWeek[z.id] || []).map((v, i) => v ? DAYS[i] : null).filter(Boolean),
              daysInFullUse: (state.zoneWeek[z.id] || []).map((v, i) => v === 2 ? DAYS[i] : null).filter(Boolean)
            })),
            interventionsOnPlan: state.placed.map(pp => ({
              intervention: interventionById(pp.ivId).name,
              lat: pp.a ? Number(pp.a.lat.toFixed(6)) : null,
              lng: pp.a ? Number(pp.a.lng.toFixed(6)) : null
            }))
          },
      facilities: [...state.fac],
      context: [...state.ctx],
      week: {
        now: state.week.now.map(r => ({ name: r.name, kind: r.kind, slots: [...r.cells] })),
        proposed: state.week.vision.map(r => ({ name: r.name, kind: r.kind, slots: [...r.cells] })),
        slotFormat: "dayIndex(0=Mon)-band(am|pm|eve|late)",
        nowFill: Math.round(weekStats("now").fill * 100) + "%",
        proposedFill: Math.round(weekStats("vision").fill * 100) + "%"
      },
      chosenInterventions: [...state.chosen].map(id => {
        const iv = interventionById(id);
        return {
          id: iv.id, name: iv.name, family: familyOf(iv.family).name,
          scale: iv.scale, cost: iv.cost, timescale: iv.timescale,
          reversible: iv.reversible,
          permission: iv.permissions.map(k => PERMISSIONS.find(x => x.key === k)?.name),
          fundingRoute: FUNDING_ROUTES[iv.funding].name,
          taster: iv.taster,
          precedents: iv.precedents.map(pc => pc.id),
          sources: iv.sources.map(s => SOURCES[s]?.url).filter(Boolean)
        };
      }),
      designChecklist: GH_THEMES
        .filter(t => state.deep[t.key] != null)
        .map(t => ({ theme: t.name, score: state.deep[t.key], of: 5 })),
      compatibleUses: matches.map(m => ({
        use: m.g.name, kind: m.g.kind, fit: m.fit + "%",
        intervention: m.remedy.tip, fundingRoute: m.remedy.route
      }))
    };
    const json = JSON.stringify(out, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "dsst-studio-brief.json";
    a.click();
    URL.revokeObjectURL(a.href);
  });

  /* ---------- go ---------- */
  buildPresetMenu();
  buildDeckFilters();
  guideNode("start");
  renderWeek();
  renderReading();

  /* Escape cancels a pending placement */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && state.dropping) cancelDrop();
  });
});
