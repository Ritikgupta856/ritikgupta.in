"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ui/theme-provider";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const links = [
  { path: "/", name: "Home", isActive: (pathname) => pathname === "/" },
  { path: "/#experience", name: "Work" },
  { path: "/#projects", name: "Projects" },
  {
    path: "/#blogs",
    name: "Blog",
    isActive: (pathname) => pathname.startsWith("/blogs"),
  },
];

const Header = () => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="animate-slide-in mx-auto w-full max-w-2xl px-3 pt-6">
      <div className="flex items-center justify-between gap-4">
        <nav className="flex items-center gap-6 text-sm font-medium">
          {links.map((link) => {
            const active = link.isActive?.(pathname);
            return (
              <Link
                key={link.path}
                href={link.path}
                aria-current={active ? "page" : undefined}
                className={`transition-colors hover:text-foreground ${active ? "text-foreground" : "text-muted-foreground"}`}
              >
                {link.name}
              </Link>
            );
          })}
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
