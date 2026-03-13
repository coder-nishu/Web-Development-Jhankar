import React from "react";
import bookImage from '../../assets/books.jpg'
export default function Banner() {
  return (
    <div className="hero bg-[#f3f3f3] min-h-[50vh] rounded-2xl my-4">
      <div className="hero-content flex-col justify-evenly lg:flex-row-reverse">
        <img
          src={bookImage}
          className="max-w-sm rounded-lg"
        />
        <div className="p-10">
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn bg-[#23BE0A] text-white my-6">View The List</button>
        </div>
      </div>
    </div>
  );
}
