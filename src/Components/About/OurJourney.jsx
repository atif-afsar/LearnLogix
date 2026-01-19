import React from "react";
import { motion } from "framer-motion";

const journey = [
  {
    year: "2021",
    title: "The Beginning",
    desc: "LearnLogix started with a simple vision — making concept-based education accessible through online platforms.",
  },
  {
    year: "2022",
    title: "YouTube Growth",
    desc: "Our YouTube channel gained thousands of students by delivering clear, exam-focused content.",
  },
  {
    year: "2023",
    title: "Structured Courses",
    desc: "We launched structured programs for Class 11–12, CUET UG/PG, and Law aspirants.",
  },
  {
    year: "2024",
    title: "Pan-India Reach",
    desc: "LearnLogix became a trusted digital education platform for students across India.",
  },
];

export default function OurJourney() {
  return (
    <section className="bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full
                           bg-yellow-400/10 text-yellow-400 text-sm font-medium">
            Our Journey
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold">
            The Story of{" "}
            <span className="text-yellow-400">LearnLogix</span>
          </h2>

          <p className="mt-4 text-gray-400">
            From a simple idea to a growing national learning platform.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-10">
          {journey.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-6"
            >
              {/* Year */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full
                                bg-yellow-400 text-black
                                font-bold flex items-center justify-center">
                  {item.year}
                </div>
              </div>

              {/* Content */}
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
