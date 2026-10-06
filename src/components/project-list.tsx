"use client";

import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ProjectList({
  projects,
  startIndex = 1,
}: {
  projects: Project[];
  startIndex?: number;
}) {
  if (projects.length === 0) {
    return (
      <p className="mt-10 border-y border-signal/12 py-10 font-tech text-sm tracking-[0.12em] text-steel/70 uppercase">
        Nothing published in this section yet — check back as repos open.
      </p>
    );
  }

  return (
    <ol className="mt-12 space-y-0 divide-y divide-signal/12 border-y border-signal/12">
      {projects.map((project, index) => (
        <motion.li
          key={project.slug}
          className="grid gap-4 py-8 sm:grid-cols-[4.5rem_1fr_auto] sm:items-start sm:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={reveal}
          transition={{ delay: index * 0.04 }}
        >
          <span className="font-tech text-sm tracking-[0.2em] text-signal/55">
            {String(startIndex + index).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {project.title}
              </h3>
              {project.status === "private" ? (
                <span className="font-tech text-[10px] tracking-[0.22em] text-brass uppercase">
                  Private
                </span>
              ) : (
                <span className="font-tech text-[10px] tracking-[0.22em] text-signal uppercase">
                  Public
                </span>
              )}
            </div>
            <p className="mt-1 font-tech text-[11px] tracking-[0.12em] text-steel/80 uppercase">
              {[project.lang, ...project.tags].filter(Boolean).join(" · ")}
            </p>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-steel">
              {project.blurb}
            </p>
            {project.note && (
              <p className="mt-3 font-tech text-xs tracking-[0.06em] text-steel/70">
                {project.note}
              </p>
            )}
          </div>
          <div className="sm:pt-1">
            {project.href ? (
              <Button
                nativeButton={false}
                render={
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                size="lg"
                className="h-10 rounded-md bg-signal px-4 font-tech text-[11px] tracking-[0.16em] text-primary-foreground uppercase hover:bg-signal-bright"
              >
                {project.cta ?? "Open"}
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            ) : (
              <span
                className="inline-flex h-10 items-center rounded-md border border-signal/15 px-4 font-tech text-[11px] tracking-[0.16em] text-steel/55 uppercase"
                aria-disabled="true"
              >
                Not published
              </span>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
