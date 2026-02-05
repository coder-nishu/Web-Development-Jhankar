import React, { useRef } from "react";

export default function UncontrolledField() {
  const emailRef = useRef('');
  const passRef = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  };

  return (
    <div>
      <h3>This is uncontrolled form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          ref={emailRef}
          name="email"
          placeholder="your email"
        />
        <br />
        <input
          type="password"
          ref={passRef}
          name="password"
          placeholder="your password"
        />
        <br />
        <input type="submit" value="Submit Now" />
      </form>
    </div>
  );
}
