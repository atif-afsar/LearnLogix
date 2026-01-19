import React from "react";
import { motion } from "framer-motion";
import { Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function LawSpotlight() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute inset-0">
        <div className="absolute -right-40 top-1/2 -translate-y-1/2
                        w-[500px] h-[500px]
                        bg-yellow-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6
                            rounded-full bg-yellow-400/10
                            border border-yellow-400/20
                            text-yellow-400 text-sm font-medium">
              <Scale size={16} />
              Law Aspirants
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Build Your Career in{" "}
              <span className="text-yellow-400">Law</span>
            </h2>

            <p className="mt-5 text-gray-400 max-w-xl">
              LearnLogix offers foundation-level law preparation for students
              aiming for BA LL.B and CUET Law exams. Develop strong legal
              aptitude, reasoning skills, and constitutional understanding.
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✔ BA LL.B Foundation Program</li>
              <li>✔ Legal Aptitude & Awareness</li>
              <li>✔ Logical Reasoning for Law</li>
              <li>✔ Exam-Oriented Practice</li>
            </ul>

            <motion.a
              whileHover={{ x: 6 }}
              href="/law"
              className="inline-flex items-center gap-2 mt-8
                         text-yellow-400 font-semibold"
            >
              Start Law Preparation
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10
                       rounded-3xl p-10"
          >
            <div className="flex items-center justify-center
                            w-20 h-20 rounded-2xl
                            bg-yellow-400/10 text-yellow-400 mb-6">
              <Scale size={36} />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Law Foundation Program
            </h3>

            <p className="text-gray-400 mb-6">
              A structured entry point for students planning a future in law,
              designed to strengthen fundamentals from day one.
            </p>

            <div className="flex gap-4">
              <Link
                to="/law"
                className="bg-yellow-400 text-black font-semibold
                           px-6 py-3 rounded-xl
                           hover:bg-yellow-500 transition"
              >
                Explore Program
              </Link>

              <a
                href="https://www.youtube.com/@Learn_logix"
                className="border border-white/20 text-white
                           px-6 py-3 rounded-xl
                           hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                Watch Free Videos
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
