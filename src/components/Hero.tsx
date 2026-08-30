import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface HeroProps {
  image?: string;
  mobileImageClass?: string;
  aspectClass?: string;
  headline?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  showLearnMore?: boolean;
}

export default function Hero({
  image = "/aqua-vibes-alkaline-water-hero.webp",
  mobileImageClass = "object-cover object-center",
  aspectClass = "aspect-[4/5] lg:aspect-[2/1]",
  headline = (
    <>
      Hydrate with <em>Intention</em>
    </>
  ),
  ctaLabel = "Learn More",
  ctaHref = "#usp",
  showLearnMore = false,
}: HeroProps = {}) {
  return (
    <section
      className={`relative overflow-hidden ${aspectClass} mx-3 mt-[88px] mb-3 bg-white`}
      style={{ borderRadius: "12px" }}
    >
      {/* Hero image — full background, both mobile and desktop */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1.2, ease }}
        src={image}
        alt=""
        aria-hidden
        className={`absolute inset-0 w-full h-full ${mobileImageClass} lg:object-contain lg:object-center lg:translate-x-0 lg:scale-100 lg:origin-center`}
      />

      {/* Legibility overlay — softens area where text sits */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[55%] lg:hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="hidden lg:block absolute inset-y-0 left-0 w-[60%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Copy */}
      <div className="relative h-full max-w-[1340px] mx-auto px-6 lg:px-10">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left pt-10 lg:pt-0 max-w-[600px] mx-auto lg:mx-0">
            {/* copy */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-[48px] md:text-[56px] lg:text-[72px] xl:text-[88px] leading-[1.05] lg:leading-[1.02] tracking-[-0.005em] text-[#184EA2] mt-[10px] lg:mt-0 mb-8 lg:mb-12"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            {headline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="flex flex-col items-center lg:items-start gap-4"
          >
            <a
              href={ctaHref}
              onClick={(e) => {
                if (ctaHref.startsWith("#")) {
                  e.preventDefault();
                  document.getElementById(ctaHref.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="inline-flex items-center justify-center px-8 lg:px-11 h-[48px] lg:h-[60px] rounded-full bg-[#184EA2] text-white text-[13px] lg:text-[15px] tracking-[0.18em] uppercase transition-colors duration-300 hover:bg-[#205fbf]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              {ctaLabel}
            </a>
            {showLearnMore && (
              <a
                href="#the-water"
                className="text-[14px] lg:text-[15px] text-[#184EA2] hover:opacity-70 transition-opacity duration-300"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                Learn More →
              </a>
            )}
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}
