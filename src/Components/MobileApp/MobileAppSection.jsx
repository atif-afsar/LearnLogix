import { motion } from "framer-motion";
import { Download, MessageCircle, Zap, Star, Users, BookOpen } from "lucide-react";

export default function MobileAppSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] bg-yellow-400/15 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6"
          >
            <Star size={16} className="text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Download Our App</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Master Your Exams with{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              LearnLogix
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed">
            The ultimate learning companion for Class 11–12, CUET,
            and Law aspirants. Study anywhere, anytime with our
            high-impact features designed for exam success.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-8">
            <StatItem icon={<Users size={20} />} value="50K+" label="Active Students" />
            <StatItem icon={<BookOpen size={20} />} value="1000+" label="Video Lessons" />
            <StatItem icon={<Star size={20} />} value="4.8" label="App Rating" />
          </div>

          {/* FEATURES */}
          <div className="mt-12 space-y-6">
            <Feature
              icon={<Download size={22} />}
              title="Offline Downloads"
              desc="Learn without limits, even without internet. Save lectures and access them anytime."
              delay={0.1}
            />

            <Feature
              icon={<Zap size={22} />}
              title="Live Quizzes"
              desc="Compete with peers in real-time sessions and track your progress on leaderboards."
              delay={0.2}
            />

            <Feature
              icon={<MessageCircle size={22} />}
              title="Doubt Solving"
              desc="Instant clarity from expert mentors 24/7. Get your questions answered in minutes."
              delay={0.3}
            />
          </div>

          {/* STORE BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <StoreButton
              href="https://play.google.com/store/apps/details?id=co.ted.gjznu"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT PHONE MOCKUP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="relative flex justify-center items-center lg:justify-end"
        >
          {/* Animated Glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[500px] h-[500px] bg-yellow-400/20 blur-[140px] rounded-full"
          />

          {/* Phone Container with 3D effect */}
          <div className="relative group">
            {/* Phone Shadow */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-transparent blur-3xl transform translate-y-12" />
            
            {/* Phone Mockup - Placeholder with gradient */}
            <div className="relative z-10 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-[9/19.5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-700 overflow-hidden group-hover:scale-105 transition-transform duration-500">
              {/* Screen Content Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-yellow-400/20 via-gray-900 to-black p-6 flex flex-col">
                {/* Status Bar */}
                <div className="flex justify-between items-center text-white/60 text-xs mb-8">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 border border-white/60 rounded-sm" />
                    <div className="w-4 h-4 border border-white/60 rounded-sm" />
                    <div className="w-4 h-4 border border-white/60 rounded-sm" />
                  </div>
                </div>

                {/* App Preview Content */}
                <div className="flex-1 flex flex-col justify-center items-center">
                  <div className="w-20 h-20 bg-yellow-400/20 rounded-2xl flex items-center justify-center mb-4 border border-yellow-400/30">
                    <BookOpen size={40} className="text-yellow-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">LearnLogix</h3>
                  <p className="text-white/60 text-xs text-center px-4">Your path to exam success</p>
                  
                  {/* Feature Pills */}
                  <div className="mt-8 space-y-2 w-full px-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-xs">
                      📚 Comprehensive Study Material
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-xs">
                      ⚡ Live Practice Sessions
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-xs">
                      🎯 Personalized Learning
                    </div>
                  </div>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-700 rounded-b-2xl" />
            </div>

            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-4 top-20 bg-yellow-400/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-black" />
                <span className="text-black text-sm font-semibold">Live Quiz</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -left-4 bottom-32 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <MessageCircle size={16} className="text-black" />
                <span className="text-black text-sm font-semibold">Ask Doubt</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Feature item with animation */
function Feature({ icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex items-start gap-4 group"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-yellow-400/30 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

/* Stat item */
function StatItem({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400">
        {icon}
      </div>
      <div>
        <div className="text-xl font-bold text-white">{value}</div>
        <div className="text-xs text-gray-500">{label}</div>
      </div>
    </div>
  );
}

/* Store button with hover effect */
function StoreButton({ href, src, alt }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="block"
    >
      <img
        src={src}
        alt={alt}
        className="h-14 rounded-lg shadow-lg hover:shadow-yellow-400/20 transition-shadow duration-300"
      />
    </motion.a>
  );
}