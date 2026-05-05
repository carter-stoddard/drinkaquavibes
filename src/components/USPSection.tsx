import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const iconProps = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Droplet = () => (
  <svg {...iconProps}>
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12.5 5 12 2.5C11.5 5 9 7.4 7 9.5 5 11.1 4 13 4 15a7 7 0 0 0 8 7z" />
  </svg>
);

const PhWave = () => (
  <svg {...iconProps}>
    <path d="M2 12 Q 6 5 10 12 T 18 12" />
    <path d="M21 8v8" />
  </svg>
);

const Bolt = () => (
  <svg {...iconProps}>
    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const Shield = () => (
  <svg {...iconProps}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
    <path d="M9.5 9.5l5 5" />
    <path d="M14.5 9.5l-5 5" />
  </svg>
);

const Recycle = () => (
  <svg {...iconProps}>
    <path d="M3 12a9 9 0 0 1 15.5-6.5" />
    <path d="M21 4v6h-6" />
    <path d="M21 12a9 9 0 0 1-15.5 6.5" />
    <path d="M3 20v-6h6" />
  </svg>
);

type Panel =
  | { kind: "stat"; value: string; label: string; subLabel: string; size?: number }
  | { kind: "ph"; value: string; subLabel: string }
  | { kind: "minerals"; tagline: string };

type Card = {
  pill: string;
  Icon: () => React.ReactElement;
  lead: string;
  emph: string;
  image?: string;
  description: string;
  customer: { name: string; city: string; quote: string };
  panel: Panel;
};

const CARDS: Card[] = [
  {
    pill: "Purity",
    Icon: Droplet,
    lead: "Nothing between you and ",
    emph: "pure water.",
    image: "/AQUA-PURITY.png",
    description:
      "Reverse osmosis filtration removes contaminants down to the molecular level — leaving water in its most essential form. Clean. Neutral. Alive.",
    customer: {
      name: "Sarah M.",
      city: "Santa Monica CA",
      quote: "I can actually taste the difference. It's cleaner than anything I've had.",
    },
    panel: {
      kind: "stat",
      value: "99.9%",
      label: "contaminants removed",
      subLabel: "Via reverse osmosis filtration",
    },
  },
  {
    pill: "Alkaline pH",
    Icon: PhWave,
    lead: "Balance your body from the ",
    emph: "inside out.",
    image: "/AQUQ-ALKALINEPH.png",
    description:
      "A higher pH helps neutralize acidity, support hydration, and build the kind of internal balance you can feel through your day.",
    customer: {
      name: "Maya R.",
      city: "Los Angeles CA",
      quote: "My nutritionist recommended alkaline water and this is the only one I'll drink.",
    },
    panel: { kind: "ph", value: "pH 8.5+", subLabel: "Optimally alkaline" },
  },
  {
    pill: "Electrolytes",
    Icon: Bolt,
    lead: "Replenish what every ",
    emph: "movement takes.",
    image: "/AQUA-ELECTROLYTES.png",
    description:
      "Sodium, potassium, and magnesium replace what gets lost through sweat and stress — without the sugar, additives, or artificial color.",
    customer: {
      name: "Jess T.",
      city: "Newport Beach CA",
      quote: "I stopped buying sports drinks. This does everything they do without the sugar.",
    },
    panel: { kind: "minerals", tagline: "Replenish. Recover. Repeat." },
  },
  {
    pill: "Antioxidant",
    Icon: Shield,
    lead: "Neutralize stress at the ",
    emph: "cellular level.",
    image: "/AQUA-ANTIOXIDANT.png",
    description:
      "A negative ORP means the water actively donates electrons to neutralize free radicals — defending your cells from oxidative stress.",
    customer: {
      name: "Priya K.",
      city: "Pasadena CA",
      quote: "I noticed my skin looked better within two weeks. I'm not going back.",
    },
    panel: {
      kind: "stat",
      value: "−200mV",
      label: "Oxidation Reduction Potential",
      subLabel: "Negative ORP = antioxidant activity",
    },
  },
  {
    pill: "Sustainability",
    Icon: Recycle,
    lead: "Aluminum over plastic. ",
    emph: "Now and always.",
    description:
      "Aluminum is infinitely recyclable. Choosing it over plastic isn't a small decision — it's the only one that scales without cost to the planet.",
    customer: {
      name: "Chloe B.",
      city: "San Diego CA",
      quote: "Finally a water brand that actually gives a damn about the planet.",
    },
    panel: {
      kind: "stat",
      value: "∞",
      label: "Infinitely recyclable aluminum",
      subLabel: "No single-use plastic. Ever.",
      size: 80,
    },
    image: "/AQUA-SUSTAINABILITY.png",
  },
];

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const PlusIcon = ({ color = "#111111" }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const CloseIcon = ({ color = "#111111" }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M5 5l14 14M19 5l-14 14" />
  </svg>
);

function PillLabel({ Icon, label }: { Icon: () => React.ReactElement; label: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full"
      style={{
        background: "#184EA2",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
        padding: "6px 14px",
      }}
    >
      <span className="text-white inline-flex">
        <Icon />
      </span>
      <span
        className="text-white text-[12px] uppercase tracking-[0.15em]"
        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
      >
        {label}
      </span>
    </div>
  );
}

function PanelContent({ panel }: { panel: Panel }) {
  if (panel.kind === "stat") {
    return (
      <>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: panel.size ?? 64,
            color: "white",
            lineHeight: 1,
          }}
        >
          {panel.value}
        </div>
        <div
          className="text-white text-[14px] mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {panel.label}
        </div>
        <div
          className="text-white/60 text-[12px] mt-2"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {panel.subLabel}
        </div>
      </>
    );
  }

  if (panel.kind === "ph") {
    return (
      <>
        <div className="w-full mb-6">
          <div
            className="flex justify-between text-[10px] text-white/70 mb-2 uppercase tracking-[0.18em]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            <span>Acidic</span>
            <span>Alkaline</span>
          </div>
          <div className="relative h-1 w-full rounded-full bg-white/15">
            <div
              className="absolute top-1/2 w-3.5 h-3.5 rounded-full"
              style={{
                left: "85%",
                transform: "translate(-50%, -50%)",
                background: "#5b8be0",
                boxShadow: "0 0 14px rgba(91,139,224,0.8)",
              }}
            />
          </div>
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: 64,
            color: "white",
            lineHeight: 1,
          }}
        >
          {panel.value}
        </div>
        <div
          className="text-white/60 text-[12px] mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {panel.subLabel}
        </div>
      </>
    );
  }

  // minerals
  const minerals = [
    { s: "Na", n: "Sodium" },
    { s: "K", n: "Potassium" },
    { s: "Mg", n: "Magnesium" },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {minerals.map((m) => (
          <div
            key={m.s}
            className="text-white text-[13px]"
            style={{
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 999,
              padding: "8px 16px",
              fontFamily: "var(--font-body)",
              fontWeight: 400,
            }}
          >
            <strong style={{ fontWeight: 500 }}>{m.s}</strong> — {m.n}
          </div>
        ))}
      </div>
      <div
        className="text-white text-[22px] italic mt-6"
        style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
      >
        {panel.tagline}
      </div>
    </>
  );
}

function ExpandedCard({ card, onClose }: { card: Card; onClose: () => void }) {
  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.1 + i * 0.08, ease },
  });

  return (
    <motion.div
      key={`expanded-${card.pill}`}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] lg:aspect-[16/8]"
      style={{ background: "#184EA2" }}
    >
      {/* Background image fills the whole card */}
      {card.image ? (
        <img
          src={card.image}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0" style={{ background: "#184EA2" }} />
      )}
      {/* Dark overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Pill top-left */}
      <motion.div {...stagger(0)} className="absolute top-6 left-6 lg:top-8 lg:left-8 z-10">
        <PillLabel Icon={card.Icon} label={card.pill} />
      </motion.div>

      {/* Headline + body — bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 flex flex-col gap-4 lg:gap-6 max-w-[760px] z-10">
        <motion.h3
          {...stagger(1)}
          className="text-white text-[28px] lg:text-[48px] leading-[1.1]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
        >
          {card.lead}
          <em>{card.emph}</em>
        </motion.h3>

        <motion.p
          {...stagger(2)}
          className="text-white text-[13px] lg:text-[15px] leading-[1.65] max-w-[520px]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300, opacity: 0.9 }}
        >
          {card.description}
        </motion.p>

        <motion.a
          {...stagger(5)}
          href="#"
          className="text-white text-[13px] lg:text-[14px] hover:opacity-100 transition-opacity"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300, opacity: 0.7 }}
        >
          Learn More →
        </motion.a>
      </div>

      {/* Right column — floating cards stacked, desktop only */}
      <div
        className="hidden lg:flex absolute top-1/2 right-8 z-10 flex-col gap-4"
        style={{ transform: "translateY(-50%)", width: 320 }}
      >
        {/* Customer spotlight */}
        <motion.div
          {...stagger(3)}
          style={{
            background: "rgba(20, 28, 42, 0.55)",
            backdropFilter: "blur(16px) saturate(140%)",
            WebkitBackdropFilter: "blur(16px) saturate(140%)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 24,
          }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-full flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.25)" }}
            />
            <div className="min-w-0">
              <div
                className="text-white text-[13px]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {card.customer.name}
              </div>
              <div
                className="text-white/70 text-[11px]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {card.customer.city}
              </div>
            </div>
          </div>
          <p
            className="text-white text-[14px] italic mt-3 leading-[1.5]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            &ldquo;{card.customer.quote}&rdquo;
          </p>
        </motion.div>

        {/* Data panel */}
        <motion.div
          {...stagger(4)}
          style={{
            background: "rgba(20, 28, 42, 0.55)",
            backdropFilter: "blur(16px) saturate(140%)",
            WebkitBackdropFilter: "blur(16px) saturate(140%)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 24,
          }}
        >
          <div
            className="text-white/70 text-[10px] uppercase tracking-[0.2em] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            What's Inside
          </div>
          <PanelContent panel={card.panel} />
        </motion.div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200 z-20"
        style={{
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
        aria-label="Close"
      >
        <CloseIcon />
      </button>
    </motion.div>
  );
}

export default function USPSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const scroll = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card?.offsetWidth ?? 400;
    el.scrollBy({ left: dir * (w + 16), behavior: "smooth" });
  };

  const expandedCard = CARDS.find((c) => c.pill === expanded) ?? null;

  return (
    <section id="usp" className="bg-white py-24">
      <div className="max-w-[1340px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease }}
          className="text-center text-[36px] lg:text-[60px] leading-[1.1]"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            color: "#111111",
          }}
        >
          Pure Water. Pure Intention. <em>Pure You.</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="flex justify-center"
          style={{ marginTop: 28, paddingBottom: 64 }}
        >
          <a
            href="/wholesale"
            className="inline-flex items-center justify-center cursor-pointer transition-opacity duration-300 hover:opacity-85"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: 12,
              color: "white",
              backgroundColor: "#184EA2",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              padding: "14px 32px",
              borderRadius: 999,
            }}
          >
            Shop Wholesale
          </a>
        </motion.div>

        <AnimatePresence mode="wait">
          {expandedCard ? (
            <ExpandedCard
              key="expanded"
              card={expandedCard}
              onClose={() => setExpanded(null)}
            />
          ) : (
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto py-3 px-2 -mx-2 [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none" }}
              >
                {CARDS.map((card) => {
                  const { Icon } = card;
                  return (
                    <div
                      key={card.pill}
                      data-card
                      className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[380px] lg:w-[420px] aspect-[3/4] relative overflow-hidden rounded-2xl hover:scale-[1.02] transition-transform duration-300"
                      style={{ background: "#184EA2" }}
                    >
                      {card.image && (
                        <img
                          src={card.image}
                          alt=""
                          aria-hidden
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                      )}

                      {!card.image && (
                        <div
                          aria-hidden
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              "radial-gradient(ellipse at 60% 30%, rgba(255,255,255,0.08) 0%, transparent 70%)",
                          }}
                        />
                      )}

                      <div
                        aria-hidden
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)",
                        }}
                      />

                      <div className="absolute top-5 left-5">
                        <PillLabel Icon={Icon} label={card.pill} />
                      </div>

                      <button
                        onClick={() => setExpanded(card.pill)}
                        className="absolute top-5 right-5 w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
                        style={{
                          background: "rgba(255,255,255,0.9)",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                        }}
                        aria-label={`Expand ${card.pill}`}
                      >
                        <PlusIcon />
                      </button>

                      <h3
                        className="absolute bottom-0 left-0 right-0 text-white text-[28px] leading-[1.2]"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 300,
                          padding: "0 20px 24px 20px",
                        }}
                      >
                        {card.lead}
                        <em>{card.emph}</em>
                      </h3>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center gap-3 mt-8">
                <button
                  onClick={() => scroll(-1)}
                  className="inline-flex items-center justify-center rounded-full bg-[#184EA2] text-white hover:bg-[#205fbf] transition-colors duration-200 cursor-pointer"
                  style={{ padding: "12px 20px" }}
                  aria-label="Previous"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => scroll(1)}
                  className="inline-flex items-center justify-center rounded-full bg-[#184EA2] text-white hover:bg-[#205fbf] transition-colors duration-200 cursor-pointer"
                  style={{ padding: "12px 20px" }}
                  aria-label="Next"
                >
                  <ChevronRight />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
