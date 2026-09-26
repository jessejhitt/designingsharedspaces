/* ============================================================
   DESIGNING SHARED SPACES TOGETHER — the evidence base
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
    lead: "How the building sits in its street and neighbourhood.",
    questions: [
      "Does the building fit its surroundings?",
      "Does its use complement what is nearby, rather than duplicate it?",
      "Is it well placed for passing trade?"
    ],
    inPractice: "Burslem School of Art changed a whole street; The Priory Centre was limited more by lack of space around it than by its listing.",
    forWorship: "A congregation that drives in from afar is not a local one — it changes who is around on a Tuesday.",
    source: "glasshouse"
  },
  {
    key: "identity",
    name: "Identity",
    tone: "buff",
    lead: "Can a stranger tell what this place is and who it is for?",
    questions: [
      "Is it clear what the building is, and who it is for?",
      "Is there a consistent design language?",
      "Do signs, symbols and a name say so?"
    ],
    inPractice: "The Priory Centre kept its old school coat hooks alongside a new logo: identity is what you keep as well as what you add.",
    forWorship: "Can people still tell it is a place of worship? At the Sherriff Centre the centre is so successful that the worship reads faintly.",
    source: "glasshouse"
  },
  {
    key: "legibility",
    name: "Connectivity & legibility",
    tone: "red",
    lead: "Can people find their way in, and through?",
    questions: [
      "Is it clear where to go on arrival?",
      "Is it easy to move around, with and without signs?",
      "Can you see one space from another?"
    ],
    inPractice: "Burslem's bright atrium hides the activity behind its walls; at St Paul's, glass between spaces makes the building easy to read.",
    forWorship: "Churches read as churches and nothing else. If a group meets behind a side door, assume nobody knows.",
    source: "glasshouse"
  },
  {
    key: "access",
    name: "Access",
    tone: "green",
    lead: "Who can get there, get in and move around?",
    questions: [
      "Can people get there easily?",
      "Can they get in and move around easily?",
      "Are there barriers for wheelchairs, buggies or people with learning differences?"
    ],
    inPractice: "Burslem cut its front steps from three to one and raised the pavement; The Priory uses picture-based signs.",
    forWorship: "Aim for everyone through the same door. A side entrance meets the rules, not the welcome.",
    source: "glasshouse"
  },
  {
    key: "flexibility",
    name: "Flexibility",
    tone: "green",
    lead: "Can one room be several things?",
    questions: [
      "Can spaces serve different groups and needs?",
      "Can they change quickly — movable walls, stacking chairs, curtains?",
      "Can they be adapted again in future?"
    ],
    inPractice: "Soundproof dividers split a hall in two at Burslem; folding desks let Manningham Mills' IT room host any training.",
    forWorship: "Flexibility lets sacred and secular share by timetable, not partition. Movable seating is usually the biggest win in a nave.",
    source: "glasshouse"
  },
  {
    key: "resources",
    name: "Resources",
    tone: "green",
    lead: "Energy, water and waste — and the running cost of staying open.",
    questions: [
      "Do materials and systems cut energy and water use?",
      "Is the building well insulated?",
      "Is there good waste and recycling?"
    ],
    inPractice: "The Acacia Centre is heavily insulated, generates geothermal power and reuses grey water.",
    forWorship: "Heating a nave for a two-hour class sinks most business plans. Heat people, or one warm room, first.",
    source: "glasshouse"
  },
  {
    key: "maintenance",
    name: "Management & maintenance",
    tone: "buff",
    lead: "Can ordinary people run it in an ordinary week?",
    questions: [
      "Is it easy to manage, with enough storage and simple heating controls?",
      "Is it easy to clean and hard-wearing?",
      "Who holds the keys, and what happens when they are away?"
    ],
    inPractice: "Acacia's heating can change a hall's temperature in fifteen minutes; Tremayne Hall stores its chairs under the stage.",
    forWorship: "Storage is the most underestimated need. Stacked chairs and play kit must go somewhere.",
    source: "glasshouse"
  },
  {
    key: "security",
    name: "Security",
    tone: "ink",
    lead: "Feeling safe, and being able to lock up.",
    questions: [
      "Do people feel safe approaching and inside?",
      "Can parts be locked while others stay open?",
      "Does the building look cared for?"
    ],
    inPractice: "Pelton Fell's café overlooks the playground and the whole centre; Acacia designed out vandalism with smooth walls and a cared-for look.",
    forWorship: "Zoned locking lets a porch, chapel or aisle stay open all day without staffing the whole building.",
    source: "glasshouse"
  },
  {
    key: "enterprise",
    name: "Enterprise",
    tone: "red",
    lead: "Does the design earn anything, and from whom?",
    questions: [
      "Does it meet the business plan's needs?",
      "Has it created new opportunities for enterprise?",
      "Has it kept old user groups and attracted new ones?"
    ],
    inPractice: "Projects house start-ups, run cafés and rent space to classes and lunch clubs.",
    forWorship: "Plan income together. The Sherriff Centre's post office, café, soft play and hire were planned as one business, funding free debt advice.",
    source: "glasshouse"
  },
  {
    key: "delight",
    name: "Delight",
    tone: "buff",
    lead: "Is it a pleasure to be in?",
    questions: [
      "Is it pleasing to look at?",
      "Does it make the most of its light, height and acoustics?",
      "Would you spend an hour here with nothing to do?"
    ],
    inPractice: "Delight should run through the whole design; good design is a matter of care more than money.",
    forWorship: "Religious buildings start ahead here. The risk is hiding height, light and acoustics behind partitions.",
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
    lead: "How have its uses and fabric changed over time?",
    points: [
      "Research its history, and whether it is listed.",
      "Learn how it works: structure, services, what can move.",
      "Talk to everyone involved, from clergy to cleaners.",
      "Identify what matters and must be kept."
    ],
    forWorship: "In a Church of England building this becomes your Statement of Significance, needed for a faculty.",
    source: "glasshouse"
  },
  {
    n: 2,
    title: "Get to know the area",
    lead: "Map what is nearby, and who lives, works and plays here.",
    points: [
      "Map nearby facilities so you do not duplicate them.",
      "Check transport links and parking.",
      "Ask local people what is missing.",
      "Notice who passes your door, and why they do not come in."
    ],
    forWorship: "Crossing the Threshold calls this a community audit. Funders will ask for it.",
    source: "glasshouse"
  },
  {
    n: 3,
    title: "Develop a collective vision",
    lead: "Agree what the building should achieve and how it should feel.",
    points: [
      "Look at how design could change behaviour and feelings.",
      "Ask whether people feel welcome and safe.",
      "Set objectives first, then find the design.",
      "Ask what role the building should play over 25 years."
    ],
    forWorship: "Projects without a shared vision drift into piecemeal change. Ground it in mission.",
    source: "edpLeadership"
  },
  {
    n: 4,
    title: "Learn from other projects",
    lead: "Go and look, then go again with your team.",
    points: [
      "Visit other community buildings and places of worship.",
      "Ask groups who have done it what worked and what did not.",
      "Get independent advice on what can change."
    ],
    forWorship: "Your diocesan advisory committee can suggest nearby projects to visit.",
    source: "glasshouse"
  },
  {
    n: 5,
    title: "Write the brief alongside the business plan",
    lead: "They are the same document, seen from two sides.",
    points: [
      "Build the brief from activities, not a list of rooms.",
      "Include management and maintenance in the plan.",
      "Be clear about the building, vision and objectives; leave the solutions to the architect."
    ],
    forWorship: "This becomes the Statement of Need: proof that these changes are necessary.",
    source: "glasshouse"
  },
  {
    n: 6,
    title: "Check the building is the right one",
    lead: "Sometimes it is not.",
    points: [
      "Is it in the right place, with good transport links?",
      "Can it work for every planned activity?",
      "Can your group manage and maintain it, or will you need help?"
    ],
    forWorship: "A congregation of twelve cannot run a seven-day hub on volunteers alone.",
    source: "glasshouse"
  },
  {
    n: 7,
    title: "Choose the right professional",
    lead: "Pick someone you can work with for years, not the cheapest.",
    points: [
      "Use a clear selection process and brief.",
      "Interview the strongest candidates.",
      "Look for experience of places of worship and the faculty process.",
      "Question anything you do not understand."
    ],
    forWorship: "Decide early whether you want a design handed to you, or a participatory process.",
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
      "Leaders enable a shared vision rather than impose one.",
      "It need not be the vicar; an independent lead can hold difficult conversations.",
      "Do not depend on one person. Delegate and plan succession."
    ],
    failure: "Without a shared vision, one group could not see its own achievements, and a divided congregation gave its architect problems instead of a vision.",
    source: "edpLeadership"
  },
  {
    key: "engagement",
    name: "Community engagement",
    lead: "Building new relationships around the project.",
    points: [
      "Involve the community from the start, in the decisions.",
      "Never present ready-made plans.",
      "Ask open questions, and publish the results.",
      "Involve your strongest opponents."
    ],
    failure: "Sheffield Buddhist Centre consulted its own community but not its neighbours; replacing a bell with a gold Buddha caused tensions an earlier conversation would have avoided.",
    source: "edpLeadership"
  },
  {
    key: "scale",
    name: "Scale & style",
    lead: "Choosing the right size of intervention.",
    points: [
      "Small, medium or large: from a servery to a major extension.",
      "Minimise the impact on historic fabric, and favour reversible changes.",
      "Weigh the options before fixing on one, and test before committing."
    ],
    failure: "The Sherriff Centre avoided any permanent change to the fabric, but its busy use now makes the worship hard to see.",
    source: "edpLeadership"
  },
  {
    key: "capacity",
    name: "Capacity",
    lead: "Building your team's skills and resources.",
    points: [
      "Capacity means skills and confidence, not just money.",
      "Audit your congregation's skills before buying in expertise.",
      "Recruit volunteers beyond the congregation, and train them."
    ],
    failure: "Cemetery Road Baptist Church learned from another group's lottery bid, won a small grant and hired that project's officer. Networks are capacity.",
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
  why: "A taster is the cheapest test of a use: no permissions, no capital. It gives you evidence of demand, and a relationship with a group who might run it.",
  timescale: "Six to eight weeks from decision to opening.",
  cost: "Usually under £200.",
  steps: [
    {
      n: 1,
      title: "Pick one day and name it",
      d: "Choose a day the building is already open, and give it a plain name like 'open morning'.",
      tip: "Piggy-back on an existing event to reach people beyond the congregation."
    },
    {
      n: 2,
      title: "Find out who is already out there",
      d: "List what runs within ten minutes' walk. Look for groups with no home, or a poor one.",
      tip: "Your council's community directory and local CVS hold the fullest lists."
    },
    {
      n: 3,
      title: "Ask an open question",
      d: "Bow Church asked local groups, 'What would you do with this space?' The answers shaped its renovation.",
      tip: "Open questions surface uses you would never have listed."
    },
    {
      n: 4,
      title: "Hold a partnership day",
      d: "Invite local groups in together. Ask: would you use it, and what would you need first?",
      tip: "Ask about times as well as rooms."
    },
    {
      n: 5,
      title: "Collect evidence as you go",
      d: "Count visitors, put up a question wall, and let people mark up a plan.",
      tip: "Keep it simple enough to run while making tea."
    },
    {
      n: 6,
      title: "Test physical changes too",
      d: "Clear an aisle, try sample chairs, or run a session in the coldest room.",
      tip: "The most useful test before spending money — and the most skipped."
    },
    {
      n: 7,
      title: "Write it up and share it",
      d: "Within two weeks, share who came, what they said and what happens next.",
      tip: "Say what you will not do, and why."
    },
    {
      n: 8,
      title: "Turn one taster into a term",
      d: "Offer the best group a trial term, with a written agreement on times, keys and costs.",
      tip: "Take the write-up to the PCC or trustees."
    }
  ],
  watchOut: [
    "Check insurance, and any licence for music, alcohol or performance.",
    "Check safeguarding and DBS requirements.",
    "Agree who unlocks and locks up, with cover.",
    "Tell the neighbours beforehand.",
    "Ask the congregation first."
  ]
};


/* ------------------------------------------------------------
   8. PERMISSIONS — the route map
   ------------------------------------------------------------ */
const PERMISSIONS = [
  {
    key: "none",
    name: "No permission needed",
    d: "Furniture, programming, signs inside, opening hours and trial uses — anything easily undone.",
    who: "Your PCC, trustees or committee.",
    time: "One meeting."
  },
  {
    key: "governance",
    name: "Governance decision",
    d: "Regular lettings, trial terms, licences to occupy, new activities, a trading subsidiary.",
    who: "PCC, trustees or equivalent, minuted.",
    time: "One to three months."
  },
  {
    key: "faculty",
    name: "Faculty (or denominational equivalent)",
    d: "Any permanent change to a Church of England building, its contents or churchyard. It replaces listed building consent, not planning permission. Other denominations have their own systems.",
    who: "The Diocesan Advisory Committee, then the Chancellor. Pre-application advice is free.",
    time: "Six months to two years. Needs Statements of Significance and Need.",
    note: "Harm to significance must be outweighed by public benefit."
  },
  {
    key: "planning",
    name: "Planning permission",
    d: "Extensions, external changes, new buildings and most changes of use.",
    who: "The local planning authority.",
    time: "Eight to thirteen weeks after validation; longer for listed buildings."
  },
  {
    key: "changeuse",
    name: "Change of use",
    d: "A use outside the building's current class. Ancillary uses, like a café in a working church, often do not need it.",
    who: "The local planning authority.",
    time: "Varies. A lawful development certificate can settle it."
  },
  {
    key: "licence",
    name: "Licences and regulation",
    d: "Premises licences, food hygiene, safeguarding, fire risk assessment and insurance.",
    who: "Council licensing and environmental health, your insurer and your safeguarding officer.",
    time: "Weeks — start early; it often delays launches."
  }
];


/* ------------------------------------------------------------
   9. FUNDING ROUTES — matched to what is being funded
   ------------------------------------------------------------ */
const FUNDING_ROUTES = {
  none: {
    name: "No funding needed",
    d: "Programming, agreements, opening hours and volunteer time. Only a decision is needed.",
    where: []
  },
  small: {
    name: "Small works & charitable giving",
    d: "Under about £10,000: signs, seating, lighting. Local giving, small trusts, crowdfunding.",
    where: ["nationalChurches"]
  },
  development: {
    name: "Project development & feasibility",
    d: "Options appraisals, feasibility studies, business plans and consultation — what makes a capital bid credible.",
    where: ["ahf", "nationalChurches", "heritageFund"]
  },
  capital: {
    name: "Capital works & heritage grants",
    d: "Over about £100,000: extensions and major works. Expect to show engagement and an activity plan.",
    where: ["heritageFund", "ahf", "historicEngland", "nationalChurches"]
  },
  council: {
    name: "Council & public funds",
    d: "Ward budgets, neighbourhood CIL, public health and adult learning funds, and Section 106.",
    where: ["planningAid"]
  },
  trading: {
    name: "Trading income & enterprise",
    d: "Rent, hire, a café, a shop and events, planned together in a trading subsidiary.",
    where: ["plunkett"]
  },
  volunteer: {
    name: "Volunteer effort & partnership",
    d: "Friends groups, partner charities and in-kind support — cheap, but easy to exhaust.",
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
