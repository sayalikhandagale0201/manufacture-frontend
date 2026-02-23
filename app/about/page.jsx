"use client";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-slate-900 text-white">

        {/* HERO SECTION */}
        <section className="px-4 pt-16">
          <div className="relative w-full h-[200px] md:h-[500px] max-w-1xl mx-auto">
            <Image
              src="/about/Hero.jpg"
              alt="DKM Enterprises"
              fill
              priority
              className="object-cover rounded-2xl"
            />
          </div>

          <div className="text-center mt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-400">
              About DKM Enterprises
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-gray-300 text-lg">
              DKM Enterprises is a trusted manufacturing and supply company
              delivering high-quality steel alloy and industrial products
              with precision, strength, and reliability.
            </p>
          </div>
        </section>

        {/* MISSION + VISION */}
        <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">

          {/* MISSION */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center hover:scale-105 transition">
            <Image
              src="/about/mission.jpg"
              alt="Our Mission"
              width={140}
              height={140}
              className="mx-auto mb-6"
            />
            <h2 className="text-2xl font-semibold text-orange-400 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To manufacture and supply high-quality steel alloy and industrial
              products that meet global standards, ensuring durability,
              performance, and complete customer satisfaction.
            </p>
          </div>

          {/* VISION */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center hover:scale-105 transition">
            <Image
              src="/about/vision.jpg"
              alt="Our Vision"
              width={140}
              height={140}
              className="mx-auto mb-6"
            />
            <h2 className="text-2xl font-semibold text-orange-400 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To become a leading steel alloy manufacturing brand recognized
              for innovation, sustainability, advanced technology, and
              long-term global partnerships.
            </p>
          </div>

        </section>

        {/* COMPANY TIMELINE */}
        <section className="bg-slate-800 py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Journey
          </h2>

          <div className="relative w-full max-w-6xl mx-auto h-[250px] md:h-[400px]">
            <Image
              src="/about/our journy.jpg"
              alt="Company Timeline"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 px-4">
          <h2 className="text-3xl font-bold text-center text-orange-400 mb-12">
            Meet Our Team
          </h2>

          <div className="relative w-full max-w-6xl mx-auto h-[250px] md:h-[400px]">
            <Image
              src="/about/our team.jpg"
              alt="Our Team"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-slate-800 py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-orange-400">DKM Enterprises</span>
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              "Quality Focused Manufacturing",
              "On-Time Delivery",
              "Customer-Centric Approach",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-slate-700 rounded-xl p-8 text-center hover:bg-slate-700 transition"
              >
                <Image
                  src="/about/choose.jpg"
                  alt={item}
                  width={80}
                  height={80}
                  className="mx-auto mb-4"
                />
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
}