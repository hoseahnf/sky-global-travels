import { MapPin } from "lucide-react"

interface DealCardProps {
  image: string
  title: string
  description: string
  price: string
  whatsappText: string
  badge?: string
  discount?: string
  originalPrice?: string
  ctaText?: string
}

export function DealCard({
  image,
  title,
  description,
  price,
  whatsappText,
  badge,
  discount,
  originalPrice,
  ctaText = "Book Now",
}: DealCardProps) {
  return (
    <article className="reveal-on-scroll group overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-56 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
          <MapPin className="h-3 w-3" />
          {title}
        </div>
        {discount && (
          <span className="absolute left-3 top-3 z-10 inline-flex min-w-20 items-center justify-center rounded-full border border-[#D4AF37] bg-[#1E293B] px-3 py-1.5 text-center text-xs font-extrabold tracking-wide text-white shadow-md">
            {discount.includes(" OFF") ? (
              <>
                <span>{discount.replace(" OFF", "")}</span>{" "}
                <span className="text-[#F5C542]">OFF</span>
              </>
            ) : (
              discount
            )}
          </span>
        )}
        {badge && (
          <span className="animate-badge-pulse absolute right-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground shadow-sm">
            {badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <h4 className="text-base font-bold text-card-foreground">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-3 flex items-baseline gap-2">
          <p className="text-lg font-bold text-destructive">{price}</p>
          {originalPrice && <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>}
        </div>
        <a
          href={`https://wa.me/447476605409?text=${encodeURIComponent(whatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          {ctaText}
        </a>
      </div>
    </article>
  )
}
