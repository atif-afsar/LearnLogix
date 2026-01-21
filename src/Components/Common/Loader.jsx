import { motion } from "framer-motion";

export default function MinimalLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">

        {/* Logo */}
        <motion.img
          src="/images/logo.png"
          alt="LearnLogix"
          className="w-54 h-54 object-contain rounded-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Progress bar */}
        <div className="relative w-52 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full w-20 bg-yellow-400"
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Text */}
        <motion.p
          className="text-xs tracking-[0.3em] text-zinc-200 uppercase"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading
        </motion.p>

      </div>
    </div>
  );
}
