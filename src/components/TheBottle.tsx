import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TheBottle() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-15%" });

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 35 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div className="bg-white px-3 md:px-5 py-3 md:py-5">
    <section
      ref={sectionRef}
      id="the-bottle"
      className="relative bg-[#F2F2F2] py-28 md:py-40 lg:py-52 overflow-hidden rounded-2xl md:rounded-3xl"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Text */}
          <div className="max-w-lg text-center lg:text-left mx-auto lg:mx-0">
            <motion.span
              {...fade(0)}
              className="block text-[11px] md:text-[12px] tracking-[0.3em] uppercase mb-6"
              style={{
                fontFamily: "var(--font-accent)",
                fontWeight: 300,
                color: "rgba(24, 78, 162, 0.45)",
              }}
            >
              Sustainability
            </motion.span>

            <motion.h2
              {...fade(0.12)}
              className="text-[36px] md:text-[52px] lg:text-[64px] leading-[1.08] tracking-[0.01em] mb-7 md:mb-9"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              A bottle built to
              <br />
              outlast the moment.
            </motion.h2>

            <motion.p
              {...fade(0.24)}
              className="text-sm md:text-[15px] leading-[1.85] text-black/50 max-w-[420px] mx-auto lg:mx-0 mb-14 md:mb-18"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Aluminum is one of the most recyclable materials on earth.
              Unlike plastic, it can be recycled infinitely without losing
              quality. Every Aqua Vibes bottle is a choice that extends
              beyond the drink.
            </motion.p>

            {/* Stat */}
            <motion.div {...fade(0.36)} className="flex flex-col items-center lg:items-start">
              <span
                className="block text-[72px] md:text-[88px] lg:text-[100px] leading-none tracking-tight mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  color: "#184EA2",
                }}
              >
                &infin;
              </span>
              <span
                className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-black/35"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Infinitely Recyclable
              </span>
            </motion.div>
          </div>

          {/* Right — Bottle Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center lg:justify-start"
          >
            <img
              src="/aqua-vibes-bottle.png"
              alt="Aqua Vibes aluminum bottle"
              className="w-full max-w-[380px] md:max-w-[480px] lg:max-w-[560px] h-auto object-contain rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  );
}
