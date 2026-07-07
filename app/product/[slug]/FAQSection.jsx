import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection({ faqs }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 font-semibold text-sm uppercase tracking-wider">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-100">
            Everything You Need to Know About{" "}
          </h2>

          <p className="mt-4 text-gray-200 max-w-3xl mx-auto">
            Find answers to the most common questions ,
            ingredients, usage, benefits, safety, and performance.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 overflow-hidden bg-gray-200 shadow-sm transition-all"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-semibold text-lg text-gray-900 pr-5">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`w-6 h-6 text-red-600 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  open === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-8">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}