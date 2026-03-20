// Import Next.js Script component
import Script from "next/script";

export default function LocalBusinessStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Integrity Roofing & Home Improvements LLC",
    "image": "https://www.integrityroofinghomeimprovement.com/images/logo.png",
    "@id": "https://www.integrityroofinghomeimprovement.com",
    "url": "https://www.integrityroofinghomeimprovement.com",
    "telephone": "+13368182880",
    "email": "info@integrityroofinghomeimprovement.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "513 Cherry St",
      "addressLocality": "North Wilkesboro",
      "addressRegion": "NC",
      "postalCode": "28659",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.1453,  // replace with actual coordinates
      "longitude": -81.1507
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourpage",
      "https://www.linkedin.com/company/yourpage"
    ],
    "areaServed": [
      "Wilkesboro, NC",
      "North Wilkesboro, NC",
      "Boone, NC",
      "Blowing Rock, NC",
      "Banner Elk, NC",
      "West Jefferson, NC",
      "Greensboro, NC",
      "Highpoint, NC",
      "Deep Gap, NC",
      "Linville, NC",
      "Vilas, NC",
      "Seven Devils, NC",
      "Sugar Mountain, NC",
      "Lenoir, NC",
      "Western North Carolina"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roofing Services",
          "description": "Roof repair, roof replacement, asphalt shingles, cedar shake, standing seam metal roofing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gutter Services",
          "description": "Seamless gutter installation, gutter guards, downspouts, soffit, and fascia."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vinyl Siding Services",
          "description": "Norandex vinyl siding installation, trim, soffit, finishing components, color options."
        }
      }
    ]
  };

  return (
    <Script
      type="application/ld+json"
      id="local-business-jsonld"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}