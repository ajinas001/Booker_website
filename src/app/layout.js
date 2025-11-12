
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/LenisWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Title structure for better SEO and page navigation
  title: {
    default: "Booker Accounting & Consulting",
    template: "%s | Booker Accounting and Consulting",
  },
  // Detailed description to appear in search results
  description: "Booker Accounting and Consulting provides expert bookkeeping, tax compliance, and strategic financial advisory services to help businesses build a balanced and brilliant financial future.",
  // Keywords for search engines
  keywords: [
    "Bookkeeping Services",
    "Financial Advisory",
    "Tax Compliance",
    "Business Accounting",
    "Booker Accounting and Consulting",
    "Dubai Accounting Firm",
    "UAE Business Setup"
  ],
  // Open Graph metadata for social media sharing previews
  openGraph: {
    title: "Booker Accounting and Consulting | Build, Balance, Brilliance",
    description: "Booker Accounting and Consulting provides expert bookkeeping, tax compliance, and strategic financial advisory services to help businesses build a balanced and brilliant financial future.",
    url: "https://bookeraccounting.com", // Placeholder URL based on company name
    siteName: "Booker Accounting and Consulting",
    locale: "en_US",
    type: "website",
  },
  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "Booker Accounting | Bookkeeping & Consulting",
    description: "Expert bookkeeping, tax compliance, and strategic financial advisory services in the UAE.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          font-sans 
          antialiased
        `}
        style={{
          fontFamily: '"cordiau", var(--font-geist-sans), sans-serif',
        }}
      >
        <LenisWrapper>
          {children}
        </LenisWrapper>
        
      </body>
    </html>
  );
}
