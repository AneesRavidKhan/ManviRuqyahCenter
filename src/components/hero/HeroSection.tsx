import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gold to-beige py-20 px-4 text-center">
      <h1 className="font-heading text-4xl md:text-6xl text-darkgreen mb-4">
        Healing. Guidance. Tranquility.
      </h1>
      <p className="text-lg md:text-2xl text-darkgreen mb-8 max-w-2xl mx-auto">
        Experience authentic Ruqyah and holistic wellness at Manvi Ruqyah Center.
        Spiritual, emotional, and physical balance starts here.
      </p>
      <Link
        href="/booking"
        className="inline-block bg-darkgreen text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gold hover:text-darkgreen transition"
      >
        Book a Session
      </Link>
    </section>
  );
}