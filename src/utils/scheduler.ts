import { ConsultationRequest, ValidationResult } from '@/types';

export function validateConsultationRequest(req: Partial<ConsultationRequest>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!req.fullName || req.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name';
  }

  if (!req.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!req.phone || req.phone.replace(/\D/g, '').length < 8) {
    errors.phone = 'Please provide a valid contact number';
  }

  if (!req.date) {
    errors.date = 'Please select a preferred consultation date';
  }

  if (!req.timeSlot) {
    errors.timeSlot = 'Please select a time slot';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatAppointmentSummary(req: ConsultationRequest): string {
  return `Consultation booked with Dt. Bhavna Bhanushali on ${req.date} at ${req.timeSlot} for ${req.fullName.trim()}.`;
}
