import Link from "next/link";
import { CircleDollarSign, Phone } from "lucide-react";
import { images } from "@/lib/images";
import { reviewPlatforms, site, whatToExpect } from "@/lib/site";
import { services } from "@/lib/services";
import { ArrowCircle, FeatureIcon, Photo, ServiceIcon, Stars } from "./ui";

export function Hero() {
  return (
    <Photo src={images.hero} className="relative" label="Painter rolling a fresh coat of paint on a wall">
      <div className="absolute inset-0 bg-gradient-to-b from-plum/85 via-plum/75 to-ink/80" />
      <div className="container-x relative flex min-h-[560px] flex-col items-center justify-center pb-40 pt-20 text-center text-white sm:min-h-[640px] lg:pb-48">
        <p className="eyebrow text-pink-light sm:text-2xl">{site.name}</p>
        <h1 className="h-display mt-5 max-w-5xl text-4xl sm:text-6xl lg:text-7xl">
          Interior, Exterior &amp; Cabinet Painting for{" "}
          <span className="bg-gradient-to-r from-pink to-[#f9a8d4] bg-clip-text text-transparent">Metro Detroit</span>
        </h1>
        <p className="eyebrow mt-6 text-sm text-white/90 sm:text-xl">Your Trusted Painters for Your Home&apos;s Transformation</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="#quote" className="btn-pink px-8 py-4">
            Get A Free Quote <ArrowCircle />
          </Link>
          <a href={site.phoneHref} className="btn-outline-light px-8 py-4">
            <Phone className="h-5 w-5" /> {site.phone}
          </a>
        </div>
      </div>
    </Photo>
  );
}

export function ServiceArches({ activeSlug }: { activeSlug?: string }) {
  return (
    <section className="bg-gradient-to-b from-white to-cloud py-16 sm:py-20">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((s) => {
            const active = s.slug === activeSlug;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-t-full border-[6px] border-pink p-2 pb-0 shadow-lg transition-transform hover:-translate-y-1"
              >
                <div
                  className={`flex aspect-[3/4] flex-col items-center justify-center gap-4 rounded-t-full px-3 text-center transition-colors ${
                    active ? "bg-plum text-white" : "bg-white text-ink group-hover:bg-plum group-hover:text-white"
                  }`}
                >
                  <span className={active ? "text-pink" : "text-mauve group-hover:text-pink"}>
                    <ServiceIcon icon={s.icon} className="h-12 w-12 sm:h-14 sm:w-14" />
                  </span>
                  <span className="font-display text-sm font-extrabold uppercase leading-tight sm:text-base">{s.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FinancingBanner() {
  return (
    <section className="bg-plum py-14 text-white">
      <div className="container-x flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-white/90 text-plum sm:h-36 sm:w-36">
          <CircleDollarSign className="h-20 w-20 sm:h-24 sm:w-24" strokeWidth={1.6} />
        </div>
        <div className="flex-1 lg:text-center">
          <p className="eyebrow text-white sm:text-2xl">We Offer Financing</p>
          <h2 className="h-display mt-3 text-3xl sm:text-5xl">Find Out Your Options</h2>
        </div>
        <Link href="/financing" className="btn border-2 border-pink bg-white px-8 py-4 text-pink hover:bg-pink hover:text-white">
          Financing Options <ArrowCircle />
        </Link>
      </div>
    </section>
  );
}

export function WhatToExpect() {
  return (
    <section className="map-pattern bg-mauve py-16 sm:py-24">
      <div className="container-x">
        <p className="eyebrow text-plum">What to Expect</p>
        <h2 className="h-display mt-3 max-w-3xl text-3xl text-ink sm:text-5xl">Expert Painting Services in {site.region}</h2>
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <ul className="space-y-6">
            {whatToExpect.map((w) => (
              <li key={w.label} className="flex items-center gap-5">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-pink text-white shadow-md sm:h-20 sm:w-20">
                  <FeatureIcon icon={w.icon} className="h-8 w-8 sm:h-9 sm:w-9" />
                </span>
                <span className="font-display text-lg font-bold uppercase tracking-[0.15em] text-ink sm:text-2xl">{w.label}</span>
              </li>
            ))}
          </ul>
          <div className="relative">
            <Photo src={images.modernExterior} className="aspect-[4/3] w-full shadow-2xl" label="Freshly painted Detroit home" />
            <div className="absolute -bottom-6 -left-4 bg-plum px-6 py-4 text-white shadow-xl sm:-left-6">
              <p className="font-display text-4xl font-extrabold">{site.yearsInBusiness}+</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-pink-light">Years in Business</p>
            </div>
          </div>
        </div>
        <Link href="/about" className="btn-outline mt-14 px-10 py-4">
          About Us <ArrowCircle />
        </Link>
      </div>
    </section>
  );
}

export function ReviewBadges() {
  return (
    <section className="bg-white py-14">
      <div className="container-x">
        <h2 className="h-display text-center text-3xl text-ink sm:text-4xl">We Come Highly Recommended</h2>
        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {reviewPlatforms.map((p) => (
            <div key={p.name} className="flex flex-col items-center border border-ink/10 bg-cloud px-4 py-6 text-center">
              <p className="font-display text-xl font-extrabold uppercase text-purple">{p.name}</p>
              <p className="mt-2 flex items-center gap-2 font-display text-3xl font-extrabold text-ink">{p.rating}</p>
              <div className="mt-2">
                <Stars className="h-5 w-5" />
              </div>
              <p className="mt-2 text-sm italic text-ink/70">{p.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QualitySection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 grid grid-rows-2">
        <div className="bg-plum" />
        <div className="map-pattern bg-pink" />
      </div>
      <div className="container-x relative py-16 sm:py-24">
        <div className="bg-white px-6 py-12 text-center shadow-2xl sm:px-14 sm:py-16">
          <p className="eyebrow text-ink sm:text-2xl">Quality You Can Count On</p>
          <h2 className="h-display mt-5 text-3xl text-ink sm:text-5xl">
            Interior, Exterior &amp; Cabinet Painting for the {site.region} Area
          </h2>
          <div className="mx-auto mt-8 max-w-5xl space-y-6 text-base leading-relaxed text-ink/85 sm:text-lg">
            <p>
              For over {site.yearsInBusiness} years, {site.name} has helped Detroit-area homeowners and businesses fall in
              love with their spaces again. As a family-owned company, we have always put honesty, clean work, and real
              communication first. From a single accent wall to full exterior repaints, our crew treats every job with the
              same standard: do it right the first time.
            </p>
            <p>
              If your walls are scuffed, your siding is peeling, or your kitchen cabinets are stuck in another decade,
              {` ${site.shortName}`} is the team to call. We offer free in-home estimates and color consultations so you can
              see exactly what your space can become before a single brush hits the wall.
            </p>
            <p>
              Founded by {site.owner} with a passion for color and craftsmanship, we have grown into one of {site.region}&apos;s
              most trusted painting companies. Our painters stay current on the best products and techniques so your finish
              looks better and lasts longer.
            </p>
            <p className="font-bold text-ink">Contact {site.name} to learn more about our services and how we can help you today!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, image }: { eyebrow?: string; title: string; image?: string }) {
  return (
    <Photo src={image ?? images.wall} className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-plum/90 to-ink/75" />
      <div className="container-x relative py-16 text-white sm:py-24">
        {eyebrow && <p className="eyebrow text-pink-light">{eyebrow}</p>}
        <h1 className="h-display mt-3 max-w-4xl text-4xl sm:text-6xl">{title}</h1>
      </div>
    </Photo>
  );
}

export function CtaBand() {
  return (
    <section className="bg-gradient-to-r from-purple to-pink py-14 text-white">
      <div className="container-x flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
        <div>
          <h2 className="h-display text-3xl sm:text-4xl">Ready for a Fresh Coat?</h2>
          <p className="mt-2 text-lg text-white/90">Free in-home estimates across {site.region}. Most quotes delivered within 24 hours.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} className="btn-outline-light px-8 py-4">
            <Phone className="h-5 w-5" /> {site.phone}
          </a>
          <Link href="/contact#quote" className="btn bg-white px-8 py-4 text-plum hover:bg-ink hover:text-white">
            Get A Free Quote <ArrowCircle />
          </Link>
        </div>
      </div>
    </section>
  );
}
