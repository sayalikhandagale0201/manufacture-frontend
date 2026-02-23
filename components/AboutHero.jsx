import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center">
      <Image
        src="/about/hero.jpg"
        alt="DKM Enterprises"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About DKM Enterprises
        </h1>
        <p className="max-w-2xl mx-auto text-gray-200">
          Trusted manufacturer delivering precision components with uncompromised quality.
        </p>
      </div>
    </section>
  );
}
