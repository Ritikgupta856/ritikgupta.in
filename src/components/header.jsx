"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const links = [
  { path: "/", name: "Home" },
  { path: "/#experience", name: "Work" },
  { path: "/#projects", name: "Projects" },
  { path: "/#blogs", name: "Blog" },
];

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="mx-auto w-full max-w-2xl px-6 pt-6 font-mono text-xs sm:pt-8 sm:text-[0.8125rem]">
      <div className="flex items-center justify-between gap-4">
        <nav className="flex items-center gap-4 sm:gap-5">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="-mr-1.5 flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Toggle theme"
        >
          {mounted &&
            (resolvedTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />)}
        </button>
      </div>
    </header>
  );
};

export default Header;
