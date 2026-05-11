---
layout: default
title: Brent A. Thorne
---

**Embedded Systems Engineer • Scientific Computing Specialist • R&D Platform Architect**  
_Firmware + Drivers • Real-Time Sensing • HPC Optimization • Applied AI_

I design and build the low-level software that makes hardware intelligent — from kernel drivers and real-time sensor pipelines to GPU-accelerated scientific computing. I'm most at home where firmware meets physics and where careful engineering turns complex systems into reliable platforms.

![](https://img.shields.io/badge/C/C++-11/14/17/20/23-blue)
![](https://img.shields.io/badge/Linux-Kernel_Dev-informational)
![](https://img.shields.io/badge/CUDA-13.2-green)
![](https://img.shields.io/badge/Python-3.10-informational)
![](https://img.shields.io/badge/TF/PyTorch-dual)
![](https://img.shields.io/badge/Nvidia-Blackwell-blue)

---

# What I Do

I build intelligent, resilient systems at the intersection of **embedded firmware**, **real-time sensing**, and **scientific computing**. My work focuses on:

- **Embedded Linux drivers** and hardware integration (I2C, SPI, UART, CAN)  
- **Real-time video + sensor acquisition pipelines** (GStreamer, V4L2, FFmpeg)  
- **AI/ML deployment** in constrained environments (PyTorch, CUDA)  
- **Scientific DevOps**: reproducible CI/CD, Docker, GitHub Actions  
- **HPC acceleration** with SIMD (AVX2), OpenMP, MPI, and custom CUDA kernels  

I specialize in projects requiring **low-level insight** and **high-level systems thinking**.

---

# Featured Projects {#projects}

Below are **project cards** with **architecture diagrams** (Mermaid) to illustrate system design and data flow.  
Repositories are private but **available upon request**.

<div class="project-card" markdown="1">

## Spectral Radar Decomposition Driver (Kernel-Space)

Developed a Linux kernel driver for a radar module streaming high-rate ADC data via DMA into real-time FFT engines.

**Impact:**  
Enabled low-latency RF signal capture and spectral decomposition for imaging and diagnostics.

**Results:**  
Zero-copy DMA transfer via `mmap` ring buffer, sustaining continuous ADC streaming without frame drops at full sample rate.

**Tech:**  
C, Kernel Modules, DMA, mmap, FFTW

**Repo:** Private — available upon request

```mermaid
flowchart LR
    ADC[High-Rate ADC] --> DMA[DMA Engine]
    DMA --> KMOD[Kernel Driver]
    KMOD --> RB[Ring Buffer mmap]
    RB --> FFT[User-Space FFT Engine]
    FFT --> APP[Analysis Application]
```

</div>

<div class="project-card" markdown="1">

## Sphere Point Distribution for Agent Initialization

Generated uniform and quasi-uniform spherical distributions using Fibonacci, geodesic, and Lissajous curves with CUDA-accelerated force modeling.

**Impact:**  
Optimized initialization for agent-based simulations and volumetric analysis.

**Results:**  
Achieved near-uniform point distributions on the sphere with GPU-accelerated electrostatic relaxation, orders of magnitude faster than CPU-only baselines.

**Tech:**  
CUDA, Python, AVX2, Matplotlib

**Repo:** Private — available upon request

```mermaid
flowchart TD
    INIT["Initialize Points on Sphere"] --> FORCE["Compute Repulsive Forces (CUDA)"]
    FORCE --> UPDATE["Update Positions"]
    UPDATE --> CHECK["Convergence Check"]
    CHECK -->|Not Converged| FORCE
    CHECK -->|Converged| OUTPUT["Final Distribution"]
```

</div>

<div class="project-card" markdown="1">

## Multi-Camera Real-Time Pipeline (V4L2 + RTSP)

Built synchronized multi-camera acquisition with low-latency streaming via MediaMTX.

**Impact:**  
Supports embedded vision applications on constrained compute platforms.

**Results:**  
Synchronized multi-stream capture with frame-accurate alignment, delivered at low latency over RTSP for downstream processing.

**Tech:**  
V4L2, FFmpeg, MediaMTX, GStreamer

**Repo:** Private — available upon request

```mermaid
flowchart LR
    CAM1[Camera 1] --> V4L2[V4L2 Capture]
    CAM2[Camera 2] --> V4L2
    V4L2 --> SYNC[Frame Sync Module]
    SYNC --> ENCODE[FFmpeg Encoder]
    ENCODE --> RTSP[MediaMTX RTSP Server]
    RTSP --> CLIENT[Client Viewer / Processing Node]
```

</div>

<div class="project-card" markdown="1">

## Disaster Image Severity Classification (CNNs)

Fine-tuned convolutional models to classify damage severity from crisis imagery.

**Impact:**  
Explored multimodal cues for humanitarian response modeling.

**Results:**  
Compared fine-tuned CNN architectures (ResNet, EfficientNet) with transfer learning to classify damage severity across multiple disaster categories.

**Tech:**  
PyTorch, TensorFlow, NumPy, OpenCV

**Repo:** [github.com/fractalclockwork/Data200](https://github.com/fractalclockwork/Data200)

```mermaid
flowchart LR
    IMG[Input Image] --> PREP[Preprocessing]
    PREP --> CNN[Convolutional Backbone]
    CNN --> FC[Dense Layers]
    FC --> OUT[Severity Classification]
```

</div>

---

# Technical Focus Areas {#skills}

- **Embedded:** Yocto, Buildroot, V4L2, DMA, Device Trees  
- **HPC:** OpenMP, MPI, AVX2, CUDA kernels  
- **AI/ML:** PyTorch, TensorFlow, ONNX, OpenCV  
- **DevOps:** Docker, GitHub Actions, CI/CD workflows  
- **Visualization:** Matplotlib, VTK, Mayavi  

---

# Education {#education}

- **M.S., Molecular Science & Software Engineering** — UC Berkeley _(2026)_  
- **Certificate, Applied Data Science** — MIT _(2023)_  
- **Open University, College of Science & Engineering** — SFSU _(1999–2021)_  
- **B.S., Electronics Engineering Technology** — Hamilton Technical College _(1993)_  

---

# Experience {#experience}

### Freelance Research Engineer _(2018–Present)_
- Designed and implemented Linux kernel drivers for radar and imaging hardware, including DMA-based high-rate ADC capture
- Built real-time multi-camera acquisition pipelines (V4L2, GStreamer, RTSP) for embedded vision platforms
- Developed CUDA-accelerated scientific computing tools for agent-based simulation and volumetric analysis

### Senior HW/SW R&D Engineer — Grid Net _(2013–2018)_
- Led firmware and driver development for smart-grid metering modem platforms deployed across utility networks
- Wrote and maintained Linux kernel modules for custom communication hardware (SPI, UART, CAN)
- Owned board bring-up, bootloader configuration, and Yocto-based BSP integration for ARM-based field devices

### Systems & Integration Engineer — OpenTV _(2004–2011)_
- Developed embedded Linux software for broadband set-top boxes and interactive media platforms
- Integrated protocol stacks (MPEG-TS, DVB, IP) across middleware and hardware abstraction layers
- Collaborated with silicon vendors on driver development and system-level performance tuning  

---

# Contact {#contact}

- [brentathorne@gmail.com](mailto:brentathorne@gmail.com)  
- [LinkedIn](https://www.linkedin.com/in/brent-thorne-a581554)  
- [GitHub Pages](https://fractalclockwork.github.io)  
- [Resume (PDF)](/assets/Brent_Thorne_Resume.pdf)

---

> _"Simple systems can grow complex behavior. Complex systems require careful simplicity."_
