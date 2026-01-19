import { motion } from "framer-motion";

export default function CoursesHero() {
  return (
    <section className="relative text-white pt-32 pb-24 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center object-top"
        style={{
          backgroundImage: "url('/images/courses.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-4 px-4 py-1.5
                     bg-yellow-400/10 text-yellow-400
                     rounded-full text-sm font-medium"
        >
          Our Courses
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold"
        >
          Learn What Matters for{" "}
          <span className="text-yellow-400">Your Future</span>
        </motion.h1>

        <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
          Structured programs for Class 11–12, CUET UG/PG, and Law aspirants,
          designed with a strong focus on concepts and exam readiness.
        </p>
      </div>
    </section>
  );
}
