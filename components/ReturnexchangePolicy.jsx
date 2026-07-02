'use client';

import { useState, useEffect, useRef } from "react";
import {
  CalendarClock,
  ShieldCheck,
  Ban,
  AlertTriangle,
  Repeat,
  RotateCcw,
  Wallet,
  Mail,
  ChevronRight,
  PackageCheck,
} from "lucide-react";

const sections = [
  { id: "window", label: "Return Window", icon: CalendarClock },
  { id: "eligibility", label: "Eligibility for Returns", icon: ShieldCheck },
  { id: "non-returnable", label: "Non-Returnable Items", icon: Ban },
  { id: "defective", label: "Defective / Damaged / Incorrect", icon: AlertTriangle },
  { id: "exchanges", label: "Exchanges", icon: Repeat },
  { id: "how-to", label: "How to Initiate a Return", icon: RotateCcw },
  { id: "refunds", label: "Refunds", icon: Wallet },
  { id: "contact", label: "Need Help?", icon: Mail },
];

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0.1 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

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

export default function ReturnExchangePolicy() {
  const active = useActiveSection(sections.map((s) => s.id));
  const contentRef = useRef(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
          <main
            ref={contentRef}
            className="rounded-2xl border border-stone-200 bg-white px-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:px-10"
          >

                 <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.08] text-black sm:text-5xl">
            Return &amp; Exchange Policy
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-black p-4">
            At Promolecules™, we are committed to providing you with
            premium, UAE-based supplements. If you are not entirely
            satisfied with your purchase, we're here to help. Please read
            our policy carefully to understand your options for returns,
            exchanges, and refunds.
          </p>
        
            <SectionCard
              id="window"
              icon={CalendarClock}
              eyebrow="Act promptly"
              title="Return Window"
            >
              <p>
                You have 7 days to return an item from the date you received
                it. If 7 days have gone by since your delivery,
                unfortunately, we cannot offer you a refund or exchange.
              </p>
            </SectionCard>

            <SectionCard
              id="eligibility"
              icon={ShieldCheck}
              eyebrow="Strict guidelines apply"
              title="Eligibility for Returns"
            >
              <p>
                Due to the nature of dietary supplements and health and
                safety regulations, we have strict guidelines for returned
                products:
              </p>
              <p>
                <strong>Unopened and Sealed:</strong>
              </p>
              <ul>
                <li>
                  Your item must be unused, unopened, and in the exact same
                  condition that you received it. The original safety seal
                  must be intact.
                </li>
                <li>
                  <strong>Original Packaging:</strong> The item must be in
                  its original packaging.
                </li>
                <li>
                  <strong>Proof of Purchase:</strong> Your item needs to have
                  the receipt or proof of purchase (order number or
                  confirmation email).
                </li>
              </ul>
            </SectionCard>

            <SectionCard
              id="non-returnable"
              icon={Ban}
              eyebrow="For health and safety reasons"
              title="Non-Returnable Items"
            >
              <p>
                For health and safety reasons, the following items cannot be
                returned or exchanged:
              </p>
              <ul>
                <li>Products that have been opened, unsealed, or used.</li>
                <li>Items marked as "Final Sale" or "Clearance."</li>
                <li>Gift cards.</li>
              </ul>
            </SectionCard>

            <SectionCard
              id="defective"
              icon={AlertTriangle}
              eyebrow="Our mistake, our fix"
              title="Defective, Damaged, or Incorrect Items"
            >
              <ul>
                <li>
                  If you received a defective, damaged, or incorrect item
                  (e.g., wrong brand, wrong flavor), please contact us within
                  3 days of delivery.
                </li>
                <li>
                  We will gladly replace the item or provide a full refund
                  at no additional cost to you.
                </li>
                <li>
                  Please email us at{" "}
                  <a href="mailto:info@promolecules.com">
                    info@promolecules.com
                  </a>{" "}
                  with your order number and photos of the damaged or
                  incorrect product so we can resolve the issue immediately.
                </li>
              </ul>
            </SectionCard>

            <SectionCard
              id="exchanges"
              icon={Repeat}
              eyebrow="How swaps work"
              title="Exchanges"
            >
              <p>
                We only replace items if they are defective, damaged, or if
                you received the wrong product.
              </p>
              <p>
                If you accidentally ordered the wrong item and wish to
                exchange it for a different product, you must return the
                unopened, original item (following the return process
                below) and place a new order for the desired item.
              </p>
            </SectionCard>

            <SectionCard
              id="how-to"
              icon={RotateCcw}
              eyebrow="Step by step"
              title="How to Initiate a Return?"
            >
              <p>To start a return, please follow these steps:</p>
              <ol className="list-decimal space-y-3 pl-5 marker:font-medium marker:text-red-700">
                <li>
                  <strong>Contact Us:</strong> Email our support team at{" "}
                  <a href="mailto:info@promolecules.com">
                    info@promolecules.com
                  </a>{" "}
                  with your Order Number and the reason for the return.
                </li>
                <li>
                  <strong>Approval:</strong> If your return is approved, we
                  will provide you with a Return Merchandise Authorization
                  (RMA) number and instructions on where to send your
                  package.
                </li>
                <li>
                  <strong>Pack and Ship:</strong> Securely pack the unopened
                  items. Please clearly write the RMA number on the outside
                  of the package.
                </li>
              </ol>
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-[14px] text-red-900">
                <strong>Important Note:</strong> You are responsible for
                paying your own shipping costs for returning your item
                (unless the return is due to our error). Shipping costs are
                non-refundable. We highly recommend using a trackable
                shipping service or purchasing shipping insurance, as we
                cannot guarantee that we will receive your returned item.
              </div>
            </SectionCard>

            <SectionCard
              id="refunds"
              icon={Wallet}
              eyebrow="Getting your money back"
              title="Refunds"
            >
              <ul>
                <li>
                  Once we receive your returned item, our team will inspect
                  it to ensure it meets our return criteria (unopened and
                  sealed).
                </li>
                <li>
                  We will immediately notify you of the status of your
                  refund after inspecting the item.
                </li>
                <li>
                  If your return is approved, we will initiate a refund to
                  your credit card (or original method of payment).
                </li>
                <li>
                  You will receive the credit within 5 to 10 business days,
                  depending on your card issuer's policies.
                </li>
              </ul>
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-[14px] text-red-900">
                <strong>Please note:</strong> Original shipping fees are
                non-refundable and will be deducted from your total refund
                amount.
              </div>
            </SectionCard>

            <SectionCard id="contact" icon={Mail} eyebrow="We're here to help" title="Need Help?">
              <p>
                If you have any questions about how to return your item to
                us, please contact our customer support team.
              </p>
              <a
                href="mailto:info@promolecules.com"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-red-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-900"
              >
                <Mail size={15} /> info@promolecules.com
              </a>
            </SectionCard>
          </main>
        </div>
      </div>

    </div>
  );
}