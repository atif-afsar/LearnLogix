import { Link, NavLink } from "react-router-dom";

export default function CoursesCTA() {
  return (
    <section className="bg-black text-white py-24 text-center border-t border-white/10">
      <h2 className="text-3xl sm:text-4xl font-bold">
        Start Your Learning Journey with{" "}
        <span className="text-yellow-400">LearnLogix</span>
      </h2>

      <p className="mt-6 text-gray-400 text-lg">
        Choose the right course and begin building your future today.
      </p>
      <Link to="/contact">
        <div
          className="inline-block mt-8 px-8 py-4
                     bg-yellow-400 text-black font-semibold
                     rounded-xl hover:bg-yellow-500 transition"
        >
          Contact Us
      </div>
      </Link>
    </section>
  );
}
