import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface HeroProps {
  image?: string;
  mobileImageClass?: string;
  headline?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  showLearnMore?: boolean;
}

export default function Hero({
  image = "/AQUA-HERO-FINAL.png",
  mobileImageClass = "object-bottom origin-bottom -translate-x-[35%]",
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
      className="relative overflow-hidden aspect-[4/5] lg:aspect-[2/1] mx-3 mt-[88px] mb-3 bg-white"
      style={{ borderRadius: "12px" }}
    >
      {/* Hero image — full background, both mobile and desktop */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease }}
        src={image}
        alt=""
        aria-hidden
        className={`absolute inset-0 w-full h-full object-contain ${mobileImageClass} scale-[1.4] lg:translate-x-0 lg:scale-100 lg:origin-center lg:object-left`}
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
            className="text-[48px] md:text-[56px] lg:text-[72px] xl:text-[88px] leading-[1.05] lg:leading-[1.02] tracking-[-0.005em] text-[#0d1320] mt-[10px] lg:mt-0 mb-8 lg:mb-12"
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
