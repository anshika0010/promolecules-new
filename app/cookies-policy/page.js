import React from "react";

const CookiesPolicy = () => {
  return (
    <div className="bg-black min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 shadow-2xl rounded-2xl p-6 sm:p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            ✅ COOKIES POLICY – PROMOLECULES
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: 10-11-2025
          </p>
        </div>

        {/* Intro */}
        <p className="text-gray-300 leading-relaxed mb-6">
          This Cookies Policy explains how PROMOLECULES (“we”, “our”, “us”) 
          uses cookies and similar tracking technologies on our website.
        </p>

        <p className="text-gray-300 mb-8">
          By using our website, you consent to the use of cookies as described 
          in this policy.
        </p>

        <p className="text-gray-300 mb-8">
          If you have any questions, you may contact us at:{" "}
          <a
            href="mailto:privacy@promolecules.com"
            className="text-blue-400 underline hover:text-blue-300"
          >
            privacy@promolecules.com
          </a>
        </p>

        {/* Section 1 */}
        <Section title="1. What Are Cookies?">
          <p>
            Cookies are small text files stored on your device (computer, mobile, 
            tablet) when you visit a website. They help improve user experience 
            and allow websites to remember your actions or preferences over time.
          </p>
        </Section>

        {/* Section 2 */}
        <Section title="2. Types of Cookies We Use">

          <SubSection title="2.1 Essential / Strictly Necessary Cookies">
            <ul className="list-disc list-inside space-y-2">
              <li>Secure checkout</li>
              <li>Site navigation</li>
              <li>User login</li>
              <li>Shopping cart functionality</li>
            </ul>
            <p className="mt-3">
              Without these cookies, some features may not work properly.
            </p>
          </SubSection>

          <SubSection title="2.2 Performance & Analytics Cookies">
            <p className="mb-3">We use:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Google Analytics</li>
              <li>Meta (Facebook) Pixel</li>
            </ul>

            <p className="mt-4 mb-2">They collect information such as:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Pages visited</li>
              <li>Time spent on site</li>
              <li>Click behavior</li>
              <li>Device/browser information</li>
            </ul>
          </SubSection>

          <SubSection title="2.3 Preference Cookies">
            <ul className="list-disc list-inside space-y-2">
              <li>Language preferences</li>
              <li>Region</li>
              <li>Login preferences</li>
              <li>Previously viewed products</li>
            </ul>
          </SubSection>

          <SubSection title="2.4 Advertising & Retargeting Cookies">
            <p className="mb-3">Our advertising partners may include:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Google Ads</li>
              <li>Meta (Facebook & Instagram)</li>
              <li>Other remarketing platforms</li>
            </ul>

            <p className="mt-4 mb-2">These cookies:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Track browsing activity</li>
              <li>Show personalized ads</li>
              <li>Retarget you with items you viewed</li>
            </ul>
          </SubSection>

        </Section>

        {/* Section 3 */}
        <Section title="3. Third-Party Cookies">
          <p className="mb-4">
            Some cookies may be placed by third parties on our website, such as:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Payment gateways (Razorpay, PayPal)</li>
            <li>Analytics services</li>
            <li>Social media embeds</li>
            <li>Advertising platforms</li>
          </ul>
          <p className="mt-4">
            These partners have their own privacy and cookie policies. 
            We do not control third-party cookies.
          </p>
        </Section>

        {/* Section 4 */}
        <Section title="4. Why We Use Cookies">
          <ul className="list-disc list-inside space-y-2">
            <li>Improve website functionality</li>
            <li>Enhance shopping experience</li>
            <li>Analyze site performance</li>
            <li>Personalize product recommendations</li>
            <li>Provide secure payments</li>
            <li>Run marketing and retargeting campaigns</li>
            <li>Track conversions and website traffic</li>
          </ul>
        </Section>

        {/* Section 5 */}
        <Section title="5. How to Control Cookies">
          <p className="mb-4">
            You can manage or disable cookies through your browser settings:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Chrome: Settings → Privacy → Cookies</li>
            <li>Safari: Preferences → Privacy</li>
            <li>Firefox: Settings → Privacy & Security</li>
            <li>Edge: Settings → Cookies & Site Permissions</li>
          </ul>

          <p className="mt-4 mb-2">If you disable cookies:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Some parts of the website may not function properly</li>
            <li>You may not be able to complete purchases</li>
            <li>You may see less relevant product recommendations</li>
          </ul>
        </Section>

        {/* Section 6 */}
        <Section title="6. Cookie Consent (GDPR Compliance)">
          <ul className="list-disc list-inside space-y-2">
            <li>You will see a cookie consent banner</li>
            <li>You may choose to Accept, Reject, or Customize cookie usage</li>
            <li>We store your cookie preferences as required under GDPR</li>
          </ul>
        </Section>

        {/* Section 7 */}
        <Section title="7. Data Collected Through Cookies">
          <p className="mb-3">Cookies may collect:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Device information</li>
            <li>Browser type</li>
            <li>Country/city</li>
            <li>Pages viewed</li>
            <li>Interaction patterns</li>
            <li>Referring URLs</li>
            <li>IP address (anonymized where required by law)</li>
          </ul>

          <p className="mt-4 mb-2">We never collect:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Payment card details</li>
            <li>Sensitive personal information</li>
          </ul>
        </Section>

        {/* Section 8 */}
        <Section title="8. Updates to This Policy">
          <p>
            We may update this Cookies Policy occasionally. Changes will be 
            reflected with a new “Last Updated” date. Continued use of our 
            website means you accept these changes.
          </p>
        </Section>

        {/* Section 9 */}
        <Section title="9. Contact Us">
          <p>
            For questions about our cookie practices, reach us at:{" "}
            <a
              href="mailto:privacy@promolecules.com"
              className="text-blue-400 underline hover:text-blue-300"
            >
              privacy@promolecules.com
            </a>
          </p>
        </Section>

      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
      {title}
    </h2>
    <div className="text-gray-300 leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-white mb-3">
      {title}
    </h3>
    <div className="text-gray-300 space-y-3 leading-relaxed">
      {children}
    </div>
  </div>
);

export default CookiesPolicy;
