import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { getSupabase } from "../lib/supabase";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import SiteNav from "../components/SiteNav";

const STORE_TYPES = [
  "Grocery / Supermarket",
  "Specialty Health",
  "Gym / Fitness",
  "Cafe / Restaurant",
  "Online Retailer",
  "Other",
];

const LOCATION_COUNTS = ["1", "2–5", "6–20", "20+"];

const MONTHLY_UNITS = [
  "Under 500",
  "500–2,000",
  "2,000–10,000",
  "10,000+",
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

const fieldLabel =
  "block text-[10px] tracking-[0.18em] uppercase mb-1 text-[#184EA2]";
const fieldInput =
  "w-full border-0 border-b border-black/15 bg-transparent text-[13px] text-black h-[36px] outline-none transition-colors duration-300 focus:border-[#184EA2]";
const selectClass =
  "w-full border-0 border-b border-black/15 bg-transparent text-[13px] text-black h-[36px] outline-none transition-colors duration-300 focus:border-[#184EA2] appearance-none cursor-pointer";

export default function WholesalePage() {
  useSmoothScroll();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const { error } = await getSupabase().from("wholesale_inquiries").insert({
        ...form,
        created_at: new Date().toISOString(),
      });
      if (error) throw error;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SiteNav />

      {/* ── Hero Section ── */}
      <section
        className="relative w-full overflow-hidden bg-black flex items-center justify-center"
        style={{ minHeight: "100dvh" }}
      >
        {/* Background image — replace src when you have the image */}
        <img
          src="/aqua-vibes-hero.png"
          alt="Wholesale hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/30" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <span
            className="block text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-white/50 mb-6"
            style={{ fontFamily: "var(--font-accent)", fontWeight: 300 }}
          >
            Wholesale
          </span>
          <h1
            className="text-[48px] md:text-[72px] lg:text-[96px] leading-[1.05] tracking-[0.01em] text-white mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Partner With Us
          </h1>
          <p
            className="text-[15px] md:text-[17px] leading-[1.7] text-white/70 max-w-[500px] mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Bring Aqua Vibes to your shelves. Fill out the form below and our
            team will be in touch within 48 hours.
          </p>
          {/* Scroll arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10"
          >
            <a href="#wholesale-form" className="inline-block text-white/40 hover:text-white/70 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Form Section ── */}
      <section id="wholesale-form" className="bg-white py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-center mb-12 md:mb-16"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-[48px] leading-[1.1] tracking-[0.01em] text-[#184EA2] mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              Get in Touch
            </h2>
            <p
              className="text-[14px] md:text-[15px] text-black/50 leading-[1.7]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Tell us about your business and we'll craft the perfect wholesale plan.
            </p>
          </motion.div>

          {status === "success" ? (
            <div className="text-center py-16">
              <p
                className="text-[28px] md:text-[36px] leading-[1.2] text-[#184EA2]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
              >
                Thank you.
                <br />
                We'll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name row */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label className={fieldLabel} style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>First Name</label>
                  <input type="text" required value={form.first_name} onChange={set("first_name")} className={fieldInput} style={{ fontFamily: "var(--font-body)" }} />
                </div>
                <div className="flex-1">
                  <label className={fieldLabel} style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>Last Name</label>
                  <input type="text" required value={form.last_name} onChange={set("last_name")} className={fieldInput} style={{ fontFamily: "var(--font-body)" }} />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className={fieldLabel} style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>Company / Business Name</label>
                <input type="text" required value={form.company} onChange={set("company")} className={fieldInput} style={{ fontFamily: "var(--font-body)" }} />
              </div>

              {/* Email + Phone */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label className={fieldLabel} style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>Email</label>
                  <input type="email" required value={form.email} onChange={set("email")} className={fieldInput} style={{ fontFamily: "var(--font-body)" }} />
                </div>
                <div className="flex-1">
                  <label className={fieldLabel} style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>Phone Number</label>
                  <input type="tel" required value={form.phone} onChange={set("phone")} className={fieldInput} style={{ fontFamily: "var(--font-body)" }} />
                </div>
              </div>

              {/* Store Type + Locations */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label className={fieldLabel} style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>Store Type</label>
                  <select required value={form.store_type} onChange={set("store_type")} className={selectClass} style={{ fontFamily: "var(--font-body)" }}>
                    <option value="" disabled>Select…</option>
                    {STORE_TYPES.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className={fieldLabel} style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>Number of Locations</label>
                  <select required value={form.locations} onChange={set("locations")} className={selectClass} style={{ fontFamily: "var(--font-body)" }}>
                    <option value="" disabled>Select…</option>
                    {LOCATION_COUNTS.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                  </select>
                </div>
              </div>

              {/* Monthly Units + State */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label className={fieldLabel} style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>Estimated Monthly Units</label>
                  <select required value={form.monthly_units} onChange={set("monthly_units")} className={selectClass} style={{ fontFamily: "var(--font-body)" }}>
                    <option value="" disabled>Select…</option>
                    {MONTHLY_UNITS.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className={fieldLabel} style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>State / Region</label>
                  <input type="text" required value={form.state} onChange={set("state")} className={fieldInput} style={{ fontFamily: "var(--font-body)" }} />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={fieldLabel} style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>Message / Notes</label>
                <textarea rows={3} value={form.message} onChange={set("message")} className={`${fieldInput} h-auto py-2 resize-none`} style={{ fontFamily: "var(--font-body)" }} />
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-[12px] text-red-500 text-center" style={{ fontFamily: "var(--font-body)" }}>
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-[52px] rounded-full bg-[#184EA2] text-white text-[14px] tracking-[0.15em] uppercase cursor-pointer transition-opacity duration-300 hover:opacity-85 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {status === "loading" ? "Sending…" : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
