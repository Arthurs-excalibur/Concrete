export default function Masthead() {
  return (
    <section className="w-full bg-concrete pt-2 sm:pt-4 pb-8 sm:pb-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 flex flex-col justify-between">
        {/* Dominant oversized Wordmark */}
        <h1 className="font-black text-[clamp(64px,16.5vw,242px)] leading-[0.88] tracking-[-0.06em] text-ink select-none w-full text-left -ml-1 sm:-ml-2">
          CONCRETE
        </h1>

        {/* Issue metadata row */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] sm:text-[12px] text-ink border-b border-rule-grey/30 pb-4">
          <p className="tracking-widest uppercase">FORM. MATTER. HUMANITY.</p>
          <p className="tracking-widest uppercase text-muted-ink">
            ISSUE 004 — THE COLLECTIVE
          </p>
          <p className="tracking-widest uppercase">EST. 2024 / VOL. IV</p>
        </div>
      </div>
    </section>
  );
}
