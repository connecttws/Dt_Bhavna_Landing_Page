"use client";

import { useState, useEffect } from "react";
import { X, Calendar, CheckCircle2, ArrowRight, Mail, Phone, User, Loader2 } from "lucide-react";
import { ConsultationRequest } from "@/types";
import { validateConsultationRequest } from "@/utils/scheduler";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState<Partial<ConsultationRequest>>({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "Morning (10:00 AM - 1:00 PM)",
    notes: "",
  });

  useEffect(() => {
    if (isOpen && !formData.date) {
      setFormData((prev) => ({
        ...prev,
        date: new Date().toISOString().split("T")[0],
      }));
    }
  }, [isOpen, formData.date]);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateConsultationRequest(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      // Send to server API if available
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Even if offline or mock, proceed to confirmation
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#173653]/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-[#D9EAF7] overflow-hidden text-[#173653] my-auto">
        {/* Modal Header */}
        <div className="bg-[#F4FAFF] border-b border-[#D9EAF7] px-5 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-[#173653]">
              Book Your Consultation
            </h3>
            <p className="text-xs text-[#526579] mt-0.5">
              Personalised nutrition & lifestyle guidance with Dt. Bhavna
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#526579] hover:text-[#173653] hover:bg-white transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4" id="consultation-booking-form">
              <p className="text-xs sm:text-sm text-[#526579] leading-relaxed">
                Please share your contact details and preferred consultation window. We will reach out to confirm your session.
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#173653] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#526579] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Enter your name"
                    className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#1677C8] ${
                      errors.fullName
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#D9EAF7]"
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-red-500 mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#173653] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#526579] absolute left-3 top-2.5" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@example.com"
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#1677C8] ${
                        errors.email
                          ? "border-red-400 bg-red-50/20"
                          : "border-[#D9EAF7]"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#173653] mb-1">
                    Contact Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#526579] absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Phone or WhatsApp"
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#1677C8] ${
                        errors.phone
                          ? "border-red-400 bg-red-50/20"
                          : "border-[#D9EAF7]"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#173653] mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#526579] absolute left-3 top-2.5" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-[#D9EAF7] bg-white focus:outline-none focus:ring-2 focus:ring-[#1677C8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#173653] mb-1">
                    Preferred Time of Day
                  </label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={(e) =>
                      setFormData({ ...formData, timeSlot: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-xl border border-[#D9EAF7] bg-white focus:outline-none focus:ring-2 focus:ring-[#1677C8]"
                  >
                    <option>Morning (10:00 AM - 1:00 PM)</option>
                    <option>Afternoon (2:00 PM - 5:00 PM)</option>
                    <option>Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#173653] mb-1">
                  Health Goals & Current Routine (Optional)
                </label>
                <textarea
                  rows={2}
                  name="notes"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Share any specific nutrition questions or routines you would like to discuss..."
                  className="w-full px-3 py-2 text-sm rounded-xl border border-[#D9EAF7] bg-white focus:outline-none focus:ring-2 focus:ring-[#1677C8]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-[#1677C8] hover:bg-[#1264a9] text-white font-semibold text-sm rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-75"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-[#526579] pt-1">
                Your details are kept strictly confidential. No spam or extreme dieting advice.
              </p>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#EAF6FF] text-[#1677C8] flex items-center justify-center mx-auto border border-[#D9EAF7]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#173653]">
                  Consultation Request Received
                </h4>
                <p className="text-sm text-[#526579] mt-2 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Dt. Bhavna&apos;s team will contact you directly via email ({formData.email}) or phone to coordinate the consultation schedule.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#1677C8] hover:bg-[#1264a9] text-white font-semibold text-sm rounded-xl transition cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
