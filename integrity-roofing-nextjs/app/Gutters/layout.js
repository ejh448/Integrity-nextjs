// app/gutters/layout.js
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

// SEO metadata for Gutters Page
export const metadata = {
  title: "Seamless Gutter Installation in North Wilkesboro | Integrity Roofing & Home Improvements LLC",
  description: "Integrity Roofing & Home Improvements LLC provides expert gutter installation, gutter repair, seamless 6-inch gutters, gutter guards, soffit, fascia, and downspout services. Trusted local gutter installers near me in North Wilkesboro and western North Carolina.",
  keywords: [
    "gutters near me",
    "gutter installation North Wilkesboro",
    "seamless gutters NC",
    "gutter guards installation",
    "soffit installation",
    "fascia board repair",
    "downspouts installation",
    "gutter replacement",
    "residential gutter services",
    "commercial gutter services",
    "Integrity Roofing & Home Improvements",
    "local gutter experts NC",
  ],
  author: "Integrity Roofing & Home Improvements LLC",
  robots: "index, follow",
  canonical: "https://www.integrityroofinghomeimprovement.com/Gutters",

  openGraph: {
    title: "Seamless Gutter Installation | Integrity Roofing & Home Improvements LLC",
    description: "Expert seamless gutter installation, gutter repair, gutter guards, soffit, and fascia services. Protect your home with trusted local gutter installers near me in North Wilkesboro and surrounding western North Carolina.",
    url: "https://www.integrityroofinghomeimprovement.com/Gutters",
    siteName: "Integrity Roofing & Home Improvements LLC",
    images: [
      {
        url: "https://www.integrityroofinghomeimprovement.com/images/gutters-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Seamless Gutters Installation Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Seamless Gutter Installation in North Wilkesboro | Integrity Roofing & Home Improvements LLC",
    description: "Professional gutter installation, gutter repair, gutter guards, soffit, and fascia services. Trusted local gutter experts near me in western North Carolina.",
    images: [
      "https://www.integrityroofinghomeimprovement.com/images/gutters-hero.jpg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL("https://www.integrityroofinghomeimprovement.com"),
};

export default function GuttersLayout({ children }) {
  return (
    <>
        <Navigation />
        <main>{children}</main>
    </>
  );
}