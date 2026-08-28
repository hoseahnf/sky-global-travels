import type { Metadata } from "next"
import { GuideLayout, jsonLd, siteUrl } from "@/lib/seo"

export const metadata: Metadata = { title: "Antalya Travel Guide: Beaches, Resorts & Things to Do", description: "Use this Antalya travel guide to plan beaches, resorts, old-town time and practical holiday details." }

export default function Page() {
  return <>
    <GuideLayout title="The complete Antalya travel guide" description="A practical starting point for planning a Mediterranean break in Antalya." date="28 August 2026">
      <h2>Where should you stay?</h2><p>Antalya offers a choice of lively coastal resorts and city-based stays. Lara and Belek work well for resort holidays, while Kaleiçi is a characterful base for travellers who want restaurants, harbour walks and history nearby.</p>
      <h2>What can you do in Antalya?</h2><p>Plan time for the beach, a walk through the old town and an outing along the coast. Your ideal itinerary depends on your travel style, so leave space for unplanned afternoons by the sea.</p>
      <h2>Planning your holiday</h2><p>Compare departure airports, hotel board basis, room type and transfer arrangements before booking. For a tailored package, explore our <a href="/destinations/antalya-holidays">Antalya holiday packages</a>.</p>
    </GuideLayout>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd({ "@context": "https://schema.org", "@type": "Article", headline: "The complete Antalya travel guide", url: `${siteUrl}/blog/antalya-travel-guide`, datePublished: "2026-08-28", author: { "@type": "Organization", name: "Sky Global Travels" } })} />
  </>
}
