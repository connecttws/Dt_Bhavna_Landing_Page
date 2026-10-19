"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { FinalCtaData } from "@/types";
import contentData from "../../visual-data/content.json";

interface FinalCtaSectionProps {
  data?: FinalCtaData;
  onOpenBooking: () => void;
}

export function FinalCtaSection({
  data = contentData.finalCta,
  onOpenBooking,
}: FinalCtaSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#EAF6FF] to-[#F4FAFF] border-t border-[#D9EAF7] text-center">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="text-xs sm:text-sm font-bold tracking-wider text-[#1677C8] uppercase bg-white px-3.5 py-1.5 rounded-full border border-[#D9EAF7] shadow-2xs">
          {data.eyebrow}
        </span>

        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-[#173653] tracking-tight leading-tight">
          {data.headline}
        </h2>

        <div className="space-y-2 text-base sm:text-lg text-[#526579] leading-relaxed max-w-xl mx-auto">
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="pt-2 flex justify-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-[#1677C8] hover:bg-[#1264a9] text-white font-semibold text-base sm:text-lg rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Calendar className="w-5 h-5" />
            <span>{data.ctaText}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
