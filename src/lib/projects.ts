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

/** Curated from inventory yes-items; maybe used sparingly; classroom dumps omitted. */
export const featured: Project[] = [
  {
    slug: "rad-lab",
    title: "rad-lab",
    blurb:
      "Containerized SDR and hardware-in-the-loop lab: role-structured toolset with human assent before TX, SIL→HWIL stages, and evidence reports for RF bring-up.",
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
      "Python RS-232 control and acquisition for a PerkinElmer LS 55 fluorescence spectrometer — prompted DC1 protocol flow, monochromator/slit positioning, serial-glitch taxonomy, and Stage 1–3 verified emission scans.",
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
      "Reproducible FPGA bring-up archive for Digilent Spartan boards — toolchain notes, board memory, and lab continuity so firmware work survives tool churn.",
    tags: ["FPGA", "Bring-up", "Lab"],
    lang: "Python",
    status: "public",
    href: "https://github.com/fractalclockwork/fpga-kit",
    cta: "Open repo",
  },
  {
    slug: "hpc-runner",
    title: "HPC Runner",
    blurb:
      "Execution-agnostic benchmarking and regression for HPC workloads — same suite across local, container, and cluster backends (GROMACS, LAMMPS, OpenMM).",
    tags: ["HPC", "Testing", "CUDA"],
    lang: "Python",
    status: "public",
    href: "https://github.com/fractalclockwork/hpc-runner",
    cta: "Open repo",
  },
];

export const sections: ProjectSection[] = [
  {
    id: "hardware",
    label: "Hardware & sensing",
    title: "Boards, drivers, and instrumentation",
    intro:
      "Physical systems and sensing stacks — fidelity-gated simulation ladders, ferrite planes, kernel drivers, CRT drive, and bioelectrical acquisition that ship as public repos.",
    projects: [
      {
        slug: "core-memory-redux",
        title: "Core Memory Redux",
        blurb:
          "Fidelity-gated SIL ladder for a 64×64 coincident-current core-memory driver — from SPICE through ideal N×N models before physical bring-up.",
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
          "Driver electronics for sensing and writing an existing 9″ ferrite core plane — a 64×64 array (4,096 bits) brought back under software control.",
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
          "Programmable CRT drive: sync and video from a microcontroller for analog CRTs and TVs — open firmware that replaces sealed drive ASICs on the bench.",
        tags: ["Firmware", "Retrocompute", "Hardware"],
        lang: "C",
        status: "public",
        href: "https://github.com/fractalclockwork/crt-drive",
        cta: "Open repo",
      },
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
        slug: "biofeedback-emg",
        title: "Biofeedback EMG",
        blurb:
          "EMG sensor stack with Arduino and Processing — early closed-loop bioelectrical acquisition still used as a sensing reference.",
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
          "Study guide for Yaohan Chu, Digital Computer Design Fundamentals (McGraw-Hill, 1962) — still private until ready to publish.",
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
      "Reproducible HPC and simulation tooling — Slurm images, MESA remote-dev, molecular examples, and containerized embedded labs.",
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
        title: "CEDE / cede-labgrid",
        blurb:
          "Containerized embedded systems lab and Labgrid hardware-in-the-loop port for multi-MCU hardware — reproducible bring-up that does not depend on one laptop.",
        tags: ["Embedded", "HWIL", "Labgrid"],
        lang: "Python",
        status: "public",
        href: "https://github.com/fractalclockwork/cede",
        cta: "Open repo",
      },
    ],
  },
  {
    id: "tooling",
    label: "Lab tooling",
    title: "Infrastructure that stays out of the way",
    intro:
      "PXE boot stacks, subtitle tooling, and courseware gateways — friction removal for the bench and the classroom.",
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

export const experience: ExperienceEntry[] = [
  {
    title: "Research Engineer / Scientific & Systems Consultant",
    org: "Freelance / Independent R&D",
    location: "San Francisco, CA",
    dates: "Dec 2018 – Present",
    highlights: [
      "Build computational systems bridging physical instrumentation, embedded hardware, imaging modalities, and high-performance software.",
      "GPU-accelerated C++/CUDA and Python pipelines for CT/radio image reconstruction, automated artifact correction, and microwave resonant substrate analysis; ECAD/PCB and MCAD fixtures for firmware validation.",
      "Containerized SDR and multi-MCU HWIL labs (rad-lab, CEDE/cede-labgrid), fluorescence spectrometer RS-232 acquisition (spectrometer-lab), V4L2/OpenCV high-rate sensor pipelines, and CI/CD for heterogeneous targets.",
    ],
  },
  {
    title: "Senior HW/SW Research & Development Engineer",
    org: "GridNet",
    location: "San Francisco, CA",
    dates: "Oct 2013 – Nov 2018",
    highlights: [
      "Embedded radio modem firmware and Linux kernel networking drivers for sub-GHz smart-grid telemetry and LTE CAT-4/CAT-M M2M communication platforms.",
      "SDR protocol analysis and cross-layer debugging across custom RF hardware, firmware, and embedded Linux runtimes in high-interference industrial environments.",
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
      "Mechatronic product development: CAD/CAM, CNC, PCB layout, and embedded software across multidisciplinary engineering teams.",
      "Bioelectrical acquisition front-ends and wavelet analysis for real-time physiological feedback (US Patent Application 61834836).",
    ],
  },
  {
    title: "Operating Systems & Integration Engineer",
    org: "OpenTV",
    location: "San Francisco, CA & Amsterdam, NL",
    dates: "Oct 2004 – May 2011",
    highlights: [
      "Embedded Linux device drivers, networking stacks (TCP/IP, UDP, HTTP, PPP), and FAT/Ethernet subsystems for global digital television hardware.",
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
  bio: "Research Engineer with over 20 years of experience in hardware–software co-design, high-performance computing, computational imaging, and real-time embedded systems. M.S. graduate from UC Berkeley’s Molecular Science and Software Engineering (MSSE) program with expertise in C++/CUDA optimization, parallel algorithms (MPI, OpenMP, UPC++), and reproducible simulation frameworks — and a long track record bringing up Linux kernel drivers, DMA pipelines, scientific instrumentation, and RF/sensing hardware at the bench.",
  focus: [
    "High-performance computing & AI: CUDA, MPI, OpenMP, UPC++, multi-GPU scaling; molecular dynamics (GROMACS, LAMMPS, OpenMM); PyTorch, TensorFlow, SciPy, NumPy",
    "Embedded systems & Linux drivers: C/C++, Embedded Linux, kernel drivers, Device Trees, DMA, RTOS (ThreadX), Yocto, board bring-up, SPI/I2C/UART/CAN, sub-GHz RF, LTE CAT-M",
    "Computational imaging, instrumentation & sensing: CT/radio reconstruction, cellular image analysis, automated artifact correction, fluorescence spectroscopy (RS-232/DAQ), V4L2/GStreamer, OpenCV, FFTW, SDR",
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
