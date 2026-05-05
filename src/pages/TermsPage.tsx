import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";

const EFFECTIVE_DATE = "[Effective Date]";
const GOVERNING_STATE = "[State]";
const CONTACT_EMAIL = "hello@drinkaquavibes.com";

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

export default function TermsPage() {

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
            Terms &amp; Conditions
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
            Welcome to Aqua Vibes. These Terms &amp; Conditions ("Terms")
            govern your access to and use of the Aqua Vibes website (the
            "Site"). Please read them carefully.
          </p>

          <h2 style={sectionTitle}>Acceptance of Terms</h2>
          <p style={body}>
            By accessing or using the Site, you agree to be bound by these
            Terms and our Privacy Policy. If you do not agree, please do not
            use the Site.
          </p>

          <h2 style={sectionTitle}>The Site Is Informational</h2>
          <p style={body}>
            The Site is provided for informational and brand purposes. We do
            not currently sell products directly through the Site. Any pricing,
            specifications, imagery, or descriptions are intended to introduce
            the brand and may be updated, changed, or removed at any time
            without notice.
          </p>

          <h2 style={sectionTitle}>Wholesale Inquiries Are Not Binding Agreements</h2>
          <p style={body}>
            The wholesale inquiry form is provided so prospective retail
            partners can express interest. Submitting an inquiry does not
            create a contract, partnership, distribution agreement, or any
            obligation — by you or by Aqua Vibes — to purchase, sell, or
            supply product. Any wholesale relationship will only be formed
            through a separate written agreement signed by both parties.
          </p>

          <h2 style={sectionTitle}>Intellectual Property</h2>
          <p style={body}>
            All content on the Site — including the Aqua Vibes name and logo,
            product names, copy, photography, video, illustrations, design,
            and code — is owned by or licensed to Aqua Vibes and is protected
            by intellectual property laws. You may view and share the Site for
            personal, non-commercial purposes. You may not copy, reproduce,
            modify, distribute, or create derivative works from any part of
            the Site without our prior written permission.
          </p>

          <h2 style={sectionTitle}>Prohibited Uses</h2>
          <p style={body}>
            You agree not to use the Site to:
          </p>
          <ul style={list}>
            <li>Violate any applicable law, regulation, or third-party right.</li>
            <li>
              Submit false, misleading, or impersonating information through
              any form on the Site.
            </li>
            <li>
              Attempt to gain unauthorized access to the Site, its systems, or
              the data of other users.
            </li>
            <li>
              Interfere with the operation of the Site, including by
              introducing viruses, malicious code, or scraping the Site at
              scale.
            </li>
            <li>
              Use the Site or any content from it to compete with Aqua Vibes
              or to mislead consumers.
            </li>
          </ul>

          <h2 style={sectionTitle}>Disclaimer of Warranties</h2>
          <p style={body}>
            The Site and its content are provided on an "as is" and "as
            available" basis without warranties of any kind, whether express
            or implied, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, accuracy, and
            non-infringement. We do not warrant that the Site will be
            uninterrupted, error-free, secure, or free of harmful components.
            Any wellness or lifestyle references on the Site are for general
            informational purposes only and do not constitute medical advice.
          </p>

          <h2 style={sectionTitle}>Limitation of Liability</h2>
          <p style={body}>
            To the fullest extent permitted by law, Aqua Vibes and its
            affiliates, officers, employees, and agents shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits, revenues, data, or goodwill,
            arising out of or in connection with your access to or use of the
            Site — even if we have been advised of the possibility of such
            damages. In no event shall our total liability to you exceed one
            hundred U.S. dollars ($100).
          </p>

          <h2 style={sectionTitle}>Third-Party Links</h2>
          <p style={body}>
            The Site may contain links to third-party websites and services
            that are not owned or controlled by Aqua Vibes. We are not
            responsible for the content, policies, or practices of any
            third-party site, and accessing them is at your own risk.
          </p>

          <h2 style={sectionTitle}>Modifications to the Site and Terms</h2>
          <p style={body}>
            We reserve the right to modify, suspend, or discontinue the Site
            (or any feature or content) at any time without notice. We also
            reserve the right to update these Terms at any time by posting a
            revised version on this page and updating the effective date
            above. Your continued use of the Site after changes are posted
            constitutes acceptance of the revised Terms.
          </p>

          <h2 style={sectionTitle}>Governing Law</h2>
          <p style={body}>
            These Terms are governed by and construed in accordance with the
            laws of the State of {GOVERNING_STATE}, without regard to its
            conflict-of-laws principles. Any dispute arising out of or
            relating to these Terms or the Site shall be brought exclusively
            in the state or federal courts located in {GOVERNING_STATE}, and
            you consent to the personal jurisdiction of those courts.
          </p>

          <h2 style={sectionTitle}>Severability</h2>
          <p style={body}>
            If any provision of these Terms is found to be unenforceable, the
            remaining provisions will remain in full force and effect.
          </p>

          <h2 style={sectionTitle}>Contact Us</h2>
          <p style={body}>
            Questions about these Terms can be sent to{" "}
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
