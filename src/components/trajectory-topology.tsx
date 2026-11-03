"use client";

import {
  capabilityTiers,
  trajectory,
  type CapabilityTier,
  type TrajectoryStep,
} from "@/data/portfolioData";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const tierPalette: Record<
  CapabilityTier["accent"],
  {
    stroke: string;
    headerFill: string;
    badgeBg: string;
    badgeText: string;
    pillBorder: string;
    cardBorderClass: string;
    badgeClass: string;
  }
> = {
  emerald: {
    stroke: "#34d399",
    headerFill: "#34d399",
    badgeBg: "#0b241d",
    badgeText: "#6ee7b7",
    pillBorder: "rgba(52, 211, 153, 0.35)",
    cardBorderClass: "border-emerald-500/25 hover:border-emerald-400/55",
    badgeClass: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
  },
  brass: {
    stroke: "#c4a574",
    headerFill: "#c4a574",
    badgeBg: "#1f1912",
    badgeText: "#e0c292",
    pillBorder: "rgba(196, 165, 116, 0.38)",
    cardBorderClass: "border-brass/30 hover:border-brass/60",
    badgeClass: "bg-amber-500/10 text-brass border-brass/30",
  },
  cyan: {
    stroke: "#3dcfbf",
    headerFill: "#3dcfbf",
    badgeBg: "#0d2424",
    badgeText: "#7aefe0",
    pillBorder: "rgba(61, 207, 191, 0.38)",
    cardBorderClass: "border-signal/30 hover:border-signal/60",
    badgeClass: "bg-signal/10 text-signal-bright border-signal/30",
  },
};

function wrapLines(text: string, maxChars: number): [string, string] {
  const words = text.split(" ");
  let line1 = "";
  let line2 = "";
  for (const w of words) {
    if ((line1 + " " + w).trim().length <= maxChars) {
      line1 = (line1 + " " + w).trim();
    } else {
      line2 = (line2 + " " + w).trim();
    }
  }
  if (line2.length > maxChars + 4) {
    line2 = line2.slice(0, maxChars + 1).trimEnd() + "...";
  }
  return [line1, line2];
}

function SvgCapabilityNode({
  step,
  x,
  y,
  accent,
}: {
  step: TrajectoryStep;
  x: number;
  y: number;
  accent: CapabilityTier["accent"];
}) {
  const pal = tierPalette[accent];
  const [c1, c2] = wrapLines(step.constraint, 46);
  const [o1, o2] = wrapLines(step.capability, 46);
  const subText =
    step.substrate.length > 54
      ? step.substrate.slice(0, 52) + "..."
      : step.substrate;

  return (
    <a
      href={step.href}
      aria-label={`${step.phase} ${step.label} — jump to ${step.targetLabel}`}
      className="group cursor-pointer focus:outline-none"
    >
      <g transform={`translate(${x}, ${y})`}>
        <rect
          width="310"
          height="190"
          rx="5"
          fill="#0e1520"
          stroke={pal.stroke}
          strokeOpacity="0.42"
          strokeWidth="1.25"
          className="transition-all duration-200 group-hover:fill-[#111b29] group-hover:stroke-opacity-95"
        />

        {/* Phase + Context Header */}
        <rect
          x="14"
          y="12"
          width="32"
          height="18"
          rx="3"
          fill={pal.badgeBg}
          stroke={pal.stroke}
          strokeOpacity="0.45"
          strokeWidth="0.8"
        />
        <text
          x="30"
          y="24"
          textAnchor="middle"
          fill={pal.badgeText}
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
          fontSize="10"
          fontWeight="600"
          letterSpacing="1.2"
        >
          {step.phase}
        </text>
        <text
          x="54"
          y="24"
          fill="#8a96a8"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
          fontSize="9.5"
          letterSpacing="1"
        >
          {step.era.toUpperCase()}
        </text>

        {/* Paradigm Title */}
        <text
          x="14"
          y="48"
          fill="#e4eaf2"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="14.5"
          fontWeight="600"
        >
          {step.label}
        </text>

        {/* Constraint -> Capability Microcopy */}
        <text
          x="14"
          y="69"
          fill="#c4a574"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
          fontSize="8.5"
          letterSpacing="1.2"
        >
          CONSTRAINT:
        </text>
        <text
          x="84"
          y="69"
          fill="#8a96a8"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="10.5"
        >
          {c1}
        </text>
        {c2 && (
          <text
            x="14"
            y="83"
            fill="#8a96a8"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="10.5"
          >
            {c2}
          </text>
        )}

        <text
          x="14"
          y="103"
          fill={pal.headerFill}
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
          fontSize="8.5"
          letterSpacing="1.2"
        >
          CAPABILITY:
        </text>
        <text
          x="84"
          y="103"
          fill="#e4eaf2"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="10.5"
        >
          {o1}
        </text>
        {o2 && (
          <text
            x="14"
            y="117"
            fill="#e4eaf2"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="10.5"
          >
            {o2}
          </text>
        )}

        {/* Substrate Bar */}
        <line
          x1="14"
          y1="132"
          x2="296"
          y2="132"
          stroke={pal.stroke}
          strokeOpacity="0.18"
          strokeWidth="1"
        />
        <text
          x="14"
          y="148"
          fill="#8a96a8"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
          fontSize="9"
          letterSpacing="0.4"
        >
          {subText}
        </text>

        {/* Downstream Link Pill */}
        <rect
          x="14"
          y="158"
          width="282"
          height="20"
          rx="3"
          fill="#121a26"
          stroke={pal.stroke}
          strokeOpacity="0.28"
          strokeWidth="0.8"
        />
        <text
          x="22"
          y="171"
          fill={pal.badgeText}
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
          fontSize="9"
          letterSpacing="1.2"
        >
          {`DOWNSTREAM // JUMP TO ${step.targetLabel.toUpperCase()}`}
        </text>
        <text
          x="286"
          y="171"
          textAnchor="end"
          fill={pal.badgeText}
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
          fontSize="10"
        >
          {"->"}
        </text>
      </g>
    </a>
  );
}

export function TrajectoryTopology() {
  const byTier = (tierId: CapabilityTier["id"]) =>
    trajectory.filter((t) => t.tier === tierId);

  const tierX: Record<CapabilityTier["id"], number> = {
    foundation: 24,
    bridge: 385,
    scale: 746,
  };

  return (
    <div className="mt-12">
      {/* Desktop Viewport (>= 768px): Full Interactive Vector Capability Topology */}
      <motion.div
        className="hidden overflow-hidden rounded-md border border-signal/20 bg-ink/95 md:block"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={reveal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1080 590"
          className="h-auto w-full select-none"
          role="img"
          aria-labelledby="traj-topo-title traj-topo-desc"
        >
          <title id="traj-topo-title">
            Capability Compounding 3-Tier Engineering Topology
          </title>
          <desc id="traj-topo-desc">
            Three-tier system diagram showing how Foundational low-level
            hardware and kernel craft compound into Bridge HWIL and imaging
            instrumentation, then Scale into parallel HPC and AI-assisted
            scientific systems, with a feedback loop back to custom sensor and
            bench hardware. Click any node to jump to its project shelf.
          </desc>

          <defs>
            <pattern
              id="grid-traj-topo"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="#3dcfbf"
                strokeOpacity="0.055"
                strokeWidth="1"
              />
            </pattern>
            <marker
              id="traj-arrow-emerald"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#34d399" />
            </marker>
            <marker
              id="traj-arrow-brass"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#c4a574" />
            </marker>
            <marker
              id="traj-arrow-cyan"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#3dcfbf" />
            </marker>
          </defs>

          <rect width="1080" height="590" fill="#070b12" />
          <rect width="1080" height="590" fill="url(#grid-traj-topo)" />

          {/* Top Telemetry & Legend Bar */}
          <text
            x="24"
            y="28"
            fill="#c4a574"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
            fontSize="10.5"
            letterSpacing="2"
          >
            CAPABILITY COMPOUNDING TOPOLOGY // 3-TIER SYSTEM ARCHITECTURE
          </text>
          <text
            x="1056"
            y="28"
            textAnchor="end"
            fill="#7aefe0"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
            fontSize="9.5"
            letterSpacing="1.4"
          >
            INTERACTIVE // CLICK ANY NODE TO JUMP TO SHELF
          </text>
          <line
            x1="24"
            y1="40"
            x2="1056"
            y2="40"
            stroke="#3dcfbf"
            strokeOpacity="0.2"
            strokeWidth="1"
          />

          {/* 3 Tier Column Headers */}
          {capabilityTiers.map((tier) => {
            const x = tierX[tier.id];
            const pal = tierPalette[tier.accent];
            return (
              <g key={tier.id} transform={`translate(${x}, 54)`}>
                <rect
                  width="310"
                  height="42"
                  rx="4"
                  fill="#0c121c"
                  stroke={pal.stroke}
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
                <text
                  x="14"
                  y="18"
                  fill={pal.headerFill}
                  fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                  fontSize="9.5"
                  fontWeight="600"
                  letterSpacing="1.6"
                >
                  {`${tier.index} // ${tier.name.toUpperCase()}`}
                </text>
                <text
                  x="14"
                  y="33"
                  fill="#8a96a8"
                  fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                  fontSize="9.5"
                  letterSpacing="0.6"
                >
                  {tier.subtitle}
                </text>
              </g>
            );
          })}

          {/* Directed Connectors: Intra-Tier Vertical Compounding */}
          {/* 01 -> 02 */}
          <line
            x1="179"
            y1="302"
            x2="179"
            y2="328"
            stroke="#34d399"
            strokeWidth="1.5"
            markerEnd="url(#traj-arrow-emerald)"
          />
          {/* 03 -> 04 */}
          <line
            x1="540"
            y1="302"
            x2="540"
            y2="328"
            stroke="#c4a574"
            strokeWidth="1.5"
            markerEnd="url(#traj-arrow-brass)"
          />
          {/* 05 -> 06 */}
          <line
            x1="901"
            y1="302"
            x2="901"
            y2="328"
            stroke="#3dcfbf"
            strokeWidth="1.5"
            markerEnd="url(#traj-arrow-cyan)"
          />

          {/* Directed Connectors: Cross-Tier Forward Compounding */}
          {/* Top Row: 01 -> 03 and 03 -> 05 */}
          <line
            x1="334"
            y1="207"
            x2="381"
            y2="207"
            stroke="#34d399"
            strokeWidth="1.6"
            markerEnd="url(#traj-arrow-emerald)"
          />
          <line
            x1="695"
            y1="207"
            x2="742"
            y2="207"
            stroke="#c4a574"
            strokeWidth="1.6"
            markerEnd="url(#traj-arrow-brass)"
          />

          {/* Bottom Row: 02 -> 04 and 04 -> 06 */}
          <line
            x1="334"
            y1="427"
            x2="381"
            y2="427"
            stroke="#34d399"
            strokeWidth="1.6"
            markerEnd="url(#traj-arrow-emerald)"
          />
          <line
            x1="695"
            y1="427"
            x2="742"
            y2="427"
            stroke="#c4a574"
            strokeWidth="1.6"
            markerEnd="url(#traj-arrow-brass)"
          />

          {/* Diagonal Compounding Bridge: 02 (Kernel/Wireless) -> 03 (HWIL/Sensing) & 04 (Imaging) -> 05 (HPC) */}
          <path
            d="M 334 390 C 358 390, 358 245, 381 245"
            fill="none"
            stroke="#34d399"
            strokeOpacity="0.55"
            strokeWidth="1.25"
            strokeDasharray="4 3"
            markerEnd="url(#traj-arrow-emerald)"
          />
          <path
            d="M 695 390 C 718 390, 718 245, 742 245"
            fill="none"
            stroke="#c4a574"
            strokeOpacity="0.55"
            strokeWidth="1.25"
            strokeDasharray="4 3"
            markerEnd="url(#traj-arrow-brass)"
          />

          {/* Render the 6 Capability Nodes (2 per Tier Column) */}
          {capabilityTiers.map((tier) => {
            const steps = byTier(tier.id);
            const x = tierX[tier.id];
            return steps.map((step, rowIdx) => (
              <SvgCapabilityNode
                key={step.id}
                step={step}
                x={x}
                y={rowIdx === 0 ? 112 : 332}
                accent={tier.accent}
              />
            ));
          })}

          {/* Non-Linear Feedback Loop Return Bus (Bottom of Diagram) */}
          <path
            d="M 901 522 L 901 558 L 179 558 L 179 526"
            fill="none"
            stroke="#c4a574"
            strokeOpacity="0.7"
            strokeWidth="1.4"
            strokeDasharray="6 4"
            markerEnd="url(#traj-arrow-brass)"
          />
          <path
            d="M 540 558 L 540 526"
            fill="none"
            stroke="#c4a574"
            strokeOpacity="0.7"
            strokeWidth="1.4"
            strokeDasharray="4 3"
            markerEnd="url(#traj-arrow-brass)"
          />
          <rect
            x="265"
            y="545"
            width="550"
            height="24"
            rx="3"
            fill="#141821"
            stroke="#c4a574"
            strokeOpacity="0.45"
            strokeWidth="1"
          />
          <text
            x="540"
            y="561"
            textAnchor="middle"
            fill="#c4a574"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
            fontSize="9.5"
            letterSpacing="1.3"
          >
            NON-LINEAR FEEDBACK LOOP // MODELING CONSTRAINTS DRIVE CUSTOM HWIL AND SENSOR DESIGN
          </text>
        </svg>
      </motion.div>

      {/* Mobile Viewport (< 768px): Structured 3-Tier CSS Grid Fallback */}
      <div className="space-y-8 md:hidden">
        {capabilityTiers.map((tier) => {
          const steps = byTier(tier.id);
          const pal = tierPalette[tier.accent];
          return (
            <div key={tier.id} className="space-y-3">
              <div className="flex items-baseline justify-between border-b border-signal/15 pb-2">
                <p className="font-tech text-xs font-medium tracking-[0.18em] text-brass uppercase">
                  {tier.index} · {tier.name}
                </p>
                <span className="font-tech text-[10px] tracking-[0.12em] text-steel/80">
                  {tier.subtitle}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {steps.map((step) => (
                  <a
                    key={step.id}
                    href={step.href}
                    className={`block rounded-md border bg-card/80 p-4 transition-colors ${pal.cardBorderClass}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center rounded border px-2 py-0.5 font-tech text-[10px] tracking-[0.14em] uppercase ${pal.badgeClass}`}
                      >
                        {step.phase}
                      </span>
                      <span className="font-tech text-[10px] tracking-[0.12em] text-steel/80 uppercase">
                        {step.era}
                      </span>
                    </div>
                    <h3 className="mt-2.5 font-display text-lg font-semibold tracking-tight text-foreground">
                      {step.label}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-steel">
                      <span className="font-tech text-[10px] tracking-[0.1em] text-brass uppercase">
                        Constraint:{" "}
                      </span>
                      {step.constraint}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-foreground/90">
                      <span className="font-tech text-[10px] tracking-[0.1em] text-signal uppercase">
                        Capability:{" "}
                      </span>
                      {step.capability}
                    </p>
                    <p className="mt-3 border-t border-signal/12 pt-2 font-tech text-[10px] leading-relaxed tracking-[0.06em] text-steel/80">
                      {step.substrate}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1 font-tech text-[10px] tracking-[0.14em] text-signal uppercase">
                      Jump to {step.targetLabel}
                      <ArrowDownRight className="size-3" />
                    </p>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
        <div className="rounded-md border border-brass/30 bg-ink/80 px-4 py-3 font-tech text-[10px] leading-relaxed tracking-[0.12em] text-brass uppercase">
          Feedback Loop: High-level simulation &amp; AI modeling requirements
          feed back into custom HWIL, sensor, and detector hardware design.
        </div>
      </div>
    </div>
  );
}
