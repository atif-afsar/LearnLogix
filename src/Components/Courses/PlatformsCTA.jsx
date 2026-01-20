export default function PlatformsCTA() {
  return (
    <section className="bg-gradient-to-b from-white via-zinc-50 to-white py-24 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 gap-10">

        {/* YouTube Card */}
        <div
          className="group bg-white border border-zinc-200
                     rounded-3xl p-10
                     shadow-sm hover:shadow-xl
                     transition-all duration-300"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full
                           bg-red-500/10 text-red-600
                           text-sm font-semibold">
            Free Platform
          </span>

          <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-4">
            Free Learning on YouTube
          </h3>

          <p className="text-zinc-600 text-lg mb-8">
            Start learning core concepts for free with clear,
            exam-focused classes taught by expert educators.
          </p>
         <a href="https://www.youtube.com/@Learn_logix" target="_blank" rel="noopener noreferrer">
          <button
           
            className="inline-flex items-center gap-2
                       text-red-600 font-semibold text-lg
                       group-hover:gap-3 transition-all"
          >
            Subscribe Now
            <span className="text-xl">→</span>
         
          </button>
           </a>
        </div>

        {/* Mobile App Card */}
        <div
          className="group bg-white border border-zinc-200
                     rounded-3xl p-10
                     shadow-sm hover:shadow-xl
                     transition-all duration-300"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full
                           bg-yellow-400/15 text-yellow-600
                           text-sm font-semibold">
            Premium Access
          </span>

          <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-4">
            LearnLogix Mobile App
          </h3>

          <p className="text-zinc-600 text-lg mb-8">
            Access recorded lectures, notes, practice tests,
            and complete courses anytime, anywhere.
          </p>
          <a href="https://play.google.com/store/apps/details?id=co.ted.gjznu" target="_blank" rel="noopener noreferrer">
          <button
            className="inline-flex items-center gap-2
                       text-yellow-600 font-semibold text-lg
                       group-hover:gap-3 transition-all"
          >
            Download App
            <span className="text-xl">→</span>
          </button>
          </a>
        </div>

      </div>
    </section>
  );
}
