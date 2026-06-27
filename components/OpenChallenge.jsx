import {
  Gauge,
  ShieldCheck,
  FlaskConical,
  FileText,
  Check,
} from "lucide-react";

const features = [
  {
    icon: <Gauge className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Precision Dosing",
    desc: "All ingredients are dosed at effective levels for maximum workout performance and consistency",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Science-Backed Ingredients",
    desc: "Premium ingredients selected through research to support energy, endurance, focus, strength, and recovery.",
  },
  {
    icon: <FlaskConical className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "High Performance Formula",
    desc: "Designed specifically for serious athletes, strength trainers, and bodybuilders seeking maximum results.",
  },
  {
    icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Premium Quality",
    desc: "Manufactured with strict quality standards using carefully sourced ingredients you can trust.",
  },
];

export default function OpenChallenge() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">

      {/* Background */}
      <img
        src="/homebgimg.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for readability on all screens */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT CONTENT ── */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-600 text-white text-[10px] sm:text-xs font-bold flex items-center justify-center flex-shrink-0">
                Our
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider uppercase text-white font-semibold leading-tight">
                half scoop outperforms other brands' 2 scoops
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5 sm:mb-8">
              More Performance in Every Scoop
            </h2>

            {/* Body */}
            <p className="text-sm sm:text-base text-zinc-300 leading-7 sm:leading-8">
              Way too many pre-workouts have way too much product per serving with
              inconsistent results. Promolecules uses concentrated, clinically dosed
              ingredients to maximize performance and minimize unnecessary fillers.
              <br className="hidden sm:block" />
              <span className="block mt-3 sm:mt-0">
                Our formulas are precision engineered to deliver explosive energy, greater
                focus, increased endurance and long-lasting muscle pumps — so you can
                perform at your peak from the first set to the last.
              </span>
            </p>

            {/* Checklist */}
            <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-5">
              {[
                "Clinically Dosed Ingredients",
                "Advanced Performance Formula",
                "Powerful Energy & Focus",
                "Long-Lasting Pumps",
                "No Proprietary Blends",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-white font-semibold text-sm sm:text-base"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-8 sm:mt-12 w-full sm:w-auto bg-red-500 hover:bg-red-600 active:scale-95 transition-all px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg font-bold text-white text-sm sm:text-base">
              Grab Now
            </button>

          </div>

          {/* ── RIGHT CARDS ── */}
          {/*
            On mobile  : single column, cards sit flat (no negative top margin).
            On sm–md   : 2-column grid, cards sit flat.
            On lg+     : 2-column grid with the classic floating-icon effect.
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-4 sm:mt-10 lg:mt-0">

            {features.map((item, idx) => (
              <div
                key={item.title}
                className={`
                  bg-white rounded-2xl p-6 sm:p-8 text-center shadow-2xl
                  hover:-translate-y-2 sm:hover:-translate-y-3 transition duration-500
                  ${/* push even cards down on lg for stagger effect */ ""}
                  ${idx % 2 === 1 ? "lg:mt-10" : ""}
                `}
              >
                {/* Icon circle — floats on lg, inline on smaller screens */}
                <div className="
                  w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                  rounded-full bg-red-500 flex items-center justify-center
                  mx-auto shadow-xl mb-5 sm:mb-8
                  lg:-mt-16
                ">
                  {item.icon}
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-5 leading-tight">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-6 sm:leading-8">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}