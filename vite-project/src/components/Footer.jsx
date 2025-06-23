import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#071e3d] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-500 pb-8">
        <div>
          <h2 className="font-bold text-lg mb-2">FLYGLOBE</h2>
          <p className="text-sm text-gray-300">
            FlyGlobe is more than just a flight booking app; it's your one-stop
            shop for seamless travel experiences.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Promo</li>
            <li>Help</li>
            <li>Order</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Documentation</li>
            <li>Carrier</li>
            <li>Work With Us</li>
            <li>Blog & News</li>
            <li>Affiliate</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Developers</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-300 mb-1">flyglobe@gmail.com</p>
          <p className="text-sm text-gray-300 mb-1">+12 345 678 09</p>
          <p className="text-sm text-gray-300 mb-2">Singapore, Indonesia</p>
          <h4 className="font-semibold text-sm mb-1">Follow Us On Social</h4>
          <div className="flex space-x-2">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
            <FaTiktok />
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-4">
        © 2025 FlyBritain All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;