'use client';
import { useState } from "react";
import {
  ChevronDown,
  Plus,
  Minus,
  Zap,
  Flame,
  ShieldPlus,
  Battery,
  Droplets,
  Check,
  ArrowRight,
} from "lucide-react";

/* ---------------------------------- DATA ---------------------------------- */

const products = [
  {
    name: "Father of Insane™",
    tag: "Ultra High-Stim Pre-Workout",
    icon: Flame,
    dose: "5200",
    doseUnit: "mg blend",
    stat2: { v: "450mg", l: "Caffeine matrix" },
    stat3: { v: "8–10h", l: "Clean energy" },
    tech: [
      "Beta-Alanine",
      "Dual Creatine (Monohydrate + CreaCl™)",
      "L-Citrulline",
      "2XCAFF™ / Citra Caff™",
      "CitraSyn 30™",
      "Alpha Yohimbine",
      "Huperzine-A",
    ],
  },
  {
    name: "Thermo Nuke XT™",
    tag: "Strongest Fat Destroyer",
    icon: Flame,
    dose: "650",
    doseUnit: "mg blend",
    stat2: { v: "4-way", l: "Metabolic pathway" },
    stat3: { v: "Thermo", l: "Upregulation" },
    tech: [
      "CitraSyn 50™",
      "2XCAFF™",
      "GBBxt (Gamma-Butyrobetaine)",
      "Yohimbine Bark",
      "Green Tea EGCG",
      "B6 / B12 Complex",
    ],
  },
  {
    name: "Warflex™",
    tag: "High-Stim Test Booster Pre-Workout",
    icon: Zap,
    dose: "395",
    doseUnit: "mg XANCAFF™",
    stat2: { v: "Boron", l: "Citrate support" },
    stat3: { v: "8–10h", l: "Extreme pumps" },
    tech: [
      "Boron Citrate",
      "Alpha GPC",
      "Eria Jarensis",
      "X8TRA Pump Blend",
      "L-Theanine",
      "CitraSyn 50™",
      "Multi-Source Caffeine",
    ],
  },
  {
    name: "Inopower-R™",
    tag: "Russian-Inspired ATP Booster",
    icon: Battery,
    dose: "600",
    doseUnit: "mg ATP blend",
    stat2: { v: "0", l: "Stimulants" },
    stat3: { v: "0", l: "Jitters" },
    tech: [
      "Adenosine 5-Triphosphate",
      "Hypoxanthine Riboside (Inosine)",
      "Taurine",
      "B6 — 50mg",
      "B12 — 500mcg",
    ],
  },
  {
    name: "HydraPump+™",
    tag: "Liquid Glycerol Hydration Matrix",
    icon: Droplets,
    dose: "10",
    doseUnit: "ml glycerol",
    stat2: { v: "3g", l: "Citrulline Malate" },
    stat3: { v: "Zero", l: "Bloat pumps" },
    tech: [
      "Liquid Glycerol (10ml)",
      "Citrulline Malate 2:1",
      "Pink Himalayan Salt",
      "Magnesium Glycinate",
      "Potassium",
    ],
  },
];

const audience = [
  ["Athletes Who Train With Intent", "Not gym tourists"],
  ["High CNS Demand Lifters", "Powerlifters, bodybuilders, strength athletes"],
  ["Performance-Driven Individuals", "Repeatable results, not temporary spikes"],
  ["Advanced Stimulant Users", "Built tolerance to standard pre-workouts"],
  ["Competitive Physique Athletes", "Contest prep, photo shoots, definition phases"],
  ["Endurance Warriors", "Marathon runners, fighters, CrossFit competitors"],
];

const agenda = [
  "Bio-Engineered Performance Logic",
  "Double-Strength Effect",
  "First-Dose Visible Impact",
  "Long-Session Endurance",
  "Zero Nervous System Overload",
  "Hydration-Safe Design",
  "Stimulant-Intelligent Formulas",
  "Strength-Progressive Engineering",
  "USA GMP Certified",
  "Heavy-Metals Cleared",
  "Built for Progression",
];

const faqs = [
  {
    q: "What are Promolecules™?",
    a: "Promolecules™ is a premium sports nutrition brand that develops performance supplements for athletes, bodybuilders, powerlifters, fitness enthusiasts & serious gym users. Formulated with select ingredients to support energy, endurance, strength, muscle pumps, hydration and workout performance. Our products are made in a GMP-certified facility in the USA.",
  },
  {
    q: "Are Promolecules™ supplements available for sale in India?",
    a: "Yes. Promolecules™ products are available for our customers across India on our official website. We offer high-quality sports supplements for Indian fitness enthusiasts who want trusted ingredients, consistent quality and performance-based formulas.",
  },
  {
    q: "Which Promolecules™ pre-workout is best for beginners?",
    a: "Your choice depends on your training experience and caffeine tolerance. Warflex™ combines pre-workout performance with advanced pump support. Inopower-R™ is a non-stimulant ATP energy formula suitable for people who prefer energy without relying on high caffeine. Always begin with the recommended serving size to assess your tolerance.",
  },
  {
    q: "Why is Promolecules™ unique from other supplement brands?",
    a: "Promolecules™ emphasizes balance in its products rather than simply enhancing the amount of stimulants. All of their products are produced to meet your training requirements, like energy, endurance, hydration, muscle pumps, and workout performance, through proper ingredients without fillers or unnecessary stimulants added.",
  },
  {
    q: "Which of the Promolecules™ products are best suited for muscle pumps and hydration?",
    a: "HydraPump+™ is made for those who require better muscle pumps, hydration, and endurance for the sake of training. It contains Liquid Glycerol, Citrulline Malate, electrolytes, potassium, magnesium, and Himalayan Salt to improve your hydration and performance while doing exercises.",
  },
];

const extraFaqs = [
  {
    q: "Is Promolecules™ built for casual gym-goers?",
    a: "No. The formulas are engineered for athletes who train with intent — high CNS demand lifters, competitive physique athletes, endurance warriors and advanced stimulant users who've built tolerance to standard pre-workouts.",
  },
  {
    q: "What does 'Dual-Layer Performance' mean?",
    a: "It's the engineering model behind every formula: immediate output (energy, pumps, fat mobilization, explosive strength from dose one) paired with sustained cellular support (ATP production, hydration balance, electrolyte stability, neurological sharpness).",
  },
  {
    q: "Are the products manufactured safely?",
    a: "All Promolecules™ formulas are produced in a USA GMP-certified facility and are heavy-metal cleared, so quality and consistency are controlled at every batch.",
  },
];

/* --------------------------------- PIECES --------------------------------- */

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-red-500">
      <span className="h-1.5 w-1.5 bg-red-500" />
      {children}
    </span>
  );
}

function ReadoutStrip({ items }) {
  return (
    <div className="flex flex-wrap items-stretch divide-x divide-white/15 border border-white/15 bg-black text-white font-mono">
      {items.map((it, i) => (
        <div key={i} className="flex-1 min-w-[120px] px-5 py-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            {it.l}
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white mt-1">
            {it.v}
            <span className="text-red-500">.</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductCard({ p }) {
  const Icon = p.icon;
  return (
    <div className="group border border-white/15 bg-white/[0.03] hover:border-red-500 transition-colors duration-300">
      <div className="flex items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center h-9 w-9 border border-white/15 group-hover:border-red-500 group-hover:text-red-500 transition-colors">
            <Icon size={16} />
          </span>
          <div>
            <h3 className="font-bold text-white leading-tight">{p.name}</h3>
            <p className="text-xs text-white/50">{p.tag}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-white/10 border-y border-white/10 mt-6 font-mono">
        <div className="px-4 py-4">
          <div className="text-2xl font-bold text-white">
            {p.dose}
            <span className="text-red-500">.</span>
          </div>
          <div className="text-[10px] uppercase tracking-wider text-white/40 mt-1">
            {p.doseUnit}
          </div>
        </div>
        <div className="px-4 py-4">
          <div className="text-2xl font-bold text-white">{p.stat2.v}</div>
          <div className="text-[10px] uppercase tracking-wider text-white/40 mt-1">
            {p.stat2.l}
          </div>
        </div>
        <div className="px-4 py-4">
          <div className="text-2xl font-bold text-white">{p.stat3.v}</div>
          <div className="text-[10px] uppercase tracking-wider text-white/40 mt-1">
            {p.stat3.l}
          </div>
        </div>
      </div>

      <div className="px-6 py-5">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
          Key Tech
        </div>
        <ul className="space-y-1.5">
          {p.tech.map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/70">
              <span className="mt-2 h-1 w-1 bg-red-500 shrink-0" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="flex items-start gap-3">
          <span className="text-red-500 font-mono text-xs mt-1.5 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-white font-medium text-[15px] sm:text-base leading-snug group-hover:text-red-500 transition-colors">
            {item.q}
          </span>
        </span>
        <span
          className={`shrink-0 rounded-full border border-white/15 p-1 transition-all duration-300 ${
            open ? "bg-white border-white rotate-180" : "group-hover:border-red-500"
          }`}
        >
          <ChevronDown size={16} className={open ? "text-black" : "text-white"} />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pl-8 pr-6 text-white/60 text-sm leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- PAGE --------------------------------- */

export default function PromoleculesSection() {
  const [showMore, setShowMore] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-black text-white font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-20 bg-black/90 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-black tracking-tight text-lg text-white">
            PROMOLECULES<span className="text-red-500">™</span>
          </span>
          <nav className="hidden sm:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-white/60">
            <a
              href="#arsenal"
              onClick={() => setExpanded(true)}
              className="hover:text-red-500 transition-colors"
            >
              Arsenal
            </a>
            <a
              href="#difference"
              onClick={() => setExpanded(true)}
              className="hover:text-red-500 transition-colors"
            >
              Difference
            </a>
            <a
              href="#faq"
              onClick={() => setExpanded(true)}
              className="hover:text-red-500 transition-colors"
            >
              FAQ
            </a>
          </nav>
          <button
            onClick={() => setExpanded(true)}
            className="text-xs font-bold uppercase tracking-wider bg-white text-black px-4 py-2.5 hover:bg-red-500 hover:text-white transition-colors"
          >
            Shop Now
          </button>
        </div>
      </header>

      {/* COLLAPSED TEASER — shown only while the page is collapsed */}
      {!expanded && (
        <section className="max-w-4xl mx-auto px-6 pt-24 pb-28 text-center">
          <Eyebrow>USA GMP-Certified Manufacturing</Eyebrow>
          <h1 className="mt-5 text-[11vw] sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight">
            Bio-Engineered Performance.
            <span className="text-red-500"> Without Compromise.</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-white/60 leading-relaxed">
            Enhanced bio-engineering with double-strength effectiveness —
            smart-dose formulas built to respect long-term performance,
            neurological balance, hydration control, and metabolic stability.
          </p>
          <button
            onClick={() => setExpanded(true)}
            className="group mt-10 inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-red-500 hover:text-white transition-colors"
          >
            Explore The Full Arsenal
            <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
          <div className="mt-6 text-xs text-white/40 font-mono">Heavy-Metal Cleared</div>
        </section>
      )}

      {/* FULL PAGE CONTENT — collapsed by default, expands on click */}
      <div
        className={`grid transition-all duration-700 ease-in-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {/* HERO */}
          <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
            <div className="flex items-start justify-between gap-6">
              <Eyebrow>USA GMP-Certified Manufacturing</Eyebrow>
              <button
                onClick={() => setExpanded(false)}
                className="shrink-0 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white/40 hover:text-red-500 transition-colors"
              >
                <ChevronDown size={14} className="rotate-180" />
                Collapse
              </button>
            </div>
            <h1 className="mt-5 text-[13vw] sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight max-w-4xl">
              Bio-Engineered Performance.
              <span className="text-red-500"> Without Compromise.</span>
            </h1>
            <p className="mt-6 max-w-xl text-white/60 leading-relaxed">
              Enhanced bio-engineering with double-strength effectiveness —
              without reckless overdosing. Smart-dose formulas built to
              respect long-term performance, neurological balance, hydration
              control, and metabolic stability.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#arsenal"
                className="flex items-center gap-2 bg-white text-black px-6 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-red-500 hover:text-white transition-colors"
              >
                Explore the Arsenal <ArrowRight size={15} />
              </a>
              <span className="text-xs text-white/40 font-mono">Heavy-Metal Cleared</span>
            </div>

            <div className="mt-14">
              <ReadoutStrip
                items={[
                  { l: "Formulas", v: "05" },
                  { l: "Max Blend", v: "5200mg" },
                  { l: "Caffeine Matrix", v: "450mg" },
                  { l: "Endurance", v: "8–10h" },
                  { l: "Overdosing", v: "Zero" },
                ]}
              />
            </div>
          </section>

          {/* MISSION */}
          <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[1fr_1.4fr] gap-10 border-t border-white/10">
            <div>
              <Eyebrow>The Mission</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Precision-driven.
                <br />
                Not profit-driven.
              </h2>
            </div>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Promolecules™ exists to redefine real performance nutrition in
                an industry drowning in shortcuts, fillers, and empty hype.
                Where ordinary supplement brands flood the market with poorly
                balanced stimulants and underdosed formulas, Promolecules™
                operates on a revolutionary principle: enhanced
                bio-engineering with double-strength effectiveness, without
                reckless overdosing.
              </p>
              <p>
                Every formula is smart-dose engineered — the very first dose
                delivers visible results, yet remains logically structured to
                respect long-term performance, neurological balance,
                hydration control, and metabolic stability.
              </p>
            </div>
          </section>

          {/* DIFFERENCE / DUAL-LAYER */}
          <section id="difference" className="bg-black text-white border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-16">
              <Eyebrow>The Difference</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight max-w-2xl leading-tight">
                High-performance bio-engineering — not the cheap supplement category.
              </h2>

              <div className="mt-10 grid sm:grid-cols-2 gap-px bg-white/10">
                <div className="bg-black p-8">
                  <div className="font-mono text-red-500 text-xs mb-3">LAYER 01</div>
                  <h3 className="text-xl font-bold mb-2">Immediate Output</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Energy, pumps, fat mobilization, explosive strength — from dose one.
                  </p>
                </div>
                <div className="bg-black p-8">
                  <div className="font-mono text-red-500 text-xs mb-3">LAYER 02</div>
                  <h3 className="text-xl font-bold mb-2">Sustained Cellular Support</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    ATP production, hydration balance, electrolyte stability, neurological sharpness.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm">
                {[
                  ["Inopower-R™", "Focuses on ATP-level energy, not caffeine addiction."],
                  ["HydraPump+™", "Liquid glycerol + full electrolyte restoration, not under-dosed powder blends that dehydrate muscle."],
                  ["Warflex™", "Synchronizes stim power, pump volume and hormone-support chemistry into one cohesive system."],
                  ["Father of Insane™", "Intense energy, laser-sharp focus and powerful workout intensity for athletes who demand maximum performance."],
                ].map(([name, desc], i) => (
                  <div key={i} className="flex gap-3 border-t border-white/10 pt-4">
                    <span className="text-red-500 shrink-0">→</span>
                    <p className="text-white/70">
                      <span className="text-white font-semibold">{name}</span> — {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ARSENAL */}
          <section id="arsenal" className="max-w-6xl mx-auto px-6 py-16">
            <Eyebrow>The Complete Arsenal</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Five formulas. Zero shortcuts.
            </h2>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <ProductCard key={i} p={p} />
              ))}
            </div>
          </section>

          {/* WHO WE BUILD FOR */}
          <section className="border-t border-white/10 bg-white/[0.02]">
            <div className="max-w-6xl mx-auto px-6 py-16">
              <Eyebrow>Who We Build For</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight max-w-2xl leading-tight">
                Not built for casual users.
              </h2>

              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                {audience.map(([title, desc], i) => (
                  <div key={i} className="bg-black p-6">
                    <ShieldPlus size={18} className="text-red-500 mb-3" />
                    <h3 className="font-bold text-white text-sm mb-1">{title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 max-w-2xl text-white/60 text-sm leading-relaxed border-l-2 border-red-500 pl-4">
                <span className="font-semibold text-white">Critical Understanding:</span>{" "}
                Real power is controlled, not careless. We don't create products for
                hype — we engineer solutions for progression.
              </p>
            </div>
          </section>

          {/* AGENDA */}
          <section className="max-w-6xl mx-auto px-6 py-16">
            <Eyebrow>The Promolecules™ Agenda</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight max-w-2xl leading-tight">
              Controlled intensity. Engineered, not guessed.
            </h2>

            <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
              {agenda.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="grid place-items-center h-5 w-5 bg-red-500 text-white shrink-0">
                    <Check size={12} />
                  </span>
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-10 text-xl sm:text-2xl font-black tracking-tight">
              Not Built for Illusion.{" "}
              <span className="text-red-500">Built for Athletes Who Expect Progression.</span>
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="border-t border-white/10 bg-white/[0.02] py-16 px-6">
            <div className="max-w-2xl mx-auto">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">
                Frequently Asked
                <br />
                Questions
              </h2>

              <div className="mt-10 border border-white/10 bg-black px-6 sm:px-8">
                {faqs.map((item, i) => (
                  <FaqItem key={i} item={item} index={i} />
                ))}

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    showMore ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {extraFaqs.map((item, i) => (
                      <FaqItem key={i} item={item} index={faqs.length + i} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="group flex items-center gap-2 border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-red-500 hover:border-red-500 hover:text-white"
                >
                  {showMore ? <Minus size={16} /> : <Plus size={16} />}
                  {showMore ? "View Less" : "View More"}
                </button>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="bg-black text-white/60 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="font-mono">
                PROMOLECULES™ — USA GMP-CERTIFIED — HEAVY-METAL CLEARED
              </span>
              <span>© {new Date().getFullYear()} Promolecules™. All rights reserved.</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}