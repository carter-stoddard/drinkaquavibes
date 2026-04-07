import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Benefits", href: "#usp" },
  { label: "Our Water", href: "#the-water" },
  { label: "The Frequency", href: "#the-frequency" },
  { label: "Sustainability", href: "#the-bottle" },
  { label: "Reviews", href: "#social-proof" },
];

const DARK_SECTIONS = ["usp", "the-frequency"];

const BLUE_FILTER =
  "brightness(0) saturate(100%) invert(24%) sepia(69%) saturate(1870%) hue-rotate(199deg) brightness(97%) contrast(87%)";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [onDark, setOnDark] = useState(true); // start on dark (hero)
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("lenis-stopped", "menu-open");
    } else {
      document.documentElement.classList.remove("lenis-stopped", "menu-open");
    }
  }, [menuOpen]);

  // Detect if nav is over a dark section
  useEffect(() => {
    const check = () => {
      const navEl = navRef.current;
      if (!navEl) return;
      const navMid = navEl.getBoundingClientRect().bottom;

      // Check if we're still in the hero (above first section)
      const hero = document.querySelector("section");
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        if (heroRect.top <= navMid && heroRect.bottom >= navMid) {
          setOnDark(true);
          return;
        }
      }

      // Check dark sections by ID
      let dark = false;
      for (const id of DARK_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= navMid && rect.bottom >= navMid) {
          dark = true;
          break;
        }
      }
      setOnDark(dark);
    };

    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  // When menu is open, always white. Otherwise, based on background.
  const isWhite = menuOpen || onDark;
  const borderColor = isWhite ? "#fff" : "#184EA2";
  const ctaBg = isWhite ? "#fff" : "#184EA2";
  const ctaColor = isWhite ? "#184EA2" : "#fff";
  const freqClass = isWhite ? "" : " freq-icon--dark";

  return (
    <>
      <nav
        ref={navRef}
        className="fixed left-0 right-0 z-40"
        style={{ top: "0" }}
      >
        {/* ── Mobile Nav ── */}
        <div className="md:hidden flex items-center justify-between px-4 pt-3 h-14">
          {/* Left — Logo (cross-fade white/blue) */}
          <a href="/" className="select-none relative h-8">
            <img
              src="/Aqua-Vibes-Logo-Web.png"
              alt="Aqua Vibes"
              className="h-8 w-auto object-contain transition-opacity duration-700"
              style={{ opacity: isWhite ? 1 : 0 }}
            />
            <img
              src="/Aqua-Vibes-Logo-Web.png"
              alt=""
              className="absolute inset-0 h-8 w-auto object-contain transition-opacity duration-700"
              style={{ filter: BLUE_FILTER, opacity: isWhite ? 0 : 1 }}
            />
          </a>

          {/* Right — Menu Toggle with square border */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`freq-icon flex items-end justify-center gap-[2px] w-[40px] h-[40px] rounded-md border-2 cursor-pointer pb-[9px] transition-colors duration-500${menuOpen ? " freq-icon--open" : freqClass}`}
            style={{ borderColor }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="freq-bar freq-bar--1" />
            <span className="freq-bar freq-bar--2" />
            <span className="freq-bar freq-bar--3" />
            <span className="freq-bar freq-bar--4" />
            <span className="freq-bar freq-bar--5" />
          </button>
        </div>

        {/* ── Desktop Nav — pill bar ── */}
        <div className="hidden md:block px-8 lg:px-12 pt-4">
          <div
            className="flex items-center justify-between px-6 h-16 rounded-full transition-all duration-500"
            style={{
              border: `2px solid ${borderColor}`,
              backgroundColor: "transparent",
            }}
          >
            {/* Left — Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`freq-icon flex items-end justify-center gap-[2px] w-[36px] h-[36px] cursor-pointer pb-[8px] transition-colors duration-500${menuOpen ? " freq-icon--open" : freqClass}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="freq-bar freq-bar--1" />
              <span className="freq-bar freq-bar--2" />
              <span className="freq-bar freq-bar--3" />
              <span className="freq-bar freq-bar--4" />
              <span className="freq-bar freq-bar--5" />
            </button>

            {/* Center — Logo (cross-fade white/blue) */}
            <a href="/" className="absolute left-1/2 -translate-x-1/2 select-none h-10" style={{ zIndex: 1 }}>
              <img
                src="/Aqua-Vibes-Logo-Web.png"
                alt="Aqua Vibes"
                className="h-10 w-auto object-contain transition-opacity duration-700"
                style={{ opacity: isWhite ? 1 : 0 }}
              />
              <img
                src="/Aqua-Vibes-Logo-Web.png"
                alt=""
                className="absolute top-0 left-0 h-10 w-auto object-contain transition-opacity duration-700"
                style={{ filter: BLUE_FILTER, opacity: isWhite ? 0 : 1 }}
              />
            </a>

            {/* Right — Buy Wholesale CTA */}
            <a
              href="/wholesale"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full text-[11px] tracking-[0.15em] uppercase cursor-pointer transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                backgroundColor: ctaBg,
                color: ctaColor,
              }}
            >
              Buy Wholesale
            </a>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-35 flex items-center justify-center"
            style={{ backgroundColor: "var(--color-deep-blue)" }}
          >
            <nav className="flex flex-col items-center gap-8 md:gap-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.04em] cursor-pointer transition-opacity duration-300 hover:opacity-60"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 300,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile wholesale CTA inside menu */}
              <motion.a
                href="/wholesale"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="mt-6 sm:hidden inline-flex items-center px-8 py-3 rounded-full text-[11px] tracking-[0.18em] uppercase cursor-pointer border border-white/30 text-white transition-all duration-300 hover:bg-white/10"
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
