import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Benefits", href: "#usp" },
  { label: "Our Water", href: "#the-water" },
  { label: "The Frequency", href: "#the-frequency" },
  { label: "Sustainability", href: "#the-bottle" },
  { label: "Reviews", href: "#social-proof" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("lenis-stopped", "menu-open");
    } else {
      document.documentElement.classList.remove("lenis-stopped", "menu-open");
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed left-0 right-0 z-40"
        style={{ top: "32px" }}
      >
        <div className="bg-transparent">
          <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-16 md:h-20">
            {/* Left — Logo */}
            <a href="/" className="select-none">
              <img
                src="/Aqua-Vibes-Logo-Web.png"
                alt="Aqua Vibes"
                className="h-10 md:h-12 w-auto object-contain"
                style={{
                  filter: menuOpen
                    ? "none"
                    : "brightness(0) saturate(100%) invert(22%) sepia(85%) saturate(1500%) hue-rotate(205deg) brightness(90%)",
                }}
              />
            </a>

            {/* Right — Buy Wholesale CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="/wholesale"
                className="hidden sm:inline-flex items-center justify-center px-8 py-3 rounded-full text-[13px] tracking-[0.15em] uppercase cursor-pointer transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  backgroundColor: menuOpen ? "#fff" : "var(--color-deep-blue)",
                  color: menuOpen ? "#184EA2" : "#fff",
                }}
              >
                Buy Wholesale
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`freq-icon flex items-end justify-center gap-[4px] w-[40px] h-[40px] rounded-md border-2 cursor-pointer pb-[10px] transition-colors duration-500${menuOpen ? " freq-icon--open" : " freq-icon--dark"}`}
                style={{ borderColor: menuOpen ? "#fff" : "#184EA2" }}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <span className="freq-bar freq-bar--1" />
                <span className="freq-bar freq-bar--2" />
                <span className="freq-bar freq-bar--3" />
              </button>
            </div>
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
            style={{
              backgroundColor: "var(--color-deep-blue)",
              top: "36px",
            }}
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
                    ease: [0.22, 1, 0.36, 1],
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
                  ease: [0.22, 1, 0.36, 1],
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
