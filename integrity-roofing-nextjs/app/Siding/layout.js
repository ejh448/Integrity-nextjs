// app/siding/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Ldscript from "../../components/ldScript/ldSeoScript";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata for Siding Page
export const metadata = {
  title: "Vinyl Siding Installation in North Wilkesboro | Integrity Roofing & Home Improvements LLC",
  description: "Integrity Roofing & Home Improvements LLC provides expert vinyl siding installation, siding repair, soffit, trim, and finishing components. Upgrade your home's exterior with Norandex siding. Trusted local siding contractors near me in North Wilkesboro and western North Carolina.",
  keywords: [
    "siding near me",
    "vinyl siding installation North Wilkesboro",
    "siding contractors NC",
    "Norandex siding installation",
    "siding repair",
    "soffit installation",
    "trim and finishing components",
    "residential siding services",
    "commercial siding services",
    "Integrity Roofing & Home Improvements",
    "local siding experts NC",
  ],
  author: "Integrity Roofing & Home Improvements LLC",
  robots: "index, follow",
  canonical: "https://www.integrityroofinghomeimprovement.com/Siding",

  openGraph: {
    title: "Vinyl Siding Installation | Integrity Roofing & Home Improvements LLC",
    description: "Expert vinyl siding installation, siding repair, soffit, trim, and finishing components. Trusted local siding contractors near me in North Wilkesboro and western North Carolina.",
    url: "https://www.integrityroofinghomeimprovement.com/Siding",
    siteName: "Integrity Roofing & Home Improvements LLC",
    images: [
      {
        url: "https://www.integrityroofinghomeimprovement.com/images/siding-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Vinyl Siding Installation Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vinyl Siding Installation in North Wilkesboro | Integrity Roofing & Home Improvements LLC",
    description: "Professional vinyl siding installation, repair, soffit, and trim services. Trusted local siding contractors near me in western North Carolina.",
    images: [
      "https://www.integrityroofinghomeimprovement.com/images/siding-1.jpeg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL("https://www.integrityroofinghomeimprovement.com"),
};

export default function SidingLayout({ children }) {
  return (
    <>
        <Navigation />
        <main>{children}</main>
        <Ldscript />
    </>
  );
}