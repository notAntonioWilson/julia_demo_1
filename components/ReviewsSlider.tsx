"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { images } from "@/lib/images";
import { reviews, site } from "@/lib/site";
import { ArrowCircle, Photo, Stars } from "./ui";

export default function ReviewsSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % reviews.length), 8000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Photo src={images.family} className="aspect-square w-full p-6 sm:p-8" label="Happy family at home">
          <div className="h-full w-full border-[10px] border-white/95" />
        </Photo>
        <div>
          <p className="eyebrow text-crimson sm:text-2xl">Our Reviews</p>
          <h2 className="h-display mt-4 text-3xl text-ink sm:text-5xl">Customer Reviews From {site.region} Homeowners</h2>
          <div className="mt-8 flex items-center gap-4">
            <span className="font-display text-7xl font-extrabold leading-none text-maroon">&ldquo;</span>
            <Stars className="h-7 w-7" />
          </div>
          <div key={i} className="animate-fade min-h-[200px]">
            <p className="text-lg leading-relaxed text-ink/90 sm:text-xl">{r.text}</p>
            <p className="mt-6 font-display text-xl font-extrabold text-ink">
              - {r.name} <span className="text-base font-semibold text-ink/60">{r.city}, MI</span>
            </p>
          </div>
          <div className="mt-8 flex gap-3">
            {reviews.map((_, n) => (
              <button
                key={n}
                onClick={() => setI(n)}
                aria-label={`Show review ${n + 1}`}
                className={`h-3.5 w-3.5 rounded-full transition-colors ${n === i ? "bg-maroon" : "bg-ink/25 hover:bg-ink/50"}`}
              />
            ))}
          </div>
          <Link href="/reviews" className="btn-red mt-10 px-8 py-4">
            Read More Reviews <ArrowCircle />
          </Link>
        </div>
      </div>
    </section>
  );
}
