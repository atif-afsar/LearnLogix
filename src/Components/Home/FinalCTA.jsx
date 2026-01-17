import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Download, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[600px]
                        bg-yellow-400/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          Start Your Learning Journey with{" "}
          <span className="text-yellow-400">LearnLogix</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-gray-300 max-w-3xl mx-auto"
        >
          Join thousands of students across India preparing for
          Class 11–12, CUET UG/PG, and Law exams with clarity and confidence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Contact / WhatsApp */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center justify-center gap-2
                       bg-yellow-400 text-black font-semibold
                       px-8 py-4 rounded-xl
                       hover:bg-yellow-500 transition
                       shadow-lg shadow-yellow-400/30"
          >
            <PhoneCall size={20} />
            Contact Us
          </motion.a>

          {/* App Download */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#app"
            className="inline-flex items-center justify-center gap-2
                       border border-white/20 text-white
                       px-8 py-4 rounded-xl
                       hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            <Download size={20} />
            Download App
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        {/* Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-sm text-gray-400"
        >
          ✔ 100% Online &nbsp;•&nbsp; ✔ Concept-Based Learning &nbsp;•&nbsp; ✔ Pan-India Access
        </motion.p>
      </div>
    </section>
  );
}
