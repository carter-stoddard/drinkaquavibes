import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import SiteNav from "./components/SiteNav";
import Hero from "./components/Hero";
import USPSection from "./components/USPSection";
import ProductSection from "./components/ProductSection";
import TheFrequency from "./components/TheFrequency";
import SustainabilitySection from "./components/SustainabilitySection";
import ReviewsSection from "./components/ReviewsSection";
import BentoSection from "./components/BentoSection";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App() {
  useSmoothScroll();

  return (
    <>
      <SiteNav />
      <Hero />
      <USPSection />
      <ProductSection />
      <TheFrequency />
      <SustainabilitySection />
      <ReviewsSection />
      <BentoSection />
      <Footer />
    </>
  );
}
