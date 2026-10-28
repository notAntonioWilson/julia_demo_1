import type { Metadata } from "next";
import { CtaBand, PageHero, ReviewBadges } from "@/components/sections";
import { Stars } from "@/components/ui";
import { images } from "@/lib/images";
import { reviews, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Read what ${site.region} homeowners say about ${site.name}.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Our Reviews" title={`Customer Reviews From ${site.region} Homeowners`} image={images.family} />
      <ReviewBadges />
      <section className="bg-cloud py-16 sm:py-24">
        <div className="container-x columns-1 gap-8 md:columns-2 lg:columns-3">
          {[...reviews, ...reviews.slice(0, 1)].map((r, n) => (
            <figure key={`${r.name}-${n}`} className="mb-8 break-inside-avoid border-t-4 border-red bg-white p-8 shadow-md">
              <span className="font-display text-6xl font-extrabold leading-none text-maroon">&ldquo;</span>
              <Stars className="h-5 w-5" />
              <blockquote className="mt-4 text-lg leading-relaxed text-ink/85">{r.text}</blockquote>
              <figcaption className="mt-6 font-display font-extrabold text-ink">
                - {r.name} <span className="font-semibold text-ink/60">{r.city}, MI</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
