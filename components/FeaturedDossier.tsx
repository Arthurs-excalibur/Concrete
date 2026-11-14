import Link from "next/link";

export default function FeaturedDossier() {
  return (
    <section className="w-full bg-concrete pb-16 sm:pb-24 border-t border-rule-grey/30 pt-12 sm:pt-16">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Column: Statement */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <p className="font-mono text-[12px] text-signal-red font-medium tracking-widest uppercase mb-4 sm:mb-6">
            001 / FEATURED DOSSIER
          </p>
          <h2 className="font-medium text-[clamp(42px,6.2vw,88px)] leading-[1.05] tracking-[-0.04em] text-ink">
            A city within<br />a city.
          </h2>
        </div>

        {/* Right Column: Spec Card */}
        <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-8">
          <div>
            <h3 className="font-bold text-[20px] sm:text-[22px] tracking-tight text-ink uppercase mb-2">
              BARBICAN ESTATE
            </h3>
            <p className="font-sans text-[14px] sm:text-[15px] text-muted-ink leading-relaxed mb-4">
              Chamberlin, Powell and Bon<br />
              London, United Kingdom / 1965–1976
            </p>
            <p className="font-sans text-[16px] sm:text-[17px] text-ink leading-relaxed mb-8">
              A radical experiment in collective living. An enduring argument for the public realm.
            </p>
          </div>

          <div>
            {/* 1px divider */}
            <div className="h-px bg-ink w-full mb-5" />

            <Link
              href="/buildings/barbican-estate"
              className="group flex items-center justify-between font-mono text-[12px] text-ink hover:text-signal-red tracking-wider uppercase transition-colors"
            >
              <span>OPEN THE DOSSIER</span>
              <span className="text-[24px] leading-none transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗︎
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
