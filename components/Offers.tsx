"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { offers, type Offer } from "@/lib/site";
import QuoteForm from "./QuoteForm";
import { ArrowCircle } from "./ui";

export function OfferCard({ offer }: { offer: Offer }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="h-full bg-white p-4 shadow-xl">
        <div className="coupon-border flex h-full flex-col items-center px-5 py-8 text-center">
          <h3 className="h-display text-4xl text-maroon sm:text-5xl">{offer.title}</h3>
          <p className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.12em] text-red sm:text-2xl">{offer.value}</p>
          <p className="mt-3 text-lg text-ink/85">{offer.detail}</p>
          <button onClick={() => setOpen(true)} className="btn-red mt-6 px-8 py-4">
            Redeem Offer <ArrowCircle />
          </button>
          <p className="mt-6 text-sm text-ink/70">
            Expires {offer.expires}
            <br />
            Cannot be combined with any other offer. Please contact for more details. Restrictions apply.
          </p>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/70 p-4 sm:items-center"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Redeem ${offer.title} ${offer.value}`}
        >
          <div className="animate-fade relative my-8 w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center bg-white text-ink hover:bg-red hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <QuoteForm title="Redeem Offer" promo={`${offer.title}: ${offer.value}`} />
          </div>
        </div>
      )}
    </>
  );
}

export function OffersCarousel() {
  const perPage = 2;
  const pages = Math.ceil(offers.length / perPage);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPage((p) => (p + 1) % pages), 7000);
    return () => clearInterval(t);
  }, [pages]);

  const visible = offers.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="bg-gradient-to-b from-cloud to-white py-16 sm:py-24">
      <div className="container-x">
        <p className="eyebrow text-center text-crimson">Our Offers</p>
        <h2 className="h-display mt-3 text-center text-3xl text-ink sm:text-5xl">Save On Your Service Today</h2>
        <div key={page} className="animate-fade mt-12 grid gap-8 md:grid-cols-2">
          {visible.map((o) => (
            <OfferCard key={o.value} offer={o} />
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-3">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Show offers page ${i + 1}`}
              className={`h-3.5 w-3.5 rounded-full transition-colors ${i === page ? "bg-maroon" : "bg-ink/25 hover:bg-ink/50"}`}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/specials" className="btn-outline px-10 py-4">
            See All Offers <ArrowCircle />
          </Link>
        </div>
      </div>
    </section>
  );
}
