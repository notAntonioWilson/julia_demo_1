"use client";

import Link from "next/link";
import { useState } from "react";
import { CalendarDays, ChevronDown, ChevronRight, CircleDollarSign, Menu, Phone, Star, Tag, X } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { navGroups } from "@/lib/services";

type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };

const nav: NavItem[] = [
  ...navGroups.map((g) => ({
    label: g.label,
    href: g.items[0] ? `/services/${g.items[0].slug}` : "/services",
    children: g.items.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  })),
  { label: "Commercial", href: "/services/commercial-painting" },
  { label: "All Services", href: "/services" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Promotions", href: "/specials" },
      { label: "Financing", href: "/financing" },
      { label: "Reviews", href: "/reviews" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function TopBar() {
  return (
    <div className="bg-ink text-white">
      <div className="container-x flex items-center justify-between gap-4 py-2.5 text-sm sm:text-base">
        <Link href="/reviews" className="flex items-center gap-2 hover:text-pink">
          <span className="flex text-pink">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </span>
          <span className="hidden sm:inline">Read Our Reviews</span>
          <ChevronRight className="hidden h-4 w-4 sm:block" />
        </Link>
        <Link href="/specials" className="flex items-center gap-2 hover:text-pink">
          <Tag className="h-4 w-4 text-pink" />
          <span>Coupons &amp; Offers</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
        <Link href="/contact" className="hidden items-center gap-2 hover:text-pink md:flex">
          <CalendarDays className="h-4 w-4 text-pink" />
          <span>Schedule Service</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_6px_20px_-12px_rgba(12,8,18,0.35)]">
      <div className="container-x flex items-center justify-between gap-4 py-3 lg:py-4">
        <Logo />

        <div className="hidden items-center gap-6 lg:flex">
          <a href={site.phoneHref} className="flex items-center gap-3 font-display text-xl font-bold uppercase text-ink hover:text-purple xl:text-2xl">
            <Phone className="h-7 w-7 fill-pink text-pink" />
            <span>
              Call Today <span className="ml-1 font-extrabold">{site.phone}</span>
            </span>
          </a>
          <Link href="/contact#quote" className="btn-pink px-8 py-4 text-lg">
            <CircleDollarSign className="h-6 w-6" /> Get A Quote
            <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white">
              <ChevronRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a href={site.phoneHref} aria-label="Call us" className="flex h-11 w-11 items-center justify-center bg-pink text-white">
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center bg-plum text-white"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:block">
        <ul className="container-x flex items-center justify-end gap-7 pb-4 font-display text-[0.95rem] font-semibold uppercase tracking-wide xl:gap-9 xl:text-base">
          {nav.map((item) => (
            <li key={item.label} className="group relative">
              <Link href={item.href ?? "#"} className="flex items-center gap-1.5 py-2 text-ink transition-colors hover:text-purple">
                {item.label}
                {item.children && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
              </Link>
              {item.children && (
                <div className="invisible absolute right-0 top-full z-50 min-w-60 translate-y-2 opacity-0 transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="border-t-4 border-pink bg-cloud py-2 shadow-xl">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block px-5 py-3 text-ink hover:bg-purple-light hover:text-purple">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav */}
      {open && (
        <nav className="animate-fade max-h-[calc(100vh-80px)] overflow-y-auto border-t border-ink/10 bg-white lg:hidden">
          <ul className="container-x py-3 font-display font-semibold uppercase">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-ink/10">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                      className="flex w-full items-center justify-between py-4 text-left"
                    >
                      {item.label}
                      <ChevronDown className={`h-5 w-5 transition-transform ${expanded === item.label ? "rotate-180 text-pink" : ""}`} />
                    </button>
                    {expanded === item.label && (
                      <ul className="pb-3 pl-4">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} onClick={() => setOpen(false)} className="block py-2.5 text-sm text-ink/80 hover:text-purple">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href ?? "#"} onClick={() => setOpen(false)} className="block py-4">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="container-x grid gap-3 pb-6">
            <a href={site.phoneHref} className="btn-outline w-full">
              <Phone className="h-5 w-5" /> {site.phone}
            </a>
            <Link href="/contact#quote" onClick={() => setOpen(false)} className="btn-pink w-full">
              Get A Free Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
