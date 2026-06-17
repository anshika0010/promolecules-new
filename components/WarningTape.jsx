import Image from "next/image";

export default function WarningTape() {
  return (
<section className="relative min-h-[320px] sm:min-h-[600px] lg:min-h-[530px] max-w-9xl mx-auto bg-black overflow-hidden">

  {/* ================= MOBILE UI ================= */}
  <div className="md:hidden flex flex-col px-4 py-2 space-y-8">



    {/* Tape */}
    <div className="rotate-[-5deg]">
      <Tape />
    </div>

    <div className="rotate-[5deg]">
      <Tape reverse />
    </div>

    {/* Bottom Content */}
    <div className="text-center">
      <p className="text-red-600 font-bold text-xl text-base mb-1 ">
        Important Safety Information
      </p>
      <p className="global-text-style  leading-relaxed">
        THIS PRODUCT IS INTENDED FOR ADULTS ONLY. NOT RECOMMENDED FOR CHILDREN,
        PREGNANT & LACTATING WOMEN.
      </p>
    </div>

  </div>

  {/* ================= DESKTOP UI ================= */}
  <div className="hidden md:block">

    {/* Top Right Text */}
    <div className="absolute top-40 right-8 lg:top-50 lg:right-30 max-w-md text-right z-20">
      <h4 className="text-red-600 font-bold text-xl text-base  ">
        The Hidden Supplement Crisis
      </h4>
      <p className="global-text-style  text-white/70 leading-relaxed">
        The supplement industry faces a silent crisis—adulteration. Studies reveal
        that nearly 70% of budget supplements contain less active ingredient than claimed.
      </p>
    </div>

    {/* Bottom Left Text */}
    <div className="absolute bottom-30 left-40 max-w-md z-20">
      <p className="text-red-600 font-bold text-xl text-base mb-1 ">
        Important Safety Information
      </p>
      <p className="global-text-style text-white/70 leading-relaxed">
        THIS PRODUCT IS INTENDED FOR ADULTS ONLY. NOT RECOMMENDED FOR CHILDREN,
        PREGNANT & LACTATING WOMEN.
      </p>
    </div>

    {/* Tapes */}
    <div className="absolute right-0 top-[30%] w-[130%] rotate-[-5deg]">
      <Tape />
    </div>

    <div className="absolute right-0 top-[50%] w-[130%] rotate-[5deg]">
      <Tape reverse />
    </div>

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
        bg-[url('/promolecules-tape.webp')]
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
      <span>Thermo Nuke XT</span>
      <span>Warflex</span>
      <span>Hydra Pump</span>
          <span>Father of Insane</span>
      <span>Warning</span>
      <span>Thermo Nuke XT</span>
      <span>Warflex</span>
      <span>Hydra Pump</span>
    </div>
  );
}
