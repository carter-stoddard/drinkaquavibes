import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{
        minHeight: "100dvh",
        paddingTop: "5rem",
      }}
    >
      {/* Full-bleed background image */}
      <img
        src="/aqua-vibes-hero.png"
        alt="Aqua Vibes hero"
        className="absolute inset-0 w-full h-full object-cover lg:object-[center_70%] opacity-80"
      />

      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Tagline + CTAs */}
      <div className="relative flex items-center justify-center min-h-[calc(100dvh-5rem)] px-6">
        <div className="text-center">
          <h1
            className="text-[56px] md:text-[72px] lg:text-[96px] leading-[1.05] tracking-[0.02em] text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
            }}
          >
            Hydrate with
            <br />
            Intention
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.a
              href="#usp"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="w-full sm:w-[180px] h-[52px] flex items-center justify-center rounded-full border border-white text-white text-[14px] tracking-[0.15em] uppercase cursor-pointer transition-colors duration-300 hover:bg-white/10"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Learn More
            </motion.a>
            <motion.a
              href="/wholesale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="w-full sm:w-[180px] h-[52px] flex items-center justify-center rounded-full bg-[#184EA2] text-white text-[14px] tracking-[0.15em] uppercase cursor-pointer transition-colors duration-300 hover:bg-[#1a5ab8]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Buy Wholesale
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
