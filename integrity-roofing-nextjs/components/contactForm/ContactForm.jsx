'use client';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contactForm.css';

const services = ['Roofing', 'Windows', 'Siding', 'Gutters', 'Decks', 'Other'];
const serviceNeeds = ['Repair', 'Replacement', 'Inspection', 'Other'];

const Quote = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wprru9e', 'template_z3up5sc', form.current, '0Lm770FCR0AZD38iq')
      .then(() => {
        alert('Thank you for submitting a quote, we will respond shortly!');
        form.current.reset();
      }, (error) => {
        console.error('EmailJS error:', error.text);
        alert('Your quote could not be submitted at this time. Please try again later, or call our office.');
      });
  };

  return (
    <section className="quote-section">
      <div className="quote-grid">
        {/* Left Column: Company Info */}
        <div className="quote-info">
          <h2>Trusted Home Experts in North Carolina</h2>
          <p>
            Integrity Roofing & Home Improvements has helped over one hundred homeowners protect and enhance their homes with reliable, quality craftsmanship.
          </p>
          <ul className="trust-points">
            <li><h1>Why Homeowners Trust Us:</h1></li>
            <li>✅ Fully Licensed & Insured</li>
            <li>✅ Decades of Experience</li>
            <li>✅ 100+ Projects Completed</li>
            <li>✅ Fast, Honest, Reliable</li>
            <li>✅ 100% Customer Satisfaction</li>
            <li>✅ Clean Job Sites, No Mess Left Behind</li>
          </ul>

          <div className="contact-details">
            <h3>Contact Information</h3>
            <p><strong>Office Phone:</strong><br />336-818-2880</p>
            <p><strong>Office Address:</strong><br />
              513 Cherry Street<br />
              North Wilkesboro, NC 28659
            </p>
            <p><strong>Office Hours:</strong><br />
              Monday–Friday: 8:00–5:00<br />
              Saturday: 8:00–Noon
            </p>
          </div>

          <p className="bottom-note">
            Let us know what you're looking for and we'll be in touch with a personalized quote.
          </p>
        </div>

        {/* Right Column: Form */}
        <form className="quote-form" ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name*</label>
              <input type="text" name="first_name" required />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input type="text" name="last_name" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone*</label>
              <input type="tel" name="phone" required />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input type="email" name="email" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input type="text" name="city" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Service Type – Select All That Apply*</label>
            <div className="checkbox-group">
              {services.map((item, idx) => (
                <label key={idx}>
                  <input type="checkbox" name="services" value={item} />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group full-width">
            <label>What Service Can We Provide?*</label>
            <div className="radio-group">
              {serviceNeeds.map((item, idx) => (
                <label key={idx}>
                  <input type="radio" name="needType" value={item} required />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group full-width">
            <label>Any Comments, Questions, or Concerns?</label>
            <textarea name="comments" rows="4" />
          </div>

          <div className="form-group full-width">
            <label>How Did You Hear About Us?</label>
            <input type="text" name="referral" />
          </div>

          <button type="submit" className="submit-btn">Get My Quote</button>
        </form>
      </div>
    </section>
  );
};

export default Quote;