import { useSmoothScroll } from "../hooks/useSmoothScroll";
import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";

const EFFECTIVE_DATE = "[Effective Date]";
const CONTACT_EMAIL = "privacy@drinkaquavibes.com";

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 300,
  fontSize: 28,
  color: "#0f1923",
  lineHeight: 1.2,
  marginTop: 48,
  marginBottom: 16,
};

const body: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontWeight: 300,
  fontSize: 15,
  color: "#3a4452",
  lineHeight: 1.85,
  marginBottom: 16,
};

const list: React.CSSProperties = {
  ...body,
  paddingLeft: 20,
};

export default function PrivacyPage() {
  useSmoothScroll();

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
              color: "#0f1923",
              lineHeight: 1.1,
              marginBottom: 12,
            }}
          >
            Privacy Policy
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

          <p style={body}>
            At Aqua Vibes, we believe in transparency and intentionality —
            in our product, and in how we treat your information. This Privacy
            Policy explains what we collect, why we collect it, and the choices
            you have. By using our website, you agree to the practices described
            here.
          </p>

          <h2 style={sectionTitle}>What We Collect</h2>
          <p style={body}>
            We collect information directly from you when you choose to share
            it with us. We do not currently sell products directly on the
            website, so the data we receive is limited to the channels below.
          </p>
          <ul style={list}>
            <li>
              <strong>Wholesale inquiry form:</strong> first and last name,
              business name, email address, phone number, store type, location
              count, estimated monthly volume, state or region, and any message
              you choose to include.
            </li>
            <li>
              <strong>Email newsletter sign-up:</strong> email address only.
            </li>
            <li>
              <strong>Automatically collected data:</strong> standard analytics
              information such as device type, browser, approximate location,
              referring page, and pages visited. This helps us understand how
              the site is used and improve the experience.
            </li>
          </ul>

          <h2 style={sectionTitle}>How We Use Your Information</h2>
          <p style={body}>
            We use the information you provide to:
          </p>
          <ul style={list}>
            <li>Respond to wholesale inquiries and discuss potential partnerships.</li>
            <li>Send brand updates and product news to subscribers who have opted in.</li>
            <li>Maintain, secure, and improve the website.</li>
            <li>Comply with legal obligations and protect against misuse.</li>
          </ul>
          <p style={body}>
            We do not sell, rent, or trade your personal information to third
            parties for their marketing purposes.
          </p>

          <h2 style={sectionTitle}>Service Providers We Work With</h2>
          <p style={body}>
            We share information with carefully chosen service providers solely
            so they can perform services on our behalf. These providers are
            contractually bound to handle your data securely and only as needed
            to support our operations.
          </p>
          <ul style={list}>
            <li>
              <strong>Resend</strong> — used to send and receive transactional
              and newsletter emails.
            </li>
            <li>
              <strong>Hosting and analytics providers</strong> — used to host
              the website and to measure usage patterns in aggregate.
            </li>
          </ul>

          <h2 style={sectionTitle}>Cookies & Similar Technologies</h2>
          <p style={body}>
            We use a small number of cookies and similar technologies to keep
            the site functioning correctly and to understand how visitors use
            it. You can control cookies through your browser settings; disabling
            certain cookies may affect site functionality.
          </p>

          <h2 style={sectionTitle}>Your Rights</h2>
          <p style={body}>
            Depending on where you live, you may have the right to:
          </p>
          <ul style={list}>
            <li>Request access to the personal information we hold about you.</li>
            <li>Request correction of information that is inaccurate or out of date.</li>
            <li>Request deletion of your personal information.</li>
            <li>Withdraw consent or unsubscribe from marketing emails at any time.</li>
            <li>Object to or restrict certain processing of your information.</li>
          </ul>
          <p style={body}>
            To exercise any of these rights, please contact us at the email
            address below. We will respond within a reasonable timeframe and in
            accordance with applicable law.
          </p>

          <h2 style={sectionTitle}>Data Retention & Security</h2>
          <p style={body}>
            We retain personal information only for as long as it is needed for
            the purposes described in this policy or as required by law. We use
            reasonable technical and organizational safeguards to protect the
            information we collect, though no system can be guaranteed
            completely secure.
          </p>

          <h2 style={sectionTitle}>Children's Privacy</h2>
          <p style={body}>
            The Aqua Vibes website is not directed to children under 13, and we
            do not knowingly collect personal information from anyone under that
            age.
          </p>

          <h2 style={sectionTitle}>Changes to This Policy</h2>
          <p style={body}>
            We may update this Privacy Policy from time to time. When we do, we
            will post the revised policy on this page and update the effective
            date above.
          </p>

          <h2 style={sectionTitle}>Contact Us</h2>
          <p style={body}>
            For privacy questions, requests, or concerns, please contact us at{" "}
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
