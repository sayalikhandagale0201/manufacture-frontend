import Image from "next/image";

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
    <section className="py-16 md:py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-12">
          Our Leadership
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-white/10 rounded-2xl p-6 text-center hover:shadow-orange-500/20 hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="flex justify-center mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover border-2 border-orange-500"
                />
              </div>

              {/* NAME */}
              <h3 className="text-lg md:text-xl font-semibold">
                {member.name}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}