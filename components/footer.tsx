

import { Plane } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-[oklch(0.15_0.04_250)] py-8 text-center">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6">
        <div className="flex items-center gap-2 text-primary-foreground">
          <Plane aria-hidden="true" className="size-5 text-secondary" />
          <span className="text-sm font-semibold">Sky Global Travels</span>
        </div>
        <p className="text-sm font-bold text-secondary">
          Founder &amp; CEO: Hosea Hanif | SKY GLOBAL TRAVELS LTD
        </p>
        <nav aria-label="Explore destinations and guides" className="flex max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-primary-foreground/65">
          <a href="/umrah-packages-from-london" className="transition hover:text-secondary">Umrah from the UK</a>
          <a href="/destinations/antalya-holidays" className="transition hover:text-secondary">Antalya Holidays</a>
          <a href="/destinations/hurghada-holiday-packages" className="transition hover:text-secondary">Hurghada Packages</a>
          <a href="/destinations/istanbul-getaways" className="transition hover:text-secondary">Istanbul Getaways</a>
          <a href="/destinations/dubai-luxury-escapes" className="transition hover:text-secondary">Dubai Luxury Escapes</a>
          <a href="/destinations/marrakech-holiday-packages" className="transition hover:text-secondary">Marrakech Holidays</a>
          <a href="/destinations/agadir-holiday-packages" className="transition hover:text-secondary">Agadir Holidays</a>
          <a href="/destinations/sharm-el-sheikh-holiday-packages" className="transition hover:text-secondary">Sharm El Sheikh</a>
          <a href="/destinations/cairo-holiday-packages" className="transition hover:text-secondary">Cairo Holidays</a>
          <a href="/destinations/tunisia-holiday-packages" className="transition hover:text-secondary">Tunisia Holidays</a>
          <a href="/destinations/montenegro-holiday-packages" className="transition hover:text-secondary">Montenegro Escapes</a>
          <a href="/destinations/bali-holiday-packages" className="transition hover:text-secondary">Bali Holidays</a>
          <a href="/destinations/thailand-holiday-packages" className="transition hover:text-secondary">Thailand Holidays</a>
          <a href="/destinations/canary-islands-holiday-packages" className="transition hover:text-secondary">Canary Islands</a>
          <a href="/blog" className="transition hover:text-secondary">Travel Guides</a>
        </nav>
        <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-primary-foreground/65">
          <a href="/privacy-policy" className="transition hover:text-secondary">Privacy Policy</a>
          <a href="/terms-of-service" className="transition hover:text-secondary">Terms of Service</a>
        </nav>
        <p className="text-xs text-primary-foreground/50">Company No: 17060157</p>
        <p className="text-xs text-primary-foreground/50">
          &copy; 2026 Sky Global Travels &ndash; All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
