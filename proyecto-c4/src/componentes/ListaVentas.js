import {Table} from "reactstrap"

function ListaVentas(){
  return(
    
<Table>
  <thead>
    <tr>
      <th> FECHA </th>
      <th> Referecia </th>
      <th> Nombre Producto </th>
      <th>  Precio unitario </th>
      <th>  Cantidad </th>
      <th> TOTAL </th>
    </tr>

  </thead>

  <tbody>
    <tr>
      <th scope="row"> 30/10/2022 </th>
      <td>  1 </td>
      <td> TV </td>
      <td> 2000000 </td>
      <td>  1 </td>
      <td> 2000000 </td>
    </tr>

    <tr>
      <th scope="row"> 30/10/2022 </th>
      <td> 2 </td>
      <td> TV </td>
      <td> 2200000 </td>
      <td>  1 </td>
      <td> 2200000 </td>
    </tr>

  </tbody>
</Table>
  )
}

export default ListaVentas;