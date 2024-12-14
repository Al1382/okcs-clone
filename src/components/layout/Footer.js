import React from "react";
import "./Footer.css";
import SocialButton from "../SocialButton/SocialButton";
import instagramIcon from "../assets/instagram.png";
import telegramIcon from "../assets/telegram.png";
import videoIcon from "../assets/video.png";
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        {/* Reordered sections */}
        <div className="footer-section">
          <ul>
            <li>
              <h4>دسترسی سریع</h4>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
            <li>
              <a href="#">نصب اپلیکیشن</a>
            </li>
            <li>
              <a href="#">پرسش و پاسخ متداول</a>
            </li>
            <li>
              <a href="#">فروش کروش کارت</a>
            </li>
            <li>
              <a href="#">فروش اقساط</a>
            </li>
            <li>
              <a href="#">مجله کوروش</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>
              <h4>درباره افق کوروش</h4>
            </li>
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">فروشگاه‌ها</a>
            </li>
            <li>
              <a href="#">اخبار</a>
            </li>
            <li>
              <a href="#">اعضای هیئت مدیره</a>
            </li>
            <li>
              <a href="#">کمیته‌های تخصصی</a>
            </li>
            <li>
              <a href="#">امور سهام</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>
              <h4>همکاری با ما</h4>
            </li>
            <li>
              <a href="#">کارمند فروشگاه</a>
            </li>
            <li>
              <a href="#">فرصت‌های شغلی</a>
            </li>
            <li>
              <a href="#">دریافت نمایندگی (فرانچایز)</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>
              <h4>همکاران و تامین کنندگان</h4>
            </li>
            <li>
              <a href="#">سامانه همکاران</a>
            </li>
            <li>
              <a href="#">آموزش همکاران</a>
            </li>
            <li>
              <a href="#">ورود تامین کنندگان جدید</a>
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

export default Footer;
