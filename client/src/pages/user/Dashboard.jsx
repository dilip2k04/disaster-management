import { useEffect, useState } from "react";
import api from "../../api/axios";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const nav = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const weatherRes = await api.get(`/weather?lat=${latitude}&lng=${longitude}`);
      setWeather(weatherRes.data);

      const alertRes = await api.get(
        `/alerts/location?location=${weatherRes.data.name.toLowerCase()}`
      );
      setAlerts(alertRes.data);

      if (alertRes.data.length > 0) {
        const placeRes = await api.get(`/places?lat=${latitude}&lng=${longitude}`);
        setPlaces(placeRes.data);
      }

      setLoading(false);
    });
  }, []);

  const getEmoji = (d = "") => {
    if (d.includes("rain")) return "🌧️";
    if (d.includes("cloud")) return "☁️";
    if (d.includes("clear")) return "☀️";
    return "🌤️";
  };

  return (
    <>
      <Navbar logout={() => localStorage.clear()} />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-100 p-8 space-y-8">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Overview</h1>

          <button
            onClick={() => nav("/alerts")}
            className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            View All Alerts →
          </button>
        </div>

        {/* WEATHER CARD */}
        {!loading && weather && (
          <div className="bg-white rounded-3xl shadow-xl p-8 w-80">
            <h2 className="font-semibold">{weather.name}</h2>
            <h1 className="text-6xl font-bold mt-3">
              {Math.round(weather.main.temp)}°C
            </h1>
            <p className="mt-2 text-gray-500 capitalize">
              {weather.weather[0].description} {getEmoji(weather.weather[0].description)}
            </p>
          </div>
        )}

        {/* ALERTS */}
        {alerts.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow">
            <h2 className="font-semibold text-red-600 mb-3">🚨 Alerts Near You</h2>

            {alerts.map((a) => (
              <div key={a._id} className="mb-2 text-sm">
                • {a.message}
              </div>
            ))}
          </div>
        )}

        {/* SAFETY PLACES */}
        {places.length > 0 && (
          <div className="grid md:grid-cols-3 gap-5">
            {places.slice(0, 6).map((p) => (
              <div
                key={p.place_id}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-lg"
              >
                <h3 className="font-medium">{p.name}</h3>
                <p className="text-xs text-gray-500">{p.vicinity}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
