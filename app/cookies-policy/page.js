


import React from "react";
import {
  Cookie,
  ShieldCheck,
  BarChart3,
  Globe,
  BadgePercent,
  Building2,
  Settings,
  Database,
  RefreshCw,
  Mail,
} from "lucide-react";
 import { getSEOMetadata, getJSONLD } from "@/lib/seo";

export const metadata = getSEOMetadata("cookiesPolicy");

const CookiesPolicy = () => {
  const jsonld = getJSONLD("cookiesPolicy");
  const sections = [
    {
      icon: <Cookie size={28} />,
      title: "1. What Are Cookies?",
      content: (
        <p>
          Cookies are small text files stored on your device (computer, mobile,
          tablet) when you visit a website. They help improve user experience
          and allow websites to remember your actions or preferences over time.
        </p>
      ),
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "2. Types of Cookies We Use",
      content: (
        <>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                2.1 Essential / Strictly Necessary Cookies
              </h4>

              <ul className="list-disc ml-6 space-y-2">
                <li>Secure checkout</li>
                <li>Site navigation</li>
                <li>User login</li>
                <li>Shopping cart functionality</li>
              </ul>

              <p className="mt-4 font-medium text-red-700">
                Without these cookies, some features may not work properly.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                2.2 Performance & Analytics Cookies
              </h4>

              <p className="mb-3">We use:</p>

              <ul className="list-disc ml-6 space-y-2">
                <li>Google Analytics</li>
                <li>Meta (Facebook) Pixel</li>
              </ul>

              <p className="mt-5 mb-3">
                They collect information such as:
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>Pages visited</li>
                <li>Time spent on site</li>
                <li>Click behavior</li>
                <li>Device/browser information</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                2.3 Preference Cookies
              </h4>

              <ul className="list-disc ml-6 space-y-2">
                <li>Language preferences</li>
                <li>Region</li>
                <li>Login preferences</li>
                <li>Previously viewed products</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                2.4 Advertising & Retargeting Cookies
              </h4>

              <p className="mb-3">
                Our advertising partners may include:
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>Google Ads</li>
                <li>Meta (Facebook & Instagram)</li>
                <li>Other remarketing platforms</li>
              </ul>

              <p className="mt-5 mb-3">These cookies:</p>

              <ul className="list-disc ml-6 space-y-2">
                <li>Track browsing activity</li>
                <li>Show personalized ads</li>
                <li>Retarget you with items you viewed</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      icon: <Building2 size={28} />,
      title: "3. Third-Party Cookies",
      content: (
        <>
          <p className="mb-4">
            Some cookies may be placed by third parties on our website, such
            as:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Payment gateways (Razorpay, PayPal)</li>
            <li>Analytics services</li>
            <li>Social media embeds</li>
            <li>Advertising platforms</li>
          </ul>

          <p className="mt-5">
            These partners have their own privacy and cookie policies. We do
            not control third-party cookies.
          </p>
        </>
      ),
    },
    {
      icon: <BarChart3 size={28} />,
      title: "4. Why We Use Cookies",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>Improve website functionality</li>
          <li>Enhance shopping experience</li>
          <li>Analyze site performance</li>
          <li>Personalize product recommendations</li>
          <li>Provide secure payments</li>
          <li>Run marketing and retargeting campaigns</li>
          <li>Track conversions and website traffic</li>
        </ul>
      ),
    },
    {
      icon: <Settings size={28} />,
      title: "5. How to Control Cookies",
      content: (
        <>
          <p className="mb-4">
            You can manage or disable cookies through your browser settings:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Chrome: Settings → Privacy → Cookies</li>
            <li>Safari: Preferences → Privacy</li>
            <li>Firefox: Settings → Privacy & Security</li>
            <li>Edge: Settings → Cookies & Site Permissions</li>
          </ul>

          <p className="mt-5 mb-3">
            If you disable cookies:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Some parts of the website may not function properly</li>
            <li>You may not be able to complete purchases</li>
            <li>You may see less relevant product recommendations</li>
          </ul>
        </>
      ),
    },
    {
      icon: <Globe size={28} />,
      title: "6. Cookie Consent (GDPR Compliance)",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>You will see a cookie consent banner</li>
          <li>
            You may choose to Accept, Reject, or Customize cookie usage
          </li>
          <li>
            We store your cookie preferences as required under GDPR
          </li>
        </ul>
      ),
    },
    {
      icon: <Database size={28} />,
      title: "7. Data Collected Through Cookies",
      content: (
        <>
          <p className="mb-4">Cookies may collect:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Device information</li>
            <li>Browser type</li>
            <li>Country/city</li>
            <li>Pages viewed</li>
            <li>Interaction patterns</li>
            <li>Referring URLs</li>
            <li>IP address (anonymized where required by law)</li>
          </ul>

          <p className="font-semibold text-red-600 mt-6 mb-3">
            We never collect:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Payment card details</li>
            <li>Sensitive personal information</li>
          </ul>
        </>
      ),
    },
    {
      icon: <RefreshCw size={28} />,
      title: "8. Updates to This Policy",
      content: (
        <p>
          We may update this Cookies Policy occasionally. Changes will be
          reflected with a new "Last Updated" date. Continued use of our
          website means you accept these changes.
        </p>
      ),
    },
    {
      icon: <Mail size={28} />,
      title: "9. Contact Us",
      content: (
        <>
          <p>
            For questions about our cookie practices, reach us at:
          </p>

          <div className="mt-5 bg-red-600 text-white rounded-xl p-5">
            <p className="font-semibold">
              info@promolecules.com
            </p>
          </div>
        </>
      ),
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
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
            <Cookie className="w-12 h-12 text-red-600" />
          </div>

          <h1 className="text-5xl font-bold text-gray-100">
            Cookies Policy
          </h1>

          <p className="text-2xl font-semibold text-red-600 mt-2">
            Promolecules™
          </p>

          <div className="inline-block mt-6 px-6 py-3 bg-white rounded-full shadow-md border">
            <span className="font-semibold">
              Last Updated:
            </span>{" "}
            <span className="text-red-600 font-bold">
              10-02-2026
            </span>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border mb-10">
          <p className="text-lg leading-8 text-gray-700">
            This Cookies Policy explains how Promolecules™ ("we", "our", "us")
            uses cookies and similar tracking technologies on our website.
          </p>

          <p className="mt-5 text-lg text-gray-700">
            By using our website, you consent to the use of cookies as
            described in this policy.
          </p>

          <div className="mt-6 bg-red-100 rounded-xl border border-red-200 p-5">
            <p className="font-semibold">
              If you have any questions, you may contact us at:
            </p>

            <p className="text-red-600 font-bold text-lg mt-2">
              info@promolecules.com
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border overflow-hidden hover:shadow-xl transition"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-600 text-white px-8 py-5 flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  {section.icon}
                </div>

                <h2 className="text-2xl font-bold">
                  {section.title}
                </h2>
              </div>

              <div className="p-8 text-gray-700 leading-8 text-lg">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default CookiesPolicy;