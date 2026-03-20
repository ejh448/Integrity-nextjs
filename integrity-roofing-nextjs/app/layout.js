import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Ldscript from "../components/ldScript/ldSeoScript";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import FloatingBanner from "@/components/floatingbanner/floatingbanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO-optimized metadata
export const metadata = {
  title: "Integrity Roofing & Home Improvements LLC | Roofers Near Me in NC",
  description: "Integrity Roofing & Home Improvements LLC provides expert residential and commercial roofing in North Wilkesboro, Boone, and surrounding areas. Asphalt shingles, cedar shake, standing seam metal roofs, gutters, siding, and more. Trusted local roofers near me for over 20 years.",
  keywords: [
    "roofers near me",
    "roofing companies near me",
    "residential roofing NC",
    "commercial roofing North Carolina",
    "asphalt shingle roofing",
    "cedar shake roofing",
    "metal roofing installers",
    "gutter installation",
    "seamless gutters NC",
    "vinyl siding installation",
    "roof repair near me",
    "roof replacement North Wilkesboro",
    "Integrity Roofing & Home Improvements",
  ],
  openGraph: {
    title: "Integrity Roofing & Home Improvements LLC | Roofers Near Me in NC",
    description: "Expert roofing services in North Wilkesboro, Boone, and surrounding areas. Asphalt shingles, cedar shake, metal roofs, gutters, siding. Trusted local roofing company serving western North Carolina.",
    url: "https://www.integrityroofinghomeimprovement.com",
    siteName: "Integrity Roofing & Home Improvements",
    images: [
      {
        url: "https://www.integrityroofinghomeimprovement.com/images/roof3.jpg",
        width: 1200,
        height: 630,
        alt: "Expert Roofing Services in North Carolina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrity Roofing & Home Improvements LLC | Roofers Near Me in NC",
    description: "Trusted local roofing company providing asphalt shingles, cedar shake, metal roofing, gutters, and siding throughout North Wilkesboro, Boone, and western North Carolina.",
    images: [
      "https://www.integrityroofinghomeimprovement.com/images/roof3.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navigation />
        <main>{children}</main>
        <Ldscript />
        <FloatingBanner />
        <Footer />
      </body>
    </html>
  );
}