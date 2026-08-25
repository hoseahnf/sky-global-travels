import { Shield, Globe, Headphones } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Destinations",
    description: "We cover 50+ destinations across the Middle East, Africa, Asia, and Europe.",
  },
  {
    icon: Shield,
    title: "Trusted & Registered",
    description: "UK registered travel company (Company No: 1706157) based in London.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is available round the clock for all your travel needs.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-bold sm:text-4xl">About Sky Global Travels</h3>
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/70">
            Sky Global Travels is a UK registered travel company (Company No: 1706157) based at 5 Brayford Square,
            London, E1 0SG. We specialise in affordable flights, holiday packages and Umrah services.
          </p>
          <p className="mt-4 text-sm font-bold tracking-wide text-secondary">
            Founded &amp; Led by Hosea Hanif — Director &amp; CEO
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center backdrop-blur-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/20">
                <feature.icon className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="mt-5 text-lg font-bold">{feature.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
