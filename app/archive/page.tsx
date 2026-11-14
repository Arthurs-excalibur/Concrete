"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { BUILDINGS, BuildingRecord } from "@/data/buildings";

export default function ArchivePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("ALL");
  const [selectedDecade, setSelectedDecade] = useState("ALL");
  const [selectedType, setSelectedType] = useState("ALL");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Unique filter values derived from data
  const locations = useMemo(() => {
    return Array.from(new Set(BUILDINGS.map((b) => b.city))).sort();
  }, []);

  const decades = useMemo(() => {
    return Array.from(new Set(BUILDINGS.map((b) => b.decade))).sort();
  }, []);

  const types = useMemo(() => {
    return Array.from(new Set(BUILDINGS.map((b) => b.buildingType))).sort();
  }, []);

  // Filtered dataset
  const filteredBuildings = useMemo(() => {
    return BUILDINGS.filter((building) => {
      // Search term
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = building.name.toLowerCase().includes(query);
        const matchesArchitect = building.architect.toLowerCase().includes(query);
        const matchesCity = building.city.toLowerCase().includes(query);
        const matchesCountry = building.country.toLowerCase().includes(query);
        const matchesId = building.id.includes(query);
        if (
          !matchesName &&
          !matchesArchitect &&
          !matchesCity &&
          !matchesCountry &&
          !matchesId
        ) {
          return false;
        }
      }

      // Location filter
      if (selectedLocation !== "ALL" && building.city !== selectedLocation) {
        return false;
      }

      // Decade filter
      if (selectedDecade !== "ALL" && building.decade !== selectedDecade) {
        return false;
      }

      // Type filter
      if (selectedType !== "ALL" && building.buildingType !== selectedType) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedLocation, selectedDecade, selectedType]);

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedLocation !== "ALL" ||
    selectedDecade !== "ALL" ||
    selectedType !== "ALL";

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLocation("ALL");
    setSelectedDecade("ALL");
    setSelectedType("ALL");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-concrete">
      <SiteHeader />

      <main className="flex-1 max-w-[1440px] w-full mx-auto px-6 sm:px-12 py-8 sm:py-12">
        {/* Archive Heading */}
        <section className="mb-10 sm:mb-14">
          <p className="font-mono text-[12px] text-signal-red font-medium tracking-widest uppercase mb-4">
            A LIVING RECORD / 1950—PRESENT
          </p>

          <div className="flex flex-wrap items-baseline gap-4 sm:gap-8 mb-4">
            <h1 className="font-medium text-[clamp(60px,11vw,156px)] leading-[0.95] tracking-[-0.06em] text-ink">
              The Archive
            </h1>
            <span className="font-sans text-[clamp(32px,5vw,67px)] text-signal-red font-normal leading-none">
              {String(filteredBuildings.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
            <p className="font-sans text-[17px] sm:text-[20px] text-ink">
              Buildings that challenge convention. Ideas that endure.
            </p>
            <p className="font-mono text-[10px] text-muted-ink tracking-widest uppercase">
              EXPLORE BY FORM, PLACE OR TIME.
            </p>
          </div>
        </section>

        {/* Archive Controls Toolbar */}
        <section className="mb-10">
          {/* Top rule */}
          <div className="h-px bg-ink w-full mb-6" />

          {/* Search and Filter Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-6">
            {/* Search Input (col-span-5) */}
            <div className="md:col-span-5 relative flex items-center">
              <span className="text-[20px] text-ink mr-3 select-none">⌕</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search buildings, architects, cities…"
                className="w-full bg-transparent font-sans text-[15px] sm:text-[16px] text-ink placeholder:text-muted-ink focus:outline-none"
                aria-label="Search buildings"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="font-mono text-[11px] text-muted-ink hover:text-ink px-2"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Filter Dropdowns (col-span-7) */}
            <div className="md:col-span-7 flex flex-wrap sm:flex-nowrap gap-3 justify-start md:justify-end font-mono text-[11px]">
              {/* Location */}
              <div className="relative w-full sm:w-auto">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full sm:w-auto appearance-none bg-concrete border border-rule-grey px-4 py-2.5 pr-8 text-ink focus:outline-none focus:border-ink cursor-pointer"
                  aria-label="Filter by location"
                >
                  <option value="ALL">LOCATION: ALL</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc.toUpperCase()}
                    </option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-ink">
                  ⌄
                </span>
              </div>

              {/* Decade */}
              <div className="relative w-full sm:w-auto">
                <select
                  value={selectedDecade}
                  onChange={(e) => setSelectedDecade(e.target.value)}
                  className="w-full sm:w-auto appearance-none bg-concrete border border-rule-grey px-4 py-2.5 pr-8 text-ink focus:outline-none focus:border-ink cursor-pointer"
                  aria-label="Filter by decade"
                >
                  <option value="ALL">DECADE: ALL</option>
                  {decades.map((dec) => (
                    <option key={dec} value={dec}>
                      {dec}
                    </option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-ink">
                  ⌄
                </span>
              </div>

              {/* Building Type */}
              <div className="relative w-full sm:w-auto">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full sm:w-auto appearance-none bg-concrete border border-rule-grey px-4 py-2.5 pr-8 text-ink focus:outline-none focus:border-ink cursor-pointer"
                  aria-label="Filter by building type"
                >
                  <option value="ALL">TYPE: ALL</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type.toUpperCase()}
                    </option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-ink">
                  ⌄
                </span>
              </div>
            </div>
          </div>

          {/* Bottom dividing rule */}
          <div className="h-px bg-rule-grey w-full mb-4" />

          {/* Status Counter & View Switcher */}
          <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-muted-ink uppercase tracking-wider">
            <div className="flex items-center gap-3">
              <span>
                SHOWING 001–{String(filteredBuildings.length).padStart(3, "0")} /{" "}
                {String(BUILDINGS.length).padStart(3, "0")} BUILDINGS
              </span>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-signal-red underline hover:text-ink cursor-pointer"
                >
                  RESET FILTERS
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">VIEW</span>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`px-2 py-1 transition-colors ${
                  viewMode === "grid" ? "text-ink font-bold" : "text-muted-ink"
                }`}
                aria-label="Grid view"
              >
                ▦ GRID
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`px-2 py-1 transition-colors ${
                  viewMode === "list" ? "text-ink font-bold" : "text-muted-ink"
                }`}
                aria-label="List view"
              >
                ≡ LIST
              </button>
            </div>
          </div>
        </section>

        {/* Empty State */}
        {filteredBuildings.length === 0 && (
          <div className="py-24 text-center border border-dashed border-rule-grey">
            <p className="font-mono text-[13px] text-muted-ink uppercase mb-3">
              NO STRUCTURES MATCH CURRENT CRITERIA
            </p>
            <button
              onClick={clearFilters}
              className="font-mono text-[12px] bg-ink text-concrete px-5 py-2.5 uppercase tracking-wider hover:bg-signal-red transition-colors"
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}

        {/* Grid View */}
        {viewMode === "grid" && filteredBuildings.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-24">
            {filteredBuildings.map((building) => (
              <BuildingCard key={building.id} building={building} />
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && filteredBuildings.length > 0 && (
          <div className="divide-y divide-rule-grey border-y border-rule-grey mb-16 sm:mb-24">
            {filteredBuildings.map((building) => (
              <Link
                key={building.id}
                href={`/buildings/${building.slug}`}
                className="group flex flex-col md:flex-row md:items-center justify-between py-6 px-4 hover:bg-white/50 transition-colors gap-4"
              >
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="font-mono text-[12px] text-signal-red font-medium">
                    {building.id}
                  </span>
                  <div>
                    <h3 className="font-medium text-[22px] sm:text-[26px] text-ink group-hover:text-signal-red transition-colors">
                      {building.name}
                    </h3>
                    <p className="font-mono text-[11px] text-muted-ink">
                      {building.architect}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-12 font-mono text-[11px] text-muted-ink">
                  <span>{building.location}</span>
                  <span className="text-ink">{building.completionYear}</span>
                  <span className="px-2 py-0.5 border border-rule-grey">
                    {building.buildingType}
                  </span>
                  <span className="text-[20px] text-ink group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Archive Footer Controls */}
        <div className="pt-8 border-t border-rule-grey flex items-center justify-between font-mono text-[11px] text-muted-ink uppercase tracking-wider">
          <span>END OF INDEX / ALWAYS IN PROGRESS</span>
          <button
            onClick={scrollToTop}
            className="text-ink hover:text-signal-red transition-colors flex items-center gap-1"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function BuildingCard({ building }: { building: BuildingRecord }) {
  return (
    <article className="group relative flex flex-col justify-between">
      {/* Visual Container */}
      <div className="relative w-full aspect-[432/270] overflow-hidden bg-white/40 border border-ink/10 mb-4">
        {/* Photo */}
        <Image
          src={building.heroImage}
          alt={building.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 432px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Index Red Tab */}
        <div className="absolute top-0 left-0 bg-signal-red text-ink px-3 py-1 font-mono text-[11px] font-semibold">
          {building.id}
        </div>

        {/* Hover metadata overlay (Figma Design 2:259) */}
        <div className="absolute inset-0 bg-[#191A17]/90 text-concrete p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
          <div>
            <p className="font-mono text-[11px] text-concrete/70 tracking-wider uppercase mb-2">
              {building.id} / BUILDING RECORD
            </p>
            <h4 className="font-medium text-[24px] text-concrete tracking-tight mb-2">
              {building.name}
            </h4>
            <div className="font-sans text-[13px] text-concrete/80 leading-relaxed">
              <p>{building.architect}</p>
              <p>{building.location}</p>
              <p className="font-mono text-[11px] mt-1 text-concrete/60">
                {building.yearRange} / {building.buildingType}
              </p>
            </div>
          </div>

          <Link
            href={`/buildings/${building.slug}`}
            className="w-full bg-signal-red text-ink py-2.5 px-4 font-mono text-[11px] font-semibold uppercase flex items-center justify-between tracking-wider hover:bg-white transition-colors"
          >
            <span>OPEN DOSSIER</span>
            <span className="text-[18px]">↗</span>
          </Link>
        </div>
      </div>

      {/* Metadata Line */}
      <p className="font-mono text-[10px] text-muted-ink tracking-widest uppercase mb-1.5">
        {building.city.toUpperCase()},{" "}
        {building.country === "United Kingdom"
          ? "UK"
          : building.country === "United States"
          ? "US"
          : building.country === "Canada"
          ? "CA"
          : building.country === "France"
          ? "FR"
          : building.country === "Italy"
          ? "IT"
          : building.country === "Austria"
          ? "AT"
          : building.country === "Brazil"
          ? "BR"
          : building.country === "Japan"
          ? "JP"
          : building.country.slice(0, 2).toUpperCase()}{" "}
        / {building.completionYear}
      </p>

      {/* Title & Arrow */}
      <div className="flex items-baseline justify-between mb-3">
        <Link
          href={`/buildings/${building.slug}`}
          className="font-medium text-[22px] sm:text-[27px] text-ink tracking-tight hover:text-signal-red transition-colors"
        >
          {building.name}
        </Link>
        <Link
          href={`/buildings/${building.slug}`}
          className="text-[20px] text-ink hover:text-signal-red transition-colors"
          aria-hidden="true"
        >
          ↗
        </Link>
      </div>

      {/* 1px Editorial Bottom Divider Rule */}
      <div className="h-px bg-rule-grey w-full" />
    </article>
  );
}
