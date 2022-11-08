import React from "react";
import Imagen from "./Imagen";

const CrudTableRow = ({ el, setDataToEdit, deleteData, admin }) => {
  let { nombre, valor, stock, imagen, id } = el;

  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{valor}</td>
      <td>{stock}</td>
      <td> <img
            className="img"
            alt="Foto de TV"
            src={(`../imagenes/${imagen}.png`)} /> </td>
      
      
        {admin === 1 ? (<td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>):(<td>
        <button > add Carrito</button>
        </td>)}

      
    </tr>
  );
};

export default CrudTableRow;
