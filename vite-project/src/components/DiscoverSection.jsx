import React from "react";

const tags = [
  "Asian",
  "European",
  "Middle-East",
  "Beach Paradise",
  "Nature Retreats",
  "Romantic Escapes",
  "Cultural Immersion",
  "African",
  "American",
];

const destinations = [
  {
    src: "https://www.guideroma.com/wp-content/uploads/2017/11/contatti2-scaled.jpg",
    label: "ROME",
  },
  {
    src: "https://www.guideroma.com/wp-content/uploads/2017/11/contatti2-scaled.jpg",
    label: "ROME",
  },
  {
    src: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fceedc651-06c6-44e9-b5a9-3faa0b00fc8c.jpg?crop=4218%2C2812%2C391%2C0&resize=750",
    label: "ROME",
  },
  {
    src: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3438x2292+0+0/resize/3438x2292!/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F47%2Fb7%2F0a20e88544bc9cd090980652c1f8%2Fap25076598226518.jpg",
    label: "ROME",
  },
  {
    src: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fceedc651-06c6-44e9-b5a9-3faa0b00fc8c.jpg?crop=4218%2C2812%2C391%2C0&resize=750",
    label: "ROME",
  },
  {
    src: "https://cdn-imgix.headout.com/media/images/0bc7bfc5d039409e94b0fc256ca3008d-25579-istanbul-combo-topkapi-palace--hagia-sophia---blue-mosque-02.jpg?auto=format&w=702.4499999999999&h=401.4&q=90&fit=crop&ar=7%3A4&crop=faces",
    label: "ROME",
  },
];

const DiscoverSection = () => {
  return (
    <div className="bg-white text-black py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Text section */}
        <div>
          <h3 className="font-semibold text-sm mb-2">— DISCOVER</h3>
          <h2 className="text-2xl font-bold mb-4">
            More than 100 destinations waiting for you
          </h2>
          <p className="mb-6">
            Explore our curated list of the best countries to visit in 2024 and
            discover incredible destinations waiting to be explored
          </p>
          <div className="flex flex-wrap gap-2">
            <button className="bg-black text-white px-4 py-2 text-sm rounded">
              All
            </button>
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="border border-gray-400 text-sm px-4 py-2 rounded hover:bg-black hover:text-white transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="lg:col-span-3 grid grid-cols-3 grid-rows-3 gap-4 h-[600px]">
          {destinations.map((item, idx) => {
            let extraClasses = "";

            // First row small images
            if (idx === 0) extraClasses = "col-start-1 row-start-1";
            if (idx === 1) extraClasses = "col-start-2 row-start-1";
            if (idx === 2) extraClasses = "col-start-3 row-start-1";

            // Left side column small stacked
            if (idx === 3) extraClasses = "col-start-1 row-start-2";
            if (idx === 4) extraClasses = "col-start-1 row-start-3";

            // Big Image placement (idx 5)
            if (idx === 5)
              extraClasses = "col-start-2 row-start-2 col-span-2 row-span-2";

            return (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-lg ${extraClasses}`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 text-white p-4 flex flex-col justify-between">
                  <span className="font-bold text-sm">{item.label}</span>
                  <span className="text-xs">fr $500*</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;