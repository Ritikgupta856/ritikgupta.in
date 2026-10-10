import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-2xl px-3 py-24 sm:py-32">
      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        404
      </p>
      <h1 className="mt-3 text-lg font-semibold tracking-tight text-foreground sm:text-2xl">
        Page not found
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-foreground/80">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block font-mono text-[0.8125rem] text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
      >
        ← Back home
      </Link>
    </main>
  );
}
