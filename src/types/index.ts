export interface SiteConfig {
  practitionerName: string;
  subtitle: string;
  experience: string;
  contactEmail: string;
  primaryPhone: string;
  signatureStatement: string;
  bookingUrl: string;
  vslVideoUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavData {
  links: NavLink[];
  ctaText: string;
}

export interface HeroData {
  eyebrow: string;
  headline: {
    main: string;
    highlight: string;
  };
  description: string;
  points: string[];
  primaryCta: string;
  secondaryCta: string;
  badge: {
    title: string;
    subtitle: string;
  };
}

export interface VslBenefit {
  title: string;
}

export interface VslData {
  eyebrow: string;
  headline: string;
  description: string;
  placeholderTitle: string;
  placeholderSubtitle: string;
  ctaText: string;
  benefits: VslBenefit[];
}

export interface HealthImpact {
  title: string;
  desc: string;
  fullWidth?: boolean;
}

export interface HealthRisksData {
  eyebrow: string;
  headline: string;
  description: string;
  calloutBox: string;
  impacts: HealthImpact[];
}

export interface SupportArea {
  step: string;
  title: string;
  desc: string;
  badge?: string;
  tag?: string;
  wide?: boolean;
}

export interface SupportData {
  eyebrow: string;
  headline: string;
  description: string;
  subtext: string;
  ctaText: string;
  areas: SupportArea[];
}

export interface AboutData {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  signature: string;
  commitments: string[];
  ctaText: string;
}

export interface BlueprintStep {
  number: string;
  title: string;
  desc: string;
}

export interface BlueprintStepsData {
  eyebrow: string;
  headline: string;
  description: string;
  steps: BlueprintStep[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  eyebrow: string;
  headline: string;
  items: FaqItem[];
}

export interface FinalCtaData {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  ctaText: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterData {
  quickLinks: FooterLink[];
  policies: FooterLink[];
  copyright: string;
  disclaimer: string;
}

export interface ContentData {
  site: SiteConfig;
  nav: NavData;
  hero: HeroData;
  vsl: VslData;
  healthRisks: HealthRisksData;
  support: SupportData;
  about: AboutData;
  blueprintSteps: BlueprintStepsData;
  faq: FaqData;
  finalCta: FinalCtaData;
  footer: FooterData;
}

export interface ConsultationRequest {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}
