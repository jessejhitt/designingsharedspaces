/* ============================================================
   DESIGNING SHARED SPACES TOGETHER — detail-page dataset
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
    lastChecked: "Sep 2026",
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
    captions: { 3: "The programme noticeboard on the green" },
    context: "Joined to a school beside the Grand Union Canal, with a green path and benches around it, in a mainly residential area of one of London's most deprived wards.",
    week: [
      { label: "Worship", cells: [ { start: 0, span: 5, text: "Reflective services (undercroft chapel)" }, { start: 6, span: 1, text: "Mass 9:30" } ] },
      { label: "Cafe", cells: [ { start: 0, span: 4, text: "Open 08:00–17:00" }, { start: 4, span: 2, text: "Open 08:00–22:00" }, { start: 6, span: 1, text: "10–17" } ] },
      { label: "Event Hire", cells: [ { start: 0, span: 7, text: "Evening hire — nave till 22:30, undercroft till 23:00" } ] }
    ],
    process: {
      scales: ["Room", "Building", "Site", "Neighbourhood", "5 years"],
      scaleNote: "Large scale, on-site and off-site changes",
      typologies: ["Nave", "Hall", "Courtyard", "Grounds"],
      typologyNote: "The undercroft chapel also holds small reflective services.",
      delivery: ["Congregation-led", "Charity-led"],
      deliveryNote: "Paddington Development Trust with the vicar and parochial church council.",
      funding: ["Grant", "Fundraising"],
      fundingNote: "£3.6m from the National Lottery Heritage Fund towards a project of about £7m, with support from Power to Change, City Bridge Trust, John Lyon's Charity and others.",
      planning: ["Full planning permission"],
      planningNote: "Approved by Westminster City Council in December 2015, with over 100 statements of support.",
      notes: "Dow Jones Architects were appointed in 2010. The church interior was restored in 2017–18 and the new wing completed in 2019, when Grand Junction opened."
    },
    publicness: {
      rows: [
        ["Ownership",         "Low-Medium",  "Church of England freehold, leased to the Paddington Development Trust"],
        ["Management",        "Medium",      "Charity-run with the parish"],
        ["Physical access",   "High",        "Step-free entry from Rowington Close; accessible toilet in the undercroft"],
        ["Perceptual access", "Medium-High", "Glass doors and the café as an open entrance, but no clear signs for when spaces are hired"],
        ["Social inclusivity","High",        "Free and pay-what-you-can events, inclusive club nights and community workshops"],
        ["Animation",         "High",        "Near-daily activity, weekly worship and a well-used green around the church"]
      ],
      overall: "High Publicness",
      notes: "The café opens every day, but the church itself is open to drop-in visitors on only a few weekdays, 10am–4pm. Inclusive VIP club nights, run with Learning Disability Network London, welcome adults with learning disabilities, neurodiverse people and everyone else."
    },
    interaction: {
      rows: [
        ["Activity mix",             "High",        "Many different activities, free and paid"],
        ["Design for engagement",    "High",        "Plenty of seating, shared tables and multi-use rooms"],
        ["Lingering opportunities",  "Medium",      "Café and seating, though ticketed events and hire can deter"],
        ["Multi-faith opportunities","Medium-High", "Varied activities for a very mixed neighbourhood — 49% of residents were born outside the UK"],
        ["Facilitation",             "High",        "A large team programmes and hosts events, leaving room for chance encounters"]
      ],
      overall: "Active",
      notes: "The café, classes and community events give strangers repeated, relaxed reasons to share a room. Bold, consistent signage and the benches on the green carry this outside."
    },
    scores: { publicness: .83, interaction: .8 },
    /* position on the site-visit graph: familiarity → right, most locals → up (0–1, axes cross at .5) */
    siteVisitGraph: { familiarity: 0.93, locals: 0.88 },
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
    lastChecked: "Sep 2026",
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
    overview: "A Grade II listed Victorian parish church in West Hampstead that took in the local post office in 2014 — and grew a café, soft play, debt advice service and community fridge around it.",
    sacrednessRating: "Medium",
    context: "Beside a busy, hard-to-cross road near the high street, with quieter residential streets around it.",
    week: [
      { label: "Post office", cells: [ { start: 0, span: 5, text: "Open 09:00–17:00", accent: true } ] },
      { label: "Café", cells: [ { start: 0, span: 6, text: "Sanctuary Café & Bar, 09:00–17:00" } ] },
      { label: "Soft play", cells: [ { start: 0, span: 6, text: "Hullabaloo soft play" } ] },
      { label: "Worship", cells: [ { start: 6, span: 1, text: "Services" } ] }
    ],
    process: {
      scales: ["Room", "Building"],
      scaleNote: "Medium scale, wholly on-site: the nave was re-planned rather than extended.",
      typologies: ["Nave", "North aisle", "South aisle", "West end"],
      delivery: ["Congregation-led", "Social enterprise"],
      deliveryNote: "Registered charity; each business runs as a separate company.",
      funding: ["Grant", "Fundraising", "Trading income"],
      fundingNote: "About £600,000 from Post Office and council grants, the Henry Smith Charity, Garfield Weston, parish savings and private donors.",
      planning: ["Faculty"],
      planningNote: "Church of England faculty process; the Church Buildings Council backed the scheme in March 2013.",
      notes: "The post office opened in July 2014 and the centre was officially opened on 1 August 2014. Within three months it was making a profit, through word of mouth alone."
    },
    publicness: {
      rows: [
        ["Ownership",         "Low-Medium",  "Church of England freehold"],
        ["Management",        "Medium-High", "Charity with trading companies, run as a public service"],
        ["Physical access",   "High",        "Ramp and automatic doors at the main entrance"],
        ["Perceptual access", "High",        "A big sign outside lists the post office, soft play, café and debt advice"],
        ["Social inclusivity","High",        "Free entry, everyday errands, debt advice and a community fridge"],
        ["Animation",         "High",        "Six days a week of everyday footfall"]
      ],
      overall: "High Publicness",
      notes: "The post office brings in people who would never attend a service. Big outer doors open onto glass sliding doors, so you can see in. Sunday closure keeps the rhythm of worship clear."
    },
    interaction: {
      rows: [
        ["Activity mix",             "High",   "Errands, coffee, play and advice under one roof"],
        ["Design for engagement",    "High",   "Tables, chairs and sofas fill the west end of the nave"],
        ["Lingering opportunities",  "High",   "Plenty of seating, with no pressure to buy"],
        ["Multi-faith opportunities","Medium", "Draws the whole neighbourhood; has also hosted Open Table, an LGBTQIA+ worship community"],
        ["Facilitation",             "High",   "Staff and volunteers act as hosts"]
      ],
      overall: "Active",
      notes: "Children play while others queue for the post office: the distinctions are clear and the pairing works. Interaction here is a by-product of usefulness, not programming."
    },
    scores: { publicness: .88, interaction: .9 },
    /* position on the site-visit graph: familiarity → right, most locals → up (0–1, axes cross at .5) */
    siteVisitGraph: { familiarity: 0.76, locals: 0.94 },
  },

  /* ------------------------------------------------------ 3 */
  "garden-museum": {
    lastChecked: "Sep 2026",
    siteTags: ["Lambeth", "Grade II*", "Cultural", "Deconsecrated church", "Secular"],
    interventionTags: ["Multiple", "Semi-public", "Charity-led", "Institution-led", "Permanent", "On-site", "Heritage Lottery Fund"],
    annoSpace: "image",
    annotations: [
      { label: "Medieval arch", x: 22, y: 6, w: 56, h: 24, kind: "buff" },
      { label: "Automatic glass doors", x: 26, y: 38, w: 48, h: 36, kind: "red" },
      { label: "Kentish ragstone wall", x: 2, y: 30, w: 16, h: 30, kind: "" }
    ],
    overview: "A medieval and Victorian church beside Lambeth Palace, deconsecrated in 1972 and saved from demolition to become the world's first museum of garden history in 1977 — now with new galleries, a courtyard garden and a café.",
    sacrednessRating: "Low",
    context: "Between Lambeth Palace and Archbishop's Park on a busy riverside road; the homes behind are reached through the park.",
    week: [
      { label: "Galleries", cells: [ { start: 0, span: 7, text: "Open daily 10:00–17:00 (ticketed)" } ] },
      { label: "Atrium", cells: [ { start: 0, span: 7, text: "Ground floor free to enter", accent: true } ] },
      { label: "Learning", cells: [ { start: 0, span: 7, text: "Learning for schools, families and communities" } ] }
    ],
    process: {
      scales: ["Building", "Site", "5 years"],
      scaleNote: "Large scale, on-site, delivered in two phases forty years apart.",
      typologies: ["Nave", "Chancel", "Churchyard", "New pavilions"],
      delivery: ["Charity-led", "Institution-led"],
      deliveryNote: "Independent charity, founded as the Tradescant Trust by Rosemary Nicholson.",
      funding: ["Grant", "Fundraising", "Trading income"],
      fundingNote: "£3.51m Heritage Lottery Fund grant (2014) for the second phase.",
      planning: ["Full planning permission", "Listed building consent"],
      planningNote: "London Borough of Lambeth.",
      notes: "Deconsecrated in 1972 and threatened with demolition, the church became a museum in 1977. A second phase by Dow Jones Architects added galleries, learning spaces and a courtyard garden, reopening in 2017."
    },
    publicness: {
      rows: [
        ["Ownership",         "Medium",      "Charitable trust"],
        ["Management",        "Medium-High", "Independent museum with a public remit"],
        ["Physical access",   "High",        "Level entry through the glass doors"],
        ["Perceptual access", "Medium-High", "Glass doors in the medieval arch let you see in; the main signs face the river, not the residential side"],
        ["Social inclusivity","Medium",      "Free ground-floor atrium; galleries ticketed; archive by appointment"],
        ["Animation",         "High",        "Open daily, with talks and events"]
      ],
      overall: "High Publicness",
      notes: "The paywall sits inside the building, not at the door: the atrium, with a large shared table and arts and crafts, is free to anyone. The garden is harder to find, reached through the shop."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Medium-High", "Exhibitions, learning, eating, gardening, hire"],
        ["Design for engagement",    "Medium-High", "The atrium's shared table and the courtyard garden gather people"],
        ["Lingering opportunities",  "High",        "Atrium, café and garden seating"],
        ["Multi-faith opportunities","Low",         "Sacred history is interpreted, not practised — though the space still feels reflective"],
        ["Facilitation",             "Medium",      "Reception staff guide visitors; learning programmes and talks"]
      ],
      overall: "Emerging",
      notes: "Mostly visitor-to-place rather than stranger-to-stranger, but the free atrium, café and events create steady social overlap. A small play space and craft table welcome families."
    },
    scores: { publicness: .78, interaction: .6 },
    /* position on the site-visit graph: familiarity → right, most locals → up (0–1, axes cross at .5) */
    siteVisitGraph: { familiarity: 0.76, locals: 0.26 },
  },

  /* ------------------------------------------------------ 4 */
  "st-dunstan-in-the-east": {
    lastChecked: "Sep 2026",
    siteTags: ["City of London", "Grade I", "Public garden", "Churchyard & ruin", "Semi-secular"],
    interventionTags: ["Single", "Public", "Council-managed", "Permanent", "On-site", "Council & public funds"],
    annotations: [
      { label: "Wren tower",      x: 22.57, y: 42.86, w: 12.00, h: 11.26, kind: "red" },
      { label: "Nave as garden",  x: 38.00, y: 53.36, w: 25.71, h: 8.26, kind: "green" },
      { label: "Window tracery",  x: 65.43, y: 50.36, w: 13.71, h: 6.76, kind: "buff" },
      { label: "Stepped approach",x: 32.86, y: 65.37, w: 18.86, h: 3.38,  kind: "" }
    ],
    overview: "A Wren-steepled church gutted in the Blitz and never rebuilt. Instead of clearing the ruin, the City of London opened a public garden inside it in 1971 — now one of the City's best-loved quiet places.",
    sacrednessRating: "Low-Medium",
    context: "On a slope between Lower Thames Street and the offices of the eastern City, entered from St Dunstan's Hill and Idol Lane.",
    week: [
      { label: "Garden", cells: [ { start: 0, span: 7, text: "Open daily 08:00–19:00 (or dusk) — free", accent: true } ] },
      { label: "Lunch use", cells: [ { start: 0, span: 5, text: "Busy with City workers at lunchtime" } ] }
    ],
    process: {
      scales: ["Site"],
      scaleNote: "Small in cost, large in effect: planting, paths and seats inside an existing ruin.",
      typologies: ["Nave", "Tower", "Churchyard"],
      delivery: ["Council-managed"],
      deliveryNote: "City of London Corporation, as one of the City's public gardens.",
      funding: ["Council & public funds"],
      fundingNote: "Maintained by the City of London as a public garden.",
      planning: [],
      planningNote: "Grade I listed ruin, kept and stabilised rather than rebuilt.",
      notes: "Bombed in 1941 and never rebuilt, the ruin became a garden: the City decided in 1967 and opened it in 1971, with a lawn, trees and a low fountain in the nave."
    },
    publicness: {
      rows: [
        ["Ownership",         "High",        "City of London Corporation — public ownership"],
        ["Management",        "High",        "Managed as a public garden, also hired for events"],
        ["Physical access",   "Medium",      "Sloping site with steps"],
        ["Perceptual access", "High",        "Open gateways, no ticket, no permission needed"],
        ["Social inclusivity","High",        "Free and open daily 8am–7pm (or dusk)"],
        ["Animation",         "Medium",      "Constant use but no regular programme or interpretation"]
      ],
      overall: "High Publicness",
      notes: "The archetype of civic publicness on former church land: free, open every day, and used by people with no connection to the church. The garden can also be hired for events."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Low",         "Sitting, eating, photographing — nothing programmed"],
        ["Design for engagement",    "Medium",      "Benches ring the fountain in the nave"],
        ["Lingering opportunities",  "High",        "People stay for a whole lunch hour without spending"],
        ["Multi-faith opportunities","Low",         "Occasional services continue; otherwise open to all"],
        ["Facilitation",             "Low",         "No regular hosting or programme on site"]
      ],
      overall: "Passive",
      notes: "People come to be quiet alongside strangers rather than to meet them — at lunchtime the benches around the fountain fill with workers."
    },
    scores: { publicness: .9, interaction: .34 }
  },

  /* ------------------------------------------------------ 5 */
  "st-georges-gardens": {
    lastChecked: "Sep 2026",
    siteTags: ["Camden", "Grade II* landscape", "Public garden", "Burial ground", "Semi-secular"],
    interventionTags: ["Multiple", "Public", "Friends & volunteers", "Council-managed", "Permanent", "On-site", "Heritage Lottery Fund"],
    annotations: [
      { label: "Mortuary chapel", x: 41.43, y: 49.61, w: 17.14, h: 8.26, kind: "red" },
      { label: "Chest tombs",     x: 20.86, y: 60.12, w: 18.86, h: 4.50, kind: "" },
      { label: "Walled edge",     x: 60.29, y: 55.62, w: 22.29, h: 3.00,  kind: "buff" },
      { label: "Lawn & benches",  x: 32.86, y: 63.12, w: 24.00, h: 5.25, kind: "green" }
    ],
    overview: "A burial ground opened in 1714 for two Bloomsbury parishes, made a public garden in 1884, then rescued from decline by a Friends group and a Heritage Lottery Fund restoration completed in 2001. The ground remains consecrated.",
    sacrednessRating: "Low-Medium",
    context: "A walled garden entered from Handel Street, Heathcote Street and Sidmouth Street, in a district where many green squares are locked and private.",
    week: [
      { label: "Gardens", cells: [ { start: 0, span: 7, text: "Open daily in daylight hours", accent: true } ] },
      { label: "Spring party", cells: [ { start: 5, span: 1, text: "Yearly" } ] }
    ],
    process: {
      scales: ["Site", "Neighbourhood", "5 years"],
      scaleNote: "Medium scale, on-site — a restoration rather than a conversion.",
      typologies: ["Burial ground", "Mortuary chapel", "Walls & gates"],
      delivery: ["Friends & volunteers", "Council-managed"],
      deliveryNote: "Friends of St George's Gardens with the London Borough of Camden.",
      funding: ["Grant", "Council & public funds", "Volunteer effort"],
      fundingNote: "Heritage Lottery Fund Urban Parks Programme (1997).",
      planning: [],
      planningNote: "Grade II* on the national register of historic parks and gardens.",
      notes: "By the 1990s the gardens were overgrown and neglected. Local residents formed the Friends, Camden won lottery funding in 1997, and the restored gardens reopened in spring 2001."
    },
    publicness: {
      rows: [
        ["Ownership",         "High",        "Camden-owned public open space"],
        ["Management",        "High",        "Council maintenance with an active Friends group"],
        ["Physical access",   "High",        "Three gates; main entrance on Handel Street"],
        ["Perceptual access", "Medium-High", "Walled and quiet — rewards local knowledge but excludes no one"],
        ["Social inclusivity","High",        "Free, in an area where many squares are private"],
        ["Animation",         "Medium-High", "Everyday use, watched over by the Friends"]
      ],
      overall: "High Publicness",
      notes: "Walls and side-street gates create calm rather than exclusion, and three entrances knit the garden into the surrounding streets."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Medium",      "Lunches, dog walks, children, occasional events"],
        ["Design for engagement",    "Medium-High", "Benches, lawn and paths laid out around the monuments"],
        ["Lingering opportunities",  "High",        "Comfortable, shaded and safe to stay in"],
        ["Multi-faith opportunities","Low-Medium",  "Consecrated ground used by a mixed neighbourhood"],
        ["Facilitation",             "Medium-High", "The Friends keep watch and run a yearly community party"]
      ],
      overall: "Emerging",
      notes: "Everyday co-presence — lunches, dog walks, children — supported by a Friends group that keeps watch over the garden: the cheapest form of stewardship in this database."
    },
    scores: { publicness: .84, interaction: .6 }
  },

  /* ------------------------------------------------------ 6 */
  "tower-hamlets-cemetery-park": {
    lastChecked: "Sep 2026",
    siteTags: ["Tower Hamlets", "Local Nature Reserve", "Public park", "Cemetery", "Semi-secular"],
    interventionTags: ["Multiple", "Public", "Friends & volunteers", "Council-managed", "Evolving", "On-site", "Off-site"],
    annoSpace: "image",
    annotations: [
      { label: "The main path", x: 38, y: 50, w: 18, h: 32, kind: "green" },
      { label: "Bench and bin", x: 61, y: 58, w: 33, h: 22, kind: "buff" },
      { label: "Meadow left unmown", x: 2, y: 50, w: 31, h: 27, kind: "green" }
    ],
    overview: "A 'Magnificent Seven' Victorian cemetery closed to burials in 1966 and left to grow into woodland. Now Tower Hamlets' first Local Nature Reserve, cared for by the Friends of Tower Hamlets Cemetery Park.",
    sacrednessRating: "Low-Medium",
    context: "Thirty-one acres of woodland beside the railway in Mile End, entered from several surrounding streets.",
    week: [
      { label: "Park", cells: [ { start: 0, span: 7, text: "Open daily 08:00 to an hour before dusk — free", accent: true } ] },
      { label: "Learning", cells: [ { start: 0, span: 5, text: "STEM workshops for schools at the Soanes Centre" } ] },
      { label: "Volunteering", cells: [ { start: 0, span: 7, text: "Conservation volunteering, including all-ability sessions" } ] },
      { label: "Events", cells: [ { start: 0, span: 7, text: "Talks, tours and the annual summer fair" } ] }
    ],
    process: {
      scales: ["Site", "Neighbourhood", "5 years"],
      scaleNote: "Large scale, on-site and off-site — decades of managed change.",
      typologies: ["Cemetery", "Woodland", "Learning building", "Trails"],
      delivery: ["Friends & volunteers", "Council-managed"],
      deliveryNote: "Friends of Tower Hamlets Cemetery Park (founded 1990) with the borough.",
      funding: ["Council & public funds", "Charitable giving", "Volunteer effort"],
      fundingNote: "Council and charitable income, National Lottery Heritage Fund support and extensive volunteer labour.",
      planning: ["Local Nature Reserve designation"],
      planningNote: "Closed to burials in 1966; Tower Hamlets' first Local Nature Reserve (2001).",
      notes: "Rather than being cleared or manicured, the cemetery was allowed to become woodland, now managed for both wildlife and heritage."
    },
    publicness: {
      rows: [
        ["Ownership",         "High",        "Publicly owned since 1966"],
        ["Management",        "High",        "Charity–council partnership, with a Friends office on site"],
        ["Physical access",   "Medium-High", "Gravel main paths; rougher woodland routes"],
        ["Perceptual access", "High",        "Most entrances have a Friends sign with a map and opening times"],
        ["Social inclusivity","High",        "Free and open daily to the whole borough"],
        ["Animation",         "High",        "Volunteering, talks, tours and events year-round"]
      ],
      overall: "High Publicness",
      notes: "Open 8am to an hour before dusk, with several entrances linking it to surrounding streets. Quiet solitary visits and programmed activity rarely clash on a site this size."
    },
    interaction: {
      rows: [
        ["Activity mix",             "High",        "Learning, conservation, walking, remembrance, events"],
        ["Design for engagement",    "Medium-High", "Clear paths and sections; benches mostly near the entrances"],
        ["Lingering opportunities",  "High",        "Room to stay all day, though seating thins out inside"],
        ["Multi-faith opportunities","Medium-High", "Burials of many faiths; used by a very mixed borough"],
        ["Facilitation",             "High",        "Friends staff and a large volunteer body"]
      ],
      overall: "Active",
      notes: "Programmed activity sits alongside walking, dog walking and quiet visits. Small signs, lidless bins and a lack of dog facilities are easy fixes."
    },
    scores: { publicness: .88, interaction: .74 },
    /* position on the site-visit graph: familiarity → right, most locals → up (0–1, axes cross at .5) */
    siteVisitGraph: { familiarity: 0.59, locals: 0.64 },
  },

  /* ------------------------------------------------------ 7 */
  "lambeth-palace-library": {
    lastChecked: "Sep 2026",
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
    overview: "The Church of England's library and archive, rehoused in a new building at the edge of the Archbishop's garden — the first new building on the site in 185 years, and a study in carefully rationed publicness.",
    sacrednessRating: "Medium-High",
    context: "A hard, traffic-heavy road edge between the Thames, Archbishop's Park and the Lambeth Palace garden.",
    week: [
      { label: "Reading room", cells: [ { start: 0, span: 5, text: "Registered readers" } ] },
      { label: "Exhibitions", cells: [ { start: 0, span: 5, text: "Free, 09:30–17:00", accent: true }, { start: 5, span: 1, text: "Monthly" } ] },
      { label: "Thursday lates", cells: [ { start: 3, span: 1, text: "Some" } ] }
    ],
    process: {
      scales: ["Building", "Site", "5 years"],
      scaleNote: "Large scale, on-site: a wholly new 5,400 m² building.",
      typologies: ["Archive", "Reading room", "Foyer & exhibition", "Terrace", "Garden edge"],
      delivery: ["Institution-led"],
      deliveryNote: "Church Commissioners; Wright & Wright Architects, selected in December 2015.",
      funding: ["Institutional capital"],
      fundingNote: "£23.5m, paid in full by the Church Commissioners; completed 2020, opened 2021.",
      planning: ["Full planning permission", "Listed building consent"],
      planningNote: "Development within the curtilage of a Grade I listed palace.",
      notes: "The building shields the Palace garden from traffic, and its roofs feed a new pond and wetland by Dan Pearson Studio. Solar panels supply nearly half its electricity."
    },
    publicness: {
      rows: [
        ["Ownership",         "Low",         "Church Commissioners — institutional freehold"],
        ["Management",        "Low-Medium",  "Run as an archive with a controlled visitor offer"],
        ["Physical access",   "High",        "Step-free entrance with automatic doors"],
        ["Perceptual access", "Medium",      "Tight to the pavement; the name only reads from a distance; door sensors didn't open for pedestrians"],
        ["Social inclusivity","Medium",      "Free exhibition; the reading room requires registration"],
        ["Animation",         "Low-Medium",  "No café or everyday reason to go in"]
      ],
      overall: "Medium Publicness",
      notes: "Publicness is real but rationed: a free exhibition, a reading room with 12 seats for registered readers, and events on the terrace. Security and a closed-looking street edge make even the free parts feel hard to reach."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Low",        "Research, exhibitions and occasional events"],
        ["Design for engagement",    "Low-Medium", "The terrace and Bancroft Room host events for up to 70"],
        ["Lingering opportunities",  "Low",        "A readers' lounge for registered users; nowhere for passers-by"],
        ["Multi-faith opportunities","Low-Medium", "A shared scholarly resource open to researchers of any faith"],
        ["Facilitation",             "Medium",     "Staffed and hosted, but for a narrow public"]
      ],
      overall: "Passive",
      notes: "Low by design — the library trades in quiet. Social life gathers at events and on the terrace."
    },
    scores: { publicness: .5, interaction: .3 },
    /* position on the site-visit graph: familiarity → right, most locals → up (0–1, axes cross at .5) */
    siteVisitGraph: { familiarity: 0.13, locals: 0.16 },
  },

  /* ------------------------------------------------------ 8 */
  "st-stephen-walbrook": {
    lastChecked: "Sep 2026",
    siteTags: ["City of London", "Grade I", "Worship & culture", "Church", "Active worship"],
    interventionTags: ["Single", "Semi-public", "Congregation-led", "Permanent", "On-site", "Charitable giving"],
    annoSpace: "image",
    annotations: [
      { label: "The tower", x: 32, y: 3, w: 15, h: 34, kind: "red" },
      { label: "Coffee shop on the frontage", x: 35, y: 44, w: 27, h: 29, kind: "buff" },
      { label: "The church behind", x: 62, y: 36, w: 26, h: 32, kind: "" }
    ],
    overview: "Wren's domed church of 1672–79, reordered in 1987 around a round Henry Moore altar. Birthplace of the Samaritans, and a working church that keeps finding new ways for a sacred room to serve the City.",
    sacrednessRating: "High",
    context: "A compact City church among offices near Mansion House, next to a coffee shop, serving a congregation of workers rather than residents.",
    week: [
      { label: "Open door", cells: [ { start: 0, span: 5, text: "Open to visitors 10:30–15:30", accent: true } ] },
      { label: "Music", cells: [ { start: 1, span: 1, text: "Recital" }, { start: 2, span: 1, text: "Choir" }, { start: 4, span: 1, text: "Organ" } ] },
      { label: "Worship", cells: [ { start: 3, span: 1, text: "Eucharist" } ] },
      { label: "Weekend", cells: [ { start: 5, span: 2, text: "Closed at weekends", quiet: true } ] }
    ],
    process: {
      scales: ["Room"],
      scaleNote: "Small scale, on-site: a furniture-scale reordering, not an extension.",
      typologies: ["Nave", "Dome", "Vestry"],
      delivery: ["Congregation-led"],
      deliveryNote: "Parish, with churchwarden Peter Palumbo commissioning the altar.",
      funding: ["Charitable giving", "Patronage"],
      fundingNote: "Privately commissioned artwork and parish funds.",
      planning: ["Faculty"],
      planningNote: "The Moore altar needed approval from the Court of Ecclesiastical Causes Reserved; installed 1987.",
      notes: "In 1953 the rector, Dr Chad Varah, founded the Samaritans at the church — one of the most far-reaching pieces of social infrastructure launched from a London church."
    },
    publicness: {
      rows: [
        ["Ownership",         "Low-Medium",  "Church of England freehold, active parish"],
        ["Management",        "Medium",      "Parish-run with a weekday open door"],
        ["Physical access",   "Medium",      "Steps up to the historic entrance"],
        ["Perceptual access", "Medium-High", "The noticeboard welcomes all 'to visit, to reflect, to pray'; events are advertised on the pavement"],
        ["Social inclusivity","High",        "Free entry and free concerts, no expectation of belief"],
        ["Animation",         "Medium-High", "Weekday visiting plus a weekly music programme"]
      ],
      overall: "Medium Publicness",
      notes: "Open weekdays to anyone; closed at weekends, reflecting a parish of workers rather than residents. Publicness here is a matter of opening hours and furniture as much as extensions and cafés."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Medium",      "Worship, quiet visiting, music, heritage"],
        ["Design for engagement",    "High",        "Seating in the round is a spatial argument for gathering as equals"],
        ["Lingering opportunities",  "Medium",      "Comfortable to sit in, but nothing to buy or do"],
        ["Multi-faith opportunities","Low-Medium",  "Open to all, though the setting stays Anglican"],
        ["Facilitation",             "Medium",      "A weekly programme of recitals, choir and services"]
      ],
      overall: "Emerging",
      notes: "Music and services gather people in the round; between events, use is quiet and solitary. The reordering shows how small a move can change how a room holds people."
    },
    scores: { publicness: .58, interaction: .55 }
  },

  /* ------------------------------------------------------ 9 */
  "st-patricks-wapping": {
    lastChecked: "Sep 2026",
    siteTags: ["Tower Hamlets", "Grade II", "Mixed-use precinct", "Church precinct", "Active worship"],
    interventionTags: ["Multiple", "By arrangement", "Congregation-led", "Evolving", "On-site", "Volunteer effort"],
    annoSpace: "image",
    annotations: [
      { label: "The nave", x: 2, y: 18, w: 41, h: 58, kind: "red" },
      { label: "Portico and main door", x: 61, y: 30, w: 33, h: 47, kind: "buff" },
      { label: "Steps — no level entry", x: 35, y: 64, w: 31, h: 20, kind: "" }
    ],
    overview: "A Grade II 'Tuscan barn' parish church with artists' studios in its closed school and a volunteer kitchen garden on former waste ground — with repair and extension plans in development.",
    sacrednessRating: "High",
    context: "Across the road from a busy park and playground, near Wapping's shops, in a neighbourhood with many families.",
    week: [
      { label: "Church", cells: [ { start: 0, span: 7, text: "Open daily 07:00–19:00", accent: true } ] },
      { label: "Morning Mass", cells: [ { start: 0, span: 2, text: "10:00" }, { start: 5, span: 1, text: "10:00" }, { start: 6, span: 1, text: "10:00" } ] },
      { label: "Evening Mass", cells: [ { start: 3, span: 2, text: "18:30" }, { start: 5, span: 1, text: "18:30" }, { start: 6, span: 1, text: "18:30" } ] },
      { label: "Garden", cells: [ { start: 6, span: 1, text: "Produce" } ] },
      { label: "Restoration", cells: [ { start: 0, span: 5, text: "Phase 1 plans in development" } ] }
    ],
    process: {
      scales: ["Room", "Building", "Site", "5 years"],
      scaleNote: "Incremental: two near-free interventions, now leading to a Phase 1 plan for repairs, a reordered sanctuary and a lean-to extension with toilets.",
      typologies: ["Nave", "Former school", "Waste ground", "Precinct"],
      delivery: ["Congregation-led"],
      deliveryNote: "Parish, volunteers and artists; Dow Jones Architects on Phase 1.",
      funding: ["Volunteer effort", "Charitable giving", "Fundraising"],
      fundingNote: "Garden produce sold by donation in support of CAFOD.",
      planning: [],
      planningNote: "Phase 1: repairs, a reordered sanctuary and a lean-to extension with toilets.",
      notes: "When the parish school closed in 2002, the priest invited artists into the building. From 2005, volunteers turned derelict ground behind the church into a kitchen garden. Both cost almost nothing."
    },
    publicness: {
      rows: [
        ["Ownership",         "Low",         "Roman Catholic Archdiocese of Westminster"],
        ["Management",        "Low-Medium",  "Parish-run, with the studios as a self-organising community"],
        ["Physical access",   "Medium",      "Large steps to the main door; no toilet"],
        ["Perceptual access", "Low-Medium",  "Tall walls and a side-on sign — people walking from the west miss it"],
        ["Social inclusivity","Medium",      "Church open daily 7am–7pm; the garden gate is usually shut"],
        ["Animation",         "Medium",      "Mass, studios and seasonal gardening; usually empty in between"]
      ],
      overall: "Medium Publicness",
      notes: "The church is open daily, 7am–7pm, but on repeated visits it was almost always empty. Much of its community life — studios, garden, children's corner, food bank — cannot be seen from the street."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Medium-High", "Worship, making, growing, learning"],
        ["Design for engagement",    "Medium",      "A children's corner with books but no seating; the courtyard is undesigned"],
        ["Lingering opportunities",  "Medium",      "No toilet, kitchen or seating for families"],
        ["Multi-faith opportunities","Medium-High", "Studios welcome artists of all Christian traditions and none"],
        ["Facilitation",             "High",        "Priest, artists and gardeners all act as hosts"]
      ],
      overall: "Emerging",
      notes: "Strong bonds among artists, gardeners and congregation. The challenge is reaching the families in the park across the road."
    },
    scores: { publicness: .46, interaction: .58 },
    /* position on the site-visit graph: familiarity → right, most locals → up (0–1, axes cross at .5) */
    siteVisitGraph: { familiarity: 0.13, locals: 0.63 },
  },

  /* ------------------------------------------------------ 10 */
  "st-johns-churchyard-wapping": {
    lastChecked: "Sep 2026",
    siteTags: ["Tower Hamlets", "Grade II tower", "Public garden", "Churchyard", "Semi-secular"],
    interventionTags: ["Single", "Public", "Council-managed", "Permanent", "On-site", "Council & public funds"],
    annoSpace: "image",
    annotations: [
      { label: "Housing overlooking", x: 3, y: 2, w: 42, h: 26, kind: "" },
      { label: "Gravestones against the wall", x: 4, y: 34, w: 30, h: 16, kind: "buff" },
      { label: "The path through", x: 17, y: 54, w: 24, h: 28, kind: "green" }
    ],
    overview: "The churchyard of Wapping's bombed parish church — a public park since 1951, near the surviving tower, with 18th-century chest tombs and headstones against the wall. Open every day, and almost always quiet.",
    sacrednessRating: "Low-Medium",
    context: "Near the river but without a view of it, enclosed by high brick walls and housing, close to St Patrick's and Wapping's other green spaces.",
    week: [
      { label: "Churchyard", cells: [ { start: 0, span: 7, text: "Open daily — free, no programme", accent: true } ] },
      { label: "Programme", cells: [ { start: 0, span: 7, text: "None: this is the gap this entry records", quiet: true } ] }
    ],
    process: {
      scales: ["Site"],
      scaleNote: "One intervention, in 1951 — and little since.",
      typologies: ["Churchyard", "Tower", "Tombs"],
      delivery: ["Council-managed"],
      deliveryNote: "London Borough of Tower Hamlets.",
      funding: ["Council & public funds"],
      fundingNote: "Routine maintenance only.",
      planning: [],
      planningNote: "The tower and north wall are Grade II listed, in the Wapping Pierhead Conservation Area.",
      notes: "Only the tower and part of a wall survived wartime bombing; they are now Grade II listed. The churchyard became a public park in 1951, and little has changed since."
    },
    publicness: {
      rows: [
        ["Ownership",         "High",        "Borough-owned public open space"],
        ["Management",        "Medium",      "Routine grounds maintenance, no active stewardship"],
        ["Physical access",   "High",        "Level paths and two entrances, but cracked paving"],
        ["Perceptual access", "High",        "Open, but little signals that it is a place to stop"],
        ["Social inclusivity","High",        "Free and unconditional"],
        ["Animation",         "Low",         "No programming, and one bench"]
      ],
      overall: "High Publicness",
      notes: "High publicness, minimal invitation. The plaque to Thomas Rainsborough is small and set high on the wall, easily missed."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Low",  "Passing through, occasional bench-sitting"],
        ["Design for engagement",    "Low",  "One bench, no gathering points, no shelter"],
        ["Lingering opportunities",  "Low",  "Little reason or comfort to stay"],
        ["Multi-faith opportunities","Low",  "None currently — a mixed neighbourhood with nothing offered"],
        ["Facilitation",             "Low",  "No friends group, staff or events"]
      ],
      overall: "Dormant",
      notes: "A classic 'open but passive' site: a useful shortcut, historically rich and socially quiet. In a neighbourhood short of shared space, that is an opportunity rather than a failing."
    },
    scores: { publicness: .86, interaction: .14 },
    /* position on the site-visit graph: familiarity → right, most locals → up (0–1, axes cross at .5) */
    siteVisitGraph: { familiarity: 0.38, locals: 0.21 },
  },

  /* ------------------------------------------------------ 11 */
  "paddington-old-cemetery": {
    lastChecked: "Sep 2026",
    siteTags: ["Brent", "Grade II chapels", "Cemetery & green space", "Cemetery", "Semi-secular"],
    interventionTags: ["Multiple", "Public", "Council-managed", "Friends & volunteers", "Evolving", "On-site", "Vacant buildings"],
    annoSpace: "image",
    annotations: [
      { label: "Memorials", x: 4, y: 38, w: 24, h: 48, kind: "" },
      { label: "The main avenue", x: 72, y: 53, w: 25, h: 32, kind: "green" },
      { label: "Mown grass between graves", x: 32, y: 60, w: 30, h: 22, kind: "green" }
    ],
    overview: "A Victorian cemetery opened in 1855 and sold by Westminster to Brent for £5 in 1986. A well-used green space whose twin Gothic chapels stand empty at its heart — with a reuse plan now in development.",
    sacrednessRating: "Medium",
    context: "Off Willesden Lane in Kilburn, surrounded by housing and a school; a Grade II registered landscape with one entrance.",
    week: [
      { label: "Grounds", cells: [ { start: 0, span: 7, text: "Open daily from 09:00 — closing time varies by season", accent: true } ] },
      { label: "Burials", cells: [ { start: 0, span: 7, text: "Working cemetery with a columbarium" } ] },
      { label: "Chapels", cells: [ { start: 0, span: 7, text: "Closed — reuse plan in development", quiet: true } ] }
    ],
    process: {
      scales: ["Building", "Site", "5 years"],
      scaleNote: "Medium scale, on-site: landscape already works, buildings do not.",
      typologies: ["Cemetery", "Twin chapels", "Lodge & gates"],
      delivery: ["Council-managed", "Friends & volunteers", "Charity partner needed"],
      deliveryNote: "Brent, with the London Historic Buildings Trust leading the chapel reuse plan.",
      funding: ["Council & public funds", "Grant", "Charitable giving"],
      fundingNote: "Options appraisal (2024–25) funded by Brent, the National Lottery Heritage Fund and the Pilgrim Trust.",
      planning: ["Listed building consent"],
      planningNote: "Both chapels are Grade II listed; the landscape is Grade II registered.",
      notes: "Laid out in 1855 by Thomas Little around twin Gothic chapels. Sold to Brent for £5 in 1986; the Friends group formed in 2000."
    },
    publicness: {
      rows: [
        ["Ownership",         "High",        "Brent-owned public cemetery"],
        ["Management",        "Medium-High", "Council with an organised Friends group"],
        ["Physical access",   "High",        "Wheelchair-suitable paths, but one entrance and no through-route"],
        ["Perceptual access", "High",        "Signs for walking routes and a heritage trail; the chapels are visibly shut"],
        ["Social inclusivity","High",        "Free and open to all in a diverse neighbourhood"],
        ["Animation",         "Medium",      "Dog walkers, mourners and Friends; the chapels contribute nothing"]
      ],
      overall: "High Publicness",
      notes: "A stark gradient across one site: grounds open daily, chapels closed. With one entrance and few benches, it is visited rather than passed through."
    },
    interaction: {
      rows: [
        ["Activity mix",             "Medium",      "Walking, dog walking, remembrance, beekeeping"],
        ["Design for engagement",    "Low-Medium",  "No indoor space or café; few benches"],
        ["Lingering opportunities",  "Medium",      "Few benches, and the toilets were closed on the site visit"],
        ["Multi-faith opportunities","Medium-High", "Anglican and Nonconformist chapels; burials of many faiths"],
        ["Facilitation",             "Medium",      "Friends volunteer; no daily staffed presence"]
      ],
      overall: "Emerging",
      notes: "Dogs start conversations: near the entrance, walkers greet each other. Deeper in, it can feel empty. The vacant chapels are the largest untapped interior in this database."
    },
    scores: { publicness: .82, interaction: .5 },
    /* position on the site-visit graph: familiarity → right, most locals → up (0–1, axes cross at .5) */
    siteVisitGraph: { familiarity: 0.13, locals: 0.41 },
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
