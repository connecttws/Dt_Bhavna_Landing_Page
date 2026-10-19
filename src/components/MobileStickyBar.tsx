"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Calendar } from "lucide-react";

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export function MobileStickyBar({ onOpenBooking }: MobileStickyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed sm:hidden bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-[#D9EAF7] z-40 shadow-xl transition-all">
      <button
        onClick={onOpenBooking}
        className="w-full py-3.5 px-4 bg-[#1677C8] active:bg-[#1264a9] text-white font-semibold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition active:scale-98"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Your Consultation</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
