"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const destinations = ["Antalya", "Agadir", "Cairo", "Istanbul", "Marrakech", "Sharm El Sheikh", "Hurghada", "Tunisia", "Montenegro", "Bali", "Thailand", "Canary Islands"]
const travelers: [string, string, string, string, number, string][] = [
  ["Amelia Thompson", "London", "Ryan Smith", "Antalya", 5, "Our airport transfer was delayed, but Ryan Smith kept us updated and arranged a replacement before we even had to ask. We didn't feel left alone, and the luxury hotel was unbeatable value. Highly recommend Sky Global Travels!"],
  ["Daniel Hughes", "Manchester", "Scott Brown", "Agadir", 4.5, "A room issue on arrival could have ruined our break, but Scott Brown worked with the hotel until it was sorted. He helped me a lot and support was available every single time. Very cheap for such a lovely stay. Highly recommend Sky Global Travels!"],
  ["Sophie Williams", "Birmingham", "Alex Taylor", "Cairo", 5, "Our flight time changed unexpectedly and Alex Taylor found a practical solution straight away. She made sure we didn't feel left alone, with brilliant service and a luxury hotel at a genuinely competitive price. Highly recommend Sky Global Travels!"],
  ["Oliver Bennett", "Edinburgh", "Joe Miller", "Istanbul", 4, "We were worried after our luggage was delayed, but Joe Miller chased the airline and checked in every day. He helped me a lot and never left us without an answer. Excellent value. Highly recommend Sky Global Travels!"],
  ["Charlotte Evans", "Leeds", "Daniel Cooper", "Marrakech", 5, "Daniel Cooper rescued our airport pickup when the supplier missed us. He was available every single time, so we didn't feel left alone. The riad was luxurious and the price was incredibly cheap. Highly recommend Sky Global Travels!"],
  ["George Wilson", "Bristol", "Sophie Jenkins", "Sharm El Sheikh", 4.5, "A booking detail was entered incorrectly, but Sophie Jenkins fixed it quickly and kept us informed throughout. She helped me a lot and delivered far beyond expectations. Superb value. Highly recommend Sky Global Travels!"],
  ["Isla Roberts", "Glasgow", "Liam Gallagher", "Hurghada", 5, "When our excursion was cancelled, Liam Gallagher arranged a better alternative and stayed on top of every detail. We didn't feel left alone for a moment. Luxury travel for a very competitive price. Highly recommend Sky Global Travels!"],
  ["Harry Cooper", "Liverpool", "Emma Watson", "Tunisia", 4, "Our family needed a last-minute dietary request added to the booking, and Emma Watson made it happen. She helped me a lot and the support was there every time I called. Brilliant value. Highly recommend Sky Global Travels!"],
  ["Emily Richardson", "Nottingham", "Oliver Davies", "Montenegro", 5, "A ferry timetable changed before our trip, but Oliver Davies reorganised our transfers without fuss. He made sure we didn't feel left alone, and our hotel was beautiful. Highly recommend Sky Global Travels!"],
  ["Jack Mitchell", "Cardiff", "Chloe Evans", "Bali", 4.5, "We had a payment query late in the evening and Chloe Evans explained everything clearly and calmly. She helped me a lot, with customer service that felt genuinely personal and a fantastic price. Highly recommend Sky Global Travels!"],
  ["Grace Carter", "Sheffield", "Harry Wilson", "Thailand", 5, "Our connecting flight was disrupted, but Harry Wilson found new options and kept checking until we landed. We never felt left alone. The luxury resort was incredible value. Highly recommend Sky Global Travels!"],
  ["Thomas Murphy", "Newcastle", "Grace Thomas", "Canary Islands", 4, "The hotel initially couldn't find our reservation, but Grace Thomas sorted it directly and called back to make sure we were settled. She helped me a lot and the price was hard to beat. Highly recommend Sky Global Travels!"],
  ["Ruby Hamilton", "London", "Jack Roberts", "Antalya", 5, "Our return transfer was missing from the paperwork, yet Jack Roberts arranged it immediately and stayed available every single time. Seamless support, luxury stay and unbeatable value. Highly recommend Sky Global Travels!"],
  ["William Graham", "Manchester", "Megan Hughes", "Agadir", 4.5, "We needed to change dates after a family emergency and Megan Hughes handled it with real kindness. She helped me a lot and made sure we didn't feel left alone. Very competitive pricing and excellent service. Highly recommend Sky Global Travels!"],
]

const reviews = Array.from({ length: 300 }, (_, index) => {
  const [name, city, agent, destination, rating, quote] = travelers[index % travelers.length]
  return { id: index + 1, name, city, agent, destination, rating, quote }
})

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const fill = rating >= index + 1 ? "fill-secondary text-secondary" : rating > index ? "fill-secondary/50 text-secondary" : "text-secondary/25"
        return <Star key={index} aria-hidden="true" className={`size-4 ${fill}`} />
      })}
    </div>
  )
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const review = reviews[index]
  const next = () => setIndex((current) => (current + 1) % reviews.length)
  const previous = () => setIndex((current) => (current - 1 + reviews.length) % reviews.length)
  const progress = useMemo(() => `${index + 1} / ${reviews.length}`, [index])

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">Real journeys. Real memories.</p>
          <h2 id="testimonials-heading" className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-5xl">Loved by 300 travellers across the UK</h2>
          <p className="mt-5 text-pretty text-sm leading-6 text-primary-foreground/65 sm:text-base">Our clients rate us <span className="font-bold text-secondary">4.9/5</span> for seamless bookings, luxury stays and thoughtful service.</p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-secondary/30 bg-primary-foreground/[0.06] p-6 shadow-2xl shadow-black/20 sm:p-10">
          <div key={review.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Stars rating={review.rating} />
              <Badge variant="outline" className="border-secondary/40 bg-secondary/10 text-secondary">{review.destination}</Badge>
            </div>
            <Quote aria-hidden="true" className="mt-8 size-8 text-secondary/70" />
            <blockquote className="mt-3 max-w-3xl text-xl leading-8 text-primary-foreground/90 sm:text-2xl">“{review.quote}”</blockquote>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-primary-foreground/10 pt-5">
              <div><p className="font-bold">{review.name}</p><p className="mt-1 text-sm text-primary-foreground/50">Verified traveller · {review.city}</p></div>
              <p className="text-sm font-semibold text-secondary">{review.rating.toFixed(1)} / 5</p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-primary-foreground/10 pt-5">
            <p className="font-mono text-xs text-primary-foreground/45">Review {progress}</p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={previous} aria-label="Previous client review" className="border-primary-foreground/15 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><ChevronLeft aria-hidden="true" /></Button>
              <Button variant="secondary" size="icon" onClick={next} aria-label="Next client review"><ChevronRight aria-hidden="true" /></Button>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-1.5" aria-hidden="true">{[0, 1, 2, 3, 4].map((dot) => <span key={dot} className={`h-1 rounded-full transition-all ${Math.floor(index / 60) === dot ? "w-8 bg-secondary" : "w-2 bg-primary-foreground/20"}`} />)}</div>
      </div>
    </section>
  )
}
