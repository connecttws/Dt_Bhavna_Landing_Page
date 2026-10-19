import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dt. Bhavna Bhanushali · Diabetes Educator & Health Coach",
  description:
    "Personalised diabetes nutrition and lifestyle guidance through the Reset Blueprint by Dt. Bhavna Bhanushali. Sustainable habits for blood sugar management.",
  openGraph: {
    title: "Dt. Bhavna Bhanushali · Diabetes Educator & Health Coach",
    description:
      "Personalised diabetes nutrition and lifestyle guidance through the Reset Blueprint by Dt. Bhavna Bhanushali.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dt. Bhavna Bhanushali · Diabetes Educator & Health Coach",
    description:
      "Personalised diabetes nutrition and lifestyle guidance through the Reset Blueprint by Dt. Bhavna Bhanushali.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="bg-white text-[#526579] font-sans antialiased selection:bg-[#EAF6FF] selection:text-[#173653] min-h-screen">
        {children}
        <Script
          src="/crm-lead-tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
