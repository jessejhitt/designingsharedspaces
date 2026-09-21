PLANNING WITH RELIGION — prototype v2
=====================================

Rebuilt to match the Figma frames (newPWR.pdf) in layout, spacing, type size
and format, with colour used as the one area of interpretation.

RUN IT
------
It is a static site. Open index.html directly, or serve the folder:

    python3 -m http.server 8000

then visit http://localhost:8000. A local server is preferable — the map and
the site pages fetch Leaflet and OpenStreetMap tiles.


PAGES
-----
index.html          Landing splash (Figma frame 1) scrolling into the
                    narrative "why" page (frame 2). The large boxed wordmark
                    carries the question, exactly as in the Figma.
how-it-works.html   A database in two parts (frame 3) + the four-step process,
                    "why a database", and the publicness ladder in brief.
case-studies.html   Frame 4. Full-width 3-up card grid; the filter system
                    (single select / multi select / scroll scale) opens as a
                    panel from the "Filters" control.
opportunities.html  An interactive map (Figma frame 9 made primary). The four
                    forms of underuse — vacant building, open but passive, in use
                    but underused, restoration underway — are filter tiles above
                    the map, each in its pin colour; pin size shows the scale of
                    opportunity. Click a pin for its reading panel. The Filters
                    panel adds dimensions, scale, condition, lead and borough, and
                    the frame-5 card grid sits below the map as a synced list.
                    Map tiles: Esri Light Gray canvas (keyless). See js/opp-map.js.
site.html?id=…      Built to Figma frame 10 and measured against it: every
                    section sits within a few pixels of the artboard. Hero inset
                    64px with the annotated boxes at their drawn coordinates,
                    Site + Intervention tags, Overview (text · ratings +
                    sacredness triangle · map · quick links), gallery,
                    Interventions Process, Uses + timetable, Context + site
                    analysis, Publicness and Interaction analyses, the bars and
                    the publicness × interaction chart, community comments,
                    Opportunity. After those — not in the Figma, kept from the
                    prototype — the full story, what made it work, sources and
                    related sites.
                    Grand Junction carries the Figma's own wording, uses,
                    timetable and assessments, and its five photographs were
                    extracted from newPWR.pdf itself (the Wikimedia placeholders
                    are kept in images/grand-junction/_commons-placeholders/).
                    Other sites use the same template with their own data.
map.html            Frames 8–9. ?set=case or ?set=opp scopes the pins.
submit.html         Frame 6, built out into the full submission form.
toolkit.html        Frame 7, built out: decision trees, publicness ladder,
                    interaction test, compatibility list, the ten-theme design
                    checklist, the taster-session strip, glossary, downloads.
interventions.html  NEW. The intervention library — sixty entries, from
                    unlocking a second gate to inserting a new floor, each with
                    scale, cost, reversibility, where it fits, which sacred
                    conditions it survives, which of the four dimensions it
                    moves, which design themes it engages, what the site needs
                    first (0-5, the same scale the studio uses), the permission
                    route, the funding route, a one-week taster version, the
                    steps, what goes wrong, precedents in this database with a
                    note on why they relate, and the published guidance behind
                    it. Filterable eight ways and searchable; each entry opens
                    in a drawer, deep-linkable as #i/<id>.
                    The page also carries the standardised material that applies
                    to every intervention: the ten design questions, the
                    taster-session playbook, the seven "before you start" steps,
                    the four EDP findings, the permission routes, the funding
                    routes and the full resource list.
studio.html         The interactive site studio. "Draw the plot" can now sit
                    over a real basemap: search for the site, pan and zoom the
                    aerial imagery under the plan, then draw on top. Zones hold
                    the ground coordinates of their corners, so they stay pinned
                    to the site through pans and zooms, and the studio reads
                    back their true footprint in square metres.
                    Nothing needs an API key. Aerial imagery from Esri, streets
                    from OpenStreetMap via CARTO. Search is UK-first, in three
                    layers: the eleven sites in data.js are matched locally and
                    always rank first; UK postcodes go to postcodes.io (the ONS
                    dataset, exact); everything else goes to Photon, an OSM
                    geocoder biased to central London, with Nominatim as a
                    fallback if Photon is down or rate limited.
                    Google Maps was not used: its tiles and its geocoder both
                    require a billed API key.

                    Second pass. The studio now runs as five stages rather than
                    one:
                      1  Assess    the guide, the plot (seventeen zone types
                                   rather than three), the diagnostic sliders,
                                   facilities and context, with the live reading
                                   rail. The precedent panel now says WHY that
                                   case study is the precedent.
                      2  Deck      a swipeable, filterable deck of the library's
                                   interventions ranked against the site, each
                                   card carrying its fit %, the single thing
                                   standing in the way, the one-week taster, and
                                   two actions: add to the vision, or place on
                                   the plan. Placed interventions become pins
                                   anchored to the ground exactly as zones are,
                                   so they stay registered through a pan.
                      3  Week      an editable timetable in two layers — the week
                                   as it is, and the week proposed. Rows are named
                                   activities with a kind; columns are seven days
                                   x four bands. Click or drag to paint. Five
                                   example weeks load from the database's own
                                   case studies (Sunday-only, a taster term, the
                                   Sherriff Centre, Grand Junction, a churchyard
                                   week). Anything taken from the deck is offered
                                   a row here automatically.
                      4  Deeper    the ten-theme design checklist scored live,
                                   which names the weakest themes and then ranks
                                   the interventions that answer them.
                      5  Vision    now vs. proposed as two readings side by side,
                                   the chosen interventions ordered by permission
                                   weight with their steps, tasters, watch-outs
                                   and funding, the related case studies with a
                                   note on why each relates, and the resources
                                   for the process.
                    Both exports carry all of it: the brief prints the week as a
                    grid, and the JSON carries the chosen interventions with their
                    source URLs and the placed pins' coordinates.


LAYOUT CONSTANTS (transcribed from the 1408px artboard)
-------------------------------------------------------
Container       1152px, 128px side margins   (--wrap)
Header top      133px                        (--head-top)
Wordmark box    136 x 128, large 298 x 269
Nav             16px / 600, 70px gaps, underlined
Page title      60px / 700, right aligned, baseline level with the box
Cards           361px wide, 34px gutters, 232px image, 12px radius
Detail hero     inset 32px, 850px tall


COLOUR
------
White           #FFFFFF   the ground
English Red     #D96629   interaction · opportunity · hover and focus accents
Apricot         #F7C6A8   English Red lightened — uses · warm highlights
Cerulean Blue   #0093A5   publicness · openness · "established" on the map
Ink             #15181B   temporality · sacredness · structure

The four analysis axes are colour-coded consistently everywhere they appear:
in the opportunity pills, the rating pills, the panel washes and the bars.

Small white text never sits on the brand values themselves (they give only
~3.6:1 against white). Pills, buttons and top-rated scores use a deeper step
of the same hue instead (--red-strong #C2551B, --green-strong #007A89), which
passes AA. The site studio's third zone type (halls / rooms) is slate #56636C.

All tokens are at the top of css/style.css. The role names --red, --green and
--buff predate this palette and were kept so no class name had to change;
--green now holds Cerulean.


FILES
-----
css/style.css       The whole design system, plus a compatibility layer at the
                    end so studio.html and the printable downloads keep working.
css/library.css     NEW. The intervention library page and the record drawer.
                    studio.html loads it too, for the tone helpers.
js/data.js          The site database (unchanged) — sites, taxonomy, glossary,
                    publicness ladder, per-site extras.
js/evidence.js      NEW. The evidence base: the eighteen published sources with
                    full citations and links; the ten design themes with their
                    questions, what they look like in practice and what they mean
                    in a sacred building; the seven "before you start" steps; the
                    top tips; the four EDP areas with their learning points and
                    the failure case behind each; why and how to engage, with the
                    seventeen data-gathering tools and the data-protection rules;
                    the taster-session playbook; the six permission routes; and
                    the seven funding routes. Everything is paraphrased into this
                    site's own voice and cites its source.
js/interventions.js NEW. The sixty interventions in thirteen families, plus the
                    seventeen-type zone vocabulary shared with the studio's plan,
                    and scoreIntervention(), which ranks any intervention against
                    a studio site profile.
js/library.js       NEW. The intervention library page: facets, the family grid,
                    the record drawer and the reference sections.
js/detail-data.js   New: tags, hero annotations, timetables, the intervention
                    record, and the publicness / interaction assessment tables
                    for all eleven sites, plus the compatibility matrix.
js/ui.js            Header, footer, card renderers.
js/filters.js       Faceted filter engine (single / multi / scroll scale).
js/detail.js        The site page.
js/map.js           Leaflet map.
js/opp-map.js       The opportunities map and its form-of-underuse tiles.
js/submit.js        Submission form.
js/studio.js        Site studio (unchanged).
_backup-v1/         The previous prototype, kept intact.


IMAGES
------
images/london-skyline.png is your own hand-drawn line illustration. It sits on
the home page as a horizon band between the wordmark box and the first
statement, captioned "London — as a post secular city" as in the first
prototype. It is drawn with mix-blend-mode: multiply so the line sits on the
paper background rather than on a white block.

images/<site-id>/1–4.jpg are PLACEHOLDERS pulled from Wikimedia Commons.
images/credits.json lists the exact source file and URL for each one, so they
can be attributed or swapped for your own photography. Replace a file in place
and the site picks it up — 1.jpg is the card and hero image.


PHOTOGRAPHS (second pass)
-------------------------
The Wikimedia placeholders are gone. Every photograph on the site is now the
author's own, taken on the site visits for this project.

  images/<site-id>/1-4.jpg      case study photos; 1.jpg is the card and hero
  images/interventions/<id>.jpg one photograph per intervention, 60 in all
  images/credits.json           source file, place and caption for every image
  js/photos.js                  generated: PHOTOS[<intervention id>] and
                                CASE_CAPTIONS[<site id>], read by the library,
                                the studio deck and the case study galleries
  images_stock_backup/          the old Wikimedia set, kept in case anything is
                                needed back. Safe to delete.

Captions name the place and what the photograph shows ("The Sherriff Centre —
'In a church? Yes! Plus much more.'"), in the manner of the printed site boards.
They are held in one place so the same caption appears wherever the photo does.

Photos were installed by a script that EXIF-transposes (most are phone photos),
resizes and re-encodes: case studies to 1500px wide, intervention tiles to
1000px. Nothing in ~/Downloads/photos was modified.

NOT YET PHOTOGRAPHED
  st-dunstan-in-the-east and st-georges-gardens keep their Wikimedia
  placeholders — there were no photographs of either in the set supplied. Their
  attribution is preserved in images/credits.json under
  "stillFromWikimediaCommons". Drop four JPEGs into each folder to replace them.

HERO ANNOTATIONS
  The labelled boxes on a site hero used to be percentages of the hero BOX,
  measured off the Figma. The hero is object-fit: cover, so it crops a different
  amount at every viewport width and those coordinates drifted off the new
  photographs. Annotation sets written against the photos now carry
  annoSpace: "image" and are percentages of the PHOTOGRAPH; detail.js pushes
  them through the same cover transform on load and on resize. The two sets
  still in Figma coordinates are untouched.


THE INTERVENTION BOARD
----------------------
interventions.html is now a photo board rather than a table: a masonry wall of
the sixty interventions, each tile keeping its photograph's own proportions.

  - scroll, or filter by family / small & cheap / no permission / safe beside
    worship / outdoors, or search
  - keep a tile with the heart. Kept tiles are held in localStorage, so the
    board survives a reload. Nothing is sent anywhere.
  - "What you kept" then orders them by permission weight and reads the set
    back as a set: which pairs work well together, which need the week planned
    around them, which pull against each other, and what else would go well
    with what is already on the board.

Compatibility between two interventions is curated first and computed second.
Each record carries worksWith (hand-set strong pairings) and tension (genuine
conflicts, e.g. soft play against a protected quiet room). Where neither is
declared, pairScore() in js/interventions.js works it out from shared zones,
shared sacred conditions, complementary dimensions and the noise gap — with the
rule that anything occupying no space of its own (signage, opening hours, a
digital listing) supports rather than competes. GIVES[] supplies the one phrase
each intervention contributes, so a pairing says something specific rather than
repeating one sentence.

The prose was cut back throughout: two sentences of "what it is", three steps,
two watch-outs, one taster. The evidence did not change — every entry still
names its precedents and its published sources.


TAG AUDIT (Sept 2026)
---------------------
Every site's Site and Intervention tag rows were checked against this project's
own research (data.js, the process records) and against Historic England, the
National Heritage List and the sites' own material. Listing grades all verified
and correct as recorded:

  Grand Junction / St Mary Magdalene Paddington   Grade I    (NHLE 1235288)
  The Sherriff Centre / St James West Hampstead   Grade II   (NHLE 1378657)
  Garden Museum / St Mary-at-Lambeth              Grade II*
  St Dunstan-in-the-East (ruin)                   Grade I    (NHLE 1359173)
  St George's Gardens                             Grade II* registered landscape
  Tower Hamlets Cemetery Park                     Local Nature Reserve (2000),
                                                  Grade II walls and memorials
  Lambeth Palace Library                          Grade I setting (the Palace)
  St Stephen Walbrook                             Grade I    (NHLE 1285320)
  St Patrick's Wapping                            Grade II   (listed 1973)
  St John's Wapping tower                         Grade II   (NHLE 1241683)
  Paddington Old Cemetery chapels                 Grade II, in a Grade II
                                                  registered cemetery, on the
                                                  Heritage at Risk register

Three corrections were made.

  sheriff-centre   "Semi-secular" -> "Active worship" (Sunday services continue)
                   "Off-site" dropped — the nave was re-planned in place and the
                     process record says "wholly on-site"
                   "Heritage Lottery Fund" -> "Trading income". There was no
                     heritage grant; the project was funded by fundraising,
                     loans and trading, as the page's own Funding block states.
                   The Figma's page 11 tag row is byte-identical to Grand
                     Junction's on frame 10, which is what introduced all three.

  grand-junction   "Semi-secular" -> "Active worship" (worship continues in the
                     nave and the undercroft chapel)

  lambeth-palace-  "Charitable giving" -> "Institutional capital". The £23.5m
  library            building was commissioned and funded by the Church
                     Commissioners for England, not by public giving.

The last Site tag on every page is now the same value as data.js `sacredness`,
so what the page shows and what the filters match on cannot drift apart. All
eleven agree.

A NOTE ON "SEMI-SECULAR"
  The toolkit's decision tree defines Semi-secular as "sacred traces remain",
  i.e. worship has largely gone, and Active worship as the condition where
  services continue and are time-shared with other uses. Grand Junction and the
  Sherriff Centre both hold weekly services, so both read as Active worship
  under that definition even though their weeks are dominated by secular use.
  If the intention is instead that Semi-secular describes a church whose week is
  mostly secular regardless of whether worship continues, the definition in
  toolkit.html should change and these two tags should go back — but the two
  cannot both stand as they were.


THE WORDMARK LINE
-----------------
The boxed wordmark now carries the same line everywhere it appears:

    The creative database for designing interaction in underused religious spaces.

It previously said that only on the home splash and the footer call-to-action;
the header mark on inner pages carried a different, questioning line ("Why do we
need a creative database of case studies?"). js/ui.js now holds one constant,
MARK_LINE, and MARK_TAGLINE.home and .inner both point at it, so there is a
single place to change it.

The three printable letterheads — the site studio brief (js/studio.js), the
design checklist and the site visit assessment sheet (downloads/) — used to show
the wordmark with no line at all. They now carry it too, set small and in
sentence case beneath the name, with matching .mark b / .mark i rules in each
file's own stylesheet.

Not changed: the visually hidden <h1> on index.html still reads "Why do we need
a creative database of case studies?". That is the page's accessible heading for
the narrative section, not an instance of the mark, and it is the question the
page goes on to answer — replacing it would duplicate the wordmark and lose the
document outline.


THE BASEMAP
-----------
All four maps — the case study / opportunity map (map.html), the opportunities
map, the mini map on a site page, and the plan under the site studio — now draw
their tiles from one place, js/basemap.js. They already shared the same
software (Leaflet 1.9.4); they did not share a look.

  before                                   after
  map.html          CARTO Positron,        CARTO Positron, keyed
                    watermarked
  opportunities     Esri Light Gray        CARTO Positron, keyed
  site mini map     Esri Light Gray        CARTO Positron, keyed
  studio street     CARTO Voyager,         CARTO Positron, keyed
                    watermarked
  studio satellite  Esri World Imagery     unchanged — the one exception

Two of them had been moved to Esri only to dodge CARTO's "API key required"
watermark. With a key that reason has gone, so they are back on CARTO and the
site now has one provider, one attribution and one look. Positron is the pale,
desaturated style, which is what you want under coloured pins and under the
studio's drawn zones: the data reads first.

The exception is the studio's aerial layer. You cannot trace a building
footprint over a road map, and CARTO has no aerial product, so that single
layer stays on Esri World Imagery. It is the only non-CARTO tile source left.

THE KEY
  It lives once, at the top of js/basemap.js, and is appended to the CARTO
  raster URLs as ?key=... A basemap key has to be in the tile URL: these are
  static pages with no server to proxy through, so the browser fetches the tile
  itself. Keys of this kind are public by design and visible in any browser's
  network tab — that is normal, not a leak — but it is worth adding a domain
  restriction from the CARTO dashboard so it cannot be picked up and used on
  another site:

    https://dashboard.basemaps.carto.com/

  Free to 5,000,000 tile requests a calendar month across the whole account.
  The CARTO and OpenStreetMap attribution is required and is present on every
  map (Leaflet's attribution control, bottom right).

  If the watermark ever reappears, it is almost always a cached tile: the
  browser and CARTO's CDN both hold them for a while. Hard-refresh, or bump the
  ?v= number on the script tags.


THE SCROLL CUE ON THE LANDING PAGE
----------------------------------
The "Scroll" cue at the foot of the splash used to jump to #why, the narrative
section, which sits *below* the header slot — so it carried straight past the
wordmark and the nav. It now stops on them: the header slot carries id
"masthead" and the cue points at it, landing with the masthead at the top of the
viewport (the splash is exactly 100svh tall, so it is a one-screen move).

Above 900px the six page links sit inline beside the wordmark; below that they
collapse behind the "Menu" button, which is the existing responsive behaviour.

One bug fixed while doing it: the cue is an ordinary anchor, and a link to the
hash the page is already on does nothing. Click Scroll, scroll back to the top,
click Scroll again — nothing happened. initScrollCue() in js/ui.js now handles
the click itself with scrollIntoView, so it works every time and leaves no hash
in the URL. The href stays as the no-JavaScript fallback, and the handler
respects prefers-reduced-motion.


EVIDENCE AND SOURCES
--------------------
The second pass made the site's advice traceable. Everything the intervention
library, the toolkit's design checklist and the studio's deeper assessment say
is paraphrased from published guidance and names its source, which is linked
from the page. js/evidence.js holds the full citations; SOURCE_LIST renders
them at the foot of interventions.html.

The two that do the most work:

  The Glass-House Community Led Design, "Making Buildings Work for Your
  Community: Design, Refurbishment and Retrofit" (2011), with Wright & Wright
  Architects, for the Asset Transfer Unit. The ten design themes -- context,
  identity, connectivity/legibility, access, flexibility, resources,
  management & maintenance, security, enterprise, delight -- and the "before
  you start" steps and top tips are its structure. Each theme in evidence.js
  carries a forWorship note, which is this project's own contribution: what the
  theme means when the building is also sacred.

  Empowering Design Practices, "Community-led transformation of historic places
  of worship" (Becky Payne, 2021), plus "Tips for your community engagement
  strategy" and "Making community engagement count". Leadership, engagement,
  scale & style and capacity, with the failure cases that make each point.

Also drawn on: Crossing the Threshold (Diocese of Hereford / HRBA), the Open
Churches Toolkit (Diocese of London), ChurchCare and the faculty system,
Historic England, the National Lottery Heritage Fund, the Architectural
Heritage Fund, the National Churches Trust, Planning Aid England, the Centre
for Accessible Environments, the Plunkett Foundation, and the NPPF.

The case-study detail in the interventions -- the Sherriff Centre's post
office and Lady Chapel, Grand Junction's new wing and its programme, St
Patrick's unadvertised banners -- comes from this project's own site visits
and from the sites' published material, and is already recorded in data.js
and detail-data.js.


A NOTE ON CACHING
-----------------
studio.html, interventions.html and toolkit.html load their local CSS and JS
with a ?v= query. Python's http.server sends no cache headers, so browsers
cache aggressively and will otherwise keep serving an old studio.js after an
edit. Bump the number when you change a file and the browser will pick it up.
