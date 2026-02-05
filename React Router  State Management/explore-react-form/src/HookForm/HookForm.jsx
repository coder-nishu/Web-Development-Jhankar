import React from "react";
import useInputField from "../hooks/useinputField";

export default function HookForm() {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");
  const handleOnSubmit = e => {
    e.preventDefault();
    console.log(`Submitted info ${name} -> ${email} -> ${password}`);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <p>Name:</p>
        <input
          type="text"
          defaultValue={name}
          onChange={nameOnChange}
          name="name"
          id="name"
        />
        <br />
        <p>Email:</p>
        <input type="email" onChange={emailOnChange} name="email" id="email" />
        <br />
        <p>Password:</p>
        <input
          type="password"
          onChange={passwordOnChange} 
          name="password"
          id="password"
        />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
    </div>
  );
}
