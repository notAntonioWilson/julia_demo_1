"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CircleCheck, Paperclip } from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

/** DEMO FORM: not connected yet. See QuoteForm.tsx for how to wire it up. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [files, setFiles] = useState(0);

  const line =
    "w-full border-0 border-b border-ink/30 bg-transparent px-3 py-4 text-lg text-ink placeholder:text-ink/70 outline-none transition-colors focus:border-red";

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="animate-fade bg-cream p-10 text-center">
        <CircleCheck className="mx-auto h-14 w-14 text-red" />
        <h3 className="h-display mt-4 text-2xl">Message Sent!</h3>
        <p className="mt-3 text-ink/80">
          Thanks for reaching out. We will get back to you within one business day. For faster help call{" "}
          <a href={site.phoneHref} className="font-bold text-crimson">{site.phone}</a>.
        </p>
        <button onClick={() => setSent(false)} className="btn-outline mt-6">
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input className={line} name="name" placeholder="Name" autoComplete="name" />
      <input className={line} name="email" type="email" placeholder="Email*" required autoComplete="email" />
      <input className={line} name="phone" type="tel" placeholder="Phone" autoComplete="tel" />
      <select className={`${line} appearance-none`} name="service" defaultValue="">
        <option value="">Service you are interested in</option>
        {services.map((s) => (
          <option key={s.slug}>{s.name}</option>
        ))}
        <option>Other</option>
      </select>
      <textarea className={`${line} min-h-40 resize-y`} name="message" placeholder="Tell us about your project." />
      <div className="flex items-center justify-between py-3">
        <label className="flex cursor-pointer items-center gap-2 text-lg text-crimson hover:text-red">
          <Paperclip className="h-5 w-5" /> Attach Files
          <input
            type="file"
            multiple
            accept="image/*,.pdf"
            className="sr-only"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFiles(e.target.files?.length ?? 0)}
          />
        </label>
        <span className="text-sm text-ink/60">Attachments ({files})</span>
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-full border-2 border-ink py-5 font-display text-lg font-bold tracking-[0.2em] text-ink transition-colors hover:border-red hover:bg-red hover:text-white"
      >
        Send
      </button>
    </form>
  );
}
