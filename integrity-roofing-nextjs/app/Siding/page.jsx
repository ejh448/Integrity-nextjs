import Image from "next/image";
import Link from "next/link";
import SidingHeroImage from "../../public/images/siding-1.jpeg";
import "./siding-hero.css";
import "./siding-page.css";
import "./siding-mission.css";

import VinylSiding from "../../public/images/siding-1.jpeg";
import StarterStrip from "../../public/images/siding-2.jpg";
import SoffitImage from "../../public/images/soffit.jpg";
import SidingTrim from "../../public/images/siding-3.jpg";
import SidingColors from "../../public/images/siding-4.jpg";
import Financing from "../../public/images/financing-stock.jpg";

import Contact from "../../components/contactForm/ContactForm";

function SidingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="siding-hero">
        <Image
          src={SidingHeroImage}
          alt="Norandex Vinyl Siding Installation"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />

        <div className="siding-text-overlay">
          <h1>Norandex Vinyl Siding Installation</h1>

          <p>
            Upgrade your home's exterior with durable, low-maintenance Norandex
            vinyl siding designed for long-term protection and beautiful curb appeal.
          </p>

          <p className="siding-hero-sub">
            Durable. Weather resistant. Professionally installed.
          </p>

          <Link href="/Contact" className="arrow-btn">
            Get An Estimate!{" "}
            <span className="arrow-circle">
              <span className="arrow">&#8594;</span>
            </span>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="siding-mission uniform-text-size siding-services">

        {/* Vinyl Siding */}
        <div
          className="siding-mission-content image-darken"
          style={{ backgroundImage: `url(${VinylSiding.src})` }}
        >
          <h2 className="eyebrow">Norandex Vinyl Siding</h2>

          <h4>
            Norandex vinyl siding provides long-lasting protection while giving
            your home a modern, clean appearance. Built to resist fading,
            cracking, and weather damage, it delivers reliable performance with
            very little maintenance.
          </h4>

          <Link href="/Contact" className="arrow-btn">
            Get An Estimate!{" "}
            <span className="arrow-circle">
              <span className="arrow">&#8594;</span>
            </span>
          </Link>
        </div>

        {/* Starter Strip */}
        <div
          className="siding-mission-content image-darken"
          style={{ backgroundImage: `url(${StarterStrip.src})` }}
        >
          <h3 className="eyebrow">Starter Strip Installation</h3>

          <ul>
            <li>Foundation for proper siding alignment</li>
            <li>Ensures straight and secure first row</li>
            <li>Allows vinyl expansion and contraction</li>
            <li>Critical for long-term siding performance</li>
          </ul>
           <Link href="/Contact" className="arrow-btn">
            Get An Estimate!{" "}
            <span className="arrow-circle">
              <span className="arrow">&#8594;</span>
            </span>
          </Link>
        </div>

        {/* Soffit */}
        <div
          className="siding-mission-content image-darken"
          style={{ backgroundImage: `url(${SoffitImage.src})` }}
        >
          <h3 className="eyebrow">Soffit & Ventilation</h3>

          <p>
            Proper soffit installation improves airflow through your attic and
            protects exposed roof framing while giving your roofline a clean
            finished appearance.
          </p>

          <ul>
            <li>Improves attic ventilation</li>
            <li>Prevents moisture buildup</li>
            <li>Protects roof overhangs</li>
          </ul>

           <Link href="/Contact" className="arrow-btn">
            Get An Estimate!{" "}
            <span className="arrow-circle">
              <span className="arrow">&#8594;</span>
            </span>
          </Link>
        </div>

        {/* Trim and Finishing */}
        <div
          className="siding-mission-content image-darken"
          style={{ backgroundImage: `url(${SidingTrim.src})` }}
        >
          <h3 className="eyebrow">Trim & Finishing Components</h3>

          <ul>
            <li>J-channel around windows and doors</li>
            <li>Inside and outside corner posts</li>
            <li>Utility trim and connectors</li>
            <li>Flashing and weatherproof sealing</li>
          </ul>

           <Link href="/Contact" className="arrow-btn">
            Get An Estimate!{" "}
            <span className="arrow-circle">
              <span className="arrow">&#8594;</span>
            </span>
          </Link>
        </div>

        {/* Colors */}
        <div
          className="siding-mission-content image-darken"
          style={{ backgroundImage: `url(${SidingColors.src})` }}
        >
          <h3 className="eyebrow">Vinyl Siding Colors</h3>

          <p>
            Norandex siding is available in a wide variety of fade-resistant
            colors and textures designed to match nearly any home style.
          </p>

           <Link href="/Contact" className="arrow-btn">
            Get An Estimate!{" "}
            <span className="arrow-circle">
              <span className="arrow">&#8594;</span>
            </span>
          </Link>
        </div>

        {/* Estimates */}
        <div
          className="siding-mission-content image-darken"
          style={{ backgroundImage: `url(${Financing.src})` }}
        >
          <h3 className="eyebrow">Free Estimates & Financing</h3>

          <p>
            We provide free siding inspections and detailed estimates to help
            homeowners choose the best exterior solution for their property.
            Financing options are available to make upgrading your home easier.
          </p>

           <Link href="/Contact" className="arrow-btn">
            Get An Estimate!{" "}
            <span className="arrow-circle">
              <span className="arrow">&#8594;</span>
            </span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}

      <section className="siding-cta uniform-text-size">
        <div className="request-h2">
          <h2>Request Your Free Siding Estimate Today</h2>
        </div>
          <Contact></Contact>
        
      </section>
    </main>
  );
}

export default SidingPage;