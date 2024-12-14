import React from "react";
import "./Footer.css";
import SocialButton from "../SocialButton/SocialButton";
import instagramIcon from "../assets/instagram.png";
import telegramIcon from "../assets/telegram.png";
import videoIcon from "../assets/video.png";
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";

const FooterEN = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        {/* Reordered sections */}
        <div className="footer-section">
          <ul>
            <li>
              <h4>Quick Access</h4>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Install the App</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Sell Kourosh Cards</a>
            </li>
            <li>
              <a href="#">Installment Sales</a>
            </li>
            <li>
              <a href="#">Kourosh Magazine</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>
              <h4>About Ofogh Kourosh</h4>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Stores</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Board Members</a>
            </li>
            <li>
              <a href="#">Specialized Committees</a>
            </li>
            <li>
              <a href="#">Stock Affairs</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>
              <h4>Careers</h4>
            </li>
            <li>
              <a href="#">Store Staff</a>
            </li>
            <li>
              <a href="#">Job Opportunities</a>
            </li>
            <li>
              <a href="#">Franchise Applications</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>
              <h4>Partners & Suppliers</h4>
            </li>
            <li>
              <a href="#">Partner System</a>
            </li>
            <li>
              <a href="#">Partner Training</a>
            </li>
            <li>
              <a href="#">New Supplier Registration</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-social-media">
        <SocialButton
          href="https://www.telegram.org"
          imgSrc={telegramIcon}
          label="Telegram"
        />
        <SocialButton
          href="https://www.instagram.com"
          imgSrc={instagramIcon}
          label="Instagram"
        />
        <SocialButton
          href="https://www.aparat.com"
          imgSrc={videoIcon}
          label="Aparat"
        />
        <SocialButton
          href="https://www.linkedin.com"
          imgSrc={linkedinIcon}
          label="LinkedIn"
        />
        <SocialButton
          href="https://www.twitter.com"
          imgSrc={twitterIcon}
          label="Twitter"
        />
      </div>
    </footer>
  );
};

export default FooterEN;
