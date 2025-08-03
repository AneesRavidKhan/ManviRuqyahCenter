const testimonials = [
  {
    name: "Ayesha K.",
    feedback:
      "The Ruqyah session brought me immense peace and clarity. The practitioners are truly gifted and compassionate.",
  },
  {
    name: "Imran S.",
    feedback:
      "Booking was easy and the center is very professional. Highly recommended for anyone seeking spiritual healing.",
  },
  {
    name: "Sara M.",
    feedback:
      "After visiting Manvi Ruqyah Center, I feel lighter and more confident. Thank you for your support!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-beige py-16 px-4">
      <h2 className="font-heading text-3xl md:text-4xl text-darkgreen text-center mb-8">
        Testimonials
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6">
            <p className="italic text-darkgreen mb-4">"{t.feedback}"</p>
            <div className="font-semibold text-right text-gold">- {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}