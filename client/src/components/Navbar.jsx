export default function Navbar({ logout }) {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">🚨 Disaster System</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
