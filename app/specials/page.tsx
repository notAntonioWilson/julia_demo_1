import type { Metadata } from "next";
import { OfferCard } from "@/components/Offers";
import { CtaBand, FinancingBanner, PageHero } from "@/components/sections";
import { images } from "@/lib/images";
import { offers, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coupons & Offers",
  description: `Current painting specials and coupons from ${site.name}.`,
};

export default function SpecialsPage() {
  return (
    <>
      <PageHero eyebrow="Coupons & Offers" title="Save On Your Service Today" image={images.kitchen2} />
      <section className="bg-cloud py-16 sm:py-24">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {offers.map((o) => (
            <OfferCard key={o.value} offer={o} />
          ))}
        </div>
      </section>
      <FinancingBanner />
      <CtaBand />
    </>
  );
}
