import Image from "next/image";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeatureSection";
import CTASection from "./components/CTASection";
import FAQAccordion from "./components/Faq";
import Portifolio from "./components/Portifolio";
import Footer from "./components/Footer";
import PublicoAlvo from "./components/PublicoAlvo";
import Depoimentos from "./components/Depoimentos";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Portifolio />
      <CTASection />
      <Depoimentos />
      <FAQAccordion />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
