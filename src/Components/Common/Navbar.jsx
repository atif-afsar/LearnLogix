import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Courses", to: "/courses" },
    { name: "YouTube", to: "/youtube" },
    { name: "Mobile App", to: "/mobile-app" },
    { name: "Law Aspirants", to: "/law" },
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LOGO */}
            <NavLink to="/" end className="flex items-center gap-3 relative z-10">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/images/logo.png"
                alt="LearnLogix"
                className="h-10 md:h-12 lg:h-14 w-auto object-contain"
              />
            </NavLink>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    `px-3 py-2 text-base xl:text-lg font-medium rounded-lg transition-all whitespace-nowrap
                     ${
                       isActive
                         ? "text-[#FDC700] bg-[#FDC700]/10"
                         : "text-gray-700 hover:text-[#FDC700] hover:bg-gray-50"
                     }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <NavLink
                to="/contact"
                end
                className="bg-gray-900 text-white font-semibold
                           px-6 py-2.5 rounded-lg
                           hover:bg-gray-800 transition-colors shadow-md"
              >
                GET STARTED
              </NavLink>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden h-10 w-10 flex items-center justify-center
                         text-gray-900 hover:bg-gray-100 rounded-lg transition relative z-10"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-[70] flex flex-col shadow-2xl lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b shrink-0">
                <NavLink to="/" end onClick={() => setIsOpen(false)}>
                  <img
                    src="/images/logo.png"
                    alt="LearnLogix"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </NavLink>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center
                             text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={link.to}
                      end
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block text-base sm:text-lg font-medium py-3 px-4 rounded-lg transition-all
                         ${
                           isActive
                             ? "text-[#FDC700] bg-[#FDC700]/10"
                             : "text-gray-700 hover:text-[#FDC700] hover:bg-gray-50 active:bg-gray-100"
                         }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="px-4 sm:px-6 py-4 sm:py-6 border-t space-y-3 shrink-0">
                <NavLink
                  to="/contact"
                  end
                  onClick={() => setIsOpen(false)}
                  className="block text-center w-full bg-gray-900 text-white py-3 sm:py-3.5 rounded-lg font-bold hover:bg-gray-800 active:bg-gray-950 shadow-lg transition-colors"
                >
                  GET STARTED
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  );
}