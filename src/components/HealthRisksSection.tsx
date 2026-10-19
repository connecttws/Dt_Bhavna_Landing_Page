"use client";

import { Heart, Activity, Eye, Zap, ShieldCheck } from "lucide-react";
import { HealthRisksData } from "@/types";
import contentData from "../../visual-data/content.json";

interface HealthRisksSectionProps {
  data?: HealthRisksData;
}

export function HealthRisksSection({
  data = contentData.healthRisks,
}: HealthRisksSectionProps) {
  const iconList = [Heart, Activity, Eye, Zap, ShieldCheck];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading, Explanation & Highlighted Statement */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#1677C8] uppercase bg-[#EAF6FF] px-3.5 py-1.5 rounded-full border border-[#D9EAF7]">
              {data.eyebrow}
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173653] tracking-tight leading-tight">
              {data.headline}
            </h2>

            <p className="text-base text-[#526579] leading-relaxed">
              {data.description}
            </p>

            {/* Highlighted Statement Box */}
            <div className="p-5 rounded-2xl bg-[#F4FAFF] border border-[#D9EAF7] border-l-4 border-l-[#1677C8]">
              <p className="text-sm sm:text-base font-semibold text-[#173653] leading-snug">
                {data.calloutBox}
              </p>
            </div>
          </div>

          {/* Right Column: Visually Balanced 5 Health Impacts */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.impacts.map((item, idx) => {
              const Icon = iconList[idx % iconList.length];
              return (
                <div
                  key={item.title}
                  className={`bg-white p-5 sm:p-6 rounded-2xl border border-[#D9EAF7] hover:border-[#B9E3FF] transition-all shadow-2xs hover:shadow-xs ${
                    item.fullWidth ? "sm:col-span-2 bg-[#F4FAFF]/50" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF6FF] text-[#1677C8] flex items-center justify-center shrink-0 border border-[#D9EAF7]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#173653]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#526579] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
