import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.skyglobaltravels.com'),
  title: {
    default: 'Sky Global Travels | UK Flights, Holidays & Umrah Packages',
    template: '%s | Sky Global Travels',
  },
  description: 'Book flights, holiday packages and Umrah travel from the UK with Sky Global Travels. Explore Antalya, Hurghada and carefully planned journeys worldwide.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Sky Global Travels',
    title: 'Sky Global Travels | UK Flights, Holidays & Umrah Packages',
    description: 'Explore holiday packages, flights and Umrah travel from the UK.',
    url: 'https://www.skyglobaltravels.com',
  },
  twitter: { card: 'summary_large_image', title: 'Sky Global Travels', description: 'UK flights, holiday packages and Umrah travel.' },
  icons: { icon: '/icon.png' },
}

export const viewport: Viewport = {
  themeColor: '#0a1f44',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
