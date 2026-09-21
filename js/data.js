/* ============================================================
   PLANNING WITH RELIGION — site database
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
    summary: "A Grade I Victorian Gothic church beside the canal, largely closed for decades, restored as a working parish church that is also an arts venue, café and community hub.",
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
      "G. E. Street's church of 1867–78 is one of London's finest Victorian Gothic interiors, but by the 2000s it stood largely closed to the public and on the heritage-at-risk register, in one of Westminster's most deprived wards. Rather than sell or mothball it, the parish joined a consortium with the Diocese of London and the Paddington Development Trust, supported by Westminster City Council, to reimagine the building as both a parish church and a shared cultural venue.",
      "The National Lottery Heritage Fund awarded £3.6 million towards a project whose total cost approached £7 million. Caroe Architecture led the conservation of the church itself — recognised with the King of Prussia Gold Medal in 2018 — while Dow Jones Architects added a compact new wing on a steep, awkward sliver of land at the west end, holding a café, education room, offices, lift and level access, and opening up the painted undercroft as a performance space. Construction ran from July 2017 to July 2019, and the Lord Mayor of Westminster declared Grand Junction open in October 2019 — roughly twelve years after planning began.",
      "The result is a genuinely mixed economy of uses under one roof: Sunday and weekday worship continues in the nave, while the same spaces host concerts, exhibitions, school visits, wellbeing classes, heritage tours and private hire. The venue is operated by the Paddington Development Trust, a local regeneration charity, with trading income supporting a free community and education programme. Around 200 trainees, apprentices and volunteers were involved during delivery."
    ],
    whatMadeItWork: [
      "A consortium model: the congregation kept its home while a development trust brought regeneration expertise, fundraising capacity and an operating business plan.",
      "The new wing solved the practical blockers to publicness — no toilets, no level access, no warm room — rather than treating them as afterthoughts.",
      "Sacred and secular uses were timetabled, not partitioned: worship, café and concerts share the same architecture at different hours.",
      "Long patience: development funding in stages, with about twelve years from first plans to opening."
    ],
    assessment: {
      publicnessNotes: "Open Monday to Saturday with a free café and regular free events; some spaces close for services and private hire. Clear street presence but entry is via a housing-estate close, so signage and programming do the inviting.",
      interactionNotes: "High mix of ages and cultures; paid and free activities sit side by side, and the café gives strangers a reason to linger without a ticket."
    },
    opportunity: {
      headline: "Reopen the everyday front door",
      dimensions: ["Use"],
      oppScale: "Small",
      currentState: "In use but underused",
      whoCouldLead: "Operator in place",
      note: "The café — the building's everyday, free, no-reason-needed way in — was closed on the site visit recorded here. Regular café hours, or a community café operator in the space, would restore the use that does most of the site's inviting, without any building work."
    },
    quickLinks: [
      { label: "grandjunction.org.uk", url: "https://grandjunction.org.uk" }
    ],
    sources: [
      { label: "National Lottery Heritage Fund — grant announcements", url: "https://www.heritagefund.org.uk/news/communities-unite-future-st-mary-magdalene" },
      { label: "Architects' Journal — building study of the Dow Jones wing", url: "https://www.architectsjournal.co.uk/buildings/a-broad-church-dow-joness-restoration-of-st-mary-magdalene" },
      { label: "Grand Junction — project history", url: "https://exhibition.grandjunction.org.uk/" }
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
    summary: "A working Victorian parish church that took in the local post office when it closed — and grew a café, soft play, debt advice service and food project around it.",
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
      "When West Hampstead's postmaster decided to retire in 2012 and close his branch, the vicar of St James' — Arthur Blomfield's church of 1885–88, directly opposite the tube station — spotted a tweet from a local estate agent looking for somewhere to rehouse the post office. He offered the church. What followed was two years of business planning, fundraising, consultation and legal wrangling before building work began in April 2014; the Sherriff Centre opened that July, reportedly the first full post office to operate inside a working Church of England church.",
      "The conversion re-planned the nave rather than the whole building: pews were drawn back towards the altar for Sunday worship, the south aisle became the Sanctuary Café with underfloor heating, the north aisle a two-storey soft play called Hullabaloo, and the crossing a shop and post office counter. A soundproofed Lady Chapel stays available for private prayer through opening hours — a small move that protects quietness inside a deliberately noisy building.",
      "The structure matters as much as the spaces. The Sherriff Centre is a registered charity with a trading subsidiary; profits from the post office, café, soft play and event hire fund a free, FCA-registered debt advice service (from 2016), Camden's first community fridge (2018), and the Food Share Project set up during Covid. The building now also hosts regular gigs, including a partnership with Sofar Sounds begun in 2019."
    ],
    whatMadeItWork: [
      "It answered a real, everyday need — keeping a post office — so footfall was guaranteed from day one and no one had to be persuaded to visit a church.",
      "Multiple income streams (post office, café, play, hire) were planned together as one business model, cross-subsidising the charitable work.",
      "Worship was re-planned, not displaced: services continue on Sundays, and the Lady Chapel holds space for prayer all week.",
      "Speed and pragmatism: a congregation-scale project delivered without major heritage grants, funded by loans, local fundraising and trading."
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
    summary: "A medieval and Victorian church saved from demolition in 1977 and remade as Britain's museum of gardens, with copper-clad pavilions, a cloister garden and a busy café.",
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
      "St Mary-at-Lambeth, next to Lambeth Palace, was deconsecrated in 1972 and scheduled for demolition. Rosemary and John Nicholson founded a trust in 1977 to save it, drawn by the churchyard tomb of the seventeenth-century royal gardeners John Tradescant, father and son — and the world's first museum of garden history opened inside the redundant church.",
      "In 2014 the museum was awarded £3.51 million by the Heritage Lottery Fund for a transformative second phase designed by Dow Jones Architects. After an eighteen-month closure it reopened in May 2017 with the display space for the collection doubled, new galleries and learning studios threaded reversibly into the historic interior, and a cluster of copper-clad pavilions forming a cloister garden — planted with Dan Pearson — around the Tradescant tomb. A recreated 'Ark' gallery shows objects from the Tradescants' cabinet of curiosities, loaned back by the Ashmolean.",
      "The museum is an independent charity, sustained by admissions, a well-known café, events and fundraising. Its ambitions keep spilling outward: it has led proposals for Lambeth Green, a new public park on the surrounding land, extending the logic of the project from building to neighbourhood."
    ],
    whatMadeItWork: [
      "A single strong idea — gardens — gave a redundant church a public purpose that honours its own churchyard history rather than erasing it.",
      "Reversible intervention inside the listed interior kept conservators onside and keeps future options open.",
      "The café and events business is front-of-house, not an add-on: it funds the museum and gives locals a free reason to come in.",
      "A founder-led rescue matured into a professional charity able to win major lottery funding forty years on."
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
      { label: "Museums Association — review of the 2017 reopening", url: "https://www.museumsassociation.org/museums-journal/reviews/2017/10/02102017-the-garden-museum-london/" },
      { label: "Dow Jones Architects — project page", url: "https://dowjonesarchitects.com/projects/garden-museum-phase-2/" }
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
    summary: "A Wren-towered church left ruined by the Blitz and never rebuilt; the City opened a public garden inside its shell in 1971. Now one of London's best-loved quiet places.",
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
      "St Dunstan in the East was patched and rebuilt for centuries — including a celebrated tower and needle spire by Christopher Wren, completed in 1701 — before German bombing in 1941 gutted the church. The tower and shell survived, but the parish was never re-formed and the building never rebuilt.",
      "Instead of clearance, the City of London Corporation took a quietly radical decision: it kept the ruin and, in 1971, opened a public garden within it. Climbing plants were trained over the gothic window tracery, a fountain placed in the nave, and lawns and benches set among the walls. The intervention was modest in cost and touch — planting, paths, seats — but total in effect: the ruin itself became the architecture of the garden.",
      "Half a century on it is a beloved lunchtime refuge for City workers, a ceremony and photography destination, and one of the most photographed 'secret' places in London — which brings its own pressures of crowding and wear to a very small site."
    ],
    whatMadeItWork: [
      "Restraint: the ruin was stabilised and inhabited rather than restored or replaced — the cheapest move was also the most powerful.",
      "Public ownership and daily opening made it unconditionally accessible from day one.",
      "Planting design did the emotional work, softening a war ruin into a place of calm without a single interpretive panel.",
      "A sacred trace remains: the consecrated ground and surviving tower give the garden its particular stillness."
    ],
    assessment: {
      publicnessNotes: "Fully open daily with no threshold at all — the archetype of L5 civic publicness on former church land.",
      interactionNotes: "Deliberately low-key: people come to be quiet alongside strangers rather than to meet them. Interaction is ambient, not programmed."
    },
    opportunity: {
      headline: "Loved almost too much",
      dimensions: ["Interaction", "Temporality"],
      oppScale: "Small",
      currentState: "In use but underused",
      whoCouldLead: "Council-owned",
      note: "Visitor pressure now outstrips stewardship: the garden absorbs heavy social-media-driven footfall with no programming, interpretation or volunteer presence. Light-touch seasonal programming — early-morning quiet hours, occasional tended-garden volunteering, temporary interpretation of the Wren tower — could distribute use across the day and recruit care without breaking the spell."
    },
    quickLinks: [
      { label: "City of London — gardens", url: "https://www.cityoflondon.gov.uk" }
    ],
    sources: [
      { label: "City of London Corporation — St Dunstan in the East garden", url: "https://www.cityoflondon.gov.uk/things-to-do/parks-and-green-spaces/city-gardens" },
      { label: "London Gardens Trust — burial ground gardens", url: "https://londongardenstrust.org/features/burial.htm" }
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
    summary: "One of London's first detached burial grounds (1714), made a public garden in the 1880s, rescued from decline by a Friends group and a lottery-funded restoration in 2001.",
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
      "Bought in 1713 and opened for burials in 1714, this was one of the first London burial grounds sited away from the churches it served — St George's Bloomsbury and St George the Martyr, Holborn — complete with a high wall against body-snatchers. Closed by overcrowding in 1855, it was converted to a public garden in the 1880s by the Kyrle Society, part of Octavia and Miranda Hill's campaign to turn dead ground into 'outdoor sitting rooms' for the poor. The ground remains consecrated.",
      "A century of use ended in decline: by the early 1990s the gardens were overgrown and unsafe. In 1994 neighbours formed the Friends of St George's Gardens and persuaded Camden to bid to the Heritage Lottery Fund's Urban Parks Programme in 1997. The restored gardens — Grade II* on the national landscape register — reopened in spring 2001 and are maintained by Camden with the Friends as active stewards, programming open days and watching planning applications around the walls.",
      "It is a textbook double intervention, 120 years apart: first the Victorian conversion of a burial ground to a garden, then a community-led restoration when that public inheritance was nearly lost."
    ],
    whatMadeItWork: [
      "A Friends group supplied what the council alone could not: constant eyes, advocacy, institutional memory and a credible community voice for the funding bid.",
      "Restoration respected the site's dual nature — tombs, monuments and consecrated ground kept legible within an everyday park.",
      "Enclosure works for it: walled, entered from quiet side streets, it offers protected calm in a dense district where most green squares are locked and private.",
      "The Victorian 'open sitting room' idea is a transferable framing planners still understand."
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
      { label: "Parks & Gardens — register entry", url: "https://www.parksandgardens.org/places/st-georges-gardens-bloomsbury" }
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
    summary: "A 'Magnificent Seven' Victorian cemetery closed to burials in 1966 and re-grown as a woodland park and nature reserve, run with a charity of Friends as East London's outdoor classroom.",
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
      "Opened in 1841 as the City of London and Tower Hamlets Cemetery — the last of the 'Magnificent Seven' commercial Victorian cemeteries — the ground took some 270,000 burials, most of them East Enders in public graves, before it was closed to burials in 1966 and taken into public ownership.",
      "Rather than being cleared or manicured, the cemetery was allowed — and later deliberately managed — to become woodland. Since 1990 the Friends of Tower Hamlets Cemetery Park, now a substantial charity working alongside the borough, have stewarded it as a Local Nature Reserve: the largest woodland in the East End, threaded with monuments, wildflower meadows and trails. The Soanes Centre at the gate hosts thousands of schoolchildren a year for outdoor science, and a rolling programme of volunteering, bat walks, history tours and occasional festivals keeps the park socially alive.",
      "It shows a different fate for sacred ground: not conversion to a new building use, but a slow, deliberate change of register — from burial landscape to living commons — in which remembrance, ecology and everyday recreation coexist."
    ],
    whatMadeItWork: [
      "Time as a design tool: fifty years of managed re-wilding produced a landscape no capital project could buy.",
      "A charity–council partnership gives daily care, environmental education and fundraising capacity beyond parks-department budgets.",
      "Programming is layered gently over the sacred landscape — learning and nature first, events sized to the place.",
      "Openness round the clock makes it true civic infrastructure for a dense, park-poor borough."
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
      { label: "Friends of Tower Hamlets Cemetery Park", url: "https://www.fothcp.org" },
      { label: "London Gardens Trust — cemetery histories", url: "https://londongardenstrust.org/features/burial.htm" }
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
    summary: "The Church of England's archive rehoused in a new brick 'inhabited wall' at the edge of the Archbishop's garden — a study in carefully rationed publicness on sacred land.",
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
      "Lambeth Palace Library, founded in 1610 and one of England's earliest public libraries, holds the Church of England's archive — after the Vatican's, the most important collection of religious books and manuscripts in Europe. By the 2010s the collection was outgrowing and even damaging the Palace's Tudor rooms, and the Church Commissioners held a competition, won by Wright & Wright Architects in 2015 over a shortlist that included Zaha Hadid Architects.",
      "The £23.5 million, 5,400 m² building, completed in 2020 and opened in 2021, is the first new structure on the Grade I site in 185 years. It takes the form of a kinked, red-brick 'occupied wall' along Lambeth Palace Road, rising to a nine-storey tower with a public viewing terrace for special events. The wall does double duty: it protects the Archbishop's ten-acre garden from traffic noise and pollution, channels rainwater to a new biodiverse pond, and gives passers-by framed glimpses of the garden through the entrance — a deliberate gift to the street from one of London's largest private gardens.",
      "Its publicness is real but rationed: the foyer and exhibition cases are free to enter, the reading room open to any registered researcher, the terrace and garden accessible on open days and events. Critics noted the absence of a café or everyday garden access — which is exactly what makes it a useful case study in how institutions calibrate openness."
    ],
    whatMadeItWork: [
      "A clear institutional need (saving the collection) carried an ambitious civic by-product: a better street, a protected garden, a public foyer.",
      "The 'wall that gives back' is a transferable idea for sacred sites with hard edges — publicness at the threshold even where the interior must stay controlled.",
      "Environmental performance (passive archive conditions, photovoltaics, the pond) built the case with commissioners and planners alike.",
      "Honest limits: by-appointment access is stated plainly rather than dressed up, keeping trust with visitors."
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
      note: "The building already performs at its edge — the garden glimpse, the foyer, the terrace. Modest additions would widen the welcome without touching the archive: regular garden open hours at the new pond, a small kiosk café serving Archbishop's Park next door, and a standing schools programme using the exhibition space."
    },
    quickLinks: [
      { label: "lambethpalacelibrary.info", url: "https://www.lambethpalacelibrary.info" }
    ],
    sources: [
      { label: "Architects' Journal — building study", url: "https://www.architectsjournal.co.uk/buildings/building-study-lambeth-palace-library-by-wright-wright" },
      { label: "RIBA Journal — review of public access", url: "https://www.ribaj.com/buildings/lambeth-palace-library-wright-and-wright-newbuild" },
      { label: "Lambeth Palace Library — the building", url: "https://www.lambethpalacelibrary.info/about-lambeth-palace-library/our-building/" }
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
    summary: "Wren's domed masterpiece, reordered around a Henry Moore altar, birthplace of the Samaritans — a working church that keeps reinventing how a sacred room serves the city.",
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
      "Rebuilt by Christopher Wren in 1672–79 after the Great Fire, St Stephen Walbrook carries the first true dome in an English church — Wren's rehearsal for St Paul's — over a compact City parish room. Its modern history is a sequence of small, radical acts of public service from within active worship.",
      "In 1953 the rector, Chad Varah, answered what he called the first telephone helpline for the suicidal from the vestry here, founding the Samaritans — arguably the most consequential piece of 'social infrastructure' ever launched from a London church. Three decades later, patron Peter Palumbo commissioned Henry Moore to carve a round travertine altar, installed in 1987 after an ecclesiastical court case, with seating gathered in the round beneath the dome. The reordering turned a processional interior into a circle — a spatial argument for gathering as equals.",
      "Today the church opens its doors on weekdays for visitors, silence and free lunchtime concerts, serving the Square Mile's workers as a pocket of reflection amid offices — a reminder that publicness can be a matter of liturgy and furniture as much as extensions and cafés."
    ],
    whatMadeItWork: [
      "Reordering, not extension: moving the altar and seats — a furniture-scale intervention — transformed how the room holds people.",
      "An open-door weekday policy matches the rhythms of its actual public: City workers on lunch breaks, not Sunday parishioners.",
      "Cultural programming (concerts, art) is free and frequent, folding secular visitors into a sacred room without conversion pressure.",
      "The Samaritans story shows a church inventing a service the state hadn't imagined — a benchmark for what faith infrastructure can seed."
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
      { label: "St Stephen Walbrook — history and visiting", url: "https://ststephenwalbrook.net" },
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
    summary: "A Grade II 'Tuscan barn' parish church growing public life organically — artists' studios in the old school, a volunteer kitchen garden — with a restoration masterplan now underway.",
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
      "Built in 1879 to Francis Tasker's designs — a plain Tuscan-barn exterior hiding a North Italian Renaissance interior — St Patrick's has served Wapping's Catholic community for nearly 150 years. Its recent story is one of organic, congregation-scale adaptation rather than a single capital project.",
      "When the parish primary school closed in 2002, the parish priest invited artists into the tall, north-lit old school building: St Patrick's Studios has grown into a community of working artists of different disciplines, with workshops and shared prayer, welcoming practitioners of all Christian traditions and none. In 2005 a group of volunteers with no gardening experience turned waste ground behind the church into a productive kitchen garden whose harvests have raised thousands of pounds for the development charity CAFOD.",
      "The parish is now working with Dow Jones Architects on a precinct masterplan whose first phase — restoring the tired church interior and its artworks — aims to make the whole site more inclusive, accessible, sustainable and welcoming. St Patrick's is therefore both case study and opportunity: proof of what incremental, almost-free interventions can do, and a live site whose next phases are still being shaped."
    ],
    whatMadeItWork: [
      "Cost-nothing beginnings: an empty school and a scrap of waste ground were offered, not developed — the community did the rest.",
      "Each use fits the sacred setting: contemplative studios, a giving garden — publicness in the key of the parish rather than against it.",
      "Two decades of small successes built the confidence and case for a formal masterplan.",
      "Faith networks (CAFOD, the Archdiocese) provided purpose and support that purely secular meanwhile projects often lack."
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
      note: "Phase 1 restores the church; later phases could open the precinct itself. Candidate moves: regular public open hours once restoration completes, a shared courtyard between church, studios and garden, studio open-weekends tied to Wapping's growing visitor trail, and community growing plots extending the kitchen garden."
    },
    quickLinks: [
      { label: "parish.rcdow.org.uk/wapping", url: "https://parish.rcdow.org.uk/wapping/" },
      { label: "stpatricksstudios.com", url: "https://stpatricksstudios.com/" }
    ],
    sources: [
      { label: "Dow Jones Architects — St Patrick's Wapping masterplan", url: "https://dowjonesarchitects.com/projects/st-patricks-wapping/" },
      { label: "St Patrick's Studios — history", url: "https://stpatricksstudios.com/" },
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
    summary: "The churchyard of Wapping's bombed parish church — a public park since 1951, framed by the surviving 1756 tower, chest tombs and the old dock wall — open every day, and almost silent.",
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
      "St John's was Wapping's parish church from 1694; rebuilt in 1756 by Joel Johnson, it was destroyed in the Blitz, leaving the baroque-capped tower — its working clock still read across the river — and a shell later converted to flats. Across Scandrett Street, the old churchyard was made a public park in 1951, keeping its eighteenth-century chest tombs and backing onto the high wall of the former London Docks. The old charity school beside it, with its Coade-stone bluecoat figures, completes an extraordinary surviving ensemble.",
      "Today the churchyard is the classic 'open but passive' site: fully public, historically rich, and socially quiet. There is no programming, little interpretation, and few reasons to stop beyond a bench and a view of the tower. In a neighbourhood short of shared space and long on history, that is an opportunity rather than a failing — the hard work of assembly and access was done in 1951; what is missing is animation."
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
      note: "Small, reversible moves would change this place's temperature: interpretation linking tower, tombs, school and dock wall; a friends-style group seeded from surrounding streets; seasonal meanwhile uses — an annual open-tower day, a summer story-trail with the primary school, community planting along the dock wall. Costs sit firmly in the 'under £100k, under two years' band, making it an ideal first project for a new stakeholder group."
    },
    quickLinks: [],
    sources: [
      { label: "Wikipedia — St John's Church, Wapping", url: "https://en.wikipedia.org/wiki/St_John%27s_Church,_Wapping" },
      { label: "Know Your London — St John, Scandrett Street", url: "https://knowyourlondon.wordpress.com/2018/06/08/st-john-scandrett-street-wapping/" }
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
    summary: "One of the first cemeteries after the 1852 Burial Act, sold to Brent for £5 in 1986 — a well-loved green space whose twin Gothic chapels stand empty at its heart, with reuse plans gathering pace.",
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
      "Laid out in 1855 by Thomas Little for the Paddington Burial Board — one of the first public cemeteries after the 1852 Metropolitan Interment Act — the cemetery arranges horseshoe paths around a centrepiece of twin Gothic chapels in Kentish ragstone, one Anglican, one Nonconformist, both Grade II listed. When burials dwindled, Westminster sold the whole cemetery to the London Borough of Brent in 1986 for £5, sparking the community action that became the Friends of Paddington Old Cemetery.",
      "The grounds today are a Grade II registered landscape and a genuine local green space: still an active cemetery, but also a place of mature trees, wildflower areas, a war memorial, an apiary producing 'Tombstone honey' and, since 2021, a columbarium. The gap at its heart is architectural: the chapels have been vacant long-term and need substantial repair. Since 2023 the London Historic Buildings Trust has been working with Brent on a viable repair and reuse strategy, with funding secured towards returning the chapels to community use.",
      "The site distils a common London condition: high-quality, well-used sacred landscape wrapped around empty sacred buildings — with an organised Friends group, a willing council and a heritage trust already at the table."
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
      note: "The pieces are aligned: listed chapels, an engaged Friends group, Brent's backing and the London Historic Buildings Trust leading a repair-and-reuse strategy with initial funding secured. Compatible uses tested elsewhere in this database — café and community room (Grand Junction), nature-learning base (Tower Hamlets' Soanes Centre), quiet cultural programming (St Stephen Walbrook) — all fit a working cemetery's register of respect."
    },
    quickLinks: [
      { label: "fopoc.com", url: "https://www.fopoc.com/" }
    ],
    sources: [
      { label: "London Historic Buildings Trust — chapels project", url: "https://londonhistoricbuildings.org.uk/paddington-old-chapels/" },
      { label: "Friends of Paddington Old Cemetery — history", url: "https://www.fopoc.com/new-page-4-1" },
      { label: "Historic England — register entry", url: "https://historicengland.org.uk/listing/the-list/list-entry/1001542" }
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
