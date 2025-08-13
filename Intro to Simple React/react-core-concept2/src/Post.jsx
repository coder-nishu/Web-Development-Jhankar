import React from "react";

export default function Post({props}) {
  const { title, body, views, reactions } = props;
  return (
    <div className="box">
      <h2>Title: {title}</h2>
      <h2>Post: {body}</h2>
      <h2>View: {views}</h2>
      <h2>Reaction: {reactions.likes}</h2>
    </div>
  );
}
