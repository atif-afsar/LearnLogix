import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: GraduationCap,
    title: "Class 11 & 12",
    desc: "Strong board preparation with deep conceptual clarity for future competitive exams.",
    image: "/images/entrance.png",
  },
  {
    icon: Award,
    title: "CUET UG / PG",
    desc: "Focused preparation for India’s top central universities with structured guidance.",
    image: "/images/cuet.png",
    featured: true,
  },
  {
    icon: Scale,
    title: "Law Aspirants",
    desc: "Foundation-level preparation for CLAT, AILET, and other law entrance exams.",
    image: "/images/law.png",
  },
];

export default function Programs() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full
                           bg-yellow-400/10 text-yellow-400 text-sm font-medium">
            Our Programs
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Choose Your{" "}
            <span className="text-yellow-400">Learning Path</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Carefully designed programs to guide students from basics to success.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl overflow-hidden border transition
                ${item.featured
                  ? "border-yellow-400/40 bg-yellow-400/5"
                  : "border-white/10 bg-white/5 hover:border-yellow-400/30"
                }`}
            >
              {/* Image */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl
                                flex items-center justify-center
                                bg-yellow-400/10 text-yellow-400 mb-4">
                  <item.icon size={24} />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

                <button
                  className={`mt-6 text-sm font-medium
                    ${item.featured
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                    } transition`}
                >
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-14"
        >
        <Link to="/courses">
          <button
            className="inline-flex items-center justify-center
                       bg-yellow-400 text-black font-semibold
                       px-8 py-4 rounded-xl
                       hover:bg-yellow-500 transition
                       shadow-md shadow-yellow-400/30"
          >
            Explore All Programs
          </button>
        </Link>
        </motion.div>
      </div>
    </section>
  );
}
