import React from "react";
import { Youtube, Instagram, Facebook, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3  mb-4">
              <img
                src="/images/logo.png"
                alt="LearnLogix Logo"
                className="h-9 w-auto rounded-lg object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              India’s smart online learning platform for Commerce, Humanities,
              CUET UG/PG, and Law aspirants.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-yellow-400 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", to: "/about" },
                { label: "Courses", to: "/courses" },
                { label: "YouTube", to: "/youtube" },
                { label: "Law Aspirants", to: "/law" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-yellow-400 transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-yellow-400 uppercase tracking-wider">
              Platforms
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Free YouTube Classes", to: "/youtube" },
                { label: "LearnLogix Mobile App", to: "/mobile-app" },
                { label: "CUET UG / PG", to: "/courses" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-yellow-400 transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-yellow-400 uppercase tracking-wider">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-400" />
                learnwithlogix@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-400" />
                +91 90847 01476
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: Youtube, href: "https://www.youtube.com/@Learn_logix" },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/learn__logix/",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/17MSd7MRVR/",
                },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-white/10 text-gray-400 
                             hover:text-yellow-400 hover:border-yellow-400/40
                             hover:bg-yellow-400/10 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-14 pt-8 border-t border-white/10
             flex flex-col sm:flex-row items-center
             justify-between gap-4 text-sm text-gray-500"
        >
          {/* Left */}
          <p>© {new Date().getFullYear()} LearnLogix. All rights reserved.</p>

          {/* Center */}
          <p className="text-center">
            Managed & Built by{" "}
            <a
              href="https://thebrandsway.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 text-lg transition"
            >
              The Brands<span className="text-red-500 font-semibold hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.8)] transition">Way</span>
            </a>
          </p>

          {/* Right */}
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-yellow-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-of-service"
              className="hover:text-yellow-400 transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
