import React, { useState } from "react";

export default function ProductForm({ handleAddProducts }) {
  const [error, setError] = useState("");
  const handleProductForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const newProduct = { name, price, quantity };
    if ((name && price && quantity) == "") {
      setError("Field must be filled");
      return;
    } else if ((price || quantity) < 0 ) {
      setError("Must be positive");
      return;
    }else {
      setError("");
      handleAddProducts(newProduct);
    }
  };

  return (
    <div>
      <h4>Add a Product</h4>
      <form onSubmit={handleProductForm}>
        <input type="text" name="name" placeholder="Product name" />
        <br />
        <input type="text" name="price" placeholder="Product price" />
        <br />
        <input type="text" name="quantity" placeholder="Product quantity" />
        <br />
        <input type="submit" value="Submit" />
        <p style={{color: 'red'}}><b>{error}</b></p>
      </form>
    </div>
  );
}
