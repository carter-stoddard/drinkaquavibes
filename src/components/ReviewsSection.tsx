import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface Review {
  quote: string;
  name: string;
  city: string;
}

const REVIEWS: Review[] = [
  { quote: "I can taste the difference immediately. Smoother, cleaner, nothing like tap.", name: "Sarah M.", city: "Santa Monica, CA" },
  { quote: "My nutritionist recommended alkaline water and this is the only brand I trust.", name: "Maya R.", city: "Los Angeles, CA" },
  { quote: "I stopped buying sports drinks. This does everything they do without the sugar.", name: "Jess T.", city: "Newport Beach, CA" },
  { quote: "The aluminum bottle alone sold me. Finally a water brand that gets sustainability.", name: "Chloe B.", city: "San Diego, CA" },
  { quote: "I noticed my skin looked better within two weeks. Not going back.", name: "Priya K.", city: "Pasadena, CA" },
];

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#184EA2">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scroll = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const w = card?.offsetWidth ?? 380;
    el.scrollBy({ left: dir * (w + 24), behavior: "smooth" });
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const card = el.querySelector<HTMLElement>("[data-review-card]");
      const step = (card?.offsetWidth ?? 380) + 24;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3500);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section id="reviews" className="bg-white">
      <div className="max-w-[1400px] mx-auto px-8 py-[60px] lg:py-[120px]">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: 64 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease }}
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
            WHAT THEY'RE SAYING
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="text-[36px] lg:text-[64px]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              color: "#0f1923",
              lineHeight: 1.1,
            }}
          >
            Real people. <em>Real results.</em>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden"
            style={{
              gap: 24,
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "smooth",
              paddingBottom: 8,
            }}
          >
            {REVIEWS.map((r, i) => (
              <motion.article
                key={r.name}
                data-review-card
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="w-[85vw] lg:w-[380px] hover:shadow-[0_4px_24px_rgba(24,78,162,0.06)] transition-shadow duration-300"
                style={{
                  flexShrink: 0,
                  background: "#ffffff",
                  border: "0.5px solid #e0e8f0",
                  borderRadius: 16,
                  padding: 36,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: 4 }}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} />
                  ))}
                </div>

                {/* Quote */}
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 48,
                      color: "#184EA2",
                      lineHeight: 0.5,
                      display: "block",
                      marginBottom: -8,
                    }}
                  >
                    &ldquo;
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: 22,
                      color: "#0f1923",
                      lineHeight: 1.6,
                    }}
                  >
                    {r.quote}
                  </p>
                </div>

                {/* Reviewer */}
                <div
                  style={{
                    borderTop: "0.5px solid #e8e8e8",
                    paddingTop: 20,
                    marginTop: "auto",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                      fontSize: 13,
                      color: "#0f1923",
                    }}
                  >
                    {r.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: 12,
                      color: "#8a9aaa",
                      marginTop: 2,
                    }}
                  >
                    {r.city}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            marginTop: 32,
          }}
        >
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="hover:bg-[#333] transition-colors duration-200 cursor-pointer"
            style={{
              background: "#111",
              borderRadius: 999,
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
            }}
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="hover:bg-[#333] transition-colors duration-200 cursor-pointer"
            style={{
              background: "#111",
              borderRadius: 999,
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
            }}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
