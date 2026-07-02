'use client';
import { useState, useEffect, useRef } from "react";
import {
  Package,
  Truck,
  Clock,
  ShieldCheck,
  MapPin,
  Globe2,
  Mail,
  RotateCcw,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";

const sections = [
  { id: "processing", label: "Order Processing", icon: Clock },
  { id: "rates", label: "Rates & Delivery", icon: Truck },
  { id: "tracking", label: "Tracking", icon: Package },
  { id: "quality", label: "Quality Assurance", icon: BadgeCheck },
  { id: "damages", label: "Damages & Lost Packages", icon: ShieldCheck },
  { id: "address", label: "Incorrect Addresses", icon: MapPin },
  { id: "international", label: "International Shipping", icon: Globe2 },
  { id: "returns", label: "Returns", icon: RotateCcw },
  { id: "contact", label: "Contact", icon: Mail },
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
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-900/5 text-teal-800 ring-1 ring-teal-900/10">
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

export default function ShippingPolicy() {
  const contentRef = useRef(null);


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
        .prose-policy li::marker { color: #b45309; }
        .prose-policy a { color: #115e59; text-decoration: underline; text-underline-offset: 2px; }
      `}</style>

     

      {/* Body */}
      <div className="mx-auto max-w-6xl px-6 py-12 bg-black sm:px-10 sm:py-16">
        <div className="">
         

          {/* Content */}
          <main
            ref={contentRef}
            className="rounded-2xl border border-stone-200 bg-white px-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:px-10"
          >
            <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.08] text-black sm:text-5xl">
            Shipping &amp; Returns
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-black p-2 ">
            Premium, authentic supplements delivered securely to your door.
            Everything you need to know about processing times, tracking,
            international delivery, and how to return an order.
          </p>
            <SectionCard
              id="processing"
              icon={Clock}
              eyebrow="Before it ships"
              title="Order Processing Time"
            >
              <ul>
                <li>All orders are processed within <strong>1 to 3 business days</strong>.</li>
                <li>Orders are not shipped or delivered on weekends or holidays.</li>
                <li>
                  During periods of high order volume, shipments may be
                  delayed by a few days. If your order faces a significant
                  delay, we'll reach out by email or telephone.
                </li>
              </ul>
            </SectionCard>

            <SectionCard
              id="rates"
              icon={Truck}
              eyebrow="Getting to you"
              title="Shipping Rates & Delivery Estimates"
            >
              <p>
                We pride ourselves on fast fulfillment so you can get your
                supplements without the wait.
              </p>
              <ul>
                <li><strong>Standard shipping time:</strong> 2 to 5 business days.</li>
                <li>
                  <strong>Shipping costs</strong> are calculated and
                  displayed at checkout, with free standard shipping on
                  qualifying orders above the local currency threshold.
                </li>
                <li>
                  Delivery can occasionally be delayed by weather, carrier
                  issues, or peak holiday seasons.
                </li>
              </ul>
            </SectionCard>

            <SectionCard
              id="tracking"
              icon={Package}
              eyebrow="Stay in the loop"
              title="Shipment Confirmation & Order Tracking"
            >
              <p>
                You'll receive a shipment confirmation email as soon as your
                order ships, including your tracking number. Tracking
                numbers activate within <strong>24 hours</strong>, so you can
                follow your package until it arrives.
              </p>
            </SectionCard>

            <SectionCard
              id="quality"
              icon={BadgeCheck}
              eyebrow="What you're getting"
              title="US-Based Brands & Quality Assurance"
            >
              <p>
                We source directly from top US-based supplement brands. Every
                product is stored in temperature-controlled environments to
                preserve maximum efficacy and freshness before it's packed
                and shipped to you.
              </p>
            </SectionCard>

            <SectionCard
              id="damages"
              icon={ShieldCheck}
              eyebrow="If something goes wrong"
              title="Damages & Lost Packages"
            >
              <p>
                Promolecules™ is not liable for products damaged or lost in
                transit — but we still want you to have a great experience.
              </p>
              <ul>
                <li>
                  If your order arrives damaged, contact the shipping
                  carrier or our support team to file a claim.
                </li>
                <li>
                  Please keep all packaging materials and damaged goods
                  until your claim is resolved.
                </li>
              </ul>
              <p>
                For assistance, reach us at{" "}
                <a href="mailto:info@promolecules.com">
                  info@promolecules.com
                </a>
                .
              </p>
            </SectionCard>

            <SectionCard
              id="address"
              icon={MapPin}
              eyebrow="Double-check before checkout"
              title="Incorrect Shipping Addresses"
            >
              <p>
                Customers are responsible for entering an accurate shipping
                address at checkout. Promolecules™ cannot be held
                responsible for packages sent to an incorrect address
                provided by the buyer.
              </p>
              <p>
                If a package is returned to us due to an incorrect address,
                the customer is responsible for any additional shipping fees
                to resend the order.
              </p>
            </SectionCard>

            <SectionCard
              id="international"
              icon={Globe2}
              eyebrow="Beyond our borders"
              title="International Shipping"
            >
              <p>
                We ship internationally. Standard shipping times (2–5 days)
                apply to domestic orders only — international shipments
                typically take <strong>7 to 21 business days</strong>.
              </p>
              <p>
                Your order may be subject to import duties and taxes,
                including VAT, applied once it reaches your destination
                country. Promolecules™ is not responsible for these
                charges.
              </p>
            </SectionCard>

            <SectionCard
              id="returns"
              icon={RotateCcw}
              eyebrow="Changed your mind?"
              title="How to Initiate a Return"
            >
              <ol className="list-decimal space-y-3 pl-5 marker:text-red-700 marker:font-medium">
                <li>
                  <strong>Contact us</strong> — Email{" "}
                  <a href="mailto:info@promolecules.com">
                    info@promolecules.com
                  </a>{" "}
                  with your order number and the reason for your return.
                </li>
                <li>
                  <strong>Get approved</strong> — Once approved, we'll send
                  a Return Merchandise Authorization (RMA) number with
                  instructions on where to send your package.
                </li>
                <li>
                  <strong>Pack and ship</strong> — Securely pack the
                  unopened items and clearly write the RMA number on the
                  outside of the package.
                </li>
              </ol>
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-[14px] text-red-900">
                <strong>Please note:</strong> return shipping costs are the
                customer's responsibility unless the return is due to our
                error, and shipping costs are non-refundable. We recommend
                using a trackable service or shipping insurance, as we
                can't guarantee receipt of returned items.
              </div>
            </SectionCard>

            <SectionCard
              id="contact"
              icon={Mail}
              eyebrow="We're here to help"
              title="Questions About Your Shipment?"
            >
              <p>
                If you have any questions or concerns about your order's
                shipping status, our customer support team is happy to
                help.
              </p>
              <a
                href="mailto:info@promolecules.com"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors "
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