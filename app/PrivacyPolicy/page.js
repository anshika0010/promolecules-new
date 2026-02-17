import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-neutral-900 shadow-2xl rounded-2xl p-6 sm:p-10 border border-neutral-800">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Privacy Policy – PROMOLECULES
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Last Updated: 10-11-2025
          </p>
        </div>

        {/* Intro */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          This Privacy Policy explains how Promolecules (“Company”, “we”, “our”, “us”) 
          collects, uses, and protects your personal data when you visit or make a 
          purchase from our website. We comply with GDPR and CCPA standards to keep 
          your information safe.
        </p>

        <p className="text-gray-300 mb-8">
          For any privacy-related questions, reach us at:{" "}
          <a
            href="mailto:privacy@promolecules.com"
            className="text-blue-400 font-medium hover:text-blue-300 underline"
          >
            privacy@promolecules.com
          </a>
        </p>

        <Section title="1. Who We Are">
          <p>
            Registered Name: <strong className="text-white">Promolecules®️</strong>. 
            We ship internationally. This policy applies to all website users and customers.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white">Personal Information:</h4>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Name, email, phone number</li>
                <li>Billing/shipping address</li>
                <li>Order details & inquiries</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white">Automatically Collected:</h4>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>IP address, browser, device info</li>
                <li>Pages visited, time spent</li>
                <li>Cookies & tracking data</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="3. How We Use Your Data">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Process and deliver orders</li>
            <li>Verify payments (Razorpay, PayPal, COD)</li>
            <li>Provide customer support</li>
            <li>Improve site performance</li>
            <li>Send updates & promotions</li>
            <li>Prevent fraud and comply with law</li>
          </ul>
          <p className="mt-4 font-medium text-white">
            Note: We never sell your personal data.
          </p>
        </Section>

        <Section title="4. Cookies & Tracking">
          <p>
            We use cookies and analytics tools (Google & Meta) to improve website 
            functionality, personalize experience, and measure performance. You 
            can disable cookies in your browser settings anytime.
          </p>
        </Section>

        <Section title="5. Payments & Sharing">
          <p className="mb-4">
            Payments are securely processed by Razorpay, PayPal, or COD. We may 
            share limited information with:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Shipping partner (DTDC)</li>
            <li>Payment gateways</li>
            <li>Analytics tools (Google, Meta)</li>
          </ul>
          <p className="mt-4">
            All partners follow strict confidentiality and data protection rules.
          </p>
        </Section>

        <Section title="6. Data Security">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>SSL encryption & firewall protection</li>
            <li>Limited access and secure servers</li>
            <li>Regular system monitoring</li>
          </ul>
          <p className="mt-4">
            While we take strong precautions, no online system is 100% secure.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>
            Under GDPR & CCPA, you can request to access, correct, delete, or 
            restrict your data. You may also withdraw consent or opt out of data sharing.
          </p>
          <p className="mt-4">
            To exercise your rights, contact:{" "}
            <a
              href="mailto:privacy@promolecules.com"
              className="text-blue-400 font-medium hover:text-blue-300 underline"
            >
              privacy@promolecules.com
            </a>
          </p>
        </Section>

        <Section title="8. Marketing & Communications">
          <p>
            By providing your contact info, you agree to receive order updates, 
            product launches, and promotional offers. You can unsubscribe anytime.
          </p>
        </Section>

        <Section title="9. Children’s Privacy">
          <p>
            Our website and products are not intended for individuals under 18. 
            We do not knowingly collect data from minors.
          </p>
        </Section>

        <Section title="10. Updates & Contact">
          <p>
            We may update this Privacy Policy occasionally. Continued use of our 
            site means you accept these updates.
          </p>
          <p className="mt-4">
            Contact us at:{" "}
            <a
              href="mailto:privacy@promolecules.com"
              className="text-blue-400 font-medium hover:text-blue-300 underline"
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

export default PrivacyPolicy;
