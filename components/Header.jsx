"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Github, Search } from "lucide-react";

const links = [
  { path: "#experience", name: "Experience" },
  { path: "#education", name: "Education" },
  { path: "#projects", name: "Projects" },
  { path: "#stack", name: "Stack" },
];

const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-md font-mono">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
  
        <Link href="/" className="flex items-center text-4xl font-bold gap-1">
          RG
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm transition-colors ${
                pathname === link.path
                  ? "text-zinc-950 dark:text-zinc-50 font-bold"
                  : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1.5 text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            {mounted &&
              (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
