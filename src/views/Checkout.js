import React, { useState } from 'react'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import Form from "../components/Form"
import { getFirestore, collection, addDoc, Timestamp, setDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Checkout() {

  const { cart, totalItems, totalPrice, clearAll } = useContext(CartContext)
  const MySwal = withReactContent(Swal)
  const [userData, setUserData] = useState({name: '', phone: '', email: '', repEmail: ''});

  const notif = (id) =>  MySwal.fire({
    title: <strong>Pedido realizado!</strong>,
    html: <i>Su ID de pedido es {id}</i>,
    icon: 'success'
     })  

  const handleChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    });
}

  const placeOrder = (e) => {
    e.preventDefault()
    const fechaOrden = Timestamp.fromDate(new Date())
    const order = {
      buyer: userData,
      cart,
      totalPrice,
      fechaOrden
    }

    const db = getFirestore();
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, order).then((doc) => {
      notif(doc.id)
      setDoc(doc ,{id: doc.id}, {merge: true})
      })
    .catch(err => console.log(err))
    .finally(()=> {
      clearAll();
      setUserData({name: "", phone: "", email: "", repEmail: ""})}
      );
}

  return (

    <section>

      {cart.length > 0 &&
        <div className="flex mx-auto w-8/12 mt-10 mb-10 font-bold">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">Items: {totalItems}</div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">TOTAL ${totalPrice}</div>
        </div>}

      <div className='mt-10 text-center'>
      
      {cart.length > 0 && 
      <div>
      <Form handleChange={handleChange} placeOrder={placeOrder} userData={userData}/>
      </div>
      } 
        <div>
        
          <Link to="../">
            <button className="btn btn-primary btn-block w-48">Volver</button>
          </Link>
        </div>
      </div>
    </section>

  )
}

export default Checkout;