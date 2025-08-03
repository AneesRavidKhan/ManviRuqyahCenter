import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gold py-12 px-4 text-center">
      <h2 className="font-heading text-3xl md:text-4xl text-darkgreen mb-4">
        Ready to Begin Your Healing Journey?
      </h2>
      <p className="text-darkgreen mb-6">
        Schedule a confidential Ruqyah or counseling session with our specialists.
      </p>
      <Link
        href="/booking"
        className="inline-block bg-darkgreen text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-beige hover:text-darkgreen"
      >
        Book Now
      </Link>
    </section>
  );
}