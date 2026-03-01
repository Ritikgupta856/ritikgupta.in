import { Github, Linkedin, Mail } from "lucide-react";
import { IconBrandX } from "@tabler/icons-react";

const socials = [
  { href: "https://github.com/ritikgupta856", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/ritikgupta856/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://x.com/ritikgupta856", icon: IconBrandX, label: "X" },
];

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-5xl border-t border-border font-sans">
      <div className="flex flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:gap-4 sm:px-6 sm:py-5">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ritik Gupta. All rights reserved.
        </p>
        <div className="flex items-center gap-1">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
