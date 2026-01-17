import React from "react";
import { motion } from "framer-motion";
import { Youtube, FileText, Lock, Trophy } from "lucide-react";

const steps = [
  {
    icon: Youtube,
    title: "Learn Free on YouTube",
    desc: "Start with high-quality, concept-clear lectures available free for everyone.",
  },
  {
    icon: FileText,
    title: "Practice on Mobile App",
    desc: "Revise with notes, attempt tests, and strengthen through practice.",
  },
  {
    icon: Lock,
    title: "Enroll in Structured Courses",
    desc: "Join premium courses designed for Boards, CUET, and Law entrances.",
  },
  {
    icon: Trophy,
    title: "Crack Exams Confidently",
    desc: "Achieve success in Boards, CUET UG/PG, and Law entrance exams.",
  },
];

export default function HowItWorks() {
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
            How <span className="text-yellow-400">LearnLogix</span> Works
          </h2>
          <p className="mt-4 text-gray-400">
            A simple, effective learning journey from basics to success.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              {/* Step Number */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2
                              w-10 h-10 rounded-full
                              bg-yellow-400 text-black
                              font-bold flex items-center justify-center">
                {i + 1}
              </div>

              {/* Card */}
              <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 mx-auto flex items-center justify-center
                                rounded-xl bg-yellow-400/10 text-yellow-400 mb-4">
                  <step.icon size={24} />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
