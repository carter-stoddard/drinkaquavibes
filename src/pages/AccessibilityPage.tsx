import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";

const EFFECTIVE_DATE = "June 14, 2026";
const CONTACT_EMAIL = "accessibility@drinkaquavibes.com";

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 300,
  fontSize: 28,
  color: "#184EA2",
  lineHeight: 1.2,
  marginTop: 48,
  marginBottom: 16,
};

const body: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontWeight: 300,
  fontSize: 17,
  color: "#3a4452",
  lineHeight: 1.85,
  marginBottom: 16,
};

export default function AccessibilityPage() {

  return (
    <>
      <SiteNav />

      <main className="bg-white" style={{ paddingTop: 140, paddingBottom: 120 }}>
        <div className="max-w-[820px] mx-auto px-6">
          <div
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
            Legal
          </div>
          <h1
            className="text-[40px] md:text-[56px]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              color: "#184EA2",
              lineHeight: 1.1,
              marginBottom: 12,
            }}
          >
            Accessibility Statement
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: 13,
              color: "#8a9aaa",
              marginBottom: 32,
            }}
          >
            Effective Date: {EFFECTIVE_DATE}
          </p>

          <h2 style={sectionTitle}>Our Commitment</h2>
          <p style={body}>
            Aqua Vibes is committed to making our website usable and welcoming
            for everyone, including people with disabilities. We believe that
            an elevated brand experience should be available to every visitor,
            regardless of how they access the web.
          </p>

          <h2 style={sectionTitle}>Standards We Follow</h2>
          <p style={body}>
            We aim to conform with the Web Content Accessibility Guidelines
            (WCAG) 2.1 at Level AA — the standard recommended by the World
            Wide Web Consortium for designing accessible web content. We use
            this standard as the benchmark for our design, development, and
            content decisions.
          </p>

          <h2 style={sectionTitle}>An Ongoing Effort</h2>
          <p style={body}>
            Accessibility is not a one-time project — it is an ongoing
            commitment. We regularly review the site, test with assistive
            technologies, and improve areas that fall short of our standard.
            We also recognize that some content or third-party features may
            not yet be fully accessible while we continue to make progress.
          </p>

          <h2 style={sectionTitle}>Reporting an Issue or Requesting an Accommodation</h2>
          <p style={body}>
            If you experience any difficulty accessing our website, or if you
            need information in an alternative format, please reach out. We
            welcome feedback and will do our best to respond promptly. When
            you contact us, please include:
          </p>
          <ul
            style={{
              ...body,
              paddingLeft: 20,
            }}
          >
            <li>The page or feature where you encountered the issue.</li>
            <li>A brief description of the problem.</li>
            <li>The browser, device, and any assistive technology you were using.</li>
          </ul>
          <p style={body}>
            You can reach us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ color: "#184EA2", textDecoration: "none" }}
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
