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
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {[
              ["/umrah-packages-from-london", "Umrah from the UK", "Spiritual journeys and affordable packages from £399pp."],
              ["/destinations/antalya-holidays", "Antalya holidays", "Mediterranean resorts and beach breaks."],
              ["/destinations/hurghada-holiday-packages", "Hurghada holiday packages", "Red Sea sunshine and resort escapes."],
              ["/destinations/istanbul-getaways", "Istanbul getaways", "Historical city breaks and culture."],
              ["/destinations/dubai-luxury-escapes", "Dubai luxury escapes", "World-class shopping and desert adventures."],
              ["/destinations/marrakech-holiday-packages", "Marrakech holidays", "Vibrant souks and luxury riads."],
              ["/destinations/agadir-holiday-packages", "Agadir holidays", "Golden beaches and seaside resorts."],
              ["/destinations/sharm-el-sheikh-holiday-packages", "Sharm El Sheikh", "Red Sea diving and winter sun."],
              ["/destinations/cairo-holiday-packages", "Cairo holidays", "Pyramids and Nile cultural tours."],
              ["/destinations/tunisia-holiday-packages", "Tunisia holidays", "Mediterranean beaches and culture."],
              ["/destinations/montenegro-holiday-packages", "Montenegro escapes", "Adriatic coast and mountain scenery."],
              ["/destinations/bali-holiday-packages", "Bali holidays", "Tropical beaches and island culture."],
              ["/destinations/thailand-holiday-packages", "Thailand holidays", "Beautiful islands and cultural escapes."],
              ["/destinations/canary-islands-holiday-packages", "Canary Islands", "Easy winter sun and resort breaks."],
              ["/blog", "Travel guides & planning advice", "Destination, seasonal and Umrah planning advice."],
            ].map(([href, title, description]) => (
              <a key={href} href={href} className="rounded-2xl bg-card p-6 font-semibold text-primary shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                {title}
                <span className="mt-2 block text-sm font-normal leading-6 text-muted-foreground">{description}</span>
              </a>
            ))}
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
