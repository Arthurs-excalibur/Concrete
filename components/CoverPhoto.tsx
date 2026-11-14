import Link from "next/link";
import ProgressiveImage from "@/components/ProgressiveImage";

export default function CoverPhoto() {
  return (
    <section className="w-full bg-concrete pb-16 sm:pb-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <Link
          href="/buildings/barbican-estate"
          className="group block relative w-full h-[380px] sm:h-[500px] lg:h-[584px] overflow-hidden border border-ink/20"
          aria-label="View Barbican Estate Dossier"
        >
          {/* Main Cover Image with progressive quality swap */}
          <ProgressiveImage
            src="/images/buildings/barbican.png"
            alt="Barbican Estate monumental concrete towers reflecting over water"
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1344px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />

          {/* Issue marker badge */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-signal-red text-ink px-4 py-2 font-mono text-[11px] font-medium tracking-widest uppercase shadow-sm">
            IN FOCUS / LONDON
          </div>

          {/* Bottom scrim on hover */}
          <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </Link>

        {/* Technical metadata below image */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[11px] text-muted-ink">
          <p className="tracking-wider">FIG. 001 — BARBICAN ESTATE, LONDON</p>
          <p className="tracking-widest">51.5202° N 0.0939° W</p>
        </div>
      </div>
    </section>
  );
}
