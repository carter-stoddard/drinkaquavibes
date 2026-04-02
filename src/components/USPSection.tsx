import { useRef, useEffect, useState, useCallback } from "react";
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
    bgImage: "/reverse-osmosis.png",
  },
  {
    id: 2,
    label: "888 Hz Frequency",
    subline:
      "Stored in a warehouse vibrating at 888 Hz — the frequency of abundance. Not a claim. A frequency.",
    bgImage: "/888HZ.png",
  },
  {
    id: 3,
    label: "Alkaline + Electrolytes",
    subline:
      "Enhanced with electrolytes and tuned to an alkaline pH. Hydration that your body actually absorbs.",
    bgImage: "/alkaline-electrolytes.png",
  },
  {
    id: 4,
    label: "Aluminum Bottle",
    subline:
      "Premium aluminum. Infinitely recyclable. A bottle you don't throw away — you carry with you.",
    bgImage: "/Aluminum.png",
  },
];

function USPPanel({ usp, i, total }: { usp: USP; i: number; total: number }) {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
      {usp.bgImage && (
        <img
          src={usp.bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Bottom gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Text */}
      <div className="absolute bottom-12 md:bottom-12 left-0 right-0 md:left-12 md:right-auto z-10 px-6 md:px-0 text-center md:text-left">
        <h2
          className="text-[44px] md:text-[72px] lg:text-[80px] text-white leading-[1.05] tracking-[0.01em]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
        >
          {usp.label}
        </h2>
        <p
          className="mt-3 text-[13px] md:text-[15px] text-white/70 leading-[1.6] max-w-[280px] md:max-w-[320px] mx-auto md:mx-0"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {usp.subline}
        </p>
      </div>

      {/* Counter */}
      <div className="absolute bottom-12 md:bottom-12 right-6 md:right-12 z-10">
        <span
          className="text-[10px] md:text-[12px] tracking-[0.1em] text-white/25 tabular-nums"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {String(i + 1).padStart(2, "0")}
          <span className="mx-1 text-white/10">/</span>
          {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* ── Mobile: vertical stack ── */
function MobileUSP() {
  return (
    <div id="usp" className="flex flex-col">
      {USPS.map((usp, i) => (
        <div key={usp.id} className="w-full h-screen">
          <USPPanel usp={usp} i={i} total={USPS.length} />
        </div>
      ))}
    </div>
  );
}

/* ── Desktop: GSAP horizontal scroll ── */
function DesktopUSP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const ctxRef = useRef<gsap.Context | null>(null);

  const setPanelRef = useCallback(
    (el: HTMLDivElement | null, i: number) => {
      panelRefs.current[i] = el;
    },
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const sizePanels = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      section.style.height = `${h}px`;
      track.style.height = `${h}px`;
      track.style.width = `${w * USPS.length}px`;
      panelRefs.current.forEach((panel) => {
        if (panel) {
          panel.style.width = `${w}px`;
          panel.style.height = `${h}px`;
        }
      });
    };

    sizePanels();

    ctxRef.current = gsap.context(() => {
      const totalDistance = window.innerWidth * (USPS.length - 1);

      gsap.to(track, {
        x: () => -totalDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          scrub: true,
          end: () => `+=${totalDistance}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            setActiveIndex(
              Math.min(
                Math.round(self.progress * (USPS.length - 1)),
                USPS.length - 1
              )
            );
          },
        },
      });
    }, section);

    const onResize = () => {
      sizePanels();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctxRef.current?.revert();
    };
  }, []);

  return (
    <div className="bg-white px-5 py-5">
      <section
        ref={sectionRef}
        id="usp"
        className="relative rounded-3xl"
        style={{ overflow: "hidden", background: "#0a0a0a" }}
      >
        {/* Pill navigation tabs */}
        <div className="absolute top-[175px] left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {USPS.map((usp, i) => (
            <button
              key={usp.id}
              onClick={() => {
                const s = sectionRef.current;
                if (!s) return;
                const st = ScrollTrigger.getAll().find(
                  (t) => t.trigger === s && t.pin
                );
                if (!st) return;
                const progress = i / (USPS.length - 1);
                const scrollTo = st.start + progress * (st.end - st.start);
                gsap.to(window, {
                  scrollTo: { y: scrollTo },
                  duration: 0.8,
                  ease: "power2.inOut",
                });
              }}
              className={`px-4 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase cursor-pointer transition-all duration-500 border ${
                activeIndex === i
                  ? "bg-white text-black border-white"
                  : "bg-white/10 text-white/50 border-white/30 hover:bg-white/15 hover:text-white/70"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              {usp.label}
            </button>
          ))}
        </div>

        {/* Horizontal track */}
        <div ref={trackRef} className="flex will-change-transform">
          {USPS.map((usp, i) => (
            <div
              key={usp.id}
              ref={(el) => setPanelRef(el, i)}
              className="usp-panel relative flex-shrink-0 overflow-hidden"
            >
              <USPPanel usp={usp} i={i} total={USPS.length} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function USPSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <MobileUSP /> : <DesktopUSP />;
}
