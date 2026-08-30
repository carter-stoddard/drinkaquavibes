import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12%" },
  transition: { duration: 0.85, delay, ease },
});

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontWeight: 400,
  fontSize: 11,
  color: "#184EA2",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
};

const body: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontWeight: 300,
  fontSize: 17,
  color: "#3a4452",
  lineHeight: 1.85,
};

const display: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 300,
  color: "#184EA2",
  lineHeight: 1.1,
};

function Photo({
  src,
  alt,
  aspect = "4 / 5",
  delay = 0,
  className = "",
  position = "center",
}: {
  src: string;
  alt: string;
  aspect?: string;
  delay?: number;
  className?: string;
  position?: string;
}) {
  return (
    <motion.div
      {...reveal(delay)}
      className={`relative overflow-hidden ${className}`}
      style={{ borderRadius: 16, aspectRatio: aspect, background: "#E8E8E8" }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: position }}
      />
    </motion.div>
  );
}

function FounderVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      {...reveal(0.1)}
      className="relative overflow-hidden"
      style={{ borderRadius: 16, aspectRatio: "16 / 9", background: "#0d1320" }}
    >
      <video
        ref={ref}
        src="/about/founder-story.mp4"
        preload="metadata"
        playsInline
        controls={playing}
        onPlay={() => setPlaying(true)}
        onEnded={() => setPlaying(false)}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {!playing && (
        <button
          onClick={() => ref.current?.play()}
          aria-label="Play founder video"
          className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          style={{
            background:
              "linear-gradient(to top, rgba(13,19,32,0.55) 0%, rgba(13,19,32,0.1) 50%, rgba(13,19,32,0.2) 100%)",
          }}
        >
          <span
            className="inline-flex items-center justify-center w-[76px] h-[76px] lg:w-[96px] lg:h-[96px] rounded-full transition-transform duration-500 group-hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.14)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.35)",
            }}
          >
            <svg width="22" height="24" viewBox="0 0 22 24" fill="white" aria-hidden>
              <path d="M2 1.5v21l18-10.5z" />
            </svg>
          </span>
        </button>
      )}
    </motion.div>
  );
}

export default function AboutPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Our Story — Aqua Vibes";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <>
      <SiteNav />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden aspect-[4/5] lg:aspect-[2/1] mx-3 mt-[88px] mb-3 bg-[#E8E8E8]"
        style={{ borderRadius: 12 }}
      >
        <motion.img
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease }}
          src="/about/founder-paddleboard.webp"
          alt="Aqua Vibes founder paddleboarding on calm coastal water"
          className="absolute inset-0 w-full h-full object-cover object-[65%_center] lg:object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(8,20,45,0.72) 0%, rgba(8,20,45,0.25) 45%, rgba(8,20,45,0) 75%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-8 lg:px-12 lg:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            style={{ ...eyebrow, color: "rgba(255,255,255,0.75)", marginBottom: 16 }}
          >
            Our Founder
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="text-[48px] md:text-[60px] lg:text-[84px] leading-[1.02]"
            style={{ ...display, color: "white" }}
          >
            A life in <em>tune.</em>
          </motion.h1>
        </div>
      </section>

      <main className="bg-white">
        {/* ── Opening statement ── */}
        <section className="max-w-[1400px] mx-auto px-8 pt-[72px] pb-[40px] lg:pt-[140px] lg:pb-[80px]">
          <div className="max-w-[920px]">
            <motion.div {...reveal(0)} style={{ ...eyebrow, marginBottom: 24 }}>
              The Story
            </motion.div>
            <motion.h2
              {...reveal(0.1)}
              className="text-[36px] md:text-[48px] lg:text-[64px]"
              style={{ ...display, color: "#184EA2" }}
            >
              Music has been part of my life for as long as I can <em>remember.</em>
            </motion.h2>
          </div>
        </section>

        {/* ── Roots + career ── */}
        <section className="max-w-[1400px] mx-auto px-8 py-[40px] lg:py-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <Photo
                src="/about/founder-portrait-jacket.webp"
                alt="Black and white portrait of the founder in a leather jacket"
                position="center top"
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <motion.div {...reveal(0)} style={{ ...eyebrow, marginBottom: 24 }}>
                The Roots
              </motion.div>
              <motion.h2
                {...reveal(0.05)}
                className="text-[36px] lg:text-[52px]"
                style={{ ...display, marginBottom: 28 }}
              >
                Raised on <em>music.</em>
              </motion.h2>
              <motion.p {...reveal(0.1)} style={body}>
                I grew up surrounded by it. My mother was a child prodigy pianist, and from the very beginning I experienced the way music could inspire emotion, create connection, and shape how we feel. That early foundation set the path I would follow for the rest of my life.
              </motion.p>
              <motion.p {...reveal(0.2)} style={{ ...body, marginTop: 24 }}>
                Over the years, I was fortunate to build a career as a musician — becoming an award-winning guitarist and earning a nomination for Best Debut Album at the LA Music Awards. But as performing and writing became my profession, I found myself drawn to something deeper: the relationship between sound, vibration, and human well-being.
              </motion.p>
              <motion.div
                {...reveal(0.3)}
                className="mt-10 pt-8"
                style={{ borderTop: "1px solid #E8E8E8" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontWeight: 300,
                    fontSize: 20,
                    color: "#184EA2",
                    letterSpacing: "0.04em",
                    lineHeight: 1.6,
                  }}
                >
                  Award-winning guitarist
                  <br />
                  LA Music Awards — Best Debut Album nominee
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Frequencies + intention (copy left, live photo right) ── */}
        <section className="max-w-[1400px] mx-auto px-8 py-[40px] lg:py-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <motion.div {...reveal(0)} style={{ ...eyebrow, marginBottom: 24 }}>
                The Turn
              </motion.div>
              <motion.h2
                {...reveal(0.05)}
                className="text-[36px] lg:text-[52px]"
                style={{ ...display, marginBottom: 28 }}
              >
                Sound, vibration, and <em>well-being.</em>
              </motion.h2>
              <motion.p {...reveal(0.1)} style={body}>
                That curiosity led me to study frequencies and explore the ways people use sound as part of their personal wellness practices. At the same time, I embraced meditation and mindfulness — practices that taught me to live with greater intention, balance, and presence.
              </motion.p>
              <motion.p {...reveal(0.2)} style={{ ...body, marginTop: 24 }}>
                Eventually, I realized my greatest passions — music, wellness, and living intentionally — didn't have to exist separately.
              </motion.p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
              <Photo
                src="/about/founder-guitar-live.webp"
                alt="The founder performing live on guitar"
                position="center top"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ── Statement — deep blue ── */}
      <section
        className="mx-3 my-3 overflow-hidden"
        style={{ background: "#184EA2", borderRadius: 12 }}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-[100px] lg:py-[180px] text-center">
          <motion.h2
            {...reveal(0)}
            className="text-[56px] md:text-[84px] lg:text-[128px]"
            style={{ ...display, color: "white" }}
          >
            They became<br /><em>Aqua Vibes.</em>
          </motion.h2>
        </div>
      </section>

      <main className="bg-white">
        {/* ── Why Aqua Vibes ── */}
        <section className="max-w-[1400px] mx-auto px-8 py-[40px] lg:py-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 lg:col-start-7">
              <motion.div {...reveal(0)} style={{ ...eyebrow, marginBottom: 24 }}>
                A Daily Ritual
              </motion.div>
              <motion.h2
                {...reveal(0.1)}
                className="text-[36px] lg:text-[52px]"
                style={{ ...display, marginBottom: 28 }}
              >
                Hydration can be more than <em>drinking water.</em>
              </motion.h2>
              <motion.p {...reveal(0.2)} style={body}>
                Aqua Vibes was born from that belief. Hydration can be a daily ritual — a moment to pause, reset, and reconnect with yourself. Every bottle carries the values that inspired this company: intention, positivity, sustainability, and a commitment to helping people feel their best.
              </motion.p>
              <motion.p {...reveal(0.3)} style={{ ...body, marginTop: 24 }}>
                As a proudly women- and family-owned company, we deliver premium alkaline water with electrolytes in recyclable aluminum bottles — a more sustainable alternative to single-use plastic. And we embrace the idea that our environment, including the sounds, experiences, and energy we surround ourselves with, plays a role in how we feel.
              </motion.p>
            </div>
            <div className="lg:col-span-5 lg:order-first">
              <Photo
                src="/about/founder-portrait-suit.webp"
                alt="Black and white portrait of the founder seated in a suit"
                position="center 25%"
              />
            </div>
          </div>
        </section>

        {/* ── Video ── */}
        <section className="max-w-[1400px] mx-auto px-8 pt-[72px] pb-[40px] lg:pt-[120px] lg:pb-[80px]">
          <div>
            <div style={{ marginBottom: 48 }}>
              <motion.div {...reveal(0)} style={{ ...eyebrow, marginBottom: 20 }}>
                Watch
              </motion.div>
              <motion.h2
                {...reveal(0.1)}
                className="text-[36px] md:text-[48px] lg:text-[64px]"
                style={display}
              >
                In her own <em>words.</em>
              </motion.h2>
            </div>
            <FounderVideo />
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="max-w-[1400px] mx-auto px-8 pt-[60px] pb-[100px] lg:pt-[120px] lg:pb-[160px]">
          <div className="text-center">
            <motion.p {...reveal(0)} className="max-w-[860px] mx-auto" style={{ ...body, fontSize: 19 }}>
              For me, Aqua Vibes is the natural intersection of a lifetime devoted to music and a personal journey toward health, mindfulness, and purpose.
            </motion.p>
            <motion.h2
              {...reveal(0.15)}
              className="text-[40px] md:text-[60px] lg:text-[80px] mt-12 lg:mt-16"
              style={display}
            >
              My hope is that every bottle reminds you to pause, hydrate with intention, and bring a little more <em>positivity</em> into your day.
            </motion.h2>
            <motion.div
              {...reveal(0.3)}
              className="flex flex-row flex-wrap items-center justify-center gap-3 lg:gap-4 mt-12 lg:mt-16"
            >
              <a
                href="/#the-water"
                className="inline-flex items-center justify-center px-6 lg:px-10 h-[48px] lg:h-[60px] rounded-full bg-[#184EA2] text-white text-[12px] lg:text-[13px] tracking-[0.18em] uppercase transition-colors duration-300 hover:bg-[#205fbf]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Explore the Water
              </a>
              <a
                href="/wholesale"
                className="inline-flex items-center justify-center px-6 lg:px-10 h-[48px] lg:h-[60px] rounded-full text-[12px] lg:text-[13px] tracking-[0.18em] uppercase transition-all duration-500 hover:bg-[rgba(24,78,162,0.08)]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  color: "#184EA2",
                  border: "1px solid #184EA2",
                }}
              >
                Buy Wholesale
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
