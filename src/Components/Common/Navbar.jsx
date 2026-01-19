import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

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
    { name: "Courses", to: "/#courses" },
    { name: "YouTube", to: "/#youtube" },
    { name: "Mobile App", to: "/#mobile" },
    { name: "Law Aspirants", to: "/#law" },
    { name: "Contact Us", to: "/#contact" },
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
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg"
            : "bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LOGO */}
            <NavLink to="/" className="flex items-center gap-3">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/images/logo.png"
                alt="LearnLogix"
                className="h-12 w-auto object-contain rounded-sm"
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
                      `px-3 py-2 text-sm font-medium relative transition
                       ${
                         isActive
                           ? "text-yellow-400"
                           : "text-white hover:text-yellow-400"
                       }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden md:flex">
              <NavLink
                to="/contact"
                className="bg-yellow-400 text-black font-semibold
                           px-5 py-2 rounded-lg
                           hover:bg-yellow-500 transition"
              >
                GET STARTED
              </NavLink>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden h-10 w-10 text-white text-2xl"
            >
              ☰
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
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
            />

            {/* Fullscreen Drawer */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black z-50 md:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <NavLink to="/" onClick={() => setIsOpen(false)}>
                  <img
                    src="/images/logo.png"
                    alt="LearnLogix"
                    className="h-12 w-auto object-contain"
                  />
                </NavLink>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-2">
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
                        `block text-xl font-medium py-4 border-b border-white/5 transition
                         ${
                           isActive
                             ? "text-yellow-400"
                             : "text-white hover:text-yellow-400"
                         }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="px-6 py-6 border-t border-white/10 space-y-3">
               
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-500 transition"
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
