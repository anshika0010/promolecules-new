"use client";
import WhatWeDeliver from "@/components/about/WhatWeDeliver";
import Image from "next/image";


export default function Page() {
  return (
    <>
<section className="relative w-full min-h-screen overflow-hidden">
  
  <Image
    src="/whatwedeliver.png"
    alt="Hero Background"
    fill
    priority
    className="object-cover object-center"
  />

  <div className="absolute inset-0 bg-black/60" />

</section>

    <WhatWeDeliver/>
    </>
  );
}
