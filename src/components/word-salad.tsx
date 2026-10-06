"use client";

import { randomWordSalad, saladIntervalMs } from "@/lib/word-salad";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function WordSalad({ className = "" }: { className?: string }) {
  const [phrase, setPhrase] = useState(() => randomWordSalad());

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timer = setTimeout(() => {
        setPhrase(randomWordSalad());
        schedule();
      }, saladIntervalMs());
    };
    schedule();
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
