import Link from "next/link";

export function HeartMark({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 104" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="55%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
      </defs>
      {/* paint drips */}
      <path d="M23 52 h9 v24 a4.5 4.5 0 0 1 -9 0 z" fill="#dc2626" />
      <path d="M69 60 h8 v16 a4 4 0 0 1 -8 0 z" fill="#facc15" />
      <path d="M57 74 h6 v20 a3 3 0 0 1 -6 0 z" fill="#991b1b" />
      {/* heart */}
      <path
        d="M50 90 C 22 70, 4 52, 4 31 C 4 16, 15 5, 29 5 C 39 5, 46 11, 50 19 C 54 11, 61 5, 71 5 C 85 5, 96 16, 96 31 C 96 52, 78 70, 50 90 Z"
        fill="url(#heartGrad)"
      />
      {/* brush stroke highlight */}
      <path
        d="M16 34 C 22 24, 34 20, 44 26"
        stroke="#ffffff"
        strokeOpacity="0.55"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M34 52 C 46 44, 62 42, 76 46"
        stroke="#facc15"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Julia's Painting Co. home">
      <HeartMark className="h-12 w-12 shrink-0 transition-transform group-hover:scale-105 sm:h-16 sm:w-16" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-3xl font-extrabold uppercase tracking-wide sm:text-[2.6rem] ${
            light ? "text-white" : "text-crimson"
          }`}
        >
          Julia&apos;s
        </span>
        <span className="mt-1 font-display text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-red sm:text-sm">
          Painting Co.
        </span>
      </span>
    </Link>
  );
}
