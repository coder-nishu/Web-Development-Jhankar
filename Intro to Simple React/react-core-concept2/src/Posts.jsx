import React, { useEffect, useState } from "react";
import Post from "./Post";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div className="box">
      {posts.map((post) => (
        <Post props={post} key={post.id} />
      ))}
    </div>
  );
}
