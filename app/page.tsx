import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DealsSection } from "@/components/deals-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { FeedbackSection } from "@/components/feedback-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { QuickAccessNav } from "@/components/quick-access-nav"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <QuickAccessNav />
      <DealsSection />
      <AboutSection />
      <ContactSection />
      <FeedbackSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

