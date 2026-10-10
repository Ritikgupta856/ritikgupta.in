"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const DEFAULT_THEME = "dark";

const ThemeContext = createContext(null);

const systemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const resolve = (theme) => (theme === "system" ? systemTheme() : theme);

const readStored = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

// Mirrors what theme-script.jsx does before paint, plus a throwaway stylesheet
// that stops every transition from firing while the palette swaps.
function apply(resolved) {
  const root = document.documentElement;
  const style = document.createElement("style");
  style.appendChild(
    document.createTextNode("*,*::before,*::after{transition:none!important}"),
  );
  document.head.appendChild(style);

  root.classList.toggle("dark", resolved === "dark");
  root.style.colorScheme = resolved;

  // Force a reflow so the disabled transitions take effect before we restore.
  window.getComputedStyle(style).opacity;
  document.head.removeChild(style);
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(DEFAULT_THEME);
  // Undefined until mounted, so consumers can avoid rendering a theme-dependent
  // icon during SSR.
  const [resolvedTheme, setResolvedTheme] = useState(undefined);

  // Adopt whatever the pre-paint script already applied.
  useEffect(() => {
    const stored = readStored() ?? DEFAULT_THEME;
    setThemeState(stored);
    setResolvedTheme(resolve(stored));
  }, []);

  // Follow the OS only while the stored preference is "system".
  useEffect(() => {
    if (theme !== "system") return;
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const next = systemTheme();
      setResolvedTheme(next);
      apply(next);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [theme]);

  // Keep other tabs in sync.
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== STORAGE_KEY) return;
      const next = event.newValue ?? DEFAULT_THEME;
      setThemeState(next);
      const resolved = resolve(next);
      setResolvedTheme(resolved);
      apply(resolved);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setTheme = useCallback((next) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    setThemeState(next);
    const resolved = resolve(next);
    setResolvedTheme(resolved);
    apply(resolved);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within <ThemeProvider>");
  return context;
}
