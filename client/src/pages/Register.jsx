import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    location: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [locLoading, setLocLoading] = useState(true);

  /* ================================
     ⭐ AUTO LOCATION DETECTION
  ================================= */
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;

          const res = await api.get(
            `/weather?lat=${latitude}&lng=${longitude}`
          );

          const city = res.data.name.toLowerCase();

          setForm((prev) => ({
            ...prev,
            location: city
          }));
        } catch {
          console.log("Location fetch failed");
        } finally {
          setLocLoading(false);
        }
      },
      () => {
        setLocLoading(false);
      }
    );
  }, []);
  /* ================================ */

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await api.post("/auth/register", form);
      nav("/");
    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-blue-600 to-sky-500 p-6 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 blur-3xl rounded-full" />

      <div className="relative w-full max-w-5xl grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/90">

        {/* ================= LEFT SIDE ================= */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-700 to-blue-700 text-white p-12">
          <h1 className="text-4xl font-bold mb-4">Create Account</h1>

          <p className="text-indigo-100 text-lg">
            Join our Disaster Management System and receive
            real-time alerts and safety updates.
          </p>

          <div className="mt-10 space-y-3 text-sm opacity-90">
            <p>✓ Live weather updates</p>
            <p>✓ Instant emergency alerts</p>
            <p>✓ Nearby safety locations</p>
          </div>
        </div>

        {/* ================= RIGHT SIDE (FORM) ================= */}
        <div className="p-8 md:p-12">

          <form onSubmit={register} className="space-y-5">

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Sign Up</h2>
              <p className="text-sm text-gray-500">
                Fill in your details to create an account
              </p>
            </div>

            <FloatingInput
              name="name"
              label="Full Name"
              value={form.name}
              onChange={handleChange}
            />

            <FloatingInput
              name="email"
              label="Email Address"
              type="email"
              value={form.email}
              onChange={handleChange}
            />

            <FloatingInput
              name="phone"
              label="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            {/* ⭐ AUTO LOCATION FIELD */}
            <FloatingInput
              name="location"
              label={locLoading ? "Detecting location..." : "Location"}
              value={form.location}
              readOnly
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder=" "
                value={form.password}
                onChange={handleChange}
                required
                className="peer w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
              <label className="absolute left-4 top-2 text-xs text-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 transition-all">
                Password
              </label>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-xs text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg transition disabled:opacity-60"
            >
              {isLoading ? "Creating account..." : "Register"}
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/" className="font-medium text-blue-600">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}


/* ================= Reusable Floating Input ================= */
function FloatingInput({ label, ...props }) {
  return (
    <div className="relative">
      <input
        {...props}
        placeholder=" "
        required
        className="peer w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
      />
      <label className="absolute left-4 top-2 text-xs text-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 transition-all">
        {label}
      </label>
    </div>
  );
}
