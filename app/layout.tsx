import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://concrete-journal.org"),
  title: "CONCRETE",
  description:
    "An independent architecture journal exploring brutalist architecture, raw materials, monumental structures, and unconventional forms.",
  openGraph: {
    title: "CONCRETE",
    description:
      "Independent architectural journal documenting brutalism and the built world.",
    type: "website",
    images: [
      {
        url: "/logo-dark.png",
        width: 800,
        height: 600,
        alt: "CONCRETE Logo",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/logo-dark.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-light.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/logo-dark.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-concrete text-ink selection:bg-signal-red selection:text-concrete">
        {children}
      </body>
    </html>
  );
}
