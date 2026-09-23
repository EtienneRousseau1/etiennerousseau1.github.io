import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import { logotext } from "../content";
import { useTheme } from "../hooks/useTheme";
import "./header.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/projects", label: "Projects" },
  { to: "/games", label: "Games" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const DESKTOP = "(min-width: 48rem)";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();

  // Navigating is the signal that the menu has served its purpose.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // A menu that traps you behind Escape is a menu people get stuck in.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Widening past the breakpoint hides the panel in CSS. Without this the
  // state stays open and the scroll lock below leaves the page unscrollable.
  useEffect(() => {
    if (!open) return;
    const query = window.matchMedia(DESKTOP);
    const onChange = (event) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [open]);

  // Stop the page scrolling underneath the open overlay.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <Link className="header__brand" to="/">
            {logotext}
          </Link>

          <nav className="header__nav" aria-label="Main">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header__actions">
            <button
              type="button"
              className="header__theme"
              onClick={toggle}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <FiSun aria-hidden="true" />
              ) : (
                <FiMoon aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              className="header__toggle"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span
                className={`header__bars ${open ? "is-open" : ""}`}
                aria-hidden="true"
              >
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/*
        Rendered outside <header> on purpose. The header's backdrop-filter
        makes it the containing block for position: fixed descendants, which
        collapsed this panel to the header's own height.
      */}
      <div id="mobile-nav" className="mobile-nav" hidden={!open}>
        <nav className="container mobile-nav__list" aria-label="Mobile">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              // Tapping the page you are already on does not change the
              // pathname, so the effect above never fires.
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
