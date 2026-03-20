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

// SEO metadata for Roofing Page
export const metadata = {
  title: "Roofing Services in North Wilkesboro | Integrity Roofing & Home Improvements LLC",
  description: "Integrity Roofing & Home Improvements LLC provides expert roof repairs, roof replacements, asphalt shingles, cedar shake, standing seam metal roofing, and roof inspections. Trusted local roofers near me in North Wilkesboro and surrounding western North Carolina.",
  keywords: [
    "roofers near me",
    "roofing companies near me",
    "roof repair North Wilkesboro",
    "roof replacement NC",
    "asphalt shingles installation",
    "cedar shake roofing",
    "standing seam metal roofing",
    "roof inspections western North Carolina",
    "residential roofing",
    "commercial roofing",
    "Integrity Roofing & Home Improvements",
    "local roofing experts NC",
  ],
  author: "Integrity Roofing & Home Improvements LLC",
  robots: "index, follow",
  canonical: "https://www.integrityroofinghomeimprovement.com/Roofing",
  
  openGraph: {
    title: "Roofing Services in North Wilkesboro | Integrity Roofing & Home Improvements LLC",
    description: "Expert roof inspections, repairs, and replacements in North Wilkesboro and surrounding areas. We specialize in asphalt shingles, cedar shake, and standing seam metal roofing. Trusted local roofers near me.",
    url: "https://www.integrityroofinghomeimprovement.com/Roofing",
    siteName: "Integrity Roofing & Home Improvements LLC",
    images: [
      {
        url: "https://www.integrityroofinghomeimprovement.com/images/roofing-hero2.jpg",
        width: 1200,
        height: 630,
        alt: "Roofing Services Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing Services in North Wilkesboro | Integrity Roofing & Home Improvements LLC",
    description: "Professional roof repairs, replacements, and inspections with asphalt shingles, cedar shake, and metal roofing. Trusted local roofers near me in western North Carolina.",
    images: [
      "https://www.integrityroofinghomeimprovement.com/images/roofing-hero2.jpg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL("https://www.integrityroofinghomeimprovement.com"),
};

export default function RoofingLayout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Ldscript />
    </>
  );
}