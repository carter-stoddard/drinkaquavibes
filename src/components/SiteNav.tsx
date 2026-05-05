import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Benefits", href: "/#usp" },
  { label: "Water", href: "/#the-water" },
  { label: "Frequency", href: "/#the-frequency" },
  { label: "Sustainability", href: "/#sustainability" },
  { label: "Reviews", href: "/#reviews" },
];

function scrollToHash(href: string) {
  const i = href.indexOf("#");
  if (i === -1) return false;
  const id = href.slice(i + 1);
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

const BLUE_FILTER =
  "brightness(0) saturate(100%) invert(24%) sepia(69%) saturate(1870%) hue-rotate(199deg) brightness(97%) contrast(87%)";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("lenis-stopped", "menu-open");
    } else {
      document.documentElement.classList.remove("lenis-stopped", "menu-open");
    }
  }, [menuOpen]);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  const isWhite = menuOpen;
  const textColor = isWhite ? "#fff" : "#184EA2";
  const ctaBg = isWhite ? "#fff" : "#184EA2";
  const ctaColor = isWhite ? "#184EA2" : "#fff";
  const freqClass = isWhite ? "" : " freq-icon--dark";

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: `1px solid ${scrolled ? "rgba(184, 200, 220, 0.35)" : "transparent"}`,
          transition: "border-color 0.4s ease",
        }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between lg:grid lg:grid-cols-3 px-5 lg:px-8 h-16 lg:h-20">
          {/* LEFT — Logo */}
          <a href="/" className="select-none relative h-10 lg:h-12 lg:justify-self-start">
            <img
              src="/Aqua-Vibes-Logo-Web.png"
              alt="Aqua Vibes"
              className="h-10 lg:h-12 w-auto object-contain transition-opacity duration-700"
              style={{ opacity: isWhite ? 1 : 0 }}
            />
            <img
              src="/Aqua-Vibes-Logo-Web.png"
              alt=""
              className="absolute inset-0 h-10 lg:h-12 w-auto object-contain transition-opacity duration-700"
              style={{ filter: BLUE_FILTER, opacity: isWhite ? 0 : 1 }}
            />
          </a>

          {/* CENTER — Inline nav links (lg+ only) */}
          <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 lg:justify-self-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (scrollToHash(link.href)) e.preventDefault();
                }}
                className="text-[12px] tracking-[0.18em] uppercase transition-opacity duration-300 hover:opacity-60"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  color: textColor,
                  transition: "color 0.5s ease, opacity 0.3s ease",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* RIGHT — CTA (lg+) / Hamburger (below lg) */}
          <div className="flex items-center gap-3 lg:justify-self-end">
            <a
              href="/wholesale"
              className="hidden lg:inline-flex items-center justify-center px-6 h-11 rounded-full text-[11px] tracking-[0.15em] uppercase cursor-pointer transition-all duration-500 hover:bg-[rgba(24,78,162,0.08)] active:scale-[0.98]"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                backgroundColor: "transparent",
                color: "#184EA2",
                border: "1px solid #184EA2",
              }}
            >
              Buy Wholesale
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full cursor-pointer transition-opacity duration-300 hover:opacity-70"
              style={{
                border: `1px solid ${textColor === "#fff" ? "rgba(255,255,255,0.5)" : "rgba(24, 78, 162, 0.4)"}`,
                color: textColor,
                background: "transparent",
              }}
              aria-label="Open menu"
            >
              <svg width="18" height="14" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M3 5h18" />
                <path d="M3 13h18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu (mobile only) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] lg:hidden bg-white"
          >
            {/* Top bar — logo + close */}
            <div className="flex items-center justify-between px-5 h-16">
              <a href="/" onClick={() => setMenuOpen(false)} className="h-10">
                <img
                  src="/Aqua-Vibes-Logo-Web.png"
                  alt="Aqua Vibes"
                  className="h-10 w-auto object-contain"
                  style={{ filter: BLUE_FILTER }}
                />
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full cursor-pointer transition-opacity duration-300 hover:opacity-70"
                style={{ border: "1px solid rgba(24, 78, 162, 0.4)", color: "#184EA2" }}
                aria-label="Close menu"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </button>
            </div>

            {/* Vertical link list */}
            <nav className="flex flex-col px-5 mt-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setMenuOpen(false);
                    if (scrollToHash(link.href)) e.preventDefault();
                  }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.12 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="py-4 text-[40px] leading-[1.05] cursor-pointer transition-opacity duration-300 hover:opacity-60"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 300,
                    color: "#0d1320",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="/wholesale"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.45,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="mt-10 self-start inline-flex items-center justify-center px-8 h-12 rounded-full bg-[#184EA2] text-white text-[12px] tracking-[0.18em] uppercase cursor-pointer transition-opacity duration-300 hover:opacity-85"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Buy Wholesale
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
