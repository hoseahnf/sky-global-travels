import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DealsSection } from "@/components/deals-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { FeedbackSection } from "@/components/feedback-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <DealsSection />
      <section className="bg-muted py-16" aria-labelledby="popular-travel-pages">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-foreground">Plan with confidence</p>
            <h2 id="popular-travel-pages" className="mt-3 text-3xl font-bold text-primary">Explore our travel pages and guides</h2>
            <p className="mt-3 leading-7 text-muted-foreground">Find focused advice and package information for the journeys our customers ask about most.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <a href="/destinations/antalya-holidays" className="rounded-2xl bg-card p-6 font-semibold text-primary shadow-sm transition hover:-translate-y-1">Antalya holidays<span className="mt-2 block text-sm font-normal text-muted-foreground">Mediterranean resorts and beach breaks.</span></a>
            <a href="/destinations/hurghada-holiday-packages" className="rounded-2xl bg-card p-6 font-semibold text-primary shadow-sm transition hover:-translate-y-1">Hurghada holiday packages<span className="mt-2 block text-sm font-normal text-muted-foreground">Red Sea sunshine and resort escapes.</span></a>
            <a href="/blog" className="rounded-2xl bg-card p-6 font-semibold text-primary shadow-sm transition hover:-translate-y-1">Travel guides<span className="mt-2 block text-sm font-normal text-muted-foreground">Destination, seasonal and Umrah planning advice.</span></a>
          </div>
        </div>
      </section>
      <AboutSection />
      <ContactSection />
      <FeedbackSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
