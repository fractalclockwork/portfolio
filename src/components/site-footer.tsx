import { about } from "@/lib/projects";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-signal/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-tech text-[11px] tracking-[0.14em] text-steel/70">
          © {year} {about.name} · {about.brand}
          {" · "}
          <Link
            href="/blog/from-the-bench/"
            className="text-signal/80 transition-colors hover:text-signal"
          >
            From the bench
          </Link>
        </p>
        <p className="max-w-md text-sm leading-relaxed text-steel/60">
          Mark {about.brand} (formerly {about.brandLegacy}). Curated public
          work. Old Man Tech branding is retired from this surface; remotes stay
          untouched. GitHub account unchanged.
        </p>
      </div>
    </footer>
  );
}
