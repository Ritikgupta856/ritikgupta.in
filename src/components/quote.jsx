export default function Quote() {
  return (
    <div className="animate-slide-in mx-auto w-full max-w-2xl px-3 pb-12 delay-700 sm:pb-16">
      <div className="rounded-xl border border-border px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-sm italic leading-relaxed text-muted-foreground">
          &ldquo;The only time you truly fail, is when you decide to give
          up.&rdquo;
        </p>
        <p className="mt-2 text-right font-mono text-xs text-muted-foreground">
          — Virat Kohli
        </p>
      </div>
    </div>
  );
}
