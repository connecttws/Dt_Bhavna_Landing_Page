"use client";

import { FooterData, SiteConfig } from "@/types";
import contentData from "../../visual-data/content.json";

interface FooterProps {
  data?: FooterData;
  site?: SiteConfig;
}

export function Footer({
  data = contentData.footer,
  site = contentData.site,
}: FooterProps) {
  const currentYear = 2026;

  const handleScroll = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white text-[#526579] py-8 sm:py-12 border-t border-[#D9EAF7] text-xs sm:text-sm">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#D9EAF7]">
          <div className="md:col-span-7 space-y-2">
            <h3 className="font-extrabold text-base sm:text-lg text-[#173653] tracking-tight">
              {site.practitionerName}
            </h3>
            <p className="text-xs sm:text-sm text-[#526579]">
              {site.subtitle}
            </p>
            <p className="text-xs text-[#526579] max-w-md pt-1 leading-relaxed">
              Supporting your journey towards healthier daily eating, movement, stress regulation, and sleep habits through the Reset Blueprint.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col sm:flex-row gap-8 sm:justify-end">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#173653] mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs">
                {data.quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleScroll(link.href)}
                      className="hover:text-[#1677C8] transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#173653] mb-3">
                Policies
              </h4>
              <ul className="space-y-2 text-xs">
                {data.policies.map((policy) => (
                  <li key={policy.label}>
                    <a
                      href={policy.href}
                      className="hover:text-[#1677C8] transition-colors"
                    >
                      {policy.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright & Exact Health Disclaimer */}
        <div className="pt-8 space-y-4">
          <p className="text-xs text-[#526579]">
            © {currentYear} {site.practitionerName}. All Rights Reserved.
          </p>

          <div className="bg-[#F4FAFF] p-4 sm:p-5 rounded-xl border border-[#D9EAF7] text-[11px] sm:text-xs leading-relaxed text-[#526579]">
            <p>
              <strong className="text-[#173653]">Health Disclaimer:</strong>{" "}
              {data.disclaimer.replace(/^Health Disclaimer:\s*/, "")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
