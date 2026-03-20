'use client';
import { useState, useEffect } from "react";
import "./customReviewCarousel.css";

const reviews = [
  {
    text: "After years of the roof leaking, Integrity Roofing figured it out and no more leaks. Replaced gutters as well. Great craftsmanship all around and cost efficient too.",
    name: "Chad G.",
    rating: 5,
  },
  {
    text: "I had Integrity Roofing do a roof for me and I was very pleased with the job they did. It looks great and the price was very reasonable. They left absolutely no mess behind.",
    name: "Aundra A.",
    rating: 5,
  },
  {
    text: "They arrived first thing as promised and finished my roof in one day. Cleanup was excellent. Very professional and will use again.",
    name: "Scott W.",
    rating: 5,
  },
  {
    text: "New gutters installed in less than a day. Professional, clean, and easy to work with. Best price and great product.",
    name: "Tonya F.",
    rating: 5,
  },
];

export default function CustomReviewCarousel() {
  const [index, setIndex] = useState(0);
  const total = reviews.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const review = reviews[index];

  return (
   <section className="review-carousel-section main-background">
  <div className="review-header">
    <span className="review-eyebrow">Trusted By Homeowners</span>
    <h2 className="review-title">What Our Clients Say</h2>
  </div>

  <div className="review-carousel-container">
    <button
      className="carousel-button left"
      onClick={prev}
      aria-label="Previous review"
    >
      ‹
    </button>

    <div className="review-card">
      <p className="review-text">“{review.text}”</p>

      <div className="review-footer">
        <p className="reviewer">{review.name}</p>
        <p className="stars">
          {"★".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
        </p>
      </div>
    </div>

    <button
      className="carousel-button right"
      onClick={next}
      aria-label="Next review"
    >
      ›
    </button>
  </div>
</section>
  );
}
