import React from 'react'

const CrudTableRowVentas = ({ el, setDataToEdit, deleteData, admin }) => {
    let { referencia, monto, fecha, id } = el;

  return (
    <tr>
    <td>{id}</td>
    <td>{referencia}</td>
    <td>{monto}</td>
    <td>{fecha}</td>
      {admin === 1 ? (<td>
      <button onClick={() => setDataToEdit(el)}>Editar</button>
      <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>):(<td>
      <button > add Carrito</button>
      </td>)}   
    </tr>
  )
}

export default CrudTableRowVentas