import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "YouTube", href: "#youtube" },
    { name: "Mobile App", href: "#mobile" },
    { name: "Law Aspirants", href: "#law" },
    { name: "Contact Us", href: "#contact" },
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
      color: "#FBBF24",
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
      transition: { delay: i * 0.05 },
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
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="flex items-center gap-3"
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-12 md:h-12 w-auto object-contain rounded-sm"
              />
              <div className="hidden sm:block">
              </div>
            </motion.div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={linkVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-white text-sm font-medium px-3 py-2 relative"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-yellow-400 transition-all group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-500">
                GET STARTED
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden h-10 text-2xl w-10 text-white"
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

      {/* Full Screen Mobile Menu */}
      <motion.div
        variants={mobileMenuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-black z-50 md:hidden flex flex-col"
      >
        {/* Header with Logo */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="LearnLogix Logo"
              className="h-12 w-auto object-contain rounded-sm"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-2">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              custom={i}
              variants={mobileItemVariants}
              initial="hidden"
              animate="visible"
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white text-xl font-medium
                         py-4 border-b border-white/5
                         hover:text-yellow-400 transition"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="px-6 py-6 border-t border-white/10 space-y-3">
          <button className="w-full border border-white/20 text-white py-3 rounded-xl hover:border-yellow-400 hover:text-yellow-400 transition">
            Log In
          </button>
          <button className="w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-500 transition shadow-lg shadow-yellow-400/20">
            GET STARTED
          </button>
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
