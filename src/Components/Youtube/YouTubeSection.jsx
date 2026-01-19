import { motion } from "framer-motion";
import { Youtube } from "lucide-react";

export default function YouTubeSection() {
  return (
    <section className="relative py-20 text-white overflow-hidden">

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid
                      lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2
                           px-4 py-1.5 mb-4
                           bg-red-500/10 text-red-500
                           rounded-full text-sm font-medium">
            <Youtube size={16} />
            Free Learning on YouTube
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Learn Concepts for Free on{" "}
            <span className="text-red-500">YouTube</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            LearnLogix’s YouTube channel offers free, high-quality lectures
            for Class 11–12, CUET UG/PG, and Law aspirants with a focus on
            clarity and exam readiness.
          </p>

          <a
            href="https://www.youtube.com/@Learn_logix/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8
                       bg-red-600 text-white font-semibold
                       px-8 py-4 rounded-xl
                       hover:bg-red-700 transition
                       shadow-lg shadow-red-600/30"
          >
            Visit YouTube Channel
            <Youtube size={20} />
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <img
              src="/images/youtubeHero.png"
              alt="LearnLogix YouTube Channel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
