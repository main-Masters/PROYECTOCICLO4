import React from 'react'
import { useState } from 'react';
import {Table} from "reactstrap";
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, setDataToEdit, deleteData, admin}) => {
  const [estadoCarrito, setEstadoCarrito] = useState(0)

  const addCarrito = (id) => { if(data.id === id){
    setEstadoCarrito(1)}
    else {setEstadoCarrito(0)}
  }


  return (
    <div>
        <h3> Tabla de productos </h3>
    <Table>
    <thead>
    <tr>
      <th> ID </th>
      <th> Nombre </th>
      <th> Valor </th>
      <th> Stock </th>
      <th> imagen.png </th>
      <th> acciones </th>
    </tr>
  </thead>

  <tbody>
    {data.length > 0 ? (
    data.map((el) => (
        <CrudTableRow
        estadoCarrito={estadoCarrito}
        setEstadoCarrito={setEstadoCarrito}
        addCarrito={addCarrito}
        key={el.id}
        el={el}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
        admin={admin}
        />
    ))
    ) : (
    <tr>
        <td colSpan="6">Sin datos</td>
    </tr>
    )}
  </tbody>
  </Table>
    </div>
  )
}

export default CrudTable