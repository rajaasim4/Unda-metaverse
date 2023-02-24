import React from "react";
import {
  BsTelephone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FiMail,
  HiOutlineLocationMarker,
} from "react-icons/all";
import Logo from "../../assets/Images/Logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="footer-section1 footer-section">
            <div className="footer-Logo">
              <img src={Logo} alt="" />
              <h1>
                UNDA
                <span>.Quest</span>
              </h1>
            </div>
            <p>
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              Ut enim ad minim veniam, quis nostrud equip consectetur adipiscing
              ex ea commodo dolor consequat
            </p>
            <div className="footer-social">
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="footer-section2 footer-section">
            <h4 className="footer-links-heading">About</h4>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">In Press</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
            </ul>
          </div>
          <div className="footer-section3 footer-section">
            <h4 className="footer-links-heading">Support</h4>
            <ul>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Online Chat</a>
              </li>
              <li>
                <a href="">Whatsapp</a>
              </li>
              <li>
                <a href="">Telegram</a>
              </li>
              <li>
                <a href="">Ticketing</a>
              </li>
              <li>
                <a href="">Call Center</a>
              </li>
            </ul>
          </div>
          <div className="footer-section4 footer-section">
            <h4 className="footer-links-heading">FAQ</h4>
            <ul>
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Manage Deliveries</a>
              </li>
              <li>
                <a href="">Orders</a>
              </li>
              <li>
                <a href="">Payments</a>
              </li>
              <li>
                <a href="">Returns</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <address>
            <div className="footer-contact-details">
              <a href="">
                <BsTelephone />
              </a>
              <span id="footer-contact-info">
                <span>Phone</span>
                <br />
                +123 456 789
              </span>
            </div>
            <div className="footer-contact-details">
              <a href="">
                <FiMail />
              </a>
              <span id="footer-contact-info">
                <span>Email</span>
                <br />
                UndaQuest@info.com.
              </span>
            </div>
            <div className="footer-contact-details">
              <a href="">
                <HiOutlineLocationMarker />
              </a>
              <span id="footer-contact-info">
                <span>Address</span>
                <br />
                Street 1, 34 New York
              </span>
            </div>
          </address>
        </div>

        <div className="footer-copyright">
          <p>
            Copyright &copy; {new Date().getFullYear()}. All rights are
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
