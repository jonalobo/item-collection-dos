import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailItem } from "../index";

import ItemDetail from "../components/ItemDetail";
import "../css/ItemDetailContainer.css";
const ItemDetailContainer = () => {
  const { id } = useParams();

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    getDetailItem(id).then((snapshot) => {
      setDatos(snapshot.data());
    });
  }, [id]);

  return (
    <>
      <ItemDetail producto={datos} />
    </>
  );
};
export default ItemDetailContainer;
