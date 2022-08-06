import React from 'react'
import CartItem from './CartItem.js';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';


function Cart() {

  const { cart, clearAll, totalItems, totalPrice } = useContext(CartContext)

  return (

    <section>
      {cart.length > 0 &&
        <div className="flex mx-auto w-8/12 mt-10 mb-10 font-bold">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">ITEMS IN CART: {totalItems}</div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">TOTAL ${totalPrice}</div>
        </div>}
      <div className="flex flex-column flex-wrap gap-3 w-4/5 m-auto justify-around">
        {cart.map((item) => (
          <CartItem
            title={item.title}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            id={item.id}
            key={item.id}
          />))}
      </div>

      <div className='mt-10 text-center'>
        {cart.length > 0 ? <button className="btn btn-primary btn-block w-48" onClick={clearAll}>CLEAR ALL</button>
          :
          <Link to="../">
            <h1>Carrito vacio</h1><button className="btn btn-primary btn-block w-48" onClick={clearAll}>COMPRAR PRODUCTOS</button></Link>}
      </div>
    </section>

  )
}

export default Cart;