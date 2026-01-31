import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const res = await api.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "admin") {
        nav("/admin", { replace: true });
      } else {
        nav("/dashboard", { replace: true });
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-blue-600 to-sky-500 p-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 blur-3xl rounded-full" />

      <div className="relative w-full max-w-5xl grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/90">

        {/* LEFT SIDE — Branding */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-700 to-blue-700 text-white p-12">
          <h1 className="text-4xl font-bold mb-4">Your Dashboard</h1>
          <p className="text-indigo-100 text-lg leading-relaxed">
            Manage tasks, users, and operations securely from one place.
          </p>

          <div className="mt-10 space-y-3 text-sm opacity-90">
            <p>✓ Secure Authentication</p>
            <p>✓ Admin & User Access</p>
            <p>✓ Fast Performance</p>
          </div>
        </div>

        {/* RIGHT SIDE — Form */}
        <div className="p-8 md:p-12">

          <form onSubmit={handleLogin} className="space-y-6">

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Sign In</h2>
              <p className="text-sm text-gray-500">
                Enter your credentials to continue
              </p>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                required
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
              <label className="absolute left-4 top-2 text-xs text-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 transition-all">
                Email Address
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />

              <label className="absolute left-4 top-2 text-xs text-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 transition-all">
                Password
              </label>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-xs text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-lg transition disabled:opacity-60 flex items-center justify-center"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>

            {/* Links */}
            <div className="flex justify-between text-sm text-gray-500">
              <Link to="/forgot-password" className="hover:text-blue-600">
                Forgot password?
              </Link>

              <Link
                to="/register"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Create account
              </Link>
            </div>

          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-8">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
