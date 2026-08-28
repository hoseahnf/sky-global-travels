import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumbs, ContentPage, jsonLd, pageOffer, siteUrl } from "@/lib/seo"

const destinations = {
  "istanbul-getaways": {
    name: "Istanbul Getaways",
    eyebrow: "Turkey city breaks",
    title: "Istanbul getaways filled with history and culture",
    description: "Discover Istanbul city breaks from the UK with historic landmarks, Bosphorus views and flexible travel packages.",
    intro: "Experience Istanbul, where Europe and Asia meet across the Bosphorus. Sky Global Travels can arrange practical city-break packages with flights, central hotels and thoughtful support for first-time visitors and returning travellers.",
    details: ["Explore Hagia Sophia, the Blue Mosque and the Grand Bazaar", "Enjoy Bosphorus cruises, Turkish cuisine and neighbourhood walks", "Choose flexible city-break dates and hotel options from the UK"],
    price: "From £299",
  },
  "dubai-luxury-escapes": {
    name: "Dubai Luxury Escapes",
    eyebrow: "United Arab Emirates holidays",
    title: "Dubai luxury escapes with sunshine and adventure",
    description: "Plan Dubai luxury escapes from the UK with premium hotels, world-class shopping and memorable desert adventures.",
    intro: "Make Dubai your next warm-weather escape with a tailored package from Sky Global Travels. From beachfront stays and skyline views to desert safaris and shopping weekends, we help you plan the right balance of comfort and discovery.",
    details: ["Stay near Dubai beaches, Downtown Dubai or Palm Jumeirah", "Combine world-class shopping with desert and food experiences", "Arrange flights and hotels around your preferred dates and budget"],
    price: "From £599",
  },
  "marrakech-holiday-packages": {
    name: "Marrakech Holiday Packages",
    eyebrow: "Morocco holidays",
    title: "Marrakech holidays among souks and luxury riads",
    description: "Explore Marrakech holiday packages from the UK with vibrant souks, luxury riads and memorable Moroccan experiences.",
    intro: "Discover the colour and character of Marrakech with a package designed around your pace. Wander the medina, relax in a peaceful riad and explore Morocco with support from a UK travel specialist.",
    details: ["Browse the medina, souks and Jemaa el-Fnaa", "Relax in a traditional riad or modern resort", "Add Atlas Mountains, food and cultural experiences"],
    price: "From £399",
  },
  "agadir-holiday-packages": {
    name: "Agadir Holiday Packages",
    eyebrow: "Morocco beach holidays",
    title: "Agadir beach holidays on Morocco’s Atlantic coast",
    description: "Book Agadir holiday packages from the UK for golden beaches, seaside resorts and relaxed Atlantic sunshine.",
    intro: "Agadir is made for an easy beach break, with a long promenade, welcoming resorts and a relaxed Atlantic atmosphere. Let Sky Global Travels arrange a comfortable package for couples, families and groups.",
    details: ["Unwind on Agadir’s broad golden beach", "Choose resort hotels close to the seafront", "Explore local markets, coastal villages and Moroccan cuisine"],
    price: "From £349",
  },
  "sharm-el-sheikh-holiday-packages": {
    name: "Sharm El Sheikh Holiday Packages",
    eyebrow: "Egypt beach holidays",
    title: "Sharm El Sheikh holidays with Red Sea sunshine",
    description: "Find Sharm El Sheikh holiday packages from the UK with beach resorts, coral reefs and winter sun.",
    intro: "Escape to the Red Sea for clear waters, warm sunshine and resort comfort. Sky Global Travels can help you compare Sharm El Sheikh stays and build a straightforward package around your travel dates.",
    details: ["Relax at beach resorts with pools and family facilities", "Discover coral reefs, snorkelling and diving", "Plan winter-sun breaks with flights and hotel support"],
    price: "From £359",
  },
  "cairo-holiday-packages": {
    name: "Cairo Holiday Packages",
    eyebrow: "Egypt cultural holidays",
    title: "Cairo holidays connecting pyramids and the Nile",
    description: "Plan Cairo holiday packages from the UK for the Giza pyramids, Nile views and unforgettable Egyptian history.",
    intro: "Cairo brings ancient wonders, museums and Nile-side evenings together in one remarkable city. Arrange your next Egyptian cultural break with practical guidance from Sky Global Travels.",
    details: ["Visit the Giza pyramids and Sphinx", "Discover Egyptian history through museums and local guides", "Combine Cairo with a Nile or Red Sea extension"],
    price: "From £289",
  },
  "tunisia-holiday-packages": { name: "Tunisia Holiday Packages", eyebrow: "Tunisia holidays", title: "Tunisia holidays for beaches and culture", description: "Explore Tunisia holiday packages from the UK with Mediterranean beaches, historic towns and welcoming resorts.", intro: "Enjoy a balanced Tunisia escape with time for the beach, local food and historic places. We can help arrange the right resort and flight combination for your trip.", details: ["Relax on Mediterranean beaches", "Discover ancient sites and atmospheric medinas", "Choose family-friendly and couples’ resort options"], price: "From £320" },
  "montenegro-holiday-packages": { name: "Montenegro Holiday Packages", eyebrow: "Adriatic holidays", title: "Montenegro escapes along the Adriatic coast", description: "Discover Montenegro holiday packages from the UK with dramatic mountains, coastal towns and clear Adriatic waters.", intro: "Montenegro packs mountain scenery, historic towns and beautiful coastline into one compact escape. Let Sky Global Travels help you plan an easy Adriatic holiday.", details: ["Explore the Bay of Kotor and historic coastal towns", "Combine mountain views with Adriatic beach time", "Find flexible packages for couples and small groups"], price: "From £360" },
  "bali-holiday-packages": { name: "Bali Holiday Packages", eyebrow: "Indonesia holidays", title: "Bali holidays for tropical beaches and island culture", description: "Plan Bali holiday packages from the UK with tropical beaches, cultural experiences and unforgettable island scenery.", intro: "From temple visits and rice terraces to beach sunsets, Bali offers a rich mix of rest and discovery. Build a considered island package with Sky Global Travels.", details: ["Balance beach time with temples and rice terraces", "Choose stays in Seminyak, Ubud or Nusa Dua", "Add transfers and experiences to your itinerary"], price: "From £450" },
  "thailand-holiday-packages": { name: "Thailand Holiday Packages", eyebrow: "Thailand holidays", title: "Thailand holidays among islands and culture", description: "Discover Thailand holiday packages from the UK with beautiful islands, cultural escapes and warm hospitality.", intro: "Plan a Thailand trip that gives you time to slow down, explore and enjoy the country’s diverse landscapes. We can help shape an itinerary around your priorities.", details: ["Relax on beautiful island beaches", "Explore temples, markets and local food", "Combine city energy with a peaceful coastal stay"], price: "From £430" },
  "canary-islands-holiday-packages": { name: "Canary Islands Holiday Packages", eyebrow: "Winter sun holidays", title: "Canary Islands holidays for easy winter sun", description: "Book Canary Islands holiday packages from the UK for sandy beaches, warm weather and relaxed resort escapes.", intro: "The Canary Islands make an easy escape from the UK, with dependable sunshine, varied beaches and welcoming resorts. Find a package that suits your preferred island and style.", details: ["Choose Tenerife, Gran Canaria, Lanzarote or Fuerteventura", "Enjoy beaches, promenades and resort amenities", "Plan a simple winter-sun break for couples or families"], price: "From £480" },
} as const

export function generateStaticParams() { return Object.keys(destinations).map((slug) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const destination = destinations[slug as keyof typeof destinations]
  return destination ? { title: `${destination.name} from the UK | Sky Global Travels`, description: destination.description, alternates: { canonical: `${siteUrl}/destinations/${slug}` } } : {}
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const destination = destinations[slug as keyof typeof destinations]
  if (!destination) notFound()
  const url = `${siteUrl}/destinations/${slug}`
  return <>
    <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Destinations", url: "/#deals" }, { name: destination.name, url }]} />
    <ContentPage
      eyebrow={destination.eyebrow}
      title={destination.title}
      intro={destination.intro}
      sections={destination.details.map((detail) => ({ heading: detail, body: destination.description }))}
      cta="Ask Ryan Smith about this package"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageOffer(destination.name, destination.description, url, destination.price.replace(/[^0-9.]/g, ""))) }} />
  </>
}
