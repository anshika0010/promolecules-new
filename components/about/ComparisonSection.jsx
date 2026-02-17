import { Check } from "lucide-react";

export default function ComparisonSection() {
  const rows = [
    {
      factor: "STIMULANT DOSING CYCLE PROTOCOL",
      gray: "RANDOMIZED PHASE X",
      pro: "DISSOLVED FORMULA INTEGRITY",
    },
    {
      factor: "NEURAL ADAPTATION REGRESSIONS",
      gray: "7–14 DAY TOLERANCE SPIKE",
      pro: "SUSTAINED NEURAL RECEPTOR MODULATION",
    },
    {
      factor: "CARDIOVASCULAR SAFETY CEILING",
      gray: "UNLABELED STIMULANT DOSING",
      pro: "ISO-COMPLIANT VASCULARIZED BALANCE",
    },
    {
      factor: "THERMOGENIC PATHWAY DIVERSITY",
      gray: "SINGLE-JAW METABOLISM / BETA PATHWAY",
      pro: "MULTI-LAYER METABOLIC EXPANSION",
    },
    {
      factor: "ATP PRESERVATION TECHNOLOGY",
      gray: "UNSTABLE PRECISION DEGRADATION",
      pro: "RUSSIAN PEPTIDE CELLULAR ENERGY ARCHITECTURE",
    },
    {
      factor: "HEPATIC STRESS MANAGEMENT",
      gray: "TOXIC COMPOUND OVERLOAD",
      pro: "LIVER-SHIELDING TECHNOLOGIES",
    },
    {
      factor: "HYBRID NOOTROPIC ENGINEERING",
      gray: "SODIUM-JUMPING BLOAT PROTOCOL",
      pro: "PHARMACEUTICAL-GRADE SYNAPSE BALANCE",
    },
    {
      factor: "FIRST-DOSE NEUROLOGICAL IMPACT",
      gray: "PLACEBO-THRESHOLD ACTIVATION",
      pro: "IMMEDIATE PERFORMANCE MANIFESTATION",
    },
    {
      factor: "HEAVY METAL CLEARANCE PROTOCOL",
      gray: "LEAD/MERCURY CONTAMINATION RISK",
      pro: "MANDATORY USA THIRD-PARTY CERTIFICATION",
    },
    {
      factor: "CUTTING-PHASE ATP PROTECTION",
      gray: "MUSCLE FLATNESS BURNING EFFECT",
      pro: "ANTI-CATABOLIC CELLULAR RETENTION",
    },
  ];

  return (
    <section className="w-full bg-black text-white px-6 md:px-16 py-20">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2
          className="text-4xl md:text-6xl creepster-regular tracking-wide"
        
        >
          GRAY MARKET VS{" "}
          <span className="text-red-600">PROMOLECULES</span>
        </h2>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 bg-red-600 text-black text-sm font-bold uppercase tracking-wide py-3 px-4">
        <div>Critical Factor</div>
        <div>Gray Market Brands</div>
        <div className="text-right">Promolecules</div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-gray-800">
        {rows.map((row, index) => (
          <div
            key={index}
            className="grid grid-cols-3 py-4 px-4 text-xs md:text-sm items-center"
          >
            {/* Factor */}
            <div className="text-gray-300 uppercase tracking-wide">
              {row.factor}
            </div>

            {/* Gray Column */}
            <div className="text-gray-500 uppercase tracking-wide">
              {row.gray}
            </div>

            {/* Promolecules Column */}
            <div className="flex items-center justify-end gap-2 text-red-600 uppercase tracking-wide font-semibold">
              <span>{row.pro}</span>
              <Check size={16} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
