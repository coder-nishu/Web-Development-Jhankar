import React from "react";
import './bottle.css';
const Bottle = ({ bottle,handleAddCart }) => {
  const { name, img, price } = bottle;
  return (
    <>
      <div className="card">
        <img src={img} width="300px" height="300px" alt={name} />
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <button onClick={handleAddCart}>Buy Now</button>
      </div>
    </>
  );
};
export default Bottle;
