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
    <section className="bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full
                           bg-yellow-400/10 text-yellow-400 text-sm font-medium">
            Our Team
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Meet the Minds Behind{" "}
            <span className="text-yellow-400">LearnLogix</span>
          </h2>

          <p className="mt-4 text-gray-400">
            A dedicated team of educators and mentors committed to
            student success and concept-driven learning.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              {/* Image */}
              <div className="relative mx-auto w-40 h-40 rounded-2xl overflow-hidden
                              border border-white/10 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h4 className="text-lg font-semibold">
                {member.name}
              </h4>

              {/* Role */}
              <p className="text-sm text-gray-400">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
