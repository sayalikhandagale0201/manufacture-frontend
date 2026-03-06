import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center">
      
      <Image
        src="/about/hero.jpg"
        alt="DKM Enterprises"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4 sm:px-6 md:px-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          About DKM Enterprises
        </h1>

        <p className="max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-200">
          Trusted manufacturer delivering precision components with uncompromised quality.
        </p>
      </div>

    </section>
  );
}