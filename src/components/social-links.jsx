import { Github, Linkedin } from "lucide-react";
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

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`-ml-1.5 flex items-center gap-1 ${className}`}>
      {socials.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Icon className="size-4" />
        </a>
      ))}
    </div>
  );
}
