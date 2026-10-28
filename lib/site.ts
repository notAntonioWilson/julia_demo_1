// =============================================================
// SITE CONFIG: edit business info here. Everything on the site
// pulls from this file. All values below are DEMO placeholders.
// =============================================================

export const site = {
  name: "Julia's Painting Co.",
  shortName: "Julia's",
  tagline: "Painting Co.",
  owner: "Julia Martinez",
  phone: "(313) 555-0142",
  phoneHref: "tel:+13135550142",
  email: "example@gmail.com", // lead notifications go here (forms are demo only for now)
  license: "MI Lic. #2101-000000",
  address: {
    street: "1234 Woodward Ave, Suite 200",
    city: "Detroit",
    state: "MI",
    zip: "48226",
  },
  mapsUrl: "https://maps.google.com/?q=Detroit,+MI",
  region: "Metro Detroit",
  yearsInBusiness: 15,
  hours: [
    { days: "Monday to Friday", time: "8:00 AM to 6:00 PM" },
    { days: "Saturday", time: "9:00 AM to 3:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  },
  rating: { value: "4.9", count: 312 },
};

export const serviceAreas = [
  "Detroit",
  "Dearborn",
  "Royal Oak",
  "Ferndale",
  "Grosse Pointe",
  "Livonia",
  "Southfield",
  "Troy",
  "Birmingham",
  "Bloomfield Hills",
  "Warren",
  "Sterling Heights",
  "Clinton Township",
  "Novi",
  "Canton",
  "Farmington Hills",
  "Rochester Hills",
  "St. Clair Shores",
];

export type Offer = {
  title: string;
  value: string;
  detail: string;
  expires: string;
};

export const offers: Offer[] = [
  {
    title: "Save",
    value: "$300 Off Any Whole-Home Interior",
    detail: "Plus No Payments and No Interest for 12 Months",
    expires: "12/31/2026",
  },
  {
    title: "15% Off",
    value: "Exterior Painting",
    detail: "Full house or trim-only projects",
    expires: "12/31/2026",
  },
  {
    title: "Free",
    value: "Color Consultation",
    detail: "With any booked painting project",
    expires: "12/31/2026",
  },
  {
    title: "$500 Off",
    value: "Cabinet Refinishing",
    detail: "Full kitchen cabinet packages",
    expires: "12/31/2026",
  },
];

export const reviews = [
  {
    name: "Tasha R.",
    city: "Royal Oak",
    text: "Julia's crew repainted our entire first floor in two days. They covered every inch of furniture, the lines are razor sharp, and the house was cleaner when they left than when they showed up. We already booked them for the exterior in the spring.",
  },
  {
    name: "Marcus D.",
    city: "Detroit",
    text: "Our 1920s home had peeling trim and old lead-era paint. They walked us through every step, prepped it the right way, and the exterior looks brand new. Fair price, on schedule, zero surprises.",
  },
  {
    name: "Angela P.",
    city: "Grosse Pointe",
    text: "We were quoted double elsewhere for kitchen cabinets. Julia's team sprayed them in a satin white and they look factory finished. Friends keep asking if we bought new cabinets.",
  },
  {
    name: "Kevin S.",
    city: "Livonia",
    text: "Called on a Monday, had an estimate Tuesday, work started the next week. The color consultation alone was worth it. Super professional and friendly team.",
  },
  {
    name: "Brianna W.",
    city: "Ferndale",
    text: "They painted our salon after hours so we never had to close. Great communication, great finish, and they handled a few drywall repairs we did not even know we needed.",
  },
];

export const reviewPlatforms = [
  { name: "Google", rating: "4.9", count: "312 Google Reviews" },
  { name: "Facebook", rating: "4.8", count: "96 Facebook Reviews" },
  { name: "BBB", rating: "A+", count: "Accredited Business" },
  { name: "Angi", rating: "4.9", count: "74 Angi Reviews" },
];

export const whatToExpect = [
  { icon: "award", label: "Premium Paints & Materials" },
  { icon: "badge", label: "Licensed, Insured Painters" },
  { icon: "users", label: "Customer Service Is Our Priority" },
  { icon: "shield", label: "Written Workmanship Warranty" },
  { icon: "tag", label: "Free In-Home Estimate & Price Quote" },
  { icon: "star", label: "4.9 Star Google Rating" },
];

export const generalFaqs = [
  {
    q: "Are your estimates really free?",
    a: "Yes. We come to your home or business, look at the space, talk through colors and finishes, and leave you with a written quote. No cost and no pressure.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Every project is covered by general liability insurance and our painters are fully trained and background checked.",
  },
  {
    q: "What paint brands do you use?",
    a: "We use premium lines from Sherwin-Williams and Benjamin Moore. If you have a preferred brand or product, we are happy to use it.",
  },
  {
    q: "Do I need to move my furniture?",
    a: "No. Our crew moves and covers furniture, protects floors, and puts everything back where it belongs at the end of the job.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most interior rooms take one day. A full home interior usually takes three to five days, and most exteriors take three to seven days depending on size, prep, and weather.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We offer financing options, subject to credit approval, so you can break your project into manageable monthly payments.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Detroit and the surrounding Metro Detroit communities across Wayne, Oakland, and Macomb counties.",
  },
];
