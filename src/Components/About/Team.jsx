import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MeetOurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/team")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data))
      .catch((err) => console.error("Failed to load team:", err));
  }, []);

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-6 py-2.5 rounded-full
                       bg-yellow-500/20 text-yellow-400 border border-yellow-500/30
                       text-sm font-bold tracking-wider uppercase backdrop-blur-sm"
          >
            Our Dream Team
          </motion.span>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
            Meet the Minds Behind{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              LearnLogix
            </span>
          </h2>

          <p className="text-xl text-zinc-400 leading-relaxed">
            A passionate team of educators and mentors dedicated to
            student success and concept-driven learning.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8
                         border border-zinc-800 hover:border-yellow-500/50
                         shadow-2xl hover:shadow-yellow-500/20
                         transition-all duration-500 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 
                              group-hover:from-yellow-500/20 group-hover:via-yellow-500/10 group-hover:to-yellow-500/20 
                              transition-all duration-500 pointer-events-none" />

              {/* Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full blur-2xl 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image */}
              <div className="relative mx-auto mb-8 w-full aspect-square rounded-2xl overflow-hidden
                              ring-4 ring-zinc-800 group-hover:ring-yellow-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <div className="absolute inset-0 bg-yellow-500/30 blur-3xl scale-0 
                                group-hover:scale-100 transition-transform duration-700" />

                <img
                  src={member.image || "https://via.placeholder.com/400?text=Team+Member"}
                  alt={member.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400?text=No+Image";
                  }}
                  className="relative w-full h-full object-cover
                             group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 border-2 border-yellow-500/0 
                                group-hover:border-yellow-500/80 rounded-2xl
                                transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h4 className="text-2xl font-bold text-white mb-2 
                               group-hover:text-yellow-400 transition-colors duration-300">
                  {member.name}
                </h4>

                <div className="inline-flex flex-col items-center gap-2 px-4 py-3 rounded-full
                                bg-yellow-500/10 border border-yellow-500/20
                                group-hover:bg-yellow-500/20 group-hover:border-yellow-500/40
                                transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                    <p className="text-sm font-semibold text-yellow-400">
                      {member.role}
                    </p>
                  </div>

                  {member.experience && (
                    <p className="text-sm font-semibold text-yellow-100">
                      {member.experience}
                    </p>
                  )}
                </div>
              </div>

              {/* Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 h-1 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
        />
      </div>
    </section>
  );
}
