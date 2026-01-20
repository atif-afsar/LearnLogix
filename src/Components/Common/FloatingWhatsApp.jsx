import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[999] flex items-center gap-3">
      {/* Pop-up Text Label - Hidden on mobile (hidden), shown on desktop (md:flex) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="hidden md:flex bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-gray-700 font-medium text-sm whitespace-nowrap"
          >
            Hello! 👋
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.a
        href="https://wa.me/919084701476"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 
                   rounded-full bg-[#25D366] text-white
                   shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-all duration-300"
      >
        <MessageCircle size={28} strokeWidth={2} />
      </motion.a>
    </div>
  );
}