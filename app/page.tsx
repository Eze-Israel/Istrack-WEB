import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhyIstrack from "@/components/WhyIstrack";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <StatsBar />
        <Features />
        <HowItWorks />
        <WhyIstrack />
        <Partners />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>

      <Footer />

      <WhatsappButton />
    </>
  );
}