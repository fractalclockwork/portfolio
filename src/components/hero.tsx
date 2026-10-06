"use client";

import { AtmosphereField } from "@/components/atmosphere-field";
import { Button } from "@/components/ui/button";
import { WordSalad } from "@/components/word-salad";
import { about } from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <AtmosphereField />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col px-5 pt-6 pb-16 sm:px-8 sm:pt-8">
        <motion.header
          className="flex items-center justify-between gap-4"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <a
            href="#top"
            className="font-tech text-[11px] tracking-[0.28em] text-steel uppercase transition-colors hover:text-signal"
          >
            {about.brand}
          </a>
          <nav className="flex items-center gap-5" aria-label="Main">
            <a
              href="#featured"
              className="hidden font-tech text-[11px] tracking-[0.2em] text-steel uppercase transition-colors hover:text-signal sm:inline"
            >
              Work
            </a>
            <a
              href="#about"
              className="hidden font-tech text-[11px] tracking-[0.2em] text-steel uppercase transition-colors hover:text-signal md:inline"
            >
              About
            </a>
            <a
              href={about.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-tech text-[11px] tracking-[0.2em] text-steel uppercase transition-colors hover:text-signal"
            >
              GitHub
            </a>
          </nav>
        </motion.header>

        <div className="flex flex-1 flex-col justify-end gap-6 pt-24 sm:justify-center sm:pt-8 lg:max-w-2xl">
          <motion.p
            className="font-display text-[clamp(2.6rem,9vw,5.6rem)] leading-[0.9] font-bold tracking-[-0.04em] text-signal signal-glow"
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
          >
            fractalclockwork
          </motion.p>

          <motion.p
            className="font-tech text-[11px] tracking-[0.24em] text-brass uppercase"
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
          >
            {about.name}
          </motion.p>

          <motion.div
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
          >
            <WordSalad />
          </motion.div>

          <motion.h1
            className="max-w-xl font-display text-[clamp(1.25rem,3vw,1.85rem)] leading-tight font-medium tracking-tight text-foreground text-balance"
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
          >
            Hardware research, scientific computing, and agentic engineering —
            curated, not cluttered.
          </motion.h1>

          <motion.p
            className="max-w-md text-base leading-relaxed text-steel sm:text-lg"
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
          >
            Public work from the bench and the cluster: CRT drive, core memory,
            HPC tooling, and reproducible lab infrastructure.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 pt-1"
            custom={5}
            variants={fade}
            initial="hidden"
            animate="show"
          >
            <Button
              nativeButton={false}
              render={<a href="#featured" />}
              size="lg"
              className="h-11 rounded-md bg-signal px-5 font-tech text-xs tracking-[0.18em] text-primary-foreground uppercase hover:bg-signal-bright"
            >
              Featured work
            </Button>
            <Button
              nativeButton={false}
              render={
                <a
                  href={about.github}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-signal/25 bg-transparent px-5 font-tech text-xs tracking-[0.18em] text-signal uppercase hover:bg-signal/10 hover:text-signal-bright"
            >
              GitHub
              <ArrowUpRight data-icon="inline-end" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
