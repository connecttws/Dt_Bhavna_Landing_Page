"use client";

import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { HeroData, SiteConfig, VslData } from "@/types";
import contentData from "../../visual-data/content.json";

interface HeroProps {
  data?: HeroData;
  site?: SiteConfig;
  vslData?: VslData;
  onOpenBooking: () => void;
  onOpenVideoModal: () => void;
}

export function Hero({
  data = contentData.hero,
  site = contentData.site,
  vslData = contentData.vsl,
  onOpenBooking,
  onOpenVideoModal,
}: HeroProps) {
  return (
    <section className="relative pt-4 sm:pt-6 pb-6 sm:pb-8 overflow-hidden bg-gradient-to-b from-[#F4FAFF] via-[#F4FAFF]/60 to-white">
      {/* Subtle background decorative aura */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#EAF6FF] rounded-full blur-3xl pointer-events-none opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#EAF6FF] rounded-full blur-3xl pointer-events-none opacity-40" />

      <div className="relative max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#1677C8] uppercase bg-[#EAF6FF] px-4 py-1.5 rounded-full border border-[#D9EAF7]">
            {data.eyebrow}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-4xl mx-auto text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#173653] tracking-tight leading-tight sm:leading-snug mb-3 sm:mb-4">
          {data.headline.main}{" "}
          <span className="text-[#1677C8] relative inline-block">
            {data.headline.highlight}
            <svg
              className="absolute -bottom-1 left-0 w-full h-2 text-[#B9E3FF]"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 7 Q 50 1 100 7"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* ================= VSL VIDEO FRAME DIRECTLY AFTER HEADING ================= */}
        {/* Compact desktop size so entire hero fits within one view (above the fold) */}
        <div className="w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[620px] mx-auto mb-3.5 sm:mb-4">
          <div
            className="relative aspect-video w-full rounded-2xl sm:rounded-[22px] overflow-hidden shadow-xl border-3 sm:border-4 border-white bg-slate-900 group cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
            onClick={onOpenVideoModal}
          >
            {site.vslVideoUrl ? (
              <iframe
                src={site.vslVideoUrl}
                title="VSL Video Guide - Dt. Bhavna Bhanushali"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              /* Compact Interactive Video Preview */
              <div className="relative w-full h-full bg-gradient-to-tr from-[#173653] via-[#1E456A] to-[#2B5885] flex flex-col items-center justify-center p-4 sm:p-5 text-white text-center">
                <div className="absolute inset-0 bg-[radial-gradient(#58A9E8_1px,transparent_1px)] [background-size:18px_18px] opacity-15 pointer-events-none" />

                <div className="relative z-10 space-y-2.5 max-w-md mx-auto">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-[#1677C8] group-hover:bg-[#58A9E8] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300"
                    aria-label="Play video presentation"
                  >
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 translate-x-0.5 fill-current" />
                  </div>

                  <div>
                    <h3 className="font-bold text-sm sm:text-base tracking-tight text-white leading-snug">
                      {vslData.placeholderTitle}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#B9E3FF] mt-1">
                      {vslData.placeholderSubtitle}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-[#EAF6FF] border border-white/20">
                    <span>Watch 10-Min Video Guide</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= CTA BUTTON IMMEDIATELY AFTER VSL VIDEO ================= */}
        <div className="flex flex-col items-center justify-center gap-2.5">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3 sm:px-9 sm:py-3.5 bg-[#1677C8] hover:bg-[#1264a9] text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-200 shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>{data.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Line after CTA */}
          <p className="text-xs sm:text-sm text-[#526579] max-w-xl mx-auto leading-relaxed pt-1">
            {data.description}
          </p>

          {/* Micro Assurance & Supporting Points */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-[#173653] font-medium pt-0.5">
            {data.points.map((point) => (
              <div key={point} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1677C8] shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
