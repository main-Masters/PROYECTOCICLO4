import React from 'react'
import {Table} from "reactstrap";

const CrudTableCarrito = () => {
  return(
   <div>

<h3> Tabla de productos </h3>
    <Table>
    <thead>
    <tr>
      <th> ID </th>
      <th> Nombre </th>
      <th> Valor </th>
      <th> Cant </th>
      <th> Imagen </th>
      <th> acciones </th>
    </tr>

  </thead>
  <tbody>
    
  </tbody>
  </Table>

   </div>
  )
}

export default CrudTableCarrito