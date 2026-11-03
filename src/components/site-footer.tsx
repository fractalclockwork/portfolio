import { about, footerCopy, withBasePath } from "@/data/portfolioData";

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
            href={withBasePath(footerCopy.blogHref)}
            className="transition-colors hover:text-signal"
          >
            {footerCopy.blogLinkLabel}
          </a>
          <span className="mx-2 text-steel/40">—</span>
          {footerCopy.summary}
        </p>
      </div>
    </footer>
  );
}
