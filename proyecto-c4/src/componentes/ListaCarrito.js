import CardProducto from "./Card";
import '../hojas-de-estilo/ListaDeProductos.css';

function ListaCarrito() {

  return(
    <div className='ListaDeProductos-contenedor'>
        <CardProducto 
        id='1' 
        imagen='TV' 
        nombre='TV' 
        precio='2.000.000' 
        descripcion='producto para el hogar'
        estadoCarrito='quitar del carrito' 
        />
    </div>
)
}

export default ListaCarrito;