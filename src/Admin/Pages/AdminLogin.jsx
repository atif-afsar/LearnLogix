import React, { useState } from "react";
import { adminLogin } from "../Services/adminAuth";
import { Lock, Mail, AlertCircle, Loader } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await adminLogin(email, password);
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 sm:mb-6 shadow-lg">
              <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Admin Login
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Access your admin dashboard securely
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm flex-1">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@example.com"
                  className="w-full pl-10 pr-4 py-3 sm:py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label 
                htmlFor="password" 
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 sm:py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 sm:py-3.5 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {loading && <Loader className="w-5 h-5 animate-spin" />}
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Footer */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              LearnLogix Admin Dashboard
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            Secured with industry-standard encryption
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;