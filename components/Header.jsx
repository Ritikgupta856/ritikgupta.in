"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { path: "/", name: "Home" },
  { path: "#projects", name: "Projects" },
  { path: "#experience", name: "Experience" },
  { path: "#education", name: "Education" },
  { path: "#skills", name: "Skills" },
];

const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="hidden sm:flex sm:justify-center sticky top-4 z-50 w-full"
    >
      <nav className="flex items-center justify-center gap-1 rounded-full bg-white/80 px-4 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md dark:bg-zinc-800/90 dark:ring-white/10 transition-all">
        {links.map((link, index) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={index}
              href={link.path}
              className="relative px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:text-violet-600 dark:text-zinc-300 dark:hover:text-violet-400"
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-violet-100 dark:bg-violet-900/30 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
        
        <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-600 mx-2" />
        
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Toggle theme"
        >
          {mounted && (
            <>
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              )}
            </>
          )}
        </button>
      </nav>
    </motion.div>
  );
};

export default Header;