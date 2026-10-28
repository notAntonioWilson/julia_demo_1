import Link from "next/link";
import { HeartMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-center py-24 text-center">
      <HeartMark className="h-24 w-24" />
      <h1 className="h-display mt-6 text-4xl text-plum sm:text-6xl">Page Not Found</h1>
      <p className="mt-4 text-lg text-ink/70">Looks like this wall still needs a coat. Let&apos;s get you back home.</p>
      <Link href="/" className="btn-pink mt-8">Back to Home</Link>
    </section>
  );
}
