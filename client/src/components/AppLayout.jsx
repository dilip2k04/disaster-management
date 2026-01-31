import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  const role = localStorage.getItem("role");

  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Page Content */}
      <div className="flex-1 bg-gray-50 min-h-screen p-8">
        {children}
      </div>
    </div>
  );
}
