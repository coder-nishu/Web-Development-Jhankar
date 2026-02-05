import React from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router";

export default function PostDetails() {
  const post = useLoaderData();
  let navigate = useNavigate();
  const navigateHandler = () => {
    navigate(-1)
  }
  return (
    <div>
      <h1>Post details</h1>
      <h3>{post.title}</h3>
      <button onClick={navigateHandler}>
        Go Back
      </button>
    </div>
  );
}
