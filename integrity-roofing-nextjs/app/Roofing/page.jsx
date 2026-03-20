import heroImage from '../../public/images/roofing-hero2.jpg';
import Image from 'next/image';
import Link from 'next/link';
import CustomHomeCarousel from '../../components/customCarousel/CustomCarousel.jsx';
import ContactForm from '../../components/contactForm/ContactForm.jsx';
import "./missionpage.css";
import "./roofing-styles.css";
import "./roofing-page-hero.css";
import "./roofing-page-mission.css"; 
import "./roofing-services.css"; // Main Services Section


import roofRepairImage from '../../public/images/roof-repair1.png';
import roofReplacementImage from '../../public/images/roof-replacement.jpg';
import shingleMaster from '../../public/images/shingle-master-premier.png';
import standinshingle from '../../public/images/standin-shingle.jpg';
import standingSeam from '../../public/images/standing-seam-roof.jpg';
import roofRepairReplacement from '../../public/images/stock-shingle.jpg';

import bbb from '../../public/images/better-business-bureau.png';
import financing from '../../public/images/financing-by-hearth.png'

function RoofingPage() {
  return (
    <main>
      <section className="roofing-page-hero">
        <Image
          src={heroImage}
          alt="Roofing Hero"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="roofing-page-text-overlay">
          <h1>Your Roof, Our Expertise</h1>
          <p>Your home is your most important investment. Protect it with expert roofing services. We work with asphalt shingles, metal, and cedar shake to deliver lasting durability, quality craftsmanship, and peace of mind for your family.</p>
         <Link href="/Contact" className="arrow-btn">
            Get An Estimate! <span className="arrow-circle"><span className="arrow">&#8594;</span></span>
          </Link>
        </div>

        {/* Partner Logos Section */}
        <div className="roofing-hero-partners">
          <div className="partners-list">
            <Image src={bbb} alt="Shingle Master" width={100} height={50} />
            <Image src={shingleMaster} alt="Partner 2" width={100} height={50} />
            <Image src={financing} alt="Partner 3" width={100} height={50} />
          </div>
        </div>
      </section>


      
     <section className="roof-inspections">
        <video
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/drone-shot.webm"
        >
          Your browser does not support the video tag.
        </video>

        {/*not used currently*/}
        <div className="overlay"></div>

        <div className="content">
          <h1>Roof Inspections</h1>
          <p>
            Our comprehensive roof inspections utilize both physical assessments and advanced drone technology to provide a thorough evaluation of your roof's condition. Whether you're dealing with storm damage, preparing for a sale, or just want peace of mind, our expert team will identify any issues and recommend the best course of action to protect your home.
          </p>
          <Link href="/Contact" className="arrow-btn">
            Learn More<span className="arrow-circle"><span className="arrow">&#8594;</span></span>
          </Link>
        </div>
      </section>


      <section className="roof-inspections image-darken" style={{ backgroundImage: `url(${roofRepairImage.src})` }}>
        {/*Not Currently Used.*/}
        <div className="filter-overlay"></div>

        <div className="content">
          <h1>Roof Repairs</h1>
          <p>From minor leaks to major damage, our skilled roofing team is equipped to handle all types of roof repairs. We use high-quality materials and proven techniques to restore the integrity of your roof, ensuring it remains durable and weather-resistant. Trust us to keep your home safe and secure with prompt, reliable repair services.</p>
          <Link href="/Contact" className="arrow-btn">
            Learn More<span className="arrow-circle"><span className="arrow">&#8594;</span></span>
          </Link>
        </div>
      </section>


      <section className="roof-inspections image-darken"style={{ backgroundImage: `url(${roofReplacementImage.src})` }}>
        {/*Not Sure If this is currently used.*/}
        <div className="filter-overlay"></div>

        <div className="content">
          <h1>Roof Replacements</h1>
          <p>When it's time for a roof replacement, our experienced team is here to guide you through the process. We offer a variety of roofing materials, including asphalt shingles, standing seam metal, and cedar shake, to suit your home's style and your budget. Our commitment to quality craftsmanship ensures that your new roof will provide lasting protection and enhance your home's curb appeal.</p>
          <Link href="/Contact" className="arrow-btn">
            Learn More<span className="arrow-circle"><span className="arrow">&#8594;</span></span>
          </Link>
        </div>
      </section>





      {/* 
      SERVICES SECTION 
      CSS file: roofing-services.css
       */}
      <section className="roofing-services  uniform-text-size">

         <div className="roof-repair-replacements image-darken" style={{ backgroundImage: `url(${roofRepairReplacement.src})` }}>
            <span className="eyebrow">Roof Guidance</span>
            <h2>Roof Repairs vs. Replacement</h2>

            <p>
              Knowing when to repair your roof and when to replace it entirely can save
              you money and prevent bigger problems down the line. Here are some common
              signs homeowners should watch for when evaluating their roof’s condition.
            </p>

            <h3>Signs You May Need a Roof Repair</h3>
            <ul>
              <li>Missing, damaged, or curled shingles (localized areas)</li>
              <li>Water stains on ceilings or walls</li>
              <li>Worn or deteriorating flashing around chimneys and vents</li>
              <li>Minor storm damage from hail, wind, or fallen branches</li>
              <li>Increased energy bills caused by poor roof ventilation or insulation</li>
            </ul>

            <h3>Signs You May Need a Roof Replacement</h3>
            <ul>
              <li>Roof age of 20–25 years for asphalt shingles or 30–40 years for cedar shake</li>
              <li>Widespread cracked, curled, or missing shingles</li>
              <li>Multiple leaks or significant interior water damage</li>
              <li>Deteriorating flashing around chimneys, vents, skylights, or valleys</li>
              <li>Heavy granule loss collecting in gutters and downspouts</li>
              <li>Structural issues such as sagging roof decking or damaged rafters</li>
              <li>Frequent repairs indicating the roof is nearing the end of its lifespan</li>
            </ul>

          <Link href="/Contact" className="arrow-btn">
            Schedule Consultation<span className="arrow-circle"><span className="arrow">&#8594;</span></span>
          </Link>

          </div>
      
        <div
            className="shingle-roofing image-darken"
            style={{ backgroundImage: `url(${standinshingle.src})` }}
           >
    
          <h2 className='eyebrow'>Asphalt Shingle Roofing</h2>
          <h4>Professionally installed asphalt shingle roofing systems designed for durability, curb appeal, and long-term manufacturer-backed protection, including CertainTeed’s 4-star warranties. Integrity Roofing is a CertainTeed ShingleMaster™ PRO contractor, ensuring the highest standards of installation and expertise.</h4>
          <h3 className='eyebrow'>Shingle Lines</h3>
          <ul>
            <li>Landmark Pro (Our most popular line)</li>
            <li>Landmark</li>
            <li>Grand Manor</li>
            <li>Belmont</li>
            <li>Performance</li>
          </ul>

          <h3 className='eyebrow'>Roof Protection Types</h3>
          <ul>
            <li>Architectural (layered, dimensional look)</li>
            <li>Luxury Designer Shingles</li>
          </ul>
            

          <h3 className='eyebrow'>Underlayments</h3>
          <ul>
            <li>Synthetic Underlayment(CertainTeed RoofRunner)</li>
            <li>Felt Underlayment</li>
            <li>Ice & Water Shield (CertainTeed WinterGuard)</li>
          </ul>


          {/*Fix Spacing */}
          <h3 className='eyebrow'>Warranties</h3>
          <h4>CertainTeed 4-Star Warranty</h4>
          <p>Offers peace of mind with manufacturer-backed coverage for material quality, helping protect your investment for years to come.</p>
        
          <Link href="/Contact" className="arrow-btn">
            Get A New Roof Today<span className="arrow-circle"><span className="arrow">&#8594;</span></span>
          </Link>
        </div>

        <div className="standing-seam-metal image-darken" style={{ backgroundImage: `url(${standingSeam.src})` }}>
          <h2 className='eyebrow'>Standing Seam Metal Roofing</h2>
          <p>
            Premium concealed fastener systems available in 24-gauge steel,
            multiple rib heights, and CERAM-A-STAR® coated finishes.
          </p>
          
        
          <h3 className='eyebrow'>29 Gauge Roofing and Siding Panel "AG" Panel</h3>
          <p>Most Popular residential roof panel (Minimum 3/12 roof pitch required).</p> 

          <h3 className='eyebrow'>26 Gauge Roofing and Siding Panel "PBR" or "R" Panel</h3>
          <h4>Also available in 24 Gauge</h4>
          <ul>
            <li>The PBR panel will span up to 5' purlin spacing on roof application.</li>
            <li>The PBR panel is suitable for roof and sidewall application.</li>
            <li>The PBR panel has a "Purlin Bearing Rib" as shown below to provide for roof application.</li>
            <li>The "R" panel is for sidewall application only and does not have a "Purlin Bearing Rib".</li>
            <li>Minimum 1/12 roof pitch required (3/4" wide butyl tape required in lap on installations less than 3/12 roof pitch).</li>
          </ul> 

          <h3 className='eyebrow'>Standing Seam / Concealed Fastener Roof Panel</h3>
          <h4>Standard is 24 gauge</h4>
          <ul>
            <li>Available in rib heights of 1", 1.5", and 1.75".</li>
            <li>Standard panel width is 16" using the 1" rib height.</li>
            <li>1.75" high rib will span up to r' purlin spacing.</li>
            <li>We only offer striated panels which helps prevent Oil-Canning.</li>
          </ul>       
          
          <h5>* This is based off of our metal distributor Lyon Metal (wesellmetalroofing.com)</h5>
          <Link href="/Contact" className="arrow-btn">
            Get A New Roof Today<span className="arrow-circle"><span className="arrow">&#8594;</span></span>
          </Link>
        </div>  

       
       
        </section>



     
      {/*
      <section className="services-also-offered">
        <h1>Additional Services We Offer</h1>
        <div className="services-grid">

          <RoofingPageCard
              title="Gutter Installation & Repair"
              subtitle="Protect Your Home's Foundation"
              image={heroImage}
            
              buttonText="Get a Quote"
              buttonHref="/contact"
            />

              <RoofingPageCard
              title="Skylight Installation & Repair"
              subtitle="Bring in Natural Light"
              image={heroImage}
             
              buttonText="Get a Quote"
              buttonHref="/contact"
            />
              <RoofingPageCard
              title="Roof Ventilation Solutions"
              subtitle="Enhance Roof Longevity"
              image={heroImage}
            
              buttonText="Get a Quote"
              buttonHref="/contact"
            />
        </div>
      </section>
      */}

      <section className="roofing-mission-items">
        <CustomHomeCarousel></CustomHomeCarousel>
      </section>




      
      

      {/* CONTACT CTA */}
      <section className="contact-us-home">
        <ContactForm  />
        <hr />
      </section>
    </main>
  );
}

export default RoofingPage;
