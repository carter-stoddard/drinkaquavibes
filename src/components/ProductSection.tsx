import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type BlockKey = "frequency" | "taste" | "format";

const BLOCK_BG: Record<BlockKey, string> = {
  frequency: "#dce6f4",
  taste: "#e8f0e8",
  format: "#f0e8f4",
};

const BLOCK_IMG: Partial<Record<BlockKey, string>> = {
  frequency: "/aqua-vibes-water-tuned-to-frequency.webp",
  taste: "/AQUA-PURIFIEDTOPERFECTION.png",
  format: "/aqua-vibes-aluminum-water-bottle.webp",
};

const EYEBROW: Record<BlockKey, string> = {
  frequency: "888 Hz",
  taste: "Smoother Taste",
  format: "Premium Format",
};

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.7, delay, ease },
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      {...reveal(0)}
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
      {children}
    </motion.div>
  );
}

function Headline({ children }: { children: React.ReactNode }) {
  return (
    <motion.h3
      {...reveal(0.1)}
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 300,
        fontSize: 48,
        color: "#184EA2",
        lineHeight: 1.1,
      }}
    >
      {children}
    </motion.h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      {...reveal(0.2)}
      style={{
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 17,
        color: "#5a6472",
        lineHeight: 1.8,
        marginTop: 16,
      }}
    >
      {children}
    </motion.p>
  );
}

function BlockText({ block }: { block: BlockKey }) {
  if (block === "frequency") {
    return (
      <>
        <Eyebrow>{EYEBROW.frequency}</Eyebrow>
        <Headline>
          Water tuned to <em>frequency.</em>
        </Headline>
        <Body>
          Every bottle of Aqua Vibes is tuned to 888 Hz — a frequency associated
          with positive energy, cellular harmony, and intentional living. It's
          not just water. It's water with intention.
        </Body>
      </>
    );
  }
  if (block === "taste") {
    return (
      <>
        <Eyebrow>{EYEBROW.taste}</Eyebrow>
        <Headline>
          Purified to <em>perfection.</em>
        </Headline>
        <Body>
          Reverse osmosis removes everything that shouldn't be there — leaving
          only clean, smooth, refreshing water. No aftertaste. No compromise.
          Just water the way it was meant to taste.
        </Body>
      </>
    );
  }
  return (
    <>
      <Eyebrow>{EYEBROW.format}</Eyebrow>
      <Headline>
        One bottle. <em>Everything it needs.</em>
      </Headline>
      <Body>
        16 FL OZ of reverse osmosis purified, pH 8.5+ alkaline water with
        electrolytes — packaged in infinitely recyclable aluminum. One SKU,
        zero complexity, built for the shelf of any premium retailer.
      </Body>
    </>
  );
}

const BLOCK_ORDER: BlockKey[] = ["frequency", "taste", "format"];

export default function ProductSection() {
  const [active, setActive] = useState<BlockKey>("frequency");
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
        const i = BLOCK_ORDER.indexOf(curr);
        return BLOCK_ORDER[(i + 1) % BLOCK_ORDER.length];
      });
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      ref={sectionRef}
      id="the-water"
      className="bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Section header */}
      <div className="max-w-[1340px] mx-auto px-8 pt-24 pb-4 lg:pb-6 text-center">
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
          OUR WATER
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
            color: "#184EA2",
          }}
        >
          Three details. <em>One bottle.</em>
        </motion.h2>
      </div>

      {/* DESKTOP — auto-cycling carousel (no scroll-pinning) */}
      <div className="hidden lg:block">
        <div className="max-w-[1400px] mx-auto px-8 pt-12 pb-24">
          <div className="grid grid-cols-2 items-center" style={{ gap: 80 }}>
            {/* LEFT — text */}
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
                  <BlockText block={active} />
                </motion.div>
              </AnimatePresence>

              {/* Dot indicators */}
              <div style={{ display: "flex", gap: 10, marginTop: 40 }}>
                {BLOCK_ORDER.map((b) => (
                  <button
                    key={b}
                    onClick={() => setActive(b)}
                    aria-label={`Show ${EYEBROW[b]}`}
                    style={{
                      width: active === b ? 28 : 10,
                      height: 10,
                      borderRadius: 999,
                      background: active === b ? "#184EA2" : "#dce6f0",
                      border: "none",
                      cursor: "pointer",
                      transition: "width 0.4s ease, background 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT — image */}
            <div className="relative w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${active}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full"
                  style={{
                    aspectRatio: "3 / 4",
                    borderRadius: 16,
                    overflow: "hidden",
                    backgroundColor: BLOCK_BG[active],
                  }}
                >
                  {BLOCK_IMG[active] && (
                    <img
                      src={BLOCK_IMG[active]}
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
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE — stacked, image on top, text below for each block */}
      <div className="lg:hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-20" style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {(["frequency", "taste", "format"] as BlockKey[]).map((block) => (
            <motion.div
              key={block}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3 / 4",
                  backgroundColor: BLOCK_BG[block],
                  borderRadius: 12,
                  marginBottom: 24,
                  overflow: "hidden",
                }}
              >
                {BLOCK_IMG[block] && (
                  <img
                    src={BLOCK_IMG[block]}
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
              </div>
              <BlockText block={block} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
