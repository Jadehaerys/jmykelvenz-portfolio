import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "../../data/config";
import { Button } from "../ui/Button";

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  const navHref = (href: string) =>
    isHome ? href : `/${href}`;

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"}
      `}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-18"
        aria-label="Main navigation"
      >
        {/* ── Logo / Name ── */}
        <Link
          to="/"
          className="font-display font-bold text-base md:text-lg text-text tracking-tight hover:text-accent transition-colors duration-200"
          aria-label="Jade Ventic — home"
        >
          Jade Ventic
        </Link>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {SITE.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={navHref(link.href)}
                className="font-body text-sm font-medium text-muted hover:text-text transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:block">
          <Button
            as="a"
            href={SITE.contact.email ? `mailto:${SITE.contact.email}` : "#contact"}
            variant="ghost"
            size="sm"
          >
            Get in touch
          </Button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 rounded-lg hover:bg-surface transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block h-0.5 w-5 bg-text transition-transform duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-text transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-text transition-transform duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg/95 backdrop-blur-md border-b border-border px-6 pb-6 pt-2"
          >
            <ul className="space-y-4" role="list">
              {SITE.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={navHref(link.href)}
                    className="block font-body text-base font-medium text-text hover:text-accent transition-colors duration-200 py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-border">
              <Button
                as="a"
                href={`mailto:${SITE.contact.email}`}
                variant="primary"
                size="md"
                className="w-full"
              >
                Get in touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
