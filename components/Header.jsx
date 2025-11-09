"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Moon,
  Sun,
  Home,
  Layers,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const XIcon = <svg viewBox="0 0 24 24" aria-hidden="true" class="h-4 w-4 mx-1"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>;

const links = [
  { path: "/", name: "Home", icon: Home },
  {
    path: "https://drive.google.com/file/d/1kLPc9eAyXBNFc2LZ9w8WHWAMusx8DLkb/view?usp=drive_link",
    name: "Resume",
    icon: Layers,
  },
  { path: "https://github.com/Ritikgupta856", name: "GitHub", icon: Github },
  {
    path: "https://www.linkedin.com/in/ritikgupta856",
    name: "LinkedIn",
    icon: Linkedin,
  },
  { path: "https://x.com/ritikgupta856", name: "X", icon: Twitter },
];

const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="flex justify-center sticky top-4 z-50 w-full"
    >
      <nav className="flex items-center justify-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md dark:bg-zinc-800/90 dark:ring-white/10 transition-all">
        {links.map(({ path, icon: Icon, name }, index) => {
          const isActive = pathname === path;
          return (
            <Link
              key={index}
              href={path}
              target={path.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              aria-label={name}
              className="relative p-2 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Icon className="h-5 w-5" />
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

        <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-600 mx-1" />

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Toggle theme"
        >
          {mounted &&
            (theme === "dark" ? (
              <Sun className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            ) : (
              <Moon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            ))}
        </button>
      </nav>
    </motion.div>
  );
};

export default Header;
