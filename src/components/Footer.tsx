export default function Footer() {
  return (
    <footer className="bg-[#184EA2] text-white px-6 md:px-12 lg:px-20 pt-20 md:pt-28 lg:pt-32 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Three columns */}
        <div className="flex flex-col items-center text-center md:items-stretch md:text-left md:flex-row md:justify-between gap-14 md:gap-8 pb-16 md:pb-20">
          {/* Left — Logo, tagline, socials */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/Aqua-Vibes-Logo-Web.png"
              alt="Aqua Vibes"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <p
              className="text-[13px] text-white/70 leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Hydrate with Intention.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-white/80 hover:text-white transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="text-white/80 hover:text-white transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.43 0-2.59-1.16-2.59-2.59a2.59 2.59 0 0 1 2.59-2.59c.28 0 .54.04.79.12V9.66a5.65 5.65 0 0 0-.79-.06A5.66 5.66 0 0 0 4.2 15.26a5.66 5.66 0 0 0 5.66 5.66 5.66 5.66 0 0 0 5.66-5.66V9.48a7.33 7.33 0 0 0 4.28 1.37V7.76a4.28 4.28 0 0 1-3.2-1.94z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Center — Nav links */}
          <nav className="flex flex-col items-center gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "Our Water", href: "/#the-water" },
              { label: "Sustainability", href: "/#the-bottle" },
              { label: "Wholesale", href: "/wholesale" },
              { label: "Reviews", href: "/#social-proof" },
            ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-white hover:underline underline-offset-4 decoration-white/40 transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Right — Email capture */}
          <div className="flex flex-col items-center md:items-end gap-4 w-full max-w-[260px]">
            <span
              className="text-[11px] tracking-[0.2em] uppercase text-white/60"
              style={{ fontFamily: "var(--font-accent)", fontWeight: 300 }}
            >
              Stay in the Loop
            </span>
            <div className="w-full">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border-b border-white/40 text-white text-[13px] pb-2 outline-none placeholder:text-white/40 focus:border-white/70 transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              />
            </div>
            <button
              className="px-6 py-1.5 rounded-full bg-white text-[#184EA2] text-[11px] tracking-[0.15em] uppercase hover:bg-white/90 transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Join
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20" />

        {/* Bottom legal */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-3 pt-6">
          <p
            className="text-[10px] md:text-[11px] text-white/50 tracking-wide"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            &copy; 2026 Aqua Vibes. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-[10px] md:text-[11px] text-white/50 tracking-wide hover:text-white/70 transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[10px] md:text-[11px] text-white/50 tracking-wide hover:text-white/70 transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
