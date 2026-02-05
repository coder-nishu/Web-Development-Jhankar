import React, { useState } from "react";

export default function ConttrollerField() {
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
  const handleControllerField = (e) => {
    e.preventDefault();
    console.log(e.target.password.value);
  };
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
    if (password.length < 6) {
      setError("must be 6 character");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <h3>This is controlled form</h3>
      <form onSubmit={handleControllerField}>
        <input type="text" name="name" placeholder="your name" />
        <br />
        <input
          type="password"
          name="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          placeholder="your password"
        />
        <br />
        <p style={{color: 'red'}}>{error}</p>
        <br />
        <input type="submit" value="Submit Now" />
      </form>
    </div>
  );
}
