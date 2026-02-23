export default function CompanyTimeline() {
  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      desc: "DKM Enterprises was established with a vision to deliver high-quality steel and alloy products.",
    },
    {
      year: "2020",
      title: "Expanded Product Range",
      desc: "Added bars, rods, flanges, plates, sheets, and channels to our offerings.",
    },
    {
      year: "2022",
      title: "Pan India Supply",
      desc: "Started supplying materials across multiple industrial hubs in India.",
    },
    {
      year: "2024",
      title: "Trusted Manufacturing Partner",
      desc: "Recognized as a reliable partner for manufacturing and infrastructure projects.",
    },
  ];

  return (
    <section className="w-full px-6 md:px-20 py-16 bg-slate-950 text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Our Journey
        </h2>
        <p className="text-gray-400 mt-2">
          A timeline of growth, trust, and excellence
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-700 -translate-x-1/2" />

        {timeline.map((item, index) => (
          <div
            key={index}
            className={`relative mb-12 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Content box */}
            <div className="w-full md:w-[45%] bg-slate-900 border border-gray-700 rounded-xl p-6 shadow-lg">
              <span className="text-orange-500 font-semibold text-sm">
                {item.year}
              </span>
              <h3 className="text-lg font-semibold mt-1">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 top-6 w-4 h-4 bg-orange-500 rounded-full -translate-x-1/2 border-4 border-slate-950" />
          </div>
        ))}
      </div>
    </section>
  );
}
