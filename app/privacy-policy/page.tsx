import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-primary px-6 py-16 text-primary-foreground lg:px-10">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-bold text-secondary hover:underline">← Back to Sky Global Travels</Link>
        <p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] text-secondary">Legal &amp; trust</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-primary-foreground/60">Last updated: 25 August 2026</p>
        <div className="mt-10 space-y-8 text-sm leading-7 text-primary-foreground/75">
          <section><h2 className="text-xl font-bold text-primary-foreground">Who we are</h2><p className="mt-3">SKY GLOBAL TRAVELS LTD (Company No: 17060157) is a UK travel agency. We are responsible for protecting personal information collected through our website and holiday inquiries. Contact us at <a className="font-semibold text-secondary hover:underline" href="tel:+447476605409">+44 7476 605409</a> or <a className="font-semibold text-secondary hover:underline" href="mailto:info@skygtravels.co.uk">info@skygtravels.co.uk</a>.</p></section>
          <section><h2 className="text-xl font-bold text-primary-foreground">Information we collect</h2><p className="mt-3">When you submit an inquiry, we may collect your name, email address, telephone number, destination, guest details, travel dates, and notes. We only request information needed to respond to your travel request and provide relevant services.</p></section>
          <section><h2 className="text-xl font-bold text-primary-foreground">How we use and store your data</h2><p className="mt-3">We use inquiry information to contact you, prepare quotations, arrange travel services, and meet our legal obligations. Customer inquiry data is stored securely with access limited to authorised personnel and trusted service providers who help us operate our business. We retain information only for as long as reasonably necessary for these purposes and legal record-keeping.</p></section>
          <section><h2 className="text-xl font-bold text-primary-foreground">Your UK GDPR rights</h2><p className="mt-3">Under UK data protection law, you may ask to access, correct, erase, restrict, or transfer your personal data, or object to certain processing. You can withdraw consent where processing relies on consent. Contact us using the details above; you also have the right to complain to the Information Commissioner&apos;s Office.</p></section>
          <section><h2 className="text-xl font-bold text-primary-foreground">Cookies and updates</h2><p className="mt-3">Our website may use essential technologies to operate correctly. We may update this policy when our services or legal obligations change, and the latest version will always appear on this page.</p></section>
        </div>
      </article>
    </main>
  )
}
