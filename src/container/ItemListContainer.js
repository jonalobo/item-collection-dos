/* import ItemCount from '../components/ItemCount' */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Itemlist from "../components/Itemlist";
import { getItems, getItemsFiltered } from '../index';
import "../css/ItemListContainer.css";


const ItemListContainer = () => {

  let { categoria } = useParams();
  const [datos, setDatos] = useState([]);

  useEffect(() => {

    (categoria === undefined ? (getItems()) : getItemsFiltered(categoria)).then((snapshot) => {
        setDatos(
          snapshot.docs.map((document) => ({
            ...document.data(),
          }))
        );
      });
    }, [categoria]);

  return (
    <div className="container">
      <Itemlist datos={datos}/>
    </div>
  );
};
export default ItemListContainer;
