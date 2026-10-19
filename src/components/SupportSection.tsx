"use client";

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
  return (
    <section
      id="approach"
      className="py-16 sm:py-24 bg-[#F4FAFF] border-y border-[#D9EAF7] scroll-mt-14"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#1677C8] uppercase bg-white px-3.5 py-1.5 rounded-full border border-[#D9EAF7]">
            {data.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173653] tracking-tight leading-tight">
            {data.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#526579] leading-relaxed">
            {data.description}
          </p>
          <p className="text-sm text-[#1677C8] font-medium pt-1">
            {data.subtext}
          </p>
        </div>

        {/* Varied Layout for 5 Support Areas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* 1. Wider Feature Block: Personalised Nutrition Guidance */}
          <div className="md:col-span-12 bg-white p-6 sm:p-8 rounded-2xl border border-[#D9EAF7] shadow-2xs hover:border-[#B9E3FF] transition-all">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#1677C8] flex items-center justify-center shrink-0 border border-[#D9EAF7]">
                  <Apple className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1677C8] uppercase tracking-wider">
                    {data.areas[0]?.badge || "Core Foundation"}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#173653] mt-0.5">
                    {data.areas[0]?.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#526579] leading-relaxed max-w-2xl">
                    {data.areas[0]?.desc}
                  </p>
                </div>
              </div>

              <div className="hidden sm:block shrink-0">
                <span className="text-xs font-semibold text-[#173653] bg-[#EAF6FF] px-3 py-1.5 rounded-lg border border-[#D9EAF7]">
                  {data.areas[0]?.tag || "Individualised Care"}
                </span>
              </div>
            </div>
          </div>

          {/* 2. Medium Block: Lifestyle Planning */}
          <div className="md:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-[#D9EAF7] shadow-2xs hover:border-[#B9E3FF] transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAF6FF] text-[#1677C8] flex items-center justify-center mb-4 border border-[#D9EAF7]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#173653]">
                {data.areas[1]?.title}
              </h3>
              <p className="mt-2 text-sm text-[#526579] leading-relaxed">
                {data.areas[1]?.desc}
              </p>
            </div>
          </div>

          {/* 3. Medium Block: Movement Guidance */}
          <div className="md:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-[#D9EAF7] shadow-2xs hover:border-[#B9E3FF] transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAF6FF] text-[#1677C8] flex items-center justify-center mb-4 border border-[#D9EAF7]">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#173653]">
                {data.areas[2]?.title}
              </h3>
              <p className="mt-2 text-sm text-[#526579] leading-relaxed">
                {data.areas[2]?.desc}
              </p>
            </div>
          </div>

          {/* 4. Smaller Block: Stress & Sleep Support */}
          <div className="md:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-[#D9EAF7] shadow-2xs hover:border-[#B9E3FF] transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAF6FF] text-[#1677C8] flex items-center justify-center mb-4 border border-[#D9EAF7]">
                <Moon className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#173653]">
                {data.areas[3]?.title}
              </h3>
              <p className="mt-2 text-sm text-[#526579] leading-relaxed">
                {data.areas[3]?.desc}
              </p>
            </div>
          </div>

          {/* 5. Smaller Block: Ongoing Guidance & Support */}
          <div className="md:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-[#D9EAF7] shadow-2xs hover:border-[#B9E3FF] transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAF6FF] text-[#1677C8] flex items-center justify-center mb-4 border border-[#D9EAF7]">
                <LifeBuoy className="w-5 h-5" />
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

        {/* Centred CTA below section */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-[#1677C8] hover:bg-[#1264a9] text-white font-semibold text-base rounded-xl transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>{data.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
