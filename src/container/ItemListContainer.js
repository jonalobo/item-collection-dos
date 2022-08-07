/* import ItemCount from '../components/ItemCount' */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Itemlist from "../components/Itemlist";
import "../css/ItemListContainer.css";
const ItemListContainer = () => {


  return (
    <div className="container">
      {/* <ItemCount 
      stock="10"
      initial= '1'
      /> */}
      <Itemlist />
    </div>
  );
};
export default ItemListContainer;
