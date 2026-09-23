import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

/** Reads the saved choice. Storage throws in some privacy modes. */
export function readStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

const systemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

/**
 * Theme is the visitor's explicit choice when they have made one, and the OS
 * preference until then. The inline script in index.html applies the same
 * value before first paint, so this hook only has to keep it in sync.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => readStoredTheme() ?? systemTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Follow the OS only while the visitor has not chosen for themselves.
  useEffect(() => {
    if (readStoredTheme()) return;
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => setTheme(event.matches ? "dark" : "light");
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // A visitor with storage blocked still gets the theme for this visit.
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
