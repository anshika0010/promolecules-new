"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is HydraPump+™?",
    answer:
      "HydraPump+™ is a liquid hydration and muscle pump supplement containing Liquid Glycerol, Citrulline Malate, and electrolytes that support hydration, endurance, blood flow, and workout performance.",
  },
  {
    question: "Who should use HydraPump+™?",
    answer:
      "HydraPump+™ is perfect for bodybuilders, powerlifters, endurance athletes, runners, cyclists, CrossFit athletes, and anyone looking to increase hydration and muscle pumps.",
  },
  {
    question: "What does Liquid Glycerol do?",
    answer:
      "Liquid Glycerol helps muscles retain more water, improving hydration, endurance, muscle fullness, and workout performance.",
  },
  {
    question: "Why is Citrulline Malate included?",
    answer:
      "Citrulline Malate increases the production of nitric oxide, which increases blood flow, muscle pumps, oxygen delivery, and endurance during training.",
  },
  {
    question: "Can HydraPump+™ be taken every day?",
    answer:
      "Yes. HydraPump+™ can be used daily as directed to support hydration and athletic performance.",
  },
  {
    question: "Is HydraPump+™ sugar-free?",
    answer:
      "Yes. HydraPump+™ is zero sugar and formulated to deliver hydration without the extra calories.",
  },
  {
    question: "Can I stack HydraPump+™ with pre-workout supplements?",
    answer:
      "Yes. HydraPump+™ works well alongside stimulant or non-stimulant pre-workout supplements to enhance hydration and muscle pumps.",
  },
  {
    question: "Does HydraPump+™ help prevent muscle cramps?",
    answer:
      "Yes. The electrolyte blend containing sodium, potassium, magnesium, and Pink Himalayan Salt supports fluid balance and healthy muscle function, helping reduce the risk of exercise-related cramps.",
  },
  {
    question: "Can vegetarians use HydraPump+™?",
    answer:
      "Yes. HydraPump+™ is a liquid supplement and is vegetarian-friendly.",
  },
  {
    question: "What is the best time to take HydraPump+™?",
    answer:
      "For maximum benefit, take HydraPump+™ 20–30 minutes before exercise. During long endurance sessions, consume the recommended servings to maintain hydration and performance.",
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-medium text-gray-900">
          {faq.question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pb-5 pr-8">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Image */}
        <div className="relative w-full aspect-[5/5] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/Promolecules/Hydrapump/hydrapump-faq.jpeg"
            alt="Soursop fruit and wellness"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Right: FAQs */}
        <div>
          <span className="inline-block text-red-500 font-semibold text-xl tracking-wide uppercase mb-3">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-600 mb-8">
            Everything you need to know about Soursop and how it fits into
            your wellness routine. Can't find what you're looking for?{" "}
            <a href="/contact-us" className="text-emerald-700 underline">
              Reach out to us
            </a>
            .
          </p>

          <div>
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}