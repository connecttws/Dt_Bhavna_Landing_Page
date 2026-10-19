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
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading, Explanation & Highlighted Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="mb-4 sm:mb-5">
              <span className="inline-flex items-center text-xs sm:text-sm font-bold tracking-wider text-[#1677C8] uppercase bg-[#EAF6FF] px-4 py-1.5 rounded-full border border-[#D9EAF7]">
                {data.eyebrow}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173653] tracking-tight leading-tight">
              {data.headline}
            </h2>

            <p className="text-base text-[#526579] leading-relaxed">
              {data.description}
            </p>

            {/* Highlighted Statement Box */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#F4FAFF] border border-slate-200/90 border-l-4 border-l-[#1677C8] shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
              <p className="text-sm sm:text-base font-semibold text-[#173653] leading-snug">
                {data.calloutBox}
              </p>
            </div>
          </div>

          {/* Right Column: Visually Balanced 5 Health Impacts */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {data.impacts.map((item, idx) => {
              const Icon = iconList[idx % iconList.length];
              return (
                <div
                  key={item.title}
                  className={`bg-white p-6 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgb(0,0,0,0.12)] hover:border-[#1677C8]/40 hover:-translate-y-1 transition-all duration-300 group ${
                    item.fullWidth ? "sm:col-span-2 bg-[#F8FCFF]/70" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EAF6FF] to-[#D9EAF7] text-[#1677C8] flex items-center justify-center shrink-0 border border-[#D9EAF7] shadow-xs group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#173653]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#526579] leading-relaxed">
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
