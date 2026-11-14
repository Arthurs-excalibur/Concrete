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
  title: "CONCRETE — Architecture Without Apology",
  description:
    "An independent architecture journal exploring brutalist architecture, raw materials, monumental structures, and unconventional forms.",
  openGraph: {
    title: "CONCRETE — Architecture Without Apology",
    description:
      "Independent architectural journal documenting brutalism and the built world.",
    type: "website",
  },
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
