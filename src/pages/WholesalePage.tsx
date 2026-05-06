import { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SiteNav from "../components/SiteNav";
import Hero from "../components/Hero";
import WholesaleRetailerSection from "../components/WholesaleRetailerSection";
import Footer from "../components/Footer";

const STORE_TYPES = [
  "Yoga & Wellness Studio",
  "Gym & Fitness Center",
  "Boutique Hotel",
  "Spa & Retreat",
  "Specialty Café",
  "Other",
];

const LOCATION_COUNTS = ["1", "2–5", "6–10", "10+"];

const MONTHLY_UNITS = ["Under 50", "50–100", "100–500", "500+"];

const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
  "Other / International",
];

interface FormData {
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  phone: string;
  store_type: string;
  locations: string;
  monthly_units: string;
  state: string;
  message: string;
}

const INITIAL: FormData = {
  first_name: "",
  last_name: "",
  company: "",
  email: "",
  phone: "",
  store_type: "",
  locations: "",
  monthly_units: "",
  state: "",
  message: "",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontWeight: 400,
  fontSize: 10,
  color: "#8a9aaa",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: 6,
  display: "block",
};

const inputStyle: React.CSSProperties = {
  background: "#ffffff",
  border: "0.5px solid #dce6f0",
  borderRadius: 12,
  padding: "16px 20px",
  fontFamily: "var(--font-body)",
  fontWeight: 300,
  fontSize: 14,
  color: "#0f1923",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s ease",
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 min-w-0">
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function ChevronDown() {
  return (
    <svg
      style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#8a9aaa" }}
      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ContactRow({
  href,
  icon,
  text,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 transition-colors duration-200"
      style={{ color: "#0f1923" }}
    >
      <span style={{ color: "#184EA2", display: "inline-flex" }}>{icon}</span>
      <span
        className="group-hover:text-[#184EA2] transition-colors duration-200"
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: 15,
          flex: 1,
        }}
      >
        {text}
      </span>
      {external && (
        <span
          className="group-hover:text-[#184EA2] transition-colors duration-200"
          style={{ color: "#8a9aaa", fontSize: 14 }}
        >
          ↗
        </span>
      )}
    </a>
  );
}

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 10,
      color: "#184EA2",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      marginBottom: 20,
    }}
  >
    {children}
  </div>
);

export default function WholesalePage() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!showSuccess) return;
    document.documentElement.classList.add("lenis-stopped");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowSuccess(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("lenis-stopped");
      window.removeEventListener("keydown", onKey);
    };
  }, [showSuccess]);

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Email failed");
      setStatus("success");
      setShowSuccess(true);
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SiteNav />

      {/* ── Hero (wholesale variant) ── */}
      <Hero
        image="/AQUA-HERO-WHOLESALE.png"
        mobileImageClass="object-left-bottom origin-bottom-left -translate-x-[55%]"
        headline={<>Premium Water. <em>Zero Complexity.</em></>}
        ctaLabel="Apply for Wholesale"
        ctaHref="#wholesale-form"
        showLearnMore={false}
      />

      {/* ── Retailer category showcase ── */}
      <WholesaleRetailerSection />

      {/* ── Form Section ── */}
      <section
        id="wholesale-form"
        style={{ background: "#ffffff" }}
        className="py-[60px] lg:py-[100px]"
      >
        <div className="max-w-[1400px] mx-auto px-8">
          <div
            className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-start"
            style={{ gap: 80 }}
          >
            {/* LEFT — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div
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
                Get in Touch
              </div>
              <h2
                className="text-[40px] lg:text-[72px]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  color: "#0f1923",
                  lineHeight: 1.1,
                }}
              >
                Let's talk <em>wholesale.</em>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: 16,
                  color: "#8a9aaa",
                  marginTop: 12,
                  marginBottom: 40,
                }}
              >
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Row 1 — First + Last */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Field label="First Name">
                    <input
                      type="text"
                      required
                      value={form.first_name}
                      onChange={set("first_name")}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#184EA2")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#dce6f0")}
                    />
                  </Field>
                  <Field label="Last Name">
                    <input
                      type="text"
                      required
                      value={form.last_name}
                      onChange={set("last_name")}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#184EA2")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#dce6f0")}
                    />
                  </Field>
                </div>

                {/* Row 2 — Company */}
                <Field label="Company / Business Name">
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={set("company")}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#184EA2")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#dce6f0")}
                  />
                </Field>

                {/* Row 3 — Email + Phone */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Field label="Email">
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#184EA2")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#dce6f0")}
                    />
                  </Field>
                  <Field label="Phone Number">
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={set("phone")}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#184EA2")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#dce6f0")}
                    />
                  </Field>
                </div>

                {/* Row 4 — Store Type + Locations */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Field label="Store Type">
                    <div style={{ position: "relative" }}>
                      <select
                        required
                        value={form.store_type}
                        onChange={set("store_type")}
                        style={{ ...inputStyle, appearance: "none", paddingRight: 44, cursor: "pointer" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#184EA2")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#dce6f0")}
                      >
                        <option value="" disabled>Select…</option>
                        {STORE_TYPES.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                      </select>
                      <ChevronDown />
                    </div>
                  </Field>
                  <Field label="Number of Locations">
                    <div style={{ position: "relative" }}>
                      <select
                        required
                        value={form.locations}
                        onChange={set("locations")}
                        style={{ ...inputStyle, appearance: "none", paddingRight: 44, cursor: "pointer" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#184EA2")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#dce6f0")}
                      >
                        <option value="" disabled>Select…</option>
                        {LOCATION_COUNTS.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                      </select>
                      <ChevronDown />
                    </div>
                  </Field>
                </div>

                {/* Row 5 — Monthly Units + State */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Field label="Estimated Monthly Units">
                    <div style={{ position: "relative" }}>
                      <select
                        required
                        value={form.monthly_units}
                        onChange={set("monthly_units")}
                        style={{ ...inputStyle, appearance: "none", paddingRight: 44, cursor: "pointer" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#184EA2")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#dce6f0")}
                      >
                        <option value="" disabled>Select…</option>
                        {MONTHLY_UNITS.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                      </select>
                      <ChevronDown />
                    </div>
                  </Field>
                  <Field label="State / Region">
                    <div style={{ position: "relative" }}>
                      <select
                        required
                        value={form.state}
                        onChange={set("state")}
                        style={{ ...inputStyle, appearance: "none", paddingRight: 44, cursor: "pointer" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#184EA2")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#dce6f0")}
                      >
                        <option value="" disabled>Select…</option>
                        {STATES.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                      </select>
                      <ChevronDown />
                    </div>
                  </Field>
                </div>

                {/* Row 6 — Message */}
                <Field label="Message / Notes">
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#184EA2")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#dce6f0")}
                  />
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "#184EA2",
                    color: "white",
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: 18,
                    borderRadius: 999,
                    marginTop: 8,
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") e.currentTarget.style.background = "#1a3f82";
                  }}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#184EA2")}
                >
                  {status === "loading" ? "Sending…" : "Submit Inquiry"}
                </button>

                {/* Inline error (success uses popup) */}
                {status === "error" && (
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      color: "#c33",
                      fontSize: 13,
                      textAlign: "center",
                      marginTop: 4,
                    }}
                  >
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </motion.div>

            {/* RIGHT — contact + social */}
            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
              style={{ paddingTop: 8 }}
            >
              {/* Direct Contact */}
              <div>
                <SectionLabel>Direct Contact</SectionLabel>
                <div className="flex flex-col" style={{ gap: 14 }}>
                  <ContactRow
                    href="mailto:hello@aquavibes.com"
                    text="hello@aquavibes.com"
                    icon={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m2 7 10 7 10-7" />
                      </svg>
                    }
                  />
                  <ContactRow
                    href="tel:+10000000000"
                    text="+1 (000) 000-0000"
                    icon={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    }
                  />
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: "0.5px solid #dce6f0", margin: "32px 0" }} />

              {/* Follow Along */}
              <div>
                <SectionLabel>Follow Along</SectionLabel>
                <div className="flex flex-col" style={{ gap: 14 }}>
                  <ContactRow
                    href="https://instagram.com/drinkaquavibes"
                    text="@drinkaquavibes"
                    external
                    icon={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    }
                  />
                  <ContactRow
                    href="https://tiktok.com/@drinkaquavibes"
                    text="@drinkaquavibes"
                    external
                    icon={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.43 0-2.59-1.16-2.59-2.59a2.59 2.59 0 0 1 2.59-2.59c.28 0 .54.04.79.12V9.66a5.65 5.65 0 0 0-.79-.06A5.66 5.66 0 0 0 4.2 15.26a5.66 5.66 0 0 0 5.66 5.66 5.66 5.66 0 0 0 5.66-5.66V9.48a7.33 7.33 0 0 0 4.28 1.37V7.76a4.28 4.28 0 0 1-3.2-1.94z" />
                      </svg>
                    }
                  />
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: "0.5px solid #dce6f0", margin: "32px 0" }} />

              {/* Response Time */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: 10,
                    color: "#184EA2",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: 12,
                  }}
                >
                  Response Time
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: 16,
                    color: "#5a6472",
                    lineHeight: 1.7,
                  }}
                >
                  We respond to all wholesale inquiries within 24 hours, Monday through Friday.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <Footer />

      {/* Success modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setShowSuccess(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="wholesale-success-title"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "rgba(15, 25, 35, 0.55)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#ffffff",
                borderRadius: 20,
                maxWidth: 460,
                width: "100%",
                padding: 40,
                textAlign: "center",
                boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
                position: "relative",
              }}
            >
              <button
                onClick={() => setShowSuccess(false)}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  border: "none",
                  background: "transparent",
                  color: "#8a9aaa",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  lineHeight: 1,
                }}
              >
                ×
              </button>

              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 999,
                  background: "rgba(24,78,162,0.08)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#184EA2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: 11,
                  color: "#184EA2",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  marginBottom: 12,
                }}
              >
                Inquiry Received
              </div>

              <h3
                id="wholesale-success-title"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: 32,
                  color: "#0f1923",
                  lineHeight: 1.15,
                  margin: 0,
                  marginBottom: 12,
                }}
              >
                Thank you. <em>We'll be in touch.</em>
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: 16,
                  color: "#5a6472",
                  lineHeight: 1.6,
                  margin: 0,
                  marginBottom: 28,
                }}
              >
                A member of our wholesale team will reach out within 24 hours, Monday through Friday.
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="cursor-pointer transition-opacity duration-200 hover:opacity-85"
                style={{
                  background: "#184EA2",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  padding: "14px 36px",
                  borderRadius: 999,
                  border: "none",
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
