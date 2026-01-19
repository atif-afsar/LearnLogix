import { motion } from "framer-motion";
import { Youtube } from "lucide-react";

export default function YouTubeSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-red-500/10 text-red-500 rounded-full text-sm font-medium border border-red-500/20">
            <Youtube size={16} />
            Free Learning on YouTube
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Learn Concepts for Free on{" "}
            <span className="text-red-500">YouTube</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            LearnLogix's YouTube channel offers free, high-quality lectures
            for Class 11–12, CUET UG/PG, and Law aspirants with a focus on
            clarity and exam readiness.
          </p>

          <a
            href="https://www.youtube.com/@Learn_logix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-red-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105"
          >
            Visit YouTube Channel
            <Youtube size={20} />
          </a>
        </motion.div>

        {/* Right Video - YouTube Short Format */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {/* Mobile phone-style frame for YouTube Short */}
          <div className="relative w-full max-w-[360px] aspect-[9/16] rounded-3xl overflow-hidden border-4 border-gray-700 bg-black shadow-2xl shadow-red-500/20">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/DUof9Hk25cc?rel=0&modestbranding=1&controls=1"
              title="LearnLogix YouTube Short"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          {/* Decorative glow effect */}
          <div className="absolute inset-0 bg-red-500/10 blur-3xl -z-10 scale-75" />
        </motion.div>
      </div>
    </section>
  );
}