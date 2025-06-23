import React from "react";

const cardData = [
  {
    img: "https://plus.unsplash.com/premium_photo-1663089633751-2349f2dbc5be?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/030/328/249/non_2x/little-child-at-the-airport-with-a-suitcase-travel-theme-generative-ai-photo.jpg",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/030/328/261/non_2x/little-child-at-the-airport-with-a-suitcase-travel-theme-generative-ai-photo.jpg",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/030/328/249/non_2x/little-child-at-the-airport-with-a-suitcase-travel-theme-generative-ai-photo.jpg",
  },
];

const Offers = () => {
  return (
    <section className="bg-[#f9f9f9] text-black py-12">
      <div className="text-center mb-10">
        <h2 className="text-lg font-semibold tracking-widest">BEST OFFERS</h2>
        <p className="max-w-2xl mx-auto mt-2 text-gray-700">
          We're excited to offer you an exclusive voucher to help you save on
          your next adventure. Whether you're planning a weekend getaway, a
          family vacation, or a solo expedition.
        </p>
      </div>
      <div className="flex justify-center gap-6 flex-wrap px-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden w-64 h-40 shadow-md"
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-4 text-white">
              <span className="text-sm">SAVE UP TO</span>
              <h3 className="text-3xl font-bold">20%</h3>
              <p className="text-xs">
                On your next flight with this exclusive voucher!
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;