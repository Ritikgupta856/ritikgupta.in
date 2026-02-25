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
      {/* Floating Pill Navbar */}
      <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-full px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-6 border border-zinc-200/50 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 max-w-fit">

        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 sm:pr-4 sm:border-r border-zinc-200 dark:border-white/10 shrink-0 group">
          <div className="relative size-8 rounded-full overflow-hidden ring-1 ring-zinc-200 dark:ring-white/10 group-hover:ring-blue-400/50 transition-colors">
            <Image src="/avatar.jpg" alt="Ritik Gupta" fill className="object-cover" />
          </div>
          <span className="font-bold text-zinc-900 dark:text-zinc-100 hidden sm:block text-sm tracking-tight group-hover:text-blue-500 transition-colors">
            Ritik Gupta
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-[13px] sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100/80 dark:hover:text-zinc-100 dark:hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="sm:pl-4 sm:border-l border-zinc-200 dark:border-white/10 flex items-center shrink-0">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100/80 dark:hover:text-zinc-100 dark:hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;

