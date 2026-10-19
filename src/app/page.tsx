"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VSLSection } from "@/components/VSLSection";
import { HealthRisksSection } from "@/components/HealthRisksSection";
import { SupportSection } from "@/components/SupportSection";
import { AboutSection } from "@/components/AboutSection";
import { BlueprintStepsSection } from "@/components/BlueprintStepsSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { VideoModal } from "@/components/VideoModal";
import { BookingModal } from "@/components/BookingModal";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import contentData from "../../visual-data/content.json";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Central consultation CTA handler:
  // If external bookingUrl is defined (e.g. Calendly/WhatsApp), navigate to it; otherwise open built-in modal
  const handleOpenBooking = () => {
    if (contentData.site.bookingUrl) {
      window.location.href = contentData.site.bookingUrl;
      return;
    }
    setIsBookingOpen(true);
  };

  const handleScrollToVideo = () => {
    const el = document.getElementById("vsl");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#526579] font-sans antialiased selection:bg-[#EAF6FF] selection:text-[#173653] pb-14 sm:pb-0">
      {/* ================= SECTION 1: HEADER & NAVIGATION ================= */}
      <Header
        data={contentData.nav}
        site={contentData.site}
        onOpenBooking={handleOpenBooking}
      />

      <main>
        {/* ================= SECTION 2: HERO SECTION ================= */}
        <Hero
          data={contentData.hero}
          onOpenBooking={handleOpenBooking}
          onScrollToVideo={handleScrollToVideo}
        />

        {/* ================= SECTION 3: VSL VIDEO SECTION ================= */}
        <VSLSection
          data={contentData.vsl}
          site={contentData.site}
          onOpenBooking={handleOpenBooking}
          onOpenVideoModal={() => setIsVideoOpen(true)}
        />

        {/* ================= SECTION 4: HEALTH RISKS ================= */}
        <HealthRisksSection data={contentData.healthRisks} />

        {/* ================= SECTION 5: PERSONALISED SUPPORT & LIFESTYLE ================= */}
        <SupportSection
          data={contentData.support}
          onOpenBooking={handleOpenBooking}
        />

        {/* ================= SECTION 6: MEET DT. BHAVNA BHANUSHALI ================= */}
        <AboutSection
          data={contentData.about}
          site={contentData.site}
          onOpenBooking={handleOpenBooking}
        />

        {/* ================= SECTION 7: RESET BLUEPRINT JOURNEY ================= */}
        <BlueprintStepsSection data={contentData.blueprintSteps} />

        {/* ================= SECTION 8: FREQUENTLY ASKED QUESTIONS ================= */}
        <FaqSection data={contentData.faq} />

        {/* ================= SECTION 9: FINAL CONSULTATION CTA ================= */}
        <FinalCtaSection
          data={contentData.finalCta}
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* ================= SECTION 10: FOOTER ================= */}
      <Footer data={contentData.footer} site={contentData.site} />

      {/* ================= MOBILE STICKY ACTION BAR ================= */}
      <MobileStickyBar onOpenBooking={handleOpenBooking} />

      {/* ================= VSL VIDEO PRESENTATION MODAL ================= */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onBookNow={() => {
          setIsVideoOpen(false);
          handleOpenBooking();
        }}
        site={contentData.site}
      />

      {/* ================= CONSULTATION SCHEDULER MODAL ================= */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
