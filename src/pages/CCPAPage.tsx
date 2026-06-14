import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";

const EFFECTIVE_DATE = "June 14, 2026";
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

export default function CCPAPage() {

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
            California Privacy Rights
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
            This notice supplements our{" "}
            <a
              href="/privacy"
              style={{ color: "#184EA2", textDecoration: "none" }}
            >
              Privacy Policy
            </a>{" "}
            and applies to residents of California under the California
            Consumer Privacy Act, as amended by the California Privacy Rights
            Act (together, the "CCPA"). It explains what personal information
            we collect, how we use it, and the rights available to California
            residents.
          </p>

          <h2 style={sectionTitle}>Categories of Personal Information We Collect</h2>
          <p style={body}>
            In the past twelve months, we may have collected the following
            categories of personal information through our website:
          </p>
          <ul style={list}>
            <li>
              <strong>Identifiers</strong> — name, email address, phone number.
            </li>
            <li>
              <strong>Commercial &amp; professional information</strong> —
              business name, store type, location count, estimated monthly
              order volume, and state or region (collected through the
              wholesale inquiry form).
            </li>
            <li>
              <strong>Internet or other electronic activity</strong> —
              standard analytics data such as device type, browser, approximate
              location derived from IP address, referring page, and pages
              visited.
            </li>
            <li>
              <strong>Inferences</strong> — limited inferences drawn from the
              above to understand site usage in aggregate.
            </li>
          </ul>
          <p style={body}>
            We do not knowingly collect sensitive personal information,
            biometric data, geolocation beyond approximate location, or
            information from anyone we know to be under 16 years of age.
          </p>

          <h2 style={sectionTitle}>How We Use This Information</h2>
          <p style={body}>
            We use the information we collect to:
          </p>
          <ul style={list}>
            <li>Respond to wholesale inquiries and discuss potential partnerships.</li>
            <li>Send brand updates and product news to subscribers who have opted in.</li>
            <li>Maintain, secure, and improve our website.</li>
            <li>Comply with legal obligations and protect against misuse.</li>
          </ul>

          <h2 style={sectionTitle}>We Do Not Sell or Share Personal Information</h2>
          <p style={body}>
            Aqua Vibes does not sell personal information, and we do not
            share personal information for cross-context behavioral
            advertising, as those terms are defined under the CCPA. We have
            not done so in the past twelve months and have no current plans
            to do so going forward.
          </p>

          <h2 style={sectionTitle}>Your Rights as a California Resident</h2>
          <p style={body}>
            If you are a California resident, you have the following rights
            under the CCPA:
          </p>
          <ul style={list}>
            <li>
              <strong>Right to know</strong> — request the categories and
              specific pieces of personal information we have collected about
              you, the sources we collected it from, the purposes for
              collecting it, and the categories of third parties we have
              shared it with.
            </li>
            <li>
              <strong>Right to delete</strong> — request that we delete
              personal information we have collected from you, subject to
              certain exceptions permitted by law.
            </li>
            <li>
              <strong>Right to correct</strong> — request that we correct
              inaccurate personal information we maintain about you.
            </li>
            <li>
              <strong>Right to opt out of sale or sharing</strong> — although
              we do not sell or share personal information, you have the
              right to opt out at any time should our practices ever change.
            </li>
            <li>
              <strong>Right to limit the use of sensitive personal information</strong>{" "}
              — to the extent any sensitive personal information is collected,
              you may request that we limit its use to what is necessary to
              perform the requested service.
            </li>
          </ul>

          <h2 style={sectionTitle}>How to Submit a Request</h2>
          <p style={body}>
            To exercise any of these rights, please send a verifiable consumer
            request to{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ color: "#184EA2", textDecoration: "none" }}
            >
              {CONTACT_EMAIL}
            </a>
            . Include enough information for us to reasonably verify your
            identity (such as the email address you submitted to us) and
            describe your request with enough detail for us to evaluate and
            respond.
          </p>
          <p style={body}>
            You may also designate an authorized agent to submit a request on
            your behalf. We may require the authorized agent to provide proof
            of authorization and may also ask you to verify your identity
            directly with us.
          </p>
          <p style={body}>
            We will respond to verifiable consumer requests within the
            timeframes required by California law. Some requests may be
            denied or limited where permitted by law (for example, where a
            legal exemption applies).
          </p>

          <h2 style={sectionTitle}>Non-Discrimination</h2>
          <p style={body}>
            We will not discriminate against you for exercising your CCPA
            rights. We will not deny you access to the website, charge you
            different prices, or provide you with a different level or quality
            of service because you exercised your rights.
          </p>

          <h2 style={sectionTitle}>Changes to This Notice</h2>
          <p style={body}>
            We may update this California Privacy Rights notice from time to
            time. When we do, we will revise the effective date at the top of
            this page.
          </p>

          <h2 style={sectionTitle}>Contact Us</h2>
          <p style={body}>
            For California privacy questions or to submit a request, contact
            us at{" "}
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
