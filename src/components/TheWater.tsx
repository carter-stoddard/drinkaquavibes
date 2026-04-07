import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

interface StatDef {
  end: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

function IconDroplet() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function IconWave() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
      <path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0" opacity="0.4" />
    </svg>
  );
}

function IconBottle() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2h8v3H8z" />
      <path d="M8 5c-2 2-3 4-3 7v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8c0-3-1-5-3-7" />
      <path d="M8 14h8" opacity="0.4" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

const STATS: StatDef[] = [
  { end: 9.5, suffix: "+", label: "pH Alkaline", icon: <IconDroplet /> },
  { end: 888, suffix: "", label: "Hz Frequency", icon: <IconWave /> },
  { end: 16, suffix: "", label: "FL OZ Aluminum", icon: <IconBottle /> },
  { end: 100, suffix: "%", label: "Electrolyte Enhanced", icon: <IconBolt /> },
];

const DURATION = 1800; // all counters finish together

function useCountUp(end: number, started: boolean, duration: number) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const startTime = performance.now();
    const isDecimal = end % 1 !== 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = eased * end;
      setValue(isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration]);

  useEffect(() => {
    if (!started) return;
    const cleanup = animate();
    return cleanup;
  }, [started, animate]);

  return value;
}

function AnimatedStat({ stat, started }: { stat: StatDef; started: boolean }) {
  const value = useCountUp(stat.end, started, DURATION);

  return (
    <div>
      <span className="block mb-3 text-black/30">{stat.icon}</span>
      <span
        className="block text-3xl md:text-4xl lg:text-[42px] leading-none tracking-[0.01em] mb-1.5"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 300,
        }}
      >
        {stat.end % 1 !== 0 ? value.toFixed(1) : value}
        {stat.suffix}
      </span>
      <span
        className="text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-black/35"
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
        }}
      >
        {stat.label}
      </span>
    </div>
  );
}

export default function TheWater() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-15%" });

  return (
    <section
      ref={sectionRef}
      id="the-water"
      className="relative bg-white py-28 md:py-40 lg:py-52"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center lg:justify-end"
          >
            <img
              src="/aqua-vibes-splash.png"
              alt="Aqua Vibes bottle splash"
              className="w-full max-w-[380px] md:max-w-[480px] lg:max-w-[560px] h-auto object-contain rounded-2xl"
            />
          </motion.div>

          {/* Right — Text */}
          <div className="max-w-lg text-center lg:text-left mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="block text-[11px] md:text-[12px] tracking-[0.25em] uppercase mb-6 text-black/35"
                style={{ fontFamily: "var(--font-accent)", fontWeight: 300 }}
              >
                Our Water
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-3xl md:text-4xl lg:text-[44px] leading-[1.1] tracking-[0.01em] mb-6 md:mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              Pure by science.
              <br />
              Elevated by intention.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-sm md:text-[15px] leading-[1.8] text-black/50 mb-10 md:mb-14"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Reverse osmosis strips it bare. Electrolytes and alkaline minerals
              bring it back to life. Then it rests — surrounded by 888 Hz, the
              frequency of abundance — until every molecule carries something
              more than hydration.
            </motion.p>

            {/* Stats 2x2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-2 gap-x-10 gap-y-8 md:gap-y-10 text-center lg:text-left mb-10 md:mb-14"
            >
              {STATS.map((stat) => (
                <AnimatedStat key={stat.label} stat={stat} started={inView} />
              ))}
            </motion.div>

            {/* Buy Wholesale CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center lg:text-left"
            >
              <a
                href="/wholesale"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[13px] tracking-[0.15em] uppercase cursor-pointer transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  backgroundColor: "var(--color-deep-blue)",
                  color: "#fff",
                }}
              >
                Buy Wholesale
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
