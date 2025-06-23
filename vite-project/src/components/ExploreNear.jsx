import React from "react";

const nearbyPlaces = [
  {
    name: "LOS ANGELES",
    time: "2+ Hours Away",
    image:
      "https://imageio.forbes.com/i-forbesimg/media/lists/places/los-angeles-ca_416x416.jpg?format=jpg&height=416&width=416&fit=bounds",
  },
  {
    name: "MIAMI",
    time: "2+ Hours Away",
    image:
      "https://images.unsplash.com/photo-1589083130544-0d6a2926e519?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlhbWklMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "NEW YORK",
    time: "2+ Hours Away",
    image:
      "https://fullsuitcase.com/wp-content/uploads/2022/05/One-day-in-New-York-USA-NYC-day-trip-itinerary.jpg",
  },
  {
    name: "LAS VEGAS",
    time: "2+ Hours Away",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/34/2d/28/caption.jpg?w=1400&h=1400&s=1&cx=662&cy=604&chk=v1_8984ddf3493edfb8c896",
  },
  {
    name: "TEXAS",
    time: "2+ Hours Away",
    image:
      "https://mediaim.expedia.com/destination/9/98b37f0a0a0c7ff7b7cdf13ae458ad3b.jpg",
  },
  {
    name: "CHICAGO",
    time: "2+ Hours Away",
    image:
      "https://content.r9cdn.net/rimg/dimg/77/c5/ecbd6c26-city-12514-1632c25b47a.jpg?width=1366&height=768&xhint=1828&yhint=1404&crop=true",
  },
];

const extendedPlaces = [
  {
    name: "SINGAPORE",
    time: "3+ Hours Away",
    image:
      "https://delivery.gfobcontent.com/api/public/content/df43a05c7c694f7d8dc9aac4bcf016a0?v=7464841d",
  },
  {
    name: "SINGAPORE",
    time: "3+ Hours Away",
    image:
      "https://images.prismic.io/mystique%2F54a1f0dd-e6dd-4929-a0bc-009fe90c001e_colosseum.jpg?auto=format&w=648&h=364.5&q=90&fit=crop&ar=16%3A9&exp=-10",
  },
  {
    name: "SINGAPORE",
    time: "3+ Hours Away",
    image:
      "https://delivery.gfobcontent.com/api/public/content/df43a05c7c694f7d8dc9aac4bcf016a0?v=7464841d",
  },
  {
    name: "SINGAPORE",
    time: "3+ Hours Away",
    image:
      "https://images.prismic.io/mystique%2F54a1f0dd-e6dd-4929-a0bc-009fe90c001e_colosseum.jpg?auto=format&w=648&h=364.5&q=90&fit=crop&ar=16%3A9&exp=-10",
  },
];

const ExploreNear = () => {
  return (
    <div className="bg-white py-20 px-6 text-black">
      <h2 className="text-center text-xl font-bold mb-10">— EXPLORE NEARBY</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {nearbyPlaces.map((place, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={place.image}
                alt={place.name}
                className="rounded-full w-40 h-40 object-cover"
              />
              <p className="mt-2 font-semibold text-sm text-center">
                {place.name}
              </p>
              <span className="text-xs text-gray-500">{place.time}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {extendedPlaces.map((place, index) => (
            <div key={index} className="rounded-xl overflow-hidden relative">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 text-white p-2 flex flex-col justify-end">
                <span className="text-sm font-bold">{place.name}</span>
                <span className="text-xs">{place.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreNear;