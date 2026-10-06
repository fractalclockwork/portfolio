"use client";

import { randomWordSalad, saladIntervalMs } from "@/lib/word-salad";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const PLACEHOLDER = "salt-fogged tidepool compiles amid the ringbuffer.";

export function WordSalad({ className = "" }: { className?: string }) {
  const [phrase, setPhrase] = useState(PLACEHOLDER);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      setPhrase(randomWordSalad());
      timer = setTimeout(tick, saladIntervalMs());
    };
    // Defer first randomize so SSR/CSR markup match; then rotate every 3–5s.
    timer = setTimeout(tick, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-[3.25rem] ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <p className="font-tech text-[10px] tracking-[0.18em] text-brass/70 uppercase">
        La La Playa · word salad
      </p>
      <AnimatePresence mode="wait">
        <motion.p
          key={phrase}
          className="mt-1.5 max-w-lg text-[15px] leading-snug text-steel/90 italic"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35 }}
        >
          {phrase}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
