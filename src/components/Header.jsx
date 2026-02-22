"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";

const links = [
  { path: "#experience", name: "Experience" },
  { path: "#projects", name: "Projects" },
  { path: "#blogs", name: "Blogs" },
  { path: "#stack", name: "Stack" },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-4 sm:top-6 z-50 w-full flex justify-center font-sans tracking-tight px-4">
      <div className="bg-background/80 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2.5 flex items-center gap-4 sm:gap-6 border border-border shadow-lg shadow-black/5 max-w-fit">

        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 sm:pr-4 sm:border-r sm:border-border shrink-0">
          <div className="relative size-7 sm:size-8 rounded-full overflow-hidden ring-1 ring-border">
            <Image src="/avatar.jpg" alt="Ritik Gupta" fill className="object-cover" />
          </div>
          <span className="font-bold text-foreground hidden sm:block text-sm tracking-tight">
            Ritik Gupta
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-0.5 sm:gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all duration-150"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="sm:pl-2 sm:border-l sm:border-border flex items-center shrink-0">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 sm:p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun size={17} /> : <Moon size={17} />)}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;

