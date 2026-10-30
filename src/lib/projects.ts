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

export type ExperienceEntry = {
  title: string;
  org: string;
  location: string;
  dates: string;
  highlights: string[];
};

export type DomainCard = {
  title: string;
  blurb: string;
  stack: string;
  featured: string[];
  href: string;
};

export type TrajectoryStep = {
  label: string;
  era?: string;
};

/** Unifying identity for the hero — who, and why it matters. */
export const identity = {
  eyebrow: "Research Engineer",
  lead: "Bridging physical hardware constraints with high-performance scientific software.",
  support:
    "With over two decades across embedded systems and computational modeling, I engineer solutions at the full hardware–software boundary — from oscilloscope bench bring-up and Linux device drivers to GPU-accelerated parallel algorithms for reproducible scientific simulation. I build deterministic infrastructure that lets domain scientists and hardware engineers trust their data.",
};

/** SOURCE-grounded credibility near the top of the page. */
export const achievements: string[] = [
  "Shipped commercial firmware deployed across millions of consumer and utility endpoints (OpenTV, GridNet).",
  "Built an execution-agnostic HPC validation framework (hpc-runner) for molecular dynamics workloads across GROMACS, LAMMPS, and OpenMM.",
  "Developed CT and radio imaging systems with custom reconstruction algorithms and automated artifact correction.",
  "Inventor on US Patent Application 61834836 — closed-loop biometric monitoring and adaptive physiological feedback.",
  "Graduate research in scientific computing and parallel algorithms (CUDA, MPI, OpenMP, UPC++) at UC Berkeley MSSE / CS267.",
];

/** Career progression visitors should not have to infer. */
export const trajectory: TrajectoryStep[] = [
  { label: "Embedded Systems", era: "Early career" },
  { label: "Wireless Communications", era: "OpenTV → GridNet" },
  { label: "Sensing & Measurement", era: "Field & lab" },
  { label: "Imaging Systems", era: "Freelance R&D" },
  { label: "Scientific Computing", era: "UC Berkeley MSSE" },
  { label: "AI-Assisted Engineering", era: "Present" },
];

/**
 * Dream-JD routing hub — four clickable domain cards (in-page anchors).
 * Stack lines are secondary; constraint/outcome blurbs lead.
 */
export const domainCards: DomainCard[] = [
  {
    title: "High-Performance Computing & Scientific Software",
    blurb:
      "Reproducibility and parallel correctness across heterogeneous backends are the bottleneck. Automated regression, benchmarking, and parallel algorithm work for numerical workloads on local, container, and cluster environments.",
    stack:
      "C++ · CUDA · MPI / OpenMP · Slurm · Docker · GROMACS / LAMMPS / OpenMM",
    featured: ["hpc-runner"],
    href: "#science",
  },
  {
    title: "Embedded Firmware & Sensing Systems",
    blurb:
      "Board bring-up, hardware-in-the-loop lab automation, and high-rate sensor acquisition — firmware and drivers that survive the path from bench to commercial utility and telemetry endpoints.",
    stack:
      "Embedded Linux · Device Drivers · DMA · V4L2 · GStreamer · OpenCV",
    featured: ["rad-lab", "CEDE / cede-labgrid"],
    href: "#embedded",
  },
  {
    title: "Computational Imaging & Instrumentation R&D",
    blurb:
      "End-to-end optical and RF instrument control: bridge raw multi-channel measurements to GPU-accelerated reconstruction and artifact correction. Public proof includes fluorescence spectrometer DAQ bring-up.",
    stack: "CUDA · Signal Processing · OpenCV · DAQ · RS-232 / Serial",
    featured: ["spectrometer-lab", "CT / Radio Reconstruction"],
    href: "#imaging",
  },
  {
    title: "Scientific Field & Lab Infrastructure",
    blurb:
      "Fixtures, telemetry, and lab automation that isolate physical ambiguity from software behavior — remote observatory and sensor context, RF link discipline, and bioelectrical IP. Historical bench craft lives in the Hardware Archive.",
    stack: "Telemetry · RF Link Budgets · CAD/CAM · CNC · AC/DC Power",
    featured: ["Observatory / telemetry", "Bioelectrical IP"],
    href: "#archive",
  },
];

/** Curated featured anchors — constraint-first flagships. */
export const featured: Project[] = [
  {
    slug: "hpc-runner",
    title: "HPC Runner",
    blurb:
      "Guarantee reproducibility across backends: an execution-agnostic regression and benchmarking engine for molecular dynamics workloads (GROMACS, LAMMPS, OpenMM) on local CUDA, containers, and Slurm clusters — without rewriting the application for each target.",
    tags: ["HPC", "Testing", "CUDA"],
    lang: "Python",
    status: "public",
    href: "https://github.com/fractalclockwork/hpc-runner",
    cta: "Open repo",
  },
  {
    slug: "rad-lab",
    title: "rad-lab",
    blurb:
      "RF and sensing bring-up you can evidence: containerized SDR and multi-MCU HWIL with human assent before TX, SIL→HWIL stages, and structured reports — host-gated lab automation, not an ad-hoc bench script.",
    tags: ["SDR", "HWIL", "RF"],
    lang: "Python",
    status: "public",
    href: "https://github.com/fractalclockwork/rad-lab",
    cta: "Open repo",
  },
  {
    slug: "spectrometer-lab",
    title: "spectrometer-lab",
    blurb:
      "Bridge optical hardware to quantitative spectra: RS-232 DAQ and control for a PerkinElmer LS 55. Stages 1–3 PASS (2026-10-28) for electrical bring-up, protocol validation, and empty-compartment emission scans; Gate D optical validation remains open.",
    tags: ["Instrumentation", "Spectroscopy", "RS-232"],
    lang: "Python",
    status: "public",
    href: "https://github.com/fractalclockwork/spectrometer-lab",
    cta: "Open repo",
  },
  {
    slug: "fpga-kit",
    title: "FPGA Kit",
    blurb:
      "Keep firmware work alive when toolchains churn: a bring-up archive for Digilent Spartan boards — toolchain memory, board notes, and lab continuity so board work stays portable.",
    tags: ["FPGA", "Bring-up", "Lab"],
    lang: "Python",
    status: "public",
    href: "https://github.com/fractalclockwork/fpga-kit",
    cta: "Open repo",
  },
];

export const sections: ProjectSection[] = [
  {
    id: "science",
    label: "High-Performance Computing & Scientific Software",
    title: "Clusters, numerics, and reproducible environments",
    intro:
      "Public compute tooling that makes scientific software portable — schedulers you can recreate, runnable molecular examples, and teaching environments. Flagship: hpc-runner (featured above).",
    projects: [
      {
        slug: "sci-slurm",
        title: "sci-slurm",
        blurb:
          "Bring a scheduler stack without a bare-metal cluster — a multi-container Slurm image for development and teaching.",
        tags: ["HPC", "Docker", "Teaching"],
        lang: "Dockerfile",
        status: "public",
        href: "https://github.com/fractalclockwork/sci-slurm",
        cta: "Open repo",
      },
      {
        slug: "molecular-sim",
        title: "molecularSim",
        blurb:
          "Make textbook numerical methods runnable — worked C++ examples from Molecular Simulation of Fluids by Richard J. Sadus.",
        tags: ["Molecular simulation", "C++"],
        lang: "C++",
        status: "public",
        href: "https://github.com/fractalclockwork/molecularSim",
        cta: "Open repo",
      },
      {
        slug: "mesa-docker",
        title: "MESA Docker",
        blurb:
          "Remote stellar-evolution work without fighting the host — Docker image for MESA with SSH and pgstar, paired with ASTR 400 setup guides.",
        tags: ["Astrophysics", "Docker"],
        lang: "Shell",
        status: "public",
        href: "https://github.com/astr400/mesa-docker",
        cta: "Open repo",
      },
      {
        slug: "astr400",
        title: "ASTR 400 setup guide",
        blurb:
          "Get students to a working scientific environment fast — practical Python, Git, Docker, and VM setup for SFSU Astrophysics.",
        tags: ["Courseware", "Reproducibility"],
        lang: "Python",
        status: "public",
        href: "https://astr400.github.io/",
        cta: "Open site",
      },
    ],
  },
  {
    id: "embedded",
    label: "Embedded Firmware & Sensing Systems",
    title: "Drivers, HIL labs, and board bring-up",
    intro:
      "Featured rad-lab and FPGA Kit carry HWIL and FPGA continuity. Below: containerized multi-MCU labs, kernel drivers, and netboot infrastructure that keep the bench reachable.",
    projects: [
      {
        slug: "cede",
        title: "CEDE / cede-labgrid",
        blurb:
          "Reproducible multi-MCU bring-up that does not depend on one laptop — containerized embedded lab with a Labgrid hardware-in-the-loop port.",
        tags: ["Embedded", "HWIL", "Labgrid"],
        lang: "Python",
        status: "public",
        href: "https://github.com/fractalclockwork/cede",
        cta: "Open repo",
      },
      {
        slug: "radar-module",
        title: "Radar Module",
        blurb:
          "Put a radar module under Linux control — kernel driver with Docker image and Yocto environment for BeagleBone-class targets.",
        tags: ["Kernel", "Yocto", "Drivers"],
        lang: "Shell / C",
        status: "public",
        href: "https://github.com/fractalclockwork/RadarModule",
        cta: "Open repo",
      },
      {
        slug: "tftp-boot-docker",
        title: "tftp-boot-docker",
        blurb:
          "Lab netboot without ceremony — Docker TFTP and HTTP for UEFI PXE boot of Ubuntu Desktop LTS with OpenWrt DHCP.",
        tags: ["Infra", "PXE", "Docker"],
        lang: "Shell",
        status: "public",
        href: "https://github.com/fractalclockwork/tftp-boot-docker",
        cta: "Open repo",
      },
    ],
  },
  {
    id: "imaging",
    label: "Computational Imaging & Instrumentation",
    title: "From measurements to quantitative insight",
    intro:
      "Featured spectrometer-lab covers optical DAQ bring-up (Stages 1–3 PASS; Gate D open). Freelance CT/radio reconstruction and artifact correction live in the resume. Public sensing reference below.",
    projects: [
      {
        slug: "biofeedback-emg",
        title: "Biofeedback EMG",
        blurb:
          "Closed-loop physiological feedback from the body — early EMG acquisition still used as a sensing reference for adaptive control ideas.",
        tags: ["Sensing", "Arduino"],
        lang: "Java",
        status: "public",
        href: "https://github.com/fractalclockwork/biofeedback_emg",
        cta: "Open repo",
      },
    ],
  },
  {
    id: "archive",
    label: "Hardware Archive",
    title: "R&D bench & studio — secondary to the Research Engineer story",
    intro:
      "Historical retro-computing, ferrite planes, and CRT drive work show craft and curiosity. They support the identity above; they do not redefine it.",
    projects: [
      {
        slug: "core-memory-redux",
        title: "Core Memory Redux",
        blurb:
          "Prove the driver in simulation before physical risk — fidelity-gated SIL ladder for a 64×64 coincident-current core-memory plane, from SPICE through ideal N×N models.",
        tags: ["Hardware", "Simulation", "SIL"],
        lang: "Python",
        status: "public",
        href: "https://github.com/fractalclockwork/core-memory-redux",
        cta: "Open repo",
      },
      {
        slug: "core-memory",
        title: "Core Memory",
        blurb:
          "Bring a real 9″ ferrite plane back under software control — drive and sense a 64×64 array (4,096 bits).",
        tags: ["Hardware", "Electronics"],
        lang: "Python",
        status: "public",
        href: "https://github.com/fractalclockwork/core-memory",
        cta: "Open repo",
      },
      {
        slug: "crt-drive",
        title: "CRT Drive",
        blurb:
          "Replace sealed drive ASICs on the bench — open firmware that generates sync and video for analog CRTs and TVs from a microcontroller.",
        tags: ["Firmware", "Retrocompute", "Hardware"],
        lang: "C",
        status: "public",
        href: "https://github.com/fractalclockwork/crt-drive",
        cta: "Open repo",
      },
      {
        slug: "retro-compute",
        title: "Retro Compute",
        blurb:
          "Study guide for Yaohan Chu, Digital Computer Design Fundamentals (McGraw-Hill, 1962) — still private until ready to publish.",
        tags: ["Retrocompute", "Study"],
        lang: "Python",
        status: "private",
        note: "Private for now — will link here if published.",
      },
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    title: "Research Engineer / Scientific & Systems Consultant",
    org: "Freelance / Independent R&D",
    location: "San Francisco, CA",
    dates: "Dec 2018 – Present",
    highlights: [
      "Build computational systems that bridge physical instrumentation, embedded hardware, imaging modalities, and high-performance software.",
      "GPU-accelerated C++/CUDA and Python pipelines for CT/radio reconstruction and artifact correction; microwave resonant substrate analysis; ECAD/PCB and MCAD fixtures for firmware validation.",
      "Containerized SDR and multi-MCU HWIL labs (rad-lab, CEDE/cede-labgrid), fluorescence spectrometer acquisition (spectrometer-lab), and high-rate sensor pipelines for synchronized telemetry.",
    ],
  },
  {
    title: "Senior HW/SW Research & Development Engineer",
    org: "GridNet",
    location: "San Francisco, CA",
    dates: "Oct 2013 – Nov 2018",
    highlights: [
      "Embedded radio modem firmware and Linux kernel networking drivers for sub-GHz smart-grid telemetry and LTE CAT-4/CAT-M M2M platforms.",
      "SDR protocol analysis and cross-layer debugging across custom RF hardware, firmware, and embedded Linux runtimes in high-interference environments.",
    ],
  },
  {
    title: "Instructor / Educator & Community Mentor",
    org: "TechShop & Humanmade",
    location: "San Francisco, CA",
    dates: "2012 – Present (Concurrent)",
    highlights: [
      "Hands-on workshops in CNC machining, digital fabrication, microcontroller programming, CAD/CAM, and shop safety for research engineers and makers.",
      "Guided entrepreneurs and researchers through rapid prototyping, board bring-up, and electro-mechanical assembly.",
    ],
  },
  {
    title: "Computer Scientist, Design Engineer & Inventor",
    org: "Freelance Consultant",
    location: "San Francisco, CA",
    dates: "May 2011 – Oct 2013",
    highlights: [
      "Mechatronic product development spanning CAD/CAM, CNC, PCB layout, and embedded software across multidisciplinary teams.",
      "Bioelectrical acquisition front-ends and wavelet analysis for real-time physiological feedback (US Patent Application 61834836).",
    ],
  },
  {
    title: "Operating Systems & Integration Engineer",
    org: "OpenTV",
    location: "San Francisco, CA & Amsterdam, NL",
    dates: "Oct 2004 – May 2011",
    highlights: [
      "Embedded Linux device drivers and networking stacks for global digital television hardware deployed at consumer scale.",
      "Global software releases and on-site driver integration with vendors and operators across Europe, Australia, and the Americas.",
    ],
  },
  {
    title: "Systems Engineer & Hardware Developer",
    org: "Freelance / SFSU / EngineX / Net.World",
    location: "San Francisco Bay Area",
    dates: "1998 – 2004",
    highlights: [
      "Low-level C and ARM Assembly for hardware TCP/IP TOE ASICs (Iready); telescope control and scientific computing at SFSU Observatory; enterprise networking and VoIP infrastructure.",
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
  email: "brentathorne@gmail.com",
  github: "https://github.com/fractalclockwork",
  linkedin: "https://linkedin.com/in/brent-thorne-a581554",
  resumePath: "/resume.pdf",
  bio: "Research Engineer bridging physical hardware constraints with high-performance scientific software. Over 20 years across embedded Linux, wireless stacks, computational imaging, and reproducible HPC — with graduate work at UC Berkeley (MSSE) in CUDA, parallel algorithms, and simulation frameworks.",
  focus: [
    "Scientific computing & AI: CUDA, MPI, OpenMP, UPC++, multi-GPU scaling; molecular dynamics (GROMACS, LAMMPS, OpenMM); PyTorch, TensorFlow, SciPy, NumPy",
    "Imaging, instrumentation & sensing: CT/radio reconstruction, cellular image analysis, automated artifact correction, fluorescence spectroscopy (RS-232/DAQ), V4L2/GStreamer, OpenCV, SDR",
    "Embedded systems & Linux drivers: C/C++, Embedded Linux, kernel drivers, Device Trees, DMA, RTOS (ThreadX), Yocto, board bring-up, SPI/I2C/UART/CAN, sub-GHz RF, LTE CAT-M",
    "Mechatronics & field infrastructure: CAD/CAM, CNC, ECAD/PCB, FPGA prototyping (Verilog, Quartus), remote observatories, RF link budgets & telemetry",
  ],
  education: [
    "M.S., Molecular Science & Software Engineering — UC Berkeley (2026)",
    "Certificate, Applied Data Science — MIT (2023)",
    "Non-Matriculated Post-Baccalaureate Studies in Physics & Engineering — UC Berkeley & SFSU (2000–2022)",
    "B.S., Electronics Engineering Technology — Hamilton Technical College (1993)",
  ],
  patent:
    "US Patent Application 61834836 — System for Optimal Physical Exercise and Training (Inventor): closed-loop biometric monitoring and adaptive control with real-time bioelectrical signal processing.",
};
