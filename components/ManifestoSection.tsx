export default function ManifestoSection() {
  return (
    <section id="about" className="w-full bg-signal-red text-ink py-16 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 flex flex-col justify-between">
        {/* Tag */}
        <p className="font-mono text-[12px] tracking-widest uppercase mb-8">
          OUR POINT OF VIEW
        </p>

        {/* Monumental Headline */}
        <h2 className="font-medium text-[clamp(48px,8vw,106px)] leading-[1.0] tracking-[-0.05em] mb-8 sm:mb-12">
          More than buildings.<br />
          Ways of living.
        </h2>

        {/* Narrative & Action Link */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-4 border-t border-ink/20">
          <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed max-w-[800px]">
            We document architecture that makes a statement. Not only in its form, but in the lives it holds. An independent record of concrete, culture and possibility.
          </p>

          <a
            href="#about"
            className="font-mono text-[12px] font-medium tracking-wider uppercase flex items-center gap-1 hover:opacity-80 transition-opacity whitespace-nowrap self-start lg:self-auto"
          >
            THE MANIFESTO ↗
          </a>
        </div>
      </div>
    </section>
  );
}
