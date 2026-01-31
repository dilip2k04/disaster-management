import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  /* 🔎 simple client search */
  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">👥 Users</h1>
          <p className="text-gray-500 text-sm">
            Manage registered users
          </p>
        </div>

        {/* Search */}
        <input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl px-4 py-2"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Location</Th>
              <Th>Role</Th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((u) => (
              <tr key={u._id} className="border-t hover:bg-gray-50">

                <Td>{u.name}</Td>
                <Td>{u.email}</Td>
                <Td>{u.phone || "-"}</Td>

                <Td>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                    {u.location}
                  </span>
                </Td>

                <Td>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      u.role === "admin"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {u.role}
                  </span>
                </Td>

              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-400">
                  No users found
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>
    </div>
  );
}

/* Small helpers */

function Th({ children }) {
  return <th className="text-left p-4 font-medium">{children}</th>;
}

function Td({ children }) {
  return <td className="p-4">{children}</td>;
}
