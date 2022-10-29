import {Table} from "reactstrap";

function Lista_productos(){
return(
<Table>
  <thead>
    <tr>
      <th>
        Referencia
      </th>
      <th>
        categoria
      </th>
      <th>
        producto
      </th>
      <th>
        imagen de producto
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        electrodomesticos
      </td>
      <td>
        television
      </td>
      <td>
        @@@@@@@
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        muebles
      </td>
      <td>
        sillon
      </td>
      <td>
        @@@@@@@@
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
     herramienta
      </td>
      <td>
        taladro
      </td>
      <td>
        @@@@@@@@
      </td>
    </tr>
  </tbody>
</Table>
)
}
export default Lista_productos;