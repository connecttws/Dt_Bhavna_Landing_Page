"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqData } from "@/types";
import contentData from "../../visual-data/content.json";

interface FaqSectionProps {
  data?: FaqData;
}

export function FaqSection({ data = contentData.faq }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-8 sm:py-12 bg-white scroll-mt-14">
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex justify-center mb-4 sm:mb-5">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#1677C8] uppercase bg-[#EAF6FF] px-4 py-1.5 rounded-full border border-[#D9EAF7]">
              {data.eyebrow}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173653] tracking-tight">
            {data.headline}
          </h2>
        </div>

        {/* Accordion Interface */}
        <div className="space-y-3">
          {data.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-[#1677C8]/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-[#F4FAFF] transition-colors cursor-pointer"
                >
                  <span className="font-bold text-[#173653] text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-[#EAF6FF] text-[#1677C8] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#1677C8] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#526579] leading-relaxed border-t border-[#D9EAF7] pt-4 bg-[#F4FAFF]/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
