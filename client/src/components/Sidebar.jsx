import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar({ role }) {
  const nav = useNavigate();

  const linkStyle =
    "block px-4 py-3 rounded-xl font-medium transition hover:bg-blue-50";

  const activeStyle = "bg-blue-600 text-white";

  return (
    <div className="w-64 bg-white shadow-lg h-screen p-5 flex flex-col">

      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600 mb-8">
        🚨 DMS
      </h1>

      {/* Links */}
      <div className="space-y-2 flex-1">

        {role === "user" && (
            <>
                <NavLink to="/dashboard" className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
                }>
                🏠 Overview
                </NavLink>

                <NavLink to="/alerts" className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
                }>
                🚨 Alerts
                </NavLink>

                <NavLink to="/safety-map" className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
                }>
                🛟 Safety Map
                </NavLink>

                <NavLink to="/todo" className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
                }>
                � Todo List
                </NavLink>

                <NavLink to="/missing" className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
                }>
                🔍 Missing Persons
                </NavLink>
                
            </>
        )}


        {role === "admin" && (
            <>
                <NavLink
                to="/admin"
                className={({ isActive }) =>
                    `${linkStyle} ${isActive ? activeStyle : ""}`
                }
                >
                📊 Dashboard
                </NavLink>

                <NavLink
                to="/admin/alerts"
                className={({ isActive }) =>
                    `${linkStyle} ${isActive ? activeStyle : ""}`
                }
                >
                📜 Alerts History
                </NavLink>

                <NavLink
                    to="/admin/users"
                    className={({ isActive }) =>
                        `${linkStyle} ${isActive ? activeStyle : ""}`
                    }
                    >
                    👥 Users
                </NavLink>

                <NavLink
                    to="/admin/missing"
                    className={({ isActive }) =>
                        `${linkStyle} ${isActive ? activeStyle : ""}`
                    }
                    >
                    👑 Manage Missing Persons
                </NavLink>
            </>
        )}

      </div>

      {/* Logout */}
      <button
        onClick={() => {
          localStorage.clear();
          nav("/");
        }}
        className="mt-4 bg-red-600 text-white rounded-xl py-2"
      >
        Logout
      </button>
    </div>
  );
}
