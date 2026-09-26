/* ============================================================
   DESIGNING SHARED SPACES TOGETHER — site database
   One shared source of truth for the case studies page, the
   opportunities page, the map and every detail page.

   To add a site: copy an entry, give it a unique id, and add a
   photo at images/<id>/hero.jpg (plus optional 2.jpg, 3.jpg).
   ============================================================ */

const TAXONOMY = {
  boroughs: ["Brent", "Camden", "City of London", "Lambeth", "Tower Hamlets", "Westminster"],
  governance: ["Congregation-led", "Charity-led partnership", "Council-managed", "Friends & volunteers", "Institution-led", "Social enterprise"],
  faith: ["Church of England", "Roman Catholic", "Deconsecrated", "Civic / non-denominational"],
  sacredness: ["Active worship", "Semi-secular", "Secular"],
  scale: ["Small", "Medium", "Large"],
  permanence: ["Permanent", "Evolving", "Meanwhile"],
  funding: ["Heritage lottery", "Trading income", "Council & public funds", "Charitable giving", "Volunteer effort"],
  cost: ["£ under £100k", "££ £100k–£1m", "£££ over £1m"],
  timescale: ["Under 2 years", "2–5 years", "Over 5 years"],
  uses: ["Worship", "Café", "Culture & music", "Learning", "Nature & gardening", "Play", "Everyday services", "Quiet & reflection", "Events & hire", "Heritage"],
  dimensions: ["Use", "Publicness", "Interaction", "Temporality"],
  currentState: ["In use but underused", "Vacant building", "Open but passive", "Restoration underway"],
  publicnessLabels: {
    1: "L1 · Closed", 2: "L2 · By arrangement", 3: "L3 · Programmed",
    4: "L4 · Open hours", 5: "L5 · Civic"
  }
};

const SITES = [

  /* ------------------------------------------------ 1 */
  {
    id: "grand-junction",
    name: "Grand Junction at St Mary Magdalene's",
    shortName: "Grand Junction",
    address: "Rowington Close, Paddington, London W2 5TF",
    coords: [51.5236, -0.1936],
    borough: "Westminster",
    status: "established",
    isCaseStudy: true,
    summary: "A Grade I Victorian Gothic church beside the Grand Union Canal, restored and extended as an arts venue, café and community hub while remaining a working parish church.",
    faith: "Church of England",
    sacredness: "Active worship",
    typology: "Church in use",
    governance: "Charity-led partnership",
    scale: "Large",
    permanence: "Permanent",
    publicness: 4,
    interaction: "High",
    funding: ["Heritage lottery", "Charitable giving", "Trading income"],
    cost: "£££ over £1m",
    timescale: "Over 5 years",
    uses: ["Worship", "Café", "Culture & music", "Learning", "Events & hire", "Heritage"],
    tags: ["Grade I listed", "Mixed use", "Undercroft", "New wing"],
    story: [
      "G. E. Street's St Mary Magdalene (1867–78) is Grade I listed and considered his masterpiece. By the 2000s it had a congregation of about 25, was rarely open, and had no running water or lighting. From 2005 the parish worked with the Paddington Development Trust (PDT), a charity set up by local residents, which became the first community business in England to hold a lease on a church.",
      "A £3.6m National Lottery Heritage Fund grant supported a project costing about £7m. Caroe Architecture restored the interior (King of Prussia Gold Medal, 2018), and Dow Jones Architects added a four-storey wing on a steep, narrow site between the church and the school, with a café, education room, lift and visitor facilities. Over 100 statements of support backed the planning application. Grand Junction opened in 2019.",
      "Worship continues alongside concerts, inclusive club nights, classes, ESOL workshops, heritage tours and venue hire. On the site visit, the setting stood out: benches, planting and the canal path around the church, bike racks, and bold, consistent signage. The café was closed at the time, but beside the school it was easy to imagine it busy with waiting parents."
    ],
    whatMadeItWork: [
      "A partnership: the parish kept its church while PDT brought fundraising, programming and a business plan.",
      "The new wing fixed the practical barriers — toilets, level access, a warm room and a café.",
      "Worship, café, events and learning share the building at different times rather than being walled off.",
      "The public realm around the church — benches, planting and the canal path — carries the welcome beyond the front door."
    ],
    assessment: {
      publicnessNotes: "Open Monday to Saturday with a free café and regular free events; some spaces close for services and private hire. Clear street presence but entry is via a housing-estate close, so signage and programming do the inviting.",
      interactionNotes: "High mix of ages and cultures; paid and free activities sit side by side, and the café gives strangers a reason to linger without a ticket."
    },
    opportunity: {
      headline: "Open the church more of the week",
      dimensions: ["Use"],
      oppScale: "Small",
      currentState: "In use but underused",
      whoCouldLead: "Operator in place",
      note: "The café opens every day, but the church and heritage wing are open to drop-in visitors on only a few weekdays, 10am–4pm. More open hours in the nave, and clear signs showing when spaces are booked for hire, would let the café's everyday footfall carry into the church."
    },
    quickLinks: [
      { label: "grandjunction.org.uk", url: "https://grandjunction.org.uk" }
    ],
    sources: [
      { label: "Grand Junction — about", url: "https://grandjunction.org.uk/about" },
      { label: "Grand Junction — opening times", url: "https://grandjunction.org.uk/opening-times/" },
      { label: "Grand Junction — venue hire", url: "https://grandjunction.org.uk/hire/" },
      { label: "Grand Junction — project history", url: "https://exhibition.grandjunction.org.uk/" },
      { label: "Architects' Journal — building study of the Dow Jones wing", url: "https://www.architectsjournal.co.uk/buildings/a-broad-church-dow-joness-restoration-of-st-mary-magdalene" },
      { label: "Power to Change — case study", url: "https://www.powertochange.org.uk/evidence-and-ideas/case-studies/grand-junction-st-mary-magdalenes-paddington/" },
      { label: "Caroe Architecture — King of Prussia Gold Medal", url: "https://caroe.com/st-mary-magdalene-paddington-king-of-prussia-award/" },
      { label: "National Lottery Heritage Fund — grant announcement", url: "https://www.heritagefund.org.uk/news/communities-unite-future-st-mary-magdalene" }
    ]
  },

  /* ------------------------------------------------ 2 */
  {
    id: "sheriff-centre",
    name: "The Sherriff Centre, St James' Church",
    shortName: "Sherriff Centre",
    address: "Sherriff Road, West Hampstead, London NW6 2AP",
    coords: [51.5471, -0.1904],
    borough: "Camden",
    status: "established",
    isCaseStudy: true,
    summary: "A working Victorian parish church that took in West Hampstead's post office in 2014 — and grew a café, soft play, debt advice and a community fridge around it.",
    faith: "Church of England",
    sacredness: "Active worship",
    typology: "Church in use",
    governance: "Social enterprise",
    scale: "Medium",
    permanence: "Permanent",
    publicness: 4,
    interaction: "High",
    funding: ["Trading income", "Charitable giving"],
    cost: "££ £100k–£1m",
    timescale: "2–5 years",
    uses: ["Worship", "Café", "Everyday services", "Play", "Culture & music", "Events & hire"],
    tags: ["Post office", "Soft play", "Debt advice", "First of its kind"],
    story: [
      "When West Hampstead's postmaster decided to retire in 2012, the vicar, Fr Andrew Foreshew-Cain, saw a tweet from a local estate agent looking for a new home for the post office. He offered St James' — a Grade II listed church by Arthur Blomfield, built 1885–88. The post office opened inside the church in July 2014.",
      "Caröe Architects fitted the new uses into the nave: a three-counter post office in an oak-framed pod at the west end, the Sanctuary Café in the south aisle, Hullabaloo soft play in the north aisle, and a card shop on castors that wheels away for services. The chancel is unchanged and worship seating stays at the east end. A ramp and automatic doors made the church fully accessible. The project cost about £600,000, raised from Post Office and council grants, charitable trusts, parish savings and private donors.",
      "The Sherriff Centre is a registered charity whose businesses run as separate companies. Their profits fund free debt advice (from 2016), a community fridge (2018) and a food share project. The church has also hosted Open Table, a worship community for LGBTQIA+ Christians and all who believe in an inclusive church."
    ],
    whatMadeItWork: [
      "It met an everyday need: a post office brings in people who would never visit a church.",
      "The uses are compatible — children play safely while others queue, and the distinctions stay clear.",
      "It is not just chairs and tables: there is something to look at, things to do, and a clear public use that brings locals together.",
      "Separate trading companies protect the parish, and their profits pay for free services."
    ],
    assessment: {
      publicnessNotes: "Open Monday to Saturday, 9–5. The post office queue is a great equaliser: people who would never attend a service pass through weekly.",
      interactionNotes: "Very high everyday mixing — parents, pensioners, commuters — with staff and volunteers as hosts. Closed Sundays for worship, keeping the sacred rhythm legible."
    },
    opportunity: null,
    quickLinks: [
      { label: "thesherriffcentre.co.uk", url: "https://thesherriffcentre.co.uk" }
    ],
    sources: [
      { label: "The Sherriff Centre — our story", url: "https://thesherriffcentre.co.uk/about-us" },
      { label: "Church of England — St James, West Hampstead case study", url: "https://www.churchofengland.org/sites/default/files/2018-12/CCB_Case-study_St-James-West-Hampstead.pdf" },
      { label: "British Listed Buildings — Church of St James", url: "https://britishlistedbuildings.co.uk/101378657-church-of-st-james-west-hampstead-ward" },
      { label: "West Hampstead Life — reporting on the conversion, 2014", url: "https://westhampsteadlife.com/2014/04/28/new-post-office-takes-shape-in-st-james-church/12560" }
    ]
  },

  /* ------------------------------------------------ 3 */
  {
    id: "garden-museum",
    name: "Garden Museum, St Mary-at-Lambeth",
    shortName: "Garden Museum",
    address: "5 Lambeth Palace Road, London SE1 7LB",
    coords: [51.4949, -0.1204],
    borough: "Lambeth",
    status: "established",
    isCaseStudy: true,
    summary: "A medieval and Victorian church saved from demolition in the 1970s and remade as the world's first museum of garden history, with a courtyard garden and café.",
    faith: "Deconsecrated",
    sacredness: "Secular",
    typology: "Deconsecrated church",
    governance: "Charity-led partnership",
    scale: "Large",
    permanence: "Permanent",
    publicness: 4,
    interaction: "Medium",
    funding: ["Heritage lottery", "Charitable giving", "Trading income"],
    cost: "£££ over £1m",
    timescale: "2–5 years",
    uses: ["Culture & music", "Café", "Learning", "Nature & gardening", "Heritage", "Events & hire"],
    tags: ["Deconsecrated 1972", "Saved 1977", "Copper pavilions", "Tradescant tomb"],
    story: [
      "St Mary-at-Lambeth, beside Lambeth Palace, has a tower of 1377 and a nave rebuilt in 1851–52. It was deconsecrated in 1972 and faced demolition until Rosemary Nicholson, drawn by the tomb of the royal gardeners John Tradescant, father and son, set up a trust to save it. The world's first museum of garden history opened there in 1977.",
      "In 2014 the museum won £3.5m from the Heritage Lottery Fund for a second phase by Dow Jones Architects. It reopened in 2017 with new galleries and learning spaces inserted into the church, a courtyard garden by Dan Pearson, and a recreation of the Tradescants' 'Ark' collection. It is an independent charity with no government funding.",
      "On the site visit, glass sliding doors in the medieval arch made it easy to see in and feel welcome. The ground-floor atrium, with a large shared table and arts and crafts, was free to anyone; the upper galleries were ticketed and the archive by appointment. The building still felt reflective. But the garden was hard to find through the shop, and the main signs face the river rather than the park and homes behind."
    ],
    whatMadeItWork: [
      "One strong idea — gardens — gives the church a public purpose rooted in its own churchyard history.",
      "Glass doors in the old arch let people see inside before they commit to entering.",
      "New spaces are inserted into the listed interior, keeping the church's character.",
      "A free ground floor softens the threshold of a ticketed museum."
    ],
    assessment: {
      publicnessNotes: "Open most days; the galleries are ticketed but the café, front garden and shop are free to enter, so the threshold is soft. The building reads clearly as 'for everyone' from the street.",
      interactionNotes: "Mostly visitor-to-place rather than stranger-to-stranger, but learning programmes, talks and the café generate steady social overlap."
    },
    opportunity: null,
    quickLinks: [
      { label: "gardenmuseum.org.uk", url: "https://gardenmuseum.org.uk" }
    ],
    sources: [
      { label: "Heritage Lottery Fund — £3.5m award, 2014", url: "https://www.heritagefund.org.uk/news/garden-museum-awarded-grant-ps35million-heritage-lottery-fund" },
      { label: "Garden Museum — visit", url: "https://gardenmuseum.org.uk/visit/" },
      { label: "Dow Jones Architects — project page", url: "https://dowjonesarchitects.com/projects/garden-museum-phase-2/" },
      { label: "Wikipedia — Garden Museum", url: "https://en.wikipedia.org/wiki/Garden_Museum" }
    ]
  },

  /* ------------------------------------------------ 4 */
  {
    id: "st-dunstan-in-the-east",
    name: "St Dunstan in the East Church Garden",
    shortName: "St Dunstan in the East",
    address: "St Dunstan's Hill, City of London EC3R 5DD",
    coords: [51.5097, -0.0827],
    borough: "City of London",
    status: "established",
    isCaseStudy: true,
    summary: "A church with a Wren steeple, gutted in the Blitz and never rebuilt. The City of London opened a public garden inside its ruins in 1971.",
    faith: "Deconsecrated",
    sacredness: "Semi-secular",
    typology: "Churchyard & ruin garden",
    governance: "Council-managed",
    scale: "Small",
    permanence: "Permanent",
    publicness: 5,
    interaction: "Low",
    funding: ["Council & public funds"],
    cost: "££ £100k–£1m",
    timescale: "2–5 years",
    uses: ["Quiet & reflection", "Nature & gardening", "Heritage"],
    tags: ["Wren tower", "Blitz ruin", "Climbing planting", "Lunchtime refuge"],
    story: [
      "St Dunstan in the East gained a steeple by Sir Christopher Wren in 1695–1701. The church was severely damaged in the Blitz in 1941, and in the post-war reorganisation of London's churches it was decided not to rebuild it.",
      "In 1967 the City of London Corporation decided to turn the Grade I listed ruins into a public garden, which opened in 1971: a lawn and trees in the nave, a low fountain, benches and climbing plants on the walls. The tower now houses the All Hallows House Foundation, and occasional services, such as Palm Sunday processions, still take place.",
      "Debates over church conversions made no difference to some ruins. Today St Dunstan's is a much-loved garden, busy with City workers at lunchtime, and available to hire for events."
    ],
    whatMadeItWork: [
      "Restraint: the ruin was kept and planted, not restored or cleared.",
      "Free, everyday access, with entrances from two City streets.",
      "Planting turns a war ruin into a calm place to sit.",
      "The tower and walls keep the church's history visible."
    ],
    assessment: {
      publicnessNotes: "Fully open daily with no threshold at all — the archetype of L5 civic publicness on former church land.",
      interactionNotes: "Deliberately low-key: people come to be quiet alongside strangers rather than to meet them. Interaction is ambient, not programmed."
    },
    opportunity: {
      headline: "Busy, but unprogrammed",
      dimensions: ["Interaction", "Temporality"],
      oppScale: "Small",
      currentState: "In use but underused",
      whoCouldLead: "Council-owned",
      note: "A popular lunchtime and visitor spot with no regular programme or on-site interpretation. Simple interpretation of the ruin's history and occasional community events could give people reasons to talk, not just to sit."
    },
    quickLinks: [
      { label: "City of London — St Dunstan in the East", url: "https://www.cityoflondon.gov.uk/things-to-do/city-gardens/find-a-garden/st-dunstan-in-the-east-church-garden" }
    ],
    sources: [
      { label: "City of London — St Dunstan in the East Church Garden", url: "https://www.cityoflondon.gov.uk/things-to-do/city-gardens/find-a-garden/st-dunstan-in-the-east-church-garden" },
      { label: "Wikipedia — St Dunstan-in-the-East", url: "https://en.wikipedia.org/wiki/St_Dunstan-in-the-East" }
    ]
  },

  /* ------------------------------------------------ 5 */
  {
    id: "st-georges-gardens",
    name: "St George's Gardens",
    shortName: "St George's Gardens",
    address: "Handel Street, Bloomsbury, London WC1N 1NU",
    coords: [51.5254, -0.1213],
    borough: "Camden",
    status: "established",
    isCaseStudy: true,
    summary: "A burial ground bought in 1713 for two Bloomsbury parishes, opened as a public garden in the 1880s, and restored with Heritage Lottery funding in 2001.",
    faith: "Civic / non-denominational",
    sacredness: "Semi-secular",
    typology: "Burial ground garden",
    governance: "Friends & volunteers",
    scale: "Medium",
    permanence: "Permanent",
    publicness: 5,
    interaction: "Medium",
    funding: ["Heritage lottery", "Council & public funds", "Volunteer effort"],
    cost: "££ £100k–£1m",
    timescale: "2–5 years",
    uses: ["Quiet & reflection", "Nature & gardening", "Heritage"],
    tags: ["Grade II* landscape", "Friends group 1994", "Outdoor sitting room", "Still consecrated"],
    story: [
      "Bought in 1713 and opened for burials in 1714, the ground served St George's Bloomsbury and St George the Martyr, Holborn. It closed through overcrowding in 1855 and opened as a public garden in 1884, after campaigning by Miranda and Octavia Hill and the Kyrle Society for green space in poor areas where squares were locked and private. It remains consecrated ground.",
      "By the 1990s the gardens had badly declined. Local residents formed the Friends of St George's Gardens, and Camden won Heritage Lottery Fund money through the Urban Parks Programme in 1997. The restored gardens reopened in spring 2001. Camden maintains them, with the Friends watching over the site and development around it.",
      "The gardens are Grade II* on the national register. Memorials include a plaque to Zachary Macaulay, anti-slavery campaigner and one of the founders of UCL."
    ],
    whatMadeItWork: [
      "A Friends group gives constant care, local knowledge and a voice for funding bids.",
      "Tombs and monuments stay visible within an everyday park.",
      "Three gates from quiet side streets make it both a through-route and a place to rest."
    ],
    assessment: {
      publicnessNotes: "Open daily to all; three modest gates reward local knowledge but exclude no one. A genuinely shared space in an area of gated squares.",
      interactionNotes: "Everyday co-presence — lunches, dog walks, children — with occasional Friends-run events lifting it beyond the passive."
    },
    opportunity: null,
    quickLinks: [
      { label: "friendsofstgeorgesgardens.org.uk", url: "https://www.friendsofstgeorgesgardens.org.uk/" }
    ],
    sources: [
      { label: "Friends of St George's Gardens — history", url: "https://www.friendsofstgeorgesgardens.org.uk/" },
      { label: "Historic England — register entry", url: "https://historicengland.org.uk/listing/the-list/list-entry/1000832" },
      { label: "Bloomsbury Squares & Gardens — St George's Gardens", url: "https://bloomsburysquares.com/the-squares/st-georges-gardens/" },
      { label: "Parks & Gardens — St George's Gardens", url: "https://www.parksandgardens.org/places/st-georges-gardens-bloomsbury" },
      { label: "Look Up London — history of St George's Gardens", url: "https://lookup.london/st-georges-garden-bloomsbury/" }
    ]
  },

  /* ------------------------------------------------ 6 */
  {
    id: "tower-hamlets-cemetery-park",
    name: "Tower Hamlets Cemetery Park",
    shortName: "Tower Hamlets Cemetery Park",
    address: "Southern Grove, Mile End, London E3 4PX",
    coords: [51.5225, -0.0296],
    borough: "Tower Hamlets",
    status: "established",
    isCaseStudy: true,
    summary: "One of London's 'Magnificent Seven' Victorian cemeteries, closed to burials in 1966 and now a woodland park and Local Nature Reserve cared for by a Friends charity.",
    faith: "Civic / non-denominational",
    sacredness: "Semi-secular",
    typology: "Cemetery park",
    governance: "Friends & volunteers",
    scale: "Large",
    permanence: "Evolving",
    publicness: 5,
    interaction: "Medium",
    funding: ["Council & public funds", "Charitable giving", "Volunteer effort"],
    cost: "££ £100k–£1m",
    timescale: "Over 5 years",
    uses: ["Nature & gardening", "Learning", "Quiet & reflection", "Heritage", "Culture & music"],
    tags: ["Magnificent Seven", "Local Nature Reserve", "Outdoor classroom", "Volunteering"],
    story: [
      "Opened in 1841 as the City of London and Tower Hamlets Cemetery — the last of the 'Magnificent Seven' — it took around 350,000 burials before closing to new burials in 1966, when the Greater London Council bought it. Tower Hamlets Council took ownership in 1986.",
      "Left to grow wild, it became woodland. The Friends of Tower Hamlets Cemetery Park, founded in 1990 and a registered charity since 2004, now care for its 31 acres of woods, meadows and monuments. The Soanes Centre (1993) is a base for environmental education, and in 2001 the park became Tower Hamlets' first Local Nature Reserve. Volunteering, talks, tours and a summer fair keep it busy.",
      "On the site visit, woodland grew around and between the gravestones, and wildlife was everywhere. Most entrances have a Friends sign with a map and opening times, and the paths are clearly laid out for walking. But benches cluster near the entrances, some signs are very small, and open bins attracted flies — and, unlike Paddington Old Cemetery, there is little provision for the many dog walkers."
    ],
    whatMadeItWork: [
      "Time as a design tool: decades of managed rewilding made a landscape no capital project could buy.",
      "A Friends charity working with the council brings daily care, volunteering and education.",
      "Several signed entrances make it a through-route, not a dead end.",
      "Remembrance, nature and recreation share the site because it is big enough for all three."
    ],
    assessment: {
      publicnessNotes: "Free and open daily as a public park; multiple gates knit it into surrounding streets.",
      interactionNotes: "Strong programmed interaction (schools, volunteering, walks) on top of quiet solitary use; the two rarely conflict thanks to 27 acres of room."
    },
    opportunity: null,
    quickLinks: [
      { label: "fothcp.org", url: "https://www.fothcp.org" }
    ],
    sources: [
      { label: "Friends of Tower Hamlets Cemetery Park", url: "https://www.fothcp.org/about" },
      { label: "Wikipedia — Tower Hamlets Cemetery Park", url: "https://en.wikipedia.org/wiki/Tower_Hamlets_Cemetery_Park" }
    ]
  },

  /* ------------------------------------------------ 7 */
  {
    id: "lambeth-palace-library",
    name: "Lambeth Palace Library",
    shortName: "Lambeth Palace Library",
    address: "15 Lambeth Palace Road, London SE1 7JT",
    coords: [51.4962, -0.1187],
    borough: "Lambeth",
    status: "established",
    isCaseStudy: true,
    summary: "The Church of England's library and archive, rehoused in 2020 in a new building on the edge of the Archbishop's garden — a study in rationed publicness.",
    faith: "Church of England",
    sacredness: "Semi-secular",
    typology: "New building on faith land",
    governance: "Institution-led",
    scale: "Large",
    permanence: "Permanent",
    publicness: 3,
    interaction: "Low",
    funding: ["Charitable giving"],
    cost: "£££ over £1m",
    timescale: "2–5 years",
    uses: ["Learning", "Heritage", "Quiet & reflection", "Events & hire"],
    tags: ["Wright & Wright", "First new building in 185 years", "Occupied wall", "BREEAM Excellent"],
    story: [
      "Founded in 1610, Lambeth Palace Library is one of England's earliest public libraries and holds the Church of England's archive. Outgrowing its rooms in the Palace, it moved into a new building by Wright & Wright Architects (selected in 2015), completed in 2020 and opened in 2021 — the first new building on the site in 185 years.",
      "The £23.5m building, paid for in full by the Church Commissioners, has a nine-storey tower, a free entrance hall with exhibits, a reading room for 12 readers, a readers' lounge, seminar rooms and a roof terrace for events. It shields the Palace garden from the road, and a new pond by Dan Pearson Studio collects rainwater from the roofs.",
      "On the site visit, the building was hard to read up close: the wall sits tight to the pavement, the name is only visible from a distance, and the door sensors did not open for pedestrians. Security felt unwelcoming, even for the free exhibition. The reading room requires registration, with pencils only and belongings in a clear bag, as at the British Library — but inside, it and the readers' common room were calm and beautiful."
    ],
    whatMadeItWork: [
      "A clear institutional need — protecting the collection — also produced a public entrance hall and exhibition.",
      "Environmental design (solar panels, a rainwater pond, BREEAM Excellent) strengthened the case.",
      "Access is limited but open to anyone who registers."
    ],
    assessment: {
      publicnessNotes: "L3 programmed publicness: free foyer and exhibitions, registered reading room, occasional open days — a controlled but genuine welcome.",
      interactionNotes: "Low by design; the library trades in quiet. Social life concentrates on events and the terrace."
    },
    opportunity: {
      headline: "A threshold that could open further",
      dimensions: ["Publicness", "Use"],
      oppScale: "Small",
      currentState: "In use but underused",
      whoCouldLead: "Faith-led",
      note: "The free exhibition and reading room exist, but the street edge hides them. Signs at pedestrian level, doors that open for people on foot, and a friendlier welcome at security would widen access without touching the archive."
    },
    quickLinks: [
      { label: "lambethpalacelibrary.info", url: "https://www.lambethpalacelibrary.info" }
    ],
    sources: [
      { label: "Lambeth Palace Library — our building", url: "https://www.lambethpalacelibrary.info/about-lambeth-palace-library/our-building/" },
      { label: "IanVisits — Lambeth Palace Library opening times", url: "https://www.ianvisits.co.uk/venues/lambeth-palace-library/" },
      { label: "Architects' Journal — building study", url: "https://www.architectsjournal.co.uk/buildings/building-study-lambeth-palace-library-by-wright-wright" },
      { label: "RIBA Journal — Lambeth Palace Library", url: "https://www.ribaj.com/buildings/regional-awards-2022-london-south-west-wright-and-wright-lambeth-palace-library-church-commissioners" }
    ]
  },

  /* ------------------------------------------------ 8 */
  {
    id: "st-stephen-walbrook",
    name: "St Stephen Walbrook",
    shortName: "St Stephen Walbrook",
    address: "39 Walbrook, City of London EC4N 8BN",
    coords: [51.5127, -0.0904],
    borough: "City of London",
    status: "established",
    isCaseStudy: true,
    summary: "Wren's domed City church, centred on a Henry Moore altar and birthplace of the Samaritans — open on weekdays for visitors, music and worship.",
    faith: "Church of England",
    sacredness: "Active worship",
    typology: "Church in use",
    governance: "Congregation-led",
    scale: "Small",
    permanence: "Permanent",
    publicness: 4,
    interaction: "Medium",
    funding: ["Charitable giving"],
    cost: "££ £100k–£1m",
    timescale: "2–5 years",
    uses: ["Worship", "Quiet & reflection", "Culture & music", "Heritage"],
    tags: ["Wren dome", "Henry Moore altar", "Samaritans 1953", "Lunchtime concerts"],
    story: [
      "A church has stood by the Walbrook stream for over a thousand years, and on this site since the 15th century. After the Great Fire, Sir Christopher Wren rebuilt it in 1672–79 around a 63-foot dome — one of his finest church interiors.",
      "In 1953 the rector, Dr Chad Varah, founded the Samaritans here. In 1987 a round stone altar by Henry Moore, commissioned by churchwarden Peter Palumbo, was placed at the centre of the church after a rare ruling by the Court of Ecclesiastical Causes Reserved, with seating gathered around it.",
      "The church opens Monday to Friday. A July 2026 noticeboard listed a lunchtime recital, a community choir, a choral Eucharist, an organ recital and 'Rush Hour Jazz' after work — a programme shaped around City workers rather than residents."
    ],
    whatMadeItWork: [
      "Reordering, not extension: moving the altar and seats changed how the room gathers people.",
      "Weekday opening, with lunchtime and after-work music, matches the rhythms of City workers.",
      "Free events bring in visitors of any faith or none.",
      "The Samaritans show a church starting a service the state had not yet imagined."
    ],
    assessment: {
      publicnessNotes: "Open weekdays to anyone; the door on Walbrook is genuinely unlatched. Weekend closure reflects its non-residential parish.",
      interactionNotes: "Concerts and services gather people in the round; between events, use is contemplative and solitary."
    },
    opportunity: null,
    quickLinks: [
      { label: "ststephenwalbrook.net", url: "https://ststephenwalbrook.net" }
    ],
    sources: [
      { label: "St Stephen Walbrook — visiting and history", url: "https://ststephenwalbrook.net" },
      { label: "Wikipedia — St Stephen Walbrook", url: "https://en.wikipedia.org/wiki/St_Stephen_Walbrook" },
      { label: "Samaritans — our history", url: "https://www.samaritans.org/about-samaritans/our-history/" }
    ]
  },

  /* ------------------------------------------------ 9 */
  {
    id: "st-patricks-wapping",
    name: "St Patrick's Catholic Church, Wapping",
    shortName: "St Patrick's Wapping",
    address: "Green Bank, Wapping, London E1W 2HT",
    coords: [51.5052, -0.0594],
    borough: "Tower Hamlets",
    status: "emerging",
    isCaseStudy: true,
    summary: "A Grade II Catholic church in Wapping with artists' studios in its old school and a volunteer kitchen garden — much of its community life hidden from the street.",
    faith: "Roman Catholic",
    sacredness: "Active worship",
    typology: "Church precinct",
    governance: "Congregation-led",
    scale: "Medium",
    permanence: "Evolving",
    publicness: 3,
    interaction: "Medium",
    funding: ["Volunteer effort", "Charitable giving"],
    cost: "£ under £100k",
    timescale: "Over 5 years",
    uses: ["Worship", "Culture & music", "Nature & gardening", "Learning"],
    tags: ["Grade II listed", "Artists' studios", "Kitchen garden", "Masterplan phase 1"],
    story: [
      "Built in 1879 to Francis Tasker's designs — a plain 'Tuscan barn' outside, a North Italian Renaissance interior inside — St Patrick's has served Wapping's Catholic community for nearly 150 years.",
      "When the parish school closed in 2002, the parish priest, Fr Digby Samuels, turned the Old School into St Patrick's Studios, for artists of all Christian traditions and none. Since 2005 volunteers have grown fruit and vegetables on derelict ground behind the church, sold by donation after Sunday Mass in support of CAFOD. Dow Jones Architects' Phase 1 proposals would repair and reorder the church and add a lean-to extension with toilets, to make it 'more inclusive, accessible, sustainable, and welcoming'.",
      "On repeated visits the church was open but almost always empty. It faces a busy park and playground, but tall walls, large steps and a sign set side-on to the street mean people walking from the west simply miss it, and the garden gate is usually shut. Inside are history banners about the church and the area, a children's corner with books, artwork and a food bank table, and a baby-changing room — but no toilet or kitchen, and little sign of any of it from outside."
    ],
    whatMadeItWork: [
      "Cost-nothing beginnings: an empty school and waste ground were offered to the community.",
      "Each use suits the parish — studios, a giving garden, a children's corner.",
      "Faith networks such as CAFOD give the projects purpose and support."
    ],
    assessment: {
      publicnessNotes: "L3: the church opens for services and events, the studios and garden by arrangement and open days. Publicness here is relational — through people — more than through an always-open door.",
      interactionNotes: "Strong bonds among artists, gardeners and congregation; the next challenge is widening the circle to passers-by."
    },
    opportunity: {
      headline: "A precinct mid-transformation",
      dimensions: ["Publicness", "Use", "Temporality"],
      oppScale: "Medium",
      currentState: "Restoration underway",
      whoCouldLead: "Faith-led",
      note: "Phase 1 would add toilets and repair the church. Low-cost moves could start now: signs visible from both directions, advertising the history banners, set open hours for the garden, seating for families in the children's corner, and opening times coordinated with nearby churches."
    },
    quickLinks: [
      { label: "parish.rcdow.org.uk/wapping", url: "https://parish.rcdow.org.uk/wapping/" },
      { label: "stpatricksstudios.com", url: "https://stpatricksstudios.com/" }
    ],
    sources: [
      { label: "Dow Jones Architects — St Patrick's Wapping", url: "https://dowjonesarchitects.com/projects/st-patricks-wapping/" },
      { label: "St Patrick's Wapping — Mass and opening times", url: "https://parish.rcdow.org.uk/wapping/mass-times/" },
      { label: "St Patrick's Studios — history", url: "https://stpatricksstudios.com/" },
      { label: "St Patrick's Wapping — kitchen garden", url: "https://parish.rcdow.org.uk/wapping/parish-groups/kitchen-garden/" },
      { label: "Independent Catholic News — the kitchen garden", url: "https://www.indcatholicnews.com/news/46072" }
    ]
  },

  /* ------------------------------------------------ 10 */
  {
    id: "st-johns-churchyard-wapping",
    name: "St John's Churchyard, Wapping",
    shortName: "St John's Churchyard",
    address: "Scandrett Street, Wapping, London E1W 2NL",
    coords: [51.5043, -0.0612],
    borough: "Tower Hamlets",
    status: "opportunity",
    isCaseStudy: false,
    summary: "The churchyard of Wapping's bombed parish church, a public park since 1951 — a shortcut with gravestones against the wall, one bench and little reason to stay.",
    faith: "Civic / non-denominational",
    sacredness: "Semi-secular",
    typology: "Churchyard garden",
    governance: "Council-managed",
    scale: "Small",
    permanence: "Permanent",
    publicness: 5,
    interaction: "Low",
    funding: ["Council & public funds"],
    cost: "£ under £100k",
    timescale: "Under 2 years",
    uses: ["Quiet & reflection", "Heritage"],
    tags: ["Bombed church", "1756 tower", "Park since 1951", "Dock wall"],
    story: [
      "St John's began as a chapel in 1615–17 and became Wapping's parish church in 1694; Joel Johnson rebuilt it in 1756. Bombed in the Second World War, only the tower and part of a wall survived. The tower was restored in 1964 and the rest converted to flats in the 1990s. Since July 2023, services have been held in a chapel at the base of the tower.",
      "The churchyard became a public park in 1951. It keeps two 18th-century chest tombs, with headstones set against its high brick walls — a visible change in how sacred ground is used. A plaque unveiled in 2013 marks the burial here in 1648 of Thomas Rainsborough, a spokesman for the Levellers; it is small and set high on the wall.",
      "On the site visit it worked mainly as a shortcut: two entrances on a diagonal let people walk through, but there was one bench, a cracked path and little to hold anyone. It is not yet a place to linger or meet by chance, but it has the space and history for community events."
    ],
    whatMadeItWork: [],
    assessment: {
      publicnessNotes: "L5 open daily — no gates or fees. High publicness, minimal invitation.",
      interactionNotes: "Low: passers-through and occasional bench-sitters. The site's stories (tower, tombs, dock wall, school) are told nowhere on site."
    },
    opportunity: {
      headline: "Open but passive — Wapping's quiet commons",
      dimensions: ["Interaction", "Use", "Temporality"],
      oppScale: "Small",
      currentState: "Open but passive",
      whoCouldLead: "Council-owned",
      note: "Small, reversible moves could change this place: more seating, repaired paths, interpretation placed where people can read it, and a heritage walk linking it to St Patrick's and nearby churches. A Friends-style group could run seasonal events. Costs fit the 'under £100k, under two years' band."
    },
    quickLinks: [],
    sources: [
      { label: "Wikipedia — St John's Church, Wapping", url: "https://en.wikipedia.org/wiki/St_John%27s_Church,_Wapping" },
      { label: "London Gardens Trust — St John's Gardens inventory", url: "https://londongardenstrust.org/conservation/inventory/site-record/?ID=THM043" }
    ]
  },

  /* ------------------------------------------------ 11 */
  {
    id: "paddington-old-cemetery",
    name: "Paddington Old Cemetery",
    shortName: "Paddington Old Cemetery",
    address: "Willesden Lane, Kilburn, London NW6 7SD",
    coords: [51.5439, -0.2033],
    borough: "Brent",
    status: "opportunity",
    isCaseStudy: false,
    summary: "A Victorian cemetery sold by Westminster to Brent for £5 in 1986 — a well-used green space for dog walkers, with twin listed chapels empty at its centre and plans for their reuse.",
    faith: "Civic / non-denominational",
    sacredness: "Semi-secular",
    typology: "Cemetery & chapels",
    governance: "Council-managed",
    scale: "Medium",
    permanence: "Evolving",
    publicness: 5,
    interaction: "Low",
    funding: ["Council & public funds", "Charitable giving", "Volunteer effort"],
    cost: "££ £100k–£1m",
    timescale: "2–5 years",
    uses: ["Quiet & reflection", "Nature & gardening", "Heritage"],
    tags: ["Opened 1855", "Twin chapels", "Sold for £5", "Apiary"],
    story: [
      "Laid out in 1855 by Thomas Little for the Paddington Burial Board, the cemetery has horseshoe-shaped, tree-lined paths around twin Gothic chapels — one Anglican, one Nonconformist — both Grade II listed, in a Grade II registered landscape. Westminster sold it to Brent for £5 in 1986, and the Friends of Paddington Old Cemetery formed in 2000.",
      "It is still a working cemetery, with a columbarium added in 2021 and an apiary producing 'Tombstone honey'. The chapels are on the Heritage at Risk Register. An options appraisal by the London Historic Buildings Trust (2024–25), funded by Brent, the National Lottery Heritage Fund and the Pilgrim Trust, found 'a worthwhile future' for them in community use, starting with repairs to one chapel.",
      "On the site visit, scaffolding was up on the chapels. Dog walkers were well served, with water points and bins, and greeted each other near the entrance. But with one entrance you cannot walk through it, benches and signs are few, and the toilets were closed. It is surrounded by housing and a school, yet sits outside everyday routes."
    ],
    whatMadeItWork: [],
    assessment: {
      publicnessNotes: "Grounds open daily as a cherished green space (L5); the chapels at the centre are closed (L1) — a stark publicness gradient across one site.",
      interactionNotes: "Everyday walkers, mourners and Friends' events coexist; the vacant chapels contribute nothing yet to social life."
    },
    opportunity: {
      headline: "Twin chapels waiting at the centre",
      dimensions: ["Use", "Publicness", "Interaction"],
      oppScale: "Medium",
      currentState: "Vacant building",
      whoCouldLead: "Charity partner needed",
      note: "The pieces are in place: listed chapels, a Friends group, Brent's backing and a reuse plan led by the London Historic Buildings Trust. Alongside the chapels, a second entrance, more benches and signs, and reopened toilets would make the grounds part of everyday local routes."
    },
    quickLinks: [
      { label: "fopoc.com", url: "https://www.fopoc.com/" }
    ],
    sources: [
      { label: "London Historic Buildings Trust — chapels project", url: "https://londonhistoricbuildings.org.uk/paddington-old-chapels/" },
      { label: "Brent Council — Paddington Old Cemetery", url: "https://www.brent.gov.uk/births-deaths-marriages-nationality/deaths-and-funeral-services/brent-cemeteries/paddington-old-cemetery" },
      { label: "Friends of Paddington Old Cemetery — history", url: "https://www.fopoc.com/new-page-4-1" },
      { label: "Historic England — register entry", url: "https://historicengland.org.uk/listing/the-list/list-entry/1001542" },
      { label: "Wikipedia — Paddington Old Cemetery", url: "https://en.wikipedia.org/wiki/Paddington_Old_Cemetery" }
    ]
  }
];

/* Glossary used on the Toolkit page and linked from filters */
const GLOSSARY = [
  { term: "Publicness ladder (L1–L5)", def: "Our five-step scale for how open a site really is, from L1 Closed to L5 Civic. It measures practice, not policy: what a stranger can actually do on an ordinary Tuesday. The full checklist is on this page." },
  { term: "Interaction", def: "Whether a place produces social contact — between strangers, across generations and cultures — or simply co-presence. Assessed through activity mix, lingering opportunities, design for engagement and facilitation." },
  { term: "Sacredness", def: "Where a site sits between active worship, semi-secular (sacred traces or occasional rites within mainly secular use), and secular. Not a value judgement — a design condition that shapes which uses fit." },
  { term: "Intervention scale", def: "Small: furniture, planting, programming. Medium: partial conversion or a new use within existing fabric. Large: major capital works, extensions or whole-site transformation." },
  { term: "Permanence", def: "Permanent works, evolving sites that change in phases, and meanwhile uses that are deliberately temporary — often the cheapest way to test publicness before committing." },
  { term: "Meanwhile use", def: "A time-limited use of an underused space — a market in a churchyard, studios in an empty school — that builds evidence, audiences and income ahead of permanent decisions." },
  { term: "Porous edge", def: "A boundary you can see, sense or step through: railings instead of walls, glimpses of gardens, open doors. Porosity often does more for publicness than any interior change." },
  { term: "Stewardship", def: "Who cares for a place day to day — congregation, council, Friends group, charity or operator — and therefore who can say yes to new uses." },
  { term: "Friends group", def: "A volunteer association stewarding a public space: eyes on the ground, institutional memory, and a credible community voice for funding bids, as at St George's Gardens." },
  { term: "Charity-led partnership", def: "A model where a development trust or charity operates a faith site's public programme alongside continuing worship, as the Paddington Development Trust does at Grand Junction." },
  { term: "Social enterprise model", def: "Trading activities — café, post office, hire — whose profits fund community services, as at the Sherriff Centre. Sustains publicness without permanent grant dependency." },
  { term: "Reordering", def: "Rearranging a worship interior — altar, seating, thresholds — to change how it gathers people, as with the Henry Moore altar at St Stephen Walbrook. The smallest scale of intervention, sometimes the most transformative." },
  { term: "Open but passive", def: "A site with high publicness but low interaction: fully accessible, socially quiet. Common among churchyard parks, and often the cheapest category of opportunity to activate." },
  { term: "Transferability", def: "What another site can borrow from a case study: the governance model, the funding route, the spatial move — noted at the end of every case study entry." },
  { term: "Compatibility", def: "Whether a proposed use fits a site's sacredness, scale and neighbours. A soft-play centre suits a working nave differently from a working cemetery; the toolkit's checklist helps test the match." }
];

/* Publicness ladder — full definition for Toolkit + assessments */
const LADDER = [
  { level: 1, name: "Closed", short: "No public access", desc: "The site or building is locked to the public in ordinary time.", checks: ["Entry only for owners, staff or congregation", "No advertised open times", "Blank or defensive street edge"] },
  { level: 2, name: "By arrangement", short: "Access if you ask", desc: "Access is possible but requires booking, invitation or insider knowledge.", checks: ["Open days or tours only", "Contact required before visiting", "Welcome depends on who you know"] },
  { level: 3, name: "Programmed", short: "Open for events & set uses", desc: "Regular programmed openings — services, concerts, classes, exhibitions — welcome outsiders at set times.", checks: ["Published programme of public events", "Free or low-cost entry to some activities", "Staff or volunteers hosting visitors"] },
  { level: 4, name: "Open hours", short: "Doors open most days", desc: "The site keeps regular, advertised open hours when anyone may enter without a reason.", checks: ["Open five or more days a week", "No ticket needed to enter at least part of the site", "Somewhere to sit, linger or be without spending"] },
  { level: 5, name: "Civic", short: "Open as public realm", desc: "The site functions as public space: open daily, free, and usable without permission or purpose.", checks: ["Open daily including weekends", "Multiple entrances knitted into surrounding streets", "Used by people with no relationship to the institution"] }
];

/* ============================================================
   Detail-page extras: sacredness triangle weights (sum to 1),
   a typical-week timetable, and the list of interventions.
   Keyed by site id; merged in on the detail page.
   ============================================================ */
const DETAIL_EXTRAS = {
  "grand-junction": {
    usesHeadline: "Multi-use community hub",
    triangle: { sacred: 0.45, secular: 0.45, multifaith: 0.10 },
    timetable: [
      { when: "Sunday", what: "Services in the nave; building otherwise closed to visitors" },
      { when: "Monday–Saturday", what: "Café, heritage visiting and community programme" },
      { when: "Weekdays, term time", what: "School visits and learning in the new wing" },
      { when: "Evenings", what: "Concerts, performances and private hire" },
      { when: "Year-round", what: "Undercroft events and wellbeing classes" }
    ],
    interventions: [
      "New west wing by Dow Jones Architects — café, education room, offices, lift and level access (2019)",
      "Conservation of G. E. Street's Grade I interior by Caroe Architecture",
      "Painted undercroft opened up as a performance space",
      "Operating partnership: Paddington Development Trust runs the venue alongside continuing worship"
    ]
  },
  "sheriff-centre": {
    usesHeadline: "Everyday services under one roof",
    triangle: { sacred: 0.40, secular: 0.55, multifaith: 0.05 },
    timetable: [
      { when: "Monday–Saturday, 9–5", what: "Post office, Sanctuary Café, shop and Hullabaloo soft play" },
      { when: "All opening hours", what: "Lady Chapel kept quiet for prayer" },
      { when: "Weekdays", what: "Free debt advice by appointment; community fridge" },
      { when: "Some evenings", what: "Gigs and events, including Sofar Sounds" },
      { when: "Sunday", what: "Worship — the centre closes and the nave returns to the congregation" }
    ],
    interventions: [
      "Full post office and shop installed at the crossing (2014) — the first in a working CofE church",
      "Sanctuary Café in the south aisle with underfloor heating",
      "Two-storey Hullabaloo soft play in the north aisle",
      "Soundproofed Lady Chapel protecting prayer through opening hours",
      "Charity + trading subsidiary structure funding debt advice (2016) and a community fridge (2018)"
    ]
  },
  "garden-museum": {
    usesHeadline: "Museum, garden and café",
    triangle: { sacred: 0.10, secular: 0.85, multifaith: 0.05 },
    timetable: [
      { when: "Daily", what: "Galleries, shop and café; front garden free to enter" },
      { when: "Weekdays, term time", what: "School sessions in the learning studios" },
      { when: "Evenings, monthly", what: "Talks, lates and supper clubs" },
      { when: "Year-round", what: "Weddings, hire and horticultural fairs" }
    ],
    interventions: [
      "Rescue of the deconsecrated church from demolition and founding of the museum (1977)",
      "Copper-clad pavilions and cloister garden around the Tradescant tomb — Dow Jones Architects (2017)",
      "Reversible galleries and learning studios threaded into the listed interior",
      "Ark gallery recreating the Tradescants' cabinet of curiosities",
      "Café placed front-of-house, funding the museum and softening the threshold"
    ]
  },
  "st-dunstan-in-the-east": {
    usesHeadline: "Garden in a ruin",
    triangle: { sacred: 0.25, secular: 0.70, multifaith: 0.05 },
    timetable: [
      { when: "Daily, 8am–dusk", what: "Garden open to all" },
      { when: "Weekday lunchtimes", what: "City workers eating and resting" },
      { when: "Weekends", what: "Visitors, photography and quiet wandering" }
    ],
    interventions: [
      "Decision to keep the Blitz ruin rather than rebuild or clear it",
      "Public garden laid out within the shell by the City of London (opened 1971)",
      "Climbing planting trained over the gothic tracery; fountain and lawns in the nave",
      "Ongoing council maintenance as one of the City's public gardens"
    ]
  },
  "st-georges-gardens": {
    usesHeadline: "Walled public garden",
    triangle: { sacred: 0.30, secular: 0.65, multifaith: 0.05 },
    timetable: [
      { when: "Daily, dawn–dusk", what: "Gardens open to all" },
      { when: "Seasonal", what: "Friends open days, planting and history walks" },
      { when: "Summer", what: "Annual garden party" }
    ],
    interventions: [
      "Kyrle Society conversion of the closed burial ground to a public garden (1880s)",
      "Friends of St George's Gardens formed to fight decline (1994)",
      "Heritage-lottery restoration with Camden; reopened spring 2001",
      "Continuing Friends stewardship: events, planting, watching the walls"
    ]
  },
  "tower-hamlets-cemetery-park": {
    usesHeadline: "Woodland commons and classroom",
    triangle: { sacred: 0.20, secular: 0.65, multifaith: 0.15 },
    timetable: [
      { when: "Daily", what: "Park and woodland open" },
      { when: "Weekends", what: "Volunteer conservation days" },
      { when: "Weekdays, term time", what: "School science at the Soanes Centre" },
      { when: "Spring–summer", what: "Bat walks, history tours and occasional festivals" }
    ],
    interventions: [
      "Closure to burials and transfer to public ownership (1966)",
      "Deliberate management as woodland rather than clearance or manicure",
      "Friends of Tower Hamlets Cemetery Park founded (1990); now co-manage the park",
      "Soanes Centre built at the gate for environmental education",
      "Local Nature Reserve designation, trails and interpretation"
    ]
  },
  "lambeth-palace-library": {
    usesHeadline: "Archive with a public edge",
    triangle: { sacred: 0.55, secular: 0.40, multifaith: 0.05 },
    timetable: [
      { when: "Monday–Friday", what: "Reading room open to registered researchers" },
      { when: "Monday–Friday", what: "Foyer and exhibition cases free to enter" },
      { when: "Select days", what: "Guided tours of the building" },
      { when: "Occasional", what: "Garden open days and events on the ninth-floor terrace" }
    ],
    interventions: [
      "New 'occupied wall' building by Wright & Wright — the first on the site in 185 years (2020)",
      "Public foyer with free exhibitions; framed glimpse of the Archbishop's garden at the entrance",
      "Biodiverse pond fed by rainwater from the roofs; garden edge protected from road noise",
      "Nine-storey tower with a terrace used for public events",
      "Passive archive conditions, photovoltaics and BREEAM Excellent performance"
    ]
  },
  "st-stephen-walbrook": {
    usesHeadline: "Working church, open room",
    triangle: { sacred: 0.60, secular: 0.38, multifaith: 0.02 },
    timetable: [
      { when: "Monday–Friday, ~10–4", what: "Church open to visitors for quiet and heritage" },
      { when: "Tuesday & Friday lunchtimes", what: "Free concerts under the dome" },
      { when: "Thursday", what: "Sung Eucharist" },
      { when: "Weekends", what: "Closed — a non-residential City parish" }
    ],
    interventions: [
      "Samaritans founded from the vestry telephone by rector Chad Varah (1953)",
      "Henry Moore's round travertine altar installed after an ecclesiastical court case (1987)",
      "Seating gathered in the round beneath Wren's dome — a furniture-scale reordering",
      "Open-door weekday policy with free lunchtime concert programme"
    ]
  },
  "st-patricks-wapping": {
    usesHeadline: "Parish precinct in phases",
    triangle: { sacred: 0.65, secular: 0.30, multifaith: 0.05 },
    timetable: [
      { when: "Sunday & weekdays", what: "Mass and parish life" },
      { when: "By arrangement", what: "St Patrick's Studios visits and open weekends" },
      { when: "Seasonal", what: "Kitchen-garden volunteering; harvest sales for CAFOD" },
      { when: "In progress", what: "Phase 1 restoration of the church interior" }
    ],
    interventions: [
      "Artists' studios established in the closed parish school (2002)",
      "Volunteer kitchen garden created on waste ground behind the church (2005)",
      "Precinct masterplan with Dow Jones Architects; phase 1 restoration underway"
    ]
  },
  "st-johns-churchyard-wapping": {
    usesHeadline: "Quiet churchyard park",
    triangle: { sacred: 0.20, secular: 0.75, multifaith: 0.05 },
    timetable: [
      { when: "Daily", what: "Churchyard park open" },
      { when: "Otherwise", what: "Unprogrammed — the opportunity" }
    ],
    interventions: [
      "Churchyard converted to a public park by the borough (1951)",
      "Since then: essentially none — which is exactly the gap this entry records"
    ]
  },
  "paddington-old-cemetery": {
    usesHeadline: "Working cemetery and green space",
    triangle: { sacred: 0.25, secular: 0.60, multifaith: 0.15 },
    timetable: [
      { when: "Daily", what: "Grounds open as cemetery and green space" },
      { when: "Ongoing", what: "Burials and the columbarium (2021)" },
      { when: "Seasonal", what: "Friends events; apiary producing 'Tombstone honey'" },
      { when: "Currently", what: "Chapels closed — repair and reuse strategy in development" }
    ],
    interventions: [
      "Cemetery sold by Westminster to Brent for £5, sparking community organisation (1986)",
      "Friends of Paddington Old Cemetery stewardship and events",
      "Columbarium added (2021); apiary established in the grounds",
      "London Historic Buildings Trust repair-and-reuse strategy for the twin chapels (2023– )"
    ]
  }
};
