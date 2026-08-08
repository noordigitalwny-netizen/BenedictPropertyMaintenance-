import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benedict Property Maintenance | Exterior Cleaning, Lawn Care & Seasonal Maintenance WNY",
  description: "Premier exterior power washing, house soft washing, lawn care, and year-round seasonal maintenance in all of Western New York (WNY). Call 585-813-4445 for a free quote!",
  keywords: ["Benedict Property Maintenance", "Exterior Cleaning WNY", "Power Washing Rochester NY", "Lawn Care Western NY", "Seasonal Maintenance", "Gutter Cleaning", "Snow Removal WNY"],
  authors: [{ name: "Benedict Property Maintenance" }],
  openGraph: {
    title: "Benedict Property Maintenance - Exterior Cleaning & Lawn Care WNY",
    description: "Professional exterior power washing, lawn care, and year-round property protection in Western New York. Call 585-813-4445.",
    url: "https://benedictproperty.com",
    siteName: "Benedict Property Maintenance",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-slate-100">{children}</body>
    </html>
  );
}

