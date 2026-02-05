import React from "react";

export default function FormAction() {
    const handleFormAction = (formData) => {
        console.log(formData.get('name'))
        console.log(formData.get('name'))
    }
  return (
    <div>
      <h3>This is form using action</h3>
      <form action={handleFormAction}>
        <input type="text" name="name" placeholder="your name" />
        <br />
        <input type="email" name="email" placeholder="your email" />
        <br />
        <input type="submit" value="Submit Now" />
      </form>
    </div>
  );
}
