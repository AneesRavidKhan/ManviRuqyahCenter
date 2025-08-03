import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/hero/HeroSection";
import CTA from "@/components/cta/CTA";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import WhatsAppWidget from "@/components/whatsapp/WhatsAppWidget";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <CTA />
      <TestimonialsSection />
      <WhatsAppWidget />
    </Layout>
  );
}