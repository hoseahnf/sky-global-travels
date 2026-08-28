export const siteUrl = "https://www.skyglobaltravels.com"

export const reviewSchema = {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  bestRating: "5",
  reviewCount: "352",
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function jsonLd(data: Record<string, unknown>) {
  return { __html: JSON.stringify(data) }
}

export const whatsappUrl = "https://wa.me/447476605409?text=Hello,%20I%20would%20like%20to%20make%20a%20booking%20inquiry."

export const guides = [
  { slug: "antalya-travel-guide", title: "The Complete Antalya Travel Guide", description: "Plan a memorable Antalya holiday with advice on beaches, resorts, old-town walks and practical travel planning." },
  { slug: "best-time-to-visit-turkey", title: "Best Time to Visit Turkey for a Beach Holiday", description: "Compare Turkey's seasons and find the right time for warm weather, swimming and better-value breaks." },
  { slug: "umrah-guide-from-london", title: "A Step-by-Step Umrah Guide from London", description: "A clear planning guide to flights, accommodation, transfers and preparation for your Umrah journey." },
]

export function pageOffer(name: string, description: string, url: string, price: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name,
    description,
    url,
    price,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    seller: { "@type": "TravelAgency", name: "Sky Global Travels", url: siteUrl },
  }
}

export function ReviewJsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd({
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      name: "Sky Global Travels",
      url: siteUrl,
      aggregateRating: reviewSchema,
    })} />
  )
}

export function Breadcrumbs({ items }: { items: { name: string; url: string }[] }) {
  return <nav aria-label="Breadcrumb" className="mx-auto flex max-w-7xl gap-2 px-6 pt-8 text-sm text-muted-foreground lg:px-10">
    {items.map((item, index) => <span key={item.url}>{index > 0 ? " / " : ""}<a className="hover:text-primary" href={item.url}>{item.name}</a></span>)}
  </nav>
}

export function ContentPage({ eyebrow, title, intro, sections, cta }: { eyebrow: string; title: string; intro: string; sections: { heading: string; body: string }[]; cta: string }) {
  return <main className="min-h-screen bg-background">
    <div className="bg-primary text-primary-foreground"><div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p><h1 className="text-balance text-4xl font-bold sm:text-6xl">{title}</h1><p className="mx-auto mt-6 max-w-2xl text-pretty leading-7 text-primary-foreground/75">{intro}</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-secondary px-6 py-3 font-semibold text-secondary-foreground">{cta}</a></div></div>
    <article className="mx-auto max-w-4xl px-6 py-14 lg:px-10"><div className="flex flex-col gap-10">{sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-bold text-primary sm:text-3xl">{section.heading}</h2><p className="mt-4 leading-7 text-muted-foreground">{section.body}</p></section>)}</div></article>
  </main>
}

export function GuideLayout({ title, description, date, children }: { title: string; description: string; date: string; children: React.ReactNode }) {
  return <main className="min-h-screen bg-background"><div className="bg-primary text-primary-foreground"><div className="mx-auto max-w-4xl px-6 py-16 lg:px-10"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Sky Global Guides</p><h1 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">{title}</h1><p className="mt-5 max-w-2xl leading-7 text-primary-foreground/75">{description}</p><p className="mt-6 text-sm text-primary-foreground/60">Published {date}</p></div></div><article className="prose prose-slate mx-auto max-w-3xl px-6 py-14 lg:px-10">{children}</article></main>
}

export function SiteJsonLd() { return <ReviewJsonLd /> }
