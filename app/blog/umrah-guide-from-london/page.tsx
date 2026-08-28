import type { Metadata } from "next"
import { GuideLayout, jsonLd, siteUrl } from "@/lib/seo"

export const metadata: Metadata = { title: "Step-by-Step Umrah Guide from London", description: "A practical step-by-step guide to planning Umrah from London, from choosing dates to arranging flights and hotels." }

export default function Page() {
  return <>
    <GuideLayout title="A step-by-step Umrah guide from London" description="A simple planning framework for pilgrims arranging their journey from the UK." date="28 August 2026">
      <h2>1. Choose your dates and group</h2><p>Start with the dates, number of travellers and room requirements. Families, couples and larger groups may need different accommodation arrangements.</p>
      <h2>2. Compare flights and hotels</h2><p>Ask about London departure options, hotel locations in Makkah and Madinah, transfers and what the package includes. Hotel distance and availability can affect both price and convenience.</p>
      <h2>3. Confirm documentation and requirements</h2><p>Check current official guidance and make sure each traveller has the required documentation before booking or travelling. Requirements can change, so use official sources for the latest information.</p>
      <h2>4. Prepare for departure</h2><p>Keep your itinerary, confirmations and contact details together. Our <a href="/umrah-packages-from-london">Umrah packages from London</a> page explains how our travel team can help you plan.</p>
    </GuideLayout>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd({ "@context": "https://schema.org", "@type": "Article", headline: "A step-by-step Umrah guide from London", url: `${siteUrl}/blog/umrah-guide-from-london`, datePublished: "2026-08-28", author: { "@type": "Organization", name: "Sky Global Travels" } })} />
  </>
}
