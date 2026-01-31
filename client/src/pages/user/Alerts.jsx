import { useEffect, useState } from "react";
import api from "../../api/axios";
import Navbar from "../../components/Navbar";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    api.get("/alerts").then(res => setAlerts(res.data));
  }, []);

  return (
    <>
      <Navbar logout={() => localStorage.clear()} />

      <div className="min-h-screen bg-gray-50 p-8">

        <h1 className="text-3xl font-bold mb-6">🚨 Alerts History</h1>

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
                  <td className="p-4">{a.location}</td>
                  <td className="p-4">
                    {new Date(a.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </>
  );
}
