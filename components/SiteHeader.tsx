"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isIndex = pathname === "/";
  const isDossier = pathname.startsWith("/buildings");
  const isArchive = pathname.startsWith("/archive");

  return (
    <header className="relative w-full bg-concrete z-50">
      <div className="max-w-[1440px] mx-auto h-[76px] px-6 sm:px-12 flex items-center justify-between relative">
        {/* Left: Brand */}
        <div className="flex items-center gap-6 md:gap-12">
          <Link
            href="/"
            className="font-black text-[22px] sm:text-[24px] tracking-tight text-ink hover:opacity-80 transition-opacity"
          >
            CONCRETE®
          </Link>

          <span className="hidden lg:inline-block font-mono text-[11px] text-muted-ink tracking-widest uppercase">
            AN INDEPENDENT ARCHITECTURE JOURNAL
          </span>
        </div>

        {/* Right: Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center space-x-8 font-mono text-[12px] tracking-wide"
        >
          <Link
            href="/"
            className={`transition-colors py-1 ${
              isIndex
                ? "text-signal-red font-medium"
                : "text-ink hover:text-signal-red"
            }`}
          >
            01&nbsp;&nbsp;INDEX
          </Link>
          <Link
            href="/buildings/barbican-estate"
            className={`transition-colors py-1 ${
              isDossier
                ? "text-signal-red font-medium"
                : "text-ink hover:text-signal-red"
            }`}
          >
            02&nbsp;&nbsp;DOSSIER
          </Link>
          <Link
            href="/archive"
            className={`transition-colors py-1 flex items-center gap-1 ${
              isArchive
                ? "text-signal-red font-medium"
                : "text-ink hover:text-signal-red"
            }`}
          >
            03&nbsp;&nbsp;ARCHIVE&nbsp;↗
          </Link>
        </nav>

        {/* Mobile menu trigger button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden font-mono text-[12px] text-ink py-2 px-3 border border-rule-grey bg-concrete hover:bg-white"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? "CLOSE [×]" : "MENU [≡]"}
        </button>

        {/* 1px Editorial bottom dividing rule */}
        <div className="absolute bottom-0 left-6 right-6 sm:left-12 sm:right-12 h-px bg-rule-grey" />
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-concrete border-b border-rule-grey px-6 py-6 space-y-4 font-mono text-[13px]">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 ${
              isIndex ? "text-signal-red font-semibold" : "text-ink"
            }`}
          >
            01  INDEX
          </Link>
          <Link
            href="/buildings/barbican-estate"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 ${
              isDossier ? "text-signal-red font-semibold" : "text-ink"
            }`}
          >
            02  DOSSIER
          </Link>
          <Link
            href="/archive"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 ${
              isArchive ? "text-signal-red font-semibold" : "text-ink"
            }`}
          >
            03  ARCHIVE ↗
          </Link>
        </div>
      )}
    </header>
  );
}
