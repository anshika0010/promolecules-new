'use client';
import ComparisonSection from "@/components/about/ComparisonSection";
import FAQSection from "@/components/about/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";




export default function page() {
  return (
    <>
     
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      

      {/* Background Image */}
      <Image
        src="/faq.png" // 👈 replace with your skull image
        alt="Background"
        fill
        priority
        className="absolute inset-0 w-full h-full object-fit"
      />


      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 py-20 flex flex-col justify-center min-h-screen">
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Heading */}
            <h2
              className="text-2xl md:text-4xl lg:text-5xl creepster-regular leading-tight"
              
            >
              WHY{" "}
              <span className="text-red-600">
                PROMOLECULES™
              </span>{" "}
              STANDS ABOVE <br />
              EVERY CHEAP SUPPLEMENT BRAND
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-300 anton-regular font-bold text-sm md:text-base max-w-lg leading-relaxed uppercase">
              The global supplement market suffers from what we call formula
              degradation syndrome where products lose effectiveness within
              3–14 days due to stimulant cycling manipulation and batch
              instability corruption.
            </p>

            {/* Button */}
            <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 transition text-sm uppercase tracking-wide font-semibold rounded-full">
              Read More
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center md:justify-end">
            
            {/* Big FAQ Text */}
            <h1
              className="text-[100px] md:text-[160px] lg:text-[200px] creepster-regular text-red-600 opacity-90 leading-none"
             
            >
              FAQ
            </h1>
          </div>
        </div>

        {/* Bottom FAQ Subtitle */}
        <div className="mt-10 md:mt-0 md:absolute bottom-16 right-16 text-right">
          <h3 className="text-2xl md:text-4xl anton-regular font-bold uppercase">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-400 text-md font-bold creepster-regular  uppercase tracking-wide">
            Answer all frequently asked questions. Still confused?
            <br /> Faqs. Grows with the guts
          </p>
        </div>

      </div>
    </section>
    <FAQSection/>
    <ComparisonSection/>
     <NewsletterSection/>
    </>
  );
}
