"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const destinations = ["Antalya", "Agadir", "Cairo", "Istanbul", "Marrakech", "Sharm El Sheikh", "Hurghada", "Tunisia", "Montenegro", "Bali", "Thailand", "Canary Islands"]
const clients = [
  ["Aarav Patel", "London"], ["Charlotte Evans", "Manchester"], ["Amelia Thompson", "Birmingham"], ["Muhammad Usman", "Bradford"],
  ["Sophie Williams", "Leeds"], ["Chinedu Okafor", "Bristol"], ["Isla Roberts", "Glasgow"], ["Harry Cooper", "Liverpool"],
  ["Emily Richardson", "Nottingham"], ["Jack Mitchell", "Cardiff"], ["Grace Carter", "Sheffield"], ["Tariq Mahmood", "Newcastle"],
  ["Ruby Hamilton", "London"], ["William Graham", "Manchester"], ["Aisha Khan", "Bradford"], ["Freya Martin", "Oxford"],
  ["Noah Clarke", "Brighton"], ["Jessica Taylor", "Cambridge"], ["Ethan Lewis", "Coventry"], ["Mia Walker", "Reading"],
  ["Riya Banerjee", "Leicester"], ["Lily Young", "Southampton"], ["Fatima Ahmed", "Luton"], ["Emeka Nwosu", "Wolverhampton"],
  ["Priya Shah", "Harrow"], ["Oluwaseun Adeyemi", "Croydon"], ["Bilal Hussain", "Birmingham"], ["Nneka Eze", "London"],
  ["Sanjay Mehta", "Hounslow"], ["Zainab Rahman", "Manchester"], ["David Mensah", "Leeds"], ["Ananya Iyer", "Edinburgh"],
  ["Hassan Ali", "Dewsbury"], ["Chiamaka Obi", "Reading"], ["Nusrat Jahan", "Oldham"], ["Kofi Mensah", "Sheffield"],
] as const
const agents = ["Ryan Smith", "Ryan Smith", "Ryan Smith", "Ryan Smith", "Ryan Smith", "Ryan Smith", "Ryan Smith", "Ryan Smith", "Ryan Smith", "Ryan Smith", "Ryan Smith", "Scott Brown", "Alex Taylor", "Joe Miller", "Daniel Cooper", "Sophie Jenkins", "Liam Gallagher", "Emma Watson", "Oliver Davies", "Chloe Evans", "Maya Patel", "Daniel Ahmed", "Hannah Jones", "Adam Wilson", "Nadia Khan"]

const tripTypes = ["our first family escape", "a quiet honeymoon", "a solo reset", "a birthday break", "a friends’ getaway", "a long-awaited anniversary", "a half-term holiday", "a surprise weekend", "a multigenerational trip", "a relaxing couples’ break", "our first trip abroad together"]
const experiences = [
  "Ryan Smith found a fare that was genuinely cheaper than anything I could find online and made the whole booking effortless.",
  "The price Ryan Smith secured was incredible; he explained every detail clearly and never rushed us.",
  "From the first WhatsApp message to the final confirmation, the booking felt wonderfully simple and personal.",
  "Our adviser compared several options patiently and found a beautiful hotel without stretching our budget.",
  "I was nervous about arranging everything remotely, but the team answered every question and made it feel easy.",
  "The itinerary arrived perfectly organised, with transfers and room requests already taken care of.",
  "We expected a compromise at this price, yet the resort was polished, spacious and far better than the photos.",
  "The value was exceptional and every payment and document was explained in plain English.",
  "A last-minute date change was handled kindly and quickly, so we did not feel left alone at any stage.",
  "The hotel staff knew our preferences on arrival, which made the trip feel genuinely special.",
  "I appreciated the honest advice more than anything; we were guided towards the right area for our plans.",
  "Even with a small transfer hiccup, our agent stepped in straight away and kept us updated until it was resolved.",
  "The luxury stay, smooth flights and thoughtful recommendations made this feel like a far more expensive holiday.",
  "Everything matched the promise: a competitive price, a gorgeous room and support that was always reachable.",
  "We saved enough to add an excursion, while still staying somewhere beautifully maintained and comfortable.",
  "The confirmation process took minutes rather than hours, and the follow-up before departure was excellent.",
] as const

const reviews = Array.from({ length: 352 }, (_, index) => {
  const [name, city] = clients[index % clients.length]
  const agent = agents[index % agents.length]
  const destination = destinations[index % destinations.length]
  const rating = [5, 5, 4.5, 5, 4, 5, 5, 4.5, 5, 5, 4.5][index % 11]
  const trip = tripTypes[Math.floor(index / destinations.length) % tripTypes.length]
  const experience = experiences[index % experiences.length]
  return {
    id: index + 1,
    name,
    city,
    agent,
    destination,
    rating,
    quote: `${experience} Our ${trip} in ${destination} was comfortable, memorable and excellent value. Review ${index + 1} was especially memorable for the clear itinerary, thoughtful communication and personal care throughout.`,
  }
})

function Stars({ rating }: { rating: number }) {
  return <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }, (_, index) => <Star key={index} aria-hidden="true" className={`size-4 ${rating >= index + 1 ? "fill-secondary text-secondary" : rating > index ? "fill-secondary/50 text-secondary" : "text-secondary/25"}`} />)}
  </div>
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const review = reviews[index]
  const changeReview = (direction: number) => setIndex((current) => (current + direction + reviews.length) % reviews.length)

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">Real journeys. Real memories.</p>
          <h2 id="testimonials-heading" className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-5xl">Loved by thousands of travelers across the UK</h2>
          <p className="mt-5 text-pretty text-sm leading-6 text-primary-foreground/65 sm:text-base"><span className="font-bold text-secondary">352 reviews</span> with an average rating of <span className="font-bold text-secondary">4.9/5</span> for seamless bookings, luxury stays and thoughtful service.</p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-secondary/30 bg-primary-foreground/[0.06] p-6 shadow-2xl shadow-black/20 sm:p-10">
          <div key={review.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex flex-wrap items-center justify-between gap-4"><Stars rating={review.rating} /><Badge variant="outline" className="border-secondary/40 bg-secondary/10 text-secondary">{review.destination}</Badge></div>
            <Quote aria-hidden="true" className="mt-8 size-8 text-secondary/70" />
            <blockquote className="mt-3 max-w-3xl text-xl leading-8 text-primary-foreground/90 sm:text-2xl">“{review.quote}”</blockquote>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/10 pt-5">
              <div><p className="font-bold">{review.name}</p><p className="mt-1 text-sm text-primary-foreground/50">Verified traveller · {review.city} · {review.agent} assisted</p></div>
              <p className="text-sm font-semibold text-secondary">{review.rating.toFixed(1)} / 5</p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-primary-foreground/10 pt-5"><p className="font-mono text-xs text-primary-foreground/45">Review {index + 1} / 352</p><div className="flex gap-2"><Button variant="outline" size="icon" onClick={() => changeReview(-1)} aria-label="Previous client review" className="border-primary-foreground/15 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><ChevronLeft aria-hidden="true" /></Button><Button variant="secondary" size="icon" onClick={() => changeReview(1)} aria-label="Next client review"><ChevronRight aria-hidden="true" /></Button></div></div>
        </div>
      </div>
    </section>
  )
}
