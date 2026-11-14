"use client";

import Link from "next/link";

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-concrete border-t border-rule-grey/40 mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 py-10 sm:py-12 flex flex-col justify-between">
        {/* Upper row */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 pb-8">
          <Link
            href="/"
            className="font-black text-[28px] sm:text-[34px] tracking-tight text-ink hover:opacity-80 transition-opacity"
          >
            CONCRETE®
          </Link>

          <div className="font-mono text-[11px] text-muted-ink leading-relaxed">
            <p>AN INDEPENDENT RECORD</p>
            <p>OF THE BUILT ENVIRONMENT.</p>
          </div>

          <div className="flex items-center space-x-6 font-mono text-[11px] text-ink">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-signal-red transition-colors"
            >
              INSTAGRAM ↗
            </a>
            <a
              href="mailto:editorial@concrete-journal.org"
              className="hover:text-signal-red transition-colors"
            >
              CONTACT ↗
            </a>
            <button
              onClick={scrollToTop}
              className="text-muted-ink hover:text-signal-red transition-colors"
            >
              TOP ↑
            </button>
          </div>
        </div>

        {/* 1px Editorial rule */}
        <div className="h-px bg-rule-grey w-full mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] text-muted-ink tracking-wider">
          <p>© CONCRETE JOURNAL 2026</p>
          <p>BUILT TO LAST. DESIGNED TO QUESTION.</p>
        </div>
      </div>
    </footer>
  );
}
