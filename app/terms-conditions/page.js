// app/terms-conditions/page.js
import Image from "next/image";
import React from "react";
import { getSEOMetadata, getJSONLD } from "@/lib/seo";

export const metadata = getSEOMetadata("termsConditions");

const TermsConditions = () => {
  const jsonld = getJSONLD("termsConditions");

  const terms = [
    {
      title: "1. GENERAL USE",
      content:
        "By using this website, you confirm that you are at least 18 years old or accessing the site under the supervision of a parent or legal guardian. You agree to use this website only for lawful purposes and in a manner that does not violate any applicable laws or regulations.",
    },
    {
      title: "2. PRODUCTS & INFORMATION",
      content:
        "All products listed on this website are intended for healthy adults only. The information provided is for general knowledge and performance support purposes and should not be considered medical advice.",
    },
    {
      content:
        "Promolecules™ reserves the right to modify product formulations, descriptions, pricing, and availability at any time without prior notice.",
    },
    {
      title: "3. HEALTH DISCLAIMER",
      content:
        "Our products are designed to support training performance and are not intended to diagnose, treat, cure, or prevent any disease. You should consult a qualified healthcare professional before using any supplement, especially if you have any medical condition, are pregnant, nursing, or taking medication.",
    },
    {
      title: "4. ORDERS & PAYMENTS",
      content:
        "All orders placed through the website are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion.",
    },
    {
      content:
        "Prices are listed in applicable currency and may be subject to taxes, shipping charges, or duties depending on your location.",
    },
    {
      title: "5. SHIPPING & DELIVERY",
      content:
        "Delivery timelines are estimates and may vary based on location, courier services, or external factors. Promolecules™ is not responsible for delays caused by third-party logistics providers.",
    },
    {
      title: "6. RETURNS & REFUNDS",
      content:
        "Due to the nature of supplement products, we do not accept returns on opened or used items. Refunds or replacements may be issued only in cases of damaged, defective, or incorrect products received.",
    },
    {
      content:
        "Requests must be made within a specified timeframe after delivery.",
    },
    {
      title: "7. INTELLECTUAL PROPERTY",
      content:
        "All content on this website, including text, images, logos, branding, and product designs, is the property of Promolecules™ and is protected by applicable intellectual property laws.",
    },
    {
      content:
        "You may not reproduce, distribute, or use any content without prior written permission.",
    },
    {
      title: "8. LIMITATION OF LIABILITY",
      content:
        "Promolecules™ shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or misuse of our products or website.",
    },
    {
      content:
        "Use of products is at your own discretion and responsibility.",
    },
    {
      title: "9. USER CONDUCT",
      content:
        "You agree not to misuse the website, attempt unauthorized access, transmit harmful code, or engage in any activity that may disrupt the functionality or security of the platform.",
    },
    {
      title: "10. THIRD-PARTY LINKS",
      content:
        "Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of those websites.",
    },
    {
      title: "11. PRIVACY",
      content:
        "Your use of this website is also governed by our Privacy Policy. By using the site, you consent to the collection and use of information as outlined there.",
    },
    {
      title: "12. CHANGES TO TERMS",
      content:
        "Promolecules™ reserves the right to update or modify these Terms & Conditions at any time. Continued use of the website after changes indicates your acceptance of the updated terms.",
    },
    {
      title: "13. GOVERNING LAW",
      content:
        "These Terms & Conditions shall be governed and interpreted in accordance with applicable laws of the jurisdiction in which Promolecules™ operates.",
    },
    {
      title: "14. CONTACT INFORMATION",
      content:
        "For any questions regarding these Terms & Conditions, you may contact us at:",
    },
  ];

  return (
    <>
      {jsonld && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonld }}
        />
      )}

      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 sm:px-6 py-12">
        <Image
          src="/promolecules-about-banner.webp"
          alt="Background"
          fill
          className="object-cover"
        />

        <div className="max-w-5xl bg-black/95 mx-auto relative z-10 shadow-2xl rounded-2xl p-6 sm:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-red-700">
              PROMOLECULES™ Legal Policies
            </h1>
            <p className="mt-2 text-gray-400">Terms & Conditions</p>
            <p className="mt-1 text-sm text-gray-500">
              Last Updated: 10-11-2025
            </p>
          </div>

          {/* Intro */}
          <p className="text-gray-300 leading-relaxed mb-8">
            Welcome to Promolecules™. By accessing or using our website, you
            agree to comply with and be bound by the following Terms &
            Conditions. Please read them carefully before using our services.
          </p>

          {/* Terms */}
          <div className="space-y-6">
            {terms.map((term, index) => (
              <div key={index}>
                {term.title && (
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {term.title}
                  </h3>
                )}
                <p className="text-gray-300 leading-relaxed">{term.content}</p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-12 pt-6 border-t border-neutral-800 text-center">
            <a
              href="mailto:info@promolecules.co"
              className="text-blue-400 hover:text-blue-300 underline font-medium"
            >
              info@promolecules.co
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;