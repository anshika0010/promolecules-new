import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src="/candle.png"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
 <div className="absolute inset-0 bg-black/70"></div>
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl creepster-regular">
          <span className="block text-white">LET'S GET</span>
          <span className="block text-white">
            IN <span className="text-red-600">TOUCH</span>
          </span>
        </h1>
        <Link
          href="/contact/contact-us"
          className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded-full text-xs uppercase tracking-wider font-semibold"
        >
          Contact
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
