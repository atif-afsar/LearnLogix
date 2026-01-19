import React from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function OurVision() {
  return (
    <section className="bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6
                           rounded-full bg-yellow-400/10
                           text-yellow-400 text-sm font-medium">
            <Eye size={16} />
            Our Vision
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Shaping the Future of{" "}
            <span className="text-yellow-400">Smart Learning</span>
          </h2>

          {/* Vision Text */}
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Our vision is to become a trusted national education platform
            that empowers students across India with clarity-driven learning,
            digital accessibility, and career-focused education in
            Commerce, Humanities, CUET, and Law.
          </p>

          {/* Divider */}
          <div className="mt-10 w-20 h-1 bg-yellow-400 mx-auto rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}
