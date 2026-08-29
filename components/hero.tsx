"use client"

import { useState } from "react"
import { ArrowRight, CalendarDays, MapPin, Plane, Search, Users } from "lucide-react"

const searchTabs = ["Holidays", "Umrah Packages", "Flights"] as const

export function Hero() {
  const [activeTab, setActiveTab] = useState<(typeof searchTabs)[number]>("Holidays")

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-primary/55" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <p className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-secondary backdrop-blur-sm">
          Premium Service &bull; Best Prices &bull; Holiday Deals
        </p>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-card sm:text-5xl md:text-6xl lg:text-7xl">
          Explore the world with us
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-card/80 sm:text-xl">
          Discover unforgettable destinations with handpicked luxury holiday packages at unbeatable prices.
        </p>

        <div className="mt-10 w-full max-w-5xl rounded-2xl bg-card p-2 text-left shadow-2xl ring-1 ring-card/30 sm:p-3">
          <div className="flex flex-wrap gap-1 border-b border-border px-2 pb-2" role="tablist" aria-label="Search type">
            {searchTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  activeTab === tab ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid gap-2 p-2 sm:grid-cols-[1.6fr_1fr_1fr_auto] sm:items-end">
            <label className="flex min-w-0 flex-col gap-1.5 text-xs font-semibold text-muted-foreground">
              Where do you want to go?
              <span className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-3 text-sm font-normal text-foreground">
                <MapPin aria-hidden="true" className="size-4 text-primary" />
                <input aria-label="Destination" placeholder={activeTab === "Umrah Packages" ? "Makkah or Madinah" : "Destination or airport"} className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground" />
              </span>
            </label>
            <label className="flex flex-col gap-1.5 text-xs font-semibold text-muted-foreground">
              When
              <span className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-3 text-sm font-normal text-foreground">
                <CalendarDays aria-hidden="true" className="size-4 text-primary" />
                <select aria-label="Travel dates" className="w-full bg-transparent outline-none"><option>Any dates</option><option>Next month</option><option>Summer 2027</option></select>
              </span>
            </label>
            <label className="flex flex-col gap-1.5 text-xs font-semibold text-muted-foreground">
              Travellers
              <span className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-3 text-sm font-normal text-foreground">
                <Users aria-hidden="true" className="size-4 text-primary" />
                <select aria-label="Travellers" className="w-full bg-transparent outline-none"><option>2 travellers</option><option>1 traveller</option><option>Family</option></select>
              </span>
            </label>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground transition hover:opacity-90 sm:h-[46px]">
              <Search data-icon="inline-start" /> Search
            </button>
          </div>
        </div>

        <a
          href="https://wa.me/447476605409?text=Hello,%20I%20would%20like%20to%20make%20a%20booking%20inquiry."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-secondary/90 px-7 py-3 text-base font-semibold text-secondary-foreground shadow-lg transition hover:scale-[1.02] hover:opacity-90"
        >
          Book with Ryan Smith
          <ArrowRight data-icon="inline-end" />
        </a>
      </div>
    </section>
  )
}
