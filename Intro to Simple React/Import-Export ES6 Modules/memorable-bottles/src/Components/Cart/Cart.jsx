import React from 'react'
import Bottle from '../bottle/Bottle'
import "./cart.css"
export default function cart({cart,handleRemoveFromCart}) {
  return (
    <div className='cart-container'>
        <h3>Cart container: </h3>
        {
            cart.map(item => <div key={item.id}>
                <img src={item.img} alt="" />
                <button onClick={() => handleRemoveFromCart(item.id)}>X</button>
            </div>)
        }
    </div>
  )
}
