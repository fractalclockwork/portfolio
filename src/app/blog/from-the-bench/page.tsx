import { about, identity } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `From the bench and the cluster — ${about.name}`,
  description:
    "Research Engineer building intelligent computational systems that transform measurements into insight — curated public work across scientific computing, imaging, and embedded platforms.",
};

function Ext({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-signal underline-offset-4 transition-colors hover:text-signal-bright hover:underline"
    >
      {children}
    </a>
  );
}

export default function FromTheBenchPost() {
  return (
    <main id="top" className="flex-1">
      <article className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-20">
        <header className="border-b border-signal/12 pb-10">
          <p className="font-tech text-[11px] tracking-[0.22em] text-brass uppercase">
            <Link
              href="/"
              className="text-steel transition-colors hover:text-signal"
            >
              {about.name}
            </Link>
            {" · "}
            Blog
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From the bench and the cluster
          </h1>
          <p className="mt-3 font-tech text-[11px] tracking-[0.16em] text-steel/80 uppercase">
            2026-10-30 · {about.name}
          </p>
          <p className="mt-6 text-base leading-relaxed text-steel sm:text-lg">
            {identity.lead} {identity.support} Classroom dumps stay off this
            page. Source lives under{" "}
            <Ext href={about.github}>github.com/fractalclockwork</Ext>.
          </p>
        </header>

        <div className="prose-portfolio mt-10 space-y-10 text-[15px] leading-relaxed text-steel sm:text-base">
          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Featured
            </h2>
            <ul className="mt-4 space-y-4">
              <li>
                <Ext href="https://github.com/fractalclockwork/rad-lab">
                  rad-lab
                </Ext>{" "}
                — Host-gated RF bring-up you can trust: containerized SDR and
                multi-MCU labs with human assent before TX, SIL→HWIL stages, and
                evidence reports.
              </li>
              <li>
                <Ext href="https://github.com/fractalclockwork/spectrometer-lab">
                  spectrometer-lab
                </Ext>{" "}
                — Turn a fluorescence spectrometer into a reproducible
                acquisition system: RS-232 control for a PerkinElmer LS 55 with
                prompted protocol flow, glitch taxonomy, and Stage 1–3 verified
                emission scans.
              </li>
              <li>
                <Ext href="https://github.com/fractalclockwork/fpga-kit">
                  FPGA Kit
                </Ext>{" "}
                — Keep firmware work alive across tool churn: bring-up archive
                for Digilent Spartan boards with toolchain memory and lab
                continuity.
              </li>
              <li>
                <Ext href="https://github.com/fractalclockwork/hpc-runner">
                  HPC Runner
                </Ext>{" "}
                — Same regression suite across laptop, container, and cluster for
                molecular dynamics workloads on heterogeneous hardware.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Scientific Computing &amp; AI
            </h2>
            <p className="mt-4">
              Prefer environments you can recreate.{" "}
              <Ext href="https://github.com/fractalclockwork/sci-slurm">
                sci-slurm
              </Ext>{" "}
              — multi-container Slurm for development and teaching.{" "}
              <Ext href="https://github.com/fractalclockwork/molecularSim">
                molecularSim
              </Ext>{" "}
              — Sadus’s <em>Molecular Simulation of Fluids</em> examples as
              runnable C++.{" "}
              <Ext href="https://github.com/fractalclockwork/cede">
                CEDE / cede-labgrid
              </Ext>{" "}
              — containerized multi-MCU lab and Labgrid HIL port.{" "}
              <Ext href="https://github.com/astr400/mesa-docker">MESA Docker</Ext>{" "}
              and the{" "}
              <Ext href="https://astr400.github.io/">ASTR 400</Ext> setup guides
              support remote stellar-evolution work.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Imaging, Instrumentation &amp; Sensing
            </h2>
            <p className="mt-4">
              Featured spectrometer-lab and freelance CT/radio reconstruction
              pipelines turn measurements into quantitative insight. Public
              sensing reference:{" "}
              <Ext href="https://github.com/fractalclockwork/biofeedback_emg">
                Biofeedback EMG
              </Ext>{" "}
              — early closed-loop bioelectrical acquisition.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Embedded &amp; Hardware Systems
            </h2>
            <p className="mt-4">
              Featured rad-lab and FPGA Kit carry HWIL and FPGA continuity.{" "}
              <Ext href="https://github.com/fractalclockwork/RadarModule">
                Radar Module
              </Ext>{" "}
              — Linux kernel driver with Docker and Yocto for BeagleBone-class
              targets.{" "}
              <Ext href="https://github.com/fractalclockwork/tftp-boot-docker">
                tftp-boot-docker
              </Ext>{" "}
              — lab netboot without ceremony.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Experimental &amp; Archival Computing
            </h2>
            <p className="mt-4">
              Depth at the bench — craft that supports the Research Engineer
              story, not the primary identity.{" "}
              <Ext href="https://github.com/fractalclockwork/core-memory-redux">
                Core Memory Redux
              </Ext>{" "}
              and{" "}
              <Ext href="https://github.com/fractalclockwork/core-memory">
                Core Memory
              </Ext>{" "}
              — SIL ladder into a real 9″ 64×64 ferrite plane.{" "}
              <Ext href="https://github.com/fractalclockwork/crt-drive">
                CRT Drive
              </Ext>{" "}
              — open firmware for analog CRTs. <em>Retro Compute</em> (Chu, 1962)
              stays private until ready.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Follow along
            </h2>
            <p className="mt-4">
              Identity first: systems that transform measurements into insight.
              Then featured anchors — rad-lab, spectrometer-lab, FPGA Kit, HPC
              Runner. Compute shelf next; experimental hardware last. Public
              links live on the{" "}
              <Link
                href="/"
                className="text-signal underline-offset-4 hover:text-signal-bright hover:underline"
              >
                portfolio
              </Link>
              ; private work stays unmarked until it ships.
            </p>
            <ul className="mt-4 space-y-2 font-tech text-sm tracking-[0.04em]">
              <li>
                <Ext href={about.github}>
                  {about.github.replace("https://", "")}
                </Ext>
              </li>
            </ul>
          </section>
        </div>

        <footer className="mt-14 border-t border-signal/12 pt-8 font-tech text-[11px] tracking-[0.14em] text-steel/60">
          {about.name} · curated public work. Classroom dumps and retired joke
          branding stay off this surface; remotes are not deleted.
          <div className="mt-4">
            <Link
              href="/"
              className="text-signal uppercase tracking-[0.18em] transition-colors hover:text-signal-bright"
            >
              ← Portfolio home
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
