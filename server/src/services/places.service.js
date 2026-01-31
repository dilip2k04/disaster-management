const axios = require("axios");

exports.getNearbyPlaces = async (lat, lng) => {
  try {
    const radius = 3000;

    /* =========================================
       IMPROVED QUERY (covers all variations)
    ========================================= */
    const query = `
    [out:json][timeout:25];
    (
      /* Hospitals */
      node["amenity"="hospital"](around:${radius},${lat},${lng});

      /* Police */
      node["amenity"="police"](around:${radius},${lat},${lng});
      node["amenity"="police_station"](around:${radius},${lat},${lng});

      /* Fire */
      node["amenity"="fire_station"](around:${radius},${lat},${lng});
      node["amenity"="firestation"](around:${radius},${lat},${lng});
      node["emergency"="fire_station"](around:${radius},${lat},${lng});
    );
    out;
    `;

    const { data } = await axios.post(
      "https://overpass-api.de/api/interpreter",
      query,
      {
        headers: { "Content-Type": "text/plain" },
        timeout: 15000
      }
    );

    /* =========================================
       NORMALIZE TYPES (frontend friendly)
    ========================================= */
    return (data.elements || []).map((p) => {
      const rawType =
        p.tags?.amenity ||
        p.tags?.emergency ||
        "unknown";

      let type = "other";

      if (rawType.includes("hospital")) type = "hospital";
      else if (rawType.includes("police")) type = "police";
      else if (rawType.includes("fire")) type = "fire";

      return {
        place_id: p.id,
        name: p.tags?.name || "Unnamed Place",
        vicinity: `${p.lat.toFixed(4)}, ${p.lon.toFixed(4)}`,
        types: [type] // ⭐ CLEAN + CONSISTENT
      };
    });

  } catch (err) {
    console.log("Overpass error:", err.message);
    return [];
  }
};
