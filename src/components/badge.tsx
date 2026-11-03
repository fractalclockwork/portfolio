import type { BadgeVariant } from "@/data/portfolioData";

const badgeStyles: Record<BadgeVariant, string> = {
  active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  complete: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  archived: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
  private: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export function Badge({
  label,
  variant,
}: {
  label: string;
  variant: BadgeVariant;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-tech text-[10px] tracking-[0.16em] uppercase ${badgeStyles[variant]}`}
    >
      {label}
    </span>
  );
}
