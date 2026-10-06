import { ContentSections } from "@/components/content-sections";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <Hero />
      <ContentSections />
      <SiteFooter />
    </main>
  );
}
