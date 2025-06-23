import React from "react";
import Navbar from "../components/Navbar";
import FlightForm from "../components/FlightForm";
import Offers from "../components/Offer";
import DiscoverSection from "../components/DiscoverSection";
import ExploreNear from "../components/ExploreNear";
import WhyFlyGlobe from "../components/WhyFlyglobe";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      className="text-white min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.stockcake.com/public/5/e/4/5e4b81d2-7bc1-429b-b0a8-711120d1565d_medium/airplane-interior-scene-stockcake.jpg')",
      }}
    >
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="max-w-xl bg-black/60 p-6 rounded-xl">
          <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
            UNLOCK EFFORTLESS TRAVEL WITH UNBEATABLE FLIGHT DEALS!
          </h3>
          <p className="text-gray-300 text-lg">
            From Seamless Booking to Smooth Takeoff – We Take Care of Every
            Detail So You Can Enjoy the Journey!
          </p>
          <button className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all">
            DISCOVER NOW
          </button>
        </div>
        <FlightForm />
      </div>
      <div className="bg-white py-4 flex justify-center items-center gap-8">
        <img
          src="https://static-00.iconduck.com/assets.00/brand-etihad-airways-icon-512x239-fig1x8ir.png"
          alt="Etihad"
          className="h-8"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwVhM5pxbbfOUmpF4dnY9z4WQJujTDB9WOA&s"
          alt="Air Canada"
          className="h-8"
        />
        <img
          src="https://static-00.iconduck.com/assets.00/brand-etihad-airways-icon-512x239-fig1x8ir.png"
          alt="Etihad"
          className="h-8"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwVhM5pxbbfOUmpF4dnY9z4WQJujTDB9WOA&s"
          alt="Air Canada"
          className="h-8"
        />
      </div>
      <Offers />
      <DiscoverSection />
      <ExploreNear />
      <WhyFlyGlobe />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;