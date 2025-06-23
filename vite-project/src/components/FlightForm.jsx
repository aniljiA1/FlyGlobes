import React, { useState } from "react";

const FlightForm = () => {
  const [roundTrip, setRoundTrip] = useState(true);

  return (
    <div className="bg-[#0d1b3e] text-white p-8 rounded-xl w-full max-w-3xl mx-auto shadow-lg">
      {/* Round Trip Toggle */}
      <div className="mb-6">
        <button
          onClick={() => setRoundTrip(!roundTrip)}
          className="bg-[#1e2a54] px-4 py-2 rounded-full text-sm"
        >
          {roundTrip ? "Round trip" : "One way"}
        </button>
      </div>

      {/* Grid form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* From */}
        <div>
          <label className="text-sm mb-1 block">From</label>
          <div className="bg-[#1e2a54] p-3 rounded-md flex items-center">
            ✈️ <span className="ml-2">Delhi (DEL)</span>
          </div>
        </div>

        {/* To */}
        <div>
          <label className="text-sm mb-1 block">To</label>
          <div className="bg-[#1e2a54] p-3 rounded-md flex items-center">
            🛬 <span className="ml-2">London (LHR)</span>
          </div>
        </div>

        {/* Departure Date */}
        <div>
          <label className="text-sm mb-1 block">Departure Date</label>
          <div className="bg-[#1e2a54] p-3 rounded-md flex items-center">
            📅 <span className="ml-2">Mar 20, 2025</span>
          </div>
        </div>

        {/* Return Date */}
        <div>
          <label className="text-sm mb-1 block flex items-center gap-2">
            <input
              type="checkbox"
              checked={roundTrip}
              onChange={() => setRoundTrip(!roundTrip)}
              className="accent-blue-500"
            />
            Return Date
          </label>
          <div
            className={`p-3 rounded-md flex items-center ${
              roundTrip ? "bg-[#1e2a54]" : "bg-[#1e2a54] opacity-50"
            }`}
          >
            📅 <span className="ml-2">Mar 12, 2024</span>
          </div>
        </div>

        {/* Passenger */}
        <div>
          <label className="text-sm mb-1 block">Passenger</label>
          <div className="bg-[#1e2a54] p-3 rounded-md flex items-center">
            👤 <span className="ml-2">1 Adult, 1 Child</span>
          </div>
        </div>

        {/* Seat Class */}
        <div>
          <label className="text-sm mb-1 block">Seat Class</label>
          <div className="bg-[#1e2a54] p-3 rounded-md flex items-center">
            💺 <span className="ml-2">Economy</span>
          </div>
        </div>

        {/* Airlines */}
        <div>
          <label className="text-sm mb-1 block">Select Airlines</label>
          <div className="bg-[#1e2a54] p-3 rounded-md flex items-center">
            ✈️ <span className="ml-2">All Airlines</span>
          </div>
        </div>

        {/* Direct Flights */}
        <div className="flex items-center gap-2 mt-7">
          <input type="checkbox" id="direct" className="accent-blue-500" />
          <label htmlFor="direct">Direct Flights Only</label>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6">
        <button className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default FlightForm;