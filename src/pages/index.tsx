import { Inter } from "next/font/google";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-gray-900  p-24 ${inter.className}`}
    >
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />

      <ContactSection />
      <Footer />
    </main>
  );
}
