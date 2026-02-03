import React from "react";
import { useLoaderData } from "react-router";

export default function PostDetails() {
  const post = useLoaderData();
  console.log(post)
  return (
    <div>
      <h1>Post details</h1>
      <h3>{post.title}</h3>
    </div>
  );
}
