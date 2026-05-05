import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type TabKey = "yoga" | "gym" | "hotels" | "spas" | "cafes";

interface TabData {
  key: TabKey;
  label: string;
  bg: string;
  image?: string;
  quote: string;
  headline: { lead: string; emph: string };
  body: string;
  bullets: string[];
  stat: { value: string; label: string };
}

const TABS: TabData[] = [
  {
    key: "yoga",
    label: "Yoga & Wellness",
    bg: "#e8edf5",
    image: "/AQUA-PILATESWELLNESS.png",
    quote: "Where wellness begins.",
    headline: { lead: "Your clients already ", emph: "believe in it." },
    body: "Health-conscious, intentional, values-driven. Aqua Vibes was made for the same customer walking through your door.",
    bullets: [
      "Aligns with mindfulness and wellness values",
      "Premium aluminum — looks great on studio shelves",
      "pH 8.5+ alkaline — supports post-practice recovery",
    ],
    stat: { value: "73%", label: "of yoga practitioners actively seek alkaline water" },
  },
  {
    key: "gym",
    label: "Gym & Fitness",
    bg: "#e8f0e8",
    quote: "Fuel the training. Stock the shelf.",
    headline: { lead: "Stock what ", emph: "performs." },
    body: "Athletes and active consumers are your core demographic. Give them a water that matches their standard.",
    bullets: [
      "Electrolytes for post-workout recovery",
      "Aluminum — durable, premium, sustainable",
      "One SKU keeps inventory simple",
    ],
    stat: { value: "Na · K · Mg", label: "Electrolytes that replenish what training takes" },
  },
  {
    key: "hotels",
    label: "Boutique Hotels",
    bg: "#f0ece8",
    image: "/AQUA-HOTEL.png",
    quote: "Elevate every touchpoint.",
    headline: { lead: "Elevate every ", emph: "detail." },
    body: "From the minibar to the fitness center, Aqua Vibes delivers a premium experience your guests will notice and remember.",
    bullets: [
      "Aluminum packaging photographs beautifully",
      "Premium positioning matches luxury hospitality",
      "Consistent single-SKU ordering — zero complexity",
    ],
    stat: { value: "5★", label: "The standard your guests expect" },
  },
  {
    key: "spas",
    label: "Spas & Retreats",
    bg: "#f0e8f4",
    quote: "The ritual of restoration.",
    headline: { lead: "The ritual starts ", emph: "with water." },
    body: "Before the treatment, after the treatment — hydration is part of the experience. Make it intentional.",
    bullets: [
      "888 Hz aligns with wellness and energy work",
      "Alkaline supports detox and restoration",
      "Elevated packaging enhances the spa aesthetic",
    ],
    stat: { value: "888 Hz", label: "Frequency infused for intentional wellness" },
  },
  {
    key: "cafes",
    label: "Specialty Cafés",
    bg: "#f5f0e8",
    quote: "Intentional from the first sip.",
    headline: { lead: "Your customers ", emph: "drink intentionally." },
    body: "They read labels. They choose quality. Aqua Vibes is the water for the customer who already knows the difference.",
    bullets: [
      "Premium alternative to standard bottled water",
      "Aluminum packaging stands out at point of sale",
      "Appeals to health-conscious, values-driven buyers",
    ],
    stat: { value: "pH 8.5+", label: "Alkaline water your customers are already asking for" },
  },
];

function Panel({ data }: { data: TabData }) {
  const isLongStat = data.stat.value.length > 5;
  return (
    <motion.div
      key={data.key}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.7, ease }}
      className="grid grid-cols-1 lg:grid-cols-[60%_40%]"
      style={{ minHeight: 480, borderRadius: 16, overflow: "hidden" }}
    >
      {/* Left — image placeholder + pull quote */}
      <div
        className="relative flex items-end"
        style={{ backgroundColor: data.bg, padding: 32, minHeight: 320 }}
      >
        {data.image && (
          <img
            src={data.image}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
          }}
        />
        <p
          className="relative text-white"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: 24,
            lineHeight: 1.3,
            maxWidth: 460,
          }}
        >
          {data.quote}
        </p>
      </div>

      {/* Right — content */}
      <div
        className="flex flex-col justify-center"
        style={{ backgroundColor: "white", padding: 48, gap: 24 }}
      >
        <h3
          className="text-[28px] lg:text-[36px]"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            color: "#0f1923",
            lineHeight: 1.1,
          }}
        >
          {data.headline.lead}
          <em>{data.headline.emph}</em>
        </h3>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: 14,
            color: "#5a6472",
            lineHeight: 1.8,
          }}
        >
          {data.body}
        </p>

        <ul
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          {data.bullets.map((b) => (
            <li
              key={b}
              style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#184EA2",
                  marginTop: 8,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: 13,
                  color: "#5a6472",
                  lineHeight: 1.6,
                }}
              >
                {b}
              </span>
            </li>
          ))}
        </ul>

        <div
          style={{
            backgroundColor: "#f4f7fb",
            borderRadius: 12,
            padding: "20px 24px",
            border: "0.5px solid #e0e8f0",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: isLongStat ? 36 : 48,
              color: "#184EA2",
              lineHeight: 1,
            }}
          >
            {data.stat.value}
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: 12,
              color: "#8a9aaa",
              marginTop: 8,
              lineHeight: 1.5,
            }}
          >
            {data.stat.label}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WholesaleRetailerSection() {
  const [active, setActive] = useState<TabKey>("yoga");
  const [paused, setPaused] = useState(false);
  const activeIndex = TABS.findIndex((t) => t.key === active);
  const activeData = TABS[activeIndex];
  const sectionRef = useRef<HTMLElement>(null);

  const step = (dir: -1 | 1) => {
    const next = (activeIndex + dir + TABS.length) % TABS.length;
    setActive(TABS[next].key);
  };

  // Auto-advance every 2.8s — pauses on hover (desktop) or tap (mobile),
  // and only ticks while the section is in the viewport.
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.bottom > 0 && rect.top < window.innerHeight;
      if (!inView) return;
      setActive((curr) => {
        const i = TABS.findIndex((t) => t.key === curr);
        return TABS[(i + 1) % TABS.length].key;
      });
    }, 2800);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      ref={sectionRef}
      className="bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="max-w-[1400px] mx-auto px-8" style={{ paddingTop: 80 }}>
        {/* Top 2-column */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease }}
          >
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
              Who We Supply
            </div>
            <h2
              className="text-[36px] lg:text-[64px]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                color: "#0f1923",
                lineHeight: 1.1,
              }}
            >
              Built for the brands that care what they <em>serve.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: 15,
                color: "#5a6472",
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              Aqua Vibes is stocked by premium retailers who understand their
              customers. One SKU, zero complexity, and a product that sells
              itself to a health-conscious demographic.
            </p>
            <a
              href="#wholesale-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("wholesale-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center justify-center cursor-pointer transition-opacity duration-300 hover:opacity-85"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: 12,
                color: "white",
                backgroundColor: "#184EA2",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "14px 32px",
                borderRadius: 999,
              }}
            >
              Apply for Wholesale
            </a>
          </motion.div>
        </div>

        {/* Tabs — desktop only; mobile uses the prev/next arrows below */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="hidden lg:block"
          style={{ marginTop: 56 }}
        >
          <div
            className="lg:grid lg:grid-cols-5 flex overflow-x-auto [&::-webkit-scrollbar]:hidden"
            style={{
              borderTop: "0.5px solid #e0e0e0",
              scrollbarWidth: "none",
            }}
          >
            {TABS.map((tab) => {
              const isActive = active === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className="relative cursor-pointer transition-colors duration-300 text-center flex-shrink-0 lg:flex-shrink"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: isActive ? 400 : 300,
                    fontSize: 14,
                    color: isActive ? "#0f1923" : "#8a9aaa",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    paddingTop: 20,
                    paddingBottom: 16,
                    paddingLeft: 24,
                    paddingRight: 24,
                    background: "transparent",
                    border: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="retailer-tab-underline"
                      className="absolute bottom-0 left-0 right-0"
                      style={{ height: 2, backgroundColor: "#184EA2" }}
                      transition={{ type: "spring", stiffness: 400, damping: 36 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab content */}
        <div style={{ marginTop: 24 }}>
          <AnimatePresence mode="wait">
            <Panel key={active} data={activeData} />
          </AnimatePresence>
        </div>

        {/* Mobile-only prev/next arrows */}
        <div
          className="flex lg:hidden"
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            marginTop: 24,
          }}
        >
          <button
            onClick={() => step(-1)}
            aria-label="Previous category"
            className="cursor-pointer transition-colors duration-200 hover:bg-[#205fbf]"
            style={{
              background: "#184EA2",
              borderRadius: 999,
              width: 44,
              height: 44,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: 12,
              color: "#0f1923",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              minWidth: 140,
              textAlign: "center",
            }}
          >
            {activeData.label}
          </span>
          <button
            onClick={() => step(1)}
            aria-label="Next category"
            className="cursor-pointer transition-colors duration-200 hover:bg-[#205fbf]"
            style={{
              background: "#184EA2",
              borderRadius: 999,
              width: 44,
              height: 44,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
