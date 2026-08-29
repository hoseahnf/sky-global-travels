import { MapPin, Phone, MessageCircle } from "lucide-react"

const actions = [
  { href: "/#popular-travel-pages", label: "Destinations", icon: MapPin },
  { href: "https://wa.me/447476605409?text=Hello%2C%20I%20would%20like%20help%20planning%20a%20trip.", label: "WhatsApp", icon: MessageCircle, external: true },
  { href: "tel:+447476605409", label: "Call Us", icon: Phone },
]

export function MobileActionBar() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-3 rounded-2xl border border-border bg-card/95 p-1.5 shadow-xl backdrop-blur-md md:hidden">
      {actions.map(({ href, label, icon: Icon, external }) => (
        <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl px-2 text-[11px] font-bold text-card-foreground transition hover:bg-muted active:scale-95">
          <Icon aria-hidden="true" className="size-4 text-secondary-foreground" />
          {label}
        </a>
      ))}
    </nav>
  )
}
