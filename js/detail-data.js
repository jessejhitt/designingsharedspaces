/* ============================================================
   PLANNING WITH RELIGION — detail-page dataset
   Everything the site.html template needs beyond data.js:
   tags, hero annotations, the uses timetable, the intervention
   record, and the publicness / interaction assessments.

   Ratings vocabulary (used for the coloured pills):
     Low · Low-Medium · Medium · Medium-High · High
   Overall interaction: Dormant · Passive · Emerging · Active
   ============================================================ */

const RATING_SCALE = { "Low": 1, "Low-Medium": 2, "Medium": 3, "Medium-High": 4, "High": 5 };
const DAYS = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

const DETAIL = {

  /* ------------------------------------------------------ 1 */
  "grand-junction": {
    /* Title, address and wording on this page follow the Figma frame (newPWR.pdf, frame 10). */
    pageTitle: "Grand Junction, St Mary Magdalene Paddington",
    pageAddress: "Rowington Cl, London W2 5TF",
    lastChecked: "Jul 2026",
    /* Worship continues in the nave and the undercroft chapel, so the sacredness
       tag reads Active worship, matching data.js. */
    siteTags: ["Westminster", "Grade I", "Mixed-use", "Church", "Active worship"],
    interventionTags: ["Multiple", "Semi-public", "Charity-led", "Congregation-led", "Permanent", "On-site", "Off-site", "Heritage Lottery Fund"],
    /* positions are % of the hero, measured from the Figma */
    annoSpace: "image",
    annotations: [
      { label: "St Mary Magdalene's", x: 1, y: 6, w: 29, h: 58, kind: "red" },
      { label: "Programme banner", x: 29, y: 54, w: 8, h: 13, kind: "buff" },
      { label: "The green — everyday route", x: 40, y: 42, w: 30, h: 18, kind: "green" },
      { label: "Benches along the path", x: 48, y: 64, w: 42, h: 20, kind: "green" }
    ],
    overview: "A Grade I listed Victorian Gothic Revival church beside the Grand Union Canal, the Grand Junction is a multi-arts venue and community hub run by the Paddington Development Trust, operating alongside a continuing Anglican parish.",
    sacrednessRating: "Medium",
    quickLinks: [
      { label: "GrandJunction.Org.Uk", url: "https://grandjunction.org.uk" },
      { label: "Westminster Planning Applications Search", url: "https://idoxpa.westminster.gov.uk/online-applications/" }
    ],
    usesList: ["Active worship", "Cafe", "Live music venue", "Educational and wellbeing classes",
               "Inclusive club nights", "Private and corporate event hire", "Self guided heritage tours", "Community arts"],
    captions: { 3: "A view of the cafe (closed)." },
    context: "Part of a school, next to canal, green pathway, predominantly residential",
    week: [
      { label: "Worship", cells: [
        { start: 0, span: 5, text: "Small Reflective Services (Undercroft chapel)" },
        { start: 6, span: 1, text: "Mass" } ] },
      { label: "Cafe", cells: [
        { start: 0, span: 4, text: "Open 09:00-16:00" },
        { start: 5, span: 2, text: "Open 09:00-19:00 | 18:00" } ] },
      { label: "Event Hire", cells: [
        { start: 0, span: 4, text: "Licensed till 23:30" },
        { start: 4, span: 2, text: "Licensed till 00:00" } ] }
    ],
    process: {
      scales: ["Room", "Building", "Site", "Neighbourhood", "5 years"],
      scaleNote: "Large scale, on-site and off-site changes",
      typologies: ["Nave", "Hall", "Courtyard", "Grounds"],
      typologyNote: "The undercroft chapel also holds small reflective services.",
      delivery: ["Congregation-led", "Charity-led"],
      deliveryNote: "Paddington Development Trust and parish",
      funding: ["Grant", "Fundraising"],
      fundingNote: "Heritage Lottery Fund",
      planning: ["Full planning permission"],
      planningNote: "Submitted to Westminster City Council.",
      notes: "Following the appointment of designers in 2014, a planning application was submitted to Westminster council which received over 100 public statements of support. Once accepted, a £3.6m and five year long project began. It was completed in 2019."
    },
    publicness: {
      rows: [
        ["Ownership",         "Low-Medium",  "Church of England freehold"],
        ["Management",        "Medium",      "Charity-run with parish"],
        ["Physical access",   "High",        "Step-free throughout, wayfinding"],
        ["Perceptual access", "Medium-High", "Open and glass doors, cafe as an open entrance, but not clear “hired” signs"],
        ["Social inclusivity","High",        "Free/pay as you can/inclusive/community workshops and events"],
        ["Animation",         "High",        "Near daily activities and regular events with weekly worship and activated surrounding public spaces"]
      ],
      overall: "High Publicness",
      notes: "Inclusive club nights are designed to mix people with and without learning disabilities; the cafe, classes and community-led activities create repeated and relaxed opportunities for strangers to be in the same room doing something together."
    },
    interaction: {
      rows: [
        ["Activity mix",             "High",        "Offers many different activities, free and paid"],
        ["Design for engagement",    "High",        "Lots of seating, shared tables, multi-use rooms"],
        ["Lingering opportunities",  "Medium",      "Cafe and seating, but events/workshops/payment may deter"],
        ["Multi-faith opportunities","Medium-High", "Different activities"],
        ["Facilitation",             "High",        "Actively designed, and hosted, with opportunities for organic interaction"]
      ],
      overall: "Active",
      notes: "Inclusive club nights are designed to mix people with and without learning disabilities; the cafe, classes and community-led activities create repeated and relaxed opportunities for strangers to be in the same room doing something together."
    },
    scores: { publicness: .83, interaction: .8 }
  },

  /* ------------------------------------------------------ 2 */
  "sheriff-centre": {
    /* Title, address, tags and the two annotated boxes on this page follow the
       Figma (newPWR.pdf, page 11). The hero is the same photograph the Figma
       uses, uncropped, so the annotation rectangles below were measured off the
       artboard as percentages of the photograph itself. */
    /* The Figma's title drops an r ("Sheriff"); the centre spells itself
       Sherriff, as does the Figma's own address line. Corrected here. */
    pageTitle: "The Sherriff Centre, St James’ Church",
    pageAddress: "2 Sherriff Rd, London NW6 2AP",
    lastChecked: "Jul 2026",
    siteTags: ["Camden", "Grade II", "Mixed-use", "Church", "Active worship"],
    /* Corrections to the Figma row, checked against this project's own research:
       - Sunday worship continues, so sacredness is Active worship, not Semi-secular.
       - The nave was re-planned in place: wholly on-site, so "Off-site" is dropped.
       - There was no heritage grant. Funded by fundraising, loans and trading. */
    interventionTags: ["Multiple", "Semi-public", "Charity-led", "Congregation-led",
                       "Permanent", "On-site", "Trading income"],
    annoSpace: "image",
    annotations: [
      { label: "Church",            x: 41.40, y: 49.16, w: 14.40, h: 10.42, kind: "" },
      { label: "High Traffic Road", x: 28.29, y: 62.10, w: 40.67, h: 2.86,  kind: "" }
    ],
    overview: "A working Victorian parish church opposite West Hampstead station that took in the local post office when it closed in 2012 — and grew a café, a two-storey soft play, a debt advice service and a community fridge around it.",
    sacrednessRating: "Medium",
    context: "Directly opposite a busy interchange station on a high-traffic road, in a dense, mixed residential neighbourhood.",
    week: [
      { label: "Post office", cells: [ { start: 0, span: 6, text: "Open 09:00–17:00", accent: true } ] },
      { label: "Café", cells: [ { start: 0, span: 6, text: "Sanctuary Café open 09:00–17:00" } ] },
      { label: "Soft play", cells: [ { start: 0, span: 6, text: "Hullabaloo — sessions all day" } ] },
      { label: "Worship", cells: [ { start: 6, span: 1, text: "Sunday services — centre closed" } ] },
      { label: "Prayer", cells: [ { start: 0, span: 7, text: "Lady Chapel quiet through all opening hours", quiet: true } ] }
    ],
    process: {
      scales: ["Room", "Building"],
      scaleNote: "Medium scale, wholly on-site: the nave was re-planned rather than extended.",
      typologies: ["Nave", "North aisle", "South aisle", "Crossing", "Lady Chapel"],
      delivery: ["Congregation-led", "Social enterprise"],
      deliveryNote: "Registered charity with a trading subsidiary.",
      funding: ["Fundraising", "Loan", "Trading income"],
      fundingNote: "No major heritage grant — local fundraising, loans and trading.",
      planning: ["Faculty", "Change of use"],
      planningNote: "Consent through the Church of England faculty process rather than a full planning application.",
      notes: "Two years of business planning, fundraising, consultation and legal work preceded building in April 2014. The Sherriff Centre opened that July, reportedly the first full post office to operate inside a working Church of England church."
    },
    publicness: {
      rows: [
        ["Ownership",         "Low-Medium",  "Church of England freehold"],
        ["Management",        "Medium-High", "Charity with a trading subsidiary, run as a public service"],
        ["Physical access",   "High",        "Level entry, pushchair and wheelchair accessible throughout"],
        ["Perceptual access", "High",        "Post office signage reads as a shop, not a church"],
        ["Social inclusivity","High",        "Free entry, everyday errands, debt advice and a community fridge"],
        ["Animation",         "High",        "Six days a week of ordinary footfall"]
      ],
      overall: "High Publicness",
      notes: "The post office queue is a great equaliser: people who would never attend a service pass through weekly. Sunday closure keeps the sacred rhythm legible rather than hiding it."
    },
    interaction: {
      rows: [
        ["Activity mix",             "High",   "Errands, coffee, play, advice and gigs under one roof"],
        ["Design for engagement",    "High",   "Café seating in the aisle faces the crossing and the queue"],
        ["Lingering opportunities",  "High",   "Café and soft play give people a reason to stay for hours"],
        ["Multi-faith opportunities","Medium", "Draws the whole neighbourhood, though not through explicit interfaith work"],
        ["Facilitation",             "High",   "Staff and volunteers act as hosts"]
      ],
      overall: "Active",
      notes: "Very high everyday mixing — parents, pensioners, commuters — with staff and volunteers as hosts. Interaction here is a by-product of usefulness, not of programming."
    },
    scores: { publicness: .88, interaction: .9 }
  },

  /* ------------------------------------------------------ 3 */
  "garden-museum": {
    lastChecked: "Jul 2026",
    siteTags: ["Lambeth", "Grade II*", "Cultural", "Deconsecrated church", "Secular"],
    interventionTags: ["Multiple", "Semi-public", "Charity-led", "Institution-led", "Permanent", "On-site", "Heritage Lottery Fund"],
    annoSpace: "image",
    annotations: [
      { label: "Medieval arch", x: 22, y: 6, w: 56, h: 24, kind: "buff" },
      { label: "Automatic glass doors", x: 26, y: 38, w: 48, h: 36, kind: "red" },
      { label: "Kentish ragstone wall", x: 2, y: 30, w: 16, h: 30, kind: "" }
    ],
    overview: "A medieval and Victorian church next to Lambeth Palace, deconsecrated in 1972, saved from demolition in 1977 and remade as Britain's museum of gardens — with copper-clad pavilions, a cloister garden and a well-known café.",
    sacrednessRating: "Low",
    context: "On a busy riverside road opposite the Palace of Westminster, wrapped by Archbishop's Park and Lambeth Palace's walls.",
    week: [
      { label: "Galleries", cells: [ { start: 0, span: 7, text: "Open daily 10:30–17:00 (ticketed)" } ] },
      { label: "Café", cells: [ { start: 0, span: 7, text: "Free to enter — open daily", accent: true } ] },
      { label: "Learning", cells: [ { start: 0, span: 5, text: "School sessions, term time" } ] },
      { label: "Events", cells: [ { start: 2, span: 3, text: "Talks, lates and supper clubs" } ] }
    ],
    process: {
      scales: ["Building", "Site", "5 years"],
      scaleNote: "Large scale, on-site, delivered in two phases forty years apart.",
      typologies: ["Nave", "Chancel", "Churchyard", "New pavilions"],
      delivery: ["Charity-led", "Institution-led"],
      deliveryNote: "Independent charitable trust, founded by Rosemary and John Nicholson.",
      funding: ["Grant", "Fundraising", "Trading income"],
      fundingNote: "Heritage Lottery Fund — £3.51m towards the 2017 phase.",
      planning: ["Full planning permission", "Listed building consent"],
      planningNote: "London Borough of Lambeth.",
      notes: "Deconsecrated in 1972 and scheduled for demolition, the church was rescued by a trust founded in 1977. A second phase by Dow Jones Architects doubled display space and added copper-clad pavilions around the Tradescant tomb, reopening in May 2017."
    },
    publicness: {
      rows: [
        ["Ownership",         "Medium",      "Charitable trust freehold"],
        ["Management",        "Medium-High", "Independent museum with a public remit"],
        ["Physical access",   "High",        "Step-free, lift to all galleries"],
        ["Perceptual access", "Medium-High", "Reads clearly as a public building from the street"],
        ["Social inclusivity","Medium",      "Galleries are ticketed; café, shop and front garden are free"],
        ["Animation",         "High",        "Open almost every day, plus an evening programme"]
      ],
      overall: "High Publicness",
      notes: "The threshold is deliberately soft: you can walk in, sit in the garden and have coffee without buying a ticket. The paywall sits inside the building, not at the door."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Medium-High", "Exhibitions, learning, eating, gardening, hire"],
        ["Design for engagement",    "Medium-High", "The cloister garden gathers people around the tomb"],
        ["Lingering opportunities",  "High",        "Café and garden seating with no purchase pressure"],
        ["Multi-faith opportunities","Low",         "Sacred history is interpreted, not practised"],
        ["Facilitation",             "Medium",      "Learning programmes and talks, less everyday hosting"]
      ],
      overall: "Emerging",
      notes: "Mostly visitor-to-place rather than stranger-to-stranger, but learning programmes, talks and the café generate steady social overlap. Proposals for Lambeth Green would extend the logic outward to the neighbourhood."
    },
    scores: { publicness: .78, interaction: .6 }
  },

  /* ------------------------------------------------------ 4 */
  "st-dunstan-in-the-east": {
    lastChecked: "Jul 2026",
    siteTags: ["City of London", "Grade I", "Public garden", "Churchyard & ruin", "Semi-secular"],
    interventionTags: ["Single", "Public", "Council-managed", "Permanent", "On-site", "Council & public funds"],
    annotations: [
      { label: "Wren tower",      x: 22.57, y: 42.86, w: 12.00, h: 11.26, kind: "red" },
      { label: "Nave as garden",  x: 38.00, y: 53.36, w: 25.71, h: 8.26, kind: "green" },
      { label: "Window tracery",  x: 65.43, y: 50.36, w: 13.71, h: 6.76, kind: "buff" },
      { label: "Stepped approach",x: 32.86, y: 65.37, w: 18.86, h: 3.38,  kind: "" }
    ],
    overview: "A Wren-towered church gutted by the Blitz and never rebuilt. Instead of clearing the ruin, the City of London opened a public garden inside its shell in 1971 — now one of London's best-loved quiet places.",
    sacrednessRating: "Low-Medium",
    context: "A steep, hidden slope between Lower Thames Street and the office blocks of the eastern City, minutes from the river.",
    week: [
      { label: "Garden", cells: [ { start: 0, span: 7, text: "Open daily 08:00–dusk — free, no gate", accent: true } ] },
      { label: "Lunch use", cells: [ { start: 0, span: 5, text: "Peak City-worker use 12:00–14:00" } ] },
      { label: "Visitors", cells: [ { start: 5, span: 2, text: "Heavy weekend photography and visitor pressure" } ] }
    ],
    process: {
      scales: ["Site"],
      scaleNote: "Small scale by cost, total in effect: planting, paths and seats inside an existing ruin.",
      typologies: ["Nave", "Tower", "Churchyard"],
      delivery: ["Council-managed"],
      deliveryNote: "City of London Corporation, as one of the City's public gardens.",
      funding: ["Council & public funds"],
      fundingNote: "Public maintenance budget; no capital campaign.",
      planning: ["Listed building consent"],
      planningNote: "Scheduled ruin retained and stabilised rather than restored.",
      notes: "German bombing in 1941 gutted the church; the parish was never re-formed. Rather than clearance, the Corporation kept the ruin and in 1971 opened a garden within it — climbing plants over gothic tracery, a fountain in the nave, lawns and benches among the walls."
    },
    publicness: {
      rows: [
        ["Ownership",         "High",        "City of London Corporation — public ownership"],
        ["Management",        "High",        "Managed as public realm, not as a venue"],
        ["Physical access",   "Medium",      "Steep site with steps; step-free entry from one side only"],
        ["Perceptual access", "High",        "No gate, no threshold, no permission needed"],
        ["Social inclusivity","High",        "Free, unconditional, open to anyone at any hour of daylight"],
        ["Animation",         "Medium",      "Constant presence but no programming or interpretation"]
      ],
      overall: "High Publicness",
      notes: "The archetype of civic publicness on former church land: fully open daily with no threshold at all. The one real barrier is the topography."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Low",         "Sitting, eating, photographing — nothing programmed"],
        ["Design for engagement",    "Medium",      "Benches face each other within the nave walls"],
        ["Lingering opportunities",  "High",        "People stay for a whole lunch hour without spending"],
        ["Multi-faith opportunities","Low",         "No religious practice, though the ground stays consecrated"],
        ["Facilitation",             "Low",         "No staff, volunteers or friends group on site"]
      ],
      overall: "Passive",
      notes: "Deliberately low-key: people come to be quiet alongside strangers rather than to meet them. Interaction is ambient, not designed — which is exactly where its opportunity sits."
    },
    scores: { publicness: .9, interaction: .34 }
  },

  /* ------------------------------------------------------ 5 */
  "st-georges-gardens": {
    lastChecked: "Jul 2026",
    siteTags: ["Camden", "Grade II* landscape", "Public garden", "Burial ground", "Semi-secular"],
    interventionTags: ["Multiple", "Public", "Friends & volunteers", "Council-managed", "Permanent", "On-site", "Heritage Lottery Fund"],
    annotations: [
      { label: "Mortuary chapel", x: 41.43, y: 49.61, w: 17.14, h: 8.26, kind: "red" },
      { label: "Chest tombs",     x: 20.86, y: 60.12, w: 18.86, h: 4.50, kind: "" },
      { label: "Walled edge",     x: 60.29, y: 55.62, w: 22.29, h: 3.00,  kind: "buff" },
      { label: "Lawn & benches",  x: 32.86, y: 63.12, w: 24.00, h: 5.25, kind: "green" }
    ],
    overview: "One of London's first detached burial grounds, opened 1714, converted to a public garden by the Kyrle Society in the 1880s, then rescued from decline by a Friends group and a lottery-funded restoration completed in 2001. The ground remains consecrated.",
    sacrednessRating: "Low-Medium",
    context: "A walled garden entered from quiet Bloomsbury side streets, in a district where most green squares are gated and private.",
    week: [
      { label: "Gardens", cells: [ { start: 0, span: 7, text: "Open daily dawn–dusk", accent: true } ] },
      { label: "Volunteering", cells: [ { start: 5, span: 1, text: "Friends' planting mornings (seasonal)" } ] },
      { label: "Events", cells: [ { start: 4, span: 3, text: "Open days, history walks, summer garden party" } ] }
    ],
    process: {
      scales: ["Site", "Neighbourhood", "5 years"],
      scaleNote: "Medium scale, on-site — a restoration rather than a conversion.",
      typologies: ["Burial ground", "Mortuary chapel", "Walls & gates"],
      delivery: ["Friends & volunteers", "Council-managed"],
      deliveryNote: "Friends of St George's Gardens with the London Borough of Camden.",
      funding: ["Grant", "Council & public funds", "Volunteer effort"],
      fundingNote: "Heritage Lottery Fund Urban Parks Programme, bid 1997.",
      planning: ["Listed building consent", "Registered landscape consent"],
      planningNote: "Grade II* on the national register of historic landscapes.",
      notes: "By the early 1990s the gardens were overgrown and unsafe. Neighbours formed the Friends in 1994 and persuaded Camden to bid to the Heritage Lottery Fund in 1997; the restored gardens reopened in spring 2001 and are maintained by Camden with the Friends as active stewards."
    },
    publicness: {
      rows: [
        ["Ownership",         "High",        "Camden-owned public open space"],
        ["Management",        "High",        "Council maintenance with an organised Friends group"],
        ["Physical access",   "High",        "Level, three gates, step-free"],
        ["Perceptual access", "Medium-High", "Walled and quiet — rewards local knowledge but excludes no one"],
        ["Social inclusivity","High",        "Free and unconditional in an area of gated squares"],
        ["Animation",         "Medium-High", "Everyday use plus a seasonal Friends programme"]
      ],
      overall: "High Publicness",
      notes: "Enclosure works in its favour here: walls and side-street gates make protected calm rather than exclusion. Three modest entrances knit it into the surrounding streets."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Medium",      "Lunches, dog walks, children, occasional events"],
        ["Design for engagement",    "Medium-High", "Benches, lawn and paths shaped around the monuments"],
        ["Lingering opportunities",  "High",        "Comfortable, shaded, safe to stay in"],
        ["Multi-faith opportunities","Low-Medium",  "Consecrated ground used by an entirely mixed neighbourhood"],
        ["Facilitation",             "Medium-High", "The Friends host events, walks and planting days"]
      ],
      overall: "Emerging",
      notes: "Everyday co-presence lifted beyond the passive by a Friends group that programmes lightly and consistently — the cheapest form of animation in this database."
    },
    scores: { publicness: .84, interaction: .6 }
  },

  /* ------------------------------------------------------ 6 */
  "tower-hamlets-cemetery-park": {
    lastChecked: "Jul 2026",
    siteTags: ["Tower Hamlets", "Local Nature Reserve", "Public park", "Cemetery", "Semi-secular"],
    interventionTags: ["Multiple", "Public", "Friends & volunteers", "Council-managed", "Evolving", "On-site", "Off-site"],
    annoSpace: "image",
    annotations: [
      { label: "The main path", x: 38, y: 50, w: 18, h: 32, kind: "green" },
      { label: "Bench and bin", x: 61, y: 58, w: 33, h: 22, kind: "buff" },
      { label: "Meadow left unmown", x: 2, y: 50, w: 31, h: 27, kind: "green" }
    ],
    overview: "A 'Magnificent Seven' Victorian cemetery closed to burials in 1966 and allowed to re-grow as woodland. Now a Local Nature Reserve and East London's outdoor classroom, co-managed by a substantial charity of Friends.",
    sacrednessRating: "Low-Medium",
    context: "Twenty-seven acres of woodland in a dense, park-poor borough, entered from several surrounding residential streets.",
    week: [
      { label: "Park", cells: [ { start: 0, span: 7, text: "Open daily, free, multiple gates", accent: true } ] },
      { label: "Learning", cells: [ { start: 0, span: 5, text: "School science at the Soanes Centre (term time)" } ] },
      { label: "Volunteering", cells: [ { start: 2, span: 1, text: "Conservation" }, { start: 5, span: 2, text: "Weekend conservation days" } ] },
      { label: "Events", cells: [ { start: 4, span: 3, text: "Bat walks, history tours, seasonal festivals" } ] }
    ],
    process: {
      scales: ["Site", "Neighbourhood", "5 years"],
      scaleNote: "Large scale, on-site and off-site — fifty years of managed change.",
      typologies: ["Cemetery", "Woodland", "Learning building", "Trails"],
      delivery: ["Friends & volunteers", "Council-managed"],
      deliveryNote: "Friends of Tower Hamlets Cemetery Park (est. 1990) with the borough.",
      funding: ["Council & public funds", "Charitable giving", "Volunteer effort"],
      fundingNote: "Mixed public and charitable income; extensive volunteer labour.",
      planning: ["Local Nature Reserve designation"],
      planningNote: "Closure to burials and transfer to public ownership, 1966.",
      notes: "Rather than being cleared or manicured, the cemetery was allowed — and later deliberately managed — to become woodland. Time itself was the design tool: fifty years of managed re-wilding produced a landscape no capital project could buy."
    },
    publicness: {
      rows: [
        ["Ownership",         "High",        "Publicly owned since 1966"],
        ["Management",        "High",        "Charity–council partnership with daily presence"],
        ["Physical access",   "Medium-High", "Level main paths; some rough woodland routes"],
        ["Perceptual access", "High",        "Multiple gates knitted into surrounding streets"],
        ["Social inclusivity","High",        "Free, open round the clock, used by the whole borough"],
        ["Animation",         "High",        "Schools, volunteering, walks and festivals year-round"]
      ],
      overall: "High Publicness",
      notes: "True civic infrastructure for a dense, park-poor borough: no gates, no fees, and enough acreage that quiet solitary use and busy programmed use rarely conflict."
    },
    interaction: {
      rows: [
        ["Activity mix",             "High",        "Learning, conservation, walking, remembrance, events"],
        ["Design for engagement",    "Medium-High", "Clearings, benches and the Soanes Centre as a base"],
        ["Lingering opportunities",  "High",        "27 acres with room to stay all day"],
        ["Multi-faith opportunities","Medium-High", "Burial ground of many faiths; used by an exceptionally mixed borough"],
        ["Facilitation",             "High",        "A large volunteer body and paid education staff"]
      ],
      overall: "Active",
      notes: "Strong programmed interaction sits on top of quiet solitary use. Remembrance, ecology and everyday recreation coexist because the site is large enough to hold all three."
    },
    scores: { publicness: .88, interaction: .74 }
  },

  /* ------------------------------------------------------ 7 */
  "lambeth-palace-library": {
    lastChecked: "Jul 2026",
    siteTags: ["Lambeth", "Grade I setting", "Institutional", "New building on faith land", "Semi-secular"],
    /* The £23.5m building was commissioned and funded by the Church Commissioners,
       so the funding tag is institutional capital rather than charitable giving. */
    interventionTags: ["Single", "Semi-public", "Institution-led", "Permanent", "On-site", "Institutional capital"],
    annoSpace: "image",
    annotations: [
      { label: "Bronze-finned facade", x: 41, y: 10, w: 51, h: 66, kind: "" },
      { label: "Lambeth Palace Road", x: 1, y: 54, w: 23, h: 31, kind: "" },
      { label: "A hard street edge", x: 24, y: 62, w: 36, h: 20, kind: "red" }
    ],
    overview: "The Church of England's archive rehoused in a new brick 'occupied wall' at the edge of the Archbishop's garden — the first new building on the Grade I site in 185 years, and a study in carefully rationed publicness on sacred land.",
    sacrednessRating: "Medium-High",
    context: "A hard, traffic-heavy edge between the Thames, Archbishop's Park and one of London's largest private gardens.",
    week: [
      { label: "Reading room", cells: [ { start: 0, span: 5, text: "Open to registered researchers" } ] },
      { label: "Foyer", cells: [ { start: 0, span: 5, text: "Free exhibitions — no appointment needed", accent: true } ] },
      { label: "Tours", cells: [ { start: 2, span: 2, text: "Guided building tours, select days" } ] },
      { label: "Garden", cells: [ { start: 5, span: 1, text: "Occasional open days", quiet: true } ] }
    ],
    process: {
      scales: ["Building", "Site", "5 years"],
      scaleNote: "Large scale, on-site: a wholly new 5,400 m² building.",
      typologies: ["Archive", "Reading room", "Foyer & exhibition", "Terrace", "Garden edge"],
      delivery: ["Institution-led"],
      deliveryNote: "Church Commissioners; Wright & Wright Architects, competition-winning 2015.",
      funding: ["Charitable giving", "Institutional capital"],
      fundingNote: "£23.5m project completed 2020, opened 2021.",
      planning: ["Full planning permission", "Listed building consent"],
      planningNote: "Development within the curtilage of a Grade I listed palace.",
      notes: "The wall does double duty: it protects the Archbishop's ten-acre garden from traffic noise and pollution, channels rainwater to a new biodiverse pond, and gives passers-by framed glimpses of the garden through the entrance."
    },
    publicness: {
      rows: [
        ["Ownership",         "Low",         "Church Commissioners — institutional freehold"],
        ["Management",        "Low-Medium",  "Run as an archive with a controlled visitor offer"],
        ["Physical access",   "High",        "Fully accessible new building"],
        ["Perceptual access", "Medium",      "A generous entrance, but the building still reads as institutional"],
        ["Social inclusivity","Medium",      "Free foyer and exhibitions; reading room requires registration"],
        ["Animation",         "Low-Medium",  "Weekday only, with no café or everyday reason to enter"]
      ],
      overall: "Medium Publicness",
      notes: "Programmed publicness, stated plainly: free foyer and exhibitions, a registered reading room, occasional open days. Critics noted the absence of a café or everyday garden access — which is exactly what makes it useful as a study in how institutions calibrate openness."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Low",        "Research, exhibitions and occasional events"],
        ["Design for engagement",    "Low-Medium", "The terrace gathers people, but only at events"],
        ["Lingering opportunities",  "Low",        "Nowhere to sit without a purpose"],
        ["Multi-faith opportunities","Low-Medium", "A shared scholarly resource open to researchers of any faith"],
        ["Facilitation",             "Medium",     "Staffed and hosted, but for a narrow public"]
      ],
      overall: "Passive",
      notes: "Low by design; the library trades in quiet. Social life concentrates on events and the ninth-floor terrace, leaving the street edge as the site's real public gesture."
    },
    scores: { publicness: .5, interaction: .3 }
  },

  /* ------------------------------------------------------ 8 */
  "st-stephen-walbrook": {
    lastChecked: "Jul 2026",
    siteTags: ["City of London", "Grade I", "Worship & culture", "Church", "Active worship"],
    interventionTags: ["Single", "Semi-public", "Congregation-led", "Permanent", "On-site", "Charitable giving"],
    annoSpace: "image",
    annotations: [
      { label: "The tower", x: 32, y: 3, w: 15, h: 34, kind: "red" },
      { label: "Coffee shop on the frontage", x: 35, y: 44, w: 27, h: 29, kind: "buff" },
      { label: "The church behind", x: 62, y: 36, w: 26, h: 32, kind: "" }
    ],
    overview: "Wren's domed masterpiece of 1672–79, reordered in 1987 around a round Henry Moore altar with seating gathered beneath the dome. Birthplace of the Samaritans, and a working church that keeps reinventing how a sacred room serves the city.",
    sacrednessRating: "High",
    context: "A compact City parish room among office blocks, minutes from Mansion House, with a non-residential congregation of workers.",
    week: [
      { label: "Open door", cells: [ { start: 0, span: 5, text: "Open to visitors ~10:00–16:00", accent: true } ] },
      { label: "Concerts", cells: [ { start: 1, span: 1, text: "Free lunchtime" }, { start: 4, span: 1, text: "Free lunchtime" } ] },
      { label: "Worship", cells: [ { start: 3, span: 1, text: "Sung Eucharist" } ] },
      { label: "Weekend", cells: [ { start: 5, span: 2, text: "Closed — no residential parish", quiet: true } ] }
    ],
    process: {
      scales: ["Room"],
      scaleNote: "Small scale, on-site: a furniture-scale reordering, not an extension.",
      typologies: ["Nave", "Dome", "Vestry"],
      delivery: ["Congregation-led"],
      deliveryNote: "Parish, with patron Peter Palumbo commissioning the altar.",
      funding: ["Charitable giving", "Patronage"],
      fundingNote: "Privately commissioned artwork and parish funds.",
      planning: ["Faculty", "Listed building consent"],
      planningNote: "Moore altar installed in 1987 after an ecclesiastical court case.",
      notes: "In 1953 the rector, Chad Varah, answered the first telephone helpline for the suicidal from the vestry here, founding the Samaritans — arguably the most consequential piece of social infrastructure ever launched from a London church."
    },
    publicness: {
      rows: [
        ["Ownership",         "Low-Medium",  "Church of England freehold, active parish"],
        ["Management",        "Medium",      "Congregation-run with an open-door policy"],
        ["Physical access",   "Medium",      "Steps at the historic entrance; level access via the side"],
        ["Perceptual access", "Medium-High", "The Walbrook door is genuinely unlatched on weekdays"],
        ["Social inclusivity","High",        "Free entry and free concerts, no expectation of belief"],
        ["Animation",         "Medium-High", "Weekday visiting plus a regular free concert programme"]
      ],
      overall: "Medium Publicness",
      notes: "Open weekdays to anyone; the weekend closure reflects a non-residential parish rather than a closed attitude. Publicness here is a matter of liturgy and furniture as much as of extensions and cafés."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Medium",      "Worship, quiet visiting, concerts, heritage"],
        ["Design for engagement",    "High",        "Seating in the round is a spatial argument for gathering as equals"],
        ["Lingering opportunities",  "Medium",      "Comfortable to sit in, but nothing to buy or do"],
        ["Multi-faith opportunities","Low-Medium",  "Open to all, though the register stays Anglican"],
        ["Facilitation",             "Medium",      "Volunteer welcomers and a concert host"]
      ],
      overall: "Emerging",
      notes: "Concerts and services gather people in the round; between events, use is contemplative and solitary. The reordering shows how small a move can be and still change how a room holds people."
    },
    scores: { publicness: .58, interaction: .55 }
  },

  /* ------------------------------------------------------ 9 */
  "st-patricks-wapping": {
    lastChecked: "Jul 2026",
    siteTags: ["Tower Hamlets", "Grade II", "Mixed-use precinct", "Church precinct", "Active worship"],
    interventionTags: ["Multiple", "By arrangement", "Congregation-led", "Evolving", "On-site", "Volunteer effort"],
    annoSpace: "image",
    annotations: [
      { label: "The nave", x: 2, y: 18, w: 41, h: 58, kind: "red" },
      { label: "Portico and main door", x: 61, y: 30, w: 33, h: 47, kind: "buff" },
      { label: "Steps — no level entry", x: 35, y: 64, w: 31, h: 20, kind: "" }
    ],
    overview: "A Grade II 'Tuscan barn' parish church growing public life organically — artists' studios in the closed parish school, a volunteer kitchen garden on waste ground — with a precinct masterplan now underway.",
    sacrednessRating: "High",
    context: "A quiet Wapping back street between the river and the old dock walls, in a neighbourhood short of shared space.",
    week: [
      { label: "Mass", cells: [ { start: 0, span: 5, text: "Weekday mass" }, { start: 6, span: 1, text: "Sunday mass", accent: true } ] },
      { label: "Studios", cells: [ { start: 0, span: 6, text: "Working studios — visits by arrangement", quiet: true } ] },
      { label: "Garden", cells: [ { start: 5, span: 2, text: "Volunteer growing days (seasonal)" } ] },
      { label: "Restoration", cells: [ { start: 0, span: 5, text: "Phase 1 works in progress" } ] }
    ],
    process: {
      scales: ["Room", "Building", "Site", "5 years"],
      scaleNote: "Incremental: two near-free interventions, now formalised into a masterplan.",
      typologies: ["Nave", "Former school", "Waste ground", "Precinct"],
      delivery: ["Congregation-led"],
      deliveryNote: "Parish priest and volunteers; Dow Jones Architects on the masterplan.",
      funding: ["Volunteer effort", "Charitable giving", "Fundraising"],
      fundingNote: "Harvest sales have raised thousands for CAFOD.",
      planning: ["Listed building consent", "Change of use"],
      planningNote: "Phase 1 restoration of the church interior and its artworks.",
      notes: "When the parish primary school closed in 2002 the priest invited artists into the tall, north-lit building. In 2005 volunteers with no gardening experience turned waste ground behind the church into a productive kitchen garden. Both cost almost nothing."
    },
    publicness: {
      rows: [
        ["Ownership",         "Low",         "Roman Catholic Archdiocese of Westminster"],
        ["Management",        "Low-Medium",  "Parish-run, with the studios as a self-organising community"],
        ["Physical access",   "Medium",      "Steps to the church; garden and studios uneven"],
        ["Perceptual access", "Low-Medium",  "Nothing on the street says the precinct is enterable"],
        ["Social inclusivity","Medium",      "Warm to those who know; opaque to those who do not"],
        ["Animation",         "Medium",      "Mass, studio life and seasonal gardening"]
      ],
      overall: "Medium Publicness",
      notes: "Publicness here is relational — it runs through people rather than through an always-open door. That is a strength for depth and a weakness for reach."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Medium-High", "Worship, making, growing, learning"],
        ["Design for engagement",    "Medium",      "The garden gathers; the courtyard between uses is undesigned"],
        ["Lingering opportunities",  "Medium",      "No café or shelter, but generous outdoor ground"],
        ["Multi-faith opportunities","Medium-High", "Studios welcome practitioners of all Christian traditions and none"],
        ["Facilitation",             "High",        "Priest, artists and gardeners all act as hosts"]
      ],
      overall: "Emerging",
      notes: "Strong bonds among artists, gardeners and congregation; the next challenge is widening the circle to passers-by — which is exactly what the masterplan sets out to do."
    },
    scores: { publicness: .46, interaction: .58 }
  },

  /* ------------------------------------------------------ 10 */
  "st-johns-churchyard-wapping": {
    lastChecked: "Jul 2026",
    siteTags: ["Tower Hamlets", "Grade II tower", "Public garden", "Churchyard", "Semi-secular"],
    interventionTags: ["Single", "Public", "Council-managed", "Permanent", "On-site", "Council & public funds"],
    annoSpace: "image",
    annotations: [
      { label: "Housing overlooking", x: 3, y: 2, w: 42, h: 26, kind: "" },
      { label: "Gravestones against the wall", x: 4, y: 34, w: 30, h: 16, kind: "buff" },
      { label: "The path through", x: 17, y: 54, w: 24, h: 28, kind: "green" }
    ],
    overview: "The churchyard of Wapping's bombed parish church — a public park since 1951, framed by the surviving 1756 tower, chest tombs and the old dock wall. Open every day, and almost silent.",
    sacrednessRating: "Low-Medium",
    context: "An extraordinary surviving ensemble on Scandrett Street: tower, tombs, Coade-stone charity school and dock wall, in a neighbourhood long on history and short on shared space.",
    week: [
      { label: "Churchyard", cells: [ { start: 0, span: 7, text: "Open daily — no gate, no programme", accent: true } ] },
      { label: "Programme", cells: [ { start: 0, span: 7, text: "None: this is the gap this entry records", quiet: true } ] }
    ],
    process: {
      scales: ["Site"],
      scaleNote: "One intervention, in 1951 — and nothing since.",
      typologies: ["Churchyard", "Tower", "Tombs"],
      delivery: ["Council-managed"],
      deliveryNote: "London Borough of Tower Hamlets.",
      funding: ["Council & public funds"],
      fundingNote: "Routine maintenance only.",
      planning: ["Listed building consent"],
      planningNote: "The tower and school are separately listed.",
      notes: "St John's was destroyed in the Blitz, leaving the baroque-capped tower — its clock still read across the river — and a shell later converted to flats. The churchyard opposite was made a public park in 1951. The hard work of access was done then; what is missing is animation."
    },
    publicness: {
      rows: [
        ["Ownership",         "High",        "Borough-owned public open space"],
        ["Management",        "Medium",      "Routine grounds maintenance, no active stewardship"],
        ["Physical access",   "High",        "Level, open, step-free from the street"],
        ["Perceptual access", "High",        "No gates or fees at any hour"],
        ["Social inclusivity","High",        "Free and unconditional"],
        ["Animation",         "Low",         "No programming, interpretation or reason to stop"]
      ],
      overall: "High Publicness",
      notes: "L5 open daily — high publicness, minimal invitation. The site's stories (tower, tombs, school, dock wall) are told nowhere on site."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Low",  "Passing through, occasional bench-sitting"],
        ["Design for engagement",    "Low",  "One bench, no gathering points, no shelter"],
        ["Lingering opportunities",  "Low",  "Little reason and little comfort to stay"],
        ["Multi-faith opportunities","Low",  "None currently — a mixed neighbourhood with nothing offered"],
        ["Facilitation",             "Low",  "No friends group, no staff, no events"]
      ],
      overall: "Dormant",
      notes: "The classic 'open but passive' site: fully public, historically rich and socially quiet. In a neighbourhood short of shared space, that is an opportunity rather than a failing."
    },
    scores: { publicness: .86, interaction: .14 }
  },

  /* ------------------------------------------------------ 11 */
  "paddington-old-cemetery": {
    lastChecked: "Jul 2026",
    siteTags: ["Brent", "Grade II chapels", "Cemetery & green space", "Cemetery", "Semi-secular"],
    interventionTags: ["Multiple", "Public", "Council-managed", "Friends & volunteers", "Evolving", "On-site", "Vacant buildings"],
    annoSpace: "image",
    annotations: [
      { label: "Memorials", x: 4, y: 38, w: 24, h: 48, kind: "" },
      { label: "The main avenue", x: 72, y: 53, w: 25, h: 32, kind: "green" },
      { label: "Mown grass between graves", x: 32, y: 60, w: 30, h: 22, kind: "green" }
    ],
    overview: "One of the first cemeteries built after the 1852 Burial Act, sold by Westminster to Brent for £5 in 1986. A well-loved green space whose twin Gothic chapels stand empty at its heart — with a repair-and-reuse strategy now gathering pace.",
    sacrednessRating: "Medium",
    context: "A Grade II registered landscape of mature trees and wildflower areas off Willesden Lane, still an active cemetery, wrapped around two vacant listed buildings.",
    week: [
      { label: "Grounds", cells: [ { start: 0, span: 7, text: "Open daily as cemetery and green space", accent: true } ] },
      { label: "Burials", cells: [ { start: 0, span: 5, text: "Active cemetery and columbarium" } ] },
      { label: "Friends", cells: [ { start: 5, span: 2, text: "Volunteering, apiary and seasonal events" } ] },
      { label: "Chapels", cells: [ { start: 0, span: 7, text: "Closed — repair and reuse strategy in development", quiet: true } ] }
    ],
    process: {
      scales: ["Building", "Site", "5 years"],
      scaleNote: "Medium scale, on-site: landscape already works, buildings do not.",
      typologies: ["Cemetery", "Twin chapels", "Lodge & gates"],
      delivery: ["Council-managed", "Friends & volunteers", "Charity partner needed"],
      deliveryNote: "Brent with the London Historic Buildings Trust since 2023.",
      funding: ["Council & public funds", "Grant", "Charitable giving"],
      fundingNote: "Initial funding secured towards returning the chapels to community use.",
      planning: ["Listed building consent", "Change of use"],
      planningNote: "Both chapels are Grade II listed; the landscape is Grade II registered.",
      notes: "Laid out in 1855 by Thomas Little for the Paddington Burial Board, the cemetery arranges horseshoe paths around a centrepiece of twin Gothic chapels in Kentish ragstone — one Anglican, one Nonconformist. The sale for £5 in 1986 sparked the community action that became the Friends group."
    },
    publicness: {
      rows: [
        ["Ownership",         "High",        "Brent-owned public cemetery"],
        ["Management",        "Medium-High", "Council with an organised Friends group"],
        ["Physical access",   "High",        "Level paths throughout the grounds"],
        ["Perceptual access", "High",        "Grounds openly enterable; chapels visibly shut"],
        ["Social inclusivity","High",        "Free and open to all in a diverse neighbourhood"],
        ["Animation",         "Medium",      "Everyday walkers and Friends' events; the centre contributes nothing"]
      ],
      overall: "High Publicness",
      notes: "A stark publicness gradient across one site: grounds at L5, chapels at L1. The gap is architectural, not attitudinal."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Medium",      "Walking, remembrance, volunteering, beekeeping"],
        ["Design for engagement",    "Low-Medium",  "No indoor space, shelter or café anywhere on site"],
        ["Lingering opportunities",  "Medium",      "Benches and trees, but nothing weatherproof"],
        ["Multi-faith opportunities","Medium-High", "Anglican and Nonconformist chapels; burials of many faiths"],
        ["Facilitation",             "Medium",      "Friends host events; no daily staffed presence"]
      ],
      overall: "Emerging",
      notes: "Everyday walkers, mourners and Friends' events coexist happily. The vacant chapels contribute nothing yet to social life — the single largest untapped interior in this database."
    },
    scores: { publicness: .82, interaction: .5 }
  }
};

/* ----------------------------------------------------------
   Compatibility matrix for the Toolkit page: which intervention
   types have worked in which conditions, and where in this
   database you can see them.
   ---------------------------------------------------------- */
const COMPATIBILITY = [
  { type: "Café / everyday services", fits: "Active worship, semi-secular, mixed-use nave or aisle", scale: "Medium", watch: "Needs servicing, storage and a viable trading plan", seen: ["sheriff-centre", "grand-junction", "garden-museum"] },
  { type: "Reordering (furniture scale)", fits: "Active worship where the room is the asset", scale: "Small", watch: "Faculty process and congregational consent", seen: ["st-stephen-walbrook"] },
  { type: "Cultural venue / concerts", fits: "Acoustically strong naves, semi-secular or active", scale: "Small–Medium", watch: "Noise, licensing and neighbour relations", seen: ["grand-junction", "st-stephen-walbrook"] },
  { type: "Artists' studios / workspace", fits: "Redundant ancillary buildings — schools, halls", scale: "Small", watch: "Low rent is the point; avoid over-formalising", seen: ["st-patricks-wapping"] },
  { type: "Museum / heritage attraction", fits: "Deconsecrated churches with a strong single idea", scale: "Large", watch: "Ticketing can close a threshold that used to be open", seen: ["garden-museum"] },
  { type: "Garden inside a ruin or churchyard", fits: "Ruins, closed burial grounds, consecrated ground", scale: "Small", watch: "Visitor pressure and wear on a small site", seen: ["st-dunstan-in-the-east", "st-georges-gardens"] },
  { type: "Nature reserve / outdoor classroom", fits: "Large cemeteries and burial landscapes", scale: "Large", watch: "Remembrance and recreation must be sized apart", seen: ["tower-hamlets-cemetery-park"] },
  { type: "Meanwhile use / seasonal programme", fits: "Open but passive sites with no stewardship", scale: "Small", watch: "Needs a group willing to hold it — start with a Friends group", seen: ["st-johns-churchyard-wapping", "paddington-old-cemetery"] },
  { type: "New building on faith land", fits: "Institutions with land and a hard street edge", scale: "Large", watch: "Publicness must be designed at the threshold, not assumed", seen: ["lambeth-palace-library"] },
  { type: "Soft play / children's use", fits: "Wide aisles and high volumes in active churches", scale: "Medium", watch: "Acoustics and the protection of quiet space", seen: ["sheriff-centre"] }
];
