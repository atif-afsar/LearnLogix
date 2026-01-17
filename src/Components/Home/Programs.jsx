import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Book, Scale, Layers } from "lucide-react";

const programs = [
  {
    icon: Book,
    title: "Class 11 & 12",
    subtitle: "Commerce & Humanities",
    desc: "Strong foundation for board exams with concept clarity and exam-focused learning.",
  },
  {
    icon: GraduationCap,
    title: "CUET UG",
    subtitle: "Undergraduate Preparation",
    desc: "Domain subjects, general test, and language preparation for CUET UG aspirants.",
  },
  {
    icon: Layers,
    title: "CUET PG",
    subtitle: "Postgraduate Preparation",
    desc: "Structured preparation for Commerce, Humanities, and Social Sciences.",
  },
  {
    icon: Scale,
    title: "Law Aspirants",
    subtitle: "BA LL.B Foundation",
    desc: "Legal aptitude, reasoning, and constitutional basics for law entrance exams.",
  },
];

export default function Programs() {
  return (
    <section className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Explore Our{" "}
            <span className="text-yellow-400">Learning Paths</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Carefully designed programs to guide students from basics to success.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6
                         hover:border-yellow-400/40 transition"
            >
              <div
                className="w-12 h-12 flex items-center justify-center
                           rounded-xl bg-yellow-400/10 text-yellow-400 mb-5
                           group-hover:bg-yellow-400 group-hover:text-black transition"
              >
                <item.icon size={24} />
              </div>

              <h3 className="text-lg font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-yellow-400 mb-2">
                {item.subtitle}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <a
            href="#courses"
            className="inline-flex items-center justify-center
                       bg-yellow-400 text-black font-semibold
                       px-8 py-4 rounded-xl
                       hover:bg-yellow-500 transition
                       shadow-lg shadow-yellow-400/30"
          >
            View All Courses
          </a>
        </motion.div>
      </div>
    </section>
  );
}
