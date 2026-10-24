import { about, withBasePath } from "@/lib/projects";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-signal/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-tech text-[11px] tracking-[0.16em] text-steel uppercase">
          © {year} {about.name}
        </p>
        <p className="text-sm text-steel">
          <a
            href={withBasePath("/blog/from-the-bench/")}
            className="transition-colors hover:text-signal"
          >
            From the bench and the cluster
          </a>
          <span className="mx-2 text-steel/40">·</span>
          Curated public work. Classroom dumps and retired joke branding stay
          off this surface.
        </p>
      </div>
    </footer>
  );
}
