"use client";

import { useState } from "react";
import ProgressiveImage from "@/components/ProgressiveImage";
import { BuildingAnnotation } from "@/data/buildings";

interface MaterialIntelligenceProps {
  imageSrc: string;
  annotations: BuildingAnnotation[];
  buildingName: string;
}

export default function MaterialIntelligence({
  imageSrc,
  annotations,
  buildingName,
}: MaterialIntelligenceProps) {
  const [activeAnnotationId, setActiveAnnotationId] = useState<string>(
    annotations[0]?.id || ""
  );

  return (
    <section className="w-full bg-secondary-surface py-16 sm:py-24 border-t border-rule-grey/30">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <p className="font-mono text-[12px] text-signal-red font-medium tracking-widest uppercase mb-4">
          02 / MATERIAL INTELLIGENCE
        </p>
        <h2 className="font-medium text-[clamp(32px,4.5vw,53px)] leading-[1.1] tracking-[-0.03em] text-ink mb-12 sm:mb-16">
          The surface tells the story.
        </h2>

        {/* Content Layout: Photo with Hotspots + Interactive Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left: Material Study Image Container (8 cols) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative w-full aspect-[886/480] bg-white/50 border border-ink/20 overflow-hidden">
              <ProgressiveImage
                src={imageSrc}
                alt={`${buildingName} concrete material study`}
                fill
                sizes="(max-width: 1024px) 100vw, 886px"
                className="object-cover"
              />

              {/* Hotspot Markers */}
              {annotations.map((ann) => {
                const isActive = ann.id === activeAnnotationId;
                return (
                  <button
                    key={ann.id}
                    onClick={() => setActiveAnnotationId(ann.id)}
                    onMouseEnter={() => setActiveAnnotationId(ann.id)}
                    style={{
                      left: `${ann.x}%`,
                      top: `${ann.y}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-9 h-8 flex items-center justify-center font-mono text-[12px] font-semibold transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-ink ${
                      isActive
                        ? "bg-signal-red text-ink scale-110 shadow-lg"
                        : "bg-ink/80 text-concrete hover:bg-signal-red hover:text-ink"
                    }`}
                    aria-label={`View detail ${ann.number}: ${ann.title}`}
                    aria-pressed={isActive}
                  >
                    {ann.number}
                  </button>
                );
              })}
            </div>

            {/* Photo Caption */}
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[11px] text-muted-ink">
              <p>FIG. 002 — A STUDY IN TEXTURE, MASS AND REPEATING ELEMENTS</p>
              <p className="tracking-widest">DETAIL / 01–03</p>
            </div>
          </div>

          {/* Right: Synchronized Annotation Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {annotations.map((ann) => {
              const isActive = ann.id === activeAnnotationId;
              return (
                <div
                  key={ann.id}
                  onClick={() => setActiveAnnotationId(ann.id)}
                  className={`p-5 transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-concrete/90 border-ink shadow-sm"
                      : "bg-transparent border-rule-grey/60 hover:border-ink/50"
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveAnnotationId(ann.id);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-[14px] font-semibold ${
                        isActive ? "text-signal-red" : "text-muted-ink"
                      }`}
                    >
                      {ann.number}
                    </span>
                    <span className="font-mono text-[11px] tracking-wider text-ink font-medium">
                      {ann.title}
                    </span>
                  </div>

                  <p className="font-sans text-[15px] text-muted-ink leading-relaxed">
                    {ann.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
