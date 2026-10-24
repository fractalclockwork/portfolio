# From the bench and the cluster

*A short tour of curated public work by Brent A. Thorne — not a résumé dump.*

---

Hardware research, scientific computing, and reproducible lab infrastructure sit in the same workshop. The goal is simple: show a few strong pieces clearly, and leave classroom noise offstage. Source lives under [github.com/fractalclockwork](https://github.com/fractalclockwork).

What follows is the portfolio in prose — the same anchors you will find on [the site](https://fractalclockwork.github.io/portfolio/), written for reading rather than scanning a list.

## Featured anchors

Four projects carry most of the weight.

**[rad-lab](https://github.com/fractalclockwork/rad-lab)** is a containerized SDR and hardware-in-the-loop lab: role-structured toolset, human assent before TX, SIL→HWIL stages, and evidence reports for RF bring-up.

**[FPGA Kit](https://github.com/fractalclockwork/fpga-kit)** is a reproducible FPGA bring-up archive for Digilent Spartan boards — toolchain notes, board memory, and lab continuity so firmware work survives tool churn.

**[HPC Runner](https://github.com/fractalclockwork/hpc-runner)** is execution-agnostic regression for HPC workloads — the same suite locally, in containers, or on a real scheduler.

**[Core Memory Redux](https://github.com/fractalclockwork/core-memory-redux)** is a fidelity-gated SIL ladder for a 64×64 coincident-current core-memory driver, from SPICE through ideal N×N models before physical bring-up.

## Hardware and sensing

Beyond the featured set, the hardware shelf stays short.

[CRT Drive](https://github.com/fractalclockwork/crt-drive) is open firmware for analog CRTs. [Radar Module](https://github.com/fractalclockwork/RadarModule) pairs a Linux kernel driver with Docker and Yocto for BeagleBone-class targets. [Core Memory](https://github.com/fractalclockwork/core-memory) drives and senses a real 9″ 64×64 ferrite plane. [Biofeedback EMG](https://github.com/fractalclockwork/biofeedback_emg) is early closed-loop bioelectrical acquisition. *Retro Compute*, a study guide for Yaohan Chu’s 1962 *Digital Computer Design Fundamentals*, stays private until it is ready to publish.

## Clusters, containers, and numerics

Scientific work prefers environments you can recreate.

[sci-slurm](https://github.com/fractalclockwork/sci-slurm) packs a multi-container Slurm image for development and teaching. [MESA Docker](https://github.com/astr400/mesa-docker) supports remote stellar-evolution work with SSH and pgstar, alongside the [ASTR 400](https://astr400.github.io/) setup guides. [molecularSim](https://github.com/fractalclockwork/molecularSim) turns examples from Sadus’s *Molecular Simulation of Fluids* into runnable C++. [CEDE](https://github.com/fractalclockwork/cede) is a containerized embedded lab for multi-MCU hardware.

## Lab tooling

Infrastructure earns a place only when it removes friction.

[tftp-boot-docker](https://github.com/fractalclockwork/tftp-boot-docker) is a Docker TFTP and HTTP path for UEFI PXE boot. [voice2srt](https://github.com/fractalclockwork/voice2srt) is a small CLI for sentence-aligned subtitles from long audio. The [ASTR 400 setup guide](https://astr400.github.io/) covers Python, Git, Docker, and the VM path without marketing copy.

## How to follow along

Start with rad-lab and FPGA Kit if you care how bring-up is practiced. Start with CRT Drive and the core-memory pair for the bench. Start with HPC Runner and sci-slurm for reproducible compute. Everything listed as public is linked from the portfolio; private work stays unmarked until it ships.

**Portfolio:** [fractalclockwork.github.io/portfolio](https://fractalclockwork.github.io/portfolio/)  
**GitHub:** [github.com/fractalclockwork](https://github.com/fractalclockwork)

---

*Brent A. Thorne · curated public work. Classroom dumps and retired joke branding stay off this surface; remotes are not deleted.*
