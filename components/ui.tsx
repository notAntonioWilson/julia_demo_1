import type { CSSProperties, ReactNode } from "react";
import {
  Award,
  BadgeCheck,
  Building,
  ChevronRight,
  Fence,
  Hammer,
  House,
  PaintRoller,
  ShieldCheck,
  Star,
  Tag,
  Users,
} from "lucide-react";
import type { Service } from "@/lib/services";

/** Background photo with brand gradient fallback. */
export function Photo({
  src,
  className = "",
  children,
  label,
}: {
  src: string;
  className?: string;
  children?: ReactNode;
  label?: string;
}) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      className={`photo ${className}`}
      style={{ "--img": `url("${src}")` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function ServiceIcon({ icon, className = "h-16 w-16" }: { icon: Service["icon"]; className?: string }) {
  if (icon === "roller") return <PaintRoller className={className} strokeWidth={2.2} />;
  if (icon === "house") return <House className={className} strokeWidth={2.2} />;
  if (icon === "building") return <Building className={className} strokeWidth={2.2} />;
  if (icon === "hammer") return <Hammer className={className} strokeWidth={2.2} />;
  if (icon === "fence") return <Fence className={className} strokeWidth={2.2} />;
  // cabinet
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M12 3v18M3 12h18" />
      <path d="M9 7.5v2M15 7.5v2M9 15v2M15 15v2" />
    </svg>
  );
}

export function FeatureIcon({ icon, className = "h-9 w-9" }: { icon: string; className?: string }) {
  const map: Record<string, ReactNode> = {
    award: <Award className={className} />,
    badge: <BadgeCheck className={className} />,
    users: <Users className={className} />,
    shield: <ShieldCheck className={className} />,
    tag: <Tag className={className} />,
    star: <Star className={className} />,
  };
  return <>{map[icon] ?? <Star className={className} />}</>;
}

export function Stars({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <span className="flex text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-current`} />
      ))}
    </span>
  );
}

export function ArrowCircle({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className={`flex items-center justify-center rounded-full border-2 border-current ${className}`}>
      <ChevronRight className="h-3.5 w-3.5" strokeWidth={3} />
    </span>
  );
}

export function SocialIcons({ className = "" }: { className?: string }) {
  const cls = "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-red";
  return (
    <div className={`flex gap-3 ${className}`}>
      <a href="https://facebook.com" aria-label="Facebook" className={cls} target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M14 9V7c0-.9.6-1 1-1h2V2.1L14.3 2C11.3 2 10 3.8 10 6.6V9H7.5v4H10v9h4v-9h2.9l.6-4H14z" />
        </svg>
      </a>
      <a href="https://instagram.com" aria-label="Instagram" className={cls} target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a href="https://tiktok.com" aria-label="TikTok" className={cls} target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9a7.3 7.3 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z" />
        </svg>
      </a>
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && <p className={`eyebrow ${light ? "text-cream" : "text-crimson"}`}>{eyebrow}</p>}
      <h2 className={`h-display mt-3 text-3xl sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
    </div>
  );
}
