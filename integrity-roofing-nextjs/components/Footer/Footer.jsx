import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-grid">

          <div className="footer-column">
            <h4>Office Hours</h4>
            <p>Monday – Friday</p>
            <p>8:00am – 5:00pm</p>
            <p>Saturday</p>
            <p>8:00am – 12:00pm</p>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>
              513 Cherry St
              North Wilkesboro, NC 28659
            </p>
            <a href="tel:+13368182880">(336) 818-2880</a>
          </div>

      
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Integrity Roofing & Home Improvements, LLC. All rights reserved. <a href="https://evanhowell.dev" target="_blank" rel="noopener noreferrer">Developed by Howell Development, LLC</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
