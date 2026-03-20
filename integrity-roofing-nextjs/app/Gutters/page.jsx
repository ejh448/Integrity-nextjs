import Image from "next/image";
import Link from "next/link";
import GuttersHeroImage from "../../public/images/gutters-hero.jpg";
import "./gutters-hero.css";
import "./gutters-page.css";
import "./gutters-mission.css";

import GutterImage from "../../public/images/gutters-hero.jpg";
import GutterGuard from "../../public/images/sureflo-gutter-guard.jpg";
import SeamlessGutters from "../../public/images/seamless-gutters.jpg";
import SoffitImage from "../../public/images/soffit.jpg";
import GutterColors from "../../public/images/colors.png";
import Financing from "../../public/images/financing-stock.jpg";
import Contact from "../../components/contactForm/ContactForm"
function GuttersPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="gutters-page-hero">
        <Image
          src={GuttersHeroImage}
          alt="Seamless Gutters Hero Image"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="gutters-page-text-overlay">
          <h1>6-Inch Seamless Gutters Built On-Site</h1>
          <p>
            Protect your foundation, manage heavy rainfall, and enjoy long-lasting
            performance with clean, seamless gutters.
          </p>
          <p className="gutters-page-hero-sub">
            Seamless. Better flow. Exceptional protection.
          </p>
            <Link href="/Contact" className="arrow-btn">
            Inquire About Our Gutter Services<span className="arrow-circle"><span className="arrow">&#8594;</span></span>
          </Link>
        </div>
      </section>

      <section className="gutters-mission uniform-text-size gutter-services" >
        <div className="gutters-mission-content image-darken"  style={{ backgroundImage: `url(${GutterImage.src})` }}>
          <h2 className="eyebrow">Seamless Gutter Installation</h2>
          <h4>
            Your gutter system is your home's first line of defense against water
            damage. Our 6-inch seamless aluminum gutters are custom-formed on-site
            to fit your roofline perfectly, eliminating leaks and improving appearance.
          </h4>
        </div>

        
          <div className="gutters-mission-content image-darken"  style={{ backgroundImage: `url(${SeamlessGutters.src})` }}>  
            <h3 className="eyebrow">Custom Gutters Formed On-Site</h3>
            <ul>
              <li>Seamless means less leak points</li>
              <li>Clean, professional appearance</li>
              <li>Exact fit for your home</li>
              <li>Durable 6-inch system for heavy rain</li>
            </ul>

            <Link href="/Contact" className="arrow-btn">
            Schedule New Gutters Today!<span className="arrow-circle"><span className="arrow">&#8594;</span></span>
          </Link>
          </div>
          
          <div className="gutters-mission-content image-darken"  style={{ backgroundImage: `url(${GutterGuard.src})` }}>
            <h3 className="eyebrow" >Shur Flo Gutter Guards</h3>
            <p>
              Reduce maintenance and prevent clogs with our premium Sure Flo guards.
            </p>
            <ul>
              <li>Prevents debris buildup</li>
              <li>Ensures free water flow</li>
              <li>Extends gutter lifespan</li>
            </ul>
            <Link href="/Contact" className="arrow-btn">
            Schedule Consultation <span className="arrow-circle"><span className="arrow">&#8594;</span></span>
          </Link>
          </div>

          <div className="gutters-mission-content image-darken"  style={{ backgroundImage: `url(${SoffitImage.src})` }}>
            <h3 className="eyebrow">Additional Services</h3>
            <ul>
              <li>Fascia board installation & repair</li>
              <li>Drip edge installation</li>
              <li>Soffit installation & replacement</li>
              <li>Downspout installation</li>
              <li>Gutter repairs & replacements</li>
            </ul>
            <Link href="/Contact" className="arrow-btn">
            Inquire about our services <span className="arrow-circle"><span className="arrow">&#8594;</span></span>
          </Link>
          </div>
          
          <div className="gutters-mission-content image-darken"  style={{ backgroundImage: `url(${GutterColors.src})` }}>
            <h3 className="eyebrow">Gutter Colors</h3>
            <p>White, Black, Brown (special orders available for custom colors)</p>
            <Link href="/Contact" className="arrow-btn">
            Check Out Colors <span className="arrow-circle"><span className="arrow">&#8594;</span></span>
          </Link>
          </div>
          
          <div className="gutters-mission-content image-darken"  style={{ backgroundImage: `url(${Financing.src})` }}>

            <h3 className="eyebrow">Free Estimates & Financing</h3>
            <p>
              We offer free on-site evaluations, professional installation, and financing
              options to make upgrading your gutter system simple and affordable.
            </p>
            <Link href="/Contact" className="arrow-btn">
            Get An Estimate! <span className="arrow-circle"><span className="arrow">&#8594;</span></span>
          </Link>
          </div>
      </section>

      {/* CTA Section */}
      <section className="gutters-cta uniform-text-size">
        <div >
          <h2>Request Your Free Gutter Estimate Today</h2>
          
          <Contact></Contact>
        </div>
      </section>
    </main>
  );
}

export default GuttersPage;