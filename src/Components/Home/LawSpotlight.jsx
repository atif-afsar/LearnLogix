import React from "react";
import { motion } from "framer-motion";
import { Scale, ArrowRight, Check } from "lucide-react";

export default function LawSpotlight() {
  const benefits = [
    "BA LL.B Foundation Program",
    "Legal Aptitude & Awareness",
    "Logical Reasoning for Law",
    "Exam-Oriented Practice"
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-24 overflow-hidden">
      
      {/* Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute -right-40 top-1/2 -translate-y-1/2
                        w-[500px] h-[500px]
                        bg-yellow-200 rounded-full blur-[120px] opacity-30" />
        <div className="absolute -left-40 bottom-0
                        w-[400px] h-[400px]
                        bg-yellow-100 rounded-full blur-[100px] opacity-20" />
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
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6
                            rounded-full bg-yellow-100
                            border border-yellow-200
                            text-[#FDC700] text-sm font-semibold shadow-sm"
            >
              <Scale size={16} />
              Law Aspirants
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              Build Your Career in{" "}
              <span className="text-[#FDC700]">Law</span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              LearnLogix offers foundation-level law preparation for students
              aiming for BA LL.B and CUET Law exams. Develop strong legal
              aptitude, reasoning skills, and constitutional understanding.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-100 
                                  flex items-center justify-center">
                    <Check size={14} className="text-[#FDC700]" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ x: 6 }}
              href="/law"
              className="inline-flex items-center gap-2 mt-10
                         text-yellow-600 font-semibold text-lg
                         hover:text-yellow-700 transition-colors group"
            >
              Start Law Preparation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="bg-white border-2 border-gray-200
                       rounded-3xl p-10 shadow-xl hover:shadow-2xl
                       hover:border-yellow-400 transition-all duration-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
              className="flex items-center justify-center
                            w-20 h-20 rounded-2xl
                            bg-yellow-100 text-yellow-600 mb-6
                            shadow-md"
            >
              <Scale size={36} strokeWidth={2.5} />
            </motion.div>

            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Law Foundation Program
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              A structured entry point for students planning a future in law,
              designed to strengthen fundamentals from day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/law"
                className="bg-yellow-500 text-white font-semibold
                           px-6 py-3 rounded-xl text-center
                           hover:bg-yellow-600 transition-colors
                           shadow-md hover:shadow-lg"
              >
                Explore Program
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.youtube.com/@Learn_logix"
                className="border-2 border-gray-300 text-gray-700
                           px-6 py-3 rounded-xl text-center font-semibold
                           hover:border-yellow-500 hover:text-yellow-600 
                           hover:bg-yellow-50 transition-all"
              >
                Watch Free Videos
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}