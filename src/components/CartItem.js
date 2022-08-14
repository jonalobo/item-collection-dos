import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const CartItem = ({ title, price, image, quantity, id }) => {
  const { deleteItem } = useContext(CartContext);

  const borrar = () => {
    deleteItem(id);
  };

  return (
    <div className="card w-3/5 bg-base-100 shadow-xl flex flex-row flex-wrap justify-between card-body items-center m-auto">
      <Link to={"../producto/" + id}>
        <figure className="p-2">
          <img src={image} alt="" className="rounded-xl h-12" />
        </figure>
        <h2 className="font-bold">{title}</h2>
      </Link>
      <p className="italic">Cantidad: {quantity}</p>
      <p className="italic font-bold">Price: ${price}</p>
      <p className="italic font-bold">Total: ${price * quantity}</p>
      <button className="btn btn-square btn-sm" onClick={borrar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
