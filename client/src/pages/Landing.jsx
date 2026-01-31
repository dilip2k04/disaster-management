import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-gray-50 text-gray-800 scroll-smooth">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <h1 className="text-xl font-bold text-indigo-700">
            DMS
          </h1>

          {/* Center links */}
          <div className="hidden md:flex gap-8 text-gray-600 font-medium">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#awareness" className="hover:text-indigo-600">Awareness</a>
          </div>

          {/* Right buttons */}
          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg text-indigo-700 border border-indigo-600 hover:bg-indigo-50"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 pt-24"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Disaster Management System
        </h1>

        <p className="max-w-2xl text-lg mb-10">
          Stay safe with real-time weather alerts, emergency notifications,
          and nearby safety locations during disasters.
        </p>

        <div className="flex gap-5">
          <Link
            to="/login"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition"
          >
            Register
          </Link>
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="py-20 px-6 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">About The System</h2>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our platform helps communities prepare for disasters by providing
          instant alerts via SMS, email, and web notifications. Users can
          monitor weather conditions, receive emergency warnings, and quickly
          find nearby hospitals, fire stations, and police stations.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Feature title="Live Weather" desc="Track your local weather instantly" />
          <Feature title="Instant Alerts" desc="Emergency messages via SMS & email" />
          <Feature title="Nearby Safety" desc="Locate hospitals & rescue centers fast" />
        </div>
      </section>


      {/* ================= AWARENESS ================= */}
      <section
        id="awareness"
        className="bg-blue-50 py-20 px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Disaster Awareness Tips
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Tip title="Flood" text="Move to higher ground immediately" />
          <Tip title="Earthquake" text="Drop, Cover, and Hold On" />
          <Tip title="Cyclone" text="Stay indoors & avoid windows" />
          <Tip title="Fire" text="Use stairs, avoid elevators" />
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-20 text-center bg-indigo-700 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Stay Safe. Stay Alert.
        </h2>

        <p className="mb-8 text-indigo-100">
          Join now to receive real-time disaster notifications.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/login"
            className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold"
          >
            Login Now
          </Link>

          <Link
            to="/register"
            className="border border-white px-6 py-3 rounded-xl"
          >
            Create Account
          </Link>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        © 2026 Disaster Management System • Built with MERN Stack
      </footer>

    </div>
  );
}


/* ================= COMPONENTS ================= */

function Feature({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}

function Tip({ title, text }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow text-center hover:shadow-lg transition">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-gray-500 text-sm">{text}</p>
    </div>
  );
}
