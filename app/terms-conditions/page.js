

import React from "react";
 import { getSEOMetadata, getJSONLD } from "@/lib/seo";

 export const metadata = getSEOMetadata("termsConditions");
import {
  Scale,
  Shield,
  HeartPulse,
  CreditCard,
  Truck,
  RotateCcw,
  Copyright,
  AlertTriangle,
  UserCheck,
  Link,
  Lock,
  RefreshCw,
  Gavel,
  Mail,
} from "lucide-react";

const TermsConditions = () => {
   const jsonld = getJSONLD("termsConditions");

  const sections = [
    {
      icon: <UserCheck size={28} />,
      title: "1. GENERAL USE",
      content: (
        <p>
          By using this website, you confirm that you are at least 18 years old
          or accessing the site under the supervision of a parent or legal
          guardian. You agree to use this website only for lawful purposes and
          in a manner that does not violate any applicable laws or regulations.
        </p>
      ),
    },
    {
      icon: <Scale size={28} />,
      title: "2. PRODUCTS & INFORMATION",
      content: (
        <>
          <p>
            All products listed on this website are intended for healthy adults
            only. The information provided is for general knowledge and
            performance support purposes and should not be considered medical
            advice.
          </p>

          <p className="mt-4">
            Promolecules™ reserves the right to modify product formulations,
            descriptions, pricing, and availability at any time without prior
            notice.
          </p>
        </>
      ),
    },
    {
      icon: <HeartPulse size={28} />,
      title: "3. HEALTH DISCLAIMER",
      content: (
        <p>
          Our products are designed to support training performance and are not
          intended to diagnose, treat, cure, or prevent any disease. You should
          consult a qualified healthcare professional before using any
          supplement, especially if you have any medical condition, are
          pregnant, nursing, or taking medication.
        </p>
      ),
    },
    {
      icon: <CreditCard size={28} />,
      title: "4. ORDERS & PAYMENTS",
      content: (
        <>
          <p>
            All orders placed through the website are subject to acceptance and
            availability. We reserve the right to refuse or cancel any order at
            our discretion.
          </p>

          <p className="mt-4">
            Prices are listed in applicable currency and may be subject to
            taxes, shipping charges, or duties depending on your location.
          </p>
        </>
      ),
    },
    {
      icon: <Truck size={28} />,
      title: "5. SHIPPING & DELIVERY",
      content: (
        <p>
          Delivery timelines are estimates and may vary based on location,
          courier services, or external factors. Promolecules™ is not
          responsible for delays caused by third-party logistics providers.
        </p>
      ),
    },
    {
      icon: <RotateCcw size={28} />,
      title: "6. RETURNS & REFUNDS",
      content: (
        <>
          <p>
            Due to the nature of supplement products, we do not accept returns
            on opened or used items. Refunds or replacements may be issued only
            in cases of damaged, defective, or incorrect products received.
          </p>

          <p className="mt-4">
            Requests must be made within a specified timeframe after delivery.
          </p>
        </>
      ),
    },
    {
      icon: <Copyright size={28} />,
      title: "7. INTELLECTUAL PROPERTY",
      content: (
        <>
          <p>
            All content on this website, including text, images, logos,
            branding, and product designs, is the property of Promolecules™ and
            is protected by applicable intellectual property laws.
          </p>

          <p className="mt-4">
            You may not reproduce, distribute, or use any content without prior
            written permission.
          </p>
        </>
      ),
    },
    {
      icon: <AlertTriangle size={28} />,
      title: "8. LIMITATION OF LIABILITY",
      content: (
        <>
          <p>
            Promolecules™ shall not be held liable for any direct, indirect,
            incidental, or consequential damages arising from the use or misuse
            of our products or website.
          </p>

          <p className="mt-4">
            Use of products is at your own discretion and responsibility.
          </p>
        </>
      ),
    },
    {
      icon: <Shield size={28} />,
      title: "9. USER CONDUCT",
      content: (
        <p>
          You agree not to misuse the website, attempt unauthorized access,
          transmit harmful code, or engage in any activity that may disrupt the
          functionality or security of the platform.
        </p>
      ),
    },
    {
      icon: <Link size={28} />,
      title: "10. THIRD-PARTY LINKS",
      content: (
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the content, policies, or practices of those websites.
        </p>
      ),
    },
    {
      icon: <Lock size={28} />,
      title: "11. PRIVACY",
      content: (
        <p>
          Your use of this website is also governed by our Privacy Policy. By
          using the site, you consent to the collection and use of information
          as outlined there.
        </p>
      ),
    },
    {
      icon: <RefreshCw size={28} />,
      title: "12. CHANGES TO TERMS",
      content: (
        <p>
          Promolecules™ reserves the right to update or modify these Terms &
          Conditions at any time. Continued use of the website after changes
          indicates your acceptance of the updated terms.
        </p>
      ),
    },
    {
      icon: <Gavel size={28} />,
      title: "13. GOVERNING LAW",
      content: (
        <p>
          These Terms & Conditions shall be governed and interpreted in
          accordance with applicable laws of the jurisdiction in which
          Promolecules™ operates.
        </p>
      ),
    },
    {
      icon: <Mail size={28} />,
      title: "14. CONTACT INFORMATION",
      content: (
        <>
          <p>
            For any questions regarding these Terms & Conditions, you may
            contact us at:
          </p>

          <p className="mt-5 text-xl font-bold text-red-400">
            info@promolecules.com
          </p>
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
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-red-500 text-black font-semibold mb-6">
            Last Updated: 10-11-2025
          </span>

          <h1 className="text-5xl font-extrabold text-white">
            Promolecules™ Legal Policies
          </h1>

          <h2 className="text-3xl font-bold text-red-400 mt-2">
            Terms & Conditions
          </h2>

          <p className="text-gray-300 max-w-4xl mx-auto mt-8 text-lg leading-8">
            Welcome to Promolecules™. By accessing or using our website, you
            agree to comply with and be bound by the following Terms &
            Conditions. Please read them carefully before using our services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-black">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>

              <div className="text-gray-200 leading-8 text-lg">
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

export default TermsConditions;