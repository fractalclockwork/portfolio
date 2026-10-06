export type ProjectStatus = "public" | "private";

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  lang?: string;
  status: ProjectStatus;
  href?: string;
  cta?: string;
  note?: string;
};

export type ProjectSection = {
  id: string;
  label: string;
  title: string;
  intro: string;
  projects: Project[];
};

/** Curated from inventory yes-items; maybe used sparingly; classroom dumps omitted. */
export const featured: Project[] = [
  {
    slug: "crt-drive",
    title: "CRT Drive",
    blurb:
      "Programmable CRT drive: sync and video from a microcontroller for analog CRTs and TVs — open firmware that replaces sealed drive ASICs on the bench.",
    tags: ["Firmware", "Retrocompute", "Hardware"],
    lang: "C",
    status: "public",
    href: "https://github.com/fractalclockwork/crt-drive",
    cta: "Open repo",
  },
  {
    slug: "core-memory-redux",
    title: "Core Memory Redux",
    blurb:
      "Reimplementation of a 64×64 coincident-current core-memory driver with a fidelity-gated SIL ladder from SPICE through ideal N×N models.",
    tags: ["Hardware", "Electronics", "Simulation"],
    lang: "Python",
    status: "public",
    href: "https://github.com/fractalclockwork/core-memory-redux",
    cta: "Open repo",
  },
  {
    slug: "core-memory",
    title: "Core Memory",
    blurb:
      "Driver electronics for sensing and writing an existing 9″ ferrite core plane — a 64×64 array (4,096 bits) brought back under software control.",
    tags: ["Hardware", "Electronics"],
    lang: "Python",
    status: "public",
    href: "https://github.com/fractalclockwork/core-memory",
    cta: "Open repo",
  },
  {
    slug: "hpc-runner",
    title: "HPC Runner",
    blurb:
      "Modular, execution-agnostic regression testing for HPC workloads — same suite across local, container, and cluster backends.",
    tags: ["HPC", "Testing", "Scientific computing"],
    lang: "Python",
    status: "public",
    href: "https://github.com/fractalclockwork/hpc-runner",
    cta: "Open repo",
  },
];

export const sections: ProjectSection[] = [
  {
    id: "hardware",
    label: "Hardware & retrocompute",
    title: "Boards, planes, and old iron",
    intro:
      "Physical systems and vintage computing — kernels, planes, FPGA archives, and sensing hardware that ship as public repos.",
    projects: [
      {
        slug: "radar-module",
        title: "Radar Module",
        blurb:
          "Linux kernel driver for a radar module with Docker image and Yocto build environment for BeagleBone-class targets.",
        tags: ["Kernel", "Yocto", "Drivers"],
        lang: "Shell / C",
        status: "public",
        href: "https://github.com/fractalclockwork/RadarModule",
        cta: "Open repo",
      },
      {
        slug: "fpga-kit",
        title: "FPGA Kit",
        blurb:
          "Bring-up notes, lessons, and archived manuals for retired Digilent Spartan boards on Xilinx toolchains — lab archive, not a product pitch.",
        tags: ["FPGA", "Archive"],
        lang: "Python",
        status: "public",
        href: "https://github.com/fractalclockwork/fpga-kit",
        cta: "Open archive",
      },
      {
        slug: "biofeedback-emg",
        title: "Biofeedback EMG",
        blurb:
          "Early EMG sensor stack using Arduino and Processing — still one of the more-starred public hardware pieces from the bench.",
        tags: ["Sensing", "Arduino"],
        lang: "Java",
        status: "public",
        href: "https://github.com/fractalclockwork/biofeedback_emg",
        cta: "Open repo",
      },
      {
        slug: "retro-compute",
        title: "Retro Compute",
        blurb:
          "Study guide for Yaohan Chu, Digital Computer Design Fundamentals (McGraw-Hill, 1962) — strong retrocomputing fit, still private.",
        tags: ["Retrocompute", "Study"],
        lang: "Python",
        status: "private",
        note: "Private for now — will link here if published.",
      },
    ],
  },
  {
    id: "science",
    label: "Scientific computing",
    title: "Clusters, containers, and numerics",
    intro:
      "Reproducible HPC and simulation tooling — Slurm images, MESA remote-dev, molecular examples, and embedded lab environments.",
    projects: [
      {
        slug: "sci-slurm",
        title: "sci-slurm",
        blurb:
          "Multi-container Slurm image for development and teaching — bring a scheduler stack without a full bare-metal cluster.",
        tags: ["HPC", "Docker", "Teaching"],
        lang: "Dockerfile",
        status: "public",
        href: "https://github.com/fractalclockwork/sci-slurm",
        cta: "Open repo",
      },
      {
        slug: "mesa-docker",
        title: "MESA Docker",
        blurb:
          "Remote-dev Docker image for MESA stellar simulations with SSH and pgstar — used with the ASTR 400 setup guides.",
        tags: ["Astrophysics", "Docker"],
        lang: "Shell",
        status: "public",
        href: "https://github.com/astr400/mesa-docker",
        cta: "Open repo",
      },
      {
        slug: "molecular-sim",
        title: "molecularSim",
        blurb:
          "Worked examples from Molecular Simulation of Fluids by Richard J. Sadus — numerical methods made runnable.",
        tags: ["Molecular simulation", "C++"],
        lang: "C++",
        status: "public",
        href: "https://github.com/fractalclockwork/molecularSim",
        cta: "Open repo",
      },
      {
        slug: "cede",
        title: "CEDE",
        blurb:
          "Modular, reproducible, containerized embedded systems development environment for multi-MCU hardware labs.",
        tags: ["Embedded", "Containers"],
        lang: "Python",
        status: "public",
        href: "https://github.com/fractalclockwork/cede",
        cta: "Open repo",
      },
    ],
  },
  {
    id: "tooling",
    label: "Tooling & agent workflows",
    title: "Infrastructure that stays out of the way",
    intro:
      "PXE boot stacks, subtitle tooling, and courseware gateways — plus how modern agents fit into serious engineering without the theater.",
    projects: [
      {
        slug: "tftp-boot-docker",
        title: "tftp-boot-docker",
        blurb:
          "Docker TFTP+HTTP server for UEFI PXE boot of Ubuntu Desktop LTS with OpenWrt DHCP — lab netboot without ceremony.",
        tags: ["Infra", "PXE", "Docker"],
        lang: "Shell",
        status: "public",
        href: "https://github.com/fractalclockwork/tftp-boot-docker",
        cta: "Open repo",
      },
      {
        slug: "voice2srt",
        title: "voice2srt",
        blurb:
          "Lightweight CLI for clean, sentence-aligned subtitles from long-form audio — small tool, sharp edge.",
        tags: ["CLI", "Audio"],
        lang: "Python",
        status: "public",
        href: "https://github.com/fractalclockwork/voice2srt",
        cta: "Open repo",
      },
      {
        slug: "astr400",
        title: "ASTR 400 setup guide",
        blurb:
          "Practical Python, Git, Docker, and VM setup for SFSU Astrophysics — structure and clarity over marketing copy.",
        tags: ["Courseware", "Reproducibility"],
        lang: "Python",
        status: "public",
        href: "https://astr400.github.io/",
        cta: "Open site",
      },
    ],
  },
];

/** Prefix absolute site paths for GitHub Pages project basePath. */
export function withBasePath(path: string): string {
  const base =
    process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "/portfolio";
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (!base) return path;
  return `${base}${path}`;
}

export const about = {
  name: "Brent A. Thorne",
  brand: "fractalclockwork",
  email: "bathorne@berkeley.edu",
  github: "https://github.com/fractalclockwork",
  linkedin: "https://www.linkedin.com/in/brent-thorne-a581554",
  resumePath: "/Brent_Thorne_Resume.pdf",
  bio: "I design reproducible, high-performance frameworks for scientific problems, drawing on topological data analysis, hypergraphs, and accelerator-aware algorithms — and I keep a hardware bench for the systems that still need solder, cores, and CRTs.",
  focus: [
    "Embedded Linux drivers, BSP bring-up, and real-time sensing pipelines",
    "HPC regression, containerized clusters, and scientific DevOps",
    "Retrocompute and research hardware: CRT drive, core memory, FPGA archives",
    "Agentic engineering with Cursor and local tooling — production workflows, not demos",
  ],
  education: [
    "M.S., Molecular Science & Software Engineering — UC Berkeley (2026)",
    "Certificate, Applied Data Science — MIT (2023)",
    "B.S., Electronics Engineering Technology — Hamilton Technical College (1993)",
  ],
};
