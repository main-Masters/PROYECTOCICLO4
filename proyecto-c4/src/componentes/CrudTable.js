import React from 'react'
import {Table} from "reactstrap";
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, setDataToEdit, deleteData, admin}) => {
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