import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-primary px-6 py-16 text-primary-foreground lg:px-10">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-bold text-secondary hover:underline">← Back to Sky Global Travels</Link>
        <p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] text-secondary">Legal &amp; trust</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-primary-foreground/60">Last updated: 25 August 2026</p>
        <div className="mt-10 space-y-8 text-sm leading-7 text-primary-foreground/75">
          <section><h2 className="text-xl font-bold text-primary-foreground">Our service</h2><p className="mt-3">SKY GLOBAL TRAVELS LTD (Company No: 17060157) provides travel advice, quotations, and booking assistance. An inquiry is not a booking and does not create a contract until we confirm the arrangements and provide the applicable booking terms.</p></section>
          <section><h2 className="text-xl font-bold text-primary-foreground">Bookings and payment</h2><p className="mt-3">Prices and availability can change until confirmed. Once you accept a quotation, deposits or full payment may be required. Your booking confirmation will explain the itinerary, payment schedule, supplier conditions, and any applicable fees.</p></section>
          <section><h2 className="text-xl font-bold text-primary-foreground">Changes and cancellations</h2><p className="mt-3">Changes and cancellations are subject to the terms of the airline, hotel, tour operator, insurer, or other supplier involved. We will explain known charges before processing a requested change wherever possible. Travel insurance is strongly recommended.</p></section>
          <section><h2 className="text-xl font-bold text-primary-foreground">Contact</h2><p className="mt-3">For questions about an inquiry or booking, call <a className="font-semibold text-secondary hover:underline" href="tel:+447476605409">+44 7476 605409</a> or email <a className="font-semibold text-secondary hover:underline" href="mailto:info@skygtravels.co.uk">info@skygtravels.co.uk</a>. These terms do not replace the specific terms supplied with your confirmed booking.</p></section>
        </div>
      </article>
    </main>
  )
}
