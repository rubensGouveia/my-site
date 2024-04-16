import { Inter } from "next/font/google";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Head from "next/head";
import ContentSection from "@/components/ContentSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Arcof - Automação e Soluções Digitais</title>
        <meta
          name="description"
          content="Impulsione seu negócio com as soluções de automação para WhatsApp e Instagram da Arcof. Conte também com desenvolvimento web e consultoria especializada"
        />
        <meta
          property="og:title"
          content="Arcof - Automação e Soluções Digitais!"
        />
        <meta property="og:image" content="hero.svg" />
        <meta
          property="og:description"
          content="Impulsione seu negócio com as soluções de automação para WhatsApp e Instagram da Arcof. Conte também com desenvolvimento web e consultoria especializada"
        />
        <meta property="og:url" content="https://arcof.com.br/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between bg-gray-900  lg:p-16  md:p-4 p-4  pt-16 ${inter.className}`}
      >
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContentSection />

        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
