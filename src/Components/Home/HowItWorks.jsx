import React from "react";
import { motion } from "framer-motion";
import { Youtube, FileText, Lock, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Youtube,
    title: "Learn Free on YouTube",
    desc: "Start with high-quality, concept-clear lectures available free for everyone.",
  },
  {
    icon: FileText,
    title: "Practice on Mobile App",
    desc: "Revise with notes, attempt tests, and strengthen through practice.",
  },
  {
    icon: Lock,
    title: "Enroll in Structured Courses",
    desc: "Join premium courses designed for Boards, CUET, and Law entrances.",
  },
  {
    icon: Trophy,
    title: "Crack Exams Confidently",
    desc: "Achieve success in Boards, CUET UG/PG, and Law entrance exams.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block px-4 py-2 bg-yellow-100 text-[#FDC700] rounded-full text-sm font-medium mb-4"
          >
            Simple 4-Step Process
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            How <span className="text-[#FDC700]">LearnLogix</span> Works
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            A simple, effective learning journey from basics to success
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 opacity-40"></div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Step Number Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2, type: "spring" }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20
                              w-12 h-12 rounded-full
                              bg-[#FDC700]
                              text-white shadow-lg
                              font-bold text-lg flex items-center justify-center
                              border-4 border-white"
                >
                  {i + 1}
                </motion.div>

                {/* Arrow Between Steps - Hidden on mobile and last item */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                    className="hidden lg:block absolute top-20 -right-4 z-10"
                  >
                    <ArrowRight className="text-[#FDC700]" size={24} />
                  </motion.div>
                )}

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mt-10 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl 
                             border-2 border-gray-200 hover:border-[#FDC700]
                             transition-all duration-300 h-full"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto flex items-center justify-center
                                  rounded-xl bg-yellow-100 mb-5
                                  group-hover:scale-110 transition-transform">
                    <step.icon size={28} className="text-yellow-600" strokeWidth={2.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600
                     text-white font-semibold rounded-full shadow-lg
                     hover:shadow-xl transition-all duration-300
                     inline-flex items-center gap-2"
          >
            Start Your Journey Today
            <ArrowRight size={20} />
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}