"use client";

import OpenChallenge from "@/components/OpenChallenge";
import Link from "next/link";
import { useState, useEffect } from "react";

/* ─── DATA ─────────────────────────────────────────────── */

const PRODUCTS = [
  {
    id: "highstim",
    tag: "Extreme Energy",
    name: "HIGH-STIM PRE-WORKOUT",
    sub: "FATHER OF INSANE ",
    price: "₹2,499",
    originalPrice: "₹3,199",
    desc: "Our flagship formula engineered for experienced athletes who demand explosive energy, razor-sharp focus, and skin-splitting pumps. Half a scoop outperforms two scoops of the competition.",
    highlights: [
      "High-dose stimulant complex",
      "Laser focus & mental clarity",
      "Extreme muscle pumps",
      "No crash, no itch, no fillers",
    ],
    accent: "red",
    img: "/Promolecules/fatherofinsane/father-of-insane-pre-workout.webp",
    link: "/product/father-of-insane/",
  },
  {
    id: "pump",
    tag: "Maximum Pumps",
    name: "PROMOLECULES",
    sub: "WARFLEX",
    price: "₹2,199",
    originalPrice: "₹2,899",
    desc: "Stimulant-free powerhouse designed for evening training, double-dosing athletes, and anyone who wants massive muscle fullness and improved blood flow without caffeine or stimulants.",
    highlights: [
      "Stim-free — train any time",
      "Massive vascularity & fullness",
      "Stack with High Stim formula",
      "Clinically dosed nitric oxide",
    ],
    accent: "white",
    img: "/Promolecules/warflex/warflex.webp",
    link: "/product/warflex/",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Instant Energy & Mental Focus",
    body: "Experience a rapid increase in workout energy and mental clarity within minutes. Our advanced formula helps you stay focused, motivated, and ready to perform without unnecessary distractions.",
    icon: "⚡",
    label: "0–20 min",
  },
  {
    num: "02",
    title: "Highest Strength & Workout Intensity",
    body: "Build Strength, Endurance and Training Intensity. Survive heavy lifts, high volume workouts and demanding sessions without losing your performance.",
    icon: "💪",
    label: "20–60 min",
  },
  {
    num: "03",
    title: "Long-Lasting Performance",
    body: "Long lasting energy and intense muscle pumps and improved concentration during your workout. This formula is designed to keep you going longer during your training without the crash of typical pre-workouts.",
    icon: "🔥",
    label: "60–90 min",
  },
];

const FEATURES = [
  {
    icon: "🎯",
    title: "Precision Dosing",
    body: "Every ingredient is dosed at clinically effective levels. No proprietary blends hiding underdosed actives behind a label.",
  },
  {
    icon: "🔬",
    title: "Science-Backed Formula",
    body: "Premium ingredients selected through peer-reviewed research to support energy, endurance, focus, strength, and recovery.",
  },
  {
    icon: "🏆",
    title: "High Performance Design",
    body: "Formulated specifically for serious athletes, strength trainers, and bodybuilders seeking maximum, measurable results.",
  },
  {
    icon: "🛡️",
    title: "Strict Quality Standards",
    body: "Manufactured with rigorous quality control using carefully sourced, trusted ingredients — batch tested, every time.",
  },
];

const REVIEWS = [
  {
    name: "Arjun S.",
    city: "Mumbai",
    product: "High Stim",
    text: "Smooth energy with zero itching or crash. I've tried 10+ pre-workouts and this is the real deal. Half scoop is plenty.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    city: "Delhi",
    product: "High Stim",
    text: "The focus alone is worth every rupee. Dialled in from the first set to the last. Absolutely unreal tunnel vision.",
    rating: 5,
  },
  {
    name: "Vikram T.",
    city: "Bengaluru",
    product: "Pump Formula",
    text: "Stack the pump formula for evening sessions with the high stim in the morning. Vascularity is insane. Zero stimulants, full pumps.",
    rating: 5,
  },
  {
    name: "Priya K.",
    city: "Pune",
    product: "Pump Formula",
    text: "Finally a pre-workout I can train with at night without wrecking my sleep. The pumps are legit and I wake up recovered.",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "What is a high stim pre-workout?",
    a: "A high stim pre-workout is a performance supplement formulated with advanced stimulant and performance ingredients that support workout energy, focus, endurance, and intensity. Designed for experienced athletes and gym-goers who want to maximize their training performance during demanding workouts.",
  },
  {
    q: "Who should use Promolecules High Stim Pre-Workout?",
    a: "Ideal for experienced lifters, bodybuilders, strength athletes, and fitness enthusiasts wanting to improve workout intensity, mental focus, endurance, and muscle pumps. If you are new to pre-workouts or sensitive to stimulants, start with a smaller serving to assess your tolerance.",
  },
  {
    q: "When should I take my pre-workout?",
    a: "For best results, consume one serving approximately 20–30 minutes before your workout. This gives the ingredients enough time to support energy, focus, and training performance.",
  },
  {
    q: "Can beginners use this product?",
    a: "This formula is developed for individuals with regular training experience. Beginners should begin with a reduced serving size and consult a healthcare professional if they have concerns about stimulant-based supplements.",
  },
  {
    q: "Does this pre-workout support muscle pumps?",
    a: "Yes. Promolecules includes ingredients selected to support increased blood flow, hydration, and muscle pumps — helping you experience fuller muscles and better workout performance during every set.",
  },
  {
    q: "Will I experience an energy crash after my workout?",
    a: "The formula is designed to provide smooth, sustained workout energy. Individual experiences may vary depending on stimulant tolerance, hydration, nutrition, and overall health.",
  },
  {
    q: "Can I stack the High Stim and Pump formulas together?",
    a: "Yes — many athletes use the High Stim formula for morning sessions and the Pump Stim-Free formula for evening training. You can also stack both together for maximum energy and pump without doubling stimulant intake.",
  },
  {
    q: "Why choose Promolecules over other pre-workout brands?",
    a: "Promolecules focuses on science-backed formulations, premium ingredients, transparent labelling, and performance-driven nutrition. Every product is designed to improve workout energy, endurance, focus, and strength — without unnecessary fillers or proprietary blends.",
  },
];

/* ─── COMPONENTS ────────────────────────────────────────── */

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-red-500 text-sm">
          ★
        </span>
      ))}
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-3 flex justify-between items-center gap-4 group"
      >
        <span className="text-white font-semibold text-sm md:text-lg  group-hover:text-red-400 transition-colors leading-snug">
          {q}
        </span>
        <span
          className={`text-red-500 text-2xl font-thin flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="pb-6 text-gray-400 text-md leading-relaxed pr-8">{a}</p>
      )}
    </div>
  );
}

function HexPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.04]"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => {
          const x = col * 120 + (row % 2 === 0 ? 0 : 60);
          const y = row * 100;
          const pts = [0, 1, 2, 3, 4, 5]
            .map((i) => {
              const a = (Math.PI / 180) * (60 * i - 30);
              return `${x + 48 * Math.cos(a)},${y + 48 * Math.sin(a)}`;
            })
            .join(" ");
          return (
            <polygon
              key={`${row}-${col}`}
              points={pts}
              fill="none"
              stroke="#ff2020"
              strokeWidth="0.8"
            />
          );
        }),
      )}
    </svg>
  );
}

function ProductCard({ product }) {
  const isRed = product.accent === "red";
  return (
    <div
      className={`relative flex flex-col border ${isRed ? "border-red-600/60 bg-gradient-to-b from-red-950/30 to-black" : "border-zinc-700/60 bg-gradient-to-b from-zinc-900/60 to-black"} overflow-hidden group hover:scale-[1.01] transition-transform duration-300`}
    >
      {/* Product image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.img}
          alt={product.sub}
          className="w-full h-full object-contain object-center"
          //   style={{ filter: isRed ? "saturate(0.25) contrast(1.3)" : "saturate(0.1) contrast(1.4)" }}
        />
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        {/* Name */}
        <p
          className={`text-xs font-black tracking-[0.3em] uppercase mb-1 ${isRed ? "text-red-500" : "text-zinc-400"}`}
        >
          {product.name}
        </p>
        <h3 className="text-white font-black text-2xl leading-tight mb-1">
          {product.sub}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {product.desc}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-7">
          {product.highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2.5 text-xs text-gray-300"
            >
              <span
                className={`w-4 h-4 flex-shrink-0 flex items-center justify-center text-[9px] font-bold border ${isRed ? "border-red-600 text-red-500" : "border-zinc-500 text-zinc-400"}`}
              >
                ✓
              </span>
              {h}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="mt-auto">
          <div className="flex gap-3">
            <Link href={product.link}>
              <button
                className={`flex-1 font-black text-xs py-3.5  px-4 uppercase tracking-[0.15em] transition-all ${isRed ? "bg-red-600 hover:bg-red-500 text-white" : "bg-white hover:bg-zinc-200 text-black"}`}
              >
                Buy Now →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────── */



export default function Preworkout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
     <>
     
      
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Background Image */}
     <div className="absolute inset-0 hidden lg:block">
  <img
    src="/Father-of-insane.webp"
    alt="Athlete training"
    className="w-full h-full object-cover object-center"
  />
</div>

        {/* Optional Pattern */}
        <HexPattern />

        {/* Red Glow */}
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #dc2626, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 mr-8">
          <div className="flex justify-end">
            <div className="max-w-3xl text-left">
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-10 bg-red-500" />
                <span className="text-red-400 text-[10px] font-black tracking-[0.35em] uppercase">
                  Most Advanced High Stim Pre Workout Supplement
                </span>
              </div>

              <h1 className="font-black leading-none tracking-tight mb-3">
                <span className="block text-5xl uppercase  text-white">
                  Trusted High-Performance
                </span>
                <span className="block text-5xl uppercase text-red-500">
                  Sports Nutrition Brand
                </span>
                <span className="block text-3xl  text-zinc-200">
                  AVAILABLE NOW
                </span>
              </h1>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                Designed for the serious athlete, bodybuilder and high
                performance training. Promolecules give you explosive energy,
                laser focus, massive pumps and unparalleled endurance.
                <span className="text-red-400 font-bold">
                  {" "}
                  Promolecules is for people who want more out of every workout.
                  Our science-backed formulas are engineered to help you train
                  harder, recover stronger, and maximize performance without
                  compromise.
                </span>
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="bg-red-600 hover:bg-red-500 text-white font-black text-xs px-8 py-4 tracking-[0.2em] uppercase transition-all hover:scale-105"
                >
                  Shop Products →
                </a>

                <a
                  href="#how-it-works"
                  className="border border-zinc-700 hover:border-white text-zinc-300 hover:text-white font-bold text-xs px-8 py-4 tracking-widest uppercase"
                >
                  How It Works
                </a>
              </div>

              <div className="flex items-center gap-5 mt-10 pt-8 border-t border-zinc-700">
                <div className="flex -space-x-2">
                  {["A", "R", "V", "K", "P"].map((l, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-red-900/70 border-2 border-black flex items-center justify-center text-[10px] font-black text-red-300"
                    >
                      {l}
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-red-500 text-xs">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-zinc-300 mt-0.5">
                    Trusted by 10,000+ athletes across India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAT BAR ── */}
      <div className="bg-red-600 py-4 border-y border-red-500/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            ["½ Scoop", "Outperforms 2 Scoops"],
            ["0g", "Filler Ingredients"],
            ["100%", "Clinically Dosed"],
            ["Zero", "Proprietary Blends"],
          ].map(([s, l]) => (
            <div key={s}>
              <div className="text-xl font-black text-white">{s}</div>
              <div className="text-red-200 text-[10px] uppercase tracking-wider font-bold">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <section id="products" className="py-24 relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #ff2020 0, transparent 1px, transparent 70px), repeating-linear-gradient(90deg, #ff2020 0, transparent 1px, transparent 70px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Section header */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-red-500" />
              <span className="text-red-500 text-[10px] font-black tracking-[0.35em] uppercase">
                Performance Line
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  Two Formulas.
                  <br />
                  <span className="text-red-500">One Standard.</span>
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed mt-4 max-w-xl">
                  Whether you train on stimulants or stim-free, Promolecules has
                  a precision formula engineered for your training style. Both
                  deliver clinically dosed ingredients, zero fillers, and
                  uncompromising performance.
                </p>
              </div>
              <div className="flex-shrink-0">
                <p className="text-zinc-600 text-xs uppercase tracking-wider font-bold mb-1">
                  Compatible Stack
                </p>
                <p className="text-zinc-400 text-sm">
                  Combine both for maximum energy + maximum pumps
                </p>
              </div>
            </div>
          </div>

          {/* Product cards grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {/* Compare note */}
          <div className="mt-8 p-5 border border-zinc-800 bg-zinc-950/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛒</span>

              <div>
                <p className="text-white text-sm font-bold">
                  Explore More Products
                </p>

                <p className="text-zinc-500 text-xs">
                  Discover our complete range of premium supplements including
                  pre-workouts, fatburners,muscle hydration, and recovery
                  formulas designed to maximize your performance.
                </p>
              </div>
            </div>

            <Link
              href="/shop"
              className="bg-red-600 hover:bg-red-500 text-white font-black text-xs px-6 py-3 uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 flex-shrink-0"
            >
              Explore Products →
            </Link>
          </div>
        </div>
      </section>


{<OpenChallenge/>}


    

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 relative overflow-hidden">
        <HexPattern />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-red-500" />
              <span className="text-red-500 text-[10px] font-black tracking-[0.35em] uppercase">
                Professional Direction
              </span>
              <div className="h-px w-8 bg-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              The Biological Shift
            </h2>
            <p className="text-zinc-500 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              Three precision phases engineered to take you from warm-up to peak
              performance — and keep you locked there until the session is done.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-red-900/30 z-0" />
            {STEPS.map(({ num, title, body, icon, label }) => (
              <div
                key={num}
                className="relative z-10 bg-zinc-950 border border-zinc-800 p-8 hover:border-red-700/60 transition-colors group"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-6xl font-black text-red-600 leading-none select-none">
                    {num}
                  </span>
                  <div className="text-right">
                    <span className="text-2xl">{icon}</span>
                    <div className="text-[9px] text-red-500 font-black tracking-widest uppercase mt-1">
                      {label}
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-black text-lg mb-4 leading-tight group-hover:text-red-400 transition-colors">
                  {title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{body}</p>
                <div className="mt-6 h-0.5 w-10 bg-red-600 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BACKGROUND WRAPPER ================= */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image.jpeg"
            alt="Fitness Background"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* ================= QUOTE SECTION ================= */}
          <section className="py-28">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-16 bg-red-600"></div>

                <span className="text-red-500 text-[10px] font-black tracking-[0.4em] uppercase">
                  The Promolecules Promise
                </span>

                <div className="h-px w-16 bg-red-600"></div>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Train Harder. Recover Stronger.
                <br />
                <span className="text-red-500">Maximize Performance.</span>
              </h2>
            </div>
          </section>

          {/* ================= REVIEWS ================= */}
          <section id="reviews" className="pb-28">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-10 bg-red-500"></div>

                  <span className="text-red-500 text-[10px] font-black tracking-[0.35em] uppercase">
                    True Athletes. Real Responses.
                  </span>

                  <div className="h-px w-10 bg-red-500"></div>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-white">
                  What India's Fitness Freaks Are Saying
                </h2>

                <p className="text-zinc-300 mt-4">
                  Smooth energy, no itching, no crash — pure performance.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {REVIEWS.map(({ name, city, product, text, rating }) => (
                  <div
                    key={name}
                    className="relative bg-black/45 backdrop-blur-md border border-white/10 hover:border-red-500 transition-all duration-300 p-6"
                  >
                    {/* Quote */}
                    <div className="absolute top-4 right-5 text-6xl text-red-500/10 font-serif">
                      "
                    </div>

                    <StarRating count={rating} />

                    <span className="block mt-3 text-red-500 text-xs font-bold uppercase tracking-widest">
                      {product}
                    </span>

                    <p className="text-zinc-200 mt-4 leading-7 text-sm">
                      "{text}"
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                        {name[0]}
                      </div>

                      <div>
                        <h4 className="text-white font-semibold">{name}</h4>

                        <p className="text-zinc-400 text-sm">{city}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

  <section id="partners" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-8 lg:px-16 xl:px-24">
 
      {/* ── BLOCK 1 : Gym Owners & Retailers ── */}
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
 
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl order-1">
          <img
            src="/pertner1.webp"
            alt="Gym Partner"
            className="w-full h-64 sm:h-80 lg:h-[500px] object-cover hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/60" />
        </div>
 
        {/* Content */}
        <div className="order-2">
          <span className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold">
            For Gym Owners & Retailers
          </span>
 
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-4 leading-tight">
            PARTNER WITH THE BEST: FOR GYM OWNERS & RETAILERS
          </h2>
 
          <p className="text-zinc-400 mt-4 leading-7 sm:leading-8 text-sm sm:text-base">
            Whether you're a gym owner, supplement retailer, or fitness
            influencer, we have a structure built for your growth.
          </p>
 
          <button className="mt-8 w-full sm:w-auto bg-red-600 hover:bg-red-500 active:scale-95 transition-all px-8 py-4 text-sm font-bold uppercase tracking-wider text-white">
            Become a Partner →
          </button>
        </div>
 
      </div>
 
      {/* ── BLOCK 2 : Fitness Creators ── */}
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
 
        {/* Content — on mobile appears AFTER image; on lg appears first (left) */}
        <div className="order-2 lg:order-1">
          <span className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold">
            For Fitness Creators
          </span>
 
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-4 leading-tight">
            BUILD YOUR NAME WITH US: FOR EVERY FITNESS CREATOR
          </h2>
 
          <p className="text-zinc-400 mt-4 leading-7 sm:leading-8 text-sm sm:text-base">
            We don't care about your followers, we care about your Training
            Intensity. At Promolecules™ we don't do free products or advance
            payments, because our formulations are premium-grade performance
            tools. We want partners who believe in the Strength Culture enough
            to invest in it themselves.
          </p>
 
          <Link href="/contact-us">
            <button className="mt-8 w-full sm:w-auto bg-red-600 hover:bg-red-500 active:scale-95 transition-all px-8 py-4 text-sm font-bold uppercase tracking-wider text-white">
              Apply Now →
            </button>
          </Link>
        </div>
 
        {/* Image — on mobile appears FIRST (top); on lg appears second (right) */}
        <div className="relative overflow-hidden rounded-xl order-1 lg:order-2">
          <img
            src="/reels-image.webp"
            alt="Fitness Creator"
            className="w-full h-64 sm:h-80 lg:h-[500px] object-cover hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-black/60" />
        </div>
 
      </div>
    </section>

      {/* ───────── REAL ATHLETES SECTION ───────── */}
      <section className="relative py-24 bg-black overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7f1d1d20,transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-red-600" />
              <span className="text-red-500 text-[11px] uppercase tracking-[0.35em] font-black">
                Real Testimonials
              </span>
              <div className="h-px w-10 bg-red-600" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Real Athletes.
              <span className="text-red-500"> Real Reactions.</span>
              <br />
              Real High-Stim Experience.
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-zinc-400 leading-7">
              No scripts. No paid actors. Just genuine reactions from athletes,
              bodybuilders, and fitness enthusiasts who train with Promolecules.
            </p>
          </div>

          {/* Videos */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all duration-500 hover:-translate-y-2">
              {" "}
              <video
                controls
                preload="metadata"
                className="w-full h-[550px] object-cover bg-black"
              >
                <source src="/interview1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-5">
                <h3 className="text-white font-bold">First Scoop Experience</h3>

                <p className="text-zinc-400 text-sm mt-2">
                  Watch the instant reaction after trying Promolecules High-Stim
                  Pre-Workout.
                </p>
              </div>
            </div>

            {/* Video 2 */}
               <div className="group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all duration-500 hover:-translate-y-2">
              {" "}
              <video
                controls
                preload="metadata"
                className="w-full h-[550px] object-cover bg-black"
              >
                <source src="/interview2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="p-5">
                <h3 className="text-white font-bold">Intense Workout Review</h3>

                <p className="text-zinc-400 text-sm mt-2">
                  See how athletes perform during heavy lifting and
                  high-intensity sessions.
                </p>
              </div>
            </div>

            {/* Video 3 */}
             <div className="group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all duration-500 hover:-translate-y-2">
              {" "}
              <video
                controls
                preload="metadata"
                className="w-full h-[550px] object-cover bg-black"
              >
                <source src="/interview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-5">
                <h3 className="text-white font-bold">Athlete Feedback</h3>

                <p className="text-zinc-400 text-sm mt-2">
                  Honest reviews from real fitness enthusiasts across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-14 bg-black border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-red-500" />
              <span className="text-red-500 text-[10px] font-black tracking-[0.35em] uppercase">
                Got Questions
              </span>
              <div className="h-px w-8 bg-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-500 text-sm mt-3">
              Everything you need to know before your first scoop.
            </p>
          </div>
          <div>
            {FAQS.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
