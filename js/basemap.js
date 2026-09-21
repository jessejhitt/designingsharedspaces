/* ============================================================
   PLANNING WITH RELIGION — the basemap
   ------------------------------------------------------------
   Every map on this site — the case study and opportunity map,
   the opportunities page, the mini map on a site page and the
   plan under the site studio — draws its tiles from here, so
   they share one look, one provider and one attribution.

   All four run on Leaflet 1.9.4.

   THE KEY
   CARTO's raster basemaps watermark any tile requested without
   an API key. The key below is this project's, and it has to sit
   in the tile URL: these are static pages with no server to
   proxy through, and the browser has to be able to fetch the
   tile itself. A basemap key is public by design — it is visible
   in the network tab of any site that uses one — so this is not
   a secret being leaked, but it is worth restricting it to this
   site's domain from the CARTO dashboard so it cannot be picked
   up and reused elsewhere:

     https://dashboard.basemaps.carto.com/

   Free up to 5,000,000 tile requests a calendar month across the
   whole account. The CARTO and OpenStreetMap attribution must
   stay visible: https://carto.com/attributions/

   WHY POSITRON
   CARTO Positron ("light_all") is a pale basemap with the colour
   taken out of it, which is what you want under coloured pins and
   under the studio's drawn zones: the data reads first and the
   map stays underneath it.

   THE ONE EXCEPTION
   The site studio also offers aerial imagery, because you cannot
   trace a building's footprint over a road map. CARTO has no
   aerial product, so that single layer comes from Esri. It is the
   only tile source on the site that is not CARTO.
   ============================================================ */

const CARTO_KEY = "cb1_3rnh_1_9260a1e5762e850e859a56ec";

const CARTO_ATTRIB =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors ' +
  '&copy; <a href="https://carto.com/attributions">CARTO</a>';

const ESRI_IMAGERY_ATTRIB = "Imagery &copy; Esri, Maxar, Earthstar Geographics";

/* {r} is Leaflet's retina suffix — it becomes "@2x" on high-density
   screens, and CARTO serves those at the same path. */
const BASEMAP_LAYERS = {
  /* the default, used by every map that shows pins */
  light: {
    url: `https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?key=${CARTO_KEY}`,
    opts: { attribution: CARTO_ATTRIB, maxZoom: 20, maxNativeZoom: 19 }
  },
  /* a slightly warmer street map, for reading the streets themselves */
  street: {
    url: `https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=${CARTO_KEY}`,
    opts: { attribution: CARTO_ATTRIB, maxZoom: 21, maxNativeZoom: 20 }
  },
  /* the exception: aerial imagery, for tracing a plan onto the ground */
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    opts: { attribution: ESRI_IMAGERY_ATTRIB, maxZoom: 21, maxNativeZoom: 19 }
  }
};

/* Add a basemap to a Leaflet map and return the layer, so a caller
   that swaps layers (the studio) can remove it again. */
function addBasemap(map, kind = "light", extra = {}) {
  const def = BASEMAP_LAYERS[kind];
  if (!def || typeof window.L === "undefined") return null;
  return window.L.tileLayer(def.url, { ...def.opts, ...extra }).addTo(map);
}
