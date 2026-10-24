import { about } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `From the bench and the cluster — ${about.name}`,
  description:
    "Curated public work: rad-lab, FPGA Kit, HPC Runner, core memory, and reproducible lab infrastructure.",
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
            2026-10-24 · {about.name}
          </p>
          <p className="mt-6 text-base leading-relaxed text-steel sm:text-lg">
            A short tour of curated public work — hardware research, scientific
            computing, and reproducible lab infrastructure. Classroom dumps stay
            off this page. Source lives under{" "}
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
                — Containerized SDR and hardware-in-the-loop lab: role-structured
                toolset, human assent before TX, SIL→HWIL stages, and evidence
                reports for RF bring-up.
              </li>
              <li>
                <Ext href="https://github.com/fractalclockwork/fpga-kit">
                  FPGA Kit
                </Ext>{" "}
                — Reproducible FPGA bring-up archive for Digilent Spartan boards:
                toolchain notes, board memory, and lab continuity so firmware
                work survives tool churn.
              </li>
              <li>
                <Ext href="https://github.com/fractalclockwork/hpc-runner">
                  HPC Runner
                </Ext>{" "}
                — Execution-agnostic regression for HPC workloads: the same suite
                locally, in containers, or on a real scheduler.
              </li>
              <li>
                <Ext href="https://github.com/fractalclockwork/core-memory-redux">
                  Core Memory Redux
                </Ext>{" "}
                — Fidelity-gated SIL ladder for a 64×64 coincident-current
                core-memory driver, from SPICE through ideal N×N models before
                physical bring-up.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Hardware and sensing
            </h2>
            <p className="mt-4">
              Beyond featured:{" "}
              <Ext href="https://github.com/fractalclockwork/crt-drive">
                CRT Drive
              </Ext>{" "}
              — open firmware for analog CRTs.{" "}
              <Ext href="https://github.com/fractalclockwork/RadarModule">
                Radar Module
              </Ext>{" "}
              — Linux kernel driver with Docker and Yocto for BeagleBone-class
              targets.{" "}
              <Ext href="https://github.com/fractalclockwork/core-memory">
                Core Memory
              </Ext>{" "}
              — drive and sense a real 9″ 64×64 ferrite plane.{" "}
              <Ext href="https://github.com/fractalclockwork/biofeedback_emg">
                Biofeedback EMG
              </Ext>{" "}
              — early closed-loop bioelectrical acquisition.{" "}
              <em>Retro Compute</em> (Chu, 1962) stays private until ready.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Scientific computing
            </h2>
            <p className="mt-4">
              Prefer environments you can recreate.{" "}
              <Ext href="https://github.com/fractalclockwork/sci-slurm">
                sci-slurm
              </Ext>{" "}
              — multi-container Slurm for development and teaching.{" "}
              <Ext href="https://github.com/astr400/mesa-docker">MESA Docker</Ext>{" "}
              — remote stellar-evolution work with SSH and pgstar, next to the{" "}
              <Ext href="https://astr400.github.io/">ASTR 400</Ext> setup
              guides.{" "}
              <Ext href="https://github.com/fractalclockwork/molecularSim">
                molecularSim
              </Ext>{" "}
              — Sadus’s <em>Molecular Simulation of Fluids</em> examples as
              runnable C++.{" "}
              <Ext href="https://github.com/fractalclockwork/cede">CEDE</Ext> —
              containerized multi-MCU embedded lab so bring-up is not tied to
              one laptop.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Lab tooling
            </h2>
            <p className="mt-4">
              Infrastructure earns space only when it removes friction.{" "}
              <Ext href="https://github.com/fractalclockwork/tftp-boot-docker">
                tftp-boot-docker
              </Ext>{" "}
              — Docker TFTP and HTTP for UEFI PXE boot.{" "}
              <Ext href="https://github.com/fractalclockwork/voice2srt">
                voice2srt
              </Ext>{" "}
              — sentence-aligned subtitles from long audio.{" "}
              <Ext href="https://astr400.github.io/">ASTR 400 setup</Ext> —
              Python, Git, Docker, and the VM path, written for clarity.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Follow along
            </h2>
            <p className="mt-4">
              Methodology-first: rad-lab and FPGA Kit. Bench-first: CRT Drive and
              the core-memory pair. Compute-first: HPC Runner and sci-slurm.
              Public links live on the{" "}
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
