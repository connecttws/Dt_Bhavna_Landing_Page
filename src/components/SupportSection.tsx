"use client";

import React, { useState, useRef } from "react";
import { Apple, Clock, Flame, Moon, LifeBuoy, ArrowRight } from "lucide-react";
import { SupportData } from "@/types";
import contentData from "../../visual-data/content.json";

interface SupportSectionProps {
  data?: SupportData;
  onOpenBooking: () => void;
}

export function SupportSection({
  data = contentData.support,
  onOpenBooking,
}: SupportSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.clientWidth * 0.82;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), 4));
    }
  };

  return (
    <section
      id="approach"
      className="py-8 sm:py-12 bg-[#F4FAFF] border-y border-[#D9EAF7] scroll-mt-14"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Intro */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-flex justify-center mb-4 sm:mb-5">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#1677C8] uppercase bg-white px-4 py-1.5 rounded-full border border-[#D9EAF7] shadow-xs">
              {data.eyebrow}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173653] tracking-tight leading-tight mb-4">
            {data.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#526579] leading-relaxed">
            {data.description}
          </p>
          <p className="text-sm text-[#1677C8] font-medium pt-1">
            {data.subtext}
          </p>
        </div>

        {/* Carousel on Mobile (peeking next card) + Grid on Desktop */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-12 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 pt-1 -mx-4 sm:-mx-6 md:mx-0 scroll-pl-5 sm:scroll-pl-6 md:scroll-pl-0 scrollbar-none"
        >
          {/* 1. Feature Block: Personalised Nutrition Guidance */}
          <div className="w-[80vw] sm:w-[84vw] md:w-auto md:col-span-12 shrink-0 md:shrink snap-start ml-5 sm:ml-6 md:ml-0 bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgb(0,0,0,0.12)] hover:border-[#1677C8]/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#EAF6FF] to-[#D9EAF7] text-[#1677C8] flex items-center justify-center shrink-0 border border-[#D9EAF7] shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <Apple className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1677C8] uppercase tracking-wider bg-[#EAF6FF] px-2.5 py-0.5 rounded-md border border-[#D9EAF7]/60">
                    {data.areas[0]?.badge || "Core Foundation"}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#173653] mt-1.5">
                    {data.areas[0]?.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#526579] leading-relaxed max-w-2xl">
                    {data.areas[0]?.desc}
                  </p>
                </div>
              </div>

              <div className="hidden sm:block shrink-0">
                <span className="text-xs font-semibold text-[#173653] bg-[#F4FAFF] px-3.5 py-2 rounded-xl border border-[#D9EAF7] shadow-2xs">
                  {data.areas[0]?.tag || "Individualised Care"}
                </span>
              </div>
            </div>
          </div>

          {/* 2. Block: Lifestyle Planning */}
          <div className="w-[80vw] sm:w-[84vw] md:w-auto md:col-span-6 shrink-0 md:shrink snap-start bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgb(0,0,0,0.12)] hover:border-[#1677C8]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EAF6FF] to-[#D9EAF7] text-[#1677C8] flex items-center justify-center mb-4 border border-[#D9EAF7] shadow-xs group-hover:scale-105 transition-transform duration-300">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#173653]">
                {data.areas[1]?.title}
              </h3>
              <p className="mt-2 text-sm text-[#526579] leading-relaxed">
                {data.areas[1]?.desc}
              </p>
            </div>
          </div>

          {/* 3. Block: Movement Guidance */}
          <div className="w-[80vw] sm:w-[84vw] md:w-auto md:col-span-6 shrink-0 md:shrink snap-start bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgb(0,0,0,0.12)] hover:border-[#1677C8]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EAF6FF] to-[#D9EAF7] text-[#1677C8] flex items-center justify-center mb-4 border border-[#D9EAF7] shadow-xs group-hover:scale-105 transition-transform duration-300">
                <Flame className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#173653]">
                {data.areas[2]?.title}
              </h3>
              <p className="mt-2 text-sm text-[#526579] leading-relaxed">
                {data.areas[2]?.desc}
              </p>
            </div>
          </div>

          {/* 4. Block: Stress & Sleep Support */}
          <div className="w-[80vw] sm:w-[84vw] md:w-auto md:col-span-6 shrink-0 md:shrink snap-start bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgb(0,0,0,0.12)] hover:border-[#1677C8]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EAF6FF] to-[#D9EAF7] text-[#1677C8] flex items-center justify-center mb-4 border border-[#D9EAF7] shadow-xs group-hover:scale-105 transition-transform duration-300">
                <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#173653]">
                {data.areas[3]?.title}
              </h3>
              <p className="mt-2 text-sm text-[#526579] leading-relaxed">
                {data.areas[3]?.desc}
              </p>
            </div>
          </div>

          {/* 5. Block: Ongoing Guidance & Support */}
          <div className="w-[80vw] sm:w-[84vw] md:w-auto md:col-span-6 shrink-0 md:shrink snap-start mr-5 sm:mr-6 md:mr-0 bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgb(0,0,0,0.12)] hover:border-[#1677C8]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EAF6FF] to-[#D9EAF7] text-[#1677C8] flex items-center justify-center mb-4 border border-[#D9EAF7] shadow-xs group-hover:scale-105 transition-transform duration-300">
                <LifeBuoy className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#173653]">
                {data.areas[4]?.title}
              </h3>
              <p className="mt-2 text-sm text-[#526579] leading-relaxed">
                {data.areas[4]?.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Carousel Indicators */}
        <div className="flex md:hidden items-center justify-center gap-2 pt-2 pb-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-[#1677C8]" : "w-1.5 bg-[#D9EAF7]"
              }`}
            />
          ))}
        </div>

        {/* Centred CTA below section */}
        <div className="mt-8 sm:mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#1677C8] hover:bg-[#1264a9] text-white font-semibold text-base rounded-xl transition-all duration-200 shadow-md hover:shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>{data.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
