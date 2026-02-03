import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";
export default function Users() {
  const users = useLoaderData();
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
