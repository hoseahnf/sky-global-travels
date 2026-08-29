import { DealCard } from "./deal-card"
import { TrustPanel } from "./trust-panel"
const christmasDeals = [
  {
    image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800",
    ctaText: "Advance Book Now",
    title: "Hurghada, Egypt",
    description: "Crystal waters & premium escapes for Christmas & New Year.",
    price: "From £379",
    originalPrice: "£505",
    discount: "25% OFF",
    badge: "Christmas Special",
    whatsappText: "Hello, I am interested in the Hurghada Christmas Special deal.",
  },
  {
    image: "https://images.pexels.com/photos/221455/pexels-photo-221455.jpeg?auto=compress&cs=tinysrgb&w=800",
    ctaText: "Advance Book Now",
    title: "Sharm El Sheikh, Egypt",
    description: "Red Sea diving & winter sun beach luxury over the festive holidays.",
    price: "From £399",
    originalPrice: "£532",
    discount: "25% OFF",
    badge: "Christmas Special",
    whatsappText: "Hello, I am interested in the Sharm El Sheikh Christmas Special deal.",
  },
  {
    image: "https://images.pexels.com/photos/457883/pexels-photo-457883.jpeg?auto=compress&cs=tinysrgb&w=800",
    ctaText: "Advance Book Now",
    title: "Canary Islands",
    description: "Beat the UK cold with exotic sandy beaches & warm winter sun.",
    price: "From £499",
    originalPrice: "£683",
    discount: "27% OFF",
    badge: "New Year Special",
    whatsappText: "Hello, I am interested in the Canary Islands Winter Sun deal.",
  },
]

const holidayDeals = [
  {
    image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Marrakech, Morocco",
    description: "Explore vibrant souks & luxury riads.",
    price: "From £399",
    whatsappText: "Hello, I am interested in Marrakech package.",
  },
  {
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Agadir, Morocco",
    description: "Golden beaches & seaside resorts.",
    price: "From £349",
    whatsappText: "Hello, I am interested in Agadir package.",
  },
  {
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Istanbul, Turkey",
    description: "Historic mosques & Bosphorus views.",
    price: "From £299",
    whatsappText: "Hello, I am interested in Istanbul package.",
  },
  {
    image: "/dubai-skyline.png",
    title: "Dubai, UAE",
    description: "World-class shopping & desert adventures.",
    price: "From £530pp",
    whatsappText: "Hello, I am interested in Dubai luxury escape.",
  },
  {
    image: "https://images.pexels.com/photos/3732494/pexels-photo-3732494.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Antalya, Turkey",
    description: "All-inclusive Mediterranean resorts.",
    price: "From £379",
    whatsappText: "Hello, I am interested in Antalya package.",
  },
  {
    image: "/haram-sharif-kaaba.png",
    title: "Umrah from the UK",
    description: "Spiritual journeys from the UK with affordable packages, flights and guided support.",
    price: "From £399pp",
    badge: "Umrah Special",
    whatsappText: "Hello, I am interested in the £399pp Umrah from the UK package.",
  },
  {
    image: "https://images.pexels.com/photos/221455/pexels-photo-221455.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Sharm El Sheikh, Egypt",
    description: "Red Sea diving & beach luxury.",
    price: "From £359",
    whatsappText: "Hello, I am interested in Sharm El Sheikh package.",
  },
  {
    image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Hurghada, Egypt",
    description: "Crystal waters & premium escapes.",
    price: "From £339",
    whatsappText: "Hello, I am interested in Hurghada package.",
  },
  {
    image: "https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Cairo, Egypt",
    description: "Pyramids & Nile cultural tours.",
    price: "From £289",
    whatsappText: "Hello, I am interested in Cairo package.",
  },
  {
    image: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    title: "Tunisia",
    description: "Beautiful beaches & cultural tours in Tunisia.",
    price: "From £320",
    whatsappText: "Hello, I am interested in Tunisia package.",
  },
  {
    image: "https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    title: "Montenegro",
    description: "Stunning mountains & Adriatic coast in Montenegro.",
    price: "From £360",
    whatsappText: "Hello, I am interested in Montenegro package.",
  },
  {
    image: "https://images.pexels.com/photos/1450355/pexels-photo-1450355.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Bali, Indonesia",
    description: "Exotic beaches & tropical paradise.",
    price: "From £450",
    whatsappText: "Hello, I am interested in Bali package.",
  },
  {
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Thailand",
    description: "Beautiful islands & cultural escapes.",
    price: "From £430",
    whatsappText: "Hello, I am interested in Thailand package.",
  },
  {
    image: "https://images.pexels.com/photos/457883/pexels-photo-457883.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Canary Islands",
    description: "Exotic sandy beaches & crystal-clear waters.",
    price: "From £480",
    whatsappText: "Hello, I am interested in Canary Islands package.",
  },
]

type DealsSectionProps = {
  filter?: string
}

export function DealsSection({ filter = "" }: DealsSectionProps) {
  const normalizedFilter = filter.trim().toLowerCase()
  const visibleDeals = normalizedFilter
    ? holidayDeals.filter((deal) => `${deal.title} ${deal.description}`.toLowerCase().includes(normalizedFilter))
    : holidayDeals

  return (
    <section id="deals" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Christmas Deals */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-semibold text-destructive">
              Limited Time
            </span>
            <h3 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Christmas & New Year Advance Deals</h3>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Lock in early-bird rates before peak festive prices kick in.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {christmasDeals.map((deal) => (
              <DealCard key={`christmas-${deal.title}`} {...deal} />
            ))}
          </div>
        </div>

        {/* Top Holiday Deals */}
        <div className="text-center">
          <h3 className="mb-3 text-3xl font-bold text-primary sm:text-4xl">Top Holiday Deals</h3>
          <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
            Handpicked destinations with the best prices for an unforgettable holiday.
          </p>
          <div className="mb-10 flex justify-center"><TrustPanel compact /></div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleDeals.length > 0 ? visibleDeals.map((deal) => (
              <DealCard key={`holiday-${deal.title}`} {...deal} />
            )) : (
              <p className="col-span-full rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">
                No matching packages yet. Try another destination or WhatsApp us for a tailored trip.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
