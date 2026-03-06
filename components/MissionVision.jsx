export default function MissionVision() {
  return (
    <section className="px-5 sm:px-6 md:px-16 lg:px-20 py-12 md:py-16 bg-slate-950 text-white">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        
        {/* Mission */}
        <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-orange-500/40 transition">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-orange-400">
            Our Mission
          </h3>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            To manufacture world-class products by maintaining strict quality
            standards, timely delivery, and continuous improvement.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-orange-500/40 transition">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-orange-400">
            Our Vision
          </h3>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            To become a globally trusted manufacturing partner through innovation,
            sustainability, and customer satisfaction.
          </p>
        </div>

      </div>
    </section>
  );
}