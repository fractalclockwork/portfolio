---
name: portfolio-arch-diagrams
description: >-
  Design, generate, wire up, and validate dark-theme precision-lab SVG
  architecture and topology diagrams for portfolio projects and capability
  compounding sections. Use when creating or updating SVG diagrams in
  public/diagrams/, building interactive SVG capability topologies in
  src/components/, or adding visual artifacts to src/data/portfolioData.ts.
---

# Portfolio Architecture & Topology SVG Diagrams

This skill defines the visual design system, 4-stage horizontal project diagram geometry, 3-Tier Capability Compounding Topology pattern, strict UTF-8/XML encoding rules, and local browser validation loop for the portfolio.

## 1. Visual Design System & Geometry

### Canvas & Root Attributes
- Dimensions: `viewBox="0 0 800 220" width="800" height="220"`
- Prolog: Always start with `<?xml version="1.0" encoding="UTF-8"?>`
- Root `<svg>` must include `xmlns="http://www.w3.org/2000/svg"`, `fill="none"`, `role="img"`, and `aria-labelledby="title desc"`, followed by `<title id="title">` and `<desc id="desc">`.

### Precision-Lab Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--ink` | `#070b12` | Root canvas background fill |
| `--card` | `#0e1520` | Stage card container fill (`rx="4"`) |
| `--secondary` | `#121a26` | Inner sub-component pill fill (`rx="3"`) |
| `--accent` | `#14202e` | Bottom status badge fill (cyan theme, `rx="2"`) |
| `--brass-bg` | `#1a1814` | Bottom status badge fill (brass safety/gate theme, `rx="2"`) |
| `--signal` | `#3dcfbf` | Primary borders, grid lines (`stroke-opacity="0.06"`), arrows, active stage header |
| `--signal-bright` | `#7aefe0` | Highlighted status badge text |
| `--brass` | `#c4a574` | Top diagram header, stage index headers, safety/verification borders & arrows |
| `--foreground` | `#e4eaf2` | Stage titles and inner pill labels |
| `--steel` | `#8a96a8` | Monospace bullet points (`- item`) |

### Typography Stacks
Never reference external web fonts inside the SVG (`<img>` sandboxing blocks external resources). Always use system stacks:
- **Monospace**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- **Sans-serif**: `ui-sans-serif, system-ui, sans-serif`

### 4-Stage Horizontal Layout (`800 x 220`)
1. **Top Header Bar**:
   - `<text x="24" y="26" fill="#c4a574" font-size="10" letter-spacing="2">` (`ARCHITECTURE // ...` or `TOPOLOGY // ...`)
   - Divider line: `<line x1="24" y1="36" x2="776" y2="36" stroke="#3dcfbf" stroke-opacity="0.18" stroke-width="1"/>`
2. **Four Stage Cards** (`y="54"`, `height="142"`, `rx="4"`):
   - Standard X positions & widths (adjustable by a few pixels to fit labels cleanly within `x=24..776`):
     - Stage 01: `transform="translate(24, 54)"`, `width="156..164"`
     - Stage 02: `transform="translate(222..228, 54)"`, `width="152..174"`
     - Stage 03: `transform="translate(420..438, 54)"`, `width="156..174"`
     - Stage 04: `transform="translate(634..636, 54)"`, `width="140..142"`
   - Connectors: `<line x1="..." y1="125" x2="..." y2="125" stroke="#3dcfbf" stroke-width="1.5" marker-end="url(#arrow-cyan)"/>` between stages.
3. **Card Interior Variants**:
   - **Stacked Pill Card** (e.g., engines, backends, bench nodes):
     - Header at `y="22"` (`01 / STAGE NAME`)
     - Three pills at `y="34"`, `y="68"`, `y="102"` (`height="28"`, `rx="3"`, `fill="#121a26"`)
   - **Spec / Detail Card** (e.g., core harness, safety gate, verification):
     - Header at `y="22"` (`02 / STAGE NAME`)
     - Bold title at `y="46"` (`font-size="12..13" font-weight="600" fill="#e4eaf2"`)
     - Three monospace bullets at `y="64..66"`, `y="82..84"`, `y="100..102"` (`font-size="10" fill="#8a96a8"`, prefix `- `)
     - Footer status badge at `y="112"` (`height="18" rx="2" fill="#14202e"`), label at `y="124"` (`font-size="9" letter-spacing="1"`)

---

## 2. Strict UTF-8 & Browser `<img>` Rules

Browsers decode `<img src="...svg">` through a strict XML parser in an isolated document mode:
1. **ASCII-Safe Text Only**: Never put raw Latin-1 bytes (`0xb7` middot, `0x94`, unencoded symbols) in SVG text nodes—any single invalid UTF-8 byte causes Chrome/Firefox to reject the entire image (`naturalWidth = 0`).
   - Use `/` in stage headers (`01 / STAGE`) and `- ` for bullet items.
   - Escape all ampersands and angle brackets (`&amp;`, `&lt;`, `&gt;`), or spell out `and`.
2. **Unique `<defs>` IDs**: Give `<pattern>` and `<marker>` IDs a project-specific suffix (e.g., `grid-spec`, `arrow-cyan-spec`) so inline or cached SVGs never collide.
3. **Eager Image Rendering in Next.js**:
   - In `src/components/project-list.tsx`, render diagrams with `src={withBasePath(project.diagramUrl)}`, `loading="eager"`, `decoding="async"`, and `className="h-auto w-full opacity-90 transition-opacity hover:opacity-100"`.
   - Do not use `loading="lazy"` inside Framer Motion `whileInView` containers (initial `opacity: 0` can delay lazy-load triggers).

---

## 3. Step-by-Step Workflow

```
Task Progress:
- [ ] Step 1: Design 4-stage architecture/topology flow from project blurb & domain
- [ ] Step 2: Write public/diagrams/<slug>-arch.svg using the template below
- [ ] Step 3: Wire diagramUrl and diagramAlt in src/data/portfolioData.ts
- [ ] Step 4: Run python3 .cursor/skills/portfolio-arch-diagrams/scripts/validate_svg.py
- [ ] Step 5: Verify build (npm run lint && npm run build) and local browser rendering
```

### Reference Template

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 220" width="800" height="220" fill="none" role="img" aria-labelledby="title desc">
  <title id="title">Project Name architecture</title>
  <desc id="desc">Four-stage architecture summary for screen readers.</desc>
  <defs>
    <pattern id="grid-slug" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#3dcfbf" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
    <marker id="arrow-cyan-slug" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#3dcfbf"/>
    </marker>
    <marker id="arrow-brass-slug" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#c4a574"/>
    </marker>
  </defs>

  <rect width="800" height="220" fill="#070b12"/>
  <rect width="800" height="220" fill="url(#grid-slug)"/>

  <text x="24" y="26" fill="#c4a574" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="10" letter-spacing="2">
    ARCHITECTURE // SYSTEM SUBTITLE
  </text>
  <line x1="24" y1="36" x2="776" y2="36" stroke="#3dcfbf" stroke-opacity="0.18" stroke-width="1"/>
  <!-- 4 stage groups + 3 connector lines -->
</svg>
```

### Validation Command

Always run the validation script after creating or editing any diagram:

```bash
python3 .cursor/skills/portfolio-arch-diagrams/scripts/validate_svg.py
```

Only proceed once all SVGs report `PASS` (valid UTF-8, strict XML, `800x220` viewBox, no forbidden elements, and rasterizer verification).

---

## 4. Capability Compounding 3-Tier Topology Pattern (Trajectory Section)

When visualizing career or engineering progression (e.g., `src/components/trajectory-topology.tsx` backed by `capabilityTiers` and `trajectory` in `src/data/portfolioData.ts`), use a **Capability Compounding Model** rather than a linear chronological list.

### A. 3-Tier Layer Architecture
1. **Tier 01 — Foundational Layer (`emerald` / `#34d399`)**: Low-level craft, bare-metal bring-up, kernel drivers, wireless protocol stacks, and physical hardware intuition.
2. **Tier 02 — Bridge Layer (`brass` / `#c4a574`)**: Systems integration, Labgrid/SDR HWIL automation, synchronized telemetry, and optical/RF instrument DAQ.
3. **Tier 03 — Scale & Application Layer (`cyan` / `#3dcfbf`)**: GPU/CUDA parallel numerics, distributed HPC validation (`hpc-runner`), and AI-assisted scientific workflows.

### B. Node Anatomy & Messaging Rules
- **Paradigm Titles**: Title nodes by transferable core engineering paradigms (e.g., *Wireless Systems & Kernel Drivers*, *HPC & Parallel Numerics*), not job titles.
- **Constraint -> Capability Microcopy**: Frame each node around:
  - `constraint`: Physical or computational bottleneck solved.
  - `capability`: Compounded engineering system or outcome.
  - `substrate`: Key protocols, languages, and hardware interfaces.
- **Downstream Navigation (`href` + `targetLabel`)**: Wrap each SVG `<g>` node (and mobile card) in an `<a href="#...">` anchor that jumps directly to the corresponding project shelf (`#archive`, `#embedded`, `#imaging`, `#science`, `#featured`).
- **Non-Linear Feedback Loop**: Include a dashed return bus at the bottom of the SVG showing how Tier 03 modeling constraints feed back into Tier 02/01 custom sensor, PMT, and HWIL bench design.

### C. Responsive Dual-Mode Rendering
- **Desktop (`hidden md:block`, `>= 768px`)**: Render a full interactive inline `<svg viewBox="0 0 1080 590">` with 3 tier columns, vertical intra-tier arrows, horizontal/diagonal cross-tier arrows, and the bottom feedback loop bus.
- **Mobile (`md:hidden`, `< 768px`)**: Render a structured 3-tier CSS Grid (`grid gap-4 sm:grid-cols-2`) of clickable cards so text and substrates remain legible on small screens without horizontal overflow.

