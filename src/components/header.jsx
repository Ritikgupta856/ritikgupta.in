"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X, Copy, Check } from "lucide-react";
import Image from "next/image";

const links = [
  { path: "#experience", name: "Work" },
  { path: "#projects", name: "Projects" },
  { path: "#blogs", name: "Blogs" },
  { path: "#stack", name: "Stack" },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-4 z-50 flex w-full justify-center px-4 font-sans tracking-tight sm:top-6 sm:px-6 lg:px-8">
      <div className="flex w-full items-center justify-between gap-2 rounded-full border border-zinc-200/50 bg-white/80 px-4 py-2 shadow-lg shadow-black/5 backdrop-blur-2xl sm:gap-6 sm:px-6 sm:py-2.5 md:w-auto md:max-w-fit md:bg-white/80 md:px-8 dark:border-white/10 dark:bg-zinc-900/80 dark:shadow-black/20">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 border-zinc-200 sm:border-r sm:pr-4 dark:border-white/10"
        >
          <div className="relative size-8 overflow-hidden rounded-full ring-1 ring-zinc-200 transition-colors group-hover:ring-blue-400/50 dark:ring-white/10">
            <Image
              src="/images/avatar.jpg"
              alt="Ritik Gupta"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-blue-500 md:block dark:text-zinc-100">
            Ritik Gupta
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-zinc-600 transition-all duration-200 hover:bg-zinc-100/80 hover:text-zinc-900 sm:px-4 sm:py-2 sm:text-sm dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-zinc-100"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1 border-zinc-200 md:border-l md:pl-4 dark:border-white/10">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-zinc-100"
            aria-label="Toggle theme"
          >
            {mounted &&
              (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100/80 hover:text-zinc-900 md:hidden dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-zinc-100"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute inset-x-4 top-[4.5rem] mx-auto flex max-w-sm flex-col gap-2 rounded-3xl border border-zinc-200/50 bg-white/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden dark:border-white/10 dark:bg-zinc-900/95">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-[15px] font-medium text-zinc-600 transition-all duration-200 hover:bg-zinc-100/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-zinc-100"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <button
      onClick={copy}
      className="absolute right-4 top-4 z-20 rounded-md border border-zinc-700/50 bg-zinc-800/50 p-2 text-zinc-400 opacity-0 shadow-xl backdrop-blur-sm transition-all hover:bg-zinc-700/80 hover:text-zinc-100 group-hover:opacity-100"
      aria-label="Copy code"
    >
      {isCopied ? (
        <Check size={16} className="text-emerald-400" />
      ) : (
        <Copy size={16} />
      )}
    </button>
  );
};

export default Header;
