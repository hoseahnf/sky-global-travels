"use client"

import { FormEvent, useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value: "5 Brayford Square, London, E1 0SG",
    href: "https://www.google.com/maps/search/?api=1&query=5+Brayford+Square,+London,+E1+0SG",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7476 605409",
    href: "tel:+447476605409",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@skygtravels.co.uk",
    href: "mailto:info@skygtravels.co.uk",
  },
  {
    icon: Mail,
    label: "Inquiries",
    value: "inquiry@skygtravels.co.uk",
    href: "mailto:inquiry@skygtravels.co.uk",
  },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h3 className="text-3xl font-bold sm:text-4xl">Contact Us</h3>
          <p className="mt-4 text-primary-foreground/70">
            {"Get in touch — we'd love to help plan your next adventure."}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.icon === MapPin ? "_blank" : undefined}
              rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
              className="flex items-start gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition hover:bg-primary-foreground/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                <item.icon className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">{item.label}</p>
                <p className="mt-1 text-sm font-medium">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-secondary/30 bg-primary-foreground/[0.06] p-6 sm:p-8">
          <div className="mb-6">
            <h4 className="text-2xl font-bold">Quick Holiday Inquiry</h4>
            <p className="mt-2 text-sm text-primary-foreground/60">
              Tell us a little about your plans and our team will be in touch.
            </p>
          </div>
          {submitted ? (
            <div className="rounded-xl border border-secondary/40 bg-secondary/10 px-5 py-6 text-center text-sm font-semibold text-secondary" role="status">
              Thank you — your inquiry has been received. We&apos;ll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Full Name
                <input required name="fullName" type="text" autoComplete="name" className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-3 font-normal outline-none transition placeholder:text-primary-foreground/40 focus:border-secondary" placeholder="Your full name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Email Address
                <input required name="email" type="email" autoComplete="email" className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-3 font-normal outline-none transition placeholder:text-primary-foreground/40 focus:border-secondary" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Phone Number
                <input required name="phone" type="tel" defaultValue="+44 7476 605409" autoComplete="tel" className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-3 font-normal outline-none transition placeholder:text-primary-foreground/40 focus:border-secondary" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Destination
                <select required name="destination" defaultValue="" className="rounded-lg border border-primary-foreground/15 bg-primary px-4 py-3 font-normal outline-none transition focus:border-secondary">
                  <option value="" disabled>Select a destination</option>
                  <option>Hurghada</option>
                  <option>Sharm El Sheikh</option>
                  <option>Canary Islands</option>
                  <option>Custom</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Guests
                <input required name="guests" type="number" min="1" max="50" inputMode="numeric" className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-3 font-normal outline-none transition placeholder:text-primary-foreground/40 focus:border-secondary" placeholder="2" />
              </label>
              <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
                Travel Dates / Notes
                <textarea required name="notes" rows={4} className="resize-none rounded-lg border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-3 font-normal outline-none transition placeholder:text-primary-foreground/40 focus:border-secondary" placeholder="Preferred dates, duration, or anything else we should know" />
              </label>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground transition hover:bg-secondary/90 sm:col-span-2">
                <Send className="h-4 w-4" />
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
