import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447476605409?text=Hi,%20I%20have%20a%20general%20inquiry."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-card shadow-lg transition hover:scale-105"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
