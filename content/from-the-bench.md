# From the bench and the cluster

*A short tour of the work behind `\frac` / La La Playa — curated public projects, not a résumé dump.*

---

Hardware research, scientific computing, and agentic engineering sit in the same workshop here. The public face is **`\frac`** — a short reduction of the older handle *fractalclockwork* — with **La La Playa** as the studio name. The GitHub account and Pages host stay on fractalclockwork; only the mark on the page changed. The goal is simple: show a few strong pieces clearly, and leave classroom noise offstage.

What follows is the portfolio in prose — the same anchors you will find on [the site](https://fractalclockwork.github.io/portfolio/), written for reading rather than scanning a list.

## Featured anchors

Four projects carry most of the weight.

**[CRT Drive](https://github.com/fractalclockwork/crt-drive)** is open firmware for analog CRTs and TVs: sync and video from a microcontroller, meant to replace sealed drive ASICs that still live in the chassis. It is the clearest bridge between modern tooling and old iron.

**[Core Memory](https://github.com/fractalclockwork/core-memory)** and **[Core Memory Redux](https://github.com/fractalclockwork/core-memory-redux)** treat a real ferrite plane as a first-class device. The first repo drives and senses a 9″ 64×64 array; the redux rebuilds the coincident-current path with a fidelity-gated ladder from SPICE toward ideal N×N models. Together they are the research-bench half of the story — electronics you can argue with, not slides.

**[HPC Runner](https://github.com/fractalclockwork/hpc-runner)** is the cluster-side counterpart: modular, execution-agnostic regression tests that run the same suite locally, in containers, or on a real scheduler. It is less photogenic than a CRT, and more useful when numerics have to stay honest across machines.

## Boards, planes, and old iron

Beyond the featured set, the hardware shelf is intentionally short.

A [Radar Module](https://github.com/fractalclockwork/RadarModule) stack pairs a Linux kernel driver with Docker and Yocto for BeagleBone-class targets. [FPGA Kit](https://github.com/fractalclockwork/fpga-kit) is an archive of bring-up notes and manuals for retired Digilent Spartan boards — lab memory, not a product pitch. [Biofeedback EMG](https://github.com/fractalclockwork/biofeedback_emg) is an early Arduino and Processing sensing build that still earns stars years later. *Retro Compute*, a study guide for Yaohan Chu’s 1962 *Digital Computer Design Fundamentals*, stays private until it is ready to publish; the empty slot is deliberate.

## Clusters, containers, and numerics

Scientific work here prefers environments you can recreate.

[sci-slurm](https://github.com/fractalclockwork/sci-slurm) packs a multi-container Slurm image for development and teaching — a scheduler without a bare-metal room. [MESA Docker](https://github.com/astr400/mesa-docker) supports remote stellar-evolution work with SSH and pgstar, alongside the [ASTR 400](https://astr400.github.io/) setup guides. [molecularSim](https://github.com/fractalclockwork/molecularSim) turns examples from Sadus’s *Molecular Simulation of Fluids* into runnable C++. [CEDE](https://github.com/fractalclockwork/cede) is a containerized embedded lab for multi-MCU hardware, so bring-up does not depend on one person’s laptop.

## Tooling that stays out of the way

Infrastructure earns a place only when it removes friction.

[tftp-boot-docker](https://github.com/fractalclockwork/tftp-boot-docker) is a Docker TFTP and HTTP path for UEFI PXE boot of Ubuntu Desktop LTS with OpenWrt DHCP — netboot for the lab without ceremony. [voice2srt](https://github.com/fractalclockwork/voice2srt) is a small CLI for sentence-aligned subtitles from long audio. The [ASTR 400 setup guide](https://astr400.github.io/) is courseware written for clarity: Python, Git, Docker, and the VM path, without marketing copy.

Agents belong in this picture as scaffolding, not spectacle. Cursor and local tooling speed documentation and CI; they do not replace SPICE ladders, board bring-up, or cluster regressions. The repos are the proof.

## How to follow along

Start with CRT Drive and the core-memory pair if you care about the bench. Start with HPC Runner and sci-slurm if you care about reproducible compute. Everything listed as public is linked from the portfolio; private work stays unmarked until it ships.

**Portfolio:** [fractalclockwork.github.io/portfolio](https://fractalclockwork.github.io/portfolio/)  
**GitHub:** [github.com/fractalclockwork](https://github.com/fractalclockwork)

---

*La La Playa · `\frac` · curated public work. Old Man Tech is retired from this surface; remotes are not deleted.*
