import React, { useEffect, useState } from "react";
import "./users.css";
import User from "./user";
export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="box">
      {users.map((user) => (
        <User props={user}></User>
      ))}
    </div>
  );
}

/**
 * 1. declare a state to hold state
 * 2. use effect with callback and dependency array
 * 3.use fetch to load data
 * 4.then set to the setState
 * 5.Display data in component
 */
