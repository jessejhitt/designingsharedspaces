PLANNING WITH RELIGION — the site studio
========================================

WHAT'S NEW
  studio.html          The live studio page (guided chat + workbench + reading rail)
  css/studio.css       Studio styles — additive, loads after style.css, studio page only
  js/studio.js         All the studio logic in one file

WHAT CHANGED (small, additive edits)
  js/ui.js             Added "Site studio" to the shared nav (between Toolkit and Submit)
  index.html           Studio link in the masthead nav; closing CTA now opens the studio
  toolkit.html         "Try it live" button in the page head; a studio card in Downloads

DROP-IN
  These files sit inside your existing site and use your existing data.js, ui.js and
  style.css. Copy the four new/changed files over your current ones, keeping the same
  folder structure (css/, js/, root). Nothing else needs touching.

THE THREE WAYS IN (all scripted, no backend, nothing stored or sent)
  A  "My site already has uses"      -> six-dimension publicness diagnostic (sliders)
  B  "My site is mostly empty"       -> draw the plot + fill the weekly timetable
  C  "I'm looking for space"         -> ranks your real opportunity sites by need

  A and B both produce one shared reading: publicness x interaction on the same
  quadrant your detail pages use, a three-tier "where to act first" recommendation,
  the top community/commercial matches with a fit %, the intervention each needs and
  the funding route that kind of intervention tends to take, plus a precedent case
  study pulled live from your database. Both export a printable one-page brief and a
  JSON file that mirrors your submit.js shape.

TUNING IT
  Everything you'd want to adjust sits in labelled tables at the top of js/studio.js:
    GROUPS      the stakeholders the matcher tests against (needs on a 0-5 scale)
    REMEDY      the funding-as-output map (shortfall -> intervention -> funding route)
    ZONES       the drawable zone types and their "noise" weighting
    FACILITIES / CONTEXT   the toggle options
    SEEK        the ranking logic for the three seeker paths
  The matching maths lives in profile(), scoreGroup(), recommendTier().

NOTE FOR THE WRITE-UP
  There are only two real data-entry surfaces in the whole system: the site builder
  and the diagnostic. The studio session IS the submission — the JSON it exports is
  the same shape submit.js prepares. That's the "toolkit session is the submission"
  decision made concrete.
