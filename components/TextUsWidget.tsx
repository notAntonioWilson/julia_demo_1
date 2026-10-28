"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck, MessageCircle, X } from "lucide-react";
import { site } from "@/lib/site";

/** Floating "text us" lead widget. DEMO: does not send yet (wire to n8n / SMS later). */
export default function TextUsWidget() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end gap-3 lg:bottom-6 lg:right-6">
      {open && (
        <div className="animate-fade w-[calc(100vw-2rem)] max-w-sm overflow-hidden bg-white shadow-2xl ring-1 ring-ink/10">
          <div className="flex items-center gap-3 bg-maroon px-4 py-4 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
              <MessageCircle className="h-5 w-5" />
            </span>
            <p className="flex-1 font-display text-base font-bold leading-tight">{site.name}</p>
            <span className="rounded-full bg-red px-3 py-1 text-center text-[0.65rem] font-bold uppercase leading-tight">
              24/7
              <br />
              Available
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="ml-1 hover:text-red">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="bg-cloud p-4">
            {sent ? (
              <div className="bg-white p-6 text-center">
                <CircleCheck className="mx-auto h-10 w-10 text-red" />
                <p className="mt-3 font-semibold">Thanks! Our team will text you shortly.</p>
              </div>
            ) : (
              <>
                <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm shadow-sm">
                  Enter your information, and our team will text you shortly.
                </p>
                <form onSubmit={submit} className="mt-4 space-y-3 bg-white p-4">
                  <label className="block text-xs font-bold uppercase tracking-wide text-ink/70">
                    Name
                    <input required placeholder="Jane Smith" className="mt-1 w-full border border-ink/15 bg-cloud px-3 py-2.5 text-sm font-normal normal-case outline-none focus:border-red" />
                  </label>
                  <label className="block text-xs font-bold uppercase tracking-wide text-ink/70">
                    Mobile Phone
                    <div className="mt-1 flex">
                      <span className="flex items-center border border-r-0 border-ink/15 bg-cloud px-3 text-sm font-normal">+1</span>
                      <input required type="tel" placeholder="3135550123" className="w-full border border-ink/15 bg-cloud px-3 py-2.5 text-sm font-normal outline-none focus:border-red" />
                    </div>
                  </label>
                  <p className="text-[0.7rem] leading-snug text-ink/60">
                    By submitting, you authorize {site.name} to text/call the number above for informational messages,
                    possibly using automated means. Msg/data rates apply, msg frequency varies. Consent is not a condition
                    of purchase. Text HELP for help and STOP to unsubscribe.
                  </p>
                  <button type="submit" className="w-full rounded-full bg-crimson py-3 font-display font-bold text-white hover:bg-crimson-dark">
                    Send
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close text us widget" : "Text us"}
        className="flex h-16 w-16 items-center justify-center bg-red text-white shadow-xl ring-4 ring-white transition-transform hover:scale-105"
      >
        {open ? <X className="h-7 w-7" /> : <MessageCircle className="h-8 w-8" />}
      </button>
    </div>
  );
}
