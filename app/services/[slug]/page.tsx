import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CircleCheck, Phone } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import ReviewsSlider from "@/components/ReviewsSlider";
import { CtaBand, ServiceArches } from "@/components/sections";
import { ArrowCircle, Photo } from "@/components/ui";
import { getService, services } from "@/lib/services";
import { offers, serviceAreas, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.name} in Detroit, MI`,
    description: `${s.name} across ${site.region} by ${site.name}. ${s.short} Free in-home estimates.`,
  };
}

const process = [
  { title: "Free In-Home Estimate", text: "We visit your property, listen to your goals, inspect the surfaces, and walk you through colors, finishes, and options." },
  { title: "Color Selection & Written Quote", text: "We bring samples, help you lock in colors, and give you a clear written quote with no hidden fees." },
  { title: "Prep & Professional Painting", text: "We protect your space, handle every bit of prep, and apply premium paint with clean, consistent results." },
  { title: "Final Walkthrough & Cleanup", text: "We walk the job with you, handle any touch ups, and leave your property as clean as we found it." },
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const topAreas = serviceAreas.slice(0, 10);

  return (
    <>
      <div className="bg-cloud">
        <div className="container-x flex items-center gap-2 py-3 text-sm text-ink/70">
          <Link href="/" className="hover:text-crimson">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/services" className="hover:text-crimson">Services</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-ink">{s.name}</span>
        </div>
      </div>

      <div className="container-x grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:py-16">
        {/* MAIN CONTENT */}
        <article className="min-w-0">
          <h1 className="h-display text-4xl text-maroon sm:text-6xl">
            {s.name} in Detroit, MI
          </h1>
          <Photo src={s.image} className="mt-10 aspect-[5/2] w-full" label={s.name} />

          <h2 className="h-display mt-12 text-3xl text-ink sm:text-4xl">Professional {s.name} Throughout {site.region}</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/85">
            {s.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>
              We serve homeowners and businesses in <strong>{topAreas.join(", ")}</strong>, along with surrounding{" "}
              {site.region} communities.
            </p>
            <p>
              <strong>Ready to get started?</strong> Schedule a free in-home estimate with {site.name} and see exactly what
              your project will look like before we begin.
            </p>
          </div>

          <h2 className="h-display mt-14 text-3xl text-ink sm:text-4xl">Why Choose {site.shortName} for {s.name}?</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/85">
            As one of {site.region}&apos;s most trusted painting companies, {site.name} is known for clean job sites, honest
            pricing, and finishes that last. Experience the {site.shortName} difference:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Licensed, insured, and background-checked painters",
              "Free in-home estimates and color consultations",
              "Premium paints from Sherwin-Williams and Benjamin Moore",
              "Written workmanship warranty on every project",
              "Clear communication from first call to final walkthrough",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-lg text-ink/90">
                <CircleCheck className="mt-0.5 h-6 w-6 shrink-0 text-red" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-start gap-4 border-l-8 border-red bg-cream p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-extrabold uppercase text-maroon">Call Today!</p>
              <a href={site.phoneHref} className="font-display text-3xl font-extrabold text-ink hover:text-crimson">
                {site.phone}
              </a>
            </div>
            <Link href="/contact#quote" className="btn-red">
              Contact Us Today <ArrowCircle />
            </Link>
          </div>

          <h2 className="h-display mt-14 text-3xl text-ink sm:text-4xl">{s.signsTitle}</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/85">
            Paint does more than add color. It protects your surfaces and shapes how your space feels every day. Professional{" "}
            {s.name.toLowerCase()} is the right fix for common problems, including:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {s.signs.map((t) => (
              <li key={t} className="flex items-center gap-3 bg-cloud px-4 py-3 font-semibold text-ink">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red" /> {t}
              </li>
            ))}
          </ul>

          <h2 className="h-display mt-14 text-3xl text-ink sm:text-4xl">{s.featuresTitle}</h2>
          <ul className="mt-6 space-y-4">
            {s.features.map((f) => (
              <li key={f.title} className="text-lg leading-relaxed text-ink/85">
                <strong className="text-ink">{f.title}:</strong> {f.text}
              </li>
            ))}
          </ul>

          <h2 className="h-display mt-14 text-3xl text-ink sm:text-4xl">Our {s.name} Process</h2>
          <p className="mt-6 text-lg text-ink/85">Our process is hassle-free from the first call through project completion.</p>
          <ol className="mt-8 space-y-6">
            {process.map((p, n) => (
              <li key={p.title} className="flex gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-maroon font-display text-2xl font-extrabold text-white">
                  {n + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold uppercase text-ink">{p.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-ink/85">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="h-display mt-14 text-3xl text-ink sm:text-4xl">{s.optionsTitle}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {s.options.map((o) => (
              <li key={o} className="border-2 border-crimson/20 px-4 py-3 font-semibold text-crimson">
                {o}
              </li>
            ))}
          </ul>

          <h2 className="h-display mt-14 text-3xl text-ink sm:text-4xl">Warranties &amp; Financing Options</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/85">
            Every {site.name} project is backed by a written workmanship warranty, so you can invest in your property with
            confidence. We also offer{" "}
            <Link href="/financing" className="font-semibold text-crimson underline">
              financing options
            </Link>{" "}
            that break your project into manageable monthly payments.
          </p>

          <h2 className="h-display mt-14 text-3xl text-ink sm:text-4xl">{s.name} Across {site.region}</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/85">
            As your local painting experts, {site.name} proudly serves Detroit and the surrounding communities. Because we
            live and work here, we understand Michigan weather, older Detroit homes, and what it takes to make paint last in
            this climate. <Link href="/service-areas" className="font-semibold text-crimson underline">See all service areas</Link>.
          </p>

          <h2 className="h-display mt-14 text-3xl text-ink sm:text-4xl">Get a Free {s.name} Quote</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/85">
            <strong>Invest in your property today.</strong>{" "}
            <Link href="/contact#quote" className="font-bold text-crimson underline">
              Schedule your free in-home estimate
            </Link>{" "}
            with {site.name}.
          </p>

          <h2 className="h-display mt-14 text-3xl text-ink sm:text-4xl">{s.name} FAQs</h2>
          <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
            {s.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-ink">
                  {f.q}
                  <span className="text-2xl text-red transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-lg leading-relaxed text-ink/80">{f.a}</p>
              </details>
            ))}
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="space-y-8">
          <QuoteForm variant="stacked" tone="maroon" />
          <div className="bg-cloud p-6">
            <h3 className="h-display text-center text-2xl text-ink">Deals &amp; Financing</h3>
            <div className="mt-5 space-y-4">
              {offers.slice(0, 2).map((o) => (
                <div key={o.value} className="coupon-border bg-white p-4 text-center">
                  <p className="h-display text-2xl text-maroon">{o.title}</p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-wide text-red">{o.value}</p>
                  <p className="mt-2 text-xs text-ink/60">Expires {o.expires}. Restrictions apply.</p>
                </div>
              ))}
            </div>
            <Link href="/specials" className="btn-outline mt-5 w-full">
              See All Offers
            </Link>
            <a href={site.phoneHref} className="mt-3 flex items-center justify-center gap-2 font-display font-bold text-maroon hover:text-red">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </aside>
      </div>

      <ServiceArches activeSlug={s.slug} />
      <ReviewsSlider />
      <CtaBand />
    </>
  );
}
