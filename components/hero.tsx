import { ArrowRight, Check, Plane } from "lucide-react"

const whatsappUrl = "https://wa.me/447476605409?text=Hello%20Sky%20Global%20Travels%2C%20I%27d%20like%20to%20make%20a%20booking%20enquiry."

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-14 lg:px-10 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-primary-foreground/90">
            <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_0_5px_color-mix(in_oklab,theme(colors.emerald.300)_15%,transparent)]" />
            Personal service. Better journeys.
          </div>
          <h1 className="max-w-2xl text-balance font-serif text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            Your next adventure starts <em className="not-italic text-secondary">here.</em>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-primary-foreground/75 sm:text-lg">
            Flights, holidays and meaningful journeys — thoughtfully planned around you, with clear pricing and real support from the first enquiry to your return home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-bold text-accent-foreground shadow-lg transition hover:-translate-y-0.5 hover:opacity-90">
              Plan my trip <ArrowRight data-icon="inline-end" />
            </a>
            <a href="#deals" className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-5 py-3.5 text-sm font-bold text-primary transition hover:-translate-y-0.5 hover:opacity-90">
              Explore deals
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-primary-foreground/15 pt-5">
            {[['500+', 'happy travellers'], ['4.9/5', 'customer rating'], ['UK-based', 'personal support']].map(([value, label]) => (
              <div key={label}><strong className="block text-base">{value}</strong><span className="text-xs text-primary-foreground/55">{label}</span></div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[360px] sm:min-h-[470px]">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=90" alt="Turquoise coastline and tropical beach" className="absolute inset-0 size-full rounded-[1.75rem] object-cover shadow-2xl" />
          <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-primary/75 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-primary-foreground/15 bg-primary/75 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">
            <span className="text-[10px] font-bold uppercase tracking-[.16em] text-primary-foreground/60">Featured escape</span>
            <strong className="mt-1 block font-serif text-2xl">Make memories, not plans.</strong>
          </div>
          <div className="absolute -right-2 top-5 flex items-center gap-2 rounded-2xl bg-card px-3.5 py-3 text-xs font-bold text-card-foreground shadow-xl sm:-right-5 sm:top-8"><span className="grid size-8 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check /></span> Trusted travel experts</div>
          <div className="absolute -bottom-4 -left-2 hidden items-center gap-2 rounded-2xl bg-card px-3.5 py-3 text-xs font-bold text-card-foreground shadow-xl sm:flex sm:-left-5"><Plane className="text-accent" /> Depart with confidence</div>
        </div>
      </div>
    </section>
  )
}
