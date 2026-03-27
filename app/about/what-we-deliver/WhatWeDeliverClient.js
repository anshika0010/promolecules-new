// app/about/what-we-deliver/WhatWeDeliverClient.js
"use client";
import WhatWeDeliver from "@/components/about/WhatWeDeliver";
import Image from "next/image";

export default function WhatWeDeliverClient({ jsonld }) {
  return (
    <>
      {jsonld && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonld }}
        />
      )}

      <section className="relative max-w-9xl mx-auto min-h-[50vh] lg:min-h-[100vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/whatwedeliver.webp"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center  justify-end text-center px-6">
          <h1 className="text-4xl creepster-regular sm:text-7xl lg:text-9xl font-extrabold tracking-wide uppercase">
            <span className="text-white">WHAT WE</span>{" "}
            <span className="text-red-600">DELIVER</span>
          </h1>
        </div>
      </section>

      <WhatWeDeliver />
    </>
  );
}