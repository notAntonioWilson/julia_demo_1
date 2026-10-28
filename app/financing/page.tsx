import type { Metadata } from "next";
import { CalendarDays, CircleCheck, CircleDollarSign, ClipboardCheck } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { PageHero } from "@/components/sections";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Financing",
  description: `Flexible financing options for painting projects from ${site.name}.`,
};

const steps = [
  { icon: ClipboardCheck, title: "Get Your Quote", text: "Schedule a free in-home estimate and receive your written project quote." },
  { icon: CircleDollarSign, title: "Apply in Minutes", text: "Quick application with a fast decision. Checking your options will not affect your credit score." },
  { icon: CalendarDays, title: "Start Your Project", text: "Lock in your start date and pay over time with low monthly payments." },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero eyebrow="We Offer Financing" title="Find Out Your Options" image={images.exterior2} />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-ink/80">
            A fresh paint job should not have to wait. {site.name} offers flexible financing, subject to credit approval, so
            you can start your project now and pay over time.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((s, n) => (
              <div key={s.title} className="relative bg-cloud p-8 text-center">
                <span className="absolute left-4 top-4 font-display text-5xl font-extrabold text-red/20">0{n + 1}</span>
                <s.icon className="mx-auto h-14 w-14 text-crimson" />
                <h2 className="mt-5 font-display text-xl font-extrabold uppercase text-ink">{s.title}</h2>
                <p className="mt-3 text-ink/75">{s.text}</p>
              </div>
            ))}
          </div>
          <ul className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
            {["12 months no interest options", "Low monthly payment plans", "Fast approval decisions", "No prepayment penalties"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-lg font-semibold text-ink">
                <CircleCheck className="h-6 w-6 text-red" /> {t}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-ink/60">Financing subject to credit approval. Terms and rates vary. Ask for details.</p>
        </div>
      </section>
      <div className="container-x pb-16 sm:pb-24">
        <QuoteForm title="Ask About Financing" />
      </div>
    </>
  );
}
