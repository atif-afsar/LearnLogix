export default function PlatformsCTA() {
  return (
    <section className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 gap-8">

        <div className="border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-3">Free Learning on YouTube</h3>
          <p className="text-gray-400 mb-6">
            Start learning concepts for free with our expert-led YouTube classes.
          </p>
          <button className="text-yellow-400 font-medium">
            Subscribe Now →
          </button>
        </div>

        <div className="border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-3">LearnLogix Mobile App</h3>
          <p className="text-gray-400 mb-6">
            Access recorded lectures, notes, tests, and full courses on our app.
          </p>
          <button className="text-yellow-400 font-medium">
            Download App →
          </button>
        </div>

      </div>
    </section>
  );
}
