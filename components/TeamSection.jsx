export default function TeamSection() {
  const team = [
    {
      name: "Founder & CEO",
      desc: "Leading DKM Enterprises with a vision of quality and trust.",
      image: "/about/team1.jpg",
    },
    {
      name: "Production Head",
      desc: "Oversees manufacturing and quality control.",
      image: "/about/team2.jpg",
    },
    {
      name: "Sales Manager",
      desc: "Handles client relationships and business growth.",
      image: "/about/team3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Leadership
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-white/10 rounded-2xl p-6 text-center hover:shadow-orange-500/20 hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border border-orange-500"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400 mt-2">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
