import { useEffect, useState } from "react";
import api from "../../api/axios";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

/* =========================================
   Auto fly when marker focus changes
========================================= */
function FlyTo({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 15, { duration: 1.2 });
    }
  }, [position]);

  return null;
}

export default function SafetyMap() {
  const [coords, setCoords] = useState(null);
  const [places, setPlaces] = useState([]);
  const [focus, setFocus] = useState(null);
  const [loading, setLoading] = useState(true);

  /* =========================================
     GET USER LOCATION + PLACES
  ========================================= */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      setCoords([latitude, longitude]);

      try {
        const res = await api.get(`/places?lat=${latitude}&lng=${longitude}`);
        setPlaces(res.data);
      } catch {
        console.log("Places fetch failed");
      }

      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-gray-500">Loading map...</p>;

  /* =========================================
     Helpers
  ========================================= */
  const getIcon = (type = "") => {
    if (type.includes("hospital")) return "🏥";
    if (type.includes("police")) return "🚓";
    if (type.includes("fire")) return "🚒";
    return "📍";
  };

  /* ⭐ NEW → Open Google Maps navigation */
  const openNavigation = (lat, lng) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, "_blank");
  };

  /* =========================================
     UI
  ========================================= */
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">🛟 Nearby Safety Locations</h1>
        <p className="text-gray-500 text-sm">
          Click a place to start navigation
        </p>
      </div>

      {/* ================= MAP ================= */}
      <div className="rounded-2xl overflow-hidden shadow-xl border bg-white">
        <MapContainer
          center={coords}
          zoom={14}
          style={{ height: "450px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* You */}
          <Marker position={coords}>
            <Popup>You are here</Popup>
          </Marker>

          {/* Places */}
          {places.map((p) => {
            const [lat, lng] = p.vicinity.split(",");

            return (
              <Marker key={p.place_id} position={[Number(lat), Number(lng)]}>
                <Popup>
                  <div className="text-sm">
                    <p className="font-semibold">{p.name}</p>
                    <button
                      onClick={() => openNavigation(lat, lng)}
                      className="mt-2 text-blue-600 underline"
                    >
                      Navigate
                    </button>
                  </div>
                </Popup>
              </Marker>
            );
          })}

          <FlyTo position={focus} />
        </MapContainer>
      </div>

      {/* ================= CARDS ================= */}
      <div className="grid md:grid-cols-3 gap-5">

        {places.map((p) => {
          const [lat, lng] = p.vicinity.split(",");

          return (
            <div
              key={p.place_id}
              onClick={() => openNavigation(lat, lng)} // ⭐ redirect instead of fly
              className="bg-white rounded-2xl shadow-md p-5 cursor-pointer hover:shadow-xl hover:scale-[1.02] transition"
            >
              <h3 className="font-semibold text-gray-800">
                {getIcon(p.types[0])} {p.name}
              </h3>

              <p className="text-xs text-gray-500 mt-2 capitalize">
                {p.types[0].replace("_", " ")}
              </p>

              <p className="text-xs text-gray-400">
                {p.vicinity}
              </p>

              <p className="text-blue-600 text-xs mt-2 font-medium">
                Tap to navigate →
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
