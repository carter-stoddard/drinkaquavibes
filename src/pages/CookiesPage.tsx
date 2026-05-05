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
  fontSize: 17,
  color: "#3a4452",
  lineHeight: 1.85,
  marginBottom: 16,
};

const list: React.CSSProperties = {
  ...body,
  paddingLeft: 20,
};

export default function CookiesPage() {

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
            Cookie Policy
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
            This Cookie Policy explains how Aqua Vibes uses cookies and
            similar technologies on our website. It should be read alongside
            our{" "}
            <a
              href="/privacy"
              style={{ color: "#184EA2", textDecoration: "none" }}
            >
              Privacy Policy
            </a>
            , which describes how we handle the personal information we
            collect.
          </p>

          <h2 style={sectionTitle}>What Are Cookies?</h2>
          <p style={body}>
            Cookies are small text files placed on your device when you visit
            a website. They are widely used to make sites work, to remember
            your preferences, and to provide information to site owners about
            how their site is used. Some cookies are required for the site to
            function; others are optional and can be controlled.
          </p>

          <h2 style={sectionTitle}>The Cookies We Use</h2>
          <p style={body}>
            We keep our cookie use minimal. Our site uses two categories of
            cookies — and we do not currently use advertising or retargeting
            cookies of any kind.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: 22,
              color: "#0f1923",
              lineHeight: 1.25,
              marginTop: 28,
              marginBottom: 10,
            }}
          >
            Essential Cookies
          </h3>
          <p style={body}>
            These cookies are necessary for the site to function correctly.
            They support core capabilities such as page navigation, security,
            and form submission. The site cannot work properly without them,
            and they cannot be turned off through our settings — though you
            can block them at the browser level (which may break parts of the
            site).
          </p>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: 22,
              color: "#0f1923",
              lineHeight: 1.25,
              marginTop: 28,
              marginBottom: 10,
            }}
          >
            Analytics Cookies
          </h3>
          <p style={body}>
            We may use analytics cookies to understand how visitors interact
            with the site — for example, which pages are visited most often
            and how people navigate between them. This information is
            aggregated and used to improve the experience. Analytics cookies
            are optional and do not identify you personally.
          </p>

          <h2 style={sectionTitle}>Third-Party Analytics</h2>
          <p style={body}>
            Analytics cookies may be set by trusted third-party providers
            acting on our behalf, such as our hosting platform's built-in
            analytics or a privacy-respecting analytics service. These
            providers are contractually limited to using the data only to
            provide their service to us.
          </p>

          <h2 style={sectionTitle}>How to Manage or Disable Cookies</h2>
          <p style={body}>
            You can control cookies directly in your browser settings. Most
            modern browsers allow you to:
          </p>
          <ul style={list}>
            <li>View what cookies have been stored and delete them individually.</li>
            <li>Block third-party cookies, or all cookies, from being set.</li>
            <li>
              Receive a prompt before a cookie is stored, on a site-by-site
              basis.
            </li>
          </ul>
          <p style={body}>
            Each browser handles cookies a little differently. The Help or
            Privacy section of your browser will explain how to manage them on
            your device. Please note that blocking essential cookies may
            affect the functionality of this site.
          </p>

          <h2 style={sectionTitle}>Changes to This Policy</h2>
          <p style={body}>
            We may update this Cookie Policy as our practices evolve or as
            required by law. When we do, we will revise the effective date at
            the top of this page.
          </p>

          <h2 style={sectionTitle}>Contact Us</h2>
          <p style={body}>
            Questions about how we use cookies can be sent to{" "}
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
