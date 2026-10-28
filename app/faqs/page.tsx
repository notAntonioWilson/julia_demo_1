import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/sections";
import { images } from "@/lib/images";
import { services } from "@/lib/services";
import { generalFaqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description: `Frequently asked questions about painting services from ${site.name}.`,
};

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-ink">
        {q}
        <span className="text-2xl text-pink transition-transform group-open:rotate-45">+</span>
      </summary>
      <p className="mt-3 text-lg leading-relaxed text-ink/80">{a}</p>
    </details>
  );
}

export default function FaqsPage() {
  return (
    <>
      <PageHero eyebrow="Questions?" title="Frequently Asked Questions" image={images.wall} />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x max-w-4xl">
          <h2 className="h-display text-3xl text-plum">General</h2>
          <div className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
            {generalFaqs.map((f) => (
              <Faq key={f.q} {...f} />
            ))}
          </div>
          {services.map((s) => (
            <div key={s.slug} className="mt-14">
              <h2 className="h-display text-3xl text-plum">{s.name}</h2>
              <div className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                {s.faqs.map((f) => (
                  <Faq key={f.q} {...f} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
