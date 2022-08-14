import { useState } from "react";
import "../css/carrito.css";
const Carrito = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  function mas() {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("No disponibles");
    }
  }
  function menos() {
    if (count > initial) {
      setCount(count - 1);
    }
  }
  return (
    <div className="conteneda">
      <div className="carrito">
        <div className="btnmenos">
          <button className="btn btn-ghost" onClick={menos}>
            -
          </button>
        </div>
        <div className="monto">{count}</div>
        <div className="btnmas">
          <button className="btn btn-ghost" onClick={mas}>
            +
          </button>
        </div>
      </div>
      <div className="btnAgregar">
        <button
          className="btn btn-primary agregar"
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
export default Carrito;
