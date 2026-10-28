import { images } from "./images";

export type Service = {
  slug: string;
  name: string;
  group: "Interior" | "Exterior" | "Commercial";
  icon: "roller" | "house" | "cabinet" | "building" | "hammer" | "fence";
  short: string;
  image: string;
  intro: string[];
  signsTitle: string;
  signs: string[];
  featuresTitle: string;
  features: { title: string; text: string }[];
  optionsTitle: string;
  options: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    group: "Interior",
    icon: "roller",
    short: "Walls, ceilings, trim, doors, and stairwells with crisp lines and zero mess.",
    image: images.livingRoom,
    intro: [
      "Julia's Painting Co. helps homeowners throughout Detroit and the surrounding suburbs refresh their homes with clean, durable interior paint. Whether you are updating one room, prepping a house to sell, or repainting the whole home, our crew delivers a finish that looks sharp and lasts.",
      "We handle everything from furniture moving and floor protection to patching, priming, caulking, and final cleanup, so you get a finished room, not a project to manage.",
    ],
    signsTitle: "Is It Time to Repaint Your Interior?",
    signs: [
      "Scuffs and marks that will not wash off",
      "Fading or uneven color",
      "Peeling or bubbling paint",
      "Cracks around trim and corners",
      "Outdated colors that make rooms feel dark",
      "Water stains on ceilings",
      "Getting ready to list your home",
      "Moving into a new place",
    ],
    featuresTitle: "Interior Painting Done the Right Way",
    features: [
      { title: "Full surface prep", text: "We fill holes, sand rough spots, caulk gaps, and spot prime so the new color goes on smooth and stays on." },
      { title: "Premium paint", text: "Scrubbable, low-VOC finishes from Sherwin-Williams and Benjamin Moore that stand up to kids, pets, and daily life." },
      { title: "Sharp, clean lines", text: "Hand-cut lines at ceilings, trim, and accent walls. No bleeding, no wavy edges." },
      { title: "Home protection", text: "Furniture is moved and covered, floors are protected, and every room is cleaned before we leave." },
      { title: "Color guidance", text: "Not sure what color to choose? We bring samples and help you pick a palette that fits your space and lighting." },
      { title: "Respect for your schedule", text: "Most rooms are finished in a single day so your household gets back to normal fast." },
    ],
    optionsTitle: "Interior Surfaces We Paint",
    options: ["Walls & accent walls", "Ceilings", "Trim & baseboards", "Interior doors", "Stairwells & railings", "Built-ins & shelving"],
    faqs: [
      { q: "How long does it take to paint a room?", a: "Most standard rooms are completed in one day, including prep and cleanup. Larger rooms or rooms with a lot of repair may take two." },
      { q: "Do I need to be home while you paint?", a: "No. Many clients give us access and go to work. We keep you updated by text with photos throughout the day." },
      { q: "Is the paint safe for kids and pets?", a: "We use low-VOC and zero-VOC products, which keep odor to a minimum. Most families use the room the same evening." },
    ],
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    group: "Exterior",
    icon: "house",
    short: "Siding, brick, trim, shutters, and doors built to handle Michigan weather.",
    image: images.houseExterior,
    intro: [
      "Michigan homes take a beating from humid summers, freezing winters, and everything in between. Julia's Painting Co. delivers exterior paint jobs that protect your home and boost curb appeal across Detroit and the surrounding communities.",
      "From power washing and scraping to priming, caulking, and two full coats, we do the prep work most painters skip, which is exactly why our exteriors last.",
    ],
    signsTitle: "Is It Time to Repaint Your Exterior?",
    signs: [
      "Peeling, cracking, or flaking paint",
      "Chalky residue on siding",
      "Faded or sun-bleached color",
      "Exposed or soft wood on trim",
      "Gaps and failed caulking",
      "Mildew or staining",
      "Dated colors hurting curb appeal",
      "Preparing to sell",
    ],
    featuresTitle: "Exterior Paint Built for Michigan Weather",
    features: [
      { title: "Power washing", text: "Every surface is cleaned of dirt, chalk, and mildew so primer and paint bond properly." },
      { title: "Scraping & sanding", text: "Loose paint is removed and edges are feathered for a smooth, uniform finish." },
      { title: "Wood repair", text: "Soft or rotted trim is flagged and replaced before painting, not painted over." },
      { title: "Weather-sealed caulking", text: "Gaps around windows, doors, and trim are sealed to keep water and drafts out." },
      { title: "Two full coats", text: "Premium exterior acrylics applied at the right thickness for long-lasting color." },
      { title: "Final walkthrough", text: "We walk the property with you and touch up anything before we call it done." },
    ],
    optionsTitle: "Exterior Surfaces We Paint",
    options: ["Wood & vinyl siding", "Brick & masonry", "Trim, fascia & soffits", "Front doors & garage doors", "Shutters", "Porches & railings"],
    faqs: [
      { q: "What time of year is best for exterior painting?", a: "In Michigan, late spring through early fall is ideal. We monitor temperature and humidity and only paint when conditions are right." },
      { q: "Can you paint brick?", a: "Yes. We use breathable masonry coatings designed for brick so moisture can escape and the paint does not peel." },
      { q: "How long will my exterior paint last?", a: "With proper prep and premium paint, most exteriors last 8 to 12 years depending on sun exposure and surface type." },
    ],
  },
  {
    slug: "cabinet-refinishing",
    name: "Cabinet Refinishing",
    group: "Interior",
    icon: "cabinet",
    short: "Factory-smooth sprayed finishes that make old cabinets look brand new.",
    image: images.kitchen,
    intro: [
      "New cabinets can cost tens of thousands of dollars. Cabinet refinishing from Julia's Painting Co. gives your kitchen or bathroom a brand new look for a fraction of the price.",
      "Doors and drawers are removed, labeled, degreased, sanded, primed, and sprayed in a controlled setting for a smooth, durable, factory-style finish.",
    ],
    signsTitle: "Is It Time to Refinish Your Cabinets?",
    signs: [
      "Dated oak or orange finish",
      "Worn edges and chipped corners",
      "Grease buildup that will not come off",
      "Kitchen feels dark or closed in",
      "Remodel budget does not fit new cabinets",
      "Mismatched cabinets after a repair",
    ],
    featuresTitle: "Our Cabinet Refinishing Process",
    features: [
      { title: "Remove & label", text: "Doors, drawers, and hardware are removed and labeled so everything goes back exactly where it belongs." },
      { title: "Deep degrease", text: "Years of kitchen grease are removed so the new finish bonds permanently." },
      { title: "Sand & bond prime", text: "Surfaces are scuffed and primed with an adhesion primer made for cabinetry." },
      { title: "Sprayed finish", text: "Doors are sprayed for a smooth, brush-free finish that looks factory made." },
      { title: "Hardware upgrade", text: "Want new pulls and hinges? We can install them during reassembly." },
      { title: "Clean reinstall", text: "Everything is rehung, adjusted, and aligned before we hand back your kitchen." },
    ],
    optionsTitle: "Cabinets We Refinish",
    options: ["Kitchen cabinets", "Bathroom vanities", "Built-ins & bookcases", "Laundry room cabinets", "Islands & accent colors", "Two-tone designs"],
    faqs: [
      { q: "How long does cabinet refinishing take?", a: "Most kitchens take five to seven working days, including proper cure time between coats." },
      { q: "Can I use my kitchen during the project?", a: "Yes, for the most part. Cabinet boxes stay in place, and we keep the work area clean and organized each day." },
      { q: "How durable is the finish?", a: "We use cabinet-grade urethane enamels that resist chipping and wiping far better than standard wall paint." },
    ],
  },
  {
    slug: "commercial-painting",
    name: "Commercial Painting",
    group: "Commercial",
    icon: "building",
    short: "Offices, retail, restaurants, and multi-unit properties, done after hours.",
    image: images.office,
    intro: [
      "Julia's Painting Co. helps Metro Detroit businesses look their best without disrupting operations. We work nights, weekends, and in phases so your doors stay open while we paint.",
      "From single storefronts to multi-unit properties, we bring the same prep standards and clean job sites to every commercial project.",
    ],
    signsTitle: "Signs Your Business Needs Fresh Paint",
    signs: [
      "Scuffed walls in high-traffic areas",
      "Faded storefront or signage areas",
      "Rebranding or new brand colors",
      "Tenant turnover in rental units",
      "Upcoming inspection or open house",
      "Outdated look hurting first impressions",
    ],
    featuresTitle: "Commercial Painting Without the Downtime",
    features: [
      { title: "After-hours scheduling", text: "Nights and weekends available so customers and staff are never disrupted." },
      { title: "Phased projects", text: "We work area by area so your business keeps running." },
      { title: "Durable coatings", text: "Commercial-grade, scrubbable paints for high-traffic areas." },
      { title: "Brand color matching", text: "Exact matches for logos and brand standards." },
      { title: "Insured & compliant", text: "Certificates of insurance provided for property managers and landlords." },
      { title: "Single point of contact", text: "One project lead keeps you updated from start to finish." },
    ],
    optionsTitle: "Commercial Properties We Paint",
    options: ["Offices", "Retail storefronts", "Restaurants & salons", "Apartments & multi-unit", "Churches & community spaces", "Warehouses & light industrial"],
    faqs: [
      { q: "Can you work outside business hours?", a: "Yes. Most of our commercial work is done evenings and weekends to avoid disruptions." },
      { q: "Do you provide a certificate of insurance?", a: "Yes. We can send a COI to your landlord or property manager before work begins." },
      { q: "Do you handle multi-unit turnovers?", a: "Yes. We offer fast-turnaround unit painting for property managers and landlords." },
    ],
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    group: "Interior",
    icon: "hammer",
    short: "Holes, cracks, water damage, and texture matching before we paint.",
    image: images.wall,
    intro: [
      "Great paint starts with great walls. Julia's Painting Co. repairs holes, cracks, dents, and water-damaged drywall so your finished walls look seamless.",
      "We match existing textures and blend repairs so they disappear once the paint goes on.",
    ],
    signsTitle: "Common Drywall Problems We Fix",
    signs: [
      "Nail pops and screw pops",
      "Doorknob holes",
      "Settling cracks around doors and windows",
      "Water-stained or soft drywall",
      "Damaged corner bead",
      "Old anchor and TV mount holes",
    ],
    featuresTitle: "Repairs That Disappear",
    features: [
      { title: "Patch & fill", text: "Small and large holes patched with the right material for a solid, flat repair." },
      { title: "Crack repair", text: "Cracks are taped and mudded so they do not come back." },
      { title: "Water damage", text: "Damaged sections are cut out and replaced once the source is fixed." },
      { title: "Texture matching", text: "Orange peel, knockdown, and smooth finishes blended to match." },
      { title: "Prime & paint", text: "Repairs are primed and painted so they blend into the wall." },
      { title: "Clean work area", text: "Dust control and full cleanup on every repair." },
    ],
    optionsTitle: "Drywall Services",
    options: ["Hole patching", "Crack repair", "Water damage repair", "Texture matching", "Corner bead repair", "Ceiling repair"],
    faqs: [
      { q: "Do you only do drywall repair if I hire you to paint?", a: "No. We handle standalone repairs too, though most clients pair them with paint for a seamless finish." },
      { q: "Can you match my wall texture?", a: "Yes. We match most common textures including orange peel and knockdown." },
      { q: "Do you fix water-damaged ceilings?", a: "Yes, once the leak has been repaired we replace and refinish the damaged area." },
    ],
  },
  {
    slug: "deck-fence-staining",
    name: "Deck & Fence Staining",
    group: "Exterior",
    icon: "fence",
    short: "Clean, seal, and stain decks, fences, and pergolas to stop weather damage.",
    image: images.exterior2,
    intro: [
      "Sun, snow, and rain wear down unprotected wood fast. Julia's Painting Co. cleans, preps, and stains decks, fences, and pergolas across Metro Detroit to bring the wood back to life and protect it for years.",
      "We help you choose the right product, from transparent to solid stains, based on the age and condition of your wood.",
    ],
    signsTitle: "Is It Time to Stain Your Deck or Fence?",
    signs: [
      "Gray, weathered wood",
      "Water soaks in instead of beading",
      "Splintering boards",
      "Peeling old stain",
      "Mildew or dark spots",
      "New wood that has never been sealed",
    ],
    featuresTitle: "Staining That Protects and Lasts",
    features: [
      { title: "Wash & brighten", text: "Wood is cleaned and brightened to remove gray fibers and mildew." },
      { title: "Sanding", text: "Rough and splintered areas are sanded smooth." },
      { title: "Board inspection", text: "Loose or damaged boards are flagged before staining." },
      { title: "Premium stain", text: "Penetrating stains with UV and water protection." },
      { title: "Even application", text: "Applied by hand for full coverage without lap marks." },
      { title: "Maintenance plan", text: "We let you know when to refresh to keep your wood protected." },
    ],
    optionsTitle: "Wood Surfaces We Stain",
    options: ["Decks", "Privacy fences", "Pergolas", "Porches", "Railings", "Outdoor furniture"],
    faqs: [
      { q: "How often should I stain my deck?", a: "Most decks need a fresh coat every two to three years depending on sun exposure and traffic." },
      { q: "Can you stain new wood?", a: "New pressure-treated wood usually needs a few months to dry out. We will test it and let you know when it is ready." },
      { q: "Paint or stain?", a: "Stain is usually the better choice for decks because it will not peel the way paint does on walking surfaces." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const navGroups = [
  { label: "Interior", items: services.filter((s) => s.group === "Interior") },
  { label: "Exterior", items: services.filter((s) => s.group === "Exterior") },
];
