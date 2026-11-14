import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-concrete">
      <SiteHeader />

      <main className="flex-1 max-w-[1440px] mx-auto px-6 sm:px-12 py-24 sm:py-32 flex flex-col items-start justify-center">
        <p className="font-mono text-[12px] text-signal-red font-medium tracking-widest uppercase mb-4">
          404 / SPECIMEN NOT FOUND
        </p>

        <h1 className="font-medium text-[clamp(44px,8vw,96px)] leading-[1.0] tracking-[-0.05em] text-ink mb-6">
          Structure does<br />not exist.
        </h1>

        <p className="font-sans text-[17px] sm:text-[19px] text-muted-ink max-w-[600px] mb-8 leading-relaxed">
          The requested architectural record cannot be located in the archive. It may have been demolished, renamed, or never built.
        </p>

        <div className="flex items-center gap-6 font-mono text-[12px]">
          <Link
            href="/archive"
            className="bg-ink text-concrete px-6 py-3 uppercase tracking-wider hover:bg-signal-red transition-colors"
          >
            RETURN TO ARCHIVE ↗
          </Link>
          <Link
            href="/"
            className="border border-rule-grey text-ink px-6 py-3 uppercase tracking-wider hover:border-ink transition-colors"
          >
            INDEX HOME
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
