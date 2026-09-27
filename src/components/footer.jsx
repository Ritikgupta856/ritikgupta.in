import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-2xl px-6">
      <div className="flex items-center justify-between gap-4 border-t border-border py-6">
        <SocialLinks />
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ritik Gupta
        </p>
      </div>
    </footer>
  );
}
