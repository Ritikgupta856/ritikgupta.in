import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="animate-slide-in mx-auto mt-auto w-full max-w-2xl px-3 delay-800">
      <div className="flex items-center justify-between gap-4 border-t border-border py-6">
        <SocialLinks />
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ritik Gupta
        </p>
      </div>
    </footer>
  );
}
