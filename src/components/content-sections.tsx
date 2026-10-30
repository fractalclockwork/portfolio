"use client";

import { ProjectList } from "@/components/project-list";
import { Button } from "@/components/ui/button";
import {
  about,
  achievements,
  domainCards,
  experience,
  featured,
  sections,
  trajectory,
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
        id="achievements"
        className="relative border-t border-signal/10 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Highlights"
            title="Selected achievements"
            intro="Immediate credibility — commercial scale, scientific tooling, imaging systems, IP, and graduate research. Full detail is in the resume."
          />
          <motion.ul
            className="mt-12 max-w-3xl space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={reveal}
          >
            {achievements.map((item) => (
              <li
                key={item}
                className="border-l border-signal/20 pl-4 text-[15px] leading-relaxed text-steel sm:text-base"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section
        id="trajectory"
        className="relative border-t border-signal/10 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Trajectory"
            title="How the work connects"
            intro="A progression across eras — not a grab bag of unrelated interests. Each step compounds the next."
          />
          <ol className="mt-12 max-w-xl space-y-0">
            {trajectory.map((step, index) => (
              <motion.li
                key={step.label}
                className="relative border-l border-signal/20 pb-10 pl-6 last:pb-0"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={reveal}
                transition={{ delay: index * 0.04 }}
              >
                <span
                  className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-signal/80"
                  aria-hidden
                />
                <p className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {step.label}
                </p>
                {step.era ? (
                  <p className="mt-1 font-tech text-[11px] tracking-[0.16em] text-steel/80 uppercase">
                    {step.era}
                  </p>
                ) : null}
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="areas"
        className="relative border-t border-signal/10 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Core engineering domains"
            title="Where to go next"
            intro="Four pathways aligned to the work I do. Each card jumps to that domain’s projects. Stack lines are secondary — problems and outcomes lead."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {domainCards.map((card) => (
              <motion.a
                key={card.href}
                href={card.href}
                className="block border border-signal/15 px-5 py-6 transition-colors hover:border-signal/40 hover:bg-signal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/40"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={reveal}
              >
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-steel">
                  {card.blurb}
                </p>
                <p className="mt-4 font-tech text-[11px] leading-relaxed tracking-[0.06em] text-steel/80 uppercase">
                  {card.stack}
                </p>
                <p className="mt-4 font-tech text-[11px] tracking-[0.14em] text-brass uppercase">
                  Featured: {card.featured.join(" · ")}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="featured"
        className="relative border-t border-signal/10 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Featured"
            title="Flagship public work"
            intro="Constraint-first systems that define the Research Engineer story: HPC regression (hpc-runner), RF HWIL (rad-lab), optical DAQ (spectrometer-lab), and FPGA bring-up continuity (FPGA Kit). Pick a domain above to see the rest of the shelf."
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
            intro="Industry depth across embedded firmware, wireless systems, and independent R&D. Reviewers care about this before degrees — full detail is in the resume."
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
