import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-beige font-body">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}