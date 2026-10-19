"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NavData, SiteConfig } from "@/types";
import contentData from "../../visual-data/content.json";

interface HeaderProps {
  data?: NavData;
  site?: SiteConfig;
  onOpenBooking: () => void;
}

export function Header({
  data = contentData.nav,
  site = contentData.site,
  onOpenBooking,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D9EAF7] transition-all duration-200 ${
        isScrolled ? "shadow-sm py-3" : "py-4"
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677C8] rounded-lg"
          aria-label={`${site.practitionerName} Home`}
        >
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#173653] group-hover:text-[#1677C8] transition-colors leading-tight">
            {site.practitionerName}
          </span>
          <span className="text-[11px] sm:text-xs text-[#526579] font-medium tracking-normal mt-0.5">
            {site.subtitle}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {data.links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-[#526579] hover:text-[#173653] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 bg-[#1677C8] hover:bg-[#1264a9] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-98"
          >
            <span>{data.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </nav>

        {/* Mobile Hamburger & Quick CTA */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={onOpenBooking}
            className="bg-[#1677C8] hover:bg-[#1264a9] text-white text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer"
          >
            Book Now
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center text-[#173653] hover:bg-[#F4FAFF] rounded-lg transition-colors border border-[#D9EAF7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677C8]"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#D9EAF7] bg-white px-4 py-5 shadow-lg space-y-3">
          {data.links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#173653] hover:bg-[#F4FAFF] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#1677C8] hover:bg-[#1264a9] text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition active:scale-98"
            >
              <span>{data.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
