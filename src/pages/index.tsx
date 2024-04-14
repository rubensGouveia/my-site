import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import ServicesSection from "@/Components/ServiceSection";
import AboutSection from "@/Components/AboutSection";
import ContactSection from "@/Components/ContactSection";
import Footer from "@/Components/Footer";

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
