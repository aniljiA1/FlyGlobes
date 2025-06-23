import React from "react";
import { FaBolt, FaDollarSign, FaLightbulb } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt className="text-white text-2xl" />,
    title: "Seamless Booking Experience",
    desc: "With FlyGlobe, booking your flights is effortless and convenient.",
  },
  {
    icon: <FaDollarSign className="text-white text-2xl" />,
    title: "Best Pricing and Deals",
    desc: "FlyGlobe is committed to offering you the best possible value for your travel budget.",
  },
  {
    icon: <FaLightbulb className="text-white text-2xl" />,
    title: "Personalized Travel Recommendations",
    desc: "FlyGlobe offers personalized travel recommendations tailored to your preferences.",
  },
];

const WhyFlyGlobe = () => {
  return (
    <section className="py-16 bg-[#f8f8f8] px-6 md:px-20 flex flex-col lg:flex-row justify-between items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-3/4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1c2b2d] text-white p-6 rounded-lg shadow-lg hover:scale-105 transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 lg:mt-0 lg:w-1/4 m-20 text-center lg:text-left">
        <div className="flex justify-center  lg:justify-start -space-x-4 mb-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user1"
            className="w-20 h-20 rounded-full border-2 border-red-600"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user2"
            className="w-20 h-20 rounded-full border-2 border-red-600"
          />
          <img
            src="https://randomuser.me/api/portraits/men/56.jpg"
            alt="user3"
            className="w-20 h-20 rounded-full border-2 border-red-600"
          />
          <div className="w-20 h-20 flex items-center justify-center text-sm font-bold text-white bg-[#1c2b2d] rounded-full border-2 border-red-600">
            +3k
          </div>
        </div>
        <div className="flex "></div>
        <p className="text-sm font-semibold text-black">WHY FLYGLOBE</p>
        <p className="text-lg text-black font-bold">Our happy travellers</p>
        <p className="text-sm text-black">4.9 (3.5k Reviews)</p>
      </div>
    </section>
  );
};

export default WhyFlyGlobe;