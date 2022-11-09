import React from 'react'
import {Table} from "reactstrap";
import CrudTableRowVentas from './CrudTableRowVentas';

const CrudTableVentas = ({data, setDataToEdit, deleteData, admin}) => {
  return (
    <div>
        <h3> Tabla de ventas </h3>
    <Table>
    <thead>
    <tr>
      <th> ID </th>
      <th> Referencia </th>
      <th> Monto </th>
      <th> Fecha </th>
    </tr>
  </thead>

  <tbody>
    {data.length > 0 ? (
    data.map((el) => (
        <CrudTableRowVentas
        key={el.id}
        el={el}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
        admin={admin}
        />
    ))
    ) : (
    <tr>
        <td colSpan="4">Sin datos</td>
    </tr>
    )}
  </tbody>
  </Table>
    </div>
  )
}

export default CrudTableVentas