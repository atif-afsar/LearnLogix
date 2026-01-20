import { motion } from "framer-motion";
import { Scale, BookOpen, Brain } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function LawAspirantsSection() {
  return (
    <section className="relative bg-black text-white py-12 overflow-hidden">

      {/* Background Accent */}
      <div className="absolute inset-0">
        <div
          className="absolute right-1/4 top-1/2 -translate-y-1/2
                     w-[600px] h-[600px]
                     bg-yellow-400/15 blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6
                      grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2
                           px-4 py-1.5 mb-4
                           bg-yellow-400/10 text-yellow-400
                           rounded-full text-sm font-medium">
            <Scale size={16} />
            Law Aspirants
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Build Your Career in{" "}
            <span className="text-yellow-400">Law</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            LearnLogix offers focused foundation-level preparation for
            BA LL.B and CUET Law aspirants, emphasizing legal aptitude,
            reasoning skills, and constitutional basics.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-5">

            <Feature
              icon={<BookOpen size={20} />}
              title="Legal Aptitude & Awareness"
              desc="Strong foundation in law concepts and current legal awareness."
            />

            <Feature
              icon={<Brain size={20} />}
              title="Logical & Critical Reasoning"
              desc="Train your analytical thinking essential for law entrance exams."
            />

            <Feature
              icon={<Scale size={20} />}
              title="Exam-Oriented Preparation"
              desc="Structured learning aligned with BA LL.B & CUET Law patterns."
            />

          </div>

          {/* CTA */}
          <Link to="/contact">
          <div
            className="inline-block mt-10 px-8 py-4
                       bg-yellow-400 text-black font-semibold
                       rounded-xl hover:bg-yellow-500 transition
                       shadow-lg shadow-yellow-400/30"
          >
            Start Law Preparation
          </div>
          </Link>
        </motion.div>

        {/* RIGHT IMAGE */}
    <motion.div
  initial={{ opacity: 0, scale: 0.9, y: 30 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="relative flex justify-center items-center py-16"
>
  {/* Optimized glow (single layer) */}
  <div
    className="absolute
               w-[420px] h-[420px]
               sm:w-[520px] sm:h-[520px]
               lg:w-[600px] lg:h-[600px]
               bg-yellow-400/15
               blur-[120px]
               rounded-full"
  />

  {/* Static large image */}
  <img
    src="/images/lawBanner.png"
    alt="Law Aspirants Preparation"
    className="relative z-10
               w-[340px]
               sm:w-[420px]
               md:w-[480px]
               lg:w-[560px]
               xl:w-[600px]
               drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]
               will-change-transform rounded-3xl"
  />
</motion.div>

      </div>
    </section>
  );
}

/* Feature Item */
function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full
                      bg-yellow-400/10 text-yellow-400
                      flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </div>
  );
}
