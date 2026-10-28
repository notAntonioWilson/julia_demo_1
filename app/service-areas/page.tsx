import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { CtaBand, PageHero } from "@/components/sections";
import { images } from "@/lib/images";
import { services } from "@/lib/services";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `${site.name} serves Detroit and surrounding communities across Wayne, Oakland, and Macomb counties.`,
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero eyebrow="Where We Work" title={`Proudly Serving ${site.region}`} image={images.houseExterior} />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-ink/80">
            From historic Detroit homes to suburban new builds, {site.name} brings the same standard to every neighborhood
            across Wayne, Oakland, and Macomb counties. Do not see your city? Give us a call, we likely serve it.
          </p>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {serviceAreas.map((a) => (
              <li key={a} className="flex items-center gap-3 border-l-4 border-pink bg-cloud px-4 py-4 font-display font-bold uppercase text-ink">
                <MapPin className="h-5 w-5 shrink-0 text-purple" /> {a}, MI
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-plum py-16 text-white">
        <div className="container-x">
          <h2 className="h-display text-center text-3xl sm:text-4xl">Services Available in Every Area</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="border-2 border-pink px-5 py-3 font-display font-bold uppercase hover:bg-pink">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
