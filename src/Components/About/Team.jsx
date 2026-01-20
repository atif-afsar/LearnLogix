import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Yasir Ahmad",
    role: "Founder & Lead Educator",
    image: "/images/team/yasir.jpg",
  },
  {
    name: "Ayesha Khan",
    role: "Commerce Faculty",
    image: "/images/team/ayesha.jpg",
  },
  {
    name: "Rahul Verma",
    role: "CUET & Humanities Mentor",
    image: "/images/team/rahul.jpg",
  },
  {
    name: "Faizan Ali",
    role: "Law Faculty",
    image: "/images/team/faizan.jpg",
  },
];

export default function MeetOurTeam() {
  return (
    <section className="bg-gradient-to-b from-white via-zinc-50 to-white py-28 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full
                           bg-yellow-400/15 text-yellow-600
                           text-sm font-semibold tracking-wide">
            Our Team
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900">
            Meet the Minds Behind{" "}
            <span className="text-yellow-500">LearnLogix</span>
          </h2>

          <p className="mt-5 text-zinc-600 text-lg">
            A passionate team of educators and mentors dedicated to
            student success and concept-driven learning.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl p-8
                         border border-zinc-200
                         shadow-sm hover:shadow-xl
                         transition-all duration-300 text-center"
            >
              {/* Image */}
              <div className="relative mx-auto mb-6 w-44 h-44 rounded-2xl overflow-hidden">
                {/* Soft glow */}
                <div className="absolute inset-0 bg-yellow-400/20 blur-2xl opacity-0
                                group-hover:opacity-100 transition" />

                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="relative z-10 w-full h-full object-cover
                             rounded-2xl group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Name */}
              <h4 className="text-xl font-semibold text-zinc-900">
                {member.name}
              </h4>

              {/* Role */}
              <p className="mt-1 text-sm text-zinc-600">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
