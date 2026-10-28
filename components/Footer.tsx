import Link from "next/link";
import { Phone } from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import Logo from "./Logo";
import { SocialIcons } from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-gold">Phone:</p>
          <a href={site.phoneHref} className="mt-1 flex items-center gap-2 font-display text-xl font-bold hover:text-red">
            <Phone className="h-5 w-5 text-gold" /> {site.phone}
          </a>
          <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-gold">License:</p>
          <p className="mt-1 text-white/80">{site.license}</p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-gold">Email:</p>
          <a href={`mailto:${site.email}`} className="mt-1 block text-white/80 hover:text-red">
            {site.email}
          </a>
        </div>

        <div>
          <h3 className="font-display text-lg font-extrabold uppercase tracking-wide">Services</h3>
          <ul className="mt-5 space-y-3 text-white/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-red">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-extrabold uppercase tracking-wide">Our Company</h3>
          <ul className="mt-5 space-y-3 text-white/80">
            {[
              ["About", "/about"],
              ["Service Areas", "/service-areas"],
              ["Promotions", "/specials"],
              ["Financing", "/financing"],
              ["Reviews", "/reviews"],
              ["FAQs", "/faqs"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-red">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 font-display text-lg font-extrabold uppercase tracking-wide">Follow Us</h3>
          <SocialIcons className="mt-4" />
        </div>

        <div>
          <h3 className="font-display text-lg font-extrabold uppercase tracking-wide">Office Location</h3>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-5 block text-white/80 hover:text-red">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </a>
          <h3 className="mt-8 font-display text-lg font-extrabold uppercase tracking-wide">Office Hours</h3>
          <ul className="mt-5 space-y-3 text-white/80">
            {site.hours.map((h) => (
              <li key={h.days}>
                <span className="block font-semibold text-white">{h.days}:</span>
                {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 pb-24 text-center text-sm text-white/60 lg:flex-row lg:pb-6">
          <p>
            &copy; {year} {site.name} | Proudly serving {site.region}
          </p>
          <p className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link href="/faqs" className="hover:text-red">FAQs</Link>
            <Link href="/contact" className="hover:text-red">Contact</Link>
            <span>Terms &amp; Conditions</span>
            <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 lg:hidden">
      <a href={site.phoneHref} className="flex items-center justify-center gap-2 bg-maroon py-4 font-display font-bold uppercase text-white">
        <Phone className="h-5 w-5" /> Call Now
      </a>
      <Link href="/contact#quote" className="flex items-center justify-center bg-red py-4 font-display font-bold uppercase text-white">
        Free Quote
      </Link>
    </div>
  );
}
