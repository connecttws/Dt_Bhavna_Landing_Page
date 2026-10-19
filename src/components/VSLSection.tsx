"use client";

import { Play, Utensils, CalendarCheck, UserCheck, ArrowRight } from "lucide-react";
import { VslData, SiteConfig } from "@/types";
import contentData from "../../visual-data/content.json";

interface VSLSectionProps {
  data?: VslData;
  site?: SiteConfig;
  onOpenBooking: () => void;
  onOpenVideoModal: () => void;
}

export function VSLSection({
  data = contentData.vsl,
  site = contentData.site,
  onOpenBooking,
  onOpenVideoModal,
}: VSLSectionProps) {
  const iconList = [Utensils, CalendarCheck, UserCheck];

  return (
    <section
      id="vsl"
      className="py-16 sm:py-24 bg-[#F4FAFF] border-y border-[#D9EAF7] scroll-mt-14"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#1677C8] uppercase bg-white px-3.5 py-1.5 rounded-full border border-[#D9EAF7]">
            {data.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173653] tracking-tight leading-tight">
            {data.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#526579] leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Video Container (16:9, max-w-[960px]) */}
        <div className="max-w-[960px] mx-auto">
          <div
            className="relative aspect-video w-full rounded-[18px] overflow-hidden shadow-md border border-[#D9EAF7] bg-white group cursor-pointer"
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
              /* Interactive placeholder with clear instruction & play button */
              <div className="relative w-full h-full bg-gradient-to-tr from-[#173653] via-[#1E456A] to-[#2B5885] flex flex-col items-center justify-center p-6 text-white text-center">
                {/* Background decorative mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(#58A9E8_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#1677C8] group-hover:bg-[#58A9E8] text-white flex items-center justify-center shadow-xl group-hover:scale-105 transition-all duration-300"
                    aria-label="Play video guide"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 translate-x-0.5 fill-current" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg sm:text-xl tracking-tight text-white">
                      {data.placeholderTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B9E3FF] mt-1">
                      {data.placeholderSubtitle}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-[#EAF6FF] border border-white/15">
                    <span>Click to open video player</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Below the video: 3 short supporting benefits in a horizontal row on desktop */}
        <div className="mt-10 sm:mt-12 max-w-[840px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.benefits.map((item, index) => {
            const Icon = iconList[index % iconList.length];
            return (
              <div
                key={item.title}
                className="bg-white border border-[#D9EAF7] rounded-xl p-4 flex items-center justify-center sm:justify-start gap-3 shadow-2xs"
              >
                <div className="w-9 h-9 rounded-lg bg-[#EAF6FF] text-[#1677C8] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm text-[#173653] text-left">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA below benefits */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-[#1677C8] hover:bg-[#1264a9] text-white font-semibold text-base rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>{data.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
