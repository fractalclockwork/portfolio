"use client";

import { ProjectList } from "@/components/project-list";
import { Button } from "@/components/ui/button";
import {
  about,
  experience,
  featured,
  sections,
  withBasePath,
} from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function SectionHeader({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro: string;
}) {
  return (
    <motion.div
      className="max-w-2xl"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={reveal}
    >
      <p className="font-tech text-[11px] tracking-[0.28em] text-brass uppercase">
        {label}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
        {intro}
      </p>
    </motion.div>
  );
}

export function ContentSections() {
  return (
    <>
      <section
        id="featured"
        className="relative border-t border-signal/10 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Featured"
            title="Selected public work"
            intro="rad-lab and FPGA Kit show how bring-up is practiced; HPC Runner and Core Memory Redux cover cluster regression and fidelity-gated simulation. Classroom dumps are filtered out on purpose."
          />
          <ProjectList projects={featured} />
        </div>
      </section>

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="relative border-t border-signal/10 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              label={section.label}
              title={section.title}
              intro={section.intro}
            />
            <ProjectList projects={section.projects} />
          </div>
        </section>
      ))}

      <section
        id="experience"
        className="relative border-t border-signal/10 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Experience"
            title="Professional history"
            intro="Condensed timeline across embedded firmware, wireless systems, and independent R&D. Full detail is in the resume."
          />
          <ol className="mt-12 space-y-10">
            {experience.map((job) => (
              <motion.li
                key={`${job.org}-${job.dates}`}
                className="border-l border-signal/20 pl-5 sm:pl-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={reveal}
              >
                <p className="font-tech text-[11px] tracking-[0.2em] text-brass uppercase">
                  {job.dates}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {job.title}
                </h3>
                <p className="mt-1 text-[15px] text-steel">
                  {job.org}
                  <span className="text-steel/70"> · {job.location}</span>
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-steel">
                  {job.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="about"
        className="relative border-t border-signal/10 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Profile"
            title={about.name}
            intro={about.bio}
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={reveal}
            >
              <p className="font-tech text-[11px] tracking-[0.22em] text-brass uppercase">
                Competencies
              </p>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-steel">
                {about.focus.map((item) => (
                  <li key={item} className="border-l border-signal/20 pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={reveal}
            >
              <p className="font-tech text-[11px] tracking-[0.22em] text-brass uppercase">
                Education
              </p>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-steel">
                {about.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="mt-10 font-tech text-[11px] tracking-[0.22em] text-brass uppercase">
                Patent
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-steel">
                {about.patent}
              </p>

              <p className="mt-10 font-tech text-[11px] tracking-[0.22em] text-brass uppercase">
                Contact
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button
                  nativeButton={false}
                  render={<a href={`mailto:${about.email}`} />}
                  size="lg"
                  className="h-10 rounded-md bg-signal px-4 font-tech text-[11px] tracking-[0.16em] text-primary-foreground uppercase hover:bg-signal-bright"
                >
                  <Mail data-icon="inline-start" />
                  Email
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
                  className="h-10 rounded-md border-signal/25 bg-transparent px-4 font-tech text-[11px] tracking-[0.16em] text-signal uppercase hover:bg-signal/10 hover:text-signal-bright"
                >
                  GitHub
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
                <Button
                  nativeButton={false}
                  render={
                    <a
                      href={about.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  variant="outline"
                  size="lg"
                  className="h-10 rounded-md border-signal/25 bg-transparent px-4 font-tech text-[11px] tracking-[0.16em] text-signal uppercase hover:bg-signal/10 hover:text-signal-bright"
                >
                  LinkedIn
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
                <Button
                  nativeButton={false}
                  render={
                    <a
                      href={withBasePath(about.resumePath)}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  variant="outline"
                  size="lg"
                  className="h-10 rounded-md border-signal/25 bg-transparent px-4 font-tech text-[11px] tracking-[0.16em] text-signal uppercase hover:bg-signal/10 hover:text-signal-bright"
                >
                  Resume
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
