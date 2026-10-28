import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, FinancingBanner, PageHero } from "@/components/sections";
import { ArrowCircle, Photo, ServiceIcon } from "@/components/ui";
import { images } from "@/lib/images";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Painting Services",
  description: `Interior, exterior, cabinet, commercial, drywall, and deck staining services across ${site.region}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What We Do" title={`Painting Services Across ${site.region}`} image={images.livingRoom2} />
      <section className="bg-cloud py-16 sm:py-24">
        <div className="container-x grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col bg-white shadow-lg transition-transform hover:-translate-y-1">
              <Photo src={s.image} className="relative aspect-[16/10]" label={s.name}>
                <span className="absolute -bottom-8 left-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-maroon text-gold">
                  <ServiceIcon icon={s.icon} className="h-8 w-8" />
                </span>
              </Photo>
              <div className="flex flex-1 flex-col px-6 pb-8 pt-12">
                <h2 className="h-display text-2xl text-ink group-hover:text-crimson">{s.name}</h2>
                <p className="mt-3 flex-1 text-ink/75">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display font-extrabold uppercase text-red">
                  Learn More <ArrowCircle />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <FinancingBanner />
      <CtaBand />
    </>
  );
}
