import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gold text-darkgreen py-4 px-6 flex justify-between items-center shadow-md">
      <Link href="/" className="font-heading text-2xl tracking-wide">
        Manvi Ruqyah Center
      </Link>
      <div className="space-x-6 font-body">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/booking">Booking</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </nav>
  );
}