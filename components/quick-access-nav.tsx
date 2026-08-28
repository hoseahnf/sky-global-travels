import { BookOpen, ChevronRight, Compass, Moon, Palmtree } from "lucide-react"

const links = [
  { href: "/destinations/antalya-holidays", label: "Antalya", icon: Palmtree },
  { href: "/destinations/hurghada-holiday-packages", label: "Hurghada", icon: Compass },
  { href: "/umrah-packages-from-london", label: "Umrah from London", icon: Moon },
  { href: "/blog", label: "Travel guides", icon: BookOpen },
]

export function QuickAccessNav() {
  return (
    <nav
      aria-label="Popular travel pages"
      className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4"
    >
      <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-border/80 bg-card/95 p-1.5 shadow-lg shadow-primary/10 backdrop-blur-md supports-[backdrop-filter]:bg-card/85">
        <span className="hidden shrink-0 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground lg:inline">
          Explore
        </span>
        {links.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            className="group flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Icon aria-hidden="true" className="size-3.5 text-primary transition-colors group-hover:text-secondary-foreground" />
            <span>{label}</span>
            <ChevronRight aria-hidden="true" className="hidden size-3 opacity-50 sm:block" />
          </a>
        ))}
      </div>
    </nav>
  )
}
