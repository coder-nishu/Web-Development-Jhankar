import React from "react";
import { useLoaderData } from "react-router";

export default function UserDetails() {
  const user = useLoaderData();
  console.log(user)
  return (
    <div>
      <h3>Name: {user.name}</h3>
      <p> Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>City: {user.address.city}</p>
      <p>Company: {user.company.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
