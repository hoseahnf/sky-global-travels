import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-primary/40" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-secondary backdrop-blur-sm">
          Premium Service &bull; Best Prices &bull; Holiday Deals
        </p>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-card sm:text-5xl md:text-6xl lg:text-7xl">
          Explore the world with us
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-card/80 sm:text-xl">
          Discover unforgettable destinations with handpicked luxury holiday packages at unbeatable prices.
        </p>
        <a
          href="https://wa.me/447476605409?text=Hello,%20I%20would%20like%20to%20make%20a%20booking%20inquiry."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-3.5 text-base font-semibold text-secondary-foreground shadow-lg transition hover:scale-[1.02] hover:opacity-90"
        >
          Book Now
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
