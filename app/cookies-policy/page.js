

import React from "react";
import {
  Cookie,
  ShieldCheck,
  BarChart3,
  Globe,
  Building2,
  Settings,
  Database,
  RefreshCw,
  Mail,
} from "lucide-react";
import { getSEOMetadata, getJSONLD } from "@/lib/seo";

export const metadata = getSEOMetadata("cookiesPolicy");

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

const CookiesPolicy = () => {
  const jsonld = getJSONLD("cookiesPolicy");

  const sections = [
    {
      id: "what-are-cookies",
      icon: Cookie,
      eyebrow: "The basics",
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
      id: "types-of-cookies",
      icon: ShieldCheck,
      eyebrow: "Not all cookies are the same",
      title: "2. Types of Cookies We Use",
      content: (
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-stone-900">
              2.1 Essential / Strictly Necessary Cookies
            </p>
            <ul>
              <li>Secure checkout</li>
              <li>Site navigation</li>
              <li>User login</li>
              <li>Shopping cart functionality</li>
            </ul>
            <p className="font-medium text-red-700">
              Without these cookies, some features may not work properly.
            </p>
          </div>

          <div>
            <p className="font-semibold text-stone-900">
              2.2 Performance & Analytics Cookies
            </p>
            <p>We use:</p>
            <ul>
              <li>Google Analytics</li>
              <li>Meta (Facebook) Pixel</li>
            </ul>
            <p>They collect information such as:</p>
            <ul>
              <li>Pages visited</li>
              <li>Time spent on site</li>
              <li>Click behavior</li>
              <li>Device/browser information</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-stone-900">
              2.3 Preference Cookies
            </p>
            <ul>
              <li>Language preferences</li>
              <li>Region</li>
              <li>Login preferences</li>
              <li>Previously viewed products</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-stone-900">
              2.4 Advertising & Retargeting Cookies
            </p>
            <p>Our advertising partners may include:</p>
            <ul>
              <li>Google Ads</li>
              <li>Meta (Facebook & Instagram)</li>
              <li>Other remarketing platforms</li>
            </ul>
            <p>These cookies:</p>
            <ul>
              <li>Track browsing activity</li>
              <li>Show personalized ads</li>
              <li>Retarget you with items you viewed</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "third-party-cookies",
      icon: Building2,
      eyebrow: "Beyond our control",
      title: "3. Third-Party Cookies",
      content: (
        <>
          <p>
            Some cookies may be placed by third parties on our website, such
            as:
          </p>
          <ul>
            <li>Payment gateways (Razorpay, PayPal)</li>
            <li>Analytics services</li>
            <li>Social media embeds</li>
            <li>Advertising platforms</li>
          </ul>
          <p>
            These partners have their own privacy and cookie policies. We do
            not control third-party cookies.
          </p>
        </>
      ),
    },
    {
      id: "why-we-use-cookies",
      icon: BarChart3,
      eyebrow: "Purpose",
      title: "4. Why We Use Cookies",
      content: (
        <ul>
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
      id: "how-to-control-cookies",
      icon: Settings,
      eyebrow: "Your choice",
      title: "5. How to Control Cookies",
      content: (
        <>
          <p>You can manage or disable cookies through your browser settings:</p>
          <ul>
            <li>Chrome: Settings → Privacy → Cookies</li>
            <li>Safari: Preferences → Privacy</li>
            <li>Firefox: Settings → Privacy & Security</li>
            <li>Edge: Settings → Cookies & Site Permissions</li>
          </ul>
          <p>If you disable cookies:</p>
          <ul>
            <li>Some parts of the website may not function properly</li>
            <li>You may not be able to complete purchases</li>
            <li>You may see less relevant product recommendations</li>
          </ul>
        </>
      ),
    },
    {
      id: "cookie-consent",
      icon: Globe,
      eyebrow: "GDPR compliance",
      title: "6. Cookie Consent (GDPR Compliance)",
      content: (
        <ul>
          <li>You will see a cookie consent banner</li>
          <li>You may choose to Accept, Reject, or Customize cookie usage</li>
          <li>We store your cookie preferences as required under GDPR</li>
        </ul>
      ),
    },
    {
      id: "data-collected",
      icon: Database,
      eyebrow: "What gets tracked",
      title: "7. Data Collected Through Cookies",
      content: (
        <>
          <p>Cookies may collect:</p>
          <ul>
            <li>Device information</li>
            <li>Browser type</li>
            <li>Country/city</li>
            <li>Pages viewed</li>
            <li>Interaction patterns</li>
            <li>Referring URLs</li>
            <li>IP address (anonymized where required by law)</li>
          </ul>
          <p className="font-semibold text-red-600">We never collect:</p>
          <ul>
            <li>Payment card details</li>
            <li>Sensitive personal information</li>
          </ul>
        </>
      ),
    },
    {
      id: "updates-to-policy",
      icon: RefreshCw,
      eyebrow: "Staying current",
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
      id: "contact-us",
      icon: Mail,
      eyebrow: "We're here to help",
      title: "9. Contact Us",
      content: (
        <>
          <p>For questions about our cookie practices, reach us at:</p>
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
                Last Updated: 10-02-2026
              </span>

              <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.08] text-black sm:text-5xl">
                Cookies Policy
              </h1>
              <h2 className="mt-1 font-serif text-2xl text-red-700 sm:text-3xl">
                Promolecules™
              </h2>

              <p className="mt-5 max-w-xl p-4 text-[15px] leading-relaxed text-black">
                This Cookies Policy explains how Promolecules™ ("we", "our",
                "us") uses cookies and similar tracking technologies on our
                website. By using our website, you consent to the use of
                cookies as described in this policy.
              </p>

              <div className="mb-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-[14px] text-red-900">
                <strong>If you have any questions,</strong> you may contact us
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

export default CookiesPolicy;