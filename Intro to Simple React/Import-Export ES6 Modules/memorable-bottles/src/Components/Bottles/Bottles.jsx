import React,{use, useEffect, useState} from "react";
import Bottle from "../bottle/Bottle";
import './bottles.css';
import '../../Utilities/Localstorage/localstrorage'
import { addTostoredCart, getStoreCart, removeFromLocalStorage } from "../../Utilities/Localstorage/localstrorage";
import Cart from "../Cart/Cart";
const Bottles = ({bottlePromise}) => {
    const bottle = use(bottlePromise);
    const [cart,setCart] = useState([]);

    useEffect(() => {
      const storedCartIds = getStoreCart();
      console.log(storedCartIds);
      const storedCart = []

      for(const id of storedCartIds){
        const cartBottles = bottle.find(bot => bot.id === id);
        if(cartBottles){
          storedCart.push(cartBottles);
        }
      }

      setCart(storedCart)

    },[bottle])
    const handleAddCart = (bottle) => {
      const newCart = [...cart,bottle.name];
      setCart(newCart);

      // save the bottle cart to localStorage
      addTostoredCart(bottle.id);
    }

    const handleRemoveFromCart = (id) => {
      console.log("remove id from the cart",id)
      const remainingCart = cart.filter(bottle => bottle.id !== id);

      setCart(remainingCart);

      removeFromLocalStorage(id);

    }
    
  return (
    <div>
      <h2>Bottles</h2>
      <h3>Added to cart: {cart.length}</h3>
      <Cart cart = {cart} handleRemoveFromCart={handleRemoveFromCart}/>
      <div className="bottle-container">
        {bottle.map(bottle => <Bottle key={bottle.id} handleAddCart={() => handleAddCart(bottle)} bottle={bottle} />)}
      </div>
    </div>
  );
};

export default Bottles;
