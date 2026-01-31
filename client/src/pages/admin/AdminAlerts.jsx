import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AdminAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    const res = await api.get("/alerts");
    setAlerts(res.data);
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">📜 Alerts History</h1>
        <p className="text-gray-500 text-sm">
          All alerts sent so far
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Message</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {alerts.map((a) => (
              <tr key={a._id} className="border-t hover:bg-gray-50">

                <td className="p-4">{a.message}</td>

                <td className="p-4">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                    {a.location}
                  </span>
                </td>

                <td className="p-4">
                  {new Date(a.createdAt).toLocaleString()}
                </td>

              </tr>
            ))}

            {alerts.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-6 text-gray-400">
                  No alerts yet
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  );
}
