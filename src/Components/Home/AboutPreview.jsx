import React from "react";
import { motion } from "framer-motion";
import { BookOpenCheck, Target, Eye } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6
                            rounded-full bg-yellow-400/10
                            border border-yellow-400/20
                            text-yellow-400 text-sm font-medium">
              <BookOpenCheck size={16} />
              About LearnLogix
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              A Smarter Way to Learn for{" "}
              <span className="text-yellow-400">
                Today’s Students
              </span>
            </h2>

            <p className="mt-5 text-gray-400 max-w-xl">
              LearnLogix is a digital-first education platform built to support
              students from school education to competitive and professional
              courses. We help learners across India prepare for Commerce,
              Humanities, CUET UG/PG, and Law careers with clarity and confidence.
            </p>

            <motion.a
              whileHover={{ x: 6 }}
              href="/about"
              className="inline-flex items-center gap-2 mt-8
                         text-yellow-400 font-semibold"
            >
              Read More About Us →
            </motion.a>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-6"
          >
            {/* Mission */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl
                                bg-yellow-400/10 text-yellow-400
                                flex items-center justify-center">
                  <Target size={20} />
                </div>
                <h3 className="text-lg font-semibold">Our Mission</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                To make quality education accessible, simple, and
                concept-driven for every student.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl
                                bg-yellow-400/10 text-yellow-400
                                flex items-center justify-center">
                  <Eye size={20} />
                </div>
                <h3 className="text-lg font-semibold">Our Vision</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                To become a trusted national platform for Commerce,
                Humanities, and Law education.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
