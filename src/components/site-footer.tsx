import { about } from "@/lib/projects";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-signal/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-tech text-[11px] tracking-[0.2em] text-steel/70 uppercase">
          © {year} {about.name} · {about.brand}
        </p>
        <p className="max-w-md text-sm leading-relaxed text-steel/60">
          Curated public work. Old Man Tech branding is retired from this
          surface; remotes stay untouched.
        </p>
      </div>
    </footer>
  );
}
