"use client";

import { motion } from "framer-motion";

/** Full-bleed hero atmosphere: fractal-adjacent grid + soft signal wash. */
export function AtmosphereField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,18,28)_0%,rgba(7,11,18,0.94)_58%,#070b12_100%)]" />

      <div className="animate-drift absolute inset-0 opacity-80">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 960 640"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="clockwork-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="rgba(61,207,191,0.14)"
                strokeWidth="0.7"
              />
            </pattern>
            <radialGradient id="hub" cx="50%" cy="42%" r="45%">
              <stop offset="0%" stopColor="rgba(61,207,191,0.22)" />
              <stop offset="55%" stopColor="rgba(61,207,191,0.04)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="960" height="640" fill="url(#clockwork-grid)" />
          <rect width="960" height="640" fill="url(#hub)" />
          <g
            stroke="rgba(122,239,224,0.28)"
            strokeWidth="1"
            fill="none"
            opacity="0.7"
          >
            <circle cx="720" cy="220" r="88" />
            <circle cx="720" cy="220" r="148" />
            <circle cx="720" cy="220" r="210" />
            <path d="M720 72 L720 368 M562 220 L878 220" />
          </g>
          <g fill="rgba(196,165,116,0.35)">
            <circle cx="720" cy="220" r="3.5" />
            <circle cx="808" cy="220" r="2" />
            <circle cx="720" cy="132" r="2" />
            <circle cx="632" cy="220" r="2" />
          </g>
        </svg>
      </div>

      <div className="animate-bloom absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(61,207,191,0.12),transparent_48%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_78%,rgba(196,165,116,0.07),transparent_42%)]" />
      <div className="animate-sweep absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-signal/10 to-transparent" />

      <motion.div
        className="absolute right-[8%] bottom-[12%] hidden font-tech text-[10px] tracking-[0.32em] text-signal/40 uppercase sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05, duration: 0.8 }}
      >
        Bench · Agents · Research
      </motion.div>
    </div>
  );
}
