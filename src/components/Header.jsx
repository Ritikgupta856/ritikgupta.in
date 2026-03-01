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
    <header className="sticky top-4 sm:top-6 z-50 w-full flex justify-center font-sans tracking-tight px-4">
      {/* Floating Pill Navbar */}
      <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-6 border border-zinc-200/50 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 w-full md:w-auto md:max-w-fit">

        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 sm:pr-4 sm:border-r border-zinc-200 dark:border-white/10 shrink-0 group">
          <div className="relative size-8 rounded-full overflow-hidden ring-1 ring-zinc-200 dark:ring-white/10 group-hover:ring-blue-400/50 transition-colors">
            <Image src="/avatar.jpg" alt="Ritik Gupta" fill className="object-cover" />
          </div>
          <span className="font-bold text-zinc-900 dark:text-zinc-100 hidden md:block text-sm tracking-tight group-hover:text-blue-500 transition-colors">
            Ritik Gupta
          </span>
        </Link>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
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

        {/* Theme Toggle & Mobile Menu Trigger */}
        <div className="md:pl-4 md:border-l border-zinc-200 dark:border-white/10 flex items-center gap-1 shrink-0">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100/80 dark:hover:text-zinc-100 dark:hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100/80 dark:hover:text-zinc-100 dark:hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[4.5rem] inset-x-4 mx-auto max-w-sm bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 rounded-3xl shadow-2xl p-4 flex flex-col gap-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-[15px] font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100/80 dark:hover:text-zinc-100 dark:hover:bg-white/10 rounded-2xl transition-all duration-200"
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
      className="absolute right-4 top-4 p-2 rounded-md bg-zinc-800/50 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/80 transition-all opacity-0 group-hover:opacity-100 border border-zinc-700/50 backdrop-blur-sm shadow-xl z-20"
      aria-label="Copy code"
    >
      {isCopied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
    </button>
  );
};

export default Header;
