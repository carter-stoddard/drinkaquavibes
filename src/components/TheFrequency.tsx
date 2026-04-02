import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TheFrequency() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20%" });

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div className="bg-white px-3 md:px-5 py-3 md:py-5">
    <section
      ref={sectionRef}
      id="the-frequency"
      className="relative min-h-screen flex items-center justify-center overflow-hidden rounded-2xl md:rounded-3xl"
      style={{ background: "#080c14" }}
    >
      {/* Background image */}
      <img
        src="/water-that-remembers.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-32 md:py-40 lg:py-52">
        {/* Label */}
        <motion.span
          {...fade(0)}
          className="block text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-white/40 mb-10 md:mb-14"
          style={{ fontFamily: "var(--font-accent)", fontWeight: 300 }}
        >
          The Frequency
        </motion.span>

        {/* Headline */}
        <motion.h2
          {...fade(0.2)}
          className="text-[48px] md:text-[72px] lg:text-[90px] xl:text-[100px] leading-[1.05] tracking-[0.01em] text-white mb-8 md:mb-12"
          style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
        >
          Water that remembers.
        </motion.h2>

        {/* Body */}
        <motion.p
          {...fade(0.4)}
          className="text-sm md:text-[15px] leading-[1.9] text-white/60 max-w-[480px] mb-16 md:mb-24"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Every bottle is stored in a frequency-treated environment playing
          888 Hz — a tone associated with clarity, balance, and energetic
          alignment. Science and intention, together in every drop.
        </motion.p>

        {/* Watermark */}
        <motion.span
          {...fade(0.6)}
          className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/[0.15]"
          style={{ fontFamily: "var(--font-accent)", fontWeight: 300 }}
        >
          888 Hz — Sonic Frequency Treatment
        </motion.span>
      </div>
    </section>
    </div>
  );
}
