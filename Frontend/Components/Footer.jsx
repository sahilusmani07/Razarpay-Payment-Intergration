import React from "react";
import "../public/Footer.css";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaFacebook, FaPhoneAlt, FaEnvelope, FaShieldAlt } from "react-icons/fa";

const Footer = () => {
  return (

    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
            
          <h4>Products</h4>
          <ul>
            <li>Biozyme Performance Whey</li>
            <li>Biozyme Whey PR</li>
            <li>Raw Whey Protein</li>
            <li>High Protein Oats</li>
            <li>Super Gainer XXL</li>
            <li>Creatine</li>
            <li>MB Fuel One Whey Protein</li>
            <li>High Protein Muesli</li>
            <li>MB Multivitamin</li>
            <li>Biozyme Iso-Zero</li>
            <li>Fish Oil</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            <li>Proteins</li>
            <li>Gainers</li>
            <li>Pre/Post Workout</li>
            <li>Ayurveda</li>
            <li>Fit Foods</li>
            <li>Vitamin Supplements</li>
            <li>Fat Loss</li>
            <li>Fitness Accessories</li>
            <li>Apparel Overall</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Trade Partners</li>
            <li>T & C</li>
            <li>MB Coupons</li>
            <li>BGreen</li>
            <li>MB Fuel One</li>
            <li>Privacy Policy</li>
            <li>Return Refund</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <h4>Subscribe to Newsletter</h4>
          <div className="newsletter-input">
            <input type="email" placeholder="Your Email" />
            <button>Submit</button>
          </div>

          <div className="contact-info">
            <p><FaPhoneAlt /> +91 90 000 00 00</p>
            <p><FaEnvelope /> info@fitmart.com</p>
          </div>
        <div className="social-icons">
            <FaInstagram className="icon instagram" />
            <FaLinkedin className="icon linkedin" />
            <FaTwitter className="icon twitter" />
            <FaYoutube className="icon youtube" />
            <FaFacebook className="icon facebook" />
        </div>

          <div className="secure-payment">
            <p><FaShieldAlt className="shield-icon" />100% Safe & Secure payments:</p>
            <div className="payment-icons">
              <img src="https://static1.hkrtcdn.com/mbnext/static/media/common/SecurePayment/upi.png" alt="UPI" />
              <img src="https://static1.hkrtcdn.com/mbnext/static/media/common/SecurePayment/visa.png" alt="Visa" />
              <img src="https://static1.hkrtcdn.com/mbnext/static/media/common/SecurePayment/master.png" alt="Mastercard" />
              <img src="https://static1.hkrtcdn.com/mbnext/static/media/common/SecurePayment/emi.png" alt="Net Banking" />
              <img src="https://static1.hkrtcdn.com/mbnext/static/media/common/SecurePayment/cod.png" alt="Cash on Delivery" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
