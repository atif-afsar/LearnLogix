import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[999] flex items-center gap-3">
      
      {/* Tooltip / Label */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            className="hidden md:flex items-center gap-2 
                       bg-white px-4 py-2 rounded-xl shadow-xl 
                       border border-gray-100 text-sm font-semibold text-gray-800 whitespace-nowrap"
          >
            💬 Chat on <span className="text-[#25D366]">WhatsApp</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href="https://wa.me/919084701476"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center justify-center 
                   w-14 h-14 md:w-16 md:h-16 
                   rounded-full bg-[#25D366] text-white
                   shadow-[0_6px_20px_rgba(37,211,102,0.45)]
                   transition-all duration-300"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="relative z-10 text-3xl md:text-[34px]" />
      </motion.a>
    </div>
  );
}
