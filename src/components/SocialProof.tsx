import { useRef, useEffect, useCallback, useState } from "react";
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

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex flex-col h-full">
      <Stars />
      <p
        className="text-lg md:text-xl leading-[1.6] mb-6 flex-1 text-white"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontStyle: "italic",
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>
      <div>
        <div className="w-full h-[1px] bg-white/15 mb-4" />
        <span
          className="text-[11px] tracking-[0.18em] uppercase text-white/50"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          {t.name} — {t.title}
        </span>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardStep = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return 0;
    return card.offsetWidth + 20; // card width + gap
  }, []);

  const getVisibleCount = useCallback(() => {
    return window.innerWidth >= 1024 ? 3 : 1;
  }, []);

  const scrollToIndex = useCallback((i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const step = getCardStep();
    el.scrollTo({ left: step * i, behavior: "smooth" });
  }, [getCardStep]);

  const scrollToNext = useCallback(() => {
    const el = scrollRef.current;
    if (!el || pausedRef.current) return;
    const step = getCardStep();
    const count = getVisibleCount();
    const maxIndex = TESTIMONIALS.length - count;
    const currentIdx = Math.round(el.scrollLeft / step);
    const nextIdx = currentIdx >= maxIndex ? 0 : currentIdx + 1;
    el.scrollTo({ left: step * nextIdx, behavior: "smooth" });
  }, [getCardStep, getVisibleCount]);

  // Track active index on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const step = getCardStep();
      if (step > 0) {
        setActiveIndex(Math.round(el.scrollLeft / step));
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [getCardStep]);

  useEffect(() => {
    const interval = setInterval(scrollToNext, 3000);
    return () => clearInterval(interval);
  }, [scrollToNext]);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { setTimeout(() => { pausedRef.current = false; }, 3000); };

  return (
    <div className="bg-white px-3 md:px-5 py-3 md:py-5">
    <section
      ref={sectionRef}
      id="social-proof"
      className="relative bg-[#184EA2] py-28 md:py-40 lg:py-48 rounded-2xl md:rounded-3xl"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16 md:mb-20 px-6"
      >
        <span
          className="block text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-white/50 mb-4"
          style={{ fontFamily: "var(--font-accent)", fontWeight: 300 }}
        >
          What People Are Saying
        </span>
        <h2
          className="text-3xl md:text-4xl lg:text-[44px] leading-[1.1] tracking-[0.01em] text-white"
          style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
        >
          Hydration, elevated.
        </h2>
      </motion.div>

      {/* Scrolling carousel — all breakpoints */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="overflow-hidden px-6 md:px-10 lg:px-16"
      >
        <div
          ref={scrollRef}
          onTouchStart={pause}
          onTouchEnd={resume}
          onMouseEnter={pause}
          onMouseLeave={resume}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x",
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="w-full lg:w-[calc((100%-2.5rem)/3)] flex-shrink-0 snap-start bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8"
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-8 md:mt-12">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              activeIndex === i
                ? "bg-white scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </section>
    </div>
  );
}
