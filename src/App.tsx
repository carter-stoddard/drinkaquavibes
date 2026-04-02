import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import AnnouncementBar from "./components/AnnouncementBar";
import SiteNav from "./components/SiteNav";
import Hero from "./components/Hero";
import USPSection from "./components/USPSection";
import TheWater from "./components/TheWater";
import TheFrequency from "./components/TheFrequency";
import TheBottle from "./components/TheBottle";
import SocialProof from "./components/SocialProof";
import ImageGrid from "./components/ImageGrid";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App() {
  useSmoothScroll();

  return (
    <>
      <AnnouncementBar />
      <SiteNav />
      <Hero />
      <USPSection />
      <TheWater />
      <TheFrequency />
      <TheBottle />
      <SocialProof />
      <ImageGrid />
      <Footer />
    </>
  );
}
