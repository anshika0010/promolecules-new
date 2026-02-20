import Image from "next/image";

export default function WarningTape() {
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] w-full overflow-hidden bg-black">
      {/* Background grain */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_60%)] opacity-40" />

      {/* Top Right Warning Text */}
      <div
        className="
        uppercase
        absolute 
        top-8 sm:top-120 lg:top-90 
        right-4 sm:right-8 lg:right-12 
        max-w-xs sm:max-w-md lg:max-w-lg 
        text-right 
        text-xs sm:text-xs lg:text-md
        font-extrabold 
        text-white/70 
        tracking-wide 
        leading-relaxed
      "
      >
      The supplement industry faces a silent crisis—adulteration. Studies reveal that nearly 70% of
budget supplements contain less active ingredient than claimed, with some containing
harmful fillers or banned substances. This isn't just about wasted money; it's about your
health and performance goals being sabotaged by inferior products.

      </div>

      {/* Bottom Left Warning Text */}
      <div
        className="
        absolute 
        bottom-6 sm:bottom-8 lg:bottom-10 
        left-4 sm:left-8 lg:left-10 
        max-w-xs sm:max-w-sm lg:max-w-md 
        text-xs sm:text-xs lg:text-md 
        font-extrabold 
        text-white/70 
        tracking-wide 
        leading-relaxed
      "
      >
        WARNING: THIS PRODUCT IS INTENDED FOR ADULTS ONLY.
        <br />
        NOT RECOMMENDED FOR CHILDREN, PREGNANT OR LACTATING WOMEN.
        <br />
        CONSULT A PHYSICIAN BEFORE USE IF YOU HAVE ANY MEDICAL CONDITION.
      </div>

      {/* Blood Tape 1 */}
      <div
        className="absolute right-[-10%] top-[30%] 
                w-[130%] 
                rotate-[-15deg] 
                flex justify-end"
      >
        <Tape />
      </div>

      {/* Blood Tape 2 */}
      <div
        className="absolute right-[-10%] top-[55%] 
                w-[130%] 
                rotate-[15deg] 
                flex justify-end"
      >
        <Tape reverse />
      </div>
    </section>
  );
}

/* Tape Component */
function Tape({ reverse = false }) {
  return (
    <div
      className="
        relative 
        h-14 sm:h-16 lg:h-20 
        overflow-hidden 
        bg-[url('/tape2.png')]
        bg-cover 
        bg-center
        shadow-[0_10px_30px_rgba(255,0,0,0.25)]
      "
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Marquee */}
      <div
        className={`relative z-10 flex h-full w-max items-center whitespace-nowrap 
        font-extrabold tracking-widest uppercase text-white
        text-xs sm:text-sm lg:text-base
        ${
          reverse
            ? "animate-[marquee_18s_linear_infinite_reverse]"
            : "animate-[marquee_18s_linear_infinite]"
        }`}
      >
        <TapeText />
        <TapeText />
      </div>
    </div>
  );
}

function TapeText() {
  return (
    <div className="flex creepster-regular text-base sm:text-lg lg:text-2xl font-bold gap-8 sm:gap-12 lg:gap-16 px-6 sm:px-8 lg:px-10">
      <span>Father of Insane</span>
      <span>Warning</span>
      <span>Thermo Nuker XT</span>
      <span>Intimidator</span>
      <span>Hydra Pump</span>
      <span>Warning</span>
      <span>Thermo Nuker XT</span>
    </div>
  );
}
