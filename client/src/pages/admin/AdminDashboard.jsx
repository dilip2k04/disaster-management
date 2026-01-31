import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [locations, setLocations] = useState([]);

  const [msg, setMsg] = useState("");
  const [location, setLocation] = useState("");
  const [sendAll, setSendAll] = useState(false);

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
    fetchLocations();
  }, []);

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  const fetchLocations = async () => {
    const res = await api.get("/users/locations");
    setLocations(res.data);
  };

  const send = async () => {
    if (!msg.trim()) return setStatus("⚠ Enter message");
    if (!sendAll && !location) return setStatus("⚠ Select location or ALL");

    try {
      setLoading(true);

      const res = await api.post("/alerts", {
        message: msg,
        location,
        sendAll
      });

      setStatus(`✅ Sent to ${res.data.count} users`);
      setMsg("");

    } catch {
      setStatus("❌ Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Users" value={users.length} icon="👥" />
        <StatCard title="Locations" value={locations.length} icon="📍" />
        <StatCard title="Draft" value={msg ? "Yes" : "No"} icon="✍️" />
      </div>

      {/* SEND ALERT */}
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5 max-w-2xl">

        <h2 className="font-semibold text-lg">🚨 Send Alert</h2>

        <textarea
          rows="4"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="w-full border rounded-xl p-4"
        />

        <div className="flex gap-3">
          <select
            disabled={sendAll}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 border rounded-xl p-3"
          >
            <option value="">Select Location</option>
            {locations.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
          </select>

          <button
            onClick={send}
            disabled={loading}
            className="px-6 bg-red-600 text-white rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={sendAll}
            onChange={(e) => {
              setSendAll(e.target.checked);
              setLocation("");
            }}
          />
          Send to ALL users
        </label>

        {status && <p className="text-sm">{status}</p>}
      </div>

    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 flex justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
      <span>{icon}</span>
    </div>
  );
}
