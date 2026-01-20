import React from "react";
import { motion } from "framer-motion";
import { Target, BookOpen, Users } from "lucide-react";

export default function OurMission() {
  return (
    <section className="bg-gradient-to-b from-white via-zinc-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full
                             bg-yellow-400/15 text-yellow-600
                             text-sm font-semibold tracking-wide">
              Our Mission
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-zinc-900">
              Making Quality Education{" "}
              <span className="text-yellow-500">Accessible & Meaningful</span>
            </h2>

            <p className="mt-6 text-zinc-600 text-lg leading-relaxed max-w-xl">
              At <span className="font-semibold text-zinc-800">LearnLogix</span>, our mission is to empower students
              with concept-driven education that goes beyond memorization.
              We help learners build clarity, confidence, and competence
              for academic success and future careers.
            </p>
          </motion.div>

          {/* Right Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >

            {/* Card */}
            {[
              {
                icon: <BookOpen size={22} />,
                title: "Concept-Based Learning",
                desc: "We focus on deep understanding, not rote learning, so students truly grasp what they study.",
              },
              {
                icon: <Target size={22} />,
                title: "Exam-Oriented Approach",
                desc: "Our courses align perfectly with Boards, CUET, and Law entrance exam requirements.",
              },
              {
                icon: <Users size={22} />,
                title: "Student-First Philosophy",
                desc: "Every decision we make is centered around student success, accessibility, and growth.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex gap-5 items-start
                           bg-white border border-zinc-200
                           rounded-2xl p-6
                           shadow-sm hover:shadow-md
                           transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center
                                rounded-xl bg-yellow-400/15 text-yellow-600
                                group-hover:scale-105 transition">
                  {item.icon}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-zinc-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
