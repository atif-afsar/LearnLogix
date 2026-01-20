import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Mock NavLink component since we don't have react-router-dom
const NavLink = ({ to, children, className, onClick }) => {
  const isActive = to === "/"; // Mock active state for demo
  const computedClassName = typeof className === 'function' 
    ? className({ isActive }) 
    : className;
  
  return (
    <a href={to} className={computedClassName} onClick={onClick}>
      {children}
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Courses", to: "/courses" },
    { name: "YouTube", to: "/youtube" },
    { name: "Mobile App", to: "/mobile-app" },
    { name: "Law Aspirants", to: "/law" },
    { name: "Contact Us", to: "/contact" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const mobileItemVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.06 },
    }),
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LOGO */}
            <NavLink to="/" className="flex items-center gap-3">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/images/logo.png"
                alt="LearnLogix"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </NavLink>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  variants={linkVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-medium rounded-lg transition-all
                       ${
                         isActive
                           ? "text-[#FDC700] bg-[#FDC700]/10"
                           : "text-gray-700 hover:text-[#FDC700] hover:bg-gray-50"
                       }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                  to="/contact"
                  className="bg-gray-900 text-white font-semibold
                             px-6 py-2.5 rounded-lg
                             hover:bg-gray-800 transition-colors shadow-md
                             hover:shadow-lg"
                >
                  GET STARTED
                </NavLink>
              </motion.div>
            </div>

            {/* MOBILE TOGGLE */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="lg:hidden h-10 w-10 flex items-center justify-center
                         text-gray-900 hover:bg-gray-100 rounded-lg transition"
            >
              <Menu size={24} />
            </motion.button>
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
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Fullscreen Drawer */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-white z-50 lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-gray-50">
                <NavLink to="/" onClick={() => setIsOpen(false)}>
                  <img
                    src="/images/logo.png"
                    alt="LearnLogix"
                    className="h-12 w-auto object-contain"
                  />
                </NavLink>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center
                             text-gray-700 hover:bg-gray-200 rounded-lg transition"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block text-lg font-medium py-4 px-4 rounded-lg transition-all
                         ${
                           isActive
                             ? "text-[#FDC700] bg-[#FDC700]/10"
                             : "text-gray-700 hover:text-[#FDC700] hover:bg-gray-50"
                         }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="px-6 py-6 border-t border-gray-200 bg-gray-50 space-y-3">
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center w-full bg-gray-900 text-white py-3.5 rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-lg"
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