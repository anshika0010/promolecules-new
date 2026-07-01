

import React from "react";
import { ShieldCheck, Lock, Cookie, CreditCard, Database, Mail, Users, RefreshCw, FileText } from "lucide-react";
import Image from "next/image";
 import { getSEOMetadata, getJSONLD } from "@/lib/seo";

 export const metadata = getSEOMetadata("privacyPolicy");



const PrivacyPolicy = () => {
  const jsonld = getJSONLD("privacyPolicy");
      
  const sections = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "1. Who We Are",
      content: (
        <>
          <p>
            <strong>Registered Name:</strong> Promolecules™. We ship
            internationally. This policy applies to all website users and
            customers.
          </p>
        </>
      ),
    },
    {
      icon: <Database className="w-6 h-6 text-green-600" />,
      title: "2. Information We Collect",
      content: (
        <>
          <h4 className="font-semibold text-gray-900 mb-2">
            Personal Information:
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Name, email, phone number</li>
            <li>Billing/shipping address</li>
            <li>Order details & inquiries</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-5 mb-2">
            Automatically Collected:
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>IP address, browser, device info</li>
            <li>Pages visited, time spent</li>
            <li>Cookies & tracking data</li>
          </ul>
        </>
      ),
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      title: "3. How We Use Your Data",
      content: (
        <>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Process and deliver orders</li>
            <li>Verify payments (Razorpay, PayPal, COD)</li>
            <li>Provide customer support</li>
            <li>Improve site performance</li>
            <li>Send updates & promotions</li>
            <li>Prevent fraud and comply with law</li>
          </ul>

          <div className="mt-5 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
            <p className="text-green-800 font-medium">
              Note: We never sell your personal data.
            </p>
          </div>
        </>
      ),
    },
    {
      icon: <Cookie className="w-6 h-6 text-orange-500" />,
      title: "4. Cookies & Tracking",
      content: (
        <p>
          We use cookies and analytics tools (Google & Meta) to improve website
          functionality, personalize experience, and measure performance. You
          can disable cookies in your browser settings anytime.
        </p>
      ),
    },
    {
      icon: <CreditCard className="w-6 h-6 text-red-500" />,
      title: "5. Payments & Sharing",
      content: (
        <>
          <p className="mb-4">
            Payments are securely processed by Razorpay, PayPal, or COD. We may
            share limited information with:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Shipping partner (DTDC)</li>
            <li>Payment gateways</li>
            <li>Analytics tools (Google, Meta)</li>
          </ul>

          <div className="mt-5 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-700 font-medium">
              All partners follow strict confidentiality and data protection
              rules.
            </p>
          </div>
        </>
      ),
    },
    {
      icon: <Lock className="w-6 h-6 text-indigo-600" />,
      title: "6. Data Security",
      content: (
        <>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>SSL encryption & firewall protection</li>
            <li>Limited access and secure servers</li>
            <li>Regular system monitoring</li>
            <li>
              While we take strong precautions, no online system is 100% secure.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "7. Your Rights",
      content: (
        <>
          <p>
            Under GDPR & CCPA, you can request to access, correct, delete, or
            restrict your data. You may also withdraw consent or opt out of data
            sharing.
          </p>

          <div className="mt-5 bg-gray-100 rounded-xl p-4">
            <p>
              <strong>To exercise your rights, contact:</strong>{" "}
              <span className="text-blue-600 font-semibold">
                info@promolecules.com
              </span>
            </p>
          </div>
        </>
      ),
    },
    {
      icon: <Mail className="w-6 h-6 text-pink-600" />,
      title: "8. Marketing & Communications",
      content: (
        <p>
          By providing your contact info, you agree to receive order updates,
          product launches, and promotional offers. You can unsubscribe
          anytime.
        </p>
      ),
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-600" />,
      title: "9. Children's Privacy",
      content: (
        <p>
          Our website and products are not intended for individuals under 18.
          We do not knowingly collect data from minors.
        </p>
      ),
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-cyan-600" />,
      title: "10. Updates & Contact",
      content: (
        <>
          <p>
            We may update this Privacy Policy occasionally. Continued use of our
            site means you accept these updates.
          </p>

          <div className="mt-5 bg-blue-600 text-white rounded-xl p-5">
            <p className="font-semibold">Contact us at:</p>
            <p className="text-lg font-bold">info@promolecules.com</p>
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
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 sm:px-6">
       {/* Background */}
        <Image
           src="/promolecules-about-banner.webp"
         alt="Background"
          fill
         className="object-contain"
        />
       <div className="max-w-7xl bg-black mx-auto relative z-10 shadow-2xl rounded-2xl p-6 sm:p-10">
      
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
            <ShieldCheck className="w-10 h-10 text-blue-700" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
            Privacy Policy
          </h1>

          <p className="mt-3 text-red-600 text-lg">
            PROMOLECULES™
          </p>

          <div className="mt-5 inline-flex items-center bg-white shadow-md rounded-full px-6 py-3 border">
            <span className="font-semibold text-gray-700">
              Last Updated:
            </span>
            <span className="ml-2 text-blue-600 font-bold">
              10-11-2025
            </span>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">
          <p className="text-gray-700 leading-8 text-lg">
            This Privacy Policy explains how <strong>Promolecules™</strong>{" "}
            ("Company", "we", "our", "us") collects, uses, and protects your
            personal data when you visit or make a purchase from our website. We
            comply with GDPR and CCPA standards to keep your information safe.
          </p>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="font-semibold text-gray-800">
              For any privacy-related questions, reach us at:
            </p>
            <p className="text-blue-600 font-bold text-lg mt-1">
              info@promolecules.com
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-white px-8 py-6 border-b">
                <div className="w-14 h-14 rounded-2xl bg-white shadow flex items-center justify-center">
                  {item.icon}
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h2>
              </div>

              <div className="p-8 text-gray-700 leading-8 text-lg">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default PrivacyPolicy;