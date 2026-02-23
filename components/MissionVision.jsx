export default function MissionVision() {
  return (
    <section className="px-6 md:px-20 py-16 bg-slate-950 text-white">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-slate-900 p-8 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-semibold mb-3 text-orange-400">
            Our Mission
          </h3>
          <p className="text-gray-400">
            To manufacture world-class products by maintaining strict quality
            standards, timely delivery, and continuous improvement.
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-semibold mb-3 text-orange-400">
            Our Vision
          </h3>
          <p className="text-gray-400">
            To become a globally trusted manufacturing partner through innovation,
            sustainability, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}
