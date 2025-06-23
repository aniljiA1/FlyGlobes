import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Text and Form */}
        <div className="w-full md:w-3/4">
          <p className="text-sm text-black mb-2 uppercase tracking-wider">
            Get Started
          </p>
          <h2 className="text-3xl md:text-5xl text-black font-bold mb-10 leading-tight">
            Get in touch with us,
            <br />
            We’re here to assist you.
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border-b border-gray-400 bg-transparent text-black py-2 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border-b border-gray-400 bg-transparent text-black py-2 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number (optional)"
              className="border-b border-gray-400 bg-transparent text-black py-2 outline-none"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="md:col-span-3 border-b border-gray-400 bg-transparent text-black py-2 outline-none"
            ></textarea>
            <button className="w-fit px-6 py-2 border border-black rounded-md text-black font-semibold hover:bg-black hover:text-white transition">
              LEAVE US A MESSAGE
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex flex-col gap-6">
          <button className="w-10 h-10 flex items-center text-black justify-center border border-black rounded-full">
            <FaFacebookF />
          </button>
          <button className="w-10 h-10 flex items-center text-black justify-center border border-black rounded-full">
            <FaInstagram />
          </button>
          <button className="w-10 h-10 flex items-center text-black justify-center border border-black rounded-full">
            <FaTwitter />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;