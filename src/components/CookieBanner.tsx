import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "aqua-vibes-cookie-consent";
const ease = [0.22, 1, 0.36, 1] as const;

type Consent = "accepted" | "declined";

export function getCookieConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "accepted" || v === "declined" ? v : null;
}

export function setCookieConsent(value: Consent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent("aqua-vibes-consent-change", { detail: value }));
}

export function openCookieBanner() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("aqua-vibes-open-cookie-banner"));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => {
      if (getCookieConsent() === null) setVisible(true);
    }, 700);

    const onOpen = () => setVisible(true);
    window.addEventListener("aqua-vibes-open-cookie-banner", onOpen);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("aqua-vibes-open-cookie-banner", onOpen);
    };
  }, []);

  const choose = (value: Consent) => {
    setCookieConsent(value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie preferences"
          style={{
            position: "fixed",
            zIndex: 90,
            left: 16,
            right: 16,
            bottom: 16,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              pointerEvents: "auto",
              background: "#ffffff",
              borderRadius: 16,
              border: "1px solid #e8eef5",
              boxShadow: "0 20px 60px rgba(15, 25, 35, 0.18)",
              padding: "20px 24px",
              maxWidth: 880,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: "1 1 320px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: 10,
                  color: "#184EA2",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                }}
              >
                Cookies
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: 14,
                  color: "#3a4452",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                We use cookies to understand how visitors use our site and to
                improve your experience. By accepting, you agree to the use of
                analytics cookies described in our{" "}
                <a
                  href="/cookies"
                  style={{ color: "#184EA2", textDecoration: "none" }}
                >
                  Cookie Policy
                </a>
                .
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                flexShrink: 0,
              }}
            >
              <button
                onClick={() => choose("declined")}
                className="cursor-pointer transition-colors duration-200"
                style={{
                  background: "transparent",
                  color: "#0f1923",
                  border: "1px solid #dce6f0",
                  borderRadius: 999,
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  padding: "12px 22px",
                }}
              >
                Decline
              </button>
              <button
                onClick={() => choose("accepted")}
                className="cursor-pointer transition-colors duration-200 hover:bg-[#205fbf]"
                style={{
                  background: "#184EA2",
                  color: "white",
                  border: "none",
                  borderRadius: 999,
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  padding: "12px 24px",
                }}
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
