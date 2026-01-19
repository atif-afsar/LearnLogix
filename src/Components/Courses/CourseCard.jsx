import { motion } from "framer-motion";

export default function CourseCard({ title, subjects, badge }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-black border border-white/10
                 rounded-2xl p-6 hover:border-yellow-400/40 transition"
    >
      {badge && (
        <span className="inline-block mb-3 px-3 py-1
                         bg-yellow-400/10 text-yellow-400
                         rounded-full text-xs font-semibold">
          {badge}
        </span>
      )}

      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <ul className="text-gray-400 text-sm space-y-1">
        {subjects.map((s) => (
          <li key={s}>• {s}</li>
        ))}
      </ul>

      <button className="mt-6 w-full border border-white/20
                         py-2.5 rounded-lg text-sm
                         hover:border-yellow-400 hover:text-yellow-400 transition">
        View Details
      </button>
    </motion.div>
  );
}
