import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/aboutHero.png"
          alt="About LearnLogix"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          <span className="text-white">
            Beyond Learning,
          </span>
          <br />
          <span className="text-yellow-400">
            We Build Careers.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-gray-200 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          Empowering Class 11–12, CUET, and Law aspirants with trust-driven
          education and a legacy of proven success. Join the league of
          future leaders.
        </motion.p>

        {/* CTA */}
        <Link to="/contact">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="inline-flex items-center justify-center
                     mt-10 bg-yellow-400 text-black
                     font-semibold px-8 py-4 rounded-xl
                     hover:bg-yellow-500 transition
                     shadow-lg shadow-yellow-400/30"
        >
         Contact Now
        </motion.div>
        </Link>
      </div>
    </section>
  );
}
