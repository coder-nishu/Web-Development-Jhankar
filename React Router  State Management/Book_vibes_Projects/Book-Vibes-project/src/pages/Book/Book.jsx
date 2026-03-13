import React from "react";

export default function Book({ book }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="h-80 bg-[#F3F3F3] m-4 rounded-4xl">
        <img className="h-60 -rotate-10 -skew-3 shadow-black shadow-xl"
          src={book.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Card Title
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}
