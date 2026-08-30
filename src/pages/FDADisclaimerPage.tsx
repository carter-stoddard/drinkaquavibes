import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";

const EFFECTIVE_DATE = "June 14, 2026";
const CONTACT_EMAIL = "hello@drinkaquavibes.com";

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

export default function FDADisclaimerPage() {

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
            FDA Disclaimer
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

          <h2 style={sectionTitle}>A Beverage, Not a Medical Product</h2>
          <p style={body}>
            Aqua Vibes is a premium bottled water — a beverage intended for
            general hydration and enjoyment. It is not a drug, dietary
            supplement, medical device, or therapeutic product. References on
            our website to alkaline pH, electrolytes, antioxidant properties,
            cellular hydration, and 888 Hz frequency infusion describe the
            character and design of our product and are made for
            informational and lifestyle purposes only.
          </p>

          <h2 style={sectionTitle}>888 Hz and Frequency-Related Claims</h2>
          <p style={body}>
            References on this website to 888 Hz, sound frequency, cymatics,
            and the spiritual or energetic significance of these concepts
            reflect long-standing beliefs within wellness, mindfulness, and
            metaphysical traditions. They are not presented as scientifically
            established facts. Any associations between 888 Hz and abundance,
            alignment, balance, resonance, or other spiritual or energetic
            outcomes reflect cultural and wellness traditions rather than
            peer-reviewed scientific findings. We share this language because
            it is part of our brand story and because it resonates with our
            community — not as a medical, therapeutic, or scientific claim.
          </p>

          <h2 style={sectionTitle}>Statements Have Not Been Evaluated by the FDA</h2>
          <p style={body}>
            None of the statements made on this website, on our packaging, or
            in our marketing materials have been evaluated by the U.S. Food
            and Drug Administration. Aqua Vibes is not intended to diagnose,
            treat, cure, or prevent any disease, illness, condition, or other
            medical concern.
          </p>

          <h2 style={sectionTitle}>No Medical Advice</h2>
          <p style={body}>
            Information on this website is not medical advice and should not
            be used as a substitute for advice from a licensed healthcare
            professional. Individual experiences vary, and the lifestyle and
            wellness language used to describe our product reflects the brand
            voice rather than a clinical assessment.
          </p>

          <h2 style={sectionTitle}>Consult Your Healthcare Provider</h2>
          <p style={body}>
            If you have a medical condition, are pregnant or nursing, take
            prescription medication, or have any concerns about how a
            beverage may affect your health, please consult a qualified
            healthcare provider before changing your hydration habits or
            making any health-related decision based on information you find
            here.
          </p>

          <h2 style={sectionTitle}>Contact Us</h2>
          <p style={body}>
            Questions about this disclaimer can be sent to{" "}
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
