import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "\\frac — La La Playa",
  description:
    "\\frac (frac) / La La Playa portfolio — formerly fractalclockwork: hardware research, scientific computing, and agentic engineering.",
  openGraph: {
    title: "\\frac — La La Playa",
    description:
      "Curated portfolio: CRT Drive, core memory, HPC tooling, and reproducible lab infrastructure.",
    type: "website",
    url: "https://fractalclockwork.github.io/portfolio/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${source.variable} ${bricolage.variable} ${plexMono.variable} dark h-full`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
