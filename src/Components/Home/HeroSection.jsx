import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";

// Memoized floating particles component
const FloatingParticles = memo(() => {
  const particles = useMemo(() => 
    Array.from({ length: 10 }, (_, i) => ({ // Reduced from 20 to 10
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
});

FloatingParticles.displayName = 'FloatingParticles';

// Memoized stats component
const StatsSection = memo(() => {
  const stats = useMemo(() => [
    { number: "50,000+", label: "Active Students" },
    { number: "1000+", label: "Video Lessons" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Learning Access" }
  ], []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.1 }}
          className="text-center"
        >
          <div className="text-2xl md:text-3xl font-bold text-yellow-400">
            {stat.number}
          </div>
          <div className="text-sm text-gray-400 mt-1">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
});

StatsSection.displayName = 'StatsSection';

const HeroSection = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Animated Background Grid - Optimized */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            willChange: 'auto' // Optimize for animations
          }} 
        />
      </div>

      {/* Background Glow Effects - Reduced complexity */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/4 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                     bg-gradient-to-r from-yellow-400/10 to-yellow-500/5
                     border border-yellow-400/30
                     text-yellow-400 text-sm font-semibold mb-8
                     shadow-lg shadow-yellow-400/10"
        >
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          NEW: CUET 2024 BATCHES LIVE
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight"
        >
          <span className="text-white">LEARN </span>
          <span className="text-yellow-400">ANYTIME.</span>
          <br />
          <span className="text-white">LEARN </span>
          <span className="text-white">ANYWHERE.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-gray-400 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed"
        >
          Your ultimate companion for Class 11-12, CUET, and Law entrance excellence. 
          Join 50,000+ students mastering their future.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5"
        >
          <a 
            href="https://play.google.com/store/apps/details?id=co.ted.gjznu" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Download LearnLogix App from Google Play Store"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-3
                         bg-yellow-400 text-black font-bold text-base
                         px-8 py-4 rounded-xl
                         hover:bg-yellow-500 transition-all
                         shadow-xl shadow-yellow-400/30
                         overflow-hidden"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
              </svg>
              Download App
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </a>

          <a 
            href="https://www.youtube.com/@Learn_logix" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Watch LearnLogix videos on YouTube"
          >
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "rgb(251, 191, 36)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3
                         border-2 border-white/20 text-white font-semibold text-base
                         px-8 py-4 rounded-xl
                         hover:border-yellow-400 hover:text-yellow-400
                         transition-all
                         bg-white/5 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
              </svg>
              Watch on YouTube
            </motion.button>
          </a>
        </motion.div>

        {/* Stats Section */}
        <StatsSection />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Optimized Floating Elements */}
      <FloatingParticles />
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;