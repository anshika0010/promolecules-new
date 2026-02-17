import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-black min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 shadow-2xl rounded-2xl p-6 sm:p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            ⚖️ PROMOLECULES – Legal Policies
          </h1>
          <p className="mt-2 text-gray-400">
            Terms & Conditions
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Last Updated: 10-11-2025
          </p>
        </div>

        {/* Intro */}
        <p className="text-gray-300 leading-relaxed mb-8">
          By using the Promolecules website or purchasing our products, you agree 
          to comply with these Terms & Conditions. If you disagree with any part 
          of these terms, please stop using our website immediately.
        </p>

        {/* Terms List */}
        <div className="space-y-6 text-gray-300">

          <TermItem>
            Users must be 18+ years old and legally capable of forming a binding contract.
          </TermItem>

          <TermItem>
            Our supplements are not medical drugs. Always consult your doctor or 
            healthcare professional before use.
          </TermItem>

          <TermItem>
            Orders may be declined due to suspected fraud, product unavailability, 
            or pricing/technical errors.
          </TermItem>

          <TermItem>
            Accepted payment methods: Razorpay, PayPal, and Cash on Delivery (COD).
          </TermItem>

          <TermItem>
            We ship across India and internationally via DTDC and other courier 
            partners. Delivery delays due to customs, weather, logistics issues, 
            or public holidays are beyond our control.
          </TermItem>

          <TermItem>
            Returns are accepted only for damaged or incorrect products reported 
            within 48 hours of delivery. An unboxing video is mandatory for claims.
          </TermItem>

          <TermItem>
            All content, branding, logos, product formulas, and intellectual 
            property are exclusively owned by Promolecules.
          </TermItem>

          <TermItem>
            We are not liable for product misuse, shipping delays, indirect losses, 
            or consequential damages.
          </TermItem>

          <TermItem>
            These Terms are governed by Indian law and fall under the jurisdiction 
            of Indian courts.
          </TermItem>

        </div>

        {/* Contact Section */}
        <div className="mt-12 pt-6 border-t border-neutral-800 text-center">
          <p className="text-gray-400">
            For any questions regarding these Terms & Conditions:
          </p>
          <a
            href="mailto:tc@promolecules.com"
            className="text-blue-400 hover:text-blue-300 underline font-medium"
          >
            📧 tc@promolecules.com
          </a>
        </div>

      </div>
    </div>
  );
};

const TermItem = ({ children }) => (
  <div className="flex items-start gap-3">
    <span className="text-blue-400 mt-1">•</span>
    <p className="leading-relaxed">{children}</p>
  </div>
);

export default TermsConditions;
