import Image from "next/image";
import Link from "next/link";
import { BUILDINGS } from "@/data/buildings";

export default function SelectedStories() {
  const stories = BUILDINGS.filter((b) => b.selectedStory);

  return (
    <section className="w-full bg-concrete pb-20 sm:pb-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Editorial Top Rule */}
        <div className="h-px bg-ink w-full mb-6" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[12px] sm:text-[13px] text-ink mb-10">
          <h2 className="font-semibold tracking-wider uppercase">SELECTED STORIES</h2>
          <p className="text-muted-ink text-[11px] tracking-widest uppercase">
            OBSERVATIONS FROM THE BUILT WORLD
          </p>
        </div>

        {/* 3-Column Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stories.map((building) => (
            <Link
              key={building.id}
              href={`/buildings/${building.slug}`}
              className="group flex flex-col justify-between"
            >
              {/* Image Container with subtle crop & hover scaling */}
              <div className="relative w-full aspect-[432/308] overflow-hidden bg-white/40 border border-ink/10 mb-5">
                <Image
                  src={building.heroImage}
                  alt={building.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 432px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Technical index line */}
              <p className="font-mono text-[11px] text-muted-ink tracking-wider uppercase mb-2">
                {building.id} / {building.city.toUpperCase()},{" "}
                {building.country === "United Kingdom" ? "UK" : "CA"} /{" "}
                {building.completionYear}
              </p>

              {/* Title & Arrow */}
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-medium text-[24px] sm:text-[28px] lg:text-[31px] text-ink tracking-tight group-hover:text-signal-red transition-colors">
                  {building.name}
                </h3>
                <span className="text-[22px] text-ink transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              {/* Short editorial hook */}
              <p className="font-sans text-[15px] sm:text-[16px] text-muted-ink leading-snug">
                {building.selectedStory?.hook}
              </p>
            </Link>
          ))}
        </div>

        {/* Section Footer */}
        <div className="mt-14 sm:mt-20 pt-6 border-t border-rule-grey flex items-center justify-between font-mono text-[12px] tracking-wider uppercase">
          <span className="text-ink">EXPLORE ALL BUILDINGS</span>
          <Link
            href="/archive"
            className="text-signal-red hover:underline flex items-center gap-2"
          >
            THE ARCHIVE →
          </Link>
        </div>
      </div>
    </section>
  );
}
