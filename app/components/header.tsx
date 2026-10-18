"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { name: "Work", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 24);
    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  return (
    <header className="fixed inset-x-0 top-2 z-30 mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-12">
      <div
        className={`flex items-center justify-between rounded-full border px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 sm:px-5 sm:py-2.5 ${
          isScrolled
            ? "border-white/15 bg-black/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "border-white/10 bg-black/45"
        }`}
      >
        <a href="#top" aria-label="Muhammad Umair home" className="min-w-0">
          <span className="block truncate text-sm font-bold tracking-[-0.04em] text-white sm:text-base">
            Muhammad Umair
          </span>
          <span className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55 sm:block">
            Full-Stack Developer
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/muhammad-umair-20a5462ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85 sm:inline-flex"
          >
            View my work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-4 right-4 top-full mt-2 rounded-3xl border border-white/10 bg-[#111] p-3 shadow-xl sm:left-8 sm:right-8 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/muhammad-umair-20a5462ab/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-1 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black"
          >
            View my work
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      )}
    </header>
  );
}
