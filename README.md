# Julia's Painting Co. (Demo Site)

Next.js 16 (App Router) + Tailwind CSS 4. Ready for Vercel with zero config.

## Deploy
1. Unzip this folder.
2. Create a new GitHub repo and upload the **contents** of the folder (not the .zip itself).
3. In Vercel: Add New Project, import the repo, click Deploy. No env vars needed.

## Run locally
```
npm install
npm run dev
```

## Where to edit
| What | File |
|---|---|
| Business name, phone, email, address, hours, offers, reviews, service areas | `lib/site.ts` |
| Services and all service page content | `lib/services.ts` |
| Photos (placeholders) | `lib/images.ts` (drop real photos in `public/images/` and point to `/images/your-file.jpg`) |
| Logo | `components/Logo.tsx` and `app/icon.svg` (favicon) |
| Brand colors | `app/globals.css` (`@theme` block) |

## Forms
All forms (quote form, contact form, offer popups, "text us" widget) are **demo only**: they show a thank-you
state but do not send anywhere. To go live, add a POST to an n8n webhook (or Web3Forms / Resend) in
`handleSubmit` inside `components/QuoteForm.tsx`, `components/ContactForm.tsx`, and `components/TextUsWidget.tsx`.
Lead email is set in `lib/site.ts` (`email`).

## Pages
Home, About, Services hub, 6 service pages, Service Areas, Specials, Financing, Reviews, FAQs, Contact.

All business info, reviews, ratings, and offers are placeholders.
