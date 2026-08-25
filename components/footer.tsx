

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-[oklch(0.15_0.04_250)] py-8 text-center">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6">
        <div className="flex items-center gap-2 text-primary-foreground">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-primary-foreground/95">
            <img
              src="/sky-global-travels-logo.png"
              alt="Sky Global Travels logo"
              className="h-9 w-9 object-contain mix-blend-multiply"
            />
          </span>
          <span className="text-sm font-semibold">Sky Global Travels</span>
        </div>
        <p className="text-sm font-bold text-secondary">
          Founder &amp; CEO: Hosea Hanif | SKY GLOBAL TRAVELS LTD
        </p>
        <nav aria-label="Legal" className="flex items-center gap-4 text-xs font-semibold text-primary-foreground/65">
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
