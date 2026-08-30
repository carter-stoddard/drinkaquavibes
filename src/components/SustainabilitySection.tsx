import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const Recycle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 15.5-6.5" />
    <path d="M21 4v6h-6" />
    <path d="M21 12a9 9 0 0 1-15.5 6.5" />
    <path d="M3 20v-6h6" />
  </svg>
);

const Infinity = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.739-8z" />
  </svg>
);

const Ban = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>
);

const Bolt = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

interface StatItem {
  Icon: () => React.ReactElement;
  stat: string;
  label: string;
  sub: string;
}

const STATS: StatItem[] = [
  { Icon: Recycle, stat: "100%", label: "Recyclable Aluminum", sub: "Infinitely recyclable — no quality loss" },
  { Icon: Infinity, stat: "∞", label: "Bottle Lifecycles", sub: "Aluminum never loses recyclability" },
  { Icon: Ban, stat: "0", label: "Single-Use Plastics", sub: "No plastic. Not now. Not ever." },
  { Icon: Bolt, stat: "75%", label: "Less Energy to Recycle", sub: "vs producing new aluminum" },
];

export default function SustainabilitySection() {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const rate = 0.8;
    if (desktopVideoRef.current) desktopVideoRef.current.playbackRate = rate;
    if (mobileVideoRef.current) mobileVideoRef.current.playbackRate = rate;
  }, []);

  return (
    <section id="sustainability" className="bg-white">
      <div className="max-w-[1400px] mx-auto px-8 py-[60px] lg:py-[120px]">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
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
            SUSTAINABILITY
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
            Made to <em>outlast.</em>
          </motion.h2>
        </div>

        {/* DESKTOP */}
        <div
          className="hidden lg:block relative overflow-hidden"
          style={{ borderRadius: 16, minHeight: 825 }}
        >
          {/* Background video */}
          <video
            ref={desktopVideoRef}
            src="/AQUA-SUSTAINABILITY.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {/* Dark overlay */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)",
            }}
          />

          {/* Bottom-left headline block */}
          <div
            style={{
              position: "absolute",
              bottom: 48,
              left: 48,
              maxWidth: 480,
              zIndex: 10,
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.85, ease }}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: 52,
                color: "white",
                lineHeight: 1.1,
              }}
            >
              Built for the planet. Designed for <em>you.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: 0.24, ease }}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: 17,
                color: "rgba(255,255,255,0.7)",
                marginTop: 12,
              }}
            >
              Aluminum over plastic. Always.
            </motion.p>
          </div>

          {/* Right-side stat cards */}
          <div
            style={{
              position: "absolute",
              right: 48,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: 280,
            }}
          >
            {STATS.map((s, i) => {
              const { Icon } = s;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 16,
                    padding: "20px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <span style={{ color: "white", marginBottom: 8, display: "inline-flex" }}>
                    <Icon />
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 300,
                      color: "white",
                      fontSize: 48,
                      lineHeight: 1,
                    }}
                  >
                    {s.stat}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                      color: "white",
                      fontSize: 13,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.6)",
                      fontSize: 11,
                    }}
                  >
                    {s.sub}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          {/* Image block on top */}
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <video
              ref={mobileVideoRef}
              src="/AQUA-SUSTAINABILITY.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
          </div>

          <div style={{ padding: "32px 0" }}>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.85, ease }}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: 36,
                color: "#184EA2",
                lineHeight: 1.1,
              }}
            >
              Built for the planet. Designed for <em>you.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: 0.24, ease }}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: 17,
                color: "#5a6472",
                marginTop: 12,
              }}
            >
              Aluminum over plastic. Always.
            </motion.p>

            <div style={{ marginTop: 32 }}>
              {STATS.map((s, i) => {
                const { Icon } = s;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease }}
                    style={{
                      borderBottom: "0.5px solid #e8e8e8",
                      padding: "20px 0",
                    }}
                  >
                    <span
                      style={{
                        color: "#184EA2",
                        marginBottom: 8,
                        display: "inline-flex",
                      }}
                    >
                      <Icon />
                    </span>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 300,
                        color: "#184EA2",
                        fontSize: 48,
                        lineHeight: 1,
                      }}
                    >
                      {s.stat}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 400,
                        color: "#0f1923",
                        fontSize: 13,
                        marginTop: 4,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                        color: "#8a9aaa",
                        fontSize: 11,
                        marginTop: 2,
                      }}
                    >
                      {s.sub}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
