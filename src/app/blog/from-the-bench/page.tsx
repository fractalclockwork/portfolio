import { about } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `From the bench and the cluster — ${about.brandPlain}`,
  description:
    "Curated public work: CRT Drive, core memory, HPC tooling, and reproducible lab infrastructure — La La Playa / \\frac.",
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
              {about.brand}
            </Link>
            {" · "}
            Blog
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From the bench and the cluster
          </h1>
          <p className="mt-3 font-tech text-[11px] tracking-[0.16em] text-steel/80 uppercase">
            2026-10-06 · {about.name} · {about.brand}
          </p>
          <p className="mt-6 text-base leading-relaxed text-steel sm:text-lg">
            A short tour of curated public work — hardware research, scientific
            computing, and agentic engineering in one workshop. The mark is{" "}
            <span className="font-tech text-signal">{about.brand}</span> (a
            reduction of <em>fractalclockwork</em>); the studio is{" "}
            <strong className="font-medium text-foreground">{about.name}</strong>.
            The GitHub account and Pages host stay on{" "}
            <Ext href={about.github}>fractalclockwork</Ext>. Classroom dumps
            stay off this page.
          </p>
        </header>

        <div className="prose-portfolio mt-10 space-y-10 text-[15px] leading-relaxed text-steel sm:text-base">
          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Featured
            </h2>
            <ul className="mt-4 space-y-4">
              <li>
                <Ext href="https://github.com/fractalclockwork/crt-drive">
                  CRT Drive
                </Ext>{" "}
                — Open firmware for analog CRTs and TVs: sync and video from a
                microcontroller, replacing sealed drive ASICs still in the
                chassis. Clearest bridge between modern tooling and old iron.
              </li>
              <li>
                <Ext href="https://github.com/fractalclockwork/core-memory">
                  Core Memory
                </Ext>{" "}
                and{" "}
                <Ext href="https://github.com/fractalclockwork/core-memory-redux">
                  Core Memory Redux
                </Ext>{" "}
                — A real 9″ 64×64 ferrite plane as a first-class device. One repo
                drives and senses the array; the redux rebuilds the
                coincident-current path with a fidelity-gated ladder from SPICE
                toward ideal N×N models. Electronics you can argue with, not
                slides.
              </li>
              <li>
                <Ext href="https://github.com/fractalclockwork/hpc-runner">
                  HPC Runner
                </Ext>{" "}
                — Modular, execution-agnostic regression tests for HPC
                workloads: the same suite locally, in containers, or on a real
                scheduler. Less photogenic than a CRT; more useful when
                numerics have to stay honest across machines.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Hardware and retrocompute
            </h2>
            <p className="mt-4">
              The shelf past featured is short on purpose.{" "}
              <Ext href="https://github.com/fractalclockwork/RadarModule">
                Radar Module
              </Ext>{" "}
              pairs a Linux kernel driver with Docker and Yocto for
              BeagleBone-class targets.{" "}
              <Ext href="https://github.com/fractalclockwork/fpga-kit">
                FPGA Kit
              </Ext>{" "}
              archives bring-up notes and manuals for retired Digilent Spartan
              boards — lab memory, not a product pitch.{" "}
              <Ext href="https://github.com/fractalclockwork/biofeedback_emg">
                Biofeedback EMG
              </Ext>{" "}
              is an early Arduino and Processing sensing build that still earns
              stars. <em>Retro Compute</em> (Chu, 1962) stays private until it
              is ready to publish; the empty slot is deliberate.
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
              is a multi-container Slurm image for development and teaching.{" "}
              <Ext href="https://github.com/astr400/mesa-docker">MESA Docker</Ext>{" "}
              supports remote stellar-evolution work with SSH and pgstar, next
              to the{" "}
              <Ext href="https://astr400.github.io/">ASTR 400</Ext> setup
              guides.{" "}
              <Ext href="https://github.com/fractalclockwork/molecularSim">
                molecularSim
              </Ext>{" "}
              turns Sadus’s <em>Molecular Simulation of Fluids</em> examples
              into runnable C++.{" "}
              <Ext href="https://github.com/fractalclockwork/cede">CEDE</Ext> is
              a containerized multi-MCU embedded lab so bring-up is not tied to
              one laptop.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Tooling and agents
            </h2>
            <p className="mt-4">
              Infrastructure earns space only when it removes friction.{" "}
              <Ext href="https://github.com/fractalclockwork/tftp-boot-docker">
                tftp-boot-docker
              </Ext>{" "}
              — Docker TFTP and HTTP for UEFI PXE boot of Ubuntu Desktop LTS
              with OpenWrt DHCP.{" "}
              <Ext href="https://github.com/fractalclockwork/voice2srt">
                voice2srt
              </Ext>{" "}
              — a small CLI for sentence-aligned subtitles from long audio.{" "}
              <Ext href="https://astr400.github.io/">ASTR 400 setup</Ext> —
              Python, Git, Docker, and the VM path, written for clarity.
            </p>
            <p className="mt-4">
              Agents are scaffolding, not spectacle. Cursor and local tooling
              speed docs and CI; they do not replace SPICE ladders, board
              bring-up, or cluster regressions. The repos are the proof.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Follow along
            </h2>
            <p className="mt-4">
              Bench-first: CRT Drive, then the core-memory pair. Compute-first:
              HPC Runner and sci-slurm. Public links live on the{" "}
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
                <Ext href={about.github}>{about.github.replace("https://", "")}</Ext>
              </li>
            </ul>
          </section>
        </div>

        <footer className="mt-14 border-t border-signal/12 pt-8 font-tech text-[11px] tracking-[0.14em] text-steel/60">
          {about.name} · {about.brand} · curated public work. Old Man Tech is
          retired from this surface; remotes are not deleted.
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
