/* ============================================================
   PLANNING WITH RELIGION — the evidence base
   ------------------------------------------------------------
   The standardised points that apply to every intervention and
   every site, drawn from published community-led design guidance
   and kept in one place so the toolkit, the intervention library
   and the site studio all say the same thing and cite the same
   sources.

   Everything here is paraphrased into the database's own voice.
   SOURCES carries the link back to the original in each case, and
   every theme, step and tip names the resource it comes from, so
   a reading produced by this site can be traced to its evidence.

   Load order: data.js → detail-data.js → evidence.js → interventions.js
   ============================================================ */


/* ------------------------------------------------------------
   1. SOURCES — the published guidance this toolkit stands on
   ------------------------------------------------------------ */
const SOURCES = {
  glasshouse: {
    id: "glasshouse",
    short: "The Glass-House",
    title: "Making Buildings Work for Your Community: Design, Refurbishment and Retrofit",
    author: "The Glass-House Community Led Design, with Wright & Wright Architects, for the Asset Transfer Unit",
    year: "2011",
    url: "https://theglasshouse.org.uk/",
    note: "Ten design themes, each a short set of questions to ask of a community building, illustrated with refurbishment projects. The source of the design checklist used throughout this site."
  },
  edpLeadership: {
    id: "edpLeadership",
    short: "EDP — community-led transformation",
    title: "Community-led transformation of historic places of worship: some key considerations",
    author: "Becky Payne for Empowering Design Practices (The Open University, The Glass-House, Historic England, NLHF, HRBA)",
    year: "2021",
    url: "https://www.empoweringdesign.net/",
    note: "Leadership, community engagement, scale and style, and capacity — the four things that decide whether a place-of-worship project reaches its potential."
  },
  edpStrategy: {
    id: "edpStrategy",
    short: "EDP — engagement strategy",
    title: "Tips for your community engagement strategy",
    author: "Sophia de Sousa, The Glass-House, for Empowering Design Practices",
    year: "2019",
    url: "https://www.empoweringdesign.net/uploads/1/2/8/5/12856329/edp_community_engagement_strategy_online.pdf",
    note: "Seven questions that turn consultation into a design process people can actually influence."
  },
  edpCount: {
    id: "edpCount",
    short: "EDP — making engagement count",
    title: "Making community engagement count",
    author: "The Glass-House and The Open University for Empowering Design Practices",
    year: "2019",
    url: "https://www.empoweringdesign.net/uploads/1/2/8/5/12856329/edp_making_engagement_count_online.pdf",
    note: "How to gather evidence while you engage, so that consultation produces something a funder or a planning officer will accept."
  },
  edpDesignThinking: {
    id: "edpDesignThinking",
    short: "EDP — design thinking guide",
    title: "A Design Thinking Guide: how to think about changes in historic places of worship",
    author: "Empowering Design Practices",
    year: "2020",
    url: "https://design-thinking.empoweringdesign.net/",
    note: "A framework for forming a design rationale for change in a listed or consecrated building."
  },
  edpExplore: {
    id: "edpExplore",
    short: "EDP — Explore Design",
    title: "Explore Design: Community Buildings",
    author: "Empowering Design Practices",
    year: "2020",
    url: "https://www.empoweringdesign.net/explore-design-community-buildings.html",
    note: "Ten design themes for community buildings — access, context, delight, enterprise, flexibility, identity, legibility, maintenance, resources, security — with illustrated examples."
  },
  crossingThreshold: {
    id: "crossingThreshold",
    short: "Crossing the Threshold",
    title: "Crossing the Threshold: a step-by-step guide to developing your place of worship for wider community use",
    author: "Diocese of Hereford with the Historic Religious Buildings Alliance, ChurchCare, the National Churches Trust and Purcell",
    year: "2017",
    url: "https://www.hereford.anglican.org/parish-support/community-partnership/crossing-the-threshold-toolkit/crossing-the-threshold-toolkit.php",
    note: "The practical chapters: vision, community audit, team and skills, governance, options appraisal, permissions, fundraising, sustainability."
  },
  churchcare: {
    id: "churchcare",
    short: "ChurchCare / CBC",
    title: "Church Buildings Council — managing your building, faculty and reordering guidance",
    author: "Church of England Cathedral and Church Buildings Division",
    year: "current",
    url: "https://www.churchofengland.org/resources/churchcare",
    note: "Statements of Need and Significance, the faculty process, and how community benefit is weighed against harm to heritage significance."
  },
  openChurches: {
    id: "openChurches",
    short: "Open Churches Toolkit",
    title: "Open Churches Toolkit — opening your building safely and welcomingly",
    author: "Diocese of London",
    year: "current",
    url: "https://www.london.anglican.org/support/buildings-and-property/open-churches-toolkit/",
    note: "The opening strategy: when to open, how to manage risk, and what kind of welcome to offer."
  },
  nationalChurches: {
    id: "nationalChurches",
    short: "National Churches Trust",
    title: "Grants, maintenance and community use advice",
    author: "National Churches Trust",
    year: "current",
    url: "https://www.nationalchurchestrust.org/",
    note: "Small and medium capital grants, and project development grants for exactly the early stage this toolkit sits in."
  },
  heritageFund: {
    id: "heritageFund",
    short: "National Lottery Heritage Fund",
    title: "Heritage funding — grants from £10,000",
    author: "The National Lottery Heritage Fund",
    year: "current",
    url: "https://www.heritagefund.org.uk/funding",
    note: "The main capital route for listed places of worship; requires evidenced community engagement and an activity plan, not only building works."
  },
  ahf: {
    id: "ahf",
    short: "Architectural Heritage Fund",
    title: "Project viability and development grants, and loans for historic buildings",
    author: "Architectural Heritage Fund",
    year: "current",
    url: "https://ahfund.org.uk/",
    note: "Funds feasibility, options appraisals and business planning — the stage most groups skip and then regret."
  },
  planningAid: {
    id: "planningAid",
    short: "Planning Aid England",
    title: "Free, independent planning advice for communities",
    author: "Royal Town Planning Institute",
    year: "current",
    url: "https://www.rtpi.org.uk/planning-aid-england/",
    note: "Free professional planning advice for groups that cannot pay consultant fees."
  },
  cae: {
    id: "cae",
    short: "Centre for Accessible Environments",
    title: "Inclusive design and access guidance",
    author: "Centre for Accessible Environments",
    year: "current",
    url: "https://cae.org.uk/",
    note: "Inclusive design and access to the built environment for disabled and older people."
  },
  plunkett: {
    id: "plunkett",
    short: "Plunkett Foundation",
    title: "Community businesses in active places of worship",
    author: "Plunkett Foundation",
    year: "2019",
    url: "https://plunkett.co.uk/",
    note: "Running a shop, café or post office inside a working place of worship: governance, trading subsidiaries, and the community share model."
  },
  historicEngland: {
    id: "historicEngland",
    short: "Historic England",
    title: "Places of worship — advice on adaptation and new uses",
    author: "Historic England",
    year: "current",
    url: "https://historicengland.org.uk/advice/caring-for-heritage/places-of-worship/",
    note: "What listing does and does not prevent, and how to argue for change in a significant building."
  },
  npff: {
    id: "npff",
    short: "NPPF",
    title: "National Planning Policy Framework",
    author: "Ministry of Housing, Communities and Local Government",
    year: "2024",
    url: "https://www.gov.uk/government/publications/national-planning-policy-framework--2",
    note: "Places of worship are named as community facilities and public service infrastructure; harm to heritage assets must be outweighed by clear public benefit."
  },
  atu: {
    id: "atu",
    short: "Asset Transfer Unit case studies",
    title: "Community asset transfer case studies",
    author: "Asset Transfer Unit / Locality",
    year: "2011",
    url: "https://locality.org.uk/",
    note: "The refurbishment projects behind the Glass-House guide — Burslem School of Art, The Priory Centre, Tremayne Hall, Acacia Centre, Elsie Whiteley, Old Lambeth Walk, Pelton Fell, St Paul's Bow, Manningham Mills."
  }
};

const SOURCE_LIST = Object.values(SOURCES);


/* ------------------------------------------------------------
   2. THE DESIGN CHECKLIST — ten themes
   ------------------------------------------------------------
   After The Glass-House's "Making Buildings Work for Your
   Community" (2011) and EDP's Explore Design. The questions are
   paraphrased; the structure and the ten themes are theirs.

   Every intervention in the library names the themes it touches,
   so that a design conversation starts from the same ten prompts
   whatever the site.
   ------------------------------------------------------------ */
const GH_THEMES = [
  {
    key: "context",
    name: "Context",
    tone: "red",
    lead: "How the building sits in its street and its neighbourhood.",
    questions: [
      "How does the building sit within its physical and social context?",
      "Do the building and the open space around it fit their surroundings?",
      "Does the use complement — rather than duplicate — other amenities and services nearby?",
      "Would you rely on passing trade, and is the building actually in a good place for that?"
    ],
    inPractice: "Burslem School of Art's refurbishment changed the character of a whole street; The Priory Centre was constrained less by its Grade I listing than by having no space around it. Read the site and the street together.",
    forWorship: "A church's context includes its congregation's travel pattern. A loyal congregation that drives in from a distance is not the same as a local one — it changes who is around the building on a Tuesday.",
    source: "glasshouse"
  },
  {
    key: "identity",
    name: "Identity",
    tone: "buff",
    lead: "Whether a stranger can tell what this place is and who it is for.",
    questions: [
      "Does the building have a clear identity?",
      "Is it clear what the building is, and who it is for?",
      "Is there a consistent aesthetic and design language?",
      "Does the building use branding — signage, symbols, a name — to say so?"
    ],
    inPractice: "The Priory Centre made a feature of the old school coat hooks, keeping the building's past legible while giving it a new logo. Identity is as much about what you keep as what you add.",
    forWorship: "The hardest identity question in a shared church: can people tell it is still a place of worship? At the Sherriff Centre the design is so successful as a centre that the worship reads faintly — the group has since looked for small ways to make the living church visible again.",
    source: "glasshouse"
  },
  {
    key: "legibility",
    name: "Connectivity & legibility",
    tone: "red",
    lead: "Whether people can find their way in, and through.",
    questions: [
      "Is it clear where people should go when they arrive?",
      "Is movement inside practical and easy to navigate, with and without signs?",
      "How well do internal spaces connect and relate to each other — can you see one from another?",
      "Do you get views that orient you, or does the plan hide what is going on?"
    ],
    inPractice: "At Burslem the atrium is light and welcoming but gives no clue to the activity behind the walls, and there is no signage for the organisations inside — tenants find it clear, newcomers do not. At St Paul's, glass between spaces lets you see what is happening and makes the place easy to read.",
    forWorship: "Churches are legible as churches and illegible as anything else. If a hall, a café or a group meets behind a side door, assume nobody knows.",
    source: "glasshouse"
  },
  {
    key: "access",
    name: "Access",
    tone: "green",
    lead: "Who can get there, get in, and move around.",
    questions: [
      "Can people get there easily?",
      "Can people enter and move around easily once they arrive?",
      "Are there physical barriers for people with mobility limitations, physical or learning differences, buggies or small children?",
      "Has the work made it possible for people who previously could not use the building to use it?"
    ],
    inPractice: "Burslem reduced its front steps from three to one, ramped one side and raised the pavement outside; an external circulation tower added escape, a lift and accessible toilets. The Priory uses diagrammatic signage for people who find written signs hard.",
    forWorship: "Aim for everyone arriving through the same door. A separate accessible entrance around the side solves the regulation and not the welcome.",
    source: "glasshouse"
  },
  {
    key: "flexibility",
    name: "Flexibility",
    tone: "green",
    lead: "Whether one room can be several things.",
    questions: [
      "Can internal and external spaces be used in a number of ways, by different groups and for different needs?",
      "Can spaces be changed temporarily — movable walls, stackable furniture, curtains?",
      "Is there potential to change spaces and uses again quite easily in future?",
      "Has the work made it possible to support a broader spectrum of user groups?"
    ],
    inPractice: "Soundproof dividers split one large room into two at Burslem; folding computer desks at Manningham Mills let the IT room become a training room for anything. Tremayne Hall's entrance doubles as a reception desk on luncheon club days.",
    forWorship: "Flexibility is what lets sacred and secular share a building by timetable rather than by partition. Movable seating is usually the single highest-value move in a nave.",
    source: "glasshouse"
  },
  {
    key: "resources",
    name: "Resources",
    tone: "green",
    lead: "Energy, water, waste — and the running cost that decides whether you can stay open.",
    questions: [
      "Have materials and systems been chosen to lower the use of water, energy and other resources?",
      "How effectively does the building use or store energy — does it create any?",
      "Is the building insulated effectively?",
      "Are there good waste management and recycling systems?"
    ],
    inPractice: "The Acacia Centre insulates heavily, generates geothermal electricity, collects grey water for cisterns and fits waterless urinals. St Paul's carries daylight from space to space with internal windows. Old Lambeth Walk reused as much original material as it could.",
    forWorship: "Heating a nave to hold a two-hour class is where most shared-use business plans quietly fail. Heat the people, or heat one well-insulated room, before you heat the volume.",
    source: "glasshouse"
  },
  {
    key: "maintenance",
    name: "Management & maintenance",
    tone: "buff",
    lead: "Whether ordinary people can run the place on an ordinary week.",
    questions: [
      "Is the building easy to manage — are the spaces right for your needs, is storage adequate, can the internal climate be controlled and changed easily?",
      "Is it easy to maintain — easy to clean, able to take the wear and tear of daily use?",
      "Can fittings be maintained and replaced without a specialist?",
      "Who holds the keys, and what happens when they are away?"
    ],
    inPractice: "Acacia's heating controls can change the big hall's temperature within fifteen minutes to suit a different group. Tremayne Hall packs chairs away under the stage in two sets, one for children and one for adults. Elsie Whiteley reclaimed a courtyard the smokers had taken and made it a sculpture garden.",
    forWorship: "Storage is the most underestimated requirement in a reordering. Every flexible nave needs somewhere the stacked chairs, the play equipment and the trestle tables actually go.",
    source: "glasshouse"
  },
  {
    key: "security",
    name: "Security",
    tone: "ink",
    lead: "Feeling safe, and being able to lock up — physical and emotional.",
    questions: [
      "Do people feel safe approaching and inside the building?",
      "Can the building be secured effectively when it is not in use?",
      "Can distinct areas be locked down at certain times of day or night, so that one part can open while the rest is shut?",
      "Does the building look cared for? Neglect invites damage."
    ],
    inPractice: "Pelton Fell's reception and café look out over the children's playground and give oversight of the whole centre. The Priory has no exterior security on its new entrance, but a shutter behind reception secures the building from inside. Acacia used smooth walls, internal rainwater pipes and a cared-for appearance to address a vandalism problem by design.",
    forWorship: "Zoned locking is the technical answer to the open-church question: it lets you keep a side chapel, a porch or an aisle open all day when you cannot staff the whole building.",
    source: "glasshouse"
  },
  {
    key: "enterprise",
    name: "Enterprise",
    tone: "red",
    lead: "Whether the design earns anything, and who it earns from.",
    questions: [
      "Does the building meet the needs set out in the business plan?",
      "Has the design created new opportunities for enterprise within the facility?",
      "Has the refurbished building retained its old user groups?",
      "Is it attracting new ones?"
    ],
    inPractice: "Across the projects, some house small businesses and start-ups, some run their own cafés, some rent space to dance classes and lunch clubs. Renewed links with local schools were common, and the quality of the work gave people new pride in the area.",
    forWorship: "Income streams should be planned together, not stacked one by one. The Sherriff Centre's post office, café, soft play and hire were modelled as a single business from the start, cross-subsidising free debt advice and a community fridge.",
    source: "glasshouse"
  },
  {
    key: "delight",
    name: "Delight",
    tone: "buff",
    lead: "Whether the place is a pleasure to be in.",
    questions: [
      "Is the building pleasing to look at?",
      "Do people feel comfortable, exhilarated or inspired by the space?",
      "Does the design make the most of what is already remarkable here — light, height, acoustics, view?",
      "Would you choose to spend an hour here with nothing to do?"
    ],
    inPractice: "The guide's argument is that delight should permeate every aspect of the design, not be added at the end — and that the difference between good and bad design is a question of care, creativity and commitment rather than of money.",
    forWorship: "This is the one theme where religious buildings begin ahead. Height, light and acoustics are already extraordinary; the risk is covering them up with partitions and suspended ceilings in the name of practicality.",
    source: "glasshouse"
  }
];


/* ------------------------------------------------------------
   3. BEFORE YOU START — seven steps
   ------------------------------------------------------------
   After The Glass-House's "Before you start" pages, with the
   place-of-worship specifics folded in from EDP and Crossing the
   Threshold.
   ------------------------------------------------------------ */
const GH_BEFORE = [
  {
    n: 1,
    title: "Get to know the building",
    lead: "What have the uses been over time, and how has the building changed physically?",
    points: [
      "Track the physical history — when it was built, and how it and the spaces around it have changed since.",
      "Find out whether it is listed, and at what grade.",
      "Understand how it works structurally and technically: which walls are load-bearing, where the services run, what can move and what must stay.",
      "Find out what uses it has had and who has managed it.",
      "Understand its social history — what does it mean to local people?",
      "Talk to the full range of people involved: clergy, wardens, staff, cleaners, maintenance, every user group.",
      "Identify the elements that matter — historically, socially or practically — and must be kept."
    ],
    forWorship: "In a Church of England building this research becomes your Statement of Significance, which you will need for a faculty. Writing it yourself, rather than buying it in, is how the whole team learns to make informed decisions.",
    source: "glasshouse"
  },
  {
    n: 2,
    title: "Get to know the area",
    lead: "Map what else is here, and the people who live, work, study and play here.",
    points: [
      "Map competing and complementary organisations and facilities nearby — what already exists that you would only duplicate?",
      "Look at how the site relates physically to the other facilities your user groups use.",
      "Look at transport links and parking.",
      "Understand the make-up of the local population and the issues that matter to people.",
      "Ask local people what they feel is missing and what they would like brought in.",
      "Notice who passes your door, where they are going, and why they do not come in."
    ],
    forWorship: "Crossing the Threshold calls this the community audit; EDP calls it knowing your community. Either way it is the evidence a funder will ask for, and the thing that stops a group building a hall nobody needed.",
    source: "glasshouse"
  },
  {
    n: 3,
    title: "Develop a collective vision",
    lead: "Work with staff, user groups and local people to outline what you want the building to achieve — and how you want it to feel.",
    points: [
      "Look at the issues that arise when using the current space, and how design could change behaviour and emotion.",
      "Think about how emotive reactions affect a building's function: do people feel welcome and encouraged to stay when they walk in? Do they feel safe in and around it?",
      "Use local knowledge, skills and networks to consider how the building can complement, not duplicate, what already exists.",
      "Identify high-level objectives first and then find the design to suit them. Put the vision before the brief.",
      "Ask the long question: what place do we want this building to have in our community over the next twenty-five years?"
    ],
    forWorship: "EDP's clearest finding is that projects without a shared vision drift into piecemeal change, and that a strong vision is what carries a team through the setbacks. Ground it in mission, and get everyone able to tell the same story about it.",
    source: "edpLeadership"
  },
  {
    n: 4,
    title: "Learn from other projects",
    lead: "Go and look. Then go and look again with your team.",
    points: [
      "Visit other community buildings and places of worship and be inspired by a range of eras and styles.",
      "Speak to groups who have been through a refurbishment and learn from their experience — successes and failures.",
      "Ask them who they went to for advice, and which organisations helped.",
      "Seek independent advice on the potential for change to your building — which walls are load-bearing, which can move.",
      "Whenever you visit any public building, look at its facilities, access and energy arrangements. Look at what is not working as hard as what is."
    ],
    forWorship: "Ask your diocesan advisory committee or denominational property adviser which nearby projects you could visit. A completed project will almost always say yes to a tour, and will tell you things no publication will.",
    source: "glasshouse"
  },
  {
    n: 5,
    title: "Develop your design brief alongside your business plan",
    lead: "The brief and the business plan are the same document seen from two sides.",
    points: [
      "Build the brief from activities and interactions — who is here, doing what, when — not from a list of rooms.",
      "Make sure it considers both the potential the work brings and the limitations the building presents.",
      "Build the management and maintenance plan into the business plan: you will make design decisions later that can make management easier.",
      "Expect the brief to evolve as you work with the architect. What matters at the start is absolute clarity about the existing building, the context, the vision, the objectives and how you want the building to feel.",
      "Do not try to solve the problems yourself — that is the architect's job."
    ],
    forWorship: "This is where the Statement of Need is written. It has to prove that the parish's needs cannot be met without changing the building, and that these particular changes are the ones that do it.",
    source: "glasshouse"
  },
  {
    n: 6,
    title: "Check the building is the right one for the project",
    lead: "Sometimes the honest answer is that it is not.",
    points: [
      "Is it in the right place, with the right links to transport and to other activities?",
      "Can refurbishment create spaces that work for your group, for local people and for every activity in the business plan?",
      "Can the refurbished building be managed and maintained by your group or partnership — or will you need additional support?",
      "If you will need support, find that answer before you go ahead, not after."
    ],
    forWorship: "A congregation of twelve cannot run a seven-day community hub on volunteer effort. Either the partnership, the staffing or the ambition has to change — and it is far cheaper to discover which at this stage.",
    source: "glasshouse"
  },
  {
    n: 7,
    title: "Get the right professional for you",
    lead: "Choose someone you can work with for years, not the cheapest fee.",
    points: [
      "Set up a clear selection process with stated criteria.",
      "Write a clear description of what you are looking for and what you hope to achieve.",
      "Interview the strongest candidates.",
      "Choose the person or team you feel you can work with. Presentation and images matter, but a collaborative rapport matters more.",
      "Look for working knowledge of places of worship and of your denomination's permission process — your DAC or equivalent can suggest names.",
      "Be a robust client: question anything you do not understand. Design is iterative, and you will need to keep getting the most out of the relationship."
    ],
    forWorship: "Decide early whether you want an architect who will take a brief and return a design, or one who will run a participatory process with you. Some practices offer the second explicitly; it costs more in time and returns more in ownership.",
    source: "glasshouse"
  }
];


/* ------------------------------------------------------------
   4. TOP TIPS — from the groups who have done it
   ------------------------------------------------------------ */
const GH_TIPS = [
  {
    group: "People",
    tips: [
      "Work with the community — local people respond well to seeing good use made of a building.",
      "Use and appreciate what you have already got, in the history of the building and in your human resources.",
      "Build capacity: get a team around you with different experiences and perspectives early, so all bases are covered.",
      "Go and visit similar existing buildings and talk to people who have been through the process.",
      "Engage potential users as early as possible — it is part of having a solid argument for your funders.",
      "Get an architect who is sensitive to your aims, and someone who will project manage.",
      "Be a robust client. The relationship should work two ways; always question what you do not understand.",
      "Maintain good relationships with all partners — local people, the local authority, funders, board members — and listen to their advice."
    ]
  },
  {
    group: "Process",
    tips: [
      "Be really clear about what you want to achieve. Have a clear vision.",
      "Develop the brief with your partners and users, and make sure their desires and needs are voiced in it.",
      "Expect a major building and reordering project to take between three and ten years. Whatever length of time you first think, consider doubling it.",
      "Time spent researching and planning before the project starts is never wasted.",
      "Be professional and business-like in everything, from a poster to a fundraising event — funders and neighbours read it as evidence you can run a project.",
      "Be realistic about what is achievable."
    ]
  },
  {
    group: "Design",
    tips: [
      "Do not underestimate the need for storage.",
      "Sometimes a bespoke finish solves a problem that a standard product cannot.",
      "Make sure fittings can be maintained and replaced.",
      "Think about where the toilets are placed — who will need to use them, and when?",
      "Natural ventilation affects temperature and air quality; bear it in mind when placing windows, doors and vents.",
      "Accessibility compliance need not compromise the look and feel of a building — and it can conflict with other needs, so design it rather than bolt it on.",
      "People will come up with their own solutions if you have not built one into the design.",
      "Small changes can achieve a lot. Try things out before committing to a major reordering."
    ]
  }
];


/* ------------------------------------------------------------
   5. EDP — the four things that decide whether a project works
   ------------------------------------------------------------ */
const EDP_AREAS = [
  {
    key: "leadership",
    name: "Leadership",
    lead: "Who runs the project, and how.",
    points: [
      "A leader's job is to make a shared vision possible, not to supply one — coordinating activity, connecting people and holding relationships with the outside world.",
      "The strongest leaders empower the team to reach its own potential. The more people who can contribute, the stronger the project.",
      "It does not have to be the vicar or spiritual leader. It can help if it is not: they are then free to be impartial, to hold difficult conversations, and to be approachable to people who are worried about the change.",
      "Without a shared vision, change happens piecemeal instead of transforming the building's role in the neighbourhood.",
      "A project that depends entirely on one person is at risk. Delegate, share information and plan succession — including the shift from project management to running a facility, which needs different skills."
    ],
    failure: "Two EDP examples show what happens without it: a group doing excellent work whose activities were disconnected from any vision for the building, so they could not see or celebrate their own achievements; and a congregation split over how far to open up, which handed an architect a list of problems instead of a vision and could never move past the first solution.",
    source: "edpLeadership"
  },
  {
    key: "engagement",
    name: "Community engagement",
    lead: "Developing new relationships for your congregation and your project.",
    points: [
      "Get the community involved from the beginning and in the decision-making — it avoids conflict later and brings in knowledge, skills and volunteers you do not have.",
      "Do not present people with a ready-made set of plans. You will only meet resistance.",
      "Accept that many people who value the building will never join the congregation — and that this is fine. They may value it as heritage, as a quiet space, for family memories, or for the tower on the skyline.",
      "Ask open questions — what, where, why, when, how, who — so you are not leading the answers.",
      "Hold some of the consultation inside the building, with tours, so that people form informed opinions about the changes.",
      "Make the results public. Write them up; funders will ask to see them.",
      "Get your most vociferous opponents involved and give them a voice in the decision-making.",
      "Keep in touch afterwards. A Friends group is a way for people with limited time to stay involved."
    ],
    failure: "Sheffield Buddhist Centre engaged thoroughly within the Buddhist community and not with the surrounding streets; replacing the belfry bell with a gold Buddha caused tensions and rumours that an earlier conversation would have prevented. The leader went and listened to the person leading the protest, and new relationships were formed — but later than they needed to be.",
    source: "edpLeadership"
  },
  {
    key: "scale",
    name: "Scale & style",
    lead: "Choosing the right size of architectural intervention.",
    points: [
      "Three scales: small (a servery, an accessible WC — little or no construction), medium (removing some pews, remodelling a vestry, a small extension), large (a major extension or an inserted structure, needing feasibility work and serious fundraising).",
      "Minimise the impact on historic fabric, and always ask how easily reversible an intervention would be.",
      "Do not fix on one solution early. Always appraise options — one may have less impact and still meet the vision, and another may produce something nobody had thought of.",
      "Often only minor changes are needed for a building to keep serving worship while offering something new. A major reordering is not always necessary.",
      "Test before you commit: remove the pews from one aisle first; borrow sample chairs and let people sit on them; use the space differently for a season.",
      "Decide how the new will read against the old — a clear distinction, or a careful match. Either can work; an unresolved middle rarely does.",
      "Work through the impact on the sense of sacredness as carefully as the impact on fabric: will it still feel like a spiritual space, and how will people know to give it due respect?"
    ],
    failure: "The Sherriff Centre's design gave each activity its own space with no permanent intervention and no impact on heritage fabric — but the number of people coming through every day now makes it hard to see that it is still a functioning place of worship, and the church is looking for small ways to make that legible again.",
    source: "edpLeadership"
  },
  {
    key: "capacity",
    name: "Capacity",
    lead: "Building skills and resources within your team.",
    points: [
      "Capacity is not only money: it is skills, knowledge and the confidence to deal with bureaucracy, funders and professionals.",
      "Start with a skills audit of your own congregation — finance, project management, communications, IT, admin, local knowledge, history, fundraising, design, practical help, and the specialised knowledge you will need.",
      "Do not begin by assuming you must buy in expertise. Understand your challenges first; you will then have more control over how the project develops.",
      "Look outside the congregation for volunteers. People like being asked, and new people bring fresh energy — but give them time to understand how you work.",
      "Budget for training, before and after the works: fundraising courses, food hygiene for the lunch club, first aid. Volunteers should be as qualified as paid staff.",
      "Talk to groups who have done it. Ask to be mentored, or at least for a tour and the lessons learned.",
      "Know which roles legally require a professional, and employ one for those."
    ],
    failure: "Cemetery Road Baptist Church saw another group's successful lottery application at a training workshop, realised their own needed to be at that level, won a small grant from the National Churches Trust and hired that project's officer to advise them. Networks are capacity.",
    source: "edpLeadership"
  }
];


/* ------------------------------------------------------------
   6. ENGAGEMENT — why, and the seven strategy questions
   ------------------------------------------------------------ */
const ENGAGE_WHY = [
  { t: "Unlock local knowledge", d: "Local people hold expertise about the area and the place that will improve the vision, the brief and the design quality." },
  { t: "Enable agency and ownership", d: "People involved in designing a place feel a greater sense of ownership and respect for it, and are more willing to invest in its success." },
  { t: "Mobilise local assets", d: "Every place has skills, resources and networks. Working with local people unlocks assets a project cannot buy." },
  { t: "Unleash expertise and creativity", d: "Everyone holds a mix of experiential and professional expertise; a collaborative process puts it to use." },
  { t: "Build social capital", d: "Engagement builds confidence, life skills and employability, fosters relationships and strengthens social cohesion." }
];

const ENGAGE_QUESTIONS = [
  { q: "Why should people get involved?", d: "Engagement is never a one-way street. Say what participants get out of it, not only what you get from them. Welcome people as contributors, not commentators." },
  { q: "How will engagement affect decision-making?", d: "Set out what is already fixed and where influence is genuinely possible. Tokenistic participation is worse than none." },
  { q: "How can people get involved?", d: "Offer a spectrum — a conversation at a stall, a questionnaire, a workshop, a steering group — so people can match their availability, confidence and skills." },
  { q: "What can those engaging contribute?", d: "User knowledge, relationships and networks, creativity, investment of time or money, and complementary activities already running nearby." },
  { q: "What are your engagement objectives?", d: "Map the context; identify collaborators; communicate process and parameters; build design capacity; generate and test ideas; mobilise support and funding." },
  { q: "How will you use your engagement outputs?", d: "Keep an accurate record of who took part and what they said. It becomes the evidence base for decisions, for funders and for planning." },
  { q: "How can engagement add social value?", d: "Give voice to under-represented people, build local connections, build empathy across difference, and unlock confidence, skills and employability." }
];

/* The data-gathering tools, with what each is good for.
   Used by the taster-session playbook and the deeper assessment. */
const ENGAGE_TOOLS = [
  { name: "Asset mapping", cat: "Map the context", d: "Make a visual record of the people, skills, objects, spaces, relationships and networks you already have. It unearths assets that are taken for granted." },
  { name: "Memory mapping", cat: "Map the context", d: "Ask people to mark memories and feelings onto a plan of the building. It shows what is special and which spaces need revisiting." },
  { name: "Spatial mapping", cat: "Map the context", d: "Map uses onto a plan, a map or a model to show how spaces relate and where things could change." },
  { name: "Surveys & questionnaires", cat: "Capture opinions", d: "Good for quantity and statistics. Ask open questions; always state how many people answered." },
  { name: "Voting", cat: "Capture opinions", d: "Jelly beans in jars, coloured sticks, sticky dots on a plan. Playful, quick, and countable." },
  { name: "Interviews", cat: "Capture opinions", d: "Targeted questions in a quiet space. Always ask permission to record and agree whether you may quote them." },
  { name: "Focus groups", cat: "Capture opinions", d: "A small group exploring shared and conflicting views on one theme. Write it up or it is lost." },
  { name: "Walkabouts", cat: "Capture opinions", d: "Walk the site together. It surfaces sensory and emotional responses that a meeting never will." },
  { name: "Annotating drawings & models", cat: "Capture opinions", d: "Post-it notes on a rough model let people say quickly what works and what does not, and point at it." },
  { name: "Sticky walls", cat: "Capture opinions", d: "One clear question, post-its, pens nearby. Anonymous, fast, and easy to sort by colour." },
  { name: "Postcards", cat: "Generate ideas", d: "A small, attractive format for a story or a design idea. Display them at the event and keep them as data." },
  { name: "Collaging", cat: "Generate ideas", d: "Images and shapes to express mood and theme. Reaches people who would not draw." },
  { name: "Models & making", cat: "Generate ideas", d: "Building a rough model of your own building is how a group comes to understand how its spaces fit together — and then to test changing them." },
  { name: "Roleplay", cat: "Generate ideas", d: "Act out a scenario in the space. It builds empathy and tests how people would actually behave." },
  { name: "Photos, film & audio", cat: "Document", d: "Records the event, makes publicity, and gives people another way to express a view about a place." },
  { name: "Counting", cat: "Document", d: "How many came. Dull, essential, and exactly what funders ask for." },
  { name: "Feedback forms", cat: "Document", d: "Evidence of how people responded and benefited — for the next event and for the business plan." }
];

/* Data protection, in the terms the guidance sets out. */
const ENGAGE_ETHICS = [
  "Keep questionnaires and feedback anonymous, and only ask about age, faith or other characteristics if the answer is genuinely relevant.",
  "With children under 13 or with vulnerable adults, always have the consent of an accompanying parent, carer or guardian.",
  "Put a notice at the entrance when you are photographing, filming or recording, saying how it will be used and how to opt out.",
  "Use consent forms that name your group, say what the material is for, how long you will keep it and how to ask for it to be deleted.",
  "Only contact people for the thing they signed up for, and always offer a way out.",
  "Personal data may only be kept for a stated purpose — not 'in case'."
];


/* ------------------------------------------------------------
   7. THE TASTER SESSION PLAYBOOK
   ------------------------------------------------------------
   The standard answer to "our building is only open on Sundays".
   Drawn from Bow Church's open competition, the Partnership Day
   described in EDP, St Michael and All Angels' testing of pews and
   chairs, and Tidworth Mums' Mega Soft Play Day.
   ------------------------------------------------------------ */
const TASTER_PLAYBOOK = {
  why: "A taster session is the cheapest possible test of a use. It needs no faculty, no planning permission and no capital. It produces the two things every later stage needs — evidence of demand, and a relationship with a group who might run the thing.",
  timescale: "Six to eight weeks from decision to doors open.",
  cost: "Usually under £200: refreshments, a printed sign, insurance check, and someone's Saturday.",
  steps: [
    {
      n: 1,
      title: "Pick one day and name it",
      d: "Choose a single date when the building is already unlocked — after a service, or a Saturday morning. Give it a plain name people can repeat: not 'community consultation' but 'open morning', 'try the hall', 'bring a chair'.",
      tip: "Piggy-back on something that already draws people — a fête, a school event, a market, a street stall. Reaching people who already come to church is not the test."
    },
    {
      n: 2,
      title: "Find out who is already out there",
      d: "Before inviting anyone, list what already runs within ten minutes' walk: toddler groups, ESOL classes, choirs, food projects, repair cafés, scouts, MIND and Age UK branches, the library's activity list, the council's community directory, the local Facebook or Nextdoor group. You are looking for groups with no home, or a bad one.",
      tip: "Use the Opportunities map and the Case studies on this site to see what has worked in comparable buildings, then search the same use locally. Councils publish a community-group directory; the CVS or council for voluntary service in your borough holds the fullest list."
    },
    {
      n: 3,
      title: "Ask an open question, not a closed one",
      d: "Bow Church ran a competition asking local organisations simply: what would you do with this space? Two winners — Latin dance and karate — ran free community sessions for a day themed around fitness, and the feedback that came back (more open space to dance, a café, another toilet, heating) told the church exactly what its renovation needed.",
      tip: "An open invitation surfaces uses you would never have listed. A menu of options only confirms what you already thought."
    },
    {
      n: 4,
      title: "Hold a partnership day",
      d: "Invite local groups and organisations into the building at the same time. Show them the space, and ask two questions: would you use it, and what would have to be in place before you could? The answers — a lockable cupboard, a sink, a 9am start, a hearing loop — are your design brief.",
      tip: "Ask about times as much as about rooms. A group that needs Tuesday 10–12 and a group that needs Tuesday evening are not competitors."
    },
    {
      n: 5,
      title: "Build the evidence in while people are enjoying themselves",
      d: "Decide before the day what you need to know, and who is collecting it. Count people through the door. Put a sticky wall by the tea with one question on it. Put a plan of the building on a table and let people mark where they would go. Vote with jelly beans. Take photographs, with a notice at the door saying so.",
      tip: "Keep data collection integrated, not disruptive — and keep it simple enough that a volunteer can run it while making tea."
    },
    {
      n: 6,
      title: "Test the physical change too",
      d: "If the question is whether to remove pews, clear one aisle for the day and see how it feels. If it is which chairs, ask a manufacturer to bring samples and let people sit on them and say which they would rather stack. If it is heating, run the session in the coldest room in February and find out honestly.",
      tip: "This is the single most useful thing a group can do before spending money, and almost nobody does it."
    },
    {
      n: 7,
      title: "Write it up and give it back",
      d: "Within two weeks: how many came, who they were, what they said, what you will do next. Put it on the noticeboard, the website and the socials, and send it to everyone who left an address. Funders will ask for this document; neighbours will judge you on whether it appeared.",
      tip: "Name the things you are not going to do, and why. Nothing builds trust faster than a visibly honest 'no'."
    },
    {
      n: 8,
      title: "Turn one taster into a term",
      d: "Offer the group that worked best a trial term — six or eight weeks, a written agreement on times, keys, heating, insurance, noise and what happens on festival Sundays. A trial term is a decision a PCC or trustees can make in one meeting, and it is reversible.",
      tip: "Bring the trial to the PCC or trustees with the write-up attached. A proposal with attendance figures behind it is a different conversation."
    }
  ],
  watchOut: [
    "Check the insurance covers the activity and the numbers, and whether you need a licence for music, alcohol or performance.",
    "Check safeguarding and DBS requirements before inviting anything involving children or vulnerable adults.",
    "Agree in advance who unlocks, who locks up and what happens if that person is ill.",
    "Tell the neighbours before, not after — especially about noise and parking.",
    "Make sure the worshipping community has been asked first. A taster session that surprises the congregation buys you an opponent for the whole project."
  ]
};


/* ------------------------------------------------------------
   8. PERMISSIONS — the route map
   ------------------------------------------------------------ */
const PERMISSIONS = [
  {
    key: "none",
    name: "No permission needed",
    d: "Furniture, programming, signage inside the building, opening hours, a trial use of an existing room. Anything you could undo on a Monday morning.",
    who: "Your own PCC, trustees or management committee.",
    time: "One meeting."
  },
  {
    key: "governance",
    name: "Governance decision",
    d: "A regular letting, a trial term, a change to opening hours, a licence to occupy, a new charitable activity, a trading subsidiary.",
    who: "PCC, trustees, church council or equivalent — minuted.",
    time: "One to three months."
  },
  {
    key: "faculty",
    name: "Faculty (or denominational equivalent)",
    d: "Any permanent change to a Church of England building, its contents or its churchyard, including reordering, new fittings, heating and lighting. Other denominations have their own systems; ecclesiastical exemption means the faculty replaces listed building consent, not planning permission.",
    who: "Diocesan Advisory Committee then the Chancellor. Ask for pre-application advice — it is free, and it will tell you what is likely to be approved.",
    time: "Six months to two years. Needs a Statement of Significance and a Statement of Need.",
    note: "Harm to significance must be clearly and convincingly justified and outweighed by public benefit — the same test the NPPF sets for heritage assets."
  },
  {
    key: "planning",
    name: "Planning permission",
    d: "Extensions, external alterations, new buildings, and most changes of use. Ecclesiastical exemption does not cover planning.",
    who: "Local planning authority. Pre-application advice is worth paying for.",
    time: "Eight to thirteen weeks after a validated application; longer with a listed building."
  },
  {
    key: "changeuse",
    name: "Change of use",
    d: "Introducing a use outside the building's existing class. Ancillary use — a secondary activity supporting the primary one — often avoids this, which is why cafés and shops inside working churches are frequently lawful without it.",
    who: "Local planning authority; check first whether the use is genuinely ancillary.",
    time: "Varies. A lawful development certificate can settle it."
  },
  {
    key: "licence",
    name: "Licences and regulation",
    d: "Premises licence for alcohol and regulated entertainment, food hygiene registration, safeguarding and DBS, accessibility duties, fire risk assessment, insurance for each activity and each number of people.",
    who: "The council's licensing and environmental health teams; your insurer; your safeguarding officer.",
    time: "Weeks, but start early — it is the most common cause of a launch date slipping."
  }
];


/* ------------------------------------------------------------
   9. FUNDING ROUTES — matched to what is being funded
   ------------------------------------------------------------ */
const FUNDING_ROUTES = {
  none: {
    name: "No funding needed",
    d: "Programming, agreements, opening hours and volunteer effort. The cheapest interventions on this site cost only a decision.",
    where: []
  },
  small: {
    name: "Small works & charitable giving",
    d: "Under about £10,000: signage, seating, lighting, a noticeboard, a kettle and a cupboard. Local giving, a Friends group, a parish appeal, small trusts, crowdfunding.",
    where: ["nationalChurches"]
  },
  development: {
    name: "Project development & feasibility",
    d: "The stage most groups skip: options appraisal, feasibility study, business plan, community consultation. Funding this properly is what makes the capital bid credible.",
    where: ["ahf", "nationalChurches", "heritageFund"]
  },
  capital: {
    name: "Capital works & heritage grants",
    d: "Over about £100,000: extensions, insertions, services, major reordering. Expect to evidence community engagement and an activity plan, not just building works.",
    where: ["heritageFund", "ahf", "historicEngland", "nationalChurches"]
  },
  council: {
    name: "Council & public funds",
    d: "Programming, activities and revenue: ward budgets, neighbourhood CIL, public health and adult learning commissioning, Section 106 community facilities money.",
    where: ["planningAid"]
  },
  trading: {
    name: "Trading income & enterprise",
    d: "Rent, hire, a café, a shop, a post office, ticketed events. Plan the streams together as one business, and hold them in a trading subsidiary that gifts profit to the charity.",
    where: ["plunkett"]
  },
  volunteer: {
    name: "Volunteer effort & partnership",
    d: "A Friends group, a partner charity with its own funding, a local business in kind. The cheapest capacity there is — and the easiest to exhaust.",
    where: ["edpLeadership"]
  }
};


/* ------------------------------------------------------------
   10. Small helpers used by the pages
   ------------------------------------------------------------ */
function sourceOf(id) { return SOURCES[id] || null; }

function sourceLink(id, cls = "rule-link") {
  const s = SOURCES[id];
  if (!s) return "";
  return `<a class="${cls}" href="${s.url}" target="_blank" rel="noopener">${s.short}</a>`;
}

function sourceCite(id) {
  const s = SOURCES[id];
  if (!s) return "";
  return `${s.author}, <em>${s.title}</em> (${s.year})`;
}

function themeOf(key) { return GH_THEMES.find(t => t.key === key) || null; }
