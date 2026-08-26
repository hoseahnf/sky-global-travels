"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const reviews = [
  ["Amelia Thompson", "London", "Antalya", "The booking was wonderfully seamless from start to finish. Our hotel in Antalya felt genuinely luxurious, and every detail was handled beautifully."],
  ["Daniel Hughes", "Manchester", "Agadir", "Sky Global Travels found us a gorgeous beachfront stay in Agadir and made the whole process feel effortless. Brilliant service."],
  ["Sophie Williams", "Birmingham", "Cairo", "From the first call to our return home, the team were attentive and knowledgeable. Cairo was unforgettable and our hotel was superb."],
  ["Oliver Bennett", "Edinburgh", "Istanbul", "A faultless booking experience with thoughtful recommendations. Istanbul was magical, and the hotel exceeded every expectation."],
  ["Charlotte Evans", "Leeds", "Marrakech", "The riad was absolutely beautiful and the service from Sky Global Travels was exceptional. It was the easiest holiday we have ever booked."],
  ["George Wilson", "Bristol", "Sharm El Sheikh", "Our Sharm El Sheikh escape was pure luxury. Everything ran smoothly and the team were always quick to answer our questions."],
  ["Isla Roberts", "Glasgow", "Hurghada", "We had the most relaxing week in Hurghada. The resort was stunning and the booking team made everything wonderfully simple."],
  ["Harry Cooper", "Liverpool", "Tunisia", "Excellent advice and a beautiful hotel in Tunisia. We felt looked after before, during and after the trip."],
  ["Emily Richardson", "Nottingham", "Montenegro", "Montenegro was even better than expected. The hotel was elegant, the itinerary was perfect, and booking could not have been easier."],
  ["Jack Mitchell", "Cardiff", "Bali", "A truly memorable Bali holiday arranged with care. Our villa was incredible and customer service was first class throughout."],
  ["Grace Carter", "Sheffield", "Thailand", "The team understood exactly what we wanted and delivered it. Thailand was beautiful, with a luxurious hotel and seamless transfers."],
  ["Thomas Murphy", "Newcastle", "Canary Islands", "A stress-free booking and a fantastic Canary Islands resort. The advice we received was honest, helpful and spot on."],
  ["Lily Walker", "London", "Antalya", "Our Antalya hotel was like a five-star dream. The team were warm, organised and made the booking feel completely effortless."],
  ["Noah Morris", "Manchester", "Agadir", "Agadir was the perfect winter break. We were given brilliant options and the final hotel was even nicer than the photos."],
  ["Evie Ward", "Birmingham", "Cairo", "The personal service made all the difference. Cairo was fascinating and we came home feeling we had enjoyed a very special trip."],
  ["Arthur Bell", "Edinburgh", "Istanbul", "Fast replies, clear advice and a stunning hotel in Istanbul. We will definitely book through Sky Global Travels again."],
  ["Poppy Bailey", "Leicester", "Marrakech", "Our Marrakech escape was beautifully arranged. The riad was peaceful and luxurious, and the team thought of everything."],
  ["Charlie Phillips", "Brighton", "Sharm El Sheikh", "Booking was straightforward and reassuring. The resort in Sharm El Sheikh was immaculate, with wonderful service."],
  ["Freya Watson", "York", "Hurghada", "A lovely resort, perfect weather and helpful support whenever we needed it. Hurghada was an absolute joy."],
  ["Leo Foster", "Reading", "Tunisia", "The recommendation was spot on. Tunisia gave us the relaxed luxury we wanted and the booking experience was excellent."],
  ["Mia Gray", "Coventry", "Montenegro", "Beautiful views, a brilliant hotel and no booking stress at all. The team made Montenegro feel wonderfully accessible."],
  ["Oscar James", "Oxford", "Bali", "Every part of our Bali trip felt considered. The villa was stunning and the customer service was genuinely personal."],
  ["Ella Jenkins", "Cambridge", "Thailand", "The advice on areas and hotels was invaluable. Our Thailand holiday was seamless, luxurious and completely unforgettable."],
  ["Henry Murray", "Southampton", "Canary Islands", "The hotel in the Canary Islands was perfect for our family. Everything was clearly explained and smoothly organised."],
  ["Ruby Hamilton", "London", "Antalya", "Sky Global Travels made our anniversary trip to Antalya feel extra special. The hotel was beautiful and the service was impeccable."],
  ["William Graham", "Manchester", "Agadir", "We appreciated the honest recommendations and quick communication. Agadir was relaxing, sunny and exactly what we hoped for."],
  ["Daisy Graham", "Birmingham", "Cairo", "A brilliant experience all round. Our Cairo hotel was central, comfortable and far more luxurious than we expected."],
  ["Theo Robertson", "Glasgow", "Istanbul", "The booking process was clear and easy, with no surprises. Istanbul was incredible and our stay was first class."],
  ["Florence Stewart", "Bristol", "Marrakech", "A gorgeous Marrakech riad and wonderful support from the team. We felt like valued clients from the very first conversation."],
  ["James Anderson", "Leeds", "Sharm El Sheikh", "The resort was luxurious, the sea was stunning and the entire holiday was managed so smoothly. Highly recommended."],
  ["Sienna MacDonald", "Edinburgh", "Hurghada", "A lovely family holiday with a fantastic resort. Sky Global Travels handled every question quickly and kindly."],
  ["Freddie Clarke", "Liverpool", "Tunisia", "Tunisia was a superb choice, thanks to the team’s thoughtful advice. The hotel and service were both excellent."],
  ["Matilda Young", "Nottingham", "Montenegro", "The views from our Montenegro hotel were breathtaking. Booking was simple and the support was consistently brilliant."],
  ["Archie King", "Cardiff", "Bali", "Our Bali itinerary was perfectly balanced and the accommodation was beautiful. A seamless, professional service."],
  ["Sophie Wright", "Sheffield", "Thailand", "We were guided to a wonderful Thailand resort that suited us perfectly. Every detail was handled with real care."],
  ["Joshua Scott", "Newcastle", "Canary Islands", "A very easy booking experience and a gorgeous hotel. The Canary Islands were the perfect escape from the British weather."],
  ["Ava Green", "London", "Antalya", "A luxury break without the usual hassle. Antalya was gorgeous and Sky Global Travels were fantastic from beginning to end."],
  ["Edward Baker", "Manchester", "Agadir", "The team listened to our needs and found a brilliant Agadir hotel. Friendly, efficient and completely dependable."],
  ["Isabella Adams", "Birmingham", "Cairo", "Our Cairo trip was expertly arranged, with a beautiful hotel and excellent local recommendations. We loved every minute."],
  ["Alexander Nelson", "Edinburgh", "Istanbul", "We received excellent advice and fast answers throughout. Istanbul was captivating and the hotel was wonderfully comfortable."],
  ["Penny Carter", "Leicester", "Marrakech", "The whole Marrakech holiday felt polished and personal. Such a beautiful stay, booked with absolutely no fuss."],
  ["Max Turner", "Brighton", "Sharm El Sheikh", "From airport details to the hotel, everything was seamless. Sharm El Sheikh gave us the luxury sunshine break we needed."],
  ["Florence Cox", "York", "Hurghada", "A wonderful Hurghada resort and brilliant communication. We always knew what was happening and felt very well looked after."],
  ["Sebastian Collins", "Reading", "Tunisia", "The hotel was peaceful, stylish and exactly as promised. Booking was easy and the team were a pleasure to deal with."],
  ["Chloe Edwards", "Coventry", "Montenegro", "Montenegro was stunning. The team created a lovely trip for us and the hotel’s service was exceptional."],
  ["Finley Morris", "Oxford", "Bali", "The villa and transfers were perfect. Sky Global Travels made a long-haul holiday feel simple from the very start."],
  ["Sophie Cook", "Cambridge", "Thailand", "Wonderful service and an unforgettable Thailand stay. Our hotel was luxurious and every recommendation felt considered."],
  ["Benjamin Rogers", "Southampton", "Canary Islands", "We had a brilliant time in the Canary Islands. The booking was transparent, easy and supported by a genuinely helpful team."],
  ["Holly Morgan", "London", "Antalya", "Our Antalya hotel was exceptional and the team were always on hand. Such a smooth, relaxing experience."],
  ["Samuel Reed", "Manchester", "Agadir", "A beautiful Agadir resort, excellent value and friendly advice throughout. We could not fault the service."],
  ["Lucy Bell", "Birmingham", "Cairo", "Everything was organised perfectly and our hotel had wonderful views. Cairo was a brilliant experience for the whole family."],
  ["Logan Murphy", "Edinburgh", "Istanbul", "Sky Global Travels took the uncertainty out of booking. Istanbul was fantastic and our hotel felt wonderfully luxurious."],
  ["Eleanor Bailey", "Bristol", "Marrakech", "The riad was stunning and the service was personal without ever being intrusive. A truly special Marrakech holiday."],
  ["Daniel Ellis", "Leeds", "Sharm El Sheikh", "A smooth booking, a beautiful resort and fantastic customer care. We will happily use the team again."],
  ["Rosie Harrison", "Glasgow", "Hurghada", "Hurghada was exactly the restful escape we needed. Everything was clear, easy and thoughtfully arranged."],
  ["Joseph Wilson", "Liverpool", "Tunisia", "The team found us a lovely hotel in Tunisia and made the process incredibly straightforward. Excellent from start to finish."],
  ["Erin Davies", "Nottingham", "Montenegro", "A seamless experience and a gorgeous coastal hotel. The advice we received made Montenegro a perfect choice."],
  ["Harrison Evans", "Cardiff", "Bali", "Beautiful accommodation, smooth transfers and kind support. Our Bali holiday felt effortless and genuinely luxurious."],
  ["Maisie Thomas", "Sheffield", "Thailand", "The service was exceptional and our Thailand hotel was superb. Every part of the trip was handled with care."],
  ["Jacob Roberts", "Newcastle", "Canary Islands", "A fantastic resort and a very easy booking journey. The Canary Islands were perfect, and we felt looked after throughout."],
] as const

const pageSize = 6
const pageCount = Math.ceil(reviews.length / pageSize)

export function TestimonialsSection() {
  const [page, setPage] = useState(1)
  const visibleReviews = useMemo(() => reviews.slice((page - 1) * pageSize, page * pageSize), [page])
  const firstResult = (page - 1) * pageSize + 1
  const lastResult = Math.min(page * pageSize, reviews.length)

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">Real journeys. Real memories.</p>
          <h2 id="testimonials-heading" className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-5xl">Loved by travellers across the UK</h2>
          <p className="mt-5 text-pretty text-sm leading-6 text-primary-foreground/65 sm:text-base">More than five decades of combined travel expertise, reflected in the experiences our clients bring home.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleReviews.map(([name, city, destination, quote]) => (
            <article key={`${name}-${destination}`} className="flex min-h-64 flex-col rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-6 transition hover:-translate-y-1 hover:border-secondary/50 hover:bg-primary-foreground/[0.09]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} aria-hidden="true" className="size-4 fill-secondary text-secondary" />)}
                </div>
                <Badge variant="outline" className="border-secondary/40 bg-secondary/10 text-secondary">{destination}</Badge>
              </div>
              <Quote aria-hidden="true" className="mt-6 size-6 text-secondary/70" />
              <blockquote className="mt-2 flex-1 text-sm leading-6 text-primary-foreground/85">“{quote}”</blockquote>
              <footer className="mt-6 border-t border-primary-foreground/10 pt-4">
                <p className="text-sm font-bold">{name}</p>
                <p className="mt-1 text-xs text-primary-foreground/50">Verified traveller · {city}</p>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-primary-foreground/10 pt-6 sm:flex-row">
          <p className="text-xs text-primary-foreground/50">Showing {firstResult}–{lastResult} of {reviews.length} client reviews</p>
          <nav aria-label="Testimonials pages" className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} aria-label="Previous testimonials page" className="border-primary-foreground/15 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <ChevronLeft aria-hidden="true" />
            </Button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
              <Button key={pageNumber} variant={page === pageNumber ? "secondary" : "outline"} size="icon" onClick={() => setPage(pageNumber)} aria-label={`Go to testimonials page ${pageNumber}`} aria-current={page === pageNumber ? "page" : undefined} className={page === pageNumber ? "font-bold" : "border-primary-foreground/15 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"}>{pageNumber}</Button>
            ))}
            <Button variant="outline" size="icon" onClick={() => setPage((current) => Math.min(pageCount, current + 1))} disabled={page === pageCount} aria-label="Next testimonials page" className="border-primary-foreground/15 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <ChevronRight aria-hidden="true" />
            </Button>
          </nav>
        </div>
      </div>
    </section>
  )
}
