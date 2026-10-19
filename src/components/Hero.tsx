"use client";

import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { HeroData } from "@/types";
import contentData from "../../visual-data/content.json";

interface HeroProps {
  data?: HeroData;
  onOpenBooking: () => void;
  onScrollToVideo: () => void;
}

export function Hero({
  data = contentData.hero,
  onOpenBooking,
  onScrollToVideo,
}: HeroProps) {
  return (
    <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#F4FAFF] via-[#F4FAFF]/60 to-white">
      {/* Subtle background decorative aura */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EAF6FF] rounded-full blur-3xl pointer-events-none opacity-70" />

      <div className="relative max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Main Message */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#1677C8] uppercase bg-[#EAF6FF] px-3.5 py-1.5 rounded-full border border-[#D9EAF7]">
                {data.eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#173653] tracking-tight leading-[1.18] sm:leading-[1.14]">
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
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#526579] leading-relaxed max-w-xl">
              {data.description}
            </p>

            {/* Three Compact Supporting Points */}
            <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm text-[#173653] font-medium">
              {data.points.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTAs: Primary & Secondary */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#1677C8] hover:bg-[#1264a9] text-white font-semibold text-base rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>{data.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToVideo}
                className="px-6 py-3.5 bg-white hover:bg-[#F4FAFF] text-[#173653] border border-[#D9EAF7] hover:border-[#B9E3FF] font-semibold text-base rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <div className="w-6 h-6 rounded-full bg-[#EAF6FF] text-[#1677C8] flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current translate-x-0.5" />
                </div>
                <span>{data.secondaryCta}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Subtle blue background shape */}
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#EAF6FF] to-[#D9EAF7]/60 rounded-[28px] -rotate-1 pointer-events-none" />

            {/* Main Visual Card */}
            <div className="relative w-full max-w-md bg-white border border-[#D9EAF7] rounded-[22px] overflow-hidden shadow-lg p-3">
              <div className="relative aspect-[4/5] rounded-[18px] overflow-hidden bg-gradient-to-tr from-[#EAF6FF] via-[#F4FAFF] to-[#EAF6FF] flex flex-col justify-end">
                {/* Clean Professional Consultation Illustration & Avatar Representation */}
                <svg
                  className="w-full h-full object-cover"
                  viewBox="0 0 400 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Certified Diabetes Educator Dt. Bhavna Bhanushali representation"
                >
                  <defs>
                    <linearGradient
                      id="heroBgGrad"
                      x1="0"
                      y1="0"
                      x2="400"
                      y2="500"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F4FAFF" />
                      <stop offset="0.5" stopColor="#EAF6FF" />
                      <stop offset="1" stopColor="#D9EAF7" />
                    </linearGradient>
                    <linearGradient
                      id="heroSkinGrad"
                      x1="150"
                      y1="120"
                      x2="250"
                      y2="220"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F5D0B5" />
                      <stop offset="1" stopColor="#E8B896" />
                    </linearGradient>
                    <linearGradient
                      id="heroCoatGrad"
                      x1="120"
                      y1="240"
                      x2="280"
                      y2="450"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFFFFF" />
                      <stop offset="1" stopColor="#F0F7FD" />
                    </linearGradient>
                  </defs>

                  {/* Room / Consultation Office Backdrop */}
                  <rect width="400" height="500" fill="url(#heroBgGrad)" />

                  {/* Subtle office window & plant */}
                  <rect
                    x="260"
                    y="40"
                    width="110"
                    height="150"
                    rx="10"
                    fill="#FFFFFF"
                    opacity="0.6"
                    stroke="#D9EAF7"
                    strokeWidth="2"
                  />
                  <line
                    x1="315"
                    y1="40"
                    x2="315"
                    y2="190"
                    stroke="#D9EAF7"
                    strokeWidth="2"
                  />
                  <line
                    x1="260"
                    y1="115"
                    x2="370"
                    y2="115"
                    stroke="#D9EAF7"
                    strokeWidth="2"
                  />

                  {/* Nutrition book / clinical clipboard on desk */}
                  <path
                    d="M40 380 L140 360 L160 460 L60 480 Z"
                    fill="#EAF6FF"
                    stroke="#D9EAF7"
                    strokeWidth="2"
                  />
                  <rect
                    x="60"
                    y="380"
                    width="70"
                    height="8"
                    rx="4"
                    fill="#58A9E8"
                    opacity="0.5"
                  />
                  <rect
                    x="60"
                    y="400"
                    width="50"
                    height="6"
                    rx="3"
                    fill="#D9EAF7"
                  />

                  {/* Educator Figure */}
                  {/* Hair */}
                  <path
                    d="M140 160 C140 90, 260 90, 260 160 C260 210, 255 240, 255 250 C230 250, 170 250, 145 250 C145 240, 140 210, 140 160 Z"
                    fill="#2C2420"
                  />

                  {/* Head */}
                  <ellipse
                    cx="200"
                    cy="165"
                    rx="45"
                    ry="52"
                    fill="url(#heroSkinGrad)"
                  />
                  {/* Gentle facial features */}
                  <path
                    d="M185 185 Q200 195 215 185"
                    stroke="#9E6B55"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="185" cy="155" r="4" fill="#2C2420" />
                  <circle cx="215" cy="155" r="4" fill="#2C2420" />
                  <path
                    d="M178 145 Q185 142 192 145"
                    stroke="#2C2420"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M208 145 Q215 142 222 145"
                    stroke="#2C2420"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Stethoscope */}
                  <path
                    d="M175 245 C175 300, 225 300, 225 245"
                    stroke="#1677C8"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="200"
                    cy="310"
                    r="12"
                    fill="#58A9E8"
                    stroke="#173653"
                    strokeWidth="3"
                  />

                  {/* Clinical Jacket */}
                  <path
                    d="M130 250 C130 230, 270 230, 270 250 L300 480 L100 480 Z"
                    fill="url(#heroCoatGrad)"
                    stroke="#D9EAF7"
                    strokeWidth="2"
                  />
                  <path
                    d="M170 240 L195 350 L200 480"
                    stroke="#D9EAF7"
                    strokeWidth="2"
                  />
                  <path
                    d="M230 240 L205 350"
                    stroke="#D9EAF7"
                    strokeWidth="2"
                  />
                </svg>

                {/* Understated Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#D9EAF7] rounded-xl p-3 shadow-md">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1677C8] animate-pulse" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#173653]">
                        {data.badge.title}
                      </p>
                      <p className="text-[11px] text-[#526579]">
                        {data.badge.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
