/* ============================================================
   PLANNING WITH RELIGION — the intervention library
   ------------------------------------------------------------
   Sixty interventions, from unlocking a second gate to inserting
   a new floor. Written short on purpose: a card you can read in
   fifteen seconds, with the evidence and the sources kept intact
   underneath it.

   FIELDS
     one          the card face — one line
     what         two sentences, no more
     taster       the cheapest way to test it in a week
     how          three steps
     watch        two things that go wrong
     worksWith    interventions that make this one work better
     tension      interventions that pull against it
     needs        0–5 site requirements, on the studio's own scale
     precedents   sites in this database, and why they relate
     sources      the published guidance behind the advice

   Photographs live in js/photos.js, keyed by intervention id.
   Every one is the author's own, taken on a site visit.

   Load after data.js, detail-data.js, evidence.js, photos.js.
   ============================================================ */

const INTERVENTION_FAMILIES = [
  { key: "threshold",  name: "Threshold & welcome",     tone: "green", d: "The cheapest moves in the library. They change who believes they are allowed in." },
  { key: "comfort",    name: "Comfort & familiarity",   tone: "buff",  d: "Design, not new uses. Light, sound, seating, planting, and the fit with the street." },
  { key: "everyday",   name: "Everyday services",       tone: "red",   d: "A reason to come in that has nothing to do with faith." },
  { key: "food",       name: "Food & hospitality",      tone: "buff",  d: "Warmth, a chair and something to hold." },
  { key: "culture",    name: "Culture & gathering",     tone: "red",   d: "What the volume, the light and the acoustics were already good at." },
  { key: "learning",   name: "Learning, care & wellbeing", tone: "green", d: "Real local demand, and often someone else's funding behind it." },
  { key: "play",       name: "Play & young people",     tone: "buff",  d: "The group most short of indoor space, and the noisiest question a sacred building faces." },
  { key: "work",       name: "Work & enterprise",       tone: "red",   d: "Uses that pay rent — the ones that make the free programme possible." },
  { key: "quiet",      name: "Quiet & remembrance",     tone: "ink",   d: "Protecting what is already here. Every other intervention gets easier once this exists." },
  { key: "grounds",    name: "Grounds, nature & green", tone: "green", d: "Churchyards, burial grounds and forecourts — religious infrastructure that is not a building." },
  { key: "fabric",     name: "Fabric & infrastructure", tone: "ink",   d: "The practical blockers. Unglamorous, and what every other use is waiting for." },
  { key: "time",       name: "Time & programming",      tone: "buff",  d: "Interventions made of hours rather than materials." },
  { key: "governance", name: "Governance & digital",    tone: "ink",   d: "Who decides, who holds the keys, and whether anyone can find you." }
];

/* zone vocabulary shared with the site studio's plan */
const ZONE_TYPES = {
  worship:    { label: "Worship space",     short: "Nave / worship",  noise: 1, colour: "red",   d: "The main volume, in use for worship." },
  chapel:     { label: "Side chapel",       short: "Chapel",          noise: 0, colour: "ink",   d: "A small room that can stay quiet while the rest is busy." },
  aisle:      { label: "Aisle / side space",short: "Aisle",           noise: 2, colour: "buff",  d: "The edges of the nave — where most reordering actually happens." },
  community:  { label: "Hall / rooms",      short: "Hall",            noise: 3, colour: "green", d: "Ancillary rooms, halls, meeting rooms, vestries." },
  cafe:       { label: "Café / servery",    short: "Café",            noise: 3, colour: "buff",  d: "Somewhere to make and serve a drink." },
  kitchen:    { label: "Kitchen",           short: "Kitchen",         noise: 2, colour: "green", d: "A servery or a full catering kitchen." },
  wc:         { label: "Toilets",           short: "WC",              noise: 1, colour: "ink",   d: "Including accessible and baby-change provision." },
  entrance:   { label: "Entrance / porch",  short: "Entrance",        noise: 2, colour: "red",   d: "The threshold — the most worked-on part of any publicness project." },
  undercroft: { label: "Undercroft / crypt",short: "Undercroft",      noise: 3, colour: "ink",   d: "Below ground — often the most atmospheric and least used space." },
  tower:      { label: "Tower / upper room",short: "Tower",           noise: 1, colour: "ink",   d: "Bell chamber, ringing room, upper floors." },
  office:     { label: "Office / workspace",short: "Office",          noise: 2, colour: "green", d: "Desks, lettable workspace, a parish office." },
  store:      { label: "Storage",           short: "Storage",         noise: 1, colour: "ink",   d: "The most underestimated requirement in every reordering." },
  play:       { label: "Play space",        short: "Play",            noise: 4, colour: "buff",  d: "Indoor play, soft play, a children's corner." },
  outdoor:    { label: "Yard / grounds",    short: "Grounds",         noise: 2, colour: "green", d: "Forecourt, yard, paved ground around the building." },
  churchyard: { label: "Churchyard",        short: "Churchyard",      noise: 1, colour: "green", d: "Consecrated ground, whether or not burials continue." },
  garden:     { label: "Garden / growing",  short: "Garden",          noise: 1, colour: "green", d: "Planted, cultivated or wild ground." },
  carpark:    { label: "Car park / forecourt", short: "Forecourt",    noise: 2, colour: "ink",   d: "Hard standing — the easiest ground to programme, the hardest to love." }
};

const INTERVENTIONS = [

  /* ================= THRESHOLD & WELCOME ================= */
  {
    id: "open-hours", name: "Published open hours", family: "threshold",
    one: "Decide when the door is unlocked, write it down, and keep to it.",
    what: "An opening strategy: which hours the building is genuinely open, who unlocks, and what welcome is on offer. A building whose hours nobody can discover is closed, whatever its policy says.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "entrance", "chapel", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Temporality"], themes: ["security", "identity", "legibility"],
    needs: { size: 0, noise: 0, openness: 1, facilities: 0 },
    uses: ["Quiet & reflection", "Heritage"], permissions: ["none"], funding: "none",
    taster: "Open two hours on the same weekday for a month. Count people.",
    how: [
      "Work out who can realistically unlock and lock, allowing for holidays and illness.",
      "Zone the building so a porch or side chapel can open without opening everything.",
      "Put the hours on the door, the noticeboard, the website and Google Maps — all four."
    ],
    watch: [
      "Hours that change week to week are worse than none. People stop trying after two failed visits.",
      "An open building with nobody in it can feel less safe than a locked one. Pair it with a reason to be there."
    ],
    worksWith: ["signage", "seating-outside", "quiet-room", "digital", "warm-space"],
    precedents: [
      { id: "st-patricks-wapping", why: "Open, but reads as empty — opening is necessary and not sufficient." },
      { id: "st-stephen-walbrook", why: "City hours built round a lunchtime rhythm, not a Sunday one." }
    ],
    sources: ["openChurches", "glasshouse", "crossingThreshold"]
  },
  {
    id: "threshold-edge", name: "Open up the threshold", family: "threshold",
    one: "Glazed doors, an open porch, a visible interior — make the edge say come in.",
    what: "Work on the first four metres: prop or reglaze the door, light the porch, clear the notice clutter. Someone passing should see activity before deciding whether they are allowed.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["entrance", "worship", "outdoor"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["access", "identity", "legibility", "security", "delight"],
    needs: { size: 0, noise: 0, openness: 2, facilities: 0 },
    uses: ["Heritage", "Quiet & reflection"], permissions: ["faculty", "planning"], funding: "small",
    taster: "Prop the outer door and stand an A-board in the porch for a fortnight.",
    how: [
      "Photograph your own entrance from across the street at three times of day.",
      "List everything at the threshold that says closed, then fix the reversible ones first.",
      "Make the inside brighter than the outside at dusk — it does more than any sign."
    ],
    watch: [
      "Glazed screens in listed fabric need a faculty and a good conservation architect.",
      "Heat loss. A propped door in February is a business-plan problem as well as a welcome."
    ],
    worksWith: ["lighting", "signage", "transparency", "step-free", "indoor-green"],
    precedents: [
      { id: "st-patricks-wapping", why: "The work that matters here is at the edge, not in the building." },
      { id: "grand-junction", why: "Entry is off a housing close, so signage and programme do the inviting." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "signage", name: "Signage & wayfinding", family: "threshold",
    one: "Say what this building is, who it is for, and what is on this week.",
    what: "A street sign naming the building and its uses, a what's-on board, and internal wayfinding to the hall, the toilets and the office. Diagrams as well as words.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["entrance", "worship", "community", "outdoor", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use"], themes: ["identity", "legibility", "access"],
    needs: { size: 0, noise: 0, openness: 1, facilities: 0 },
    uses: ["Heritage"], permissions: ["none", "faculty"], funding: "small",
    taster: "Chalk this week's activities on a board by the gate.",
    how: [
      "Walk a first-timer's route from the bus stop and note every point you'd have to ask.",
      "Fix those points in order — the street first, then 'where are the toilets'.",
      "Answer what people are embarrassed to ask: is it free, must I be religious, is there a toilet."
    ],
    watch: [
      "Signage cannot fix a plan that hides its activity behind an unmarked side door.",
      "Too many signs read as bureaucracy and put people off as effectively as none."
    ],
    worksWith: ["open-hours", "local-noticeboard", "threshold-edge", "digital", "timetable"],
    precedents: [
      { id: "sheriff-centre", why: "Post office signage makes it read as a shop; the footfall follows." },
      { id: "st-patricks-wapping", why: "Good exhibition banners that nobody outside knew were there." }
    ],
    sources: ["glasshouse", "edpExplore", "openChurches"]
  },
  {
    id: "seating-outside", name: "Seating and shelter outside", family: "threshold",
    one: "Somewhere to sit that costs nothing and asks nothing.",
    what: "Benches, a sittable wall, a table under the porch, bike stands, a bin. The lowest-threshold public offer there is: no entering, no paying, no explaining.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["outdoor", "churchyard", "entrance", "carpark", "garden"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["access", "delight", "maintenance", "security"],
    needs: { size: 1, noise: 0, openness: 2, facilities: 0 }, outdoor: true,
    uses: ["Quiet & reflection", "Nature & gardening"], permissions: ["none", "faculty"], funding: "small",
    taster: "Put four borrowed chairs and a table outside for a week of decent weather.",
    how: [
      "Watch where people already stop or lean, and put the seats there.",
      "Face some seats towards each other — parallel benches produce co-presence, angles produce talk.",
      "Agree who empties the bin before you install it."
    ],
    watch: [
      "Seating near graves needs a conversation with families and usually a faculty.",
      "Where it attracts street drinking, the answer is more activity and better overlooking, not removal."
    ],
    worksWith: ["small-welcome", "paths", "churchyard-open", "indoor-green", "greening"],
    precedents: [
      { id: "st-georges-gardens", why: "A burial ground where the seating does most of the public work." },
      { id: "st-dunstan-in-the-east", why: "A ruin that functions almost entirely as somewhere to sit." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },

  /* ================= COMFORT & FAMILIARITY ================= */
  {
    id: "lighting", name: "Lighting", family: "comfort",
    one: "Warm light inside, lit routes outside — the fastest change to how a place feels.",
    what: "Relight for the uses the building now holds: warm, layered, dimmable light where people sit, plus a lit approach and porch. A fraction of the cost of building work.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["worship", "aisle", "community", "entrance", "undercroft", "outdoor", "churchyard", "chapel"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction", "Temporality"], themes: ["delight", "access", "security", "resources", "identity"],
    needs: { size: 1, noise: 0, openness: 1, facilities: 1 },
    uses: ["Quiet & reflection", "Events & hire", "Culture & music"], permissions: ["faculty", "planning"], funding: "small",
    taster: "Borrow uplighters and warm festoon for one evening event.",
    how: [
      "Visit at dusk in winter and photograph what you see from the street.",
      "Light in layers: low ambient, bright pools where people sit, separate light for the architecture.",
      "Put it on zones and dimmers, and label the controls."
    ],
    watch: [
      "Cool white LEDs make warm stone look like a car park. Specify colour temperature, not just wattage.",
      "New fittings and cable routes in a listed interior need a faculty and careful detailing."
    ],
    worksWith: ["threshold-edge", "late-opening", "concerts", "paths", "acoustics"],
    precedents: [
      { id: "grand-junction", why: "One nave lit for a concert, a club night and a Sunday service." },
      { id: "st-dunstan-in-the-east", why: "A ruin whose atmosphere is almost entirely light through planting." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "acoustics", name: "Acoustic comfort", family: "comfort",
    one: "A room you cannot hold a conversation in is not a room people linger in.",
    what: "Manage sound so different activities can share a reverberant building: curtains, rugs and absorbent panels where speech matters, while keeping the reverberation that makes the nave good for music.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "aisle", "community", "chapel", "play", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Interaction", "Use"], themes: ["delight", "flexibility", "access", "maintenance"],
    needs: { size: 1, noise: 1, openness: 1, facilities: 1 },
    uses: ["Learning", "Culture & music", "Everyday services"], permissions: ["faculty"], funding: "small",
    taster: "Hang heavy curtains and put a rug down where a group meets. Ask them if it is easier to hear.",
    how: [
      "Work out which rooms need speech and which need reverberation — rarely the same room.",
      "Start soft and reversible: curtains, rugs, upholstered chairs, hangings.",
      "Fit a hearing loop and check it works — an access requirement, not a comfort one."
    ],
    watch: [
      "Do not deaden the whole nave. The acoustic is often why musicians book it.",
      "Wipe-clean finishes chosen for maintenance make a room acoustically hostile."
    ],
    worksWith: ["soft-play", "esol", "concerts", "quiet-room", "domestic-comfort"],
    tension: ["concerts"],
    precedents: [
      { id: "sheriff-centre", why: "Soft play in one aisle and a soundproofed chapel in the same room." },
      { id: "st-stephen-walbrook", why: "An acoustic that is part of the significance, programmed around." }
    ],
    sources: ["glasshouse", "cae"]
  },
  {
    id: "domestic-comfort", name: "Familiar, domestic furnishing", family: "comfort",
    one: "A sofa, a rug, a lamp and a plant — the cues that say this is for you.",
    what: "Furnish part of the building like a living room: soft seating in small groups, low tables, lamps, rugs. The most direct way to make a monumental interior feel sittable alone.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["aisle", "community", "cafe", "entrance", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Interaction", "Publicness"], themes: ["delight", "identity", "flexibility", "maintenance"],
    needs: { size: 1, noise: 1, openness: 3, facilities: 1 },
    uses: ["Quiet & reflection", "Café", "Everyday services"], permissions: ["none", "faculty"], funding: "small",
    taster: "Two armchairs, a side table and a lamp in one corner for a month. Watch who sits.",
    how: [
      "Choose a corner with a back to it and something to look at — nobody sits mid-room.",
      "Angle the seats towards each other, and add a socket, wi-fi and somewhere for a cup.",
      "Name the settings and let people reserve them; it turns loitering into an invitation."
    ],
    watch: [
      "Soft furnishings need fire certification, and they wear. Budget for replacement.",
      "Scattered domestic furniture reads as clutter. Make deliberate rooms within the room."
    ],
    worksWith: ["warm-space", "servery", "acoustics", "indoor-green", "lighting"],
    precedents: [
      { id: "sheriff-centre", why: "Three bookable living-room lounges, so there is always somewhere to sit." },
      { id: "grand-junction", why: "Shared tables and plentiful seating are why strangers linger." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "paths", name: "Clear paths & desire lines", family: "comfort",
    one: "Surface the route people already walk, and light it.",
    what: "A legible primary path, level and well surfaced, following where people actually go; secondary routes mown or gravelled; junctions obvious without signs; more than one way in.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["churchyard", "outdoor", "garden", "carpark", "entrance"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["legibility", "access", "security", "maintenance", "context"],
    needs: { size: 1, noise: 0, openness: 3, facilities: 0 }, outdoor: true,
    uses: ["Quiet & reflection", "Nature & gardening", "Heritage"], permissions: ["faculty", "planning"], funding: "small",
    taster: "Mow a route where you think the path should be and leave it a month. The grass will tell you.",
    how: [
      "Map the desire lines first — walk at three times of day and look at the worn grass.",
      "Give the site one clear route a wheelchair, a buggy and a suitcase can all use.",
      "Design a way through, not a way in and back out. Routes are used far more than destinations."
    ],
    watch: [
      "Excavation on burial ground raises archaeology and faculty questions; surfacing existing routes does not.",
      "Resin and gravel can be hard for wheelchairs. Test the specification, do not assume."
    ],
    worksWith: ["churchyard-open", "seating-outside", "lighting", "trail", "small-welcome"],
    precedents: [
      { id: "tower-hamlets-cemetery-park", why: "Path choice and signposting are what make the walk work at scale." },
      { id: "st-georges-gardens", why: "A burial ground that reads as a route between streets, not a dead end." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "context-fit", name: "Fit with the surrounding area", family: "comfort",
    one: "Read the street, then answer it — in materials, scale and register.",
    what: "Make the public face belong to its context: a shopfront register on a high street, a garden edge in a residential one, and a use that complements rather than duplicates what is nearby.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["entrance", "outdoor", "carpark", "worship", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use"], themes: ["context", "identity", "legibility", "delight"],
    needs: { size: 1, noise: 1, openness: 3, facilities: 0 },
    uses: ["Heritage", "Everyday services"], permissions: ["faculty", "planning"], funding: "small",
    taster: "Photograph your frontage beside the four nearest ones. The mismatch will be obvious.",
    how: [
      "Survey the block: what are other frontages doing, at what height, in what material?",
      "Map what already exists nearby, and choose a use that complements rather than duplicates it.",
      "Treat the boundary as the project — railings and hedges say more than the building behind."
    ],
    watch: [
      "A building that reads as institutional is used by people comfortable with institutions. That is a narrow group.",
      "Deliberate contrast has to be very well done, or it reads as damage."
    ],
    worksWith: ["signage", "threshold-edge", "greening", "market", "extension"],
    precedents: [
      { id: "sheriff-centre", why: "A Victorian church given a shopfront register opposite a tube station." },
      { id: "lambeth-palace-library", why: "The counter-case: a hard street edge, publicness undesigned." }
    ],
    sources: ["glasshouse", "edpExplore", "npff"]
  },
  {
    id: "sensory", name: "Sensory & neurodiverse comfort", family: "comfort",
    one: "Quiet hours, low stimulus, a predictable layout — and a room to step out into.",
    what: "Design and programme for people who find noise, crowds or unpredictability hard: relaxed sessions, dimmable light, a low-stimulus room, and clear information published before people arrive.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["chapel", "community", "play", "aisle", "garden"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction", "Temporality"], themes: ["access", "delight", "flexibility", "security"],
    needs: { size: 1, noise: 0, openness: 4, facilities: 2 },
    uses: ["Quiet & reflection", "Play", "Everyday services"], permissions: ["none"], funding: "small",
    taster: "Run one relaxed session of something you already do — lights up, sound down — and say so in the listing.",
    how: [
      "Designate a low-stimulus room and say on the way in where it is.",
      "Publish a visual guide to what happens before people arrive. Predictability is the access requirement.",
      "Ask local autism and learning-disability groups — they will tell you, and usually help run it."
    ],
    watch: [
      "A relaxed session advertised and then run at full volume does more harm than none.",
      "Do not segregate everything: dedicated sessions as well as, not instead of, ordinary access."
    ],
    worksWith: ["quiet-room", "acoustics", "lighting", "soft-play", "toddler"],
    precedents: [
      { id: "sheriff-centre", why: "Weekly additional-needs soft play, private, with extra sensory equipment." },
      { id: "grand-junction", why: "Club nights designed to mix adults with and without learning disabilities." }
    ],
    sources: ["cae", "glasshouse"]
  },
  {
    id: "transparency", name: "See-through — views between spaces", family: "comfort",
    one: "If you can see what is happening, you can decide whether to join it.",
    what: "Glass, internal windows and removed partitions so one space can be seen from another. It orients people without signage and carries daylight from bright rooms to dark ones.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["entrance", "worship", "aisle", "community", "play", "office"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["legibility", "security", "access", "resources", "delight"],
    needs: { size: 2, noise: 1, openness: 2, facilities: 1 },
    uses: ["Café", "Play", "Events & hire"], permissions: ["faculty", "planning"], funding: "capital",
    taster: "Take the notices off the glass in the doors you already have.",
    how: [
      "Stand at the entrance and list everything you cannot see. Those spaces are invisible to newcomers.",
      "Glaze the screens where activity should be visible, and use internal windows to move daylight.",
      "Design overlooking deliberately: a café window onto the play area, a desk with a view of the route."
    ],
    watch: [
      "Glazed screens in historic interiors need real design skill and a faculty.",
      "Transparency can make people feel watched. Keep one space where someone can sit unobserved."
    ],
    worksWith: ["threshold-edge", "soft-play", "cafe", "library-culture", "quiet-room"],
    tension: ["quiet-room"],
    precedents: [
      { id: "grand-junction", why: "Glass doors with the café as an open entrance, though hire signage stays unclear." },
      { id: "garden-museum", why: "Reversible structures that keep the whole volume readable from the door." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "local-noticeboard", name: "Local information point", family: "comfort",
    one: "A board about the neighbourhood, not about the institution.",
    what: "A well-kept, well-lit board carrying what is on locally — other groups' events, council notices, the foodbank's hours. It positions the building as a civic asset rather than an advert.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["entrance", "outdoor", "community", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["context", "identity", "legibility", "maintenance"],
    needs: { size: 0, noise: 0, openness: 2, facilities: 0 },
    uses: ["Everyday services", "Heritage"], permissions: ["none", "faculty"], funding: "small",
    taster: "Clear the board completely and restock it with things happening within ten minutes' walk.",
    how: [
      "Put it where people already pause — the gate, the porch, the route to the toilets.",
      "Give half the space to other people's news. A board only about you is read once.",
      "Date everything, take it down when it expires, and name someone whose job it is."
    ],
    watch: [
      "Perspex in the sun and paper in the rain. Specify the case for the position.",
      "Agree a policy for political and commercial notices before the first difficult one."
    ],
    worksWith: ["signage", "timetable", "digital", "open-hours", "friends-group"],
    precedents: [
      { id: "grand-junction", why: "This month's programme posted where people pass the gate." },
      { id: "st-patricks-wapping", why: "Uses on site that visitors could not discover from outside." }
    ],
    sources: ["glasshouse", "openChurches"]
  },
  {
    id: "small-welcome", name: "Small welcome infrastructure", family: "comfort",
    one: "A tap, a bin, a bike stand, a buggy park, a socket, a dog bowl.",
    what: "The tiny items that each remove one reason to leave: water, rubbish, somewhere to lock a bike or leave a buggy, a socket, shade and shelter. Most cost under fifty pounds.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["entrance", "outdoor", "churchyard", "community", "carpark", "garden"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["access", "maintenance", "delight", "resources"],
    needs: { size: 0, noise: 0, openness: 3, facilities: 1 },
    uses: ["Everyday services", "Quiet & reflection"], permissions: ["none", "faculty"], funding: "small",
    taster: "Put out a jug of water and a bowl for dogs on one hot Saturday.",
    how: [
      "Walk the site and ask at each point what would make somebody leave.",
      "Put the buggy park inside the door and in sight, and sockets where people sit.",
      "Agree who empties, refills and checks each item before installing it."
    ],
    watch: [
      "Every item is a maintenance commitment. An overflowing bin is worse than no bin.",
      "Fixings into historic fabric, even for a bike stand, need permission."
    ],
    worksWith: ["seating-outside", "paths", "toddler", "churchyard-open", "open-hours"],
    precedents: [
      { id: "paddington-old-cemetery", why: "Toilets, bins and water separate a used green space from a crossed one." },
      { id: "tower-hamlets-cemetery-park", why: "Everyday kit quietly supporting dog walking and lunch breaks." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "community-art", name: "Community-made art & decoration", family: "comfort",
    one: "Let people leave a mark, and the place becomes theirs.",
    what: "Artwork made with and by local people and installed in the building or grounds: murals, banners, textiles, hoardings. It is engagement, decoration and ownership at once.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "aisle", "entrance", "community", "outdoor", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Interaction", "Publicness", "Use"], themes: ["identity", "delight", "context", "security"],
    needs: { size: 1, noise: 2, openness: 3, facilities: 1 },
    uses: ["Culture & music", "Heritage", "Learning"], permissions: ["none", "faculty"], funding: "small",
    taster: "One workshop, one banner, hung where people will see it.",
    how: [
      "Make the artwork the reason for the conversation you want to have about the building.",
      "Work with the age groups and cultures not already inside the building.",
      "Put it where it does a second job — on the hoarding, over a blank wall, along the boundary."
    ],
    watch: [
      "Fixing to historic fabric needs advice and usually a faculty; hung and free-standing work is easier.",
      "Work that looks unfinished reads as neglect. Set a review date."
    ],
    worksWith: ["coproduce", "exhibition", "creative-workshop", "youth-club", "meanwhile"],
    precedents: [
      { id: "grand-junction", why: "A community curatorial panel and a collective exhibition of residents' stories." },
      { id: "st-patricks-wapping", why: "Historical banners doing quiet interpretive work, needing only advertising." }
    ],
    sources: ["edpLeadership", "edpCount", "glasshouse"]
  },
  {
    id: "indoor-green", name: "Planting indoors and at the edge", family: "comfort",
    one: "Plants at the threshold and in the room. Cheap, and read instantly as care.",
    what: "Large planters at the entrance, planting along the boundary, and substantial plants inside. It softens a monumental interior and works equally in a nave, a hall and a forecourt.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["entrance", "aisle", "community", "cafe", "outdoor", "carpark", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["delight", "identity", "maintenance", "resources", "context"],
    needs: { size: 0, noise: 0, openness: 2, facilities: 1 },
    uses: ["Nature & gardening", "Quiet & reflection"], permissions: ["none"], funding: "small",
    taster: "Six large planters either side of the door, planted for the season.",
    how: [
      "Start at the threshold — planting either side of a door is the oldest signal of welcome.",
      "Go large: one substantial plant reads as intent, six small ones as leftovers.",
      "Build watering into an existing routine, such as whoever unlocks."
    ],
    watch: [
      "Dead plants are worse than none. Without a watering rota, do not do this.",
      "Check drainage and water damage risk on historic floors before putting pots indoors."
    ],
    worksWith: ["threshold-edge", "domestic-comfort", "community-garden", "greening", "seating-outside"],
    precedents: [
      { id: "sheriff-centre", why: "The Urban Oasis lounge, built around planting, as a bookable setting." },
      { id: "garden-museum", why: "Planting brought inside a church and made the whole identity." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },

  /* ================= EVERYDAY SERVICES ================= */
  {
    id: "post-office", name: "Post office or parcel counter", family: "everyday",
    one: "An errand everybody has to run, inside a building most people never enter.",
    what: "A post office counter or parcel point inside the building. It gives someone with no interest in the institution a weekly reason to come through the door, and guarantees footfall from day one.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["worship", "aisle", "community", "entrance"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"],
    themes: ["enterprise", "context", "access", "legibility", "security"],
    needs: { size: 2, noise: 2, openness: 5, facilities: 3 },
    uses: ["Everyday services"], permissions: ["faculty", "changeuse", "governance"], funding: "trading",
    taster: "Host a pop-up collection point for a morning a week and see who is in the building.",
    how: [
      "Watch for the trigger — a branch closing, a postmaster retiring. That is when it is possible.",
      "Model the whole business at once, not one stream at a time.",
      "Zone the security so the counter locks down while the rest stays open, and vice versa."
    ],
    watch: [
      "Sunday closure of the whole centre is the usual price. Decide that before, not after.",
      "Success can make the worship invisible. Build the signals in from the start."
    ],
    worksWith: ["signage", "cafe", "advice-clinic", "trading-sub", "quiet-room"],
    tension: ["quiet-room"],
    precedents: [
      { id: "sheriff-centre", why: "A retiring postmaster, a tweet, and the first full post office in a working CofE church." }
    ],
    sources: ["plunkett", "glasshouse", "crossingThreshold"]
  },
  {
    id: "advice-clinic", name: "Advice clinic", family: "everyday",
    one: "Debt, benefits, housing or immigration advice, in a room with a door that shuts.",
    what: "A regular session run by a qualified partner using a private room. It needs almost nothing physically and answers acute local need.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "office", "chapel", "tower"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["access", "security", "maintenance", "legibility"],
    needs: { size: 1, noise: 0, openness: 3, facilities: 2 },
    uses: ["Everyday services"], permissions: ["governance"], funding: "volunteer",
    taster: "Offer a partner one free room for a six-week trial.",
    how: [
      "Ask the council, the CVS and the foodbank which advice your area is short of.",
      "Offer the room rather than running it yourself — advice is regulated and needs qualified staff.",
      "Provide real privacy, and a way in that is not past the whole coffee morning."
    ],
    watch: [
      "A low-key entrance matters more than anything else. People will not queue past a congregation.",
      "Do not let the advice become recruitment. Partners will withdraw, rightly."
    ],
    worksWith: ["food-project", "meeting-rooms", "post-office", "warm-space", "health-outreach"],
    precedents: [
      { id: "sheriff-centre", why: "Trading profits fund a free, FCA-registered debt advice service." }
    ],
    sources: ["crossingThreshold", "glasshouse"]
  },
  {
    id: "food-project", name: "Food pantry, fridge or bank", family: "everyday",
    one: "Surplus food, a fridge and a rota — often already running somewhere in the building.",
    what: "A community fridge, a pantry with a small membership fee, or a foodbank point. The design question is whether it is dignified and visible, or tucked in a back room.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "kitchen", "entrance", "aisle"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["access", "maintenance", "resources", "identity"],
    needs: { size: 2, noise: 1, openness: 5, facilities: 4 },
    uses: ["Everyday services"], permissions: ["governance", "licence"], funding: "volunteer",
    taster: "Run a surplus table for four Saturdays with a local shop or bakery.",
    how: [
      "Choose the model honestly: emergency parcels, a weekly shop with dignity, or surplus for anybody.",
      "Find the supply first — supermarket surplus, a bakery, a redistribution charity.",
      "Design against shame: somewhere anyone can walk up, and choose rather than receive."
    ],
    watch: [
      "Volunteer burnout is the main failure. Build the rota for twice the people you think you need.",
      "Food hygiene registration, temperature logs, and a fridge on a circuit that does not trip."
    ],
    worksWith: ["advice-clinic", "community-meal", "warm-space", "servery", "friends-group"],
    precedents: [
      { id: "sheriff-centre", why: "Camden's first community fridge, and a Food Share Project, both funded by trading." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },
  {
    id: "warm-space", name: "Warm space / drop-in", family: "everyday",
    one: "One heated room, a kettle, a chair and no requirement to explain yourself.",
    what: "A publicised session where the building is warm and anyone can sit for as long as they like, free. It converts the building's biggest running cost into its clearest public offer.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "aisle", "cafe", "chapel"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"], themes: ["access", "resources", "delight", "security"],
    needs: { size: 1, noise: 1, openness: 5, facilities: 3 },
    uses: ["Everyday services", "Quiet & reflection"], permissions: ["none"], funding: "council",
    taster: "This is already the taster. Run it four times and see who comes back.",
    how: [
      "Pick the smallest room you can heat properly, not the grandest you cannot.",
      "Hold a regular two-hour slot whatever the weather and whoever turns up.",
      "Put out tea, papers, a charger and wi-fi. Do not put out a sign-in sheet."
    ],
    watch: [
      "Do not attach a talk, a service or a form. The people who most need it stop coming.",
      "Have a policy for someone in crisis, and know the local numbers before you need them."
    ],
    worksWith: ["domestic-comfort", "heating", "servery", "advice-clinic", "open-hours"],
    precedents: [
      { id: "grand-junction", why: "Free community meals for older residents alongside a paid programme." }
    ],
    sources: ["glasshouse", "openChurches"]
  },

  /* ================= FOOD & HOSPITALITY ================= */
  {
    id: "servery", name: "Servery or tea point", family: "food",
    one: "A sink, a counter, hot water and a cupboard. The smallest thing that changes behaviour.",
    what: "A compact unit with a sink, hot water, a fridge and storage, sited so a group can make drinks without leaving the room. In a listed interior it can fold away entirely.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["aisle", "community", "worship", "undercroft", "tower"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction"], themes: ["flexibility", "maintenance", "enterprise", "resources"],
    needs: { size: 1, noise: 1, openness: 2, facilities: 2 },
    uses: ["Café", "Events & hire"], permissions: ["faculty"], funding: "small",
    taster: "A trestle table, an urn and a washing-up bowl, weekly for a term.",
    how: [
      "Watch how drinks are made now — the walk, the queue, the extension lead — and site it on that line.",
      "Choose free-standing over built-in: it survives a faculty far more easily and can be removed later.",
      "Price the drainage route before you fall in love with a position."
    ],
    watch: [
      "Water and drainage are the cost, not the joinery.",
      "A servery with nowhere to put the mugs away becomes a permanent mess."
    ],
    worksWith: ["storage", "community-meal", "warm-space", "esol", "hire"],
    precedents: [
      { id: "st-stephen-walbrook", why: "Minimal intervention in a highly significant interior — the discipline this needs." }
    ],
    sources: ["glasshouse", "edpLeadership", "crossingThreshold"]
  },
  {
    id: "cafe", name: "Café", family: "food",
    one: "The building's everyday, free, no-reason-needed way in.",
    what: "A staffed café with real opening hours, seating people can occupy without buying much, and a route in that passes nothing sacred or administrative. It does the most inviting of any use here.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["aisle", "cafe", "community", "undercroft", "entrance"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"],
    themes: ["enterprise", "context", "access", "delight", "maintenance"],
    needs: { size: 2, noise: 2, openness: 5, facilities: 4 },
    uses: ["Café"], permissions: ["faculty", "planning", "changeuse", "licence"], funding: "trading",
    taster: "A pop-up coffee cart two mornings a week, run by a local independent for the takings.",
    how: [
      "Establish demand before fabric: who passes, at what hours, and what is within three minutes' walk?",
      "Decide who runs it — your charity, a trading arm, a tenant, or volunteers. Each carries different risk.",
      "Design for lingering as much as serving, and plan the servicing route before the aesthetics."
    ],
    watch: [
      "Staffing is the whole business case. Volunteer cafés run well for two years, then falter.",
      "A café that closes without notice is worse than none — the building loses its easiest welcome."
    ],
    worksWith: ["transparency", "domestic-comfort", "post-office", "trading-sub", "accessible-wc"],
    precedents: [
      { id: "sheriff-centre", why: "The Sanctuary Café planned as one of four streams, not an add-on." },
      { id: "grand-junction", why: "A canal-side café — and the live opportunity is simply to reopen it reliably." },
      { id: "garden-museum", why: "A café that draws people who never intended to visit the museum." }
    ],
    sources: ["glasshouse", "plunkett", "crossingThreshold"]
  },
  {
    id: "community-meal", name: "Community meal or lunch club", family: "food",
    one: "One table, once a week, everyone eating the same thing.",
    what: "A regular shared meal — a lunch club, a pay-what-you-can supper, a community kitchen. It needs a kitchen, a rota and a room, and produces more interaction per pound than any building work here.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "kitchen", "aisle", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["access", "flexibility", "maintenance", "delight"],
    needs: { size: 2, noise: 3, openness: 4, facilities: 4 },
    uses: ["Everyday services", "Events & hire"], permissions: ["governance", "licence"], funding: "council",
    taster: "One meal. Invite by hand-delivered note to the fifty nearest doors.",
    how: [
      "Fix the day and time and never move them. The value is that it is in the diary.",
      "Lay proper tables — cloths, real plates. The difference between a meal and a handout is the setting.",
      "Seat people together rather than in family groups, and look hard at transport."
    ],
    watch: [
      "Cooking for numbers needs a kitchen rated for it. Ask environmental health before scaling up.",
      "Kitchen storage and chair storage. Both will be short."
    ],
    worksWith: ["servery", "food-project", "storage", "warm-space", "hire"],
    precedents: [
      { id: "grand-junction", why: "A free weekly meal for older residents, inside a venue that also hosts paid events." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },

  /* ================= CULTURE & GATHERING ================= */
  {
    id: "concerts", name: "Concerts & live music", family: "culture",
    one: "Use the acoustics you already have, for audiences who would never book a church.",
    what: "Ticketed and free performance in the main volume. Religious buildings are often the best-sounding rooms in the neighbourhood; the fit-out needed is lighting, power, seating and a licence.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["worship", "undercroft", "community"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["enterprise", "delight", "flexibility", "security", "context"],
    needs: { size: 3, noise: 5, openness: 3, facilities: 2 },
    uses: ["Culture & music", "Events & hire"], permissions: ["faculty", "licence", "governance"], funding: "trading",
    taster: "One evening with a local promoter or choir, pay-what-you-can, chairs you already own.",
    how: [
      "Invest in the three things that make a venue bookable: lighting, power for a PA, movable seating.",
      "Get a premises licence covering regulated entertainment before you programme anything.",
      "Partner with promoters — they bring audiences, technical staff and risk."
    ],
    watch: [
      "Noise is the commonest reason an events programme gets curtailed. Agree a limit and a finish time.",
      "Heating a large volume for an evening audience is expensive. Build it into the hire rate."
    ],
    worksWith: ["movable-seating", "lighting", "late-opening", "hire", "trading-sub"],
    tension: ["quiet-room", "acoustics"],
    precedents: [
      { id: "grand-junction", why: "A full music programme in a Grade I nave, funding the free programme." },
      { id: "st-stephen-walbrook", why: "Lunchtime recitals in a City interior of the highest significance." },
      { id: "sheriff-centre", why: "A Sofar Sounds partnership in a building whose main business is a post office." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },
  {
    id: "exhibition", name: "Exhibition & interpretation", family: "culture",
    one: "Tell the story of the building and the neighbourhood, on the wall people already pass.",
    what: "Temporary or permanent display: banners, panels, a community heritage exhibition, an AR guide. It gives a visitor a reason to stay longer than a glance, and to return when it changes.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "aisle", "entrance", "undercroft", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction"], themes: ["identity", "delight", "legibility", "context"],
    needs: { size: 1, noise: 1, openness: 3, facilities: 1 },
    uses: ["Heritage", "Culture & music", "Learning"], permissions: ["none", "faculty"], funding: "small",
    taster: "Six A1 boards made with a local history group, up for a month, with a comments book.",
    how: [
      "Make it with people rather than for them, and put it where people already stand.",
      "Change it. A permanent display stops being seen after three months.",
      "Advertise it outside — an unadvertised exhibition is a private pleasure."
    ],
    watch: [
      "No fixings into stone or plaster without advice, and usually a faculty.",
      "Strong daylight on textiles or paper will destroy them."
    ],
    worksWith: ["community-art", "trail", "signage", "coproduce", "library-culture"],
    precedents: [
      { id: "st-patricks-wapping", why: "Good banners, temporary and unadvertised — exactly the gap this fills." },
      { id: "grand-junction", why: "A digital heritage guide alongside a community curatorial panel." },
      { id: "garden-museum", why: "A whole building re-founded on one interpretive idea." }
    ],
    sources: ["glasshouse", "edpLeadership"]
  },
  {
    id: "hire", name: "Venue & event hire", family: "culture",
    one: "Sell the hours you are not using, and spend it on the hours you cannot sell.",
    what: "Renting the space for parties, receptions, conferences, filming and fairs. The most straightforward income a large volume generates, and in the best cases it funds the free programme.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Fully",
    zones: ["worship", "community", "undercroft", "outdoor", "aisle"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality"], themes: ["enterprise", "flexibility", "maintenance", "security"],
    needs: { size: 3, noise: 4, openness: 2, facilities: 4 },
    uses: ["Events & hire"], permissions: ["governance", "licence", "faculty"], funding: "trading",
    taster: "Price one room, list it on a hall-hire site, take three bookings.",
    how: [
      "Work out the true cost of an hour — heat, light, cleaning, wear, staff — before setting a rate.",
      "Publish capacities, layouts and photographs. Most enquiries are lost because nobody could find them.",
      "Protect the free programme in the diary first, or hire will eat every good slot."
    ],
    watch: [
      "Hire income is seasonal and lumpy. Do not build fixed costs on a good December.",
      "A building that is mostly hired stops being a community building. Decide the ratio and defend it."
    ],
    worksWith: ["movable-seating", "storage", "trading-sub", "concerts", "timetable"],
    tension: ["warm-space"],
    precedents: [
      { id: "grand-junction", why: "Nave and undercroft hired out, with all income returning to the charity." },
      { id: "sheriff-centre", why: "Main space, chapel, meeting room and lounges, each at a different price." }
    ],
    sources: ["plunkett", "glasshouse", "crossingThreshold"]
  },
  {
    id: "library-culture", name: "Library, reading room or archive", family: "culture",
    one: "A civic use with a natural quiet, and a ready-made constituency.",
    what: "Housing a library service, a reading room, a local studies archive or a book exchange. It matches the register of a sacred interior almost exactly and brings a use with public funding.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["aisle", "tower", "community", "undercroft", "worship"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Temporality"], themes: ["access", "flexibility", "delight", "identity", "resources"],
    needs: { size: 2, noise: 1, openness: 4, facilities: 3 },
    uses: ["Learning", "Heritage", "Quiet & reflection"], permissions: ["faculty", "changeuse", "governance"], funding: "council",
    taster: "A shelf of books by the door on an honesty basis, or a monthly book swap.",
    how: [
      "Talk to the council's library service — many are looking for cheaper civic buildings.",
      "Check floor loading, environmental stability, security and IT before promising anything.",
      "Consider the upper spaces: a refitted tower room can hold a branch."
    ],
    watch: [
      "Books plus damp is a fast and expensive failure. Do the environmental survey first.",
      "Public library staffing and opening standards may exceed what volunteers can meet."
    ],
    worksWith: ["quiet-room", "transparency", "heating", "exhibition", "esol"],
    precedents: [
      { id: "lambeth-palace-library", why: "A purpose-built library on faith land, with publicness left undesigned." },
      { id: "st-patricks-wapping", why: "Children's books already on site, with nothing making them read as an offer." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },

  /* ================= LEARNING, CARE & WELLBEING ================= */
  {
    id: "esol", name: "ESOL & adult learning", family: "learning",
    one: "Language classes with an education partner's funding behind them.",
    what: "English classes, conversation cafés, digital skills or accredited learning, delivered with a college or adult education service. Demand in London runs consistently ahead of supply.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "aisle", "chapel", "office", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["access", "flexibility", "maintenance", "enterprise"],
    needs: { size: 2, noise: 1, openness: 4, facilities: 3 },
    uses: ["Learning"], permissions: ["governance"], funding: "council",
    taster: "A weekly volunteer-run conversation café — a table, a kettle, a fixed hour.",
    how: [
      "Contact the borough's adult education service and the nearest FE college; both need venues.",
      "Offer a whiteboard, decent light, movable chairs and heating that works in January.",
      "Check whether learners need childcare — a crèche next door doubles attendance."
    ],
    watch: [
      "Term-time-only use leaves long gaps. Plan something for the holidays.",
      "Be scrupulous about not proselytising. Providers and learners will not return."
    ],
    worksWith: ["acoustics", "toddler", "heating", "servery", "library-culture"],
    precedents: [
      { id: "grand-junction", why: "Free classes with Westminster Adult Education Service, plus a language café." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },
  {
    id: "wellbeing", name: "Wellbeing classes", family: "learning",
    one: "Yoga, chair yoga, Zumba, mindfulness — the easiest bookings a hall will take.",
    what: "Regular exercise and wellbeing sessions, hired out to instructors or run free. Low fit-out, high frequency, and they fill the daytime hours that are hardest to let.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "worship", "aisle", "undercroft", "outdoor"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality", "Interaction"], themes: ["flexibility", "maintenance", "access", "resources"],
    needs: { size: 2, noise: 2, openness: 3, facilities: 3 },
    uses: ["Learning", "Events & hire"], permissions: ["governance"], funding: "trading",
    taster: "Offer one instructor a free six-week slot in exchange for feedback on the room.",
    how: [
      "Clear a floor area, check the surface, and find storage for mats and stacked chairs.",
      "Let the least popular slots cheaply and keep evenings for higher-value hire.",
      "Run at least one free strand — chair yoga for older residents, or a women-only class."
    ],
    watch: [
      "Some congregations object to particular practices. Have that conversation early, in the open.",
      "Heat matters more here than anywhere. Nobody returns to a cold class."
    ],
    worksWith: ["movable-seating", "storage", "heating", "hire", "timetable"],
    precedents: [
      { id: "grand-junction", why: "Chair yoga, lunchtime yoga, women's yoga and Zumba, weekly, in a Grade I church." },
      { id: "sheriff-centre", why: "Weekly classes in the chapel beside the post office and café." }
    ],
    sources: ["glasshouse"]
  },
  {
    id: "creative-workshop", name: "Creative workshops & making", family: "learning",
    one: "Art, craft, repair — activity that makes strangers talk sideways.",
    what: "Regular sessions where people make things together: art for wellbeing, textiles, a repair café, a men's shed. Shoulder-to-shoulder activity is the most reliable producer of conversation.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "undercroft", "aisle", "office"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["flexibility", "maintenance", "delight", "enterprise"],
    needs: { size: 2, noise: 3, openness: 4, facilities: 3 },
    uses: ["Culture & music", "Learning"], permissions: ["governance"], funding: "council",
    taster: "One afternoon, one long table, scrap-store materials, tea.",
    how: [
      "Choose a long table over separate small ones. Everything about interaction follows from that.",
      "Secure storage for half-finished work, or nobody can start anything that takes two sessions.",
      "Exhibit the results in the building — it closes the loop and recruits the next group."
    ],
    watch: [
      "Kilns, solvents and power tools change your insurance and fire risk assessment.",
      "Groups that close in on themselves are common. Build in a visible open door and a greeter."
    ],
    worksWith: ["community-art", "storage", "exhibition", "youth-club", "servery"],
    precedents: [
      { id: "grand-junction", why: "Community art for wellbeing and knit-and-stitch, weekly and free to eligible people." },
      { id: "st-patricks-wapping", why: "Ancillary buildings let as low-rent creative workspace beside the church." }
    ],
    sources: ["glasshouse", "edpCount"]
  },
  {
    id: "health-outreach", name: "Health & social care outreach", family: "learning",
    one: "A clinic, a health check or a carers' group, in a building people already trust.",
    what: "Hosting NHS, public health or social care outreach. The service brings its own staff and funding; you bring the room and the reputation.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "office", "chapel", "aisle"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Temporality"], themes: ["access", "security", "maintenance", "context"],
    needs: { size: 2, noise: 1, openness: 4, facilities: 4 },
    uses: ["Everyday services", "Learning"], permissions: ["governance"], funding: "council",
    taster: "Offer the room for a single flu or blood-pressure clinic.",
    how: [
      "Approach the Primary Care Network, public health and the social prescribing service.",
      "Check what they need: privacy, hand-washing, step-free access, secure waste, a cleanable room.",
      "Offer a regular slot rather than one-offs, so they can build a caseload."
    ],
    watch: [
      "Clinical use has requirements a church hall may not meet. Ask before promising.",
      "Do not let the pastoral offer blur into the clinical one."
    ],
    worksWith: ["advice-clinic", "accessible-wc", "meeting-rooms", "toddler", "step-free"],
    precedents: [
      { id: "grand-junction", why: "Baby massage and parent-carer programmes delivered with external partners." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },

  /* ================= PLAY & YOUNG PEOPLE ================= */
  {
    id: "toddler", name: "Parent & toddler group", family: "play",
    one: "The most under-provided use in most neighbourhoods, and the easiest to start.",
    what: "A weekly stay-and-play with toys, a floor mat and tea for the adults. It needs warmth, baby-change, buggy space and a floor that can be sat on.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "aisle", "play", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["access", "flexibility", "maintenance", "security"],
    needs: { size: 2, noise: 3, openness: 4, facilities: 3 },
    uses: ["Play"], permissions: ["governance"], funding: "volunteer",
    taster: "Run it four times before advertising widely — word of mouth among parents is faster.",
    how: [
      "Check the three blockers first: buggy parking, baby-change, and a floor warm enough to sit on.",
      "Charge a pound with tea included, so it feels like a service rather than charity.",
      "Get safeguarding right, and put the toys on wheels so the room clears in ten minutes."
    ],
    watch: [
      "Noise travels in a nave. Agree where it happens and what stays quiet.",
      "Groups that become cliquey exclude the isolated parents they were meant to reach."
    ],
    worksWith: ["accessible-wc", "small-welcome", "acoustics", "esol", "sensory"],
    precedents: [
      { id: "grand-junction", why: "Baby sing-and-play, baby massage and family art parties, free, in a Grade I building." },
      { id: "sheriff-centre", why: "The same audience at larger scale, with additional-needs sessions added." }
    ],
    sources: ["glasshouse", "edpCount"]
  },
  {
    id: "soft-play", name: "Soft play", family: "play",
    one: "A two-storey play frame in an aisle, charging admission, paying for the debt adviser.",
    what: "A permanent indoor play installation with age-separated zones, booked sessions and an admission charge. One of the few community uses that reliably generates surplus — and the noisiest.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["aisle", "play", "community", "worship"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["enterprise", "security", "maintenance", "access", "flexibility"],
    needs: { size: 3, noise: 5, openness: 4, facilities: 4 },
    uses: ["Play", "Events & hire"], permissions: ["faculty", "planning", "changeuse", "governance"], funding: "trading",
    taster: "Hire a portable set for a half-term play day. Count the takings and the complaints.",
    how: [
      "Establish the market: how far is the nearest, what does it charge, how many under-fives live nearby?",
      "Choose a bay that can be enclosed acoustically without touching significant fabric.",
      "Protect a quiet room in the same building, and programme the edges of the day too."
    ],
    watch: [
      "Acoustics are the whole argument. Get a consultant before the faculty application.",
      "Play equipment dates and wears. Budget for replacement from year one."
    ],
    worksWith: ["quiet-room", "acoustics", "cafe", "accessible-wc", "sensory"],
    tension: ["quiet-room", "concerts"],
    precedents: [
      { id: "sheriff-centre", why: "Two levels in the north aisle, with additional-needs sessions and soft-play lates." }
    ],
    sources: ["glasshouse", "plunkett", "edpLeadership"]
  },
  {
    id: "youth-club", name: "Youth club & after-school provision", family: "play",
    one: "Over a thousand youth centres closed in England between 2010 and 2023. This is the gap.",
    what: "A drop-in or structured session for school-age young people: games, chill-out space, arts, a hot meal, homework support. The most acute space shortage there is, and the hardest to sustain on volunteers.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "undercroft", "play", "outdoor", "aisle"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["access", "security", "flexibility", "maintenance"],
    needs: { size: 3, noise: 4, openness: 4, facilities: 4 },
    uses: ["Play", "Learning"], permissions: ["governance"], funding: "council",
    taster: "Open one evening with a pool table, wi-fi, food and two trained adults. Do not programme it at first.",
    how: [
      "Partner with a youth work organisation — qualified workers are the difference.",
      "Feed them. A hot meal is the single most effective attendance measure in youth work.",
      "Give them authorship: let them name it, decorate it and choose part of the programme."
    ],
    watch: [
      "Funding is short-term and cyclical. Build on a partner's core funding where you can.",
      "Neighbour complaints about young people gathering outside are near-universal. Agree a routine."
    ],
    worksWith: ["community-art", "late-opening", "creative-workshop", "partnership", "playground"],
    precedents: [
      { id: "grand-junction", why: "A weekly drop-in with games, arts and a healthy meal for 8–13s." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },
  {
    id: "playground", name: "Playground or play landscape", family: "play",
    one: "Outdoor play on ground the building already owns.",
    what: "Fixed play equipment, a natural play landscape, or simply a safe enclosed area given over to children. Well suited to forecourts and the non-burial parts of churchyards.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["outdoor", "carpark", "garden", "churchyard"],
    sacredness: ["Semi-secular", "Secular", "Active worship"],
    dims: ["Use", "Publicness", "Interaction"], themes: ["access", "security", "maintenance", "context", "delight"],
    needs: { size: 2, noise: 4, openness: 5, facilities: 1 }, outdoor: true,
    uses: ["Play", "Nature & gardening"], permissions: ["faculty", "planning"], funding: "council",
    taster: "A play day with borrowed equipment and a chalk trail. Let children vote on a site plan.",
    how: [
      "Confirm the burial status of the ground before anything else.",
      "Design overlooking: play areas need to be seen from a café window, a path or a kitchen.",
      "Consider natural play — logs, mounds, planting — which ages better and suits a churchyard."
    ],
    watch: [
      "Play equipment in consecrated ground needs a faculty and sensitive handling.",
      "Annual inspection and insurance are ongoing costs, not a one-off."
    ],
    worksWith: ["seating-outside", "greening", "youth-club", "small-welcome", "paths"],
    tension: ["memorial"],
    precedents: [
      { id: "st-johns-churchyard-wapping", why: "A churchyard beside parks where children already dominate the passing population." },
      { id: "tower-hamlets-cemetery-park", why: "A burial landscape that has sized recreation and remembrance apart." }
    ],
    sources: ["glasshouse", "edpCount"]
  },

  /* ================= WORK & ENTERPRISE ================= */
  {
    id: "workspace", name: "Affordable workspace & studios", family: "work",
    one: "Low rent in redundant ancillary buildings — and low rent is the point.",
    what: "Letting former schoolrooms, halls or vaults as studios, maker space or desks. It produces steady revenue, daytime occupancy and a constituency who care about the building.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["office", "community", "undercroft", "tower"],
    sacredness: ["Semi-secular", "Secular", "Active worship"],
    dims: ["Use", "Temporality"], themes: ["enterprise", "identity", "maintenance", "security", "resources"],
    needs: { size: 2, noise: 2, openness: 2, facilities: 4 },
    uses: ["Events & hire", "Learning"], permissions: ["planning", "changeuse", "governance"], funding: "trading",
    taster: "Let one room on a rolling monthly licence to a single maker.",
    how: [
      "Survey what you have: power, heat, light, access hours, lockability, a route for materials.",
      "Use licences rather than leases where you want flexibility, and take advice on security of tenure.",
      "Programme one public moment a year — open studios — so it adds publicness, not only income."
    ],
    watch: [
      "Workspace can privatise a building quietly. Keep a public route and a public room.",
      "Avoid over-formalising. A corporate fit-out drives out the tenants who came for cheap freedom."
    ],
    worksWith: ["meeting-rooms", "trading-sub", "heating", "creative-workshop", "storage"],
    tension: ["open-hours"],
    precedents: [
      { id: "st-patricks-wapping", why: "Redundant ancillary buildings let as creative workspace beside a working church." },
      { id: "lambeth-palace-library", why: "Institution-led development where publicness had to be designed, not assumed." }
    ],
    sources: ["glasshouse", "atu", "crossingThreshold"]
  },
  {
    id: "meeting-rooms", name: "Bookable meeting & therapy rooms", family: "work",
    one: "A quiet, well-lit room with wi-fi, let by the hour.",
    what: "One or two small rooms fitted for professional use and let to therapists, coaches, tutors and small charities. Small capital, steady income, and it fills the daytime.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["office", "community", "chapel", "tower"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality"], themes: ["enterprise", "flexibility", "security", "maintenance"],
    needs: { size: 1, noise: 0, openness: 2, facilities: 4 },
    uses: ["Events & hire", "Everyday services"], permissions: ["governance"], funding: "trading",
    taster: "Furnish one room properly and list it on an hourly booking platform for a term.",
    how: [
      "Fit it to a professional standard — a good chair, good light and reliable wi-fi.",
      "Solve confidentiality: a door that shuts, no overhearing, and a discreet waiting position.",
      "Set up online booking and a code system that does not need a volunteer present."
    ],
    watch: [
      "Therapy and advice need real soundproofing. A stud partition is not enough.",
      "Check insurance and safeguarding for one-to-one work in let rooms."
    ],
    worksWith: ["advice-clinic", "acoustics", "workspace", "health-outreach", "digital"],
    precedents: [
      { id: "sheriff-centre", why: "A private meeting and therapy room let inside a busy community venue." }
    ],
    sources: ["plunkett", "glasshouse"]
  },
  {
    id: "market", name: "Market, fair or car boot", family: "work",
    one: "Trading on ground the building already owns, on days it is otherwise empty.",
    what: "A regular market, craft fair or farmers' market in the nave, the hall, the forecourt or the churchyard path. How churches have used their ground for centuries, needing almost no permanent change.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "outdoor", "carpark", "community", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"], themes: ["enterprise", "context", "access", "security"],
    needs: { size: 3, noise: 3, openness: 5, facilities: 2 },
    uses: ["Events & hire", "Everyday services"], permissions: ["governance", "licence", "planning"], funding: "trading",
    taster: "One Saturday, ten tables, stallholders found through a local traders' group.",
    how: [
      "Check whether street trading consent or a temporary event notice is needed.",
      "Sort tables, power, a WC, a bin plan and somewhere for traders to unload.",
      "Run it on a fixed date — first Saturday of the month — so people learn it."
    ],
    watch: [
      "Markets are hard on grass and gravestones. Lay out on hard surfaces and paths.",
      "Neighbouring shops may object. Talk to them first, and make space for them."
    ],
    worksWith: ["meanwhile", "context-fit", "seating-outside", "trading-sub", "cafe"],
    precedents: [
      { id: "st-georges-gardens", why: "Consecrated ground already carrying programmed public events." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },

  /* ================= QUIET & REMEMBRANCE ================= */
  {
    id: "quiet-room", name: "Protected quiet room", family: "quiet",
    one: "One room that stays quiet, whatever else the building is doing.",
    what: "A side chapel, vestry or screened bay kept available for prayer, reflection or silence through all opening hours, with real acoustic separation. It is what makes every noisier intervention arguable.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["chapel", "aisle", "tower", "worship"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness"], themes: ["identity", "security", "delight", "flexibility"],
    needs: { size: 1, noise: 0, openness: 4, facilities: 0 },
    uses: ["Quiet & reflection", "Worship"], permissions: ["faculty"], funding: "small",
    taster: "Designate a bay, sign it, keep it clear of stored chairs for a month. People will use it.",
    how: [
      "Choose a space that can actually be separated, and deal with sound properly — designation alone is not enough.",
      "Keep it clear. The commonest failure is silting up with stacked chairs and boxes.",
      "Make it visible and obviously available from the busy part of the building."
    ],
    watch: [
      "It needs to be private but not concealed. Design for glimpsed supervision.",
      "Once it is bookable, it is no longer a quiet room."
    ],
    worksWith: ["soft-play", "post-office", "cafe", "acoustics", "sensory"],
    precedents: [
      { id: "sheriff-centre", why: "A soundproofed Lady Chapel open all week inside a deliberately noisy building." },
      { id: "grand-junction", why: "Reflective services in the undercroft while the nave holds something else." }
    ],
    sources: ["edpLeadership", "glasshouse"]
  },
  {
    id: "memorial", name: "Remembrance & memorial space", family: "quiet",
    one: "Somewhere to grieve that is designed rather than left over.",
    what: "A garden of remembrance, a memorial wall, a book, an ash-scattering area, or a bench and planting. It gives a burial site a contemporary function and a reason for people to return.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["churchyard", "garden", "chapel", "outdoor"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness"], themes: ["identity", "delight", "maintenance", "access"],
    needs: { size: 1, noise: 0, openness: 4, facilities: 0 }, outdoor: true,
    uses: ["Quiet & reflection", "Nature & gardening"], permissions: ["faculty", "planning"], funding: "small",
    taster: "A bench, a planted bed and a small sign in the quietest corner.",
    how: [
      "Talk to families and to the funeral directors who serve the area — they know what is missing.",
      "Separate memorial from recreational ground by planting, level or path, not fence and sign.",
      "Record who is commemorated and where, digitally as well as on paper."
    ],
    watch: [
      "Faculty rules on materials and inscriptions are detailed and enforced. Check before promising.",
      "Expectations last generations. Do not create a scheme you cannot maintain for fifty years."
    ],
    worksWith: ["paths", "seating-outside", "nature-reserve", "churchyard-open", "quiet-room"],
    tension: ["playground", "market"],
    precedents: [
      { id: "paddington-old-cemetery", why: "Grounds at L5 and chapels at L1 — the gradient made visible." },
      { id: "tower-hamlets-cemetery-park", why: "Remembrance and recreation sized apart within one landscape." }
    ],
    sources: ["churchcare", "glasshouse"]
  },
  {
    id: "multifaith", name: "Multi-faith & interfaith space", family: "quiet",
    one: "Space more than one faith community can genuinely use.",
    what: "A shared prayer or reflection room designed for several faiths, or hosting another community's regular worship. The most direct spatial expression of a post-secular city, and the hardest to do well.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["chapel", "community", "worship", "tower"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"], themes: ["identity", "flexibility", "access", "security"],
    needs: { size: 2, noise: 1, openness: 4, facilities: 3 },
    uses: ["Worship", "Quiet & reflection"], permissions: ["faculty", "governance"], funding: "volunteer",
    taster: "Host one shared event — a meal, a civic commemoration — before proposing shared space.",
    how: [
      "Find which communities near you are place-seeking: meeting in a hired hall or an industrial unit.",
      "Understand the actual requirements — orientation, ablution, shoe storage, times, festival calendars.",
      "Agree governance in writing: who books, who cleans, who decides, how disputes resolve."
    ],
    watch: [
      "This must not become one community hosting another on sufferance. Plan parity of voice from the start.",
      "Expect opposition within your own congregation, and hold it openly rather than administratively."
    ],
    worksWith: ["quiet-room", "timetable", "coproduce", "partnership", "sensory"],
    precedents: [
      { id: "lambeth-palace-library", why: "Faith institution, public ambition, and a threshold that decides if the public part is real." },
      { id: "grand-junction", why: "Arab, Caribbean and African cultural programming inside an Anglican church." }
    ],
    sources: ["edpLeadership", "glasshouse", "npff"]
  },

  /* ================= GROUNDS, NATURE & GREEN ================= */
  {
    id: "churchyard-open", name: "Open and legible churchyard", family: "grounds",
    one: "Paths, gates, light and mowing — the grounds as a route rather than a leftover.",
    what: "Treating the churchyard as public realm: more than one entrance, a legible path network, cut lines that read as intentional, and sight lines that make it feel safe. Most churchyards are open and almost none are designed.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["churchyard", "outdoor", "garden"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["access", "legibility", "security", "maintenance", "delight"],
    needs: { size: 2, noise: 1, openness: 5, facilities: 0 }, outdoor: true,
    uses: ["Quiet & reflection", "Nature & gardening", "Heritage"], permissions: ["faculty", "planning"], funding: "small",
    taster: "Unlock the second gate for a month. A churchyard with one entrance is a cul-de-sac.",
    how: [
      "Map the desire lines — where people cut through, or would if they could.",
      "Open a second entrance if there is one. This single move does more than any other.",
      "Use mowing as design: a mown edge around long grass reads as cared for, not abandoned."
    ],
    watch: [
      "Consult on any works to memorials, and expect strong feelings.",
      "More footfall means more litter. Fund the maintenance before you generate the footfall."
    ],
    worksWith: ["paths", "seating-outside", "small-welcome", "friends-group", "nature-reserve"],
    precedents: [
      { id: "st-johns-churchyard-wapping", why: "Gravestones set against the wall, and a green whose use depends on its surroundings." },
      { id: "st-georges-gardens", why: "A burial ground fully converted into a legible civic garden." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "community-garden", name: "Community garden & growing", family: "grounds",
    one: "Beds, tools, a tap and a group with keys.",
    what: "Cultivated growing space on church land — raised beds, an orchard, allotment plots — run by volunteers. Low-cost weekday activity, and one of the few uses that improves the ground it occupies.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["garden", "churchyard", "outdoor", "carpark"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["resources", "maintenance", "access", "delight", "context"],
    needs: { size: 2, noise: 2, openness: 4, facilities: 1 }, outdoor: true,
    uses: ["Nature & gardening"], permissions: ["faculty", "governance"], funding: "volunteer",
    taster: "Four raised beds and a Saturday morning session. Under £400, and one season tells you.",
    how: [
      "Find the group before the beds. Gardens fail on volunteers, not soil.",
      "Check burial status, contamination, drainage and water — raised beds solve several at once.",
      "Provide the unglamorous kit: a tap, a lockable store, compost, a seat, somewhere to wash hands."
    ],
    watch: [
      "Growing on burial ground needs a faculty; raised beds on existing hard standing avoid most of it.",
      "August. Every community garden needs a holiday watering rota, agreed in May."
    ],
    worksWith: ["friends-group", "indoor-green", "greening", "small-welcome", "nature-reserve"],
    precedents: [
      { id: "st-dunstan-in-the-east", why: "A garden made inside a ruin — the most-loved version of this in London." },
      { id: "garden-museum", why: "A deconsecrated church whose whole identity was rebuilt around growing." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "nature-reserve", name: "Nature reserve & outdoor classroom", family: "grounds",
    one: "Manage the burial landscape for biodiversity, and teach in it.",
    what: "Treating a large cemetery or churchyard as a nature reserve: habitat management, wildlife recording, guided walks, school visits. The best available use for burial landscapes too large to garden.",
    scale: "Large", cost: "££ £100k–£1m", timescale: "Over 5 years", reversible: "Mostly",
    zones: ["churchyard", "garden", "outdoor"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"], themes: ["resources", "maintenance", "access", "context", "delight"],
    needs: { size: 4, noise: 1, openness: 5, facilities: 2 }, outdoor: true,
    uses: ["Nature & gardening", "Learning", "Heritage"], permissions: ["faculty", "governance", "planning"], funding: "development",
    taster: "One bioblitz weekend with a local wildlife trust: a species list, a volunteer list, a press story.",
    how: [
      "Do a baseline ecological survey — it founds both the management plan and the funding bid.",
      "Zone the site: intensively managed near the entrance, meadow in the middle, left alone at the edges.",
      "Build the volunteer base early; a Friends group is the only realistic long-term model at this scale."
    ],
    watch: [
      "Remembrance and recreation must be sized apart. Picnics on a recent grave are a zoning failure.",
      "Relying on volunteers indefinitely is this sector's structural weakness. Plan for one paid post."
    ],
    worksWith: ["friends-group", "paths", "trail", "memorial", "churchyard-open"],
    precedents: [
      { id: "tower-hamlets-cemetery-park", why: "The definitive London example, held by a charity and its volunteers." },
      { id: "paddington-old-cemetery", why: "A large cemetery working out how public and how active it should be." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },
  {
    id: "greening", name: "Greening & climate adaptation", family: "grounds",
    one: "Trees, shade, rain gardens and permeable ground on hard standing you already own.",
    what: "Converting forecourts, car parks and paved ground to planted, permeable, shaded space. Religious sites hold a surprising amount of London's underused hard standing.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["carpark", "outdoor", "churchyard", "garden"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use"], themes: ["resources", "delight", "maintenance", "context", "access"],
    needs: { size: 2, noise: 0, openness: 4, facilities: 0 }, outdoor: true,
    uses: ["Nature & gardening", "Quiet & reflection"], permissions: ["faculty", "planning"], funding: "council",
    taster: "Semi-mature trees in large planters for a summer, where you think the permanent ones should go.",
    how: [
      "Count cars at three times of day before assuming the car park is needed.",
      "Prioritise shade on the routes and seats people already use — the best small-site climate move.",
      "Check council tree and greening grants and neighbourhood CIL; this work is unusually well funded."
    ],
    watch: [
      "Tree roots meet historic foundations and burials. Species and position both need advice.",
      "New planting needs three years of watering. Budget it or lose the trees."
    ],
    worksWith: ["seating-outside", "paths", "community-garden", "playground", "indoor-green"],
    precedents: [
      { id: "st-dunstan-in-the-east", why: "Ruin, planting and shade producing one of the City's best microclimates." },
      { id: "paddington-old-cemetery", why: "A large green asset whose value is canopy, quiet and everyday walking." }
    ],
    sources: ["glasshouse", "npff"]
  },

  /* ================= FABRIC & INFRASTRUCTURE ================= */
  {
    id: "accessible-wc", name: "Accessible WC & baby change", family: "fabric",
    one: "The single most common thing standing between a building and a community use.",
    what: "At least one accessible WC with baby change, on the same level as the main activity and reachable without going outside. It blocks almost every use in this library until it exists.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Permanent",
    zones: ["wc", "tower", "entrance", "community", "aisle"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use"], themes: ["access", "maintenance", "resources", "legibility"],
    needs: { size: 1, noise: 0, openness: 2, facilities: 1 },
    uses: ["Everyday services"], permissions: ["faculty", "planning"], funding: "capital",
    taster: "Borrow an accessible portable unit for an event and measure who attends.",
    how: [
      "Get the drainage survey first — where the drain runs decides the whole project.",
      "Appraise the tower base, a vestry, an aisle bay and a small extension as options, not one pick.",
      "Design to inclusive design standards, not the minimum, and sign it from the entrance."
    ],
    watch: [
      "Access requirements can conflict with others — design the conflict rather than discovering it.",
      "Drainage, archaeology and the faculty all meet here. Allow far more time than the room's size suggests."
    ],
    worksWith: ["step-free", "cafe", "toddler", "soft-play", "health-outreach"],
    precedents: [
      { id: "grand-junction", why: "A compact new wing holding the café, lift and level access the Grade I church could not." }
    ],
    sources: ["cae", "glasshouse", "churchcare"]
  },
  {
    id: "step-free", name: "Step-free access", family: "fabric",
    one: "Everyone through the same door.",
    what: "Removing or ramping the steps, raising the pavement, levelling thresholds, or adding a lift. The test is not compliance but whether a wheelchair user uses the front door like everybody else.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Permanent",
    zones: ["entrance", "worship", "outdoor", "community"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use"], themes: ["access", "identity", "legibility", "delight"],
    needs: { size: 1, noise: 0, openness: 3, facilities: 1 },
    uses: ["Everyday services"], permissions: ["faculty", "planning"], funding: "capital",
    taster: "Hire a temporary ramp for a month of events and record how many people use it.",
    how: [
      "Survey every level change from pavement to room, including ones people have stopped noticing.",
      "Work on the public realm too — raising the pavement can remove a step for free.",
      "Prefer one accessible main entrance over a cheaper side route, and test it with real users."
    ],
    watch: [
      "Ramp gradients and landings take more space than groups expect. Get them drawn early.",
      "Historic thresholds are significant. A conservation-minded solution gets approved; a crude one does not."
    ],
    worksWith: ["accessible-wc", "threshold-edge", "paths", "health-outreach", "extension"],
    precedents: [
      { id: "grand-junction", why: "Level access and a lift delivered through a new wing, not by compromising the church." },
      { id: "sheriff-centre", why: "Level entry throughout, so pushchairs use the same door as everyone else." }
    ],
    sources: ["cae", "glasshouse", "historicEngland"]
  },
  {
    id: "movable-seating", name: "Movable seating", family: "fabric",
    one: "The highest-value change a nave can make, and the most contested.",
    what: "Replacing or partly removing fixed pews with good stackable chairs, or making pews movable. It converts a single-use room into a flexible one and usually enables everything else.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["worship", "aisle", "chapel"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality", "Interaction"], themes: ["flexibility", "maintenance", "delight", "identity"],
    needs: { size: 2, noise: 0, openness: 2, facilities: 2 },
    uses: ["Worship", "Events & hire", "Culture & music"], permissions: ["faculty"], funding: "capital",
    taster: "Clear one side aisle only, and borrow sample chairs for people to sit on and vote between.",
    how: [
      "Understand first why people care — for many, pews are what a church looks like.",
      "Try the partial version: one aisle often releases enough space without losing the character.",
      "Solve storage before you buy. 'The back of the nave' is not an answer."
    ],
    watch: [
      "The commonest flashpoint in a reordering. Manage it as engagement, not procurement.",
      "Cheap chairs are a false economy that will be re-bought in seven years, and will look it."
    ],
    worksWith: ["storage", "concerts", "hire", "wellbeing", "community-meal"],
    precedents: [
      { id: "st-stephen-walbrook", why: "Reordering at furniture scale where the room itself is the asset." },
      { id: "sheriff-centre", why: "Pews drawn back toward the altar, releasing the aisles for everything else." }
    ],
    sources: ["edpLeadership", "churchcare", "glasshouse"]
  },
  {
    id: "heating", name: "Heating, insulation & retrofit", family: "fabric",
    one: "The running cost that decides whether anything else is affordable.",
    what: "Rethinking how the building is warmed: targeted radiant heat, insulation where the fabric allows, draught-proofing, secondary glazing, and controls a volunteer can operate.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["worship", "community", "aisle", "undercroft", "chapel"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality"], themes: ["resources", "maintenance", "flexibility", "delight"],
    needs: { size: 2, noise: 0, openness: 1, facilities: 2 },
    uses: ["Events & hire", "Learning"], permissions: ["faculty", "planning"], funding: "capital",
    taster: "Six radiant heaters and a hired thermal camera will find your draughts for under a thousand pounds.",
    how: [
      "Measure before specifying: a heat-loss survey and a thermal walk-round show where the money goes.",
      "Do the cheap things first — draught-proofing, curtains, closing the porch.",
      "Heat people rather than volume, and zone the controls so one area warms without the building."
    ],
    watch: [
      "Changing the moisture regime of a historic building damages it. Insulation in the wrong place causes decay.",
      "Heat pumps need space, acoustic thought and an emitter strategy — not a drop-in boiler swap."
    ],
    worksWith: ["warm-space", "esol", "wellbeing", "workspace", "library-culture"],
    precedents: [
      { id: "sheriff-centre", why: "Underfloor heating in the south aisle only, making a café possible without heating the church." }
    ],
    sources: ["glasshouse", "churchcare", "historicEngland"]
  },
  {
    id: "storage", name: "Storage", family: "fabric",
    one: "The most underestimated requirement in every project in this library.",
    what: "Purpose-made storage for chairs, tables, play equipment and each group's kit — sited where it is needed, sized for what actually goes in it, and lockable per group.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["store", "community", "tower", "undercroft", "aisle"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality"], themes: ["maintenance", "flexibility", "identity", "security"],
    needs: { size: 1, noise: 0, openness: 1, facilities: 1 },
    uses: ["Events & hire"], permissions: ["faculty"], funding: "small",
    taster: "Count every item currently living on the floor or behind a pillar. That inventory is the brief.",
    how: [
      "Inventory what must be stored, with dimensions, before designing anything.",
      "Put storage next to where things are used, and give each regular group a lockable cupboard.",
      "Design in trolleys and wheels so one person can clear a room in ten minutes."
    ],
    watch: [
      "Storage built into historic fabric needs a faculty; free-standing joinery is easier to approve.",
      "Without a clear-out policy it fills, then overflows into the quiet room."
    ],
    worksWith: ["movable-seating", "hire", "creative-workshop", "toddler", "servery"],
    precedents: [
      { id: "sheriff-centre", why: "Four uses sharing one nave, only possible because each has somewhere to put things." }
    ],
    sources: ["glasshouse"]
  },
  {
    id: "extension", name: "New wing or extension", family: "fabric",
    one: "When the historic building genuinely cannot hold what is needed, build beside it.",
    what: "A new structure attached to or beside the building, holding the servicing the fabric cannot — WCs, kitchen, lift, café, offices — and often solving level access at the same time.",
    scale: "Large", cost: "£££ over £1m", timescale: "Over 5 years", reversible: "Permanent",
    zones: ["outdoor", "entrance", "carpark", "community"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction"], themes: ["access", "identity", "context", "enterprise", "resources", "delight"],
    needs: { size: 4, noise: 3, openness: 4, facilities: 5 },
    uses: ["Café", "Learning", "Events & hire"], permissions: ["faculty", "planning", "changeuse"], funding: "capital",
    taster: "None — but a year running the intended activities in temporary accommodation tells you what it must contain.",
    how: [
      "Prove the need: an extension is what you build after an options appraisal rules out everything inside.",
      "Record why each rejected option was rejected. Funders and the DAC will both ask.",
      "Decide the architectural relationship deliberately — clear distinction or careful match, not a drift between."
    ],
    watch: [
      "Archaeology and burials. Excavation on a church site is slow and costly, and must be funded for.",
      "Expect three to ten years. Most projects this size fail on capacity, not on design."
    ],
    worksWith: ["accessible-wc", "step-free", "cafe", "context-fit", "partnership"],
    precedents: [
      { id: "grand-junction", why: "A new wing on a steep sliver of land, £3.6m from the Heritage Fund, twelve years start to finish." },
      { id: "lambeth-palace-library", why: "New building on faith land, where publicness must be designed at the threshold." }
    ],
    sources: ["heritageFund", "glasshouse", "edpLeadership", "crossingThreshold"]
  },
  {
    id: "insertion", name: "Inserted structure — a box of tricks", family: "fabric",
    one: "A free-standing building inside the building, touching as little as possible.",
    what: "A self-contained structure inserted into the nave holding WC, kitchen, storage and stairs, with a usable floor on top. It delivers an extension's servicing without an extension, and can in principle be removed.",
    scale: "Large", cost: "£££ over £1m", timescale: "Over 5 years", reversible: "Mostly",
    zones: ["worship", "aisle", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction"], themes: ["flexibility", "delight", "identity", "access", "maintenance"],
    needs: { size: 3, noise: 2, openness: 3, facilities: 5 },
    uses: ["Café", "Learning", "Events & hire", "Quiet & reflection"], permissions: ["faculty", "planning"], funding: "capital",
    taster: "Mock it up at full size in scaffold, plywood or taped lines. It tells people more than any drawing.",
    how: [
      "Establish what the interior's significance actually is, and design to preserve those specific things.",
      "Keep it free-standing and minimally fixed, so reversibility is genuine rather than rhetorical.",
      "Use the top — a roof that becomes a balcony gives a view nobody had before."
    ],
    watch: [
      "Floor loading, archaeology beneath and fire strategy decide feasibility.",
      "An insertion that blocks the view down the nave will be resisted, and should be."
    ],
    worksWith: ["accessible-wc", "servery", "storage", "transparency", "library-culture"],
    precedents: [
      { id: "st-stephen-walbrook", why: "The counter-example: an interior so significant that minimum intervention is right." },
      { id: "garden-museum", why: "Reversible new structures within a church, carrying the whole visitor offer." }
    ],
    sources: ["edpLeadership", "glasshouse", "churchcare"]
  },

  /* ================= TIME & PROGRAMMING ================= */
  {
    id: "timetable", name: "Timetable the building", family: "time",
    one: "Share by hour rather than by partition. The core temporal move.",
    what: "One weekly timetable covering every room and user, so sacred and secular uses interleave rather than compete for territory. Free, reversible, and how every good example here actually works.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "community", "chapel", "aisle", "undercroft", "outdoor"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Temporality", "Use", "Publicness"], themes: ["flexibility", "maintenance", "enterprise", "legibility"],
    needs: { size: 1, noise: 0, openness: 2, facilities: 0 },
    uses: ["Events & hire", "Worship"], permissions: ["governance"], funding: "none",
    taster: "Draw the current week on one sheet, every room a row. The empty cells are the opportunity.",
    how: [
      "Map the week you have, including the hours nobody books, and mark what cannot move.",
      "Identify the protected quiet: which room stays quiet all week, and which hours the whole building does.",
      "Fill the empty cells deliberately by noise, size and openness — not with whoever asks first."
    ],
    watch: [
      "Changeover time is real. Allow thirty minutes between a toddler group and a funeral.",
      "Festivals displace regular users every year. Tell them the dates in September."
    ],
    worksWith: ["quiet-room", "hire", "local-noticeboard", "late-opening", "digital"],
    precedents: [
      { id: "grand-junction", why: "Worship, café and hire timetabled across the same architecture at different hours." },
      { id: "sheriff-centre", why: "Six days a centre, Sundays a church, and a chapel quiet throughout." }
    ],
    sources: ["edpLeadership", "glasshouse"]
  },
  {
    id: "meanwhile", name: "Meanwhile & seasonal use", family: "time",
    one: "Programme a site you cannot yet change.",
    what: "Temporary activity in a building or ground awaiting restoration, funding or a decision. It keeps the site in public view, builds the evidence base, and holds off the reading that it is abandoned.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "outdoor", "churchyard", "community", "undercroft", "carpark"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality", "Publicness"], themes: ["enterprise", "identity", "context", "security"],
    needs: { size: 2, noise: 3, openness: 4, facilities: 1 },
    uses: ["Culture & music", "Events & hire", "Heritage"], permissions: ["governance", "licence"], funding: "small",
    taster: "This is the taster, formalised. Programme one season and decide afterwards.",
    how: [
      "Be explicit that it is temporary, and for how long. It lowers the stakes for the objectors too.",
      "Find a group willing to hold it — meanwhile use without a steward becomes a liability in a month.",
      "Document it properly: numbers, photographs, quotes. This is the evidence for the permanent version."
    ],
    watch: [
      "Meanwhile uses become permanent by drift, with none of the agreements a permanent use would have.",
      "A building awaiting restoration may not be safe for the numbers you are inviting."
    ],
    worksWith: ["market", "community-art", "exhibition", "friends-group", "coproduce"],
    precedents: [
      { id: "st-johns-churchyard-wapping", why: "Open but passive ground with no stewardship — the classic candidate." },
      { id: "paddington-old-cemetery", why: "Large, open and lightly programmed, waiting for someone to hold it." }
    ],
    sources: ["glasshouse", "edpCount"]
  },
  {
    id: "late-opening", name: "Evening & late opening", family: "time",
    one: "The hours nobody uses, and the audiences nobody reaches.",
    what: "Deliberately programming the evening: a late gallery opening, a soft-play late, a night market, a film club. It uses capacity that costs nothing extra and reaches people who cannot come at eleven on a Tuesday.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "community", "undercroft", "outdoor", "play"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Temporality", "Use", "Interaction"], themes: ["security", "access", "enterprise", "delight"],
    needs: { size: 2, noise: 3, openness: 3, facilities: 3 },
    uses: ["Culture & music", "Events & hire", "Play"], permissions: ["governance", "licence"], funding: "trading",
    taster: "One late. Advertise it as a one-off and ask people what they would come back for.",
    how: [
      "Check the lighting on the route from the street — most of the barrier is the walk in.",
      "Decide what is open and what is locked, and make the boundary physical rather than a sign.",
      "Programme for people who cannot come in the day, and finish when you said you would."
    ],
    watch: [
      "Licensing for evening entertainment and alcohol, and the conditions that come with it.",
      "Never roster one volunteer alone for an evening opening."
    ],
    worksWith: ["lighting", "concerts", "soft-play", "hire", "youth-club"],
    precedents: [
      { id: "sheriff-centre", why: "Soft Play Lates — same room, same equipment, a bar, a different audience." },
      { id: "grand-junction", why: "Concerts, ceilidhs and club nights filling hours a church would be dark." }
    ],
    sources: ["glasshouse"]
  },
  {
    id: "trail", name: "Trail, tour & walk", family: "time",
    one: "Connect the site to the ones around it, and borrow their footfall.",
    what: "A guided or self-guided route linking this site to others. It turns an isolated building into part of a network, and costs a leaflet and a volunteer.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["churchyard", "worship", "outdoor", "entrance", "garden"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction"], themes: ["context", "identity", "legibility", "delight"],
    needs: { size: 1, noise: 1, openness: 4, facilities: 0 },
    uses: ["Heritage", "Learning"], permissions: ["none"], funding: "small",
    taster: "One walk, one Saturday, led by whoever knows most. Ten people is a success.",
    how: [
      "Find the other sites first. A trail of one is a plaque.",
      "Agree when each site will be open, and publish that as part of the route.",
      "Join an existing festival — Open House or Heritage Open Days bring an audience and a deadline."
    ],
    watch: [
      "A trail creates an expectation of access. Sites locked when the leaflet says open do real damage.",
      "Volunteer guides need briefing, and a script honest about the difficult parts of the history."
    ],
    worksWith: ["exhibition", "paths", "open-hours", "nature-reserve", "signage"],
    precedents: [
      { id: "grand-junction", why: "Open House tours, canal walks and undercroft tours, each drawing a different audience." },
      { id: "st-johns-churchyard-wapping", why: "A historical plaque with no network around it — the raw material." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },

  /* ================= GOVERNANCE & DIGITAL ================= */
  {
    id: "friends-group", name: "Friends group", family: "governance",
    one: "A way for people who love the place to help without joining anything.",
    what: "A group of supporters who fundraise, steward, garden, open the building and advocate for it. The standard answer to a site that is locally valued but has no institutional capacity.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["churchyard", "worship", "outdoor", "garden", "community"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use", "Temporality"], themes: ["maintenance", "identity", "context", "enterprise"],
    needs: { size: 0, noise: 0, openness: 3, facilities: 0 },
    uses: ["Nature & gardening", "Heritage"], permissions: ["governance"], funding: "volunteer",
    taster: "Put a notice on the gate asking anyone interested to come to one meeting.",
    how: [
      "Start with an open meeting, not a constitution. Find out who cares before writing rules.",
      "Give people bounded roles — one task, one day a month — rather than open-ended commitment.",
      "Constitute it once it has momentum, so it can hold funds and apply for grants itself."
    ],
    watch: [
      "Relying on volunteers permanently is this sector's structural weakness. A Friends group is capacity, not funding.",
      "Friends and incumbents fall out over decision rights. Write them down while everyone is still pleased."
    ],
    worksWith: ["churchyard-open", "community-garden", "nature-reserve", "meanwhile", "open-hours"],
    precedents: [
      { id: "tower-hamlets-cemetery-park", why: "A charity and its volunteers holding a whole burial landscape in public use." },
      { id: "st-johns-churchyard-wapping", why: "The site type that most needs a Friends group and most often lacks one." }
    ],
    sources: ["edpLeadership", "crossingThreshold"]
  },
  {
    id: "partnership", name: "Partnership with a delivery charity", family: "governance",
    one: "Bring in an organisation that already knows how to run the thing.",
    what: "A formal partnership with a development trust or charity that operates the community offer while the faith community keeps the building and its worship. It brings expertise and a business plan a congregation cannot generate alone.",
    scale: "Large", cost: "££ £100k–£1m", timescale: "Over 5 years", reversible: "Mostly",
    zones: ["worship", "community", "undercroft", "office"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"], themes: ["enterprise", "maintenance", "identity", "context"],
    needs: { size: 3, noise: 2, openness: 4, facilities: 3 },
    uses: ["Events & hire", "Learning", "Culture & music"], permissions: ["governance", "planning"], funding: "development",
    taster: "Invite two or three candidate organisations to spend a morning and say what they would do. A free options appraisal.",
    how: [
      "Identify who already delivers well nearby: a development trust, an anchor charity, an arts organisation.",
      "Be clear what each side brings and keeps — worship and freehold usually yours, operations theirs.",
      "Set up regular, frank contact, and put term, rent, decision rights and exit in writing."
    ],
    watch: [
      "Partnerships fail on unspoken assumptions about who decides. Write it down before the first grant.",
      "A partner with its own funders has its own obligations, and they will shape your building's week."
    ],
    worksWith: ["trading-sub", "coproduce", "extension", "youth-club", "multifaith"],
    precedents: [
      { id: "grand-junction", why: "Parish, diocese and a development trust — the congregation kept its home, the trust brought the plan." },
      { id: "sheriff-centre", why: "A charity with a trading subsidiary, jointly responsible for the building." }
    ],
    sources: ["edpLeadership", "crossingThreshold", "plunkett"]
  },
  {
    id: "trading-sub", name: "Trading subsidiary & business plan", family: "governance",
    one: "The structure that lets a church earn money and give it away properly.",
    what: "A trading company owned by the charity, taking commercial income and gifting profits back — plus a business plan that models every stream together, including maintenance.",
    scale: "Medium", cost: "£ under £100k", timescale: "2–5 years", reversible: "Mostly",
    zones: ["office", "community", "worship", "cafe"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality"], themes: ["enterprise", "maintenance", "resources"],
    needs: { size: 1, noise: 0, openness: 1, facilities: 1 },
    uses: ["Events & hire", "Café"], permissions: ["governance"], funding: "development",
    taster: "Model one year of the building's true costs and income on a single spreadsheet.",
    how: [
      "Work out the real annual cost of the building, including the maintenance nobody has budgeted.",
      "Model income streams together, and test what happens if the best one fails.",
      "Take advice on structure, charity trading limits, VAT and business rates before trading."
    ],
    watch: [
      "Rate relief depends on primary use. Commercial activity can affect it — get advice before, not after.",
      "Do not let the trading arm quietly set the building's priorities. Decide the balance and review it."
    ],
    worksWith: ["cafe", "hire", "post-office", "workspace", "partnership"],
    precedents: [
      { id: "sheriff-centre", why: "A trading subsidiary running post office, café, play and hire, funding the charitable work." },
      { id: "grand-junction", why: "Venue income returning to the charity's community and education programme." }
    ],
    sources: ["plunkett", "crossingThreshold", "ahf"]
  },
  {
    id: "digital", name: "Digital presence", family: "governance",
    one: "If a search cannot find your opening hours, you are closed.",
    what: "The minimum: a page with hours, address, access and what's on; a correct Google Maps listing; and entries where people actually look for community space.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["office"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use"], themes: ["identity", "legibility", "enterprise", "access"],
    needs: { size: 0, noise: 0, openness: 1, facilities: 0 },
    uses: ["Events & hire"], permissions: ["none"], funding: "none",
    taster: "Search for your own building on a phone, as a stranger. Write down what you cannot find in sixty seconds.",
    how: [
      "Claim and correct the Google Maps listing: hours, photographs, accessibility, a phone number answered.",
      "State access facts plainly — step-free or not, accessible WC or not. Do not make people ring to ask.",
      "List the space where venues are searched: hall-hire sites, the council directory, the CVS."
    ],
    watch: [
      "Do not start four channels you cannot maintain. One current page beats a dormant network.",
      "Photographs of empty rooms suggest an empty building. Photograph activity, with permission."
    ],
    worksWith: ["open-hours", "signage", "timetable", "hire", "local-noticeboard"],
    precedents: [
      { id: "sheriff-centre", why: "Hours, capacities, prices and booking all published — which is why the rooms are booked." },
      { id: "grand-junction", why: "A full programme with prices, concessions and access for every event." }
    ],
    sources: ["edpStrategy", "glasshouse"]
  },
  {
    id: "coproduce", name: "Co-design & community engagement", family: "governance",
    one: "Design the process before you design the building.",
    what: "A planned programme of engagement running through the project — open days, partnership days, workshops, mapping — with the evidence recorded as you go. It is what turns an idea into a shared vision, and what funders require.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "community", "outdoor", "entrance"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use", "Interaction"], themes: ["context", "identity", "enterprise", "access"],
    needs: { size: 1, noise: 2, openness: 4, facilities: 1 },
    uses: ["Learning", "Heritage"], permissions: ["none"], funding: "development",
    taster: "One sticky wall with one open question, at an event you are already running.",
    how: [
      "Say what is fixed and where influence is real. Tokenism is worse than silence.",
      "Offer a spectrum — a stall, a survey, a workshop, a steering group — so people can match their time.",
      "Record everything and publish the results. It becomes your evidence for the DAC, planners and funders."
    ],
    watch: [
      "Never present finished plans as a consultation. You will meet resistance, and deserve it.",
      "Engage the surrounding streets, not only your own community."
    ],
    worksWith: ["community-art", "meanwhile", "partnership", "exhibition", "multifaith"],
    precedents: [
      { id: "grand-junction", why: "A planning application with over a hundred public statements of support." }
    ],
    sources: ["edpStrategy", "edpCount", "edpLeadership", "glasshouse"]
  }
];


/* ------------------------------------------------------------
   What each intervention contributes
   ------------------------------------------------------------
   One short phrase per entry, used to say something specific about
   why any two of them belong together — rather than repeating the
   same sentence under every pairing.
   ------------------------------------------------------------ */
const GIVES = {
  "open-hours": "hours people can rely on",
  "threshold-edge": "an edge that reads as open",
  "signage": "a building that explains itself",
  "seating-outside": "somewhere to stop without going in",
  "lighting": "warmth and a lit way in after dark",
  "acoustics": "a room you can talk in",
  "domestic-comfort": "a chair you would choose to sit in",
  "paths": "a route through rather than a dead end",
  "context-fit": "a face that belongs to its street",
  "sensory": "a way in for people who find crowds hard",
  "transparency": "a view of what is happening inside",
  "local-noticeboard": "the neighbourhood's news in one place",
  "small-welcome": "the small things that remove a reason to leave",
  "community-art": "a mark left by the people who use it",
  "indoor-green": "the instant signal that someone cares for the place",
  "post-office": "an errand that brings everyone weekly",
  "advice-clinic": "help at the point people need it",
  "food-project": "food, and a reason to return",
  "warm-space": "somewhere free to sit for as long as you like",
  "servery": "a kettle, and the hour it buys",
  "cafe": "a reason to come in with no ticket",
  "community-meal": "a table everybody eats at",
  "concerts": "an audience that would never book a church",
  "exhibition": "a reason to stay longer than a glance",
  "hire": "income from the hours nobody uses",
  "library-culture": "a civic use with a daily rhythm",
  "esol": "a class with a partner's funding behind it",
  "wellbeing": "regular bookings in the quiet daytime",
  "creative-workshop": "shoulder-to-shoulder work that makes people talk",
  "health-outreach": "a service people already trust you to host",
  "toddler": "the group most short of indoor space",
  "soft-play": "surplus income and a great deal of noise",
  "youth-club": "the provision the borough has lost",
  "playground": "children on ground that was only crossed",
  "workspace": "daytime occupancy and steady rent",
  "meeting-rooms": "quiet lettable hours",
  "market": "trading on ground you already own",
  "quiet-room": "one room that stays quiet whatever else happens",
  "memorial": "somewhere designed to grieve",
  "multifaith": "space more than one community can use",
  "churchyard-open": "grounds that read as public realm",
  "community-garden": "weekday activity that improves the ground",
  "nature-reserve": "a landscape managed rather than mown",
  "greening": "shade, water and softened hard standing",
  "accessible-wc": "the facility every other use waits for",
  "step-free": "the same front door for everybody",
  "movable-seating": "a single-use room made flexible",
  "heating": "a running cost you can actually afford",
  "storage": "somewhere for it all to go between uses",
  "extension": "the servicing the fabric cannot take",
  "insertion": "an extension's servicing without an extension",
  "timetable": "sacred and secular sharing by hour",
  "meanwhile": "activity on a site you cannot yet change",
  "late-opening": "the evenings, and the people who work days",
  "trail": "footfall borrowed from the sites nearby",
  "friends-group": "people who will hold it when you cannot",
  "partnership": "expertise and a business plan you do not have",
  "trading-sub": "a lawful way to earn and give it away",
  "digital": "a building a search engine can find",
  "coproduce": "a vision people recognise as theirs"
};

/* ------------------------------------------------------------
   Lookups
   ------------------------------------------------------------ */
function interventionById(id) { return INTERVENTIONS.find(i => i.id === id) || null; }
function familyOf(key) { return INTERVENTION_FAMILIES.find(f => f.key === key) || null; }
function interventionsInFamily(key) { return INTERVENTIONS.filter(i => i.family === key); }
function photoOf(id) { return (typeof PHOTOS !== "undefined" && PHOTOS[id]) || null; }


/* ------------------------------------------------------------
   Compatibility between two interventions
   ------------------------------------------------------------
   Curated first — worksWith and tension are hand-set on each
   record. Where nothing is declared, the pairing is computed from
   what the two actually share: the same parts of a site, the same
   sacred conditions, complementary dimensions, and whether one
   supplies what the other needs.
   ------------------------------------------------------------ */
/* a specific sentence for a curated pairing, built from what each one gives */
function curatedWhy(a, b) {
  const ga = GIVES[a.id], gb = GIVES[b.id];
  if (!ga || !gb) return "A pairing this database has seen work.";
  const zones = a.zones.filter(z => b.zones.includes(z));
  const where = zones.length ? ` Both can sit in the ${ZONE_TYPES[zones[0]].short.toLowerCase()}.` : "";
  const s = `${ga}, plus ${gb}.`;
  return s.charAt(0).toUpperCase() + s.slice(1) + where;
}

function pairScore(a, b) {
  if (!a || !b || a.id === b.id) return null;

  if ((a.tension || []).includes(b.id) || (b.tension || []).includes(a.id)) {
    return { verdict: "tension", score: 0,
             why: "These pull against each other — they can share a building, but not a room at the same hour." };
  }
  if ((a.worksWith || []).includes(b.id) || (b.worksWith || []).includes(a.id)) {
    return { verdict: "strong", score: 100, why: curatedWhy(a, b) };
  }

  const zones = a.zones.filter(z => b.zones.includes(z));
  const sacred = a.sacredness.filter(s => b.sacredness.includes(s));
  if (!sacred.length) {
    return { verdict: "tension", score: 0,
             why: "They survive different sacred conditions, so one of them does not belong on this site." };
  }

  /* Noise is the classic conflict — but only between two things that
     actually occupy a room. Signage, opening hours and a digital listing
     have no footprint, so they never compete with anything for volume. */
  const occupies = x => (x.needs.size || 0) >= 1;
  const bothOccupy = occupies(a) && occupies(b);
  const noiseGap = Math.abs(a.needs.noise - b.needs.noise);
  const noiseClash = bothOccupy && zones.length && noiseGap >= 4;

  const sharedDims = a.dims.filter(d => b.dims.includes(d));
  const newDims = b.dims.filter(d => !a.dims.includes(d));
  const sharedThemes = a.themes.filter(t => b.themes.includes(t));

  let score = 34;
  score += Math.min(zones.length, 4) * 7;        /* can live in the same places */
  score += newDims.length * 8;                   /* covers ground the other does not */
  score += Math.min(sharedThemes.length, 3) * 4; /* same design conversation */
  if (noiseClash) score -= 26;
  if (!bothOccupy) score += 10;                  /* one supports, rather than competes */
  if (a.outdoor !== b.outdoor) score -= 8;

  score = Math.max(0, Math.min(96, score));

  const support = occupies(a) ? b : a;           /* the one with no footprint */
  let why;
  if (noiseClash) {
    why = "Both want the same space but at very different volumes — they need separate rooms or separate hours.";
  } else if (!bothOccupy) {
    why = `${support.name} takes up no space of its own, so it supports the other rather than competing with it.`;
  } else if (!zones.length) {
    why = "They occupy different parts of the site, so they can run side by side without competing.";
  } else if (newDims.length >= 2) {
    why = `Same ground, different work: ${b.name.toLowerCase()} moves ${newDims.join(" and ").toLowerCase()} where the other does not.`;
  } else if (zones.length >= 3) {
    why = score >= 70
      ? "They want the same parts of the site and sit well together there — one timetable covers both."
      : "They share most of the same spaces, so plan the week before committing to both.";
  } else {
    why = "A workable pairing — overlapping spaces, compatible register.";
  }

  return {
    verdict: score >= 70 ? "strong" : score >= 45 ? "good" : "careful",
    score, why, zones, sharedDims, newDims
  };
}

/* the n best partners for an intervention */
function partnersFor(id, n = 6) {
  const a = interventionById(id);
  if (!a) return [];
  return INTERVENTIONS
    .map(b => ({ iv: b, ...(pairScore(a, b) || {}) }))
    .filter(x => x.verdict && x.verdict !== "tension")
    .sort((x, y) => y.score - x.score)
    .slice(0, n);
}

function tensionsFor(id) {
  const a = interventionById(id);
  if (!a) return [];
  return INTERVENTIONS
    .map(b => ({ iv: b, ...(pairScore(a, b) || {}) }))
    .filter(x => x.verdict === "tension");
}


/* ------------------------------------------------------------
   Scoring an intervention against a studio site profile
   ------------------------------------------------------------ */
function scoreIntervention(iv, p, sacredness) {
  const n = iv.needs || { size: 0, noise: 0, openness: 0, facilities: 0 };

  const gaps = {
    size:       Math.max(0, n.size - (p.size ?? 0)),
    noise:      Math.max(0, n.noise - (p.noise ?? 0)),
    openness:   Math.max(0, n.openness - (p.openness ?? 0)),
    facilities: Math.max(0, n.facilities - (p.facilities ?? 0))
  };

  let fit = 4 - (gaps.size / 5 + gaps.noise / 5 + gaps.openness / 5 + gaps.facilities / 5);
  fit = fit / 4;

  if (sacredness && iv.sacredness && !iv.sacredness.includes(sacredness)) fit *= 0.25;

  if (p.zoneTypes && p.zoneTypes.size) {
    const hasZone = iv.zones.some(z => p.zoneTypes.has(z));
    if (!hasZone) fit *= 0.5;
  }
  if (iv.outdoor && p.hasOutdoor === false) fit *= 0.35;
  if (iv.funding === "trading" && p.ctxPublic === false) fit *= 0.72;

  const short = Object.entries(gaps).sort((a, b) => b[1] - a[1])[0];
  const blocker = short && short[1] > 0 ? short[0] : null;

  return { fit: Math.round(Math.max(0, Math.min(1, fit)) * 100), blocker, gaps };
}

const BLOCKER_TEXT = {
  size:       { label: "Not enough space in use", fix: "Bring another room, the grounds or more hours into use first." },
  noise:      { label: "Too quiet a setting",      fix: "Agree which hours can be livelier, and keep one room protected." },
  openness:   { label: "Not open enough yet",      fix: "Work on hours, threshold and signage before a use that needs passing people." },
  facilities: { label: "Facilities missing",       fix: "The practical kit — WC, kitchen, heating, storage — comes before the partner." }
};
