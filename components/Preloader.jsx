"use client";

import { useEffect, useState } from "react";

const style = `

@keyframes pulse-ring {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(1.6); opacity: 0; }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spin-reverse {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

@keyframes lightning-flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}



.pulse-ring {
  animation: pulse-ring 1.4s infinite;
}

.spin-cw { animation: spin-slow 3s linear infinite; }
.spin-ccw { animation: spin-reverse 2s linear infinite; }

.lightning { animation: lightning-flash 1.2s infinite; }
`;

const LightningBolt = () => (
  <svg viewBox="0 0 40 60" className="w-6 sm:w-8 md:w-10 h-auto lightning">
    <path
      d="M24 4L6 34H20L16 56L34 26H20L24 4Z"
      fill="#ef4444"
    />
  </svg>
);

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = ["INITIALIZING", "LOADING FORMULA", "ACTIVATING", "READY"];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 25) setPhase(0);
    else if (progress < 60) setPhase(1);
    else if (progress < 90) setPhase(2);
    else setPhase(3);
  }, [progress]);

  return (
    <>
      <style>{style}</style>

      <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 text-center">

        {/* Loader Circle */}
        <div className="relative flex items-center justify-center w-[40vw] max-w-[180px] aspect-square">

          {/* Pulse */}
          <div className="absolute w-full h-full border border-red-500/30 rounded-full pulse-ring" />

          {/* Progress Ring */}
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="rgba(255,0,0,0.2)"
              strokeWidth="2"
              fill="none"
            />

            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="#ef4444"
              strokeWidth="2"
              fill="none"
              strokeDasharray={2 * Math.PI * 50}
              strokeDashoffset={2 * Math.PI * 50 * (1 - progress / 100)}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
            />
          </svg>

          {/* Center Icon */}
          <div className="absolute">
            <LightningBolt />
          </div>
        </div>

        {/* Title */}
      <h1 className="relative  font-extrabold text-red-500 text-3xl sm:text-5xl md:text-6xl tracking-widest mt-6">
  PROMOLECULES™

</h1>


     

        {/* Progress Bar */}
        <div className="w-full max-w-[300px] mt-6">
          <div className="w-full h-2 w-5  bg-red-900/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-800 to-red-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-red-400 mt-2 text-sm">{progress}%</p>
        </div>
      </div>
    </>
  );
}