import React from "react";
import { IoBookmarkSharp } from "react-icons/io5";
export default function Blog({ blog,handleBookMark,handleMArkAsRead }) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="hashtags flex">
            {blog.hashtags.map((hash) => (
              <p>#{hash}</p>
            ))}
          </div>
          <div className="author-box flex gap-3 justify-around items-center">
            <img className="w-10 rounded-full" src={blog.author_img} alt="" />
            <h1>
              {blog.author}
            </h1>
          <button onClick={() => handleBookMark(blog)}><IoBookmarkSharp size={25}/></button>
            
          </div>
          <div className="card-actions justify-end">
            <button onClick={()=>handleMArkAsRead(blog.reading_time,blog.id)} className="btn btn-primary">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
}
