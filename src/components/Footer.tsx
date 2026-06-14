import { motion } from "framer-motion";
import { openCookieBanner } from "./CookieBanner";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, delay, ease },
});

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Water", href: "/#the-water" },
  { label: "Sustainability", href: "/#sustainability" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Reviews", href: "/#reviews" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Accessibility Statement", href: "/accessibility" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "California Privacy Rights (CCPA)", href: "/ccpa" },
  { label: "FDA Disclaimer", href: "/fda-disclaimer" },
];

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.43 0-2.59-1.16-2.59-2.59a2.59 2.59 0 0 1 2.59-2.59c.28 0 .54.04.79.12V9.66a5.65 5.65 0 0 0-.79-.06A5.66 5.66 0 0 0 4.2 15.26a5.66 5.66 0 0 0 5.66 5.66 5.66 5.66 0 0 0 5.66-5.66V9.48a7.33 7.33 0 0 0 4.28 1.37V7.76a4.28 4.28 0 0 1-3.2-1.94z" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "#184EA2", width: "100%" }} className="py-[60px] lg:py-[80px] lg:pb-[40px]">
      <style>{`
        .footer-link { transition: opacity 0.2s ease; opacity: 0.75; }
        .footer-link:hover { opacity: 1; }
        .footer-social { transition: opacity 0.2s ease; opacity: 0.7; color: white; display: inline-flex; }
        .footer-social:hover { opacity: 1; }
        .footer-legal-link { color: rgba(255,255,255,0.45); transition: color 0.2s ease; text-decoration: none; }
        .footer-legal-link:hover { color: rgba(255,255,255,0.8); }
        .footer-legal {
          padding: 24px 0;
          border-top: 0.5px solid rgba(255,255,255,0.15);
          border-bottom: 0.5px solid rgba(255,255,255,0.15);
          margin: 32px 0;
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          padding-bottom: 64px;
          border-bottom: 0.5px solid rgba(255,255,255,0.15);
        }
        .footer-bottom {
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
        }
        .footer-disclaimer {
          max-width: 600px;
          text-align: right;
        }
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
          .footer-top > * {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .footer-logo {
            height: 72px !important;
          }
          .footer-nav {
            align-items: center !important;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: center;
            gap: 16px;
            text-align: center;
          }
          .footer-disclaimer {
            max-width: 100%;
            text-align: center;
          }
          .footer-legal {
            justify-content: center;
            gap: 16px;
          }
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-8">
        {/* TOP — three columns */}
        <div className="footer-top">
          {/* Column 1 — Brand */}
          <motion.div {...fadeUp(0)}>
            <img
              src="/Aqua-Vibes-Logo-Web.png"
              alt="Aqua Vibes"
              className="footer-logo"
              style={{ height: 40, width: "auto", objectFit: "contain", display: "block" }}
            />
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: 18,
                color: "white",
                marginTop: 20,
              }}
            >
              Hydrate with Intention.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 28 }}>
              <a
                href="https://instagram.com/drinkaquavibes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://tiktok.com/@drinkaquavibes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="footer-social"
              >
                <TikTokIcon />
              </a>
            </div>
          </motion.div>

          {/* Column 2 — Navigation */}
          <motion.div {...fadeUp(0.1)}>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: 10,
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 20,
              }}
            >
              PAGES
            </div>
            <nav className="footer-nav" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

        </div>

        {/* LEGAL — placeholder routes */}
        <div className="footer-legal">
          {LEGAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer-legal-link"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: 11,
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              openCookieBanner();
            }}
            className="footer-legal-link"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: 11,
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            Manage Cookies
          </button>
        </div>

        {/* BOTTOM — copyright + disclaimer */}
        <div className="footer-bottom">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: 11,
              color: "rgba(255,255,255,0.35)",
              margin: 0,
            }}
          >
            © 2026 Aqua Vibes. All rights reserved. ·{" "}
            <a
              href="https://carterstoddard.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              Site by Carter Stoddard LLC
            </a>
          </p>
          <p
            className="footer-disclaimer"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: 10,
              color: "rgba(255,255,255,0.25)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            References on this site to 888 Hz, sound frequency, and cymatics reflect spiritual and wellness traditions rather than scientifically established facts. All information is provided for lifestyle purposes only and does not constitute medical advice. Individual experiences may vary. Consult a qualified healthcare professional before making health-related decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
