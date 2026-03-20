'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import "./customcarousel.css";

import workImage from "../../public/images/dons-hero.jpg";

const defaultSlides = [
  { image: workImage, caption: "Asphalt Shingle Roof Replacement – Wilkes County" },
  { image: workImage, caption: "Standing Seam Metal Roof Installation" },
  { image: workImage, caption: "Cedar Shake Roof Restoration" },
  { image: workImage, caption: "6” Seamless Gutter System Installation" }
];

export default function CustomHomeCarousel({ images }) {

  const slides = images?.length ? images : defaultSlides;

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="carousel-section">

      <div className="carousel-header">
        <span className="carousel-eyebrow">Our Work</span>
        <h2>Built Right. Built to Last.</h2>
        <p>A look at recent roofing and exterior projects completed by our team.</p>
      </div>

      <div className="carousel-container">

        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="carousel-slide" key={i}>
              <Image
                src={slide.image}
                alt={slide.caption}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />

              <div className="carousel-caption">
                {slide.caption}
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow left" onClick={prev}>‹</button>
        <button className="carousel-arrow right" onClick={next}>›</button>

      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </section>
  );
}