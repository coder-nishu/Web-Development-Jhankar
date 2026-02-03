import React from "react";
import { Link } from "react-router";
export default function Post({ post }) {
  const {id,title, body } = post;
  const userStyle = {
    border: "2px solid blue",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
    width: "600px",
  };
  return (
    <div>
      <div style={userStyle}>
        <h3>
          <b>Post Title:</b> {title}
        </h3>
        <p>{body}</p>
        <button>
          <Link to={`/posts/${id}`}>Post details</Link>
        </button>
      </div>
    </div>
  );
}
