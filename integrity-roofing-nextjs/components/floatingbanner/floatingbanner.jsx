"use client";
import { useState, useEffect } from "react";

export default function FloatingBanner() {
  const [visible, setVisible] = useState(false); // start hidden
  let scrollTimeout = null;

  useEffect(() => {
    // Delay showing the banner initially (random 5–10s)
    const initialDelay = Math.random() * 5000 + 5000;
    const showTimeout = setTimeout(() => setVisible(true), initialDelay);

    const handleScroll = () => {
      setVisible(false);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setVisible(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(showTimeout);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  const handleClose = () => setVisible(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        zIndex: 9999,
        maxWidth: "90vw",
      }}
    >  
      {/* Close button */}
      <button
        onClick={handleClose}
        style={{
          position: "absolute",
          top: "1px",
          right: "1px",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "1.2rem",
          fontWeight: "bold",
          cursor: "pointer",
          zIndex: 10,
        }}
        aria-label="Close banner"
      >
        ×
      </button>

      <a
        href="https://app.gethearth.com/partners/integrity-roofing-home-improvements-llc?utm_campaign=59897&utm_content=darkblue&utm_medium=contractor-website&utm_source=contractor&utm_term=700x110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://app.gethearth.com/contractor_images/integrity-roofing-home-improvements-llc/banner.jpg?color=darkblue&size_id=700x110"
          alt="Hearth 700x110"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "700px",
            display: "block",
          }}
        />
      </a>
    </div>
  );
}