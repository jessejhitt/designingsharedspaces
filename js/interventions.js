/* ============================================================
   DESIGNING SHARED SPACES TOGETHER — the intervention library
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
    one: "Decide when the door is unlocked, publish it, keep to it.",
    what: "Set the hours the building is genuinely open, who unlocks, and what welcome is on offer.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "entrance", "chapel", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Temporality"], themes: ["security", "identity", "legibility"],
    needs: { size: 0, noise: 0, openness: 1, facilities: 0 },
    uses: ["Quiet & reflection", "Heritage"], permissions: ["none"], funding: "none",
    taster: "Open two hours on the same weekday for a month. Count visitors.",
    how: [
      "Agree who can unlock and lock, with cover for holidays.",
      "Zone the building so a porch or chapel can open alone.",
      "Post the hours on the door, noticeboard, website and Google Maps."
    ],
    watch: [
      "Hours that keep changing are worse than none.",
      "An empty open building can feel unsafe. Give people a reason to be there."
    ],
    worksWith: ["signage", "seating-outside", "quiet-room", "digital", "warm-space"],
    precedents: [
      { id: "st-patricks-wapping", why: "Open daily, but usually empty." },
      { id: "st-stephen-walbrook", why: "Weekday hours built round City workers." }
    ],
    sources: ["openChurches", "glasshouse", "crossingThreshold"]
  },
  {
    id: "threshold-edge", name: "Open up the threshold", family: "threshold",
    one: "Make the entrance say come in.",
    what: "Work on the first few metres: open or glaze the door, light the porch, clear the notice clutter.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["entrance", "worship", "outdoor"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["access", "identity", "legibility", "security", "delight"],
    needs: { size: 0, noise: 0, openness: 2, facilities: 0 },
    uses: ["Heritage", "Quiet & reflection"], permissions: ["faculty", "planning"], funding: "small",
    taster: "Prop the outer door and put an A-board in the porch for a fortnight.",
    how: [
      "Photograph your entrance from across the street at different times.",
      "List what says 'closed' and fix the reversible things first.",
      "Make the inside brighter than the outside at dusk."
    ],
    watch: [
      "Glazed screens in listed fabric need a faculty and a conservation architect.",
      "A propped door loses heat. Plan for winter."
    ],
    worksWith: ["lighting", "signage", "transparency", "step-free", "indoor-green"],
    precedents: [
      { id: "st-patricks-wapping", why: "Tall walls and a side-on sign hide what is inside." },
      { id: "grand-junction", why: "Entry off a housing close, so signs and programme do the inviting." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "signage", name: "Signage & wayfinding", family: "threshold",
    one: "Say what the building is, who it is for, and what is on.",
    what: "A street sign naming the building and its uses, a what's-on board, and clear signs inside.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["entrance", "worship", "community", "outdoor", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use"], themes: ["identity", "legibility", "access"],
    needs: { size: 0, noise: 0, openness: 1, facilities: 0 },
    uses: ["Heritage"], permissions: ["none", "faculty"], funding: "small",
    taster: "Chalk this week's activities on a board by the gate.",
    how: [
      "Walk a newcomer's route and note every point of doubt.",
      "Fix the street first, then the inside.",
      "Answer the awkward questions: is it free, must I be religious, are there toilets?"
    ],
    watch: [
      "Signs cannot fix activity hidden behind an unmarked door.",
      "Too many signs put people off as much as none."
    ],
    worksWith: ["open-hours", "local-noticeboard", "threshold-edge", "digital", "timetable"],
    precedents: [
      { id: "sheriff-centre", why: "A post office sign makes it read as a shop." },
      { id: "st-patricks-wapping", why: "History banners nobody outside knew about." }
    ],
    sources: ["glasshouse", "edpExplore", "openChurches"]
  },
  {
    id: "seating-outside", name: "Seating and shelter outside", family: "threshold",
    one: "Somewhere to sit that costs nothing and asks nothing.",
    what: "Benches, a sittable wall, bike stands and a bin: the easiest public offer there is.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["outdoor", "churchyard", "entrance", "carpark", "garden"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["access", "delight", "maintenance", "security"],
    needs: { size: 1, noise: 0, openness: 2, facilities: 0 }, outdoor: true,
    uses: ["Quiet & reflection", "Nature & gardening"], permissions: ["none", "faculty"], funding: "small",
    taster: "Put out four borrowed chairs and a table for a week of good weather.",
    how: [
      "Put seats where people already stop or lean.",
      "Angle some seats towards each other to invite conversation.",
      "Agree who empties the bin before installing it."
    ],
    watch: [
      "Seating near graves needs family consultation and usually a faculty.",
      "If it attracts street drinking, add activity and overlooking rather than removing it."
    ],
    worksWith: ["small-welcome", "paths", "churchyard-open", "indoor-green", "greening"],
    precedents: [
      { id: "st-georges-gardens", why: "Seating does most of the public work." },
      { id: "st-dunstan-in-the-east", why: "A ruin used mostly as somewhere to sit." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },

  /* ================= COMFORT & FAMILIARITY ================= */
  {
    id: "lighting", name: "Lighting", family: "comfort",
    one: "Warm light inside, lit routes outside.",
    what: "Warm, dimmable light where people sit, plus a lit approach and porch — far cheaper than building work.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["worship", "aisle", "community", "entrance", "undercroft", "outdoor", "churchyard", "chapel"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction", "Temporality"], themes: ["delight", "access", "security", "resources", "identity"],
    needs: { size: 1, noise: 0, openness: 1, facilities: 1 },
    uses: ["Quiet & reflection", "Events & hire", "Culture & music"], permissions: ["faculty", "planning"], funding: "small",
    taster: "Borrow uplighters and warm festoon lights for one evening event.",
    how: [
      "Photograph the building from the street at a winter dusk.",
      "Light in layers: soft background, brighter where people sit.",
      "Use zones and dimmers, and label the switches."
    ],
    watch: [
      "Cool white LEDs look harsh. Specify a warm colour temperature.",
      "New fittings in a listed interior need a faculty."
    ],
    worksWith: ["threshold-edge", "late-opening", "concerts", "paths", "acoustics"],
    precedents: [
      { id: "grand-junction", why: "One nave lit for concerts, club nights and services." },
      { id: "st-dunstan-in-the-east", why: "Atmosphere made by light through planting." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "acoustics", name: "Acoustic comfort", family: "comfort",
    one: "If you cannot hold a conversation, people will not linger.",
    what: "Soften sound where speech matters with curtains, rugs and panels, but keep the nave's echo for music.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "aisle", "community", "chapel", "play", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Interaction", "Use"], themes: ["delight", "flexibility", "access", "maintenance"],
    needs: { size: 1, noise: 1, openness: 1, facilities: 1 },
    uses: ["Learning", "Culture & music", "Everyday services"], permissions: ["faculty"], funding: "small",
    taster: "Hang heavy curtains and lay a rug where a group meets. Ask if it is easier to hear.",
    how: [
      "Decide which rooms need speech and which need echo.",
      "Start soft and reversible: curtains, rugs, upholstered chairs.",
      "Fit a hearing loop and check it works."
    ],
    watch: [
      "Do not deaden the whole nave; musicians book it for the sound.",
      "Hard, wipe-clean finishes make rooms echo."
    ],
    worksWith: ["soft-play", "esol", "concerts", "quiet-room", "domestic-comfort"],
    tension: ["concerts"],
    precedents: [
      { id: "sheriff-centre", why: "Soft play and a café sharing one nave." },
      { id: "st-stephen-walbrook", why: "A celebrated acoustic, programmed around." }
    ],
    sources: ["glasshouse", "cae"]
  },
  {
    id: "domestic-comfort", name: "Familiar, domestic furnishing", family: "comfort",
    one: "A sofa, a rug, a lamp and a plant say 'this is for you'.",
    what: "Furnish part of the building like a living room, with soft seating in small groups.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["aisle", "community", "cafe", "entrance", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Interaction", "Publicness"], themes: ["delight", "identity", "flexibility", "maintenance"],
    needs: { size: 1, noise: 1, openness: 3, facilities: 1 },
    uses: ["Quiet & reflection", "Café", "Everyday services"], permissions: ["none", "faculty"], funding: "small",
    taster: "Two armchairs, a side table and a lamp in one corner for a month.",
    how: [
      "Pick a corner with a wall behind and something to look at.",
      "Angle seats together, with a socket, wi-fi and somewhere for a cup.",
      "Let people book the settings."
    ],
    watch: [
      "Soft furnishings need fire certification and replacing.",
      "Scattered furniture looks like clutter. Make deliberate rooms within the room."
    ],
    worksWith: ["warm-space", "servery", "acoustics", "indoor-green", "lighting"],
    precedents: [
      { id: "sheriff-centre", why: "Sofas and café tables at the west end of the nave." },
      { id: "grand-junction", why: "Shared tables and plenty of seating help strangers linger." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "paths", name: "Clear paths & desire lines", family: "comfort",
    one: "Surface the routes people already walk, and light them.",
    what: "A clear, level main path following real routes, with more than one way in and out.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["churchyard", "outdoor", "garden", "carpark", "entrance"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["legibility", "access", "security", "maintenance", "context"],
    needs: { size: 1, noise: 0, openness: 3, facilities: 0 }, outdoor: true,
    uses: ["Quiet & reflection", "Nature & gardening", "Heritage"], permissions: ["faculty", "planning"], funding: "small",
    taster: "Mow a route where you think the path should go and watch it for a month.",
    how: [
      "Map where people actually walk, from the worn grass.",
      "Make one route that suits wheelchairs and buggies.",
      "Design a way through, not a dead end."
    ],
    watch: [
      "Digging on burial ground raises archaeology and faculty issues; resurfacing does not.",
      "Resin and gravel can be hard for wheelchairs. Test first."
    ],
    worksWith: ["churchyard-open", "seating-outside", "lighting", "trail", "small-welcome"],
    precedents: [
      { id: "tower-hamlets-cemetery-park", why: "Clear paths and signs make the walk work." },
      { id: "st-georges-gardens", why: "A route between streets, not a dead end." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "context-fit", name: "Fit with the surrounding area", family: "comfort",
    one: "Read the street, then answer it.",
    what: "Make the frontage belong to its street, with a use that complements what is nearby.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["entrance", "outdoor", "carpark", "worship", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use"], themes: ["context", "identity", "legibility", "delight"],
    needs: { size: 1, noise: 1, openness: 3, facilities: 0 },
    uses: ["Heritage", "Everyday services"], permissions: ["faculty", "planning"], funding: "small",
    taster: "Photograph your frontage beside its neighbours. The mismatch will be obvious.",
    how: [
      "Survey what neighbouring frontages do and what they are made of.",
      "Map nearby uses and pick one that fills a gap.",
      "Treat the boundary as the project: railings and hedges speak first."
    ],
    watch: [
      "An institutional look attracts only people at ease with institutions.",
      "Deliberate contrast must be done very well, or it looks like damage."
    ],
    worksWith: ["signage", "threshold-edge", "greening", "market", "extension"],
    precedents: [
      { id: "sheriff-centre", why: "A Victorian church that reads like a local shop." },
      { id: "lambeth-palace-library", why: "The counter-case: a hard, unwelcoming street edge." }
    ],
    sources: ["glasshouse", "edpExplore", "npff"]
  },
  {
    id: "sensory", name: "Sensory & neurodiverse comfort", family: "comfort",
    one: "Quiet hours, low stimulus, and a room to step out into.",
    what: "Relaxed sessions, dimmable light, a low-stimulus room and clear information before people arrive.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["chapel", "community", "play", "aisle", "garden"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction", "Temporality"], themes: ["access", "delight", "flexibility", "security"],
    needs: { size: 1, noise: 0, openness: 4, facilities: 2 },
    uses: ["Quiet & reflection", "Play", "Everyday services"], permissions: ["none"], funding: "small",
    taster: "Run one relaxed session of something you already do, and say so in the listing.",
    how: [
      "Set aside a low-stimulus room and signpost it.",
      "Publish a visual guide to what happens, in advance.",
      "Ask local autism and learning-disability groups to help."
    ],
    watch: [
      "A 'relaxed' session run at full volume does harm.",
      "Offer dedicated sessions as well as, not instead of, ordinary access."
    ],
    worksWith: ["quiet-room", "acoustics", "lighting", "soft-play", "toddler"],
    precedents: [
      { id: "sheriff-centre", why: "Additional-needs soft play sessions." },
      { id: "grand-junction", why: "Club nights welcoming adults with learning disabilities." }
    ],
    sources: ["cae", "glasshouse"]
  },
  {
    id: "transparency", name: "See-through — views between spaces", family: "comfort",
    one: "If you can see what is happening, you can choose to join.",
    what: "Glass, internal windows and opened-up partitions so spaces can see each other and share daylight.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["entrance", "worship", "aisle", "community", "play", "office"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["legibility", "security", "access", "resources", "delight"],
    needs: { size: 2, noise: 1, openness: 2, facilities: 1 },
    uses: ["Café", "Play", "Events & hire"], permissions: ["faculty", "planning"], funding: "capital",
    taster: "Take the notices off the glass in your existing doors.",
    how: [
      "From the entrance, list what you cannot see.",
      "Glaze where activity should be visible.",
      "Plan overlooking: a café window onto the play area."
    ],
    watch: [
      "Glazing in historic interiors needs skill and a faculty.",
      "Keep one space where people can sit unobserved."
    ],
    worksWith: ["threshold-edge", "soft-play", "cafe", "library-culture", "quiet-room"],
    tension: ["quiet-room"],
    precedents: [
      { id: "grand-junction", why: "Glass doors, with the café as an open entrance." },
      { id: "garden-museum", why: "Glass doors in the medieval arch show the inside." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "local-noticeboard", name: "Local information point", family: "comfort",
    one: "A board about the neighbourhood, not the institution.",
    what: "A well-kept, lit board for local events, council notices and services like the foodbank.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["entrance", "outdoor", "community", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["context", "identity", "legibility", "maintenance"],
    needs: { size: 0, noise: 0, openness: 2, facilities: 0 },
    uses: ["Everyday services", "Heritage"], permissions: ["none", "faculty"], funding: "small",
    taster: "Clear the board and restock it with what is on within ten minutes' walk.",
    how: [
      "Put it where people already pause.",
      "Give half the space to other groups' news.",
      "Date everything, remove expired notices, and name who does it."
    ],
    watch: [
      "Choose a case that survives sun and rain.",
      "Agree a policy on political and commercial notices first."
    ],
    worksWith: ["signage", "timetable", "digital", "open-hours", "friends-group"],
    precedents: [
      { id: "grand-junction", why: "The programme noticeboard on the green." },
      { id: "st-patricks-wapping", why: "Uses on site that nobody outside could see." }
    ],
    sources: ["glasshouse", "openChurches"]
  },
  {
    id: "small-welcome", name: "Small welcome infrastructure", family: "comfort",
    one: "A tap, a bin, a bike stand, a buggy park, a dog bowl.",
    what: "Small items that each remove a reason to leave. Most cost under £50.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["entrance", "outdoor", "churchyard", "community", "carpark", "garden"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["access", "maintenance", "delight", "resources"],
    needs: { size: 0, noise: 0, openness: 3, facilities: 1 },
    uses: ["Everyday services", "Quiet & reflection"], permissions: ["none", "faculty"], funding: "small",
    taster: "Put out water and a dog bowl on one hot Saturday.",
    how: [
      "Walk the site and ask what would make someone leave.",
      "Put the buggy park inside the door, and sockets by the seats.",
      "Agree who empties, refills and checks each item."
    ],
    watch: [
      "An overflowing bin is worse than none.",
      "Fixings into historic fabric need permission."
    ],
    worksWith: ["seating-outside", "paths", "toddler", "churchyard-open", "open-hours"],
    precedents: [
      { id: "paddington-old-cemetery", why: "Dog water points and bins keep walkers coming." },
      { id: "tower-hamlets-cemetery-park", why: "Lidless bins and few benches show why upkeep matters." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "community-art", name: "Community-made art & decoration", family: "comfort",
    one: "Let people leave a mark, and the place becomes theirs.",
    what: "Murals, banners and textiles made with local people for the building or grounds.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "aisle", "entrance", "community", "outdoor", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Interaction", "Publicness", "Use"], themes: ["identity", "delight", "context", "security"],
    needs: { size: 1, noise: 2, openness: 3, facilities: 1 },
    uses: ["Culture & music", "Heritage", "Learning"], permissions: ["none", "faculty"], funding: "small",
    taster: "One workshop, one banner, hung where people pass.",
    how: [
      "Use the artwork to start conversations about the building.",
      "Involve people not already inside the building.",
      "Put it where it does a second job, like a blank wall."
    ],
    watch: [
      "Fixing to historic fabric needs advice and usually a faculty.",
      "Tired-looking work reads as neglect. Set a review date."
    ],
    worksWith: ["coproduce", "exhibition", "creative-workshop", "youth-club", "meanwhile"],
    precedents: [
      { id: "grand-junction", why: "Residents' stories curated into an exhibition." },
      { id: "st-patricks-wapping", why: "History banners that just need advertising." }
    ],
    sources: ["edpLeadership", "edpCount", "glasshouse"]
  },
  {
    id: "indoor-green", name: "Planting indoors and at the edge", family: "comfort",
    one: "Plants at the door and in the room read instantly as care.",
    what: "Large planters at the entrance and substantial plants inside to soften a big interior.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["entrance", "aisle", "community", "cafe", "outdoor", "carpark", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["delight", "identity", "maintenance", "resources", "context"],
    needs: { size: 0, noise: 0, openness: 2, facilities: 1 },
    uses: ["Nature & gardening", "Quiet & reflection"], permissions: ["none"], funding: "small",
    taster: "Six large planters either side of the door for a season.",
    how: [
      "Start at the entrance.",
      "Go large: one big plant beats six small ones.",
      "Add watering to an existing routine."
    ],
    watch: [
      "Dead plants are worse than none. No rota, no plants.",
      "Check historic floors for water damage risk."
    ],
    worksWith: ["threshold-edge", "domestic-comfort", "community-garden", "greening", "seating-outside"],
    precedents: [
      { id: "sheriff-centre", why: "A lounge built around planting." },
      { id: "garden-museum", why: "Planting brought inside a church and made its identity." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },

  /* ================= EVERYDAY SERVICES ================= */
  {
    id: "post-office", name: "Post office or parcel counter", family: "everyday",
    one: "An everyday errand inside a building most people never enter.",
    what: "A post office or parcel counter: a weekly reason to come in, and footfall from day one.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["worship", "aisle", "community", "entrance"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"],
    themes: ["enterprise", "context", "access", "legibility", "security"],
    needs: { size: 2, noise: 2, openness: 5, facilities: 3 },
    uses: ["Everyday services"], permissions: ["faculty", "changeuse", "governance"], funding: "trading",
    taster: "Host a pop-up parcel collection point one morning a week.",
    how: [
      "Watch for the moment: a branch closing or a postmaster retiring.",
      "Plan all the income streams together.",
      "Zone security so the counter can lock separately."
    ],
    watch: [
      "Closing the centre on Sundays is the usual trade-off. Decide early.",
      "Success can hide the worship. Keep it visible."
    ],
    worksWith: ["signage", "cafe", "advice-clinic", "trading-sub", "quiet-room"],
    tension: ["quiet-room"],
    precedents: [
      { id: "sheriff-centre", why: "A retiring postmaster, a tweet, and a post office in the nave." }
    ],
    sources: ["plunkett", "glasshouse", "crossingThreshold"]
  },
  {
    id: "advice-clinic", name: "Advice clinic", family: "everyday",
    one: "Debt, benefits or housing advice, in a room with a door.",
    what: "Regular sessions run by a qualified partner in a private room.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "office", "chapel", "tower"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["access", "security", "maintenance", "legibility"],
    needs: { size: 1, noise: 0, openness: 3, facilities: 2 },
    uses: ["Everyday services"], permissions: ["governance"], funding: "volunteer",
    taster: "Offer a partner a free room for six weeks.",
    how: [
      "Ask the council, CVS and foodbank what advice is missing.",
      "Host it rather than run it: advice needs qualified staff.",
      "Give real privacy and a discreet way in."
    ],
    watch: [
      "People will not queue past a congregation. Keep the entrance low-key.",
      "Never mix advice with recruitment."
    ],
    worksWith: ["food-project", "meeting-rooms", "post-office", "warm-space", "health-outreach"],
    precedents: [
      { id: "sheriff-centre", why: "Café and post office profits fund free debt advice." }
    ],
    sources: ["crossingThreshold", "glasshouse"]
  },
  {
    id: "food-project", name: "Food pantry, fridge or bank", family: "everyday",
    one: "Surplus food, a fridge and a rota.",
    what: "A community fridge, low-cost pantry or foodbank point, placed with dignity rather than hidden away.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "kitchen", "entrance", "aisle"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["access", "maintenance", "resources", "identity"],
    needs: { size: 2, noise: 1, openness: 5, facilities: 4 },
    uses: ["Everyday services"], permissions: ["governance", "licence"], funding: "volunteer",
    taster: "Run a surplus food table for four Saturdays with a local shop.",
    how: [
      "Choose the model: emergency parcels, a low-cost pantry, or open surplus.",
      "Secure the food supply first.",
      "Let people choose rather than receive."
    ],
    watch: [
      "Volunteer burnout is the main risk. Recruit double.",
      "Register for food hygiene and log fridge temperatures."
    ],
    worksWith: ["advice-clinic", "community-meal", "warm-space", "servery", "friends-group"],
    precedents: [
      { id: "sheriff-centre", why: "A community fridge and a food share project." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },
  {
    id: "warm-space", name: "Warm space / drop-in", family: "everyday",
    one: "A heated room, a kettle, a chair, no questions.",
    what: "A free, advertised session where anyone can sit somewhere warm for as long as they like.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "aisle", "cafe", "chapel"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"], themes: ["access", "resources", "delight", "security"],
    needs: { size: 1, noise: 1, openness: 5, facilities: 3 },
    uses: ["Everyday services", "Quiet & reflection"], permissions: ["none"], funding: "council",
    taster: "This is the taster. Run it four times and see who returns.",
    how: [
      "Heat the smallest room well, not the grandest badly.",
      "Keep a regular two-hour slot, whoever comes.",
      "Offer tea, wi-fi and a charger — no sign-in sheet."
    ],
    watch: [
      "Do not attach a talk, a service or a form.",
      "Know the local crisis numbers before you need them."
    ],
    worksWith: ["domestic-comfort", "heating", "servery", "advice-clinic", "open-hours"],
    precedents: [
      { id: "grand-junction", why: "Free community meals for older residents." }
    ],
    sources: ["glasshouse", "openChurches"]
  },

  /* ================= FOOD & HOSPITALITY ================= */
  {
    id: "servery", name: "Servery or tea point", family: "food",
    one: "A sink, a counter and hot water change behaviour.",
    what: "A compact unit with sink, hot water, fridge and storage, so groups can make drinks in the room.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["aisle", "community", "worship", "undercroft", "tower"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction"], themes: ["flexibility", "maintenance", "enterprise", "resources"],
    needs: { size: 1, noise: 1, openness: 2, facilities: 2 },
    uses: ["Café", "Events & hire"], permissions: ["faculty"], funding: "small",
    taster: "A trestle table, an urn and a washing-up bowl, weekly for a term.",
    how: [
      "Site it where drinks are already made.",
      "Prefer free-standing: easier to approve and remove.",
      "Price the drainage before choosing a spot."
    ],
    watch: [
      "Water and drainage cost more than the joinery.",
      "Without cupboards, it becomes permanent clutter."
    ],
    worksWith: ["storage", "community-meal", "warm-space", "esol", "hire"],
    precedents: [
      { id: "st-stephen-walbrook", why: "A significant interior that calls for minimal change." }
    ],
    sources: ["glasshouse", "edpLeadership", "crossingThreshold"]
  },
  {
    id: "cafe", name: "Café", family: "food",
    one: "The everyday, free, no-reason-needed way in.",
    what: "A staffed café with reliable hours and seats people can use without buying much.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["aisle", "cafe", "community", "undercroft", "entrance"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"],
    themes: ["enterprise", "context", "access", "delight", "maintenance"],
    needs: { size: 2, noise: 2, openness: 5, facilities: 4 },
    uses: ["Café"], permissions: ["faculty", "planning", "changeuse", "licence"], funding: "trading",
    taster: "A pop-up coffee cart two mornings a week, run by a local independent.",
    how: [
      "Check demand first: who passes, and when.",
      "Decide who runs it: charity, trading arm, tenant or volunteers.",
      "Design for lingering, and plan deliveries before looks."
    ],
    watch: [
      "Staffing is the business case. Volunteer cafés often falter.",
      "A café that closes without notice loses the easiest welcome."
    ],
    worksWith: ["transparency", "domestic-comfort", "post-office", "trading-sub", "accessible-wc"],
    precedents: [
      { id: "sheriff-centre", why: "The Sanctuary Café, planned with the post office and soft play." },
      { id: "grand-junction", why: "Open daily, and until 10pm on Fridays and Saturdays." },
      { id: "garden-museum", why: "Draws people who never meant to visit the museum." }
    ],
    sources: ["glasshouse", "plunkett", "crossingThreshold"]
  },
  {
    id: "community-meal", name: "Community meal or lunch club", family: "food",
    one: "One table, once a week, everyone eating together.",
    what: "A regular shared meal, like a lunch club or a pay-what-you-can supper.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "kitchen", "aisle", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["access", "flexibility", "maintenance", "delight"],
    needs: { size: 2, noise: 3, openness: 4, facilities: 4 },
    uses: ["Everyday services", "Events & hire"], permissions: ["governance", "licence"], funding: "council",
    taster: "Cook one meal and invite the fifty nearest homes by hand-delivered note.",
    how: [
      "Fix the day and time, and keep them.",
      "Lay proper tables; it makes a meal, not a handout.",
      "Seat people together, and think about transport."
    ],
    watch: [
      "Cooking for numbers needs a suitable kitchen. Ask environmental health.",
      "Kitchen and chair storage will run short."
    ],
    worksWith: ["servery", "food-project", "storage", "warm-space", "hire"],
    precedents: [
      { id: "grand-junction", why: "A free weekly meal for older residents." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },

  /* ================= CULTURE & GATHERING ================= */
  {
    id: "concerts", name: "Concerts & live music", family: "culture",
    one: "Use the acoustics you already have.",
    what: "Ticketed and free performances in the main space. Needs lighting, power, seating and a licence.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["worship", "undercroft", "community"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["enterprise", "delight", "flexibility", "security", "context"],
    needs: { size: 3, noise: 5, openness: 3, facilities: 2 },
    uses: ["Culture & music", "Events & hire"], permissions: ["faculty", "licence", "governance"], funding: "trading",
    taster: "One pay-what-you-can evening with a local choir or promoter.",
    how: [
      "Invest in lighting, power for sound and movable seats.",
      "Get a premises licence before programming.",
      "Partner with promoters for audiences and expertise."
    ],
    watch: [
      "Noise ends events programmes. Agree limits and finish times.",
      "Heating for evening audiences is costly. Price it into hire."
    ],
    worksWith: ["movable-seating", "lighting", "late-opening", "hire", "trading-sub"],
    tension: ["quiet-room", "acoustics"],
    precedents: [
      { id: "grand-junction", why: "A music programme in a Grade I nave, funding free activity." },
      { id: "st-stephen-walbrook", why: "Weekly recitals and after-work jazz." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },
  {
    id: "exhibition", name: "Exhibition & interpretation", family: "culture",
    one: "Tell the story of the building and area where people already pass.",
    what: "Banners, panels or a community heritage display that gives visitors a reason to stay and return.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "aisle", "entrance", "undercroft", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction"], themes: ["identity", "delight", "legibility", "context"],
    needs: { size: 1, noise: 1, openness: 3, facilities: 1 },
    uses: ["Heritage", "Culture & music", "Learning"], permissions: ["none", "faculty"], funding: "small",
    taster: "Six boards made with a local history group, up for a month, with a comments book.",
    how: [
      "Make it with local people, where people already stand.",
      "Change it regularly; static displays stop being seen.",
      "Advertise it outside."
    ],
    watch: [
      "No fixings into stone or plaster without advice.",
      "Daylight fades textiles and paper."
    ],
    worksWith: ["community-art", "trail", "signage", "coproduce", "library-culture"],
    precedents: [
      { id: "st-patricks-wapping", why: "Good banners, unadvertised outside." },
      { id: "grand-junction", why: "A heritage guide and a community curatorial panel." },
      { id: "garden-museum", why: "A church re-founded as a museum." }
    ],
    sources: ["glasshouse", "edpLeadership"]
  },
  {
    id: "hire", name: "Venue & event hire", family: "culture",
    one: "Sell the hours you do not use to fund the ones you cannot sell.",
    what: "Renting space for events, filming and fairs, ideally funding the free programme.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Fully",
    zones: ["worship", "community", "undercroft", "outdoor", "aisle"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality"], themes: ["enterprise", "flexibility", "maintenance", "security"],
    needs: { size: 3, noise: 4, openness: 2, facilities: 4 },
    uses: ["Events & hire"], permissions: ["governance", "licence", "faculty"], funding: "trading",
    taster: "Price one room, list it on a hall-hire site, take three bookings.",
    how: [
      "Work out the true hourly cost first.",
      "Publish capacities, layouts and photos.",
      "Book the free programme into the diary first."
    ],
    watch: [
      "Hire income is seasonal. Do not build fixed costs on it.",
      "Too much hire and it stops being a community building."
    ],
    worksWith: ["movable-seating", "storage", "trading-sub", "concerts", "timetable"],
    tension: ["warm-space"],
    precedents: [
      { id: "grand-junction", why: "Nave and undercroft hired, with income back to the charity." },
      { id: "sheriff-centre", why: "Several spaces for hire, each priced differently." }
    ],
    sources: ["plunkett", "glasshouse", "crossingThreshold"]
  },
  {
    id: "library-culture", name: "Library, reading room or archive", family: "culture",
    one: "A quiet civic use with a ready-made audience.",
    what: "A library service, reading room, local archive or book swap — a natural fit for a sacred interior.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["aisle", "tower", "community", "undercroft", "worship"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Temporality"], themes: ["access", "flexibility", "delight", "identity", "resources"],
    needs: { size: 2, noise: 1, openness: 4, facilities: 3 },
    uses: ["Learning", "Heritage", "Quiet & reflection"], permissions: ["faculty", "changeuse", "governance"], funding: "council",
    taster: "A shelf of books by the door, or a monthly book swap.",
    how: [
      "Talk to the council's library service.",
      "Check floor loading, damp, security and IT first.",
      "Consider upper rooms, like a tower room."
    ],
    watch: [
      "Books and damp do not mix. Survey the environment first.",
      "Library standards may exceed what volunteers can meet."
    ],
    worksWith: ["quiet-room", "transparency", "heating", "exhibition", "esol"],
    precedents: [
      { id: "lambeth-palace-library", why: "A library on faith land with just 12 reading seats." },
      { id: "st-patricks-wapping", why: "Children's books on site, not presented as an offer." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },

  /* ================= LEARNING, CARE & WELLBEING ================= */
  {
    id: "esol", name: "ESOL & adult learning", family: "learning",
    one: "Language classes, funded by an education partner.",
    what: "English classes, conversation cafés and skills courses run with a college or adult education service.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "aisle", "chapel", "office", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["access", "flexibility", "maintenance", "enterprise"],
    needs: { size: 2, noise: 1, openness: 4, facilities: 3 },
    uses: ["Learning"], permissions: ["governance"], funding: "council",
    taster: "A weekly volunteer-run conversation café.",
    how: [
      "Contact the borough's adult education service and local colleges.",
      "Offer a whiteboard, good light, movable chairs and heating.",
      "Ask whether learners need childcare."
    ],
    watch: [
      "Term-time use leaves gaps. Plan for the holidays.",
      "Never proselytise."
    ],
    worksWith: ["acoustics", "toddler", "heating", "servery", "library-culture"],
    precedents: [
      { id: "grand-junction", why: "Classes with Westminster Adult Education Service, and a language café." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },
  {
    id: "wellbeing", name: "Wellbeing classes", family: "learning",
    one: "Yoga, Zumba and mindfulness: easy, regular bookings.",
    what: "Exercise and wellbeing sessions that fill hard-to-let daytime hours.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "worship", "aisle", "undercroft", "outdoor"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality", "Interaction"], themes: ["flexibility", "maintenance", "access", "resources"],
    needs: { size: 2, noise: 2, openness: 3, facilities: 3 },
    uses: ["Learning", "Events & hire"], permissions: ["governance"], funding: "trading",
    taster: "Give one instructor a free six-week slot in return for feedback.",
    how: [
      "Clear a floor area and find storage for mats.",
      "Let quiet slots cheaply; keep evenings for higher-value hire.",
      "Run at least one free class."
    ],
    watch: [
      "Some congregations object to certain practices. Discuss it early.",
      "Cold rooms empty classes."
    ],
    worksWith: ["movable-seating", "storage", "heating", "hire", "timetable"],
    precedents: [
      { id: "grand-junction", why: "Weekly yoga and Zumba in a Grade I church." },
      { id: "sheriff-centre", why: "Classes beside the post office and café." }
    ],
    sources: ["glasshouse"]
  },
  {
    id: "creative-workshop", name: "Creative workshops & making", family: "learning",
    one: "Art, craft and repair get strangers talking.",
    what: "Regular making sessions, from art and textiles to repair cafés.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "undercroft", "aisle", "office"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["flexibility", "maintenance", "delight", "enterprise"],
    needs: { size: 2, noise: 3, openness: 4, facilities: 3 },
    uses: ["Culture & music", "Learning"], permissions: ["governance"], funding: "council",
    taster: "One afternoon, one long table, scrap materials and tea.",
    how: [
      "Use one long table, not small ones.",
      "Provide storage for work in progress.",
      "Exhibit the results in the building."
    ],
    watch: [
      "Kilns and solvents affect insurance and fire risk.",
      "Keep the door open so groups do not close in."
    ],
    worksWith: ["community-art", "storage", "exhibition", "youth-club", "servery"],
    precedents: [
      { id: "grand-junction", why: "Free weekly art and knit-and-stitch sessions." },
      { id: "st-patricks-wapping", why: "The old school let as artists' studios." }
    ],
    sources: ["glasshouse", "edpCount"]
  },
  {
    id: "health-outreach", name: "Health & social care outreach", family: "learning",
    one: "Clinics and carers' groups in a trusted building.",
    what: "Hosting NHS, public health or social care sessions: they bring the staff, you bring the room.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "office", "chapel", "aisle"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Temporality"], themes: ["access", "security", "maintenance", "context"],
    needs: { size: 2, noise: 1, openness: 4, facilities: 4 },
    uses: ["Everyday services", "Learning"], permissions: ["governance"], funding: "council",
    taster: "Offer the room for one flu or blood-pressure clinic.",
    how: [
      "Approach the local Primary Care Network and social prescribers.",
      "Check their needs: privacy, hand-washing, step-free access.",
      "Offer a regular slot, not one-offs."
    ],
    watch: [
      "Clinical use has standards a hall may not meet.",
      "Keep pastoral and clinical roles separate."
    ],
    worksWith: ["advice-clinic", "accessible-wc", "meeting-rooms", "toddler", "step-free"],
    precedents: [
      { id: "grand-junction", why: "Parent and baby programmes run with partners." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },

  /* ================= PLAY & YOUNG PEOPLE ================= */
  {
    id: "toddler", name: "Parent & toddler group", family: "play",
    one: "Often the most-needed use, and the easiest to start.",
    what: "A weekly stay-and-play needing warmth, baby-change, buggy space and a clean floor.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "aisle", "play", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["access", "flexibility", "maintenance", "security"],
    needs: { size: 2, noise: 3, openness: 4, facilities: 3 },
    uses: ["Play"], permissions: ["governance"], funding: "volunteer",
    taster: "Run it four times before advertising; parents spread the word.",
    how: [
      "Sort buggy parking, baby-change and a warm floor.",
      "Charge a small fee with tea included.",
      "Get safeguarding right, and keep the toys on wheels."
    ],
    watch: [
      "Noise carries in a nave. Agree the quiet areas.",
      "Cliques exclude the isolated parents you want to reach."
    ],
    worksWith: ["accessible-wc", "small-welcome", "acoustics", "esol", "sensory"],
    precedents: [
      { id: "grand-junction", why: "Free baby sing-and-play and family art sessions." },
      { id: "sheriff-centre", why: "Soft play for the same families, at larger scale." }
    ],
    sources: ["glasshouse", "edpCount"]
  },
  {
    id: "soft-play", name: "Soft play", family: "play",
    one: "Paid indoor play that can fund free services.",
    what: "A permanent soft play with booked sessions and admission — a rare money-maker, and noisy.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["aisle", "play", "community", "worship"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["enterprise", "security", "maintenance", "access", "flexibility"],
    needs: { size: 3, noise: 5, openness: 4, facilities: 4 },
    uses: ["Play", "Events & hire"], permissions: ["faculty", "planning", "changeuse", "governance"], funding: "trading",
    taster: "Hire a portable set for a half-term play day.",
    how: [
      "Check local demand and competition.",
      "Choose a bay that can be acoustically separated.",
      "Keep a quiet room elsewhere in the building."
    ],
    watch: [
      "Get acoustic advice before applying for a faculty.",
      "Equipment wears out. Budget for replacement."
    ],
    worksWith: ["quiet-room", "acoustics", "cafe", "accessible-wc", "sensory"],
    tension: ["quiet-room", "concerts"],
    precedents: [
      { id: "sheriff-centre", why: "Hullabaloo soft play in the north aisle." }
    ],
    sources: ["glasshouse", "plunkett", "edpLeadership"]
  },
  {
    id: "youth-club", name: "Youth club & after-school provision", family: "play",
    one: "Over 1,000 youth centres closed in England from 2010 to 2023.",
    what: "Drop-in or structured sessions for young people: games, arts, food and homework help.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["community", "undercroft", "play", "outdoor", "aisle"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["access", "security", "flexibility", "maintenance"],
    needs: { size: 3, noise: 4, openness: 4, facilities: 4 },
    uses: ["Play", "Learning"], permissions: ["governance"], funding: "council",
    taster: "Open one evening with games, wi-fi, food and two trained adults.",
    how: [
      "Partner with a youth work organisation.",
      "Serve a hot meal.",
      "Let young people shape the space and programme."
    ],
    watch: [
      "Funding is short-term. Build on a partner's core funding.",
      "Expect neighbour complaints. Agree a routine."
    ],
    worksWith: ["community-art", "late-opening", "creative-workshop", "partnership", "playground"],
    precedents: [
      { id: "grand-junction", why: "A weekly drop-in with games, arts and a meal for 8–13s." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },
  {
    id: "playground", name: "Playground or play landscape", family: "play",
    one: "Outdoor play on ground you already own.",
    what: "Play equipment or natural play on forecourts or the non-burial parts of a churchyard.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["outdoor", "carpark", "garden", "churchyard"],
    sacredness: ["Semi-secular", "Secular", "Active worship"],
    dims: ["Use", "Publicness", "Interaction"], themes: ["access", "security", "maintenance", "context", "delight"],
    needs: { size: 2, noise: 4, openness: 5, facilities: 1 }, outdoor: true,
    uses: ["Play", "Nature & gardening"], permissions: ["faculty", "planning"], funding: "council",
    taster: "A play day with borrowed equipment. Let children vote on a plan.",
    how: [
      "Confirm the ground's burial status first.",
      "Make sure play can be seen from paths or windows.",
      "Consider natural play: logs, mounds, planting."
    ],
    watch: [
      "Play equipment on consecrated ground needs a faculty.",
      "Inspection and insurance are ongoing costs."
    ],
    worksWith: ["seating-outside", "greening", "youth-club", "small-welcome", "paths"],
    tension: ["memorial"],
    precedents: [
      { id: "st-johns-churchyard-wapping", why: "Open green ground with little on it." },
      { id: "tower-hamlets-cemetery-park", why: "Remembrance and play kept apart in one landscape." }
    ],
    sources: ["glasshouse", "edpCount"]
  },

  /* ================= WORK & ENTERPRISE ================= */
  {
    id: "workspace", name: "Affordable workspace & studios", family: "work",
    one: "Low-rent studios in spare buildings.",
    what: "Letting spare rooms as studios or desks for steady income and daytime use.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["office", "community", "undercroft", "tower"],
    sacredness: ["Semi-secular", "Secular", "Active worship"],
    dims: ["Use", "Temporality"], themes: ["enterprise", "identity", "maintenance", "security", "resources"],
    needs: { size: 2, noise: 2, openness: 2, facilities: 4 },
    uses: ["Events & hire", "Learning"], permissions: ["planning", "changeuse", "governance"], funding: "trading",
    taster: "Let one room monthly to a single maker.",
    how: [
      "Check power, heat, light, access and security.",
      "Use licences for flexibility, and take legal advice.",
      "Hold an annual open studios."
    ],
    watch: [
      "Keep a public route and room, so it does not privatise the site.",
      "Do not over-formalise; low rent is the point."
    ],
    worksWith: ["meeting-rooms", "trading-sub", "heating", "creative-workshop", "storage"],
    tension: ["open-hours"],
    precedents: [
      { id: "st-patricks-wapping", why: "St Patrick's Studios in the old parish school." },
      { id: "lambeth-palace-library", why: "An institutional building where publicness was not designed in." }
    ],
    sources: ["glasshouse", "atu", "crossingThreshold"]
  },
  {
    id: "meeting-rooms", name: "Bookable meeting & therapy rooms", family: "work",
    one: "A quiet room with wi-fi, let by the hour.",
    what: "Small rooms let to therapists, tutors and small charities for steady daytime income.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["office", "community", "chapel", "tower"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality"], themes: ["enterprise", "flexibility", "security", "maintenance"],
    needs: { size: 1, noise: 0, openness: 2, facilities: 4 },
    uses: ["Events & hire", "Everyday services"], permissions: ["governance"], funding: "trading",
    taster: "Furnish one room and list it for hourly booking for a term.",
    how: [
      "Fit it out properly: a good chair, light and wi-fi.",
      "Ensure confidentiality: a closing door and no overhearing.",
      "Use online booking and door codes."
    ],
    watch: [
      "Therapy needs real soundproofing.",
      "Check insurance and safeguarding for one-to-one work."
    ],
    worksWith: ["advice-clinic", "acoustics", "workspace", "health-outreach", "digital"],
    precedents: [
      { id: "sheriff-centre", why: "A meeting and therapy room inside a busy venue." }
    ],
    sources: ["plunkett", "glasshouse"]
  },
  {
    id: "market", name: "Market, fair or car boot", family: "work",
    one: "Trading on your own ground on quiet days.",
    what: "A regular market or fair in the hall, forecourt or churchyard path.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "outdoor", "carpark", "community", "churchyard"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"], themes: ["enterprise", "context", "access", "security"],
    needs: { size: 3, noise: 3, openness: 5, facilities: 2 },
    uses: ["Events & hire", "Everyday services"], permissions: ["governance", "licence", "planning"], funding: "trading",
    taster: "One Saturday, ten tables, traders from a local group.",
    how: [
      "Check whether trading consent or an event notice is needed.",
      "Arrange tables, power, toilets, bins and unloading.",
      "Run it on a fixed date each month."
    ],
    watch: [
      "Protect grass and graves; use hard surfaces.",
      "Talk to nearby shops first."
    ],
    worksWith: ["meanwhile", "context-fit", "seating-outside", "trading-sub", "cafe"],
    precedents: [
      { id: "st-georges-gardens", why: "Consecrated ground already hosting public events." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },

  /* ================= QUIET & REMEMBRANCE ================= */
  {
    id: "quiet-room", name: "Protected quiet room", family: "quiet",
    one: "One room that stays quiet, whatever else is happening.",
    what: "A chapel or screened space kept for prayer or silence during opening hours, properly soundproofed.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["chapel", "aisle", "tower", "worship"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness"], themes: ["identity", "security", "delight", "flexibility"],
    needs: { size: 1, noise: 0, openness: 4, facilities: 0 },
    uses: ["Quiet & reflection", "Worship"], permissions: ["faculty"], funding: "small",
    taster: "Set aside and sign one bay for a month, clear of stored chairs.",
    how: [
      "Pick a space that can be truly separated.",
      "Keep it clear of storage.",
      "Make it visible from the busy areas."
    ],
    watch: [
      "Private, but not hidden.",
      "Once it is bookable, it is no longer a quiet room."
    ],
    worksWith: ["soft-play", "post-office", "cafe", "acoustics", "sensory"],
    precedents: [
      { id: "sheriff-centre", why: "A Lady Chapel planned for private prayer in a busy building." },
      { id: "grand-junction", why: "Reflective services in the undercroft chapel." }
    ],
    sources: ["edpLeadership", "glasshouse"]
  },
  {
    id: "memorial", name: "Remembrance & memorial space", family: "quiet",
    one: "A place to grieve, designed rather than left over.",
    what: "A garden of remembrance, memorial wall, or bench and planting that gives people a reason to return.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["churchyard", "garden", "chapel", "outdoor"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness"], themes: ["identity", "delight", "maintenance", "access"],
    needs: { size: 1, noise: 0, openness: 4, facilities: 0 }, outdoor: true,
    uses: ["Quiet & reflection", "Nature & gardening"], permissions: ["faculty", "planning"], funding: "small",
    taster: "A bench, a planted bed and a small sign in the quietest corner.",
    how: [
      "Talk to families and local funeral directors.",
      "Separate memorial and recreation with planting or paths.",
      "Record who is commemorated, and where."
    ],
    watch: [
      "Faculty rules on materials and wording are strict.",
      "Only create what you can maintain for decades."
    ],
    worksWith: ["paths", "seating-outside", "nature-reserve", "churchyard-open", "quiet-room"],
    tension: ["playground", "market"],
    precedents: [
      { id: "paddington-old-cemetery", why: "Open grounds around closed chapels." },
      { id: "tower-hamlets-cemetery-park", why: "Remembrance and recreation kept apart." }
    ],
    sources: ["churchcare", "glasshouse"]
  },
  {
    id: "multifaith", name: "Multi-faith & interfaith space", family: "quiet",
    one: "Space more than one faith can genuinely use.",
    what: "A shared prayer room, or hosting another community's regular worship.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["chapel", "community", "worship", "tower"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"], themes: ["identity", "flexibility", "access", "security"],
    needs: { size: 2, noise: 1, openness: 4, facilities: 3 },
    uses: ["Worship", "Quiet & reflection"], permissions: ["faculty", "governance"], funding: "volunteer",
    taster: "Host one shared event, like a meal, before proposing shared space.",
    how: [
      "Find local faith groups still looking for space.",
      "Learn their needs: orientation, washing, shoes, calendars.",
      "Agree governance in writing."
    ],
    watch: [
      "Avoid one community hosting another on sufferance.",
      "Expect internal opposition, and discuss it openly."
    ],
    worksWith: ["quiet-room", "timetable", "coproduce", "partnership", "sensory"],
    precedents: [
      { id: "lambeth-palace-library", why: "A faith institution whose public offer depends on its entrance." },
      { id: "grand-junction", why: "Arab, Caribbean and African culture in an Anglican church." }
    ],
    sources: ["edpLeadership", "glasshouse", "npff"]
  },

  /* ================= GROUNDS, NATURE & GREEN ================= */
  {
    id: "churchyard-open", name: "Open and legible churchyard", family: "grounds",
    one: "Treat the churchyard as a route, not a leftover.",
    what: "More than one entrance, clear paths, intentional mowing and safe sight lines.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["churchyard", "outdoor", "garden"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Interaction"], themes: ["access", "legibility", "security", "maintenance", "delight"],
    needs: { size: 2, noise: 1, openness: 5, facilities: 0 }, outdoor: true,
    uses: ["Quiet & reflection", "Nature & gardening", "Heritage"], permissions: ["faculty", "planning"], funding: "small",
    taster: "Unlock a second gate for a month.",
    how: [
      "Map where people cut through.",
      "Open a second entrance if you can.",
      "Use mowing as design: neat edges around long grass."
    ],
    watch: [
      "Consult on any work to memorials.",
      "More visitors mean more litter. Fund the upkeep first."
    ],
    worksWith: ["paths", "seating-outside", "small-welcome", "friends-group", "nature-reserve"],
    precedents: [
      { id: "st-johns-churchyard-wapping", why: "A shortcut with one bench and gravestones against the wall." },
      { id: "st-georges-gardens", why: "A burial ground turned civic garden." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "community-garden", name: "Community garden & growing", family: "grounds",
    one: "Beds, tools, a tap and a group with keys.",
    what: "Raised beds, fruit trees or plots on church land, run by volunteers.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["garden", "churchyard", "outdoor", "carpark"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Interaction", "Temporality"], themes: ["resources", "maintenance", "access", "delight", "context"],
    needs: { size: 2, noise: 2, openness: 4, facilities: 1 }, outdoor: true,
    uses: ["Nature & gardening"], permissions: ["faculty", "governance"], funding: "volunteer",
    taster: "Four raised beds and a Saturday session, for under £400.",
    how: [
      "Find the group before building the beds.",
      "Check burial status, soil and water.",
      "Provide a tap, a lockable store and somewhere to sit."
    ],
    watch: [
      "Growing on burial ground needs a faculty; raised beds on hard ground avoid most issues.",
      "Agree a summer watering rota."
    ],
    worksWith: ["friends-group", "indoor-green", "greening", "small-welcome", "nature-reserve"],
    precedents: [
      { id: "st-dunstan-in-the-east", why: "A much-loved garden inside a ruin." },
      { id: "garden-museum", why: "A church reborn around gardening." }
    ],
    sources: ["glasshouse", "edpExplore"]
  },
  {
    id: "nature-reserve", name: "Nature reserve & outdoor classroom", family: "grounds",
    one: "Manage the burial landscape for wildlife, and teach in it.",
    what: "Habitat management, wildlife recording, walks and school visits on large burial grounds.",
    scale: "Large", cost: "££ £100k–£1m", timescale: "Over 5 years", reversible: "Mostly",
    zones: ["churchyard", "garden", "outdoor"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"], themes: ["resources", "maintenance", "access", "context", "delight"],
    needs: { size: 4, noise: 1, openness: 5, facilities: 2 }, outdoor: true,
    uses: ["Nature & gardening", "Learning", "Heritage"], permissions: ["faculty", "governance", "planning"], funding: "development",
    taster: "A weekend species count with a local wildlife trust.",
    how: [
      "Start with an ecological survey.",
      "Zone it: managed near the entrances, wilder at the edges.",
      "Build a Friends group early."
    ],
    watch: [
      "Keep remembrance and recreation apart.",
      "Plan for at least one paid post."
    ],
    worksWith: ["friends-group", "paths", "trail", "memorial", "churchyard-open"],
    precedents: [
      { id: "tower-hamlets-cemetery-park", why: "A Local Nature Reserve run with a Friends charity." },
      { id: "paddington-old-cemetery", why: "A large cemetery deciding how public to be." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },
  {
    id: "greening", name: "Greening & climate adaptation", family: "grounds",
    one: "Trees, shade and rain gardens on your hard ground.",
    what: "Turning car parks and paving into shaded, planted, permeable space.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["carpark", "outdoor", "churchyard", "garden"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use"], themes: ["resources", "delight", "maintenance", "context", "access"],
    needs: { size: 2, noise: 0, openness: 4, facilities: 0 }, outdoor: true,
    uses: ["Nature & gardening", "Quiet & reflection"], permissions: ["faculty", "planning"], funding: "council",
    taster: "Trees in large planters for a summer, where permanent ones might go.",
    how: [
      "Count cars before assuming the car park is needed.",
      "Add shade over existing seats and routes.",
      "Check council greening grants and CIL."
    ],
    watch: [
      "Roots meet foundations and burials. Get advice.",
      "New trees need three years of watering."
    ],
    worksWith: ["seating-outside", "paths", "community-garden", "playground", "indoor-green"],
    precedents: [
      { id: "st-dunstan-in-the-east", why: "Planting and shade make a cool City refuge." },
      { id: "paddington-old-cemetery", why: "Mature trees and quiet for everyday walks." }
    ],
    sources: ["glasshouse", "npff"]
  },

  /* ================= FABRIC & INFRASTRUCTURE ================= */
  {
    id: "accessible-wc", name: "Accessible WC & baby change", family: "fabric",
    one: "Often the one thing blocking community use.",
    what: "At least one accessible toilet with baby change, on the same level as the main activity.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Permanent",
    zones: ["wc", "tower", "entrance", "community", "aisle"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use"], themes: ["access", "maintenance", "resources", "legibility"],
    needs: { size: 1, noise: 0, openness: 2, facilities: 1 },
    uses: ["Everyday services"], permissions: ["faculty", "planning"], funding: "capital",
    taster: "Hire an accessible portable toilet for an event.",
    how: [
      "Survey the drainage first.",
      "Compare options: tower base, vestry, aisle bay or extension.",
      "Design beyond the minimum, and signpost it."
    ],
    watch: [
      "Access needs can conflict. Plan for it.",
      "Drainage, archaeology and the faculty take time."
    ],
    worksWith: ["step-free", "cafe", "toddler", "soft-play", "health-outreach"],
    precedents: [
      { id: "grand-junction", why: "A new wing added toilets, a lift and level access." }
    ],
    sources: ["cae", "glasshouse", "churchcare"]
  },
  {
    id: "step-free", name: "Step-free access", family: "fabric",
    one: "Everyone through the same door.",
    what: "Ramps, levelled thresholds or a lift, so wheelchair users use the main entrance too.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Permanent",
    zones: ["entrance", "worship", "outdoor", "community"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use"], themes: ["access", "identity", "legibility", "delight"],
    needs: { size: 1, noise: 0, openness: 3, facilities: 1 },
    uses: ["Everyday services"], permissions: ["faculty", "planning"], funding: "capital",
    taster: "Hire a temporary ramp for a month and count its use.",
    how: [
      "Survey every level change from pavement to room.",
      "Consider raising the pavement.",
      "Make the main entrance accessible, and test it with users."
    ],
    watch: [
      "Ramps need more space than expected.",
      "Historic thresholds need careful, conservation-led design."
    ],
    worksWith: ["accessible-wc", "threshold-edge", "paths", "health-outreach", "extension"],
    precedents: [
      { id: "grand-junction", why: "Level access and a lift via the new wing." },
      { id: "sheriff-centre", why: "A ramp and automatic doors at the main entrance." }
    ],
    sources: ["cae", "glasshouse", "historicEngland"]
  },
  {
    id: "movable-seating", name: "Movable seating", family: "fabric",
    one: "The biggest change a nave can make, and the most debated.",
    what: "Replacing some or all fixed pews with good stacking chairs to make the space flexible.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["worship", "aisle", "chapel"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality", "Interaction"], themes: ["flexibility", "maintenance", "delight", "identity"],
    needs: { size: 2, noise: 0, openness: 2, facilities: 2 },
    uses: ["Worship", "Events & hire", "Culture & music"], permissions: ["faculty"], funding: "capital",
    taster: "Clear one aisle and let people try sample chairs.",
    how: [
      "Understand why people value the pews.",
      "Try a partial change first.",
      "Plan chair storage before buying."
    ],
    watch: [
      "It is often the biggest flashpoint. Treat it as engagement.",
      "Cheap chairs soon need replacing."
    ],
    worksWith: ["storage", "concerts", "hire", "wellbeing", "community-meal"],
    precedents: [
      { id: "st-stephen-walbrook", why: "Seating gathered round a central altar." },
      { id: "sheriff-centre", why: "Café seating at the west end, worship seating at the east." }
    ],
    sources: ["edpLeadership", "churchcare", "glasshouse"]
  },
  {
    id: "heating", name: "Heating, insulation & retrofit", family: "fabric",
    one: "The running cost that decides what is affordable.",
    what: "Radiant heat, insulation, draught-proofing and simple controls.",
    scale: "Medium", cost: "££ £100k–£1m", timescale: "2–5 years", reversible: "Mostly",
    zones: ["worship", "community", "aisle", "undercroft", "chapel"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality"], themes: ["resources", "maintenance", "flexibility", "delight"],
    needs: { size: 2, noise: 0, openness: 1, facilities: 2 },
    uses: ["Events & hire", "Learning"], permissions: ["faculty", "planning"], funding: "capital",
    taster: "Hire a thermal camera and try radiant heaters, for under £1,000.",
    how: [
      "Survey heat loss first.",
      "Do cheap fixes first: draught-proofing and curtains.",
      "Heat people, not the whole volume."
    ],
    watch: [
      "Wrong insulation can trap moisture and cause decay.",
      "Heat pumps need space and planning."
    ],
    worksWith: ["warm-space", "esol", "wellbeing", "workspace", "library-culture"],
    precedents: [
      { id: "sheriff-centre", why: "Underfloor heating in the café aisle only." }
    ],
    sources: ["glasshouse", "churchcare", "historicEngland"]
  },
  {
    id: "storage", name: "Storage", family: "fabric",
    one: "Underestimated in every project.",
    what: "Lockable storage for chairs, tables and each group's kit, near where it is used.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Mostly",
    zones: ["store", "community", "tower", "undercroft", "aisle"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality"], themes: ["maintenance", "flexibility", "identity", "security"],
    needs: { size: 1, noise: 0, openness: 1, facilities: 1 },
    uses: ["Events & hire"], permissions: ["faculty"], funding: "small",
    taster: "List everything currently stored on the floor. That list is the brief.",
    how: [
      "Inventory the items and their sizes first.",
      "Store things where they are used.",
      "Use trolleys so one person can clear a room."
    ],
    watch: [
      "Built-in storage in historic fabric needs a faculty.",
      "Without a clear-out policy, it overflows."
    ],
    worksWith: ["movable-seating", "hire", "creative-workshop", "toddler", "servery"],
    precedents: [
      { id: "sheriff-centre", why: "Shop shelving on castors wheels away for services." }
    ],
    sources: ["glasshouse"]
  },
  {
    id: "extension", name: "New wing or extension", family: "fabric",
    one: "When the building cannot hold what is needed, build beside it.",
    what: "A new wing for toilets, kitchen, lift or café, often solving level access too.",
    scale: "Large", cost: "£££ over £1m", timescale: "Over 5 years", reversible: "Permanent",
    zones: ["outdoor", "entrance", "carpark", "community"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction"], themes: ["access", "identity", "context", "enterprise", "resources", "delight"],
    needs: { size: 4, noise: 3, openness: 4, facilities: 5 },
    uses: ["Café", "Learning", "Events & hire"], permissions: ["faculty", "planning", "changeuse"], funding: "capital",
    taster: "Run the planned activities in temporary space for a year.",
    how: [
      "Prove the need with an options appraisal.",
      "Record why other options were rejected.",
      "Decide clearly: contrast or match."
    ],
    watch: [
      "Archaeology and burials make digging slow and costly.",
      "Expect three to ten years."
    ],
    worksWith: ["accessible-wc", "step-free", "cafe", "context-fit", "partnership"],
    precedents: [
      { id: "grand-junction", why: "A new wing on a steep, narrow site, with a £3.6m lottery grant." },
      { id: "lambeth-palace-library", why: "A new building on faith land." }
    ],
    sources: ["heritageFund", "glasshouse", "edpLeadership", "crossingThreshold"]
  },
  {
    id: "insertion", name: "Inserted structure — a box of tricks", family: "fabric",
    one: "A building within the building, touching as little as possible.",
    what: "A free-standing structure in the nave holding toilets, kitchen and storage, with a usable top.",
    scale: "Large", cost: "£££ over £1m", timescale: "Over 5 years", reversible: "Mostly",
    zones: ["worship", "aisle", "undercroft"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction"], themes: ["flexibility", "delight", "identity", "access", "maintenance"],
    needs: { size: 3, noise: 2, openness: 3, facilities: 5 },
    uses: ["Café", "Learning", "Events & hire", "Quiet & reflection"], permissions: ["faculty", "planning"], funding: "capital",
    taster: "Mock it up full size with scaffolding or tape.",
    how: [
      "Identify what is significant, and protect it.",
      "Keep it free-standing so it is reversible.",
      "Use the roof as a balcony."
    ],
    watch: [
      "Floor loading, archaeology and fire strategy decide feasibility.",
      "Blocking the view down the nave will be resisted."
    ],
    worksWith: ["accessible-wc", "servery", "storage", "transparency", "library-culture"],
    precedents: [
      { id: "st-stephen-walbrook", why: "Too significant for anything but minimal change." },
      { id: "garden-museum", why: "Reversible new structures inside a church." }
    ],
    sources: ["edpLeadership", "glasshouse", "churchcare"]
  },

  /* ================= TIME & PROGRAMMING ================= */
  {
    id: "timetable", name: "Timetable the building", family: "time",
    one: "Share by hour, not by partition.",
    what: "One weekly timetable for every room, so sacred and secular uses take turns.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "community", "chapel", "aisle", "undercroft", "outdoor"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Temporality", "Use", "Publicness"], themes: ["flexibility", "maintenance", "enterprise", "legibility"],
    needs: { size: 1, noise: 0, openness: 2, facilities: 0 },
    uses: ["Events & hire", "Worship"], permissions: ["governance"], funding: "none",
    taster: "Draw this week on one sheet, a row per room. Empty cells are the opportunity.",
    how: [
      "Map the current week and what cannot move.",
      "Protect quiet times and spaces.",
      "Fill gaps by noise, size and openness."
    ],
    watch: [
      "Allow changeover time between uses.",
      "Tell regular users about festival dates early."
    ],
    worksWith: ["quiet-room", "hire", "local-noticeboard", "late-opening", "digital"],
    precedents: [
      { id: "grand-junction", why: "Worship, café and hire at different hours." },
      { id: "sheriff-centre", why: "A community centre six days a week, a church on Sundays." }
    ],
    sources: ["edpLeadership", "glasshouse"]
  },
  {
    id: "meanwhile", name: "Meanwhile & seasonal use", family: "time",
    one: "Programme a site you cannot yet change.",
    what: "Temporary activity while a site awaits funding or restoration, keeping it in public view.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "outdoor", "churchyard", "community", "undercroft", "carpark"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality", "Publicness"], themes: ["enterprise", "identity", "context", "security"],
    needs: { size: 2, noise: 3, openness: 4, facilities: 1 },
    uses: ["Culture & music", "Events & hire", "Heritage"], permissions: ["governance", "licence"], funding: "small",
    taster: "Programme one season, then decide.",
    how: [
      "Be clear it is temporary, and for how long.",
      "Find a group to look after it.",
      "Record numbers, photos and quotes as evidence."
    ],
    watch: [
      "Temporary can become permanent without proper agreements.",
      "Check the building is safe for visitors."
    ],
    worksWith: ["market", "community-art", "exhibition", "friends-group", "coproduce"],
    precedents: [
      { id: "st-johns-churchyard-wapping", why: "Open ground with no one looking after it." },
      { id: "paddington-old-cemetery", why: "Open grounds waiting for someone to programme them." }
    ],
    sources: ["glasshouse", "edpCount"]
  },
  {
    id: "late-opening", name: "Evening & late opening", family: "time",
    one: "Evening hours reach people who cannot come by day.",
    what: "Evening programmes like late openings, markets or film nights.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "community", "undercroft", "outdoor", "play"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Temporality", "Use", "Interaction"], themes: ["security", "access", "enterprise", "delight"],
    needs: { size: 2, noise: 3, openness: 3, facilities: 3 },
    uses: ["Culture & music", "Events & hire", "Play"], permissions: ["governance", "licence"], funding: "trading",
    taster: "Hold one late opening and ask what would bring people back.",
    how: [
      "Light the route from the street.",
      "Physically separate open and closed areas.",
      "Finish on time."
    ],
    watch: [
      "Evening entertainment and alcohol need licences.",
      "Never leave one volunteer alone at night."
    ],
    worksWith: ["lighting", "concerts", "soft-play", "hire", "youth-club"],
    precedents: [
      { id: "sheriff-centre", why: "Soft play lates with a bar." },
      { id: "grand-junction", why: "A café open until 10pm, and club nights." }
    ],
    sources: ["glasshouse"]
  },
  {
    id: "trail", name: "Trail, tour & walk", family: "time",
    one: "Link the site to its neighbours and share their visitors.",
    what: "A guided or self-guided route connecting nearby sites.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["churchyard", "worship", "outdoor", "entrance", "garden"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction"], themes: ["context", "identity", "legibility", "delight"],
    needs: { size: 1, noise: 1, openness: 4, facilities: 0 },
    uses: ["Heritage", "Learning"], permissions: ["none"], funding: "small",
    taster: "Lead one Saturday walk. Ten people is a success.",
    how: [
      "Find the other sites first.",
      "Agree and publish opening times for each.",
      "Join Open House or Heritage Open Days."
    ],
    watch: [
      "Locked sites on an 'open' trail do real damage.",
      "Brief guides, and be honest about difficult history."
    ],
    worksWith: ["exhibition", "paths", "open-hours", "nature-reserve", "signage"],
    precedents: [
      { id: "grand-junction", why: "Open House and canal-side tours." },
      { id: "st-johns-churchyard-wapping", why: "A historic plaque with no trail around it." }
    ],
    sources: ["glasshouse", "crossingThreshold"]
  },

  /* ================= GOVERNANCE & DIGITAL ================= */
  {
    id: "friends-group", name: "Friends group", family: "governance",
    one: "A way for supporters to help without joining anything.",
    what: "Volunteers who fundraise, garden, open up and speak up for a valued site.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["churchyard", "worship", "outdoor", "garden", "community"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use", "Temporality"], themes: ["maintenance", "identity", "context", "enterprise"],
    needs: { size: 0, noise: 0, openness: 3, facilities: 0 },
    uses: ["Nature & gardening", "Heritage"], permissions: ["governance"], funding: "volunteer",
    taster: "Put a notice on the gate inviting people to one meeting.",
    how: [
      "Start with an open meeting, not a constitution.",
      "Offer small, defined tasks.",
      "Constitute once it has momentum."
    ],
    watch: [
      "Volunteers are capacity, not funding.",
      "Agree decision-making rights in writing early."
    ],
    worksWith: ["churchyard-open", "community-garden", "nature-reserve", "meanwhile", "open-hours"],
    precedents: [
      { id: "tower-hamlets-cemetery-park", why: "A Friends charity caring for 31 acres." },
      { id: "st-johns-churchyard-wapping", why: "A site that needs a Friends group." }
    ],
    sources: ["edpLeadership", "crossingThreshold"]
  },
  {
    id: "partnership", name: "Partnership with a delivery charity", family: "governance",
    one: "Bring in an organisation that already knows how.",
    what: "A charity or development trust runs the community offer; the faith community keeps the building and worship.",
    scale: "Large", cost: "££ £100k–£1m", timescale: "Over 5 years", reversible: "Mostly",
    zones: ["worship", "community", "undercroft", "office"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Publicness", "Interaction", "Temporality"], themes: ["enterprise", "maintenance", "identity", "context"],
    needs: { size: 3, noise: 2, openness: 4, facilities: 3 },
    uses: ["Events & hire", "Learning", "Culture & music"], permissions: ["governance", "planning"], funding: "development",
    taster: "Invite two or three organisations to visit and suggest what they would do.",
    how: [
      "Find who already delivers well nearby.",
      "Agree who brings and keeps what.",
      "Put terms, rent, decisions and exit in writing."
    ],
    watch: [
      "Unspoken assumptions break partnerships.",
      "A partner's funders will shape your week."
    ],
    worksWith: ["trading-sub", "coproduce", "extension", "youth-club", "multifaith"],
    precedents: [
      { id: "grand-junction", why: "The parish kept its church; the Paddington Development Trust brought the plan." },
      { id: "sheriff-centre", why: "A charity sharing upkeep of the church." }
    ],
    sources: ["edpLeadership", "crossingThreshold", "plunkett"]
  },
  {
    id: "trading-sub", name: "Trading subsidiary & business plan", family: "governance",
    one: "Earn money properly and give it back.",
    what: "A charity-owned trading company that gifts profits back, with a business plan covering all income and maintenance.",
    scale: "Medium", cost: "£ under £100k", timescale: "2–5 years", reversible: "Mostly",
    zones: ["office", "community", "worship", "cafe"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Use", "Temporality"], themes: ["enterprise", "maintenance", "resources"],
    needs: { size: 1, noise: 0, openness: 1, facilities: 1 },
    uses: ["Events & hire", "Café"], permissions: ["governance"], funding: "development",
    taster: "Model a year of true costs and income on one spreadsheet.",
    how: [
      "Calculate the building's real annual cost.",
      "Model all income together, and test losing the best stream.",
      "Get advice on structure, VAT and business rates."
    ],
    watch: [
      "Commercial use can affect rate relief. Get advice first.",
      "Do not let trading set the priorities."
    ],
    worksWith: ["cafe", "hire", "post-office", "workspace", "partnership"],
    precedents: [
      { id: "sheriff-centre", why: "Businesses run as separate companies, funding charitable work." },
      { id: "grand-junction", why: "Venue income funds the community programme." }
    ],
    sources: ["plunkett", "crossingThreshold", "ahf"]
  },
  {
    id: "digital", name: "Digital presence", family: "governance",
    one: "If people cannot find your hours online, you are closed.",
    what: "A web page with hours, access and events, plus an accurate Google Maps listing.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["office"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use"], themes: ["identity", "legibility", "enterprise", "access"],
    needs: { size: 0, noise: 0, openness: 1, facilities: 0 },
    uses: ["Events & hire"], permissions: ["none"], funding: "none",
    taster: "Search for your building on a phone as a stranger. Note what is missing.",
    how: [
      "Claim and update your Google Maps listing.",
      "State access facts plainly.",
      "List the space on hall-hire sites and council directories."
    ],
    watch: [
      "One up-to-date page beats four neglected channels.",
      "Photos of empty rooms suggest an empty building."
    ],
    worksWith: ["open-hours", "signage", "timetable", "hire", "local-noticeboard"],
    precedents: [
      { id: "sheriff-centre", why: "Hours, prices and booking all online." },
      { id: "grand-junction", why: "Every event listed with prices and access." }
    ],
    sources: ["edpStrategy", "glasshouse"]
  },
  {
    id: "coproduce", name: "Co-design & community engagement", family: "governance",
    one: "Design the process before the building.",
    what: "Open days, workshops and mapping throughout the project, with the results recorded.",
    scale: "Small", cost: "£ under £100k", timescale: "Under 2 years", reversible: "Fully",
    zones: ["worship", "community", "outdoor", "entrance"],
    sacredness: ["Active worship", "Semi-secular", "Secular"],
    dims: ["Publicness", "Use", "Interaction"], themes: ["context", "identity", "enterprise", "access"],
    needs: { size: 1, noise: 2, openness: 4, facilities: 1 },
    uses: ["Learning", "Heritage"], permissions: ["none"], funding: "development",
    taster: "One sticky-note wall with one question, at an event you already run.",
    how: [
      "Say what is fixed and where people can have influence.",
      "Offer different ways to take part.",
      "Record and publish the results."
    ],
    watch: [
      "Never present finished plans as consultation.",
      "Include the surrounding streets, not just your congregation."
    ],
    worksWith: ["community-art", "meanwhile", "partnership", "exhibition", "multifaith"],
    precedents: [
      { id: "grand-junction", why: "Over 100 statements of support for the planning application." }
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
