import React from "react";

export default function Banner() {
  return (
    <div>
      <div
        className="hero h-96 absolute"
        style={{
          backgroundImage:
            "url(./src/assets/Banner-min.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
      </div>
      <div className="upper-layer w-[100%] h-96 flex lg:justify-start items-center sm:justify-center">
        <div className="text-neutral-content relative m-16">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-semibold">Bid on Unique Items from Around the World</h1>
          <p className="mb-5 text-sm">
            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
          </p>
          <button className="btn bg-[#FFFFFF] rounded-4xl font-semibold">Explore Auctions</button>
        </div>
      </div>
      </div>
    </div>
  );
}
