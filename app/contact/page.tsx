import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} for a free painting estimate in ${site.region}.`,
};

export default function ContactPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-x">
        <h1 className="text-center font-display text-3xl font-extrabold tracking-[0.15em] text-ink sm:text-4xl">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink/70">
          Request your free estimate or ask us anything. We usually respond within one business day.
        </p>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div id="quote" className="scroll-mt-44">
            <h2 className="font-display text-2xl font-bold tracking-[0.12em] text-ink sm:text-3xl">Drop us a line!</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-[0.12em] text-ink sm:text-3xl">Better yet, see us in person!</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              We love our customers, so feel free to call or stop by during normal business hours.
            </p>

            <h3 className="mt-12 font-display text-2xl font-bold tracking-[0.12em] text-plum sm:text-3xl">{site.name}</h3>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-5 flex items-start gap-3 text-lg text-ink hover:text-purple">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-pink" />
              {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
            </a>

            <p className="mt-8 text-lg font-semibold text-ink">{site.owner}, Owner</p>
            <a href={`mailto:${site.email}`} className="mt-1 flex items-center gap-3 text-lg text-purple hover:text-pink">
              <Mail className="h-5 w-5 text-pink" /> {site.email}
            </a>

            <p className="mt-8 text-lg font-semibold text-ink">Office</p>
            <a href={site.phoneHref} className="mt-1 flex items-center gap-3 text-lg text-purple hover:text-pink">
              <Phone className="h-5 w-5 text-pink" /> {site.phone}
            </a>

            <h3 className="mt-12 font-display text-2xl font-bold tracking-[0.12em] text-ink sm:text-3xl">Hours</h3>
            <ul className="mt-5 space-y-2 text-lg">
              {site.hours.map((h) => (
                <li key={h.days} className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-pink" />
                  <span className="w-44 text-ink">{h.days}</span>
                  <span className="text-purple">{h.time}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 aspect-video w-full overflow-hidden border border-ink/10">
              <iframe
                title="Map of Detroit, MI"
                src="https://maps.google.com/maps?q=Detroit%2C%20MI&z=11&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
