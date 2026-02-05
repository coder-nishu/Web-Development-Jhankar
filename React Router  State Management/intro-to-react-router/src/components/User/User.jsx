import React, { useState } from "react";
import { Link } from "react-router";
import { Suspense } from "react";
import UserDetails2 from "../../UserDetails2/UserDetails2";
export default function User({ user }) {
  const [showInfo,setShowInfo] = useState(false)
  const { id,name, email, phone } = user;
  const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
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
      <button onClick={() => {setShowInfo(!showInfo)}}>{showInfo? "Hide" : "Show"}</button>
      {
        showInfo && <Suspense fallback={<span>Loading....</span>} >
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      }
    </div>
    
  );
}
