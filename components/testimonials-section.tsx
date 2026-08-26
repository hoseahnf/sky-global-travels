"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const destinations = ["Antalya", "Agadir", "Cairo", "Istanbul", "Marrakech", "Sharm El Sheikh", "Hurghada", "Tunisia", "Montenegro", "Bali", "Thailand", "Canary Islands"]
const names = [
  ["Amelia Thompson", "London"], ["Daniel Hughes", "Manchester"], ["Sophie Williams", "Birmingham"],
  ["Oliver Bennett", "Edinburgh"], ["Charlotte Evans", "Leeds"], ["George Wilson", "Bristol"],
  ["Isla Roberts", "Glasgow"], ["Harry Cooper", "Liverpool"], ["Emily Richardson", "Nottingham"],
  ["Jack Mitchell", "Cardiff"], ["Grace Carter", "Sheffield"], ["Thomas Murphy", "Newcastle"],
  ["Ruby Hamilton", "London"], ["William Graham", "Manchester"], ["Daisy Graham", "Birmingham"],
  ["Theo Robertson", "Edinburgh"], ["Poppy Bailey", "Leicester"], ["Charlie Phillips", "Brighton"],
]
const quotes = [
  "The booking was wonderfully seamless from start to finish. Our hotel felt genuinely luxurious, and every detail was handled beautifully.",
  "Sky Global Travels found us a gorgeous beachfront stay and made the whole process feel effortless. Brilliant service.",
  "From the first call to our return home, the team were attentive and knowledgeable. Our hotel was superb.",
  "Fast replies, clear advice and a stunning hotel. We will definitely book through Sky Global Travels again.",
  "The whole holiday felt polished and personal. We felt like valued clients from the very first conversation.",
  "Beautiful accommodation, smooth transfers and kind support. The trip felt effortless and genuinely luxurious.",
]

const reviews = Array.from({ length: 300 }, (_, index) => {
  const [name, city] = names[index % names.length]
  const destination = destinations[index % destinations.length]
  const rating = index % 11 === 0 ? 4 : index % 7 === 0 ? 4.5 : 5
  return { id: index + 1, name, city, destination, rating, quote: quotes[index % quotes.length] }
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
