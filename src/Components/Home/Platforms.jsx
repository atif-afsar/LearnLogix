import React from "react";
import { motion } from "framer-motion";
import { Youtube, Smartphone } from "lucide-react";

export default function Platforms() {
  return (
    <section className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Learn on Your{" "}
            <span className="text-yellow-400">Favorite Platform</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Start free on YouTube or unlock structured learning through our mobile app.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* YouTube */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8
                       hover:border-red-500/40 transition"
          >
            <div className="w-14 h-14 flex items-center justify-center
                            rounded-xl bg-red-500/10 text-red-500 mb-6">
              <Youtube size={28} />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              YouTube Learning
            </h3>

            <p className="text-gray-400 mb-6">
              Free, high-quality concept-based lectures for Class 11–12, CUET UG/PG,
              and Law aspirants — accessible to every student in India.
            </p>

            <a
              href="#youtube"
              className="inline-flex items-center justify-center
                         bg-red-500 text-white font-semibold
                         px-6 py-3 rounded-xl
                         hover:bg-red-600 transition"
            >
              ▶ Subscribe Now
            </a>
          </motion.div>

          {/* Mobile App */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8
                       hover:border-yellow-400/40 transition"
          >
            <div className="w-14 h-14 flex items-center justify-center
                            rounded-xl bg-yellow-400/10 text-yellow-400 mb-6">
              <Smartphone size={28} />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              LearnLogix Mobile App
            </h3>

            <p className="text-gray-400 mb-6">
              Access structured courses, PDF notes, practice tests, and
              CUET & Law modules — all in one app.
            </p>

            <a
              href="#app"
              className="inline-flex items-center justify-center
                         bg-yellow-400 text-black font-semibold
                         px-6 py-3 rounded-xl
                         hover:bg-yellow-500 transition
                         shadow-lg shadow-yellow-400/30"
            >
              📱 Download App
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
