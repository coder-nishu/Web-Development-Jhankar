import React from "react";
import { Link } from "react-router";
export default function User({ user }) {
  const { id,name, email, phone } = user;
  const userStyle = {
    border: "2px solid blue",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <button><Link to={`/users/${id}`}>User Details</Link></button>
    </div>
  );
}
