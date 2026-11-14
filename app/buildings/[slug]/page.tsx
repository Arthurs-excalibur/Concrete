import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MaterialIntelligence from "@/components/MaterialIntelligence";
import { BUILDINGS, getBuildingBySlug, getAdjacentBuildings } from "@/data/buildings";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BUILDINGS.map((building) => ({
    slug: building.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const building = getBuildingBySlug(slug);

  if (!building) {
    return {
      title: "Building Not Found — CONCRETE",
    };
  }

  return {
    title: `${building.name} — Dossier ${building.id} | CONCRETE`,
    description: building.summary,
    openGraph: {
      title: `${building.name} — CONCRETE Architecture Journal`,
      description: building.summary,
      images: [
        {
          url: building.heroImage,
          width: 1440,
          height: 820,
          alt: building.name,
        },
      ],
    },
  };
}

export default async function BuildingDossierPage({ params }: PageProps) {
  const { slug } = await params;
  const building = getBuildingBySlug(slug);

  if (!building) {
    notFound();
  }

  const { prev, next } = getAdjacentBuildings(slug);

  return (
    <div className="flex flex-col min-h-screen bg-concrete">
      <SiteHeader />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* SECTION 1: IMMERSIVE COVER HERO (820px)                   */}
        {/* ========================================================= */}
        <section className="relative w-full h-[620px] sm:h-[740px] lg:h-[820px] overflow-hidden bg-ink text-concrete">
          {/* Full-bleed photography */}
          <Image
            src={building.heroImage}
            alt={building.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Figma photograph shade gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/85 pointer-events-none" />

          {/* Overlaid Badges & Headings */}
          <div className="relative max-w-[1440px] mx-auto h-full px-6 sm:px-12 flex flex-col justify-between py-8 sm:py-10 z-10">
            {/* Top Row: Dossier Badge (left) & Date Label (right) */}
            <div className="flex items-center justify-between">
              <div className="bg-signal-red text-ink px-4 py-2 font-mono text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase">
                DOSSIER {building.id} / {building.city.toUpperCase()}
              </div>

              <div className="bg-ink/90 border border-concrete/20 text-concrete px-4 py-2 font-mono text-[12px] tracking-widest">
                {building.yearRange}
              </div>
            </div>

            {/* Bottom Row: Monumental Title, Attribution & Scroll prompt */}
            <div>
              <h1 className="font-medium text-[clamp(52px,9.5vw,138px)] leading-[0.98] tracking-[-0.05em] text-concrete mb-6 sm:mb-8">
                {building.name}
              </h1>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-concrete/20 font-mono text-[11px] sm:text-[12px] text-concrete">
                <p className="tracking-widest uppercase text-concrete/90">
                  {building.architect.toUpperCase()}
                </p>

                <a
                  href="#story"
                  className="tracking-wider uppercase hover:text-signal-red transition-colors flex items-center gap-2"
                >
                  SCROLL TO EXPLORE ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: STORY AND SPECIFICATIONS                       */}
        {/* ========================================================= */}
        <section
          id="story"
          className="w-full bg-concrete py-16 sm:py-24 border-t border-rule-grey/30"
        >
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: 01 Story Narrative (7 cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <p className="font-mono text-[12px] text-signal-red font-medium tracking-widest uppercase">
                01 / THE STORY
              </p>

              <h2 className="font-medium text-[clamp(34px,4.5vw,61px)] leading-[1.1] tracking-[-0.04em] text-ink mb-2">
                {building.storyHeadline}
              </h2>

              <div className="space-y-6 pt-4 text-ink">
                {building.storyParagraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={`leading-relaxed ${
                      idx === 0
                        ? "font-sans text-[20px] sm:text-[23px] text-ink font-normal"
                        : "font-sans text-[16px] sm:text-[18px] text-muted-ink"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right Column: Building Record (5 cols) */}
            <div className="lg:col-span-5 bg-white/40 border border-rule-grey/60 p-6 sm:p-8">
              <p className="font-mono text-[12px] text-ink font-semibold tracking-wider uppercase mb-6 pb-3 border-b border-rule-grey">
                BUILDING RECORD / {building.id}
              </p>

              <div className="space-y-4 font-sans text-[14px]">
                {/* Architect */}
                <div>
                  <span className="block font-mono text-[10px] text-muted-ink tracking-widest uppercase mb-1">
                    ARCHITECT
                  </span>
                  <span className="font-medium text-[17px] text-ink">
                    {building.architect}
                  </span>
                </div>
                <div className="h-px bg-rule-grey/50" />

                {/* Location */}
                <div>
                  <span className="block font-mono text-[10px] text-muted-ink tracking-widest uppercase mb-1">
                    LOCATION
                  </span>
                  <span className="font-medium text-[17px] text-ink">
                    {building.location}
                  </span>
                </div>
                <div className="h-px bg-rule-grey/50" />

                {/* Completed */}
                <div>
                  <span className="block font-mono text-[10px] text-muted-ink tracking-widest uppercase mb-1">
                    COMPLETED
                  </span>
                  <span className="font-medium text-[17px] text-ink">
                    {building.completionYear}
                  </span>
                </div>
                <div className="h-px bg-rule-grey/50" />

                {/* Typology */}
                <div>
                  <span className="block font-mono text-[10px] text-muted-ink tracking-widest uppercase mb-1">
                    TYPOLOGY
                  </span>
                  <span className="font-medium text-[17px] text-ink">
                    {building.typology}
                  </span>
                </div>
                <div className="h-px bg-rule-grey/50" />

                {/* Material */}
                <div>
                  <span className="block font-mono text-[10px] text-muted-ink tracking-widest uppercase mb-1">
                    MATERIAL
                  </span>
                  <span className="font-medium text-[17px] text-ink">
                    {building.materials}
                  </span>
                </div>
                <div className="h-px bg-rule-grey/50" />

                {/* Status */}
                <div>
                  <span className="block font-mono text-[10px] text-muted-ink tracking-widest uppercase mb-1">
                    STATUS
                  </span>
                  <span className="font-medium text-[17px] text-ink">
                    {building.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: MATERIAL INTELLIGENCE (Interactive Hotspots)   */}
        {/* ========================================================= */}
        {building.annotations && building.annotations.length > 0 && (
          <MaterialIntelligence
            imageSrc={building.detailsImage || building.heroImage}
            annotations={building.annotations}
            buildingName={building.name}
          />
        )}

        {/* ========================================================= */}
        {/* SECTION 4: DOSSIER NAVIGATION (Prev / Next / Archive)      */}
        {/* ========================================================= */}
        <section className="w-full bg-concrete py-16 sm:py-20 border-t border-rule-grey">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12 flex flex-col justify-between">
            {/* Prev / Next split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12">
              {/* Previous */}
              <Link
                href={`/buildings/${prev.slug}`}
                className="group flex flex-col justify-between"
              >
                <span className="font-mono text-[12px] text-muted-ink tracking-wider uppercase mb-3 group-hover:text-signal-red transition-colors">
                  ← PREVIOUS DOSSIER
                </span>
                <span className="font-medium text-[28px] sm:text-[38px] text-ink tracking-tight mb-2 group-hover:text-signal-red transition-colors">
                  {prev.name}
                </span>
                <span className="font-mono text-[11px] text-muted-ink uppercase">
                  {prev.id} / {prev.location}
                </span>
              </Link>

              {/* Next */}
              <Link
                href={`/buildings/${next.slug}`}
                className="group flex flex-col justify-between md:text-right"
              >
                <span className="font-mono text-[12px] text-muted-ink tracking-wider uppercase mb-3 group-hover:text-signal-red transition-colors">
                  NEXT DOSSIER →
                </span>
                <span className="font-medium text-[28px] sm:text-[38px] text-ink tracking-tight mb-2 group-hover:text-signal-red transition-colors">
                  {next.name}
                </span>
                <span className="font-mono text-[11px] text-muted-ink uppercase">
                  {next.id} / {next.location}
                </span>
              </Link>
            </div>

            {/* Back to archive link */}
            <div className="pt-8 border-t border-rule-grey flex items-center justify-between">
              <Link
                href="/archive"
                className="font-mono text-[12px] text-ink hover:text-signal-red tracking-wider uppercase flex items-center gap-2 transition-colors"
              >
                <span>BACK TO THE ARCHIVE</span>
                <span className="text-[18px]">↗</span>
              </Link>

              <span className="font-mono text-[11px] text-muted-ink">
                SPECIMEN {building.id} OF {String(BUILDINGS.length).padStart(3, "0")}
              </span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
