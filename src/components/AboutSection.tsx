"use client";

import { ArrowRight, Check } from "lucide-react";
import { AboutData, SiteConfig } from "@/types";
import contentData from "../../visual-data/content.json";

interface AboutSectionProps {
  data?: AboutData;
  site?: SiteConfig;
  onOpenBooking: () => void;
}

export function AboutSection({
  data = contentData.about,
  site = contentData.site,
  onOpenBooking,
}: AboutSectionProps) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white scroll-mt-14">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Professional Portrait Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Soft sky-blue decorative shape behind image */}
            <div className="absolute -inset-4 bg-[#EAF6FF] rounded-[26px] rotate-1 pointer-events-none" />

            <div className="relative w-full max-w-sm sm:max-w-md bg-white border border-[#D9EAF7] rounded-[22px] overflow-hidden shadow-md p-3">
              <div className="relative aspect-[4/5] rounded-[18px] overflow-hidden bg-gradient-to-b from-[#F4FAFF] to-[#EAF6FF] flex items-center justify-center">
                {/* Authentic Clinical Practitioner Visual */}
                <svg
                  className="w-full h-full object-cover"
                  viewBox="0 0 360 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label={`${site.practitionerName} Portrait`}
                >
                  <rect width="360" height="450" fill="#F4FAFF" />

                  {/* Backdrop gentle halo */}
                  <circle cx="180" cy="180" r="140" fill="#EAF6FF" />

                  {/* Hair */}
                  <path
                    d="M110 150 C110 70, 250 70, 250 150 C250 200, 240 230, 240 240 C210 240, 150 240, 120 240 C120 230, 110 200, 110 150 Z"
                    fill="#241B18"
                  />

                  {/* Head */}
                  <ellipse cx="180" cy="155" rx="42" ry="48" fill="#F5CBB0" />
                  {/* Facial Expression - Friendly, Clinical, Welcoming */}
                  <path
                    d="M165 175 Q180 185 195 175"
                    stroke="#9A634D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="166" cy="148" r="3.5" fill="#241B18" />
                  <circle cx="194" cy="148" r="3.5" fill="#241B18" />
                  <path
                    d="M160 138 Q166 135 172 138"
                    stroke="#241B18"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M188 138 Q194 135 200 138"
                    stroke="#241B18"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  {/* Clean Consultation Attire with Stethoscope */}
                  <path
                    d="M100 235 C100 215, 260 215, 260 235 L290 450 L70 450 Z"
                    fill="#FFFFFF"
                    stroke="#D9EAF7"
                    strokeWidth="2"
                  />

                  {/* Subtle stethoscope line */}
                  <path
                    d="M155 235 C155 285, 205 285, 205 235"
                    stroke="#1677C8"
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="180"
                    cy="295"
                    r="10"
                    fill="#58A9E8"
                    stroke="#173653"
                    strokeWidth="2.5"
                  />
                </svg>

                {/* Practitioner Info Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md border border-[#D9EAF7] rounded-xl p-2.5 text-center shadow-xs">
                  <p className="text-xs font-bold text-[#173653]">
                    {site.practitionerName}
                  </p>
                  <p className="text-[11px] text-[#526579]">
                    {site.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction, Philosophy & Signature Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#1677C8] uppercase bg-[#EAF6FF] px-3.5 py-1.5 rounded-full border border-[#D9EAF7]">
                {data.eyebrow}
              </span>
              <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-[#173653] tracking-tight">
                {data.headline}
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#526579] leading-relaxed">
              {data.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Signature Statement */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F4FAFF] border border-[#D9EAF7]">
              <p className="text-lg sm:text-xl font-extrabold text-[#173653] tracking-tight">
                {data.signature}
              </p>
            </div>

            {/* Core Commitments Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#173653] font-medium pt-1">
              {data.commitments.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1677C8] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#1677C8] hover:bg-[#1264a9] text-white font-semibold text-base rounded-xl transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>{data.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
