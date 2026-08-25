import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DealsSection } from "@/components/deals-section"
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
      <AboutSection />
      <ContactSection />
      <FeedbackSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
