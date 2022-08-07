import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ItemDetail from "../components/ItemDetail";
import "../css/ItemDetailContainer.css";
const ItemDetailContainer = () => {
  const { id } = useParams();

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemRef = doc(db, "items", id);
    getDoc(itemRef).then((snp) => {
      if (snp.exists()) {
        setDatos({ id: snp.id, ...snp.data() });
      }
    });
  }, []);

  return (
    <>
      <ItemDetail producto={datos} />
    </>
  );
};
export default ItemDetailContainer;
