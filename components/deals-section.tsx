import { DealCard } from "./deal-card"

const deals = [
  { image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=90", title: "Marrakech, Morocco", description: "Colourful souks, rooftop sunsets and beautiful riads.", price: "From £399", whatsappText: "Hello, I am interested in Marrakech holidays." },
  { image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=90", title: "Agra, India", description: "A cultural escape filled with history and wonder.", price: "From £449", whatsappText: "Hello, I am interested in India holidays." },
  { image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=90", title: "Thailand", description: "Island sunshine, calm waters and warm hospitality.", price: "From £430", whatsappText: "Hello, I am interested in Thailand holidays." },
  { image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=90", title: "Dubai, UAE", description: "Iconic skylines, desert adventures and luxury stays.", price: "From £530pp", whatsappText: "Hello, I am interested in Dubai holidays." },
  { image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=900&q=90", title: "Antalya, Turkey", description: "Mediterranean beaches and all-inclusive resorts.", price: "From £379", whatsappText: "Hello, I am interested in Antalya holidays." },
  { image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=900&q=90", title: "Cairo, Egypt", description: "Ancient stories, Nile views and unforgettable days.", price: "From £289", whatsappText: "Hello, I am interested in Cairo holidays." },
]

export function DealsSection() {
  return (
    <section id="deals" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-2 text-xs font-bold uppercase tracking-[.14em] text-accent">Where will you go?</p><h2 className="font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Popular escapes</h2></div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">Handpicked places, honest prices and thoughtful itineraries for your next great memory.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{deals.map((deal) => <DealCard key={deal.title} {...deal} />)}</div>
        <div className="mt-14 rounded-3xl bg-muted px-6 py-10 text-center sm:px-10"><p className="text-xs font-bold uppercase tracking-[.14em] text-accent">Something else in mind?</p><h3 className="mt-2 font-serif text-3xl font-semibold text-primary">Tell us where you want to be.</h3><p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-muted-foreground">From city breaks to long-haul adventures, we can build a trip around your dates, budget and wishlist.</p><a href="#contact" className="mt-5 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90">Start planning</a></div>
      </div>
    </section>
  )
}
