"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { ArrowCircle } from "./ui";

/**
 * DEMO FORM: submissions are not sent anywhere yet.
 * To go live, POST `data` to an n8n webhook, Web3Forms, or a Next.js
 * API route inside handleSubmit. Lead email: site.email in lib/site.ts
 */
export default function QuoteForm({
  variant = "wide",
  promo,
  title = "Get A Free Quote",
  tone = "mauve",
}: {
  variant?: "wide" | "stacked";
  promo?: string;
  title?: string;
  tone?: "mauve" | "plum";
}) {
  const [sent, setSent] = useState(false);
  const wide = variant === "wide";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // eslint-disable-next-line no-console
    console.log("Demo lead (not sent):", { to: site.email, ...data });
    setSent(true);
  }

  const bg = tone === "plum" ? "bg-plum text-white" : "bg-mauve text-ink";
  const consentText = tone === "plum" ? "text-white/90" : "text-ink";

  return (
    <div id="quote" className={`${bg} scroll-mt-40 px-5 py-10 sm:px-10 sm:py-12`}>
      <h2 className={`h-display text-center ${wide ? "text-3xl sm:text-5xl" : "text-3xl sm:text-4xl"}`}>{title}</h2>
      {promo && (
        <p className="mx-auto mt-4 max-w-md bg-pink px-4 py-2 text-center text-sm font-bold uppercase tracking-wide text-white">
          Promotion applied: {promo}
        </p>
      )}

      {sent ? (
        <div className="animate-fade mx-auto mt-8 max-w-lg bg-white p-8 text-center text-ink">
          <CircleCheck className="mx-auto h-14 w-14 text-pink" />
          <h3 className="h-display mt-4 text-2xl">Thank You!</h3>
          <p className="mt-3 text-ink/80">
            We received your request. A member of our team will reach out shortly to schedule your free estimate. Need us
            sooner? Call <a className="font-bold text-purple" href={site.phoneHref}>{site.phone}</a>.
          </p>
          <button onClick={() => setSent(false)} className="btn-outline mt-6">
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8">
          {promo && <input type="hidden" name="promotion" value={promo} />}
          <div className={`grid gap-4 ${wide ? "sm:grid-cols-2 sm:gap-5" : ""}`}>
            <input className="field" name="firstName" placeholder="First Name *" required autoComplete="given-name" />
            <input className="field" name="lastName" placeholder="Last Name *" required autoComplete="family-name" />
            <input className="field" name="email" type="email" placeholder="Email *" required autoComplete="email" />
            <input className="field" name="phone" type="tel" placeholder="Phone *" required autoComplete="tel" />
            <input className="field" name="address" placeholder="Address *" required autoComplete="street-address" />
            <input className="field" name="zip" placeholder="Zip Code *" required autoComplete="postal-code" inputMode="numeric" />
            <select className="field appearance-none bg-[length:18px] bg-[right_1rem_center] bg-no-repeat" name="service" defaultValue="" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230c0812' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")" }}>
              <option value="" disabled>
                Service Needed
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
            <input className="field" name="message" placeholder="How Can We Help?" />
          </div>

          <label className="mt-6 flex items-center justify-center gap-3 text-base font-semibold sm:text-lg">
            <input type="checkbox" name="emailOptIn" defaultChecked className="h-5 w-5 accent-purple" />
            Yes! Sign me up for emails!
          </label>

          <label className={`mt-6 flex items-start gap-3 text-xs font-semibold leading-relaxed sm:text-sm ${consentText}`}>
            <input type="checkbox" name="consent" required className="mt-1 h-5 w-5 shrink-0 accent-purple" />
            <span>
              By clicking &quot;Submit&quot;, you agree that {site.name} may contact you at the phone number and email
              provided, including by calls and text messages (SMS) using automated technology for marketing and
              informational purposes. Consent is not a condition of purchase. Message and data rates may apply. Message
              frequency may vary. Reply STOP to opt out or HELP for help.
            </span>
          </label>

          <div className="mt-8 flex justify-center">
            <button type="submit" className="btn border-2 border-white bg-pink px-14 py-4 text-lg text-white hover:bg-pink-dark">
              Submit <ArrowCircle />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
