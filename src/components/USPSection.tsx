import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface USP {
  id: number;
  label: string;
  subline: string;
  bgImage?: string;
}

const USPS: USP[] = [
  {
    id: 1,
    label: "Reverse Osmosis",
    subline:
      "Every drop stripped down to nothing — then rebuilt with intention. Reverse osmosis removes what doesn't belong.",
    bgImage: "/Reverse-Osmosis.png",
  },
  {
    id: 2,
    label: "Alkaline + Electrolytes",
    subline:
      "Enhanced with electrolytes and tuned to an alkaline pH. Hydration that your body actually absorbs.",
    bgImage: "/Alkaline.png",
  },
  {
    id: 3,
    label: "888 Hz Frequency",
    subline:
      "Stored in a warehouse vibrating at 888 Hz — the frequency of abundance. Not a claim. A frequency.",
    bgImage: "/888HZ.png",
  },
  {
    id: 4,
    label: "Aluminum Bottle",
    subline:
      "Premium aluminum. Infinitely recyclable. A bottle you don't throw away — you carry with you.",
    bgImage: "/Aluminum.png",

  },
];

function USPPanel({ usp }: { usp: USP }) {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
      {usp.bgImage && (
        <img
          src={usp.bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      )}

      {/* Center gradient overlay for text legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)",
        }}
      />

      {/* Text — center center */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <h2
          className="text-[48px] md:text-[80px] lg:text-[96px] text-white leading-[1.05] tracking-[0.01em]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
        >
          {usp.label}
        </h2>
        <p
          className="mt-4 text-[14px] md:text-[17px] text-white/70 leading-[1.6] max-w-[300px] md:max-w-[400px] mx-auto"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {usp.subline}
        </p>
      </div>
    </div>
  );
}

export default function USPSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const panels = section.querySelectorAll<HTMLElement>(".usp-stack-panel");

    panels.forEach((panel, i) => {
      if (i > 0) {
        gsap.set(panel, { yPercent: 100 });
      }
    });

    ctxRef.current = gsap.context(() => {
      const scrollPerPanel = window.innerHeight;
      const totalScroll = scrollPerPanel * (USPS.length - 1);

      ScrollTrigger.create({
        trigger: section,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          panels.forEach((panel, i) => {
            if (i === 0) return;
            const panelStart = (i - 1) / (USPS.length - 1);
            const panelEnd = i / (USPS.length - 1);
            const panelProgress = Math.min(
              Math.max((progress - panelStart) / (panelEnd - panelStart), 0),
              1
            );
            gsap.set(panel, { yPercent: 100 * (1 - panelProgress) });
          });
        },
      });
    }, section);

    return () => {
      ctxRef.current?.revert();
    };
  }, []);

  return (
    <div className="bg-white px-4 md:px-8 lg:px-10 pt-4 md:pt-8 lg:pt-10 pb-0">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-6 md:mb-10"
      >
        <span
          className="block text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-black/35 mb-3"
          style={{ fontFamily: "var(--font-accent)", fontWeight: 300 }}
        >
          Why Aqua Vibes
        </span>
        <h2
          className="text-4xl md:text-5xl lg:text-[64px] leading-[1.1] tracking-[0.01em] text-[#184EA2]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
        >
          The Science Behind the Sip
        </h2>
      </motion.div>
      <section
        ref={sectionRef}
        id="usp"
        className="relative rounded-2xl md:rounded-3xl overflow-hidden"
        style={{ height: "100vh" }}
      >

        {/* Stacked panels */}
        {USPS.map((usp, i) => (
          <div
            key={usp.id}
            className="usp-stack-panel absolute inset-0 will-change-transform"
            style={{ zIndex: i + 1 }}
          >
            <USPPanel usp={usp} />
          </div>
        ))}
      </section>
    </div>
  );
}
