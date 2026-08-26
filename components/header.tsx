"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Plane, X } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Plane aria-hidden="true" className="size-6 text-secondary" />
          <span className="text-lg font-bold tracking-tight">Sky Global Travels</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <Link href="#deals" className="text-sm font-medium text-primary-foreground/80 transition hover:text-secondary">
            Deals
          </Link>
          <Link href="#about" className="text-sm font-medium text-primary-foreground/80 transition hover:text-secondary">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium text-primary-foreground/80 transition hover:text-secondary">
            Contact
          </Link>
          <a
            href="https://wa.me/447476605409?text=Hello,%20I%20would%20like%20to%20make%20a%20booking%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-primary-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-primary-foreground/10 px-6 pb-6 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4 pt-4">
            <Link href="#deals" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-primary-foreground/80 transition hover:text-secondary">
              Deals
            </Link>
            <Link href="#about" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-primary-foreground/80 transition hover:text-secondary">
              About
            </Link>
            <Link href="#contact" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-primary-foreground/80 transition hover:text-secondary">
              Contact
            </Link>
            <a
              href="https://wa.me/447476605409?text=Hello,%20I%20would%20like%20to%20make%20a%20booking%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-secondary px-5 py-2 text-center text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
            >
              Book Now
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
