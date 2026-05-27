import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type BlockKey = "what" | "cymatics" | "why";

const IMAGE_BG: Record<BlockKey, string> = {
  what: "#dce6f4",
  cymatics: "#e8eef8",
  why: "#f0f4fc",
};

const IMAGE_SRC: Partial<Record<BlockKey, string>> = {
  what: "/aqua-vibes-sound-transforms-water.webp",
  cymatics: "/AQUA-WHATYOUCANTSEE.png",
  why: "/aqua-vibes-intentional-hydration.webp",
};

interface BlockData {
  id: BlockKey;
  eyebrow: string;
  headline: React.ReactNode;
  body: string;
}

const BLOCKS: BlockData[] = [
  {
    id: "what",
    eyebrow: "THE FREQUENCY",
    headline: (
      <>
        Sound has the power to <em>transform.</em>
      </>
    ),
    body: "888 Hz is a sound frequency long associated with positive energy, abundance, and cellular harmony. When water is exposed to this frequency during production, it reorganizes at a molecular level — creating a smoother, more intentional hydration experience.",
  },
  {
    id: "cymatics",
    eyebrow: "CYMATICS",
    headline: (
      <>
        Frequency <em>shapes</em> what you can't see.
      </>
    ),
    body: "Cymatics is the science of visible sound. When frequency meets water, it creates geometric patterns — proof that sound physically affects the structure of water. Every bottle of Aqua Vibes carries that intention, tuned before it reaches you.",
  },
  {
    id: "why",
    eyebrow: "INTENTIONAL HYDRATION",
    headline: (
      <>
        Water that works on every <em>level.</em>
      </>
    ),
    body: "Most water hydrates your body. Aqua Vibes hydrates your body and your energy. 888 Hz is associated with alignment, flow, and positive resonance — making every sip an intentional act, not just a habit.",
  },
];

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.7, delay, ease },
});

interface MobileBlockProps {
  data: BlockData;
  isLast?: boolean;
  onEnter: (id: BlockKey) => void;
}

function MobileBlock({ data, isLast, onEnter }: MobileBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (inView) onEnter(data.id);
  }, [inView, data.id, onEnter]);

  return (
    <div ref={ref} style={{ paddingBottom: isLast ? 0 : 120 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.9, ease }}
        style={{
          width: "100%",
          aspectRatio: "3 / 4",
          backgroundColor: IMAGE_BG[data.id],
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        {IMAGE_SRC[data.id] && (
          <img
            src={IMAGE_SRC[data.id]}
            alt=""
            aria-hidden
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        )}
      </motion.div>
      <div
        style={{
          marginTop: -96,
          marginLeft: 16,
          marginRight: 16,
          position: "relative",
          zIndex: 2,
          background: "rgba(24, 78, 162, 0.82)",
          backdropFilter: "blur(20px) saturate(110%)",
          WebkitBackdropFilter: "blur(20px) saturate(110%)",
          border: "1px solid rgba(255, 255, 255, 0.10)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.25)",
          borderRadius: 16,
          padding: 28,
        }}
      >
        <motion.div
          {...reveal(0.1)}
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: 11,
            color: "rgba(255, 255, 255, 0.7)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: 14,
          }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h3
          {...reveal(0.2)}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: 32,
            color: "white",
            lineHeight: 1.1,
          }}
        >
          {data.headline}
        </motion.h3>
        <motion.p
          {...reveal(0.3)}
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: 16,
            color: "rgba(255, 255, 255, 0.75)",
            lineHeight: 1.7,
            marginTop: 14,
          }}
        >
          {data.body}
        </motion.p>
      </div>
    </div>
  );
}

function DesktopText({ data }: { data: BlockData }) {
  return (
    <>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: 11,
          color: "#184EA2",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: 16,
        }}
      >
        {data.eyebrow}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontSize: 48,
          color: "#0f1923",
          lineHeight: 1.1,
        }}
      >
        {data.headline}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: 17,
          color: "#5a6472",
          lineHeight: 1.8,
          marginTop: 16,
        }}
      >
        {data.body}
      </p>
    </>
  );
}

export default function TheFrequency() {
  const [active, setActive] = useState<BlockKey>("what");
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.bottom > 0 && rect.top < window.innerHeight;
      if (!inView) return;
      setActive((curr) => {
        const i = BLOCKS.findIndex((b) => b.id === curr);
        return BLOCKS[(i + 1) % BLOCKS.length].id;
      });
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  const activeData = BLOCKS.find((b) => b.id === active) ?? BLOCKS[0];

  return (
    <section
      ref={sectionRef}
      id="the-frequency"
      className="bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Section header */}
      <div className="max-w-[1400px] mx-auto px-8 pt-[60px] lg:pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease }}
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: 11,
            color: "#184EA2",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginBottom: 20,
          }}
        >
          THE FREQUENCY
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.12, ease }}
          className="text-[40px] lg:text-[72px] leading-[1.1]"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            color: "#0f1923",
          }}
        >
          Water with <em>intention.</em>
        </motion.h2>
      </div>

      {/* MOBILE — stacked blocks */}
      <div className="lg:hidden max-w-[1400px] mx-auto px-8 py-[60px]">
        {BLOCKS.map((b, i) => (
          <MobileBlock
            key={b.id}
            data={b}
            isLast={i === BLOCKS.length - 1}
            onEnter={setActive}
          />
        ))}
      </div>

      {/* DESKTOP — auto-cycling carousel (no scroll-pinning) */}
      <div className="hidden lg:block">
        <div className="max-w-[1400px] mx-auto px-8 pt-12 pb-24">
          <div
            className="grid grid-cols-2 items-center"
            style={{ gap: 80 }}
          >
            {/* LEFT — image */}
            <div className="relative w-full">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3 / 4",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1.5px solid rgba(24, 78, 162, 0.12)",
                }}
              >
                <AnimatePresence mode="sync">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: IMAGE_BG[active],
                    }}
                  >
                    {IMAGE_SRC[active] && (
                      <img
                        src={IMAGE_SRC[active]}
                        alt=""
                        aria-hidden
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "center",
                          display: "block",
                        }}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT — text */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${active}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.6, ease }}
                  className="w-full"
                >
                  <DesktopText data={activeData} />
                </motion.div>
              </AnimatePresence>

              {/* Dot indicators */}
              <div style={{ display: "flex", gap: 10, marginTop: 40 }}>
                {BLOCKS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setActive(b.id)}
                    aria-label={`Show ${b.eyebrow}`}
                    style={{
                      width: active === b.id ? 28 : 10,
                      height: 10,
                      borderRadius: 999,
                      background: active === b.id ? "#184EA2" : "#dce6f0",
                      border: "none",
                      cursor: "pointer",
                      transition: "width 0.4s ease, background 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
