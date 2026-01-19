import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold leading-tight"
        >
          Ready to Learn with{" "}
          <span className="text-yellow-400">LearnLogix?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-gray-400 text-lg"
        >
          Join thousands of students across India building their future
          through concept-driven learning and expert guidance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Primary */}
          <NavLink
            to="/"
            className="inline-flex items-center justify-center gap-2
                       bg-yellow-400 text-black font-semibold
                       px-8 py-4 rounded-xl
                       hover:bg-yellow-500 transition
                       shadow-md shadow-yellow-400/30"
          >
            Start Learning
            <ArrowRight size={18} />
          </NavLink>

          {/* Secondary */}
          <NavLink
            to="/#contact"
            className="inline-flex items-center justify-center gap-2
                       border border-white/20 text-white
                       px-8 py-4 rounded-xl
                       hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            <PhoneCall size={18} />
            Contact Us
          </NavLink>
        </motion.div>

        {/* Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-sm text-gray-500"
        >
          ✔ Trusted by students across India &nbsp;•&nbsp;
          ✔ 100% Online Learning &nbsp;•&nbsp;
          ✔ Concept-Based Education
        </motion.p>
      </div>
    </section>
  );
}
