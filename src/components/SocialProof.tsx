import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I've tried every alkaline water on the market and nothing comes close. You can actually feel the difference — cleaner, lighter, more energized.",
    name: "Jamie R.",
    title: "Verified Buyer",
  },
  {
    quote:
      "The bottle alone stopped me in my tracks. Then I tasted it and I was sold. It's become part of my morning ritual.",
    name: "Priya K.",
    title: "Verified Buyer",
  },
  {
    quote:
      "I brought these to our Pilates studio and every single client asked where to get them. We're now stocking them at the front desk.",
    name: "Lauren T.",
    title: "Studio Owner",
  },
  {
    quote:
      "Clean ingredients, sustainable packaging, and it actually tastes pure. Nothing artificial, nothing unnecessary.",
    name: "Madison C.",
    title: "Verified Buyer",
  },
  {
    quote:
      "Bought a case on a whim and now I'm ordering every two weeks. It makes me feel amazing and that's enough.",
    name: "Alexis W.",
    title: "Verified Buyer",
  },
  {
    quote:
      "My skin has never looked better since I switched to Aqua Vibes. I'm convinced it's the alkaline pH. My aesthetician agrees.",
    name: "Sofia M.",
    title: "Verified Buyer",
  },
  {
    quote:
      "We serve this at every client meeting now. It's the small details that set a brand apart — this water says something about who we are.",
    name: "Daniel H.",
    title: "Creative Director",
  },
  {
    quote:
      "The 888 Hz thing sounded wild at first but I'm a believer. There's something about this water that just feels intentional.",
    name: "Naomi S.",
    title: "Verified Buyer",
  },
  {
    quote:
      "Finally a water brand that actually looks good on my shelf. The aluminum bottle is beautiful and I love that it's recyclable.",
    name: "Chloe B.",
    title: "Verified Buyer",
  },
  {
    quote:
      "I keep one in my gym bag, one on my desk, one in my car. It's replaced every other water in my life. Not exaggerating.",
    name: "Ryan P.",
    title: "Verified Buyer",
  },
];

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 0.5L8.76 4.86L13.5 5.39L9.96 8.54L10.94 13.18L7 10.88L3.06 13.18L4.04 8.54L0.5 5.39L5.24 4.86L7 0.5Z"
        fill="#C9A84C"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
}

function FreqWave() {
  return (
    <svg width="100%" height="24" viewBox="0 0 200 24" preserveAspectRatio="none" className="opacity-15">
      <path
        d="M0,12 Q10,4 20,12 T40,12 T60,12 T80,12 T100,12 T120,12 T140,12 T160,12 T180,12 T200,12"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
      />
      <path
        d="M0,12 Q10,20 20,12 T40,12 T60,12 T80,12 T100,12 T120,12 T140,12 T160,12 T180,12 T200,12"
        fill="none"
        stroke="#fff"
        strokeWidth="0.5"
      />
    </svg>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      {/* Subtle frequency wave background */}
      <div className="absolute bottom-4 left-0 right-0 z-0">
        <FreqWave />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <Stars />
        <p
          className="text-lg md:text-xl leading-[1.6] mb-6 flex-1 text-black"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontStyle: "italic",
          }}
        >
          &ldquo;{t.quote}&rdquo;
        </p>
        <div>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent mb-4" />
          <div className="flex items-center justify-between">
            <span
              className="text-[11px] tracking-[0.18em] uppercase text-black/40"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              {t.name} — {t.title}
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#184EA2]/20" style={{ fontFamily: "var(--font-accent)" }}>
              888 Hz
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const CARD_STYLE = {
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.08)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
};

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });

  const cards = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      ref={sectionRef}
      id="social-proof"
      className="relative bg-white py-16 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
        className="text-center mb-10 md:mb-14 px-6"
      >
        <span
          className="block text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-black/35 mb-4"
          style={{ fontFamily: "var(--font-accent)", fontWeight: 300 }}
        >
          What People Are Saying
        </span>
        <h2
          className="text-4xl md:text-5xl lg:text-[64px] leading-[1.1] tracking-[0.01em] text-[#184EA2]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
        >
          Hydration, Elevated
        </h2>
      </motion.div>

      {/* Continuous marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10" style={{ background: "linear-gradient(to right, #fff, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10" style={{ background: "linear-gradient(to left, #fff, transparent)" }} />

        <div className="flex gap-5 animate-marquee-reviews hover:[animation-play-state:paused]">
          {cards.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[340px] flex-shrink-0 rounded-2xl p-6 md:p-8"
              style={CARD_STYLE}
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
