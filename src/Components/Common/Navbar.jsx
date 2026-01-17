import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Courses", path: "/courses" },
  { name: "YouTube", path: "/youtube" },
  { name: "Resources", path: "/resources" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="backdrop-blur-md bg-black/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="bg-primary text-black p-2 rounded-lg">
              <BookOpen size={18} strokeWidth={2.2} />
            </div>
            <span className="text-white font-bold tracking-wide text-lg">
              LEARNLOGIX
            </span>
          </NavLink>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition relative
                  ${
                    isActive
                      ? "text-primary"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/login"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Log In
            </NavLink>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="/get-started"
              className="bg-primary text-black font-semibold px-5 py-2 rounded-xl text-sm shadow-[0_0_30px_rgba(250,204,21,0.35)]"
            >
              GET STARTED
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
