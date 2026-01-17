import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Target, Smartphone, Users } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Concept-Based Teaching",
    desc: "We focus on deep understanding, not rote learning, so students truly master every topic.",
  },
  {
    icon: Target,
    title: "Exam-Oriented Structure",
    desc: "Structured courses designed for Boards, CUET UG/PG, and Law entrance exams.",
  },
  {
    icon: Smartphone,
    title: "Learn Anytime, Anywhere",
    desc: "Access free YouTube lectures and structured app-based learning anytime.",
  },
  {
    icon: Users,
    title: "Pan-India Student Community",
    desc: "Designed for students across India with a unified, digital-first approach.",
  },
];

export default function WhyLearnLogix() {
  return (
    <section className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why Students Choose{" "}
            <span className="text-yellow-400">LearnLogix</span>
          </h2>
          <p className="mt-4 text-gray-400">
            A smarter, simpler, and more effective way to prepare for school and competitive exams.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6
                         hover:border-yellow-400/40 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center
                              rounded-xl bg-yellow-400/10 text-yellow-400 mb-5">
                <item.icon size={24} />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
