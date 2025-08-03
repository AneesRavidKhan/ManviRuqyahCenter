import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkgreen text-white py-5 text-center font-body text-sm">
      &copy; {new Date().getFullYear()} Manvi Ruqyah Center. All rights reserved.
      <div className="mt-2">
        <Link
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gold"
        >
          WhatsApp Us
        </Link>
      </div>
    </footer>
  );
}