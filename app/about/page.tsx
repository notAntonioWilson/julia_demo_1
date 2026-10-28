import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Paintbrush, ShieldCheck, Sparkles } from "lucide-react";
import ReviewsSlider from "@/components/ReviewsSlider";
import { CtaBand, PageHero, QualitySection, WhatToExpect } from "@/components/sections";
import { ArrowCircle, Photo } from "@/components/ui";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet ${site.name}, a family-owned painting company serving ${site.region}.`,
};

const stats = [
  { value: `${site.yearsInBusiness}+`, label: "Years in Business" },
  { value: "2,400+", label: "Projects Completed" },
  { value: site.rating.value, label: "Average Google Rating" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

const values = [
  { icon: Heart, title: "We Treat It Like Our Home", text: "Every floor covered, every room cleaned, every detail respected." },
  { icon: Paintbrush, title: "Craftsmanship First", text: "Proper prep and premium paint, because shortcuts always show." },
  { icon: ShieldCheck, title: "Honest & Insured", text: "Clear written quotes, no surprise fees, full insurance on every job." },
  { icon: Sparkles, title: "Color Confidence", text: "Free color guidance so you love the result before we start." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title={`Meet ${site.name}`} image={images.painter} />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-crimson">Our Story</p>
            <h2 className="h-display mt-3 text-3xl text-ink sm:text-5xl">Family Owned. Detroit Proud.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/85">
              <p>
                {site.name} started with {site.owner}, a ladder, and a simple idea: painting contractors should show up on
                time, communicate clearly, and leave every home better than they found it.
              </p>
              <p>
                {site.yearsInBusiness} years later, that idea has grown into a full crew of trained painters serving homeowners
                and businesses across {site.region}. We still answer our own phones, we still walk every finished job, and
                we still treat every home like it is our own.
              </p>
            </div>
            <Link href="/contact#quote" className="btn-red mt-8 px-8 py-4">
              Get A Free Quote <ArrowCircle />
            </Link>
          </div>
          <Photo src={images.livingRoom} className="aspect-[4/3] w-full shadow-2xl" label="Freshly painted living room" />
        </div>
      </section>

      <section className="bg-maroon py-14 text-white">
        <div className="container-x grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-extrabold text-gold sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cloud py-16 sm:py-24">
        <div className="container-x">
          <p className="eyebrow text-center text-crimson">Our Values</p>
          <h2 className="h-display mt-3 text-center text-3xl text-ink sm:text-5xl">What Makes Us Different</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="border-t-4 border-red bg-white p-8 shadow-md">
                <v.icon className="h-10 w-10 text-crimson" />
                <h3 className="mt-5 font-display text-xl font-extrabold uppercase text-ink">{v.title}</h3>
                <p className="mt-3 text-ink/75">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QualitySection />
      <WhatToExpect />
      <ReviewsSlider />
      <CtaBand />
    </>
  );
}
