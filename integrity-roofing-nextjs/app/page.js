import Image from "next/image";
import Link from "next/link";
import "./home/homepage.css";
import "./home/homepage-mission.css";
import "./home/where-we-build.css";
import "./home/hp-services.css";


import ServiceCard from "../components/homepageServiceCard/homePageServiceCard.jsx";
import CustomHomeCarousel from "../components/customCarousel/CustomCarousel.jsx";
import Reviews from "../components/customReviewCarousel/CustomReviewCarousel.jsx";
import ContactForm from "../components/contactForm/ContactForm.jsx";


import HeroImage from '../public/images/roof3.jpg';
import GutterImage from '../public/images/img1.jpg';
import NorthCarolina from '../public/images/north-carolina.png';
import MissionImage from '../public/images/opening-photo.png';
import AsphaltShingle from '../public/images/shingle.jpg';
import CedarShake from '../public/images/cedar-shake-standin.jpg';
import GutterGuard from '../public/images/sureflo-gutter-guard.jpg';
import Siding from '../public/images/fiber-cement-siding.jpg';
import MetalRoof from '../public/images/standing-seam-roof.jpg';
import WesternNC from '../public/images/western-nc.png';


function HomePage() {
  return (
    <main>
      <section className="homepage-hero">
              <Image
                src={HeroImage}
                alt="Roofing Hero"
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
              <div className="homepage-text-overlay">
                <h1>Protect Your Biggest Investment.<br />Your Home.</h1>
                <p> Trust our expert roofing team to protect your home with precision and care. We specialize in asphalt shingles, standing seam metal, and cedar shake roofing. </p>
               <Link href="/Contact" className="arrow-btn">
                  Get An Estimate!
                  <span className="arrow-circle">
                    <span className="arrow">&#8594;</span>
                  </span>
                </Link>
              </div>
      
              <div className="hero-columns">
                <ul>
                  <li>Free Estimates</li>
                  <li>Over 100+ Projects Completed</li>
                  <li>Certain-Teed® Certified SingleMasters</li>
                </ul>
                <ul>
                  <li>Over 20 Years Experience</li>
                  <li>Family Owned & Operated</li>
                  <li>Fully Licensed & Insured</li>
                </ul>
                <ul>
                  <li>Financing Available</li>
                  <li>Residential & Commercial</li>
                  <li>Locally Trusted Experts</li>
                </ul>
              </div>
      </section>

      <section className='homepage-mission '>
     
         <div className="mission-image">
          <Image
            src={MissionImage}
            alt="Grand Opening"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        
        <div className='mission-text'>
           <span className="eyebrow">Our Mission</span>
          <h1>Built to Protect What Matters Most</h1>
          <p>Integrity Roofing & Home Improvements was founded with a simple mission: to do right by people. What started as a small word of mouth business has grown into one of North Carolina's most trusted roofing companies. We earn our reputation one home at a time, arriving on schedule, standing by our work, and treating every project as if it were our own. We are not a faceless chain, we are your neighbors, your friends, and the reliable team you can count on whenever your roof needs care.</p>
        </div>
              
      </section>

      <section className="homepage-reviews section-light">
      <Reviews />
      </section>


       <section className='homepage-services section-muted'>
  <h1>Our Services</h1>
  <div className="homepage-services-grid">

    <ServiceCard
      title="Asphalt Shingles"
      subtitle="Certified CertainTeed ShingleMaster Installers"
      description="High-performance architectural asphalt shingles installed to manufacturer specifications. We provide long-lasting protection, enhanced curb appeal, and full warranty-backed craftsmanship."
      backgroundImage={AsphaltShingle}
      href="/Roofing"
      buttonText="Learn More"
    />

    <ServiceCard
      title="Standing Seam Metal Roofing"
      subtitle="Lyon Metal Certified Installer"
      description="Premium standing seam metal roofing systems built for durability, energy efficiency, and modern style. Designed to withstand harsh weather while providing decades of maintenance-free protection."
      backgroundImage={MetalRoof}
      href="/Roofing"
      buttonText="Learn More"
    />

    <ServiceCard
      title="Cedar Shake Roofing"
      subtitle="Natural Beauty. Timeless Performance."
      description="Authentic cedar shake roofing installed with precision craftsmanship. Offers natural insulation, distinctive character, and long-term durability when properly maintained."
      backgroundImage={CedarShake}
      href="/Roofing"
      buttonText="Learn More"
    />

    <ServiceCard
      title="6-Inch Seamless Gutters"
      subtitle="Custom Fabricated On-Site"
      description="Heavy-duty 6-inch seamless gutter systems formed on location for a perfect fit. Designed to improve water flow, reduce leaks, and protect your home’s foundation."
      backgroundImage={GutterImage}
      href="/Gutters"
      buttonText="Learn More"
    />
    
    <ServiceCard
      title="Gutter Guard Systems"
      subtitle="Clog-Free Protection Year-Round"
      description="Professional-grade gutter guard solutions that minimize debris buildup, reduce maintenance, and extend the life of your gutter system."
      backgroundImage={GutterGuard}
      href="/Gutters"
      buttonText="Learn More"
    />
   
    <ServiceCard
      title="Vinyl Siding"
      subtitle="Durable & Energy Efficient Options"
      description="High-quality siding installations that enhance curb appeal, improve insulation, and protect your home from the elements for years to come."
      backgroundImage={Siding}
      href="/Siding"
      buttonText="Learn More"
    />

  </div>
</section>

      <section className="where-we-build-1" >
        <div className="shingle-roofing image-darken" style={{ backgroundImage: `url(${WesternNC.src})` }}>
        <div className="where-we-build-card">
          
          <Image
            src={NorthCarolina}
            alt="Areas We Serve"
            style={{ objectFit: "cover" }}
          />

          <h1>Where We Build</h1>
          <p className="where-intro">
            Integrity Roofing And Home Improvements LLC serves homeowners throughout the High Country of North Carolina. We work in the communities listed below and the surrounding areas.
          </p>
          <ul className="service-area-list">
            <li>Wilkesboro</li>
            <li>North Wilkesboro</li>
            <li>Boone</li>
            <li>Blowing Rock</li>
            <li>Banner Elk</li>
            <li>West Jefferson</li>
            <li>Winston</li>
            <li>Greensboro</li>
            <li>Highpoint</li>
            <li>Deep Gap</li>
            <li>Linville</li>
            <li>Vilas</li>
            <li>Seven Devils</li>
            <li>Sugar Mountain</li>
            <li>Lenoir</li>
            <li>All nearby western North Carolina areas</li>
          </ul>
        </div>
        </div>
      </section>

      
     


      <section className='homepage-carousel'>
        <CustomHomeCarousel /> 
      </section>


      <section className="contact-us-home">
        <div className="text-heading">
          <h1>Contact Us</h1>
        </div>
       <ContactForm />
       <hr></hr>
      </section>

    </main>
  );
}

export default HomePage;
