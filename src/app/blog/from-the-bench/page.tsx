import { about, identity } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `From the bench and the cluster — ${about.name}`,
  description:
    "Research Engineer bridging physical hardware constraints with high-performance scientific software — domain hub and flagship public work.",
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
            {identity.lead} The portfolio routes through four engineering
            domains; classroom dumps stay off this page. Source lives under{" "}
            <Ext href={about.github}>github.com/fractalclockwork</Ext>.
          </p>
        </header>

        <div className="prose-portfolio mt-10 space-y-10 text-[15px] leading-relaxed text-steel sm:text-base">
          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Domains
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5">
              <li>
                <strong className="text-foreground">
                  High-Performance Computing &amp; Scientific Software
                </strong>{" "}
                — reproducibility across backends. Flagship:{" "}
                <Ext href="https://github.com/fractalclockwork/hpc-runner">
                  hpc-runner
                </Ext>
                .
              </li>
              <li>
                <strong className="text-foreground">
                  Embedded Firmware &amp; Sensing Systems
                </strong>{" "}
                — board bring-up and HWIL. Flagships:{" "}
                <Ext href="https://github.com/fractalclockwork/rad-lab">
                  rad-lab
                </Ext>
                ,{" "}
                <Ext href="https://github.com/fractalclockwork/cede">
                  CEDE / cede-labgrid
                </Ext>
                .
              </li>
              <li>
                <strong className="text-foreground">
                  Computational Imaging &amp; Instrumentation
                </strong>{" "}
                — instrument control and reconstruction. Flagship:{" "}
                <Ext href="https://github.com/fractalclockwork/spectrometer-lab">
                  spectrometer-lab
                </Ext>{" "}
                (Stages 1–3 PASS; Gate D open).
              </li>
              <li>
                <strong className="text-foreground">
                  Scientific Field &amp; Lab Infrastructure
                </strong>{" "}
                — fixtures, telemetry, bioelectrical IP; historical craft in the
                Hardware Archive.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Featured flagships
            </h2>
            <ul className="mt-4 space-y-4">
              <li>
                <Ext href="https://github.com/fractalclockwork/hpc-runner">
                  HPC Runner
                </Ext>{" "}
                — execution-agnostic regression for MD workloads across local,
                container, and cluster backends.
              </li>
              <li>
                <Ext href="https://github.com/fractalclockwork/rad-lab">
                  rad-lab
                </Ext>{" "}
                — host-gated RF HWIL with human assent before TX, SIL→HWIL
                stages, and evidence reports.
              </li>
              <li>
                <Ext href="https://github.com/fractalclockwork/spectrometer-lab">
                  spectrometer-lab
                </Ext>{" "}
                — RS-232 DAQ for a PerkinElmer LS 55; Stages 1–3 PASS
                (2026-10-28); Gate D optical validation open.
              </li>
              <li>
                <Ext href="https://github.com/fractalclockwork/fpga-kit">
                  FPGA Kit
                </Ext>{" "}
                — bring-up archive so firmware work survives tool churn.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              High-Performance Computing &amp; Scientific Software
            </h2>
            <p className="mt-4">
              <Ext href="https://github.com/fractalclockwork/sci-slurm">
                sci-slurm
              </Ext>{" "}
              — multi-container Slurm for development and teaching.{" "}
              <Ext href="https://github.com/fractalclockwork/molecularSim">
                molecularSim
              </Ext>{" "}
              — Sadus examples as runnable C++.{" "}
              <Ext href="https://github.com/astr400/mesa-docker">MESA Docker</Ext>{" "}
              and{" "}
              <Ext href="https://astr400.github.io/">ASTR 400</Ext> for remote
              stellar-evolution work.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Embedded Firmware &amp; Sensing Systems
            </h2>
            <p className="mt-4">
              <Ext href="https://github.com/fractalclockwork/cede">
                CEDE / cede-labgrid
              </Ext>{" "}
              — multi-MCU lab and Labgrid HIL.{" "}
              <Ext href="https://github.com/fractalclockwork/RadarModule">
                Radar Module
              </Ext>{" "}
              — Linux kernel driver with Docker and Yocto.{" "}
              <Ext href="https://github.com/fractalclockwork/tftp-boot-docker">
                tftp-boot-docker
              </Ext>{" "}
              — lab netboot without ceremony.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Computational Imaging &amp; Instrumentation
            </h2>
            <p className="mt-4">
              Featured spectrometer-lab and freelance CT/radio reconstruction.
              Public sensing reference:{" "}
              <Ext href="https://github.com/fractalclockwork/biofeedback_emg">
                Biofeedback EMG
              </Ext>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Hardware Archive
            </h2>
            <p className="mt-4">
              Secondary to the Research Engineer story.{" "}
              <Ext href="https://github.com/fractalclockwork/core-memory-redux">
                Core Memory Redux
              </Ext>{" "}
              and{" "}
              <Ext href="https://github.com/fractalclockwork/core-memory">
                Core Memory
              </Ext>{" "}
              — SIL into a real 9″ ferrite plane.{" "}
              <Ext href="https://github.com/fractalclockwork/crt-drive">
                CRT Drive
              </Ext>{" "}
              — open CRT firmware. <em>Retro Compute</em> (Chu, 1962) stays
              private until ready.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Follow along
            </h2>
            <p className="mt-4">
              Start with the portfolio{" "}
              <Link
                href="/#areas"
                className="text-signal underline-offset-4 hover:text-signal-bright hover:underline"
              >
                domain cards
              </Link>
              , then the four flagships. Compute and embedded shelves next;
              Hardware Archive last. Contact: {about.email}.
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
