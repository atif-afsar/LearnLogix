import React from "react";
import { Youtube, Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-22">
        
        {/* Top Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="LearnLogix Logo"
                className="h-9 w-auto object-contain rounded-sm"
              />
              <span className="text-lg font-semibold">LearnLogix</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India’s smart online learning platform for Commerce,
              Humanities, CUET UG/PG, and Law aspirants.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-yellow-400">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="#courses" className="hover:text-yellow-400 transition">Courses</a></li>
              <li><a href="#youtube" className="hover:text-yellow-400 transition">YouTube</a></li>
              <li><a href="#law" className="hover:text-yellow-400 transition">Law Aspirants</a></li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-yellow-400">
              Platforms
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#youtube" className="hover:text-yellow-400 transition">Free YouTube Classes</a></li>
              <li><a href="#app" className="hover:text-yellow-400 transition">LearnLogix Mobile App</a></li>
              <li><a href="#cuet" className="hover:text-yellow-400 transition">CUET UG / PG</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-yellow-400">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                support@learnlogix.in
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +91 9XXXXXXXXX
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-5">
              <a href="#" className="hover:text-yellow-400 transition">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} LearnLogix. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-yellow-400 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-yellow-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
