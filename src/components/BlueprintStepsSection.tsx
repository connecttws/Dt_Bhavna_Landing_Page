"use client";

import { Calendar, Compass, Sparkles } from "lucide-react";
import { BlueprintStepsData } from "@/types";
import contentData from "../../visual-data/content.json";

interface BlueprintStepsSectionProps {
  data?: BlueprintStepsData;
}

export function BlueprintStepsSection({
  data = contentData.blueprintSteps,
}: BlueprintStepsSectionProps) {
  const iconList = [Calendar, Compass, Sparkles];

  return (
    <section className="py-16 sm:py-24 bg-[#F4FAFF] border-t border-[#D9EAF7]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#1677C8] uppercase bg-white px-3.5 py-1.5 rounded-full border border-[#D9EAF7]">
            {data.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173653] tracking-tight leading-tight">
            {data.headline}
          </h2>
          <p className="text-base text-[#526579] leading-relaxed max-w-xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* 3-Step Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-16 right-16 h-[2px] bg-[#D9EAF7] -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {data.steps.map((step, idx) => {
              const Icon = iconList[idx % iconList.length];
              return (
                <div
                  key={step.number}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-[#D9EAF7] shadow-2xs hover:border-[#B9E3FF] transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-10 h-10 rounded-xl bg-[#EAF6FF] text-[#1677C8] font-extrabold text-sm flex items-center justify-center border border-[#D9EAF7]">
                        {step.number}
                      </span>
                      <div className="p-2.5 rounded-xl bg-[#F4FAFF] text-[#1677C8]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#173653]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#526579] leading-relaxed">
                      {step.desc}
                    </p>
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
