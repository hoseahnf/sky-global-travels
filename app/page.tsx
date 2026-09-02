'use client'

import { useState } from 'react'
import { Search, ChevronDown, Plane, Phone, Mail, MapPin, Star, ArrowRight } from 'lucide-react'

const destinations = [
  { name: 'Turkey', image: '/turkey.jpg', detail: 'Antalya, Istanbul & more' },
  { name: 'Dubai', image: '/dubai.jpg', detail: 'Luxury escapes & city breaks' },
  { name: 'Makkah & Madinah', image: '/makkah.jpg', detail: 'Trusted Umrah packages' },
  { name: 'Bali', image: '/bali.jpg', detail: 'Island adventures' },
  { name: 'Maldives', image: '/maldives.jpg', detail: 'Paradise made simple' },
  { name: 'Marrakech', image: '/marrakech.jpg', detail: 'Riads, souks & sunshine' },
]

const deals = [
  { name: 'Antalya, Turkey', image: '/turkey.jpg', from: '£399', nights: '7 nights' },
  { name: 'Dubai, UAE', image: '/dubai.jpg', from: '£599', nights: '5 nights' },
  { name: 'Makkah & Madinah', image: '/makkah.jpg', from: '£899', nights: '10 nights' },
]

export default function Home() {
  const [query, setQuery] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-primary-foreground/20 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Sky Global Travels home">
            <div className="grid size-10 place-items-center rounded-full bg-accent text-accent-foreground"><Plane data-icon="inline-start" /></div>
            <span className="font-semibold tracking-tight">Sky Global <span className="text-accent">Travels</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Main navigation">
            <a href="#destinations" className="hover:text-accent">Destinations</a>
            <a href="#deals" className="hover:text-accent">Holiday Deals</a>
            <a href="#umrah" className="hover:text-accent">Umrah</a>
            <a href="#about" className="hover:text-accent">About us</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </nav>
          <a href="tel:+442071234567" className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition hover:brightness-95 sm:flex"><Phone data-icon="inline-start" /> 020 7123 4567</a>
        </div>
      </header>

      <section id="top" className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-primary">
        <img src="/turkey.jpg" alt="A sunny Turkish coastline" className="absolute inset-0 -z-20 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-primary/75" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-primary/90 to-transparent" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-36 lg:px-10">
          <div className="max-w-3xl text-primary-foreground">
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent">Your journey starts here</p>
            <h1 className="max-w-3xl text-balance text-5xl font-bold leading-[1.04] tracking-tight md:text-7xl">Travel further.<br /><span className="text-accent">Live brighter.</span></h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-primary-foreground/85">Discover unforgettable holidays, flights and Umrah journeys, thoughtfully planned by people who care about every detail.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#deals" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground transition hover:brightness-95">Explore our deals <ArrowRight data-icon="inline-end" /></a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-primary-foreground/50 px-6 py-3 font-bold text-primary-foreground transition hover:bg-primary-foreground/10">Speak to an expert</a>
            </div>
          </div>
          <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="mt-16 flex max-w-4xl flex-col gap-2 rounded-2xl bg-card p-2 shadow-2xl sm:flex-row">
            <div className="flex flex-1 items-center gap-3 px-4 py-3 text-foreground"><Search className="text-muted-foreground" /><input aria-label="Search destinations" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Where do you want to go?" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" /></div>
            <button type="submit" className="rounded-xl bg-primary px-7 py-3 font-bold text-primary-foreground transition hover:bg-primary/90">Search holidays</button>
          </form>
          {submitted && <p className="mt-3 text-sm font-semibold text-accent">Thanks — we&apos;ll help you find {query || 'your perfect trip'}.</p>}
        </div>
      </section>

      <section id="destinations" className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">Go somewhere wonderful</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-primary md:text-5xl">Find your next escape</h2></div><a href="#contact" className="font-bold text-primary underline decoration-accent decoration-4 underline-offset-4">View all destinations</a></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{destinations.map((destination) => <a href="#contact" key={destination.name} className="group relative min-h-64 overflow-hidden rounded-2xl bg-primary"><img src={destination.image} alt={destination.name} className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground"><h3 className="text-2xl font-bold">{destination.name}</h3><p className="mt-1 text-sm text-primary-foreground/75">{destination.detail}</p></div></a>)}</div>
      </section>

      <section id="deals" className="bg-muted py-20"><div className="mx-auto max-w-7xl px-5 lg:px-10"><div className="max-w-xl"><p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">Made for you</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-primary md:text-5xl">Handpicked holiday deals</h2><p className="mt-4 leading-7 text-muted-foreground">Great value, carefully chosen. Tell us what you&apos;re dreaming of and we&apos;ll make it happen.</p></div><div className="mt-10 grid gap-6 md:grid-cols-3">{deals.map((deal) => <article key={deal.name} className="overflow-hidden rounded-2xl bg-card shadow-sm"><img src={deal.image} alt={deal.name} className="h-52 w-full object-cover" /><div className="p-6"><p className="text-sm text-muted-foreground">{deal.nights} from</p><div className="mt-1 flex items-end justify-between gap-3"><h3 className="text-xl font-bold text-primary">{deal.name}</h3><p className="text-2xl font-bold text-primary">{deal.from}<span className="text-xs font-normal text-muted-foreground">pp</span></p></div><a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">View package <ArrowRight data-icon="inline-end" /></a></div></article>)}</div></div></section>

      <section id="umrah" className="relative overflow-hidden bg-primary py-20 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-5 lg:flex-row lg:items-center lg:px-10"><div className="flex-1"><p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">A journey of faith</p><h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Your Umrah,<br />in trusted hands.</h2><p className="mt-5 max-w-lg leading-8 text-primary-foreground/75">From flights and hotels to transfers and guidance, our experienced team takes care of every detail so you can focus on what matters.</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground">Explore Umrah packages <ArrowRight data-icon="inline-end" /></a></div><img src="/makkah.jpg" alt="The Kaaba in Makkah" className="h-64 w-full rounded-2xl object-cover lg:h-80 lg:w-[46%]" /></div></section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-10"><div className="grid gap-12 md:grid-cols-2 md:items-center"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">Why Sky Global</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-primary">Travel with people who get it.</h2><p className="mt-5 leading-8 text-muted-foreground">We&apos;re an independent UK travel team combining personal service with unbeatable access to the world. No complicated booking systems — just honest advice from a real person.</p><div className="mt-8 grid grid-cols-3 gap-4"><div><p className="text-3xl font-bold text-primary">15+</p><p className="mt-1 text-sm text-muted-foreground">Years experience</p></div><div><p className="text-3xl font-bold text-primary">4.9</p><p className="mt-1 text-sm text-muted-foreground">Customer rating</p></div><div><p className="text-3xl font-bold text-primary">24/7</p><p className="mt-1 text-sm text-muted-foreground">Support</p></div></div></div><div className="rounded-2xl bg-accent p-8 text-accent-foreground md:p-12"><div className="flex gap-1 text-primary">{[1,2,3,4,5].map((star) => <Star key={star} fill="currentColor" />)}</div><blockquote className="mt-6 text-2xl font-bold leading-snug">&quot;The team made our family holiday completely stress-free. We&apos;ll never book any other way.&quot;</blockquote><p className="mt-6 text-sm font-semibold">— Aisha K., Manchester</p></div></div></section>

      <footer id="contact" className="bg-primary py-14 text-primary-foreground"><div className="mx-auto max-w-7xl px-5 lg:px-10"><div className="flex flex-col justify-between gap-10 border-b border-primary-foreground/20 pb-12 md:flex-row"><div><div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-full bg-accent text-accent-foreground"><Plane /></div><span className="text-xl font-bold">Sky Global <span className="text-accent">Travels</span></span></div><p className="mt-5 max-w-sm leading-7 text-primary-foreground/70">Your trusted partner for holidays, flights and Umrah journeys from the UK.</p></div><div className="flex flex-col gap-4 text-sm"><a href="tel:+442071234567" className="flex items-center gap-3"><Phone className="text-accent" />020 7123 4567</a><a href="mailto:hello@skyglobaltravels.com" className="flex items-center gap-3"><Mail className="text-accent" />hello@skyglobaltravels.com</a><p className="flex items-center gap-3"><MapPin className="text-accent" />London, United Kingdom</p></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-sm text-primary-foreground/60 md:flex-row"><p>© 2026 Sky Global Travels. All rights reserved.</p><p>ABTA protected · ATOL protected</p></div></div></footer>
    </main>
  )
}
