import React from "react";
import { motion } from "framer-motion";
import { Target, BookOpen, Users } from "lucide-react";

export default function OurMission() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-14 lg:grid-cols-2 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full
                             bg-yellow-400/10 text-yellow-400 text-sm font-medium">
              Our Mission
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Making Quality Education{" "}
              <span className="text-yellow-400">Accessible & Meaningful</span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
              At LearnLogix, our mission is to empower students with
              concept-driven education that goes beyond memorization.
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
            {/* Value 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 flex items-center justify-center
                              rounded-xl bg-yellow-400/10 text-yellow-400">
                <BookOpen size={22} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  Concept-Based Learning
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We focus on deep understanding, not rote learning, so students
                  truly grasp what they study.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 flex items-center justify-center
                              rounded-xl bg-yellow-400/10 text-yellow-400">
                <Target size={22} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  Exam-Oriented Approach
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our courses are structured to align with Boards, CUET,
                  and Law entrance exam requirements.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 flex items-center justify-center
                              rounded-xl bg-yellow-400/10 text-yellow-400">
                <Users size={22} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  Student-First Philosophy
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every decision we make is centered around student success,
                  accessibility, and long-term growth.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
