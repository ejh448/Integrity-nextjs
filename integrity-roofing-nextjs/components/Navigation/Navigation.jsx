"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import "./navigation.css";

import Logo from "../../public/images/integrity-logo-white.png";

function Navigation() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [mounted, setMounted] = useState(false);

  const links = [
   
    { name: "Roofing", path: "/Roofing" },
    { name: "Gutters", path: "/Gutters" },
    { name: "Siding", path: "/Siding" },
   /* { name: "Gallery", path: "/project-gallery" },
    { name: "All Services", path: "/services" },
    */ 
    { name: "Financing", path: "https://app.gethearth.com/partners/integrity-roofing-home-improvements-llc/jody/apply" },
    { name: "Contact", path: "/Contact" },
  ];

  // Fade in on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Hide nav on scroll down
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScrollTop) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${mounted ? "navbar-visible" : ""} ${
        scrollingDown ? "hidden" : ""
      }`}
    >
      <div className="nav-inner">
        {/* LEFT: Logo */}
        <Link
          href="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={Logo}
            alt="Integrity Roofing Logo"
            className="logo-img"
            priority
          />
        </Link>

        {/* CENTER: Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* RIGHT: Phone */}
        <a href="tel:3368188220" className="nav-phone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            style={{ marginRight: "8px", verticalAlign: "middle" }}
          >
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.67.76 3.88.14.28.07.62-.21 1.11l-2.2 2.2z" />
          </svg>
          (336) 818-8220
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
