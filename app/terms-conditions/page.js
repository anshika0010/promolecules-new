

import React from "react";
import { getSEOMetadata, getJSONLD } from "@/lib/seo";
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
  Link as LinkIcon,
  Lock,
  RefreshCw,
  Gavel,
  Mail,
} from "lucide-react";

export const metadata = getSEOMetadata("termsConditions");

function SectionCard({ id, icon: Icon, eyebrow, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-stone-200 py-10 first:pt-0 last:border-b-0"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-900/5 text-red-800 ring-1 ring-red-900/10">
          <Icon size={18} strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          {eyebrow && (
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-red-700">
              {eyebrow}
            </p>
          )}
          <h2 className="font-serif text-2xl text-stone-900 sm:text-[1.65rem]">
            {title}
          </h2>
          <div className="prose-policy mt-4 max-w-none text-[15px] leading-relaxed text-stone-600">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

const TermsConditions = () => {
  const jsonld = getJSONLD("termsConditions");

  const sections = [
    {
      id: "general-use",
      icon: UserCheck,
      eyebrow: "Before you begin",
      title: "1. General Use",
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
      id: "products-information",
      icon: Scale,
      eyebrow: "What you're buying",
      title: "2. Products & Information",
      content: (
        <>
          <p>
            All products listed on this website are intended for healthy adults
            only. The information provided is for general knowledge and
            performance support purposes and should not be considered medical
            advice.
          </p>
          <p>
            Promolecules™ reserves the right to modify product formulations,
            descriptions, pricing, and availability at any time without prior
            notice.
          </p>
        </>
      ),
    },
    {
      id: "health-disclaimer",
      icon: HeartPulse,
      eyebrow: "Please read carefully",
      title: "3. Health Disclaimer",
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
      id: "orders-payments",
      icon: CreditCard,
      eyebrow: "Checkout terms",
      title: "4. Orders & Payments",
      content: (
        <>
          <p>
            All orders placed through the website are subject to acceptance and
            availability. We reserve the right to refuse or cancel any order at
            our discretion.
          </p>
          <p>
            Prices are listed in applicable currency and may be subject to
            taxes, shipping charges, or duties depending on your location.
          </p>
        </>
      ),
    },
    {
      id: "shipping-delivery",
      icon: Truck,
      eyebrow: "Getting your order to you",
      title: "5. Shipping & Delivery",
      content: (
        <p>
          Delivery timelines are estimates and may vary based on location,
          courier services, or external factors. Promolecules™ is not
          responsible for delays caused by third-party logistics providers.
        </p>
      ),
    },
    {
      id: "returns-refunds",
      icon: RotateCcw,
      eyebrow: "If something's not right",
      title: "6. Returns & Refunds",
      content: (
        <>
          <p>
            Due to the nature of supplement products, we do not accept returns
            on opened or used items. Refunds or replacements may be issued only
            in cases of damaged, defective, or incorrect products received.
          </p>
          <p>
            Requests must be made within a specified timeframe after delivery.
          </p>
        </>
      ),
    },
    {
      id: "intellectual-property",
      icon: Copyright,
      eyebrow: "Ownership & usage rights",
      title: "7. Intellectual Property",
      content: (
        <>
          <p>
            All content on this website, including text, images, logos,
            branding, and product designs, is the property of Promolecules™ and
            is protected by applicable intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, or use any content without prior
            written permission.
          </p>
        </>
      ),
    },
    {
      id: "limitation-of-liability",
      icon: AlertTriangle,
      eyebrow: "Where responsibility ends",
      title: "8. Limitation of Liability",
      content: (
        <>
          <p>
            Promolecules™ shall not be held liable for any direct, indirect,
            incidental, or consequential damages arising from the use or misuse
            of our products or website.
          </p>
          <p>Use of products is at your own discretion and responsibility.</p>
        </>
      ),
    },
    {
      id: "user-conduct",
      icon: Shield,
      eyebrow: "Playing by the rules",
      title: "9. User Conduct",
      content: (
        <p>
          You agree not to misuse the website, attempt unauthorized access,
          transmit harmful code, or engage in any activity that may disrupt the
          functionality or security of the platform.
        </p>
      ),
    },
    {
      id: "third-party-links",
      icon: LinkIcon,
      eyebrow: "Leaving our site",
      title: "10. Third-Party Links",
      content: (
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the content, policies, or practices of those websites.
        </p>
      ),
    },
    {
      id: "privacy",
      icon: Lock,
      eyebrow: "How your data is handled",
      title: "11. Privacy",
      content: (
        <p>
          Your use of this website is also governed by our Privacy Policy. By
          using the site, you consent to the collection and use of information
          as outlined there.
        </p>
      ),
    },
    {
      id: "changes-to-terms",
      icon: RefreshCw,
      eyebrow: "Staying current",
      title: "12. Changes to Terms",
      content: (
        <p>
          Promolecules™ reserves the right to update or modify these Terms &
          Conditions at any time. Continued use of the website after changes
          indicates your acceptance of the updated terms.
        </p>
      ),
    },
    {
      id: "governing-law",
      icon: Gavel,
      eyebrow: "Legal jurisdiction",
      title: "13. Governing Law",
      content: (
        <p>
          These Terms & Conditions shall be governed and interpreted in
          accordance with applicable laws of the jurisdiction in which
          Promolecules™ operates.
        </p>
      ),
    },
    {
      id: "contact-information",
      icon: Mail,
      eyebrow: "We're here to help",
      title: "14. Contact Information",
      content: (
        <>
          <p>
            For any questions regarding these Terms & Conditions, you may
            contact us at:
          </p>
          <a
            href="mailto:info@promolecules.com"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-red-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-900"
          >
            <Mail size={15} /> info@promolecules.com
          </a>
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

      <div className="min-h-screen bg-black font-sans text-stone-800">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
          .font-serif { font-family: 'Fraunces', serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .prose-policy p { margin: 0 0 0.85em 0; }
          .prose-policy p:last-child { margin-bottom: 0; }
          .prose-policy ul { margin: 0.5em 0; padding-left: 1.15em; }
          .prose-policy li { margin-bottom: 0.5em; }
          .prose-policy li::marker { color: #f81d1d; }
          .prose-policy a { color: #ee0909; text-decoration: underline; text-underline-offset: 2px; }
        `}</style>

        {/* Body */}
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
          <div>
            {/* Content */}
            <main className="rounded-2xl border border-stone-200 bg-white px-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:px-10">
              <span className="mt-8 inline-block rounded-full bg-red-500 px-5 py-2 font-semibold text-black">
                Last Updated: 10-11-2025
              </span>

              <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.08] text-black sm:text-5xl">
                Promolecules™ Legal Policies
              </h1>
              <h2 className="mt-1 font-serif text-2xl text-red-700 sm:text-3xl">
                Terms & Conditions
              </h2>

              <p className="mt-5 max-w-xl p-4 text-[15px] leading-relaxed text-black">
                Welcome to Promolecules™. By accessing or using our website, you
                agree to comply with and be bound by the following Terms &
                Conditions. Please read them carefully before using our services.
              </p>

              {sections.map((item) => (
                <SectionCard
                  key={item.id}
                  id={item.id}
                  icon={item.icon}
                  eyebrow={item.eyebrow}
                  title={item.title}
                >
                  {item.content}
                </SectionCard>
              ))}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;