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

const NAV_HEIGHT = "100px";

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

  const fields: { key: keyof FormData; label: string; type?: string; options?: string[]; textarea?: boolean; required?: boolean }[] = [
    { key: "first_name", label: "First Name", required: true },
    { key: "last_name", label: "Last Name", required: true },
    { key: "company", label: "Company / Business Name", required: true },
    { key: "email", label: "Email", type: "email", required: true },
    { key: "phone", label: "Phone Number", type: "tel", required: true },
    { key: "store_type", label: "Store Type", options: STORE_TYPES, required: true },
    { key: "locations", label: "Number of Locations", options: LOCATION_COUNTS, required: true },
    { key: "monthly_units", label: "Estimated Monthly Units", options: MONTHLY_UNITS, required: true },
    { key: "state", label: "State / Region", required: true },
    { key: "message", label: "Message / Notes", textarea: true, required: false },
  ];

  return (
    <>
      <SiteNav />
      <div
        className="flex flex-col lg:flex-row lg:overflow-hidden"
        style={{
          paddingTop: NAV_HEIGHT,
          minHeight: "100vh",
          height: undefined,
        }}
      >
        {/* Desktop: fixed viewport height. Mobile: natural flow */}
        <style>{`
          @media (min-width: 1024px) {
            .wholesale-wrapper { height: calc(100vh - ${NAV_HEIGHT}); overflow: hidden; }
          }
        `}</style>

        {/* Left — Brand Panel (45%) */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-[45%] bg-[#184EA2] flex flex-col justify-center px-8 md:px-16 lg:px-20 py-14 lg:py-0"
        >
          <h1
            className="text-[44px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[0.01em] text-white mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Partner
            <br />
            With Us
          </h1>

          <p
            className="text-[14px] leading-[1.7] text-white/70 max-w-[380px]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Bring Aqua Vibes to your shelves. Fill out the form and our team
            will be in touch within 48 hours.
          </p>
        </motion.div>

        {/* Right — Form Panel (55%) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-[55%] bg-white flex items-center justify-center px-6 md:px-12 lg:px-16 py-10 lg:py-0 lg:overflow-y-auto"
        >
          <div className="w-full max-w-[560px]">
            {status === "success" ? (
              <div className="text-center py-16">
                <p
                  className="text-[26px] md:text-[32px] leading-[1.2] text-[#184EA2]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
                >
                  Thank you.
                  <br />
                  We'll be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                {/* Name row — side by side */}
                <div className="flex flex-col sm:flex-row gap-[20px]">
                  {fields.slice(0, 2).map((f, i) => (
                    <motion.div
                      key={f.key}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                      className="flex-1"
                    >
                      <label
                        className={fieldLabel}
                        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                      >
                        {f.label}
                      </label>
                      <input
                        type="text"
                        required={f.required}
                        value={form[f.key]}
                        onChange={set(f.key)}
                        className={fieldInput}
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Email + Phone — side by side */}
                <div className="flex flex-col sm:flex-row gap-[20px]">
                  {fields.slice(3, 5).map((f, i) => (
                    <motion.div
                      key={f.key}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                      className="flex-1"
                    >
                      <label
                        className={fieldLabel}
                        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type || "text"}
                        required={f.required}
                        value={form[f.key]}
                        onChange={set(f.key)}
                        className={fieldInput}
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.36 }}
                >
                  <label
                    className={fieldLabel}
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    Company / Business Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={set("company")}
                    className={fieldInput}
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </motion.div>

                {/* Store Type + Locations — side by side */}
                <div className="flex flex-col sm:flex-row gap-[20px]">
                  {fields.slice(5, 7).map((f, i) => (
                    <motion.div
                      key={f.key}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.52 + i * 0.08 }}
                      className="flex-1"
                    >
                      <label
                        className={fieldLabel}
                        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                      >
                        {f.label}
                      </label>
                      <select
                        required={f.required}
                        value={form[f.key]}
                        onChange={set(f.key)}
                        className={selectClass}
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <option value="" disabled>Select…</option>
                        {f.options!.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </motion.div>
                  ))}
                </div>

                {/* Monthly Units + State — side by side */}
                <div className="flex flex-col sm:flex-row gap-[20px]">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.68 }}
                    className="flex-1"
                  >
                    <label
                      className={fieldLabel}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                    >
                      Estimated Monthly Units
                    </label>
                    <select
                      required
                      value={form.monthly_units}
                      onChange={set("monthly_units")}
                      className={selectClass}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <option value="" disabled>Select…</option>
                      {MONTHLY_UNITS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.76 }}
                    className="flex-1"
                  >
                    <label
                      className={fieldLabel}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                    >
                      State / Region
                    </label>
                    <input
                      type="text"
                      required
                      value={form.state}
                      onChange={set("state")}
                      className={fieldInput}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.84 }}
                >
                  <label
                    className={fieldLabel}
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    Message / Notes
                  </label>
                  <textarea
                    rows={2}
                    value={form.message}
                    onChange={set("message")}
                    className={`${fieldInput} h-auto py-2 resize-none`}
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </motion.div>

                {/* Error message */}
                {status === "error" && (
                  <p
                    className="text-[12px] text-red-500 text-center"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Something went wrong. Please try again.
                  </p>
                )}

                {/* Submit */}
                <motion.button
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.92 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-[44px] rounded-full bg-[#184EA2] text-white text-[13px] tracking-[0.15em] uppercase cursor-pointer transition-opacity duration-300 hover:opacity-85 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {status === "loading" ? "Sending…" : "Submit Inquiry"}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
