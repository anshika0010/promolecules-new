
import React from "react";
import {
  ShieldCheck,
  Lock,
  Cookie,
  CreditCard,
  Database,
  Mail,
  Users,
  RefreshCw,
  FileText,
} from "lucide-react";
import { getSEOMetadata, getJSONLD } from "@/lib/seo";

export const metadata = getSEOMetadata("privacyPolicy");

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

const PrivacyPolicy = () => {
  const jsonld = getJSONLD("privacyPolicy");

  const sections = [
    {
      id: "who-we-are",
      icon: Users,
      eyebrow: "About us",
      title: "1. Who We Are",
      content: (
        <p>
          <strong>Registered Name:</strong> Promolecules™. We ship
          internationally. This policy applies to all website users and
          customers.
        </p>
      ),
    },
    {
      id: "information-we-collect",
      icon: Database,
      eyebrow: "What we gather",
      title: "2. Information We Collect",
      content: (
        <>
          <p className="font-semibold text-stone-900">Personal Information:</p>
          <ul>
            <li>Name, email, phone number</li>
            <li>Billing/shipping address</li>
            <li>Order details & inquiries</li>
          </ul>

          <p className="font-semibold text-stone-900">Automatically Collected:</p>
          <ul>
            <li>IP address, browser, device info</li>
            <li>Pages visited, time spent</li>
            <li>Cookies & tracking data</li>
          </ul>
        </>
      ),
    },
    {
      id: "how-we-use-your-data",
      icon: FileText,
      eyebrow: "Purpose",
      title: "3. How We Use Your Data",
      content: (
        <>
          <ul>
            <li>Process and deliver orders</li>
            <li>Verify payments (Razorpay, PayPal, COD)</li>
            <li>Provide customer support</li>
            <li>Improve site performance</li>
            <li>Send updates & promotions</li>
            <li>Prevent fraud and comply with law</li>
          </ul>
          <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-[14px] text-red-900">
            <strong>Note:</strong> We never sell your personal data.
          </div>
        </>
      ),
    },
    {
      id: "cookies-tracking",
      icon: Cookie,
      eyebrow: "Tracking technology",
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
      id: "payments-sharing",
      icon: CreditCard,
      eyebrow: "Third parties",
      title: "5. Payments & Sharing",
      content: (
        <>
          <p>
            Payments are securely processed by Razorpay, PayPal, or COD. We may
            share limited information with:
          </p>
          <ul>
            <li>Shipping partner (DTDC)</li>
            <li>Payment gateways</li>
            <li>Analytics tools (Google, Meta)</li>
          </ul>
          <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-[14px] text-red-900">
            All partners follow strict confidentiality and data protection
            rules.
          </div>
        </>
      ),
    },
    {
      id: "data-security",
      icon: Lock,
      eyebrow: "Keeping it safe",
      title: "6. Data Security",
      content: (
        <ul>
          <li>SSL encryption & firewall protection</li>
          <li>Limited access and secure servers</li>
          <li>Regular system monitoring</li>
          <li>
            While we take strong precautions, no online system is 100% secure.
          </li>
        </ul>
      ),
    },
    {
      id: "your-rights",
      icon: ShieldCheck,
      eyebrow: "GDPR & CCPA",
      title: "7. Your Rights",
      content: (
        <>
          <p>
            Under GDPR & CCPA, you can request to access, correct, delete, or
            restrict your data. You may also withdraw consent or opt out of
            data sharing.
          </p>
          <p>
            <strong>To exercise your rights, contact:</strong>{" "}
            <a href="mailto:info@promolecules.com">info@promolecules.com</a>
          </p>
        </>
      ),
    },
    {
      id: "marketing-communications",
      icon: Mail,
      eyebrow: "Staying in touch",
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
      id: "childrens-privacy",
      icon: Users,
      eyebrow: "Age requirement",
      title: "9. Children's Privacy",
      content: (
        <p>
          Our website and products are not intended for individuals under 18.
          We do not knowingly collect data from minors.
        </p>
      ),
    },
    {
      id: "updates-contact",
      icon: RefreshCw,
      eyebrow: "We're here to help",
      title: "10. Updates & Contact",
      content: (
        <>
          <p>
            We may update this Privacy Policy occasionally. Continued use of
            our site means you accept these updates.
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
          .prose-policy ul { margin: 0.5em 0; padding-left: 1.15em; list-style: disc; }
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
                Privacy Policy
              </h1>
              <h2 className="mt-1 font-serif text-2xl text-red-700 sm:text-3xl">
                Promolecules™
              </h2>

              <p className="mt-5 max-w-xl p-4 text-[15px] leading-relaxed text-black">
                This Privacy Policy explains how Promolecules™ ("Company",
                "we", "our", "us") collects, uses, and protects your personal
                data when you visit or make a purchase from our website. We
                comply with GDPR and CCPA standards to keep your information
                safe.
              </p>

              <div className="mb-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-[14px] text-red-900">
                <strong>For any privacy-related questions,</strong> reach us
                at{" "}
                <a href="mailto:info@promolecules.com" className="underline">
                  info@promolecules.com
                </a>
                .
              </div>

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

export default PrivacyPolicy;