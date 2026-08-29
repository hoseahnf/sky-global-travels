import { ShieldCheck, WalletCards } from "lucide-react"

export function TrustPanel({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${compact ? "text-[11px]" : "text-xs"}`} aria-label="Travel booking reassurance">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 font-semibold text-card-foreground shadow-sm">
        <ShieldCheck aria-hidden="true" className="size-4 text-secondary-foreground" /> UK travel protection guidance
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 font-semibold text-card-foreground shadow-sm">
        <WalletCards aria-hidden="true" className="size-4 text-secondary-foreground" /> Clear pricing & booking support
      </span>
    </div>
  )
}
