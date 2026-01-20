import React from "react";
import { motion } from "framer-motion";

const journey = [
  {
    year: "2024",
    title: "The Idea Took Shape",
    desc: "LearnLogix was founded with a clear goal — to bring concept-driven, honest education to students who want clarity, not shortcuts.",
  },
  {
    year: "Early 2025",
    title: "Building the Foundation",
    desc: "We began with focused batches for Class 11–12, CUET, and Law aspirants, emphasizing strong fundamentals and personal guidance.",
  },
  {
    year: "Mid 2025",
    title: "Learning Beyond Classrooms",
    desc: "To support students outside the classroom, we introduced digital learning resources, recorded lessons, and doubt-solving support.",
  },
  {
    year: "Now",
    title: "Growing with Our Students",
    desc: "As a new coaching institute, we are continuously evolving — improving teaching methods, curriculum quality, and student experience every day.",
  },
];

export default function OurJourney() {
  return (
    <section className="bg-gradient-to-b from-white via-zinc-50 to-white py-28 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full
                           bg-yellow-400/15 text-yellow-600
                           text-sm font-semibold tracking-wide">
            Our Journey
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900">
            The Beginning of{" "}
            <span className="text-yellow-500">LearnLogix</span>
          </h2>

          <p className="mt-5 text-zinc-600 text-lg">
            Every great institution starts small — with purpose, passion,
            and a commitment to do things the right way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-12">
          {journey.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 items-start"
            >
              {/* Year */}
              <div className="flex-shrink-0">
                <div
                  className="w-18 h-16 rounded-full
                             bg-yellow-400 text-black
                             font-bold text-sm
                             flex items-center justify-center
                             shadow-md"
                >
                  {item.year}
                </div>
              </div>

              {/* Content */}
              <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm">
                <h4 className="text-lg font-semibold text-zinc-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-zinc-600 text-sm leading-relaxed">
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
