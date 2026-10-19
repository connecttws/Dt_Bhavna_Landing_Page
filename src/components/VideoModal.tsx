"use client";

import { useState } from "react";
import { X, Play, Pause, Volume2, VolumeX, ArrowRight, Clock } from "lucide-react";
import { SiteConfig } from "@/types";
import contentData from "../../visual-data/content.json";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
  site?: SiteConfig;
}

export function VideoModal({
  isOpen,
  onClose,
  onBookNow,
  site = contentData.site,
}: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const progress = 25; // 25% preview progress

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#173653]/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#D9EAF7] overflow-hidden text-[#173653] flex flex-col my-auto">
        {/* Header */}
        <div className="bg-[#F4FAFF] border-b border-[#D9EAF7] px-5 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1677C8] animate-pulse" />
            <span className="font-bold text-xs sm:text-sm text-[#173653]">
              Educational Video Presentation · {site.practitionerName}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#526579] hover:text-[#173653] hover:bg-white transition cursor-pointer"
            aria-label="Close video guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Surface */}
        <div className="relative aspect-video w-full bg-[#173653] overflow-hidden flex flex-col justify-between">
          {site.vslVideoUrl ? (
            <iframe
              src={site.vslVideoUrl}
              title="VSL Presentation"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full bg-gradient-to-tr from-[#173653] via-[#1E456A] to-[#2B5885] flex flex-col justify-between p-5 text-white">
              {/* Subtle top indicator */}
              <div className="flex justify-between items-center text-xs text-[#B9E3FF]">
                <span className="bg-white/10 px-2.5 py-1 rounded-md backdrop-blur-xs">
                  Clinical Overview Guide
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  10 Minutes
                </span>
              </div>

              {/* Center Play Graphic */}
              <div className="text-center my-auto">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1677C8] hover:bg-[#58A9E8] text-white flex items-center justify-center shadow-xl transition-all mx-auto cursor-pointer"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 sm:w-8 sm:h-8" />
                  ) : (
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 translate-x-0.5 fill-current" />
                  )}
                </button>
                <h4 className="mt-4 font-bold text-base sm:text-lg text-white">
                  Discover a More Practical Approach to Diabetes Management
                </h4>
                <p className="text-xs text-[#B9E3FF] mt-1">
                  With {site.practitionerName} ({site.subtitle})
                </p>
              </div>

              {/* Bottom Scrubber */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 space-y-2">
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#58A9E8] transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-[#EAF6FF]">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-current" />
                      )}
                    </button>
                    <button onClick={() => setIsMuted(!isMuted)}>
                      {isMuted ? (
                        <VolumeX className="w-3.5 h-3.5" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <span className="font-mono text-[11px]">02:30 / 10:00</span>
                  </div>
                  <span className="text-[11px] text-[#B9E3FF]">
                    {isPlaying ? "Playing Presentation" : "Paused"}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Video Key Takeaways & Direct CTA */}
        <div className="p-5 sm:p-6 bg-white space-y-4">
          <div className="space-y-1.5">
            <h5 className="font-bold text-sm text-[#173653]">
              Presentation Summary
            </h5>
            <p className="text-xs sm:text-sm text-[#526579] leading-relaxed">
              In this video guide, Dt. Bhavna explains how balanced macronutrient combinations, practical meal timing, and gentle daily routines support consistent blood sugar management without extreme caloric deprivation.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#D9EAF7]">
            <p className="text-xs text-[#526579]">
              Ready to explore your personalised lifestyle blueprint?
            </p>
            <button
              onClick={() => {
                onClose();
                onBookNow();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#1677C8] hover:bg-[#1264a9] text-white font-semibold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Your Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
