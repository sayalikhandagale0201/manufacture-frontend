const points = [
  "Advanced Manufacturing Facility",
  "Strict Quality Control",
  "Experienced Technical Team",
  "On-time Delivery",
  "Customer-Focused Approach",
];

export default function WhyChooseUs() {
  return (
    <section className="px-6 md:px-20 py-16 bg-slate-900 text-white">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Why Choose DKM Enterprises
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {points.map((item, i) => (
          <div
            key={i}
            className="bg-slate-800 p-6 rounded-xl border border-white/10 hover:border-orange-500 transition"
          >
            <p className="text-gray-300">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
