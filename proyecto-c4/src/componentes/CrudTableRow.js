import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData, admin, estadoCarrito, addCarrito, setEstadoCarrito}) => {
  let { nombre, valor, stock, imagen, id} = el;
  
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
      {estadoCarrito === 1 ? (<td> agregado a la cesta </td>):(<td> {null} </td>) }
        {admin === 1 ? (<td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>):(<td>
        <button onClick={() => addCarrito(id)}> add Carrito</button>
        </td>)}
    </tr>
  );
};

export default CrudTableRow;
