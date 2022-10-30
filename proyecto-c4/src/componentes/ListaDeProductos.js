import CardProducto from "./Card";
import '../hojas-de-estilo/ListaDeProductos.css';

function ListaDeProductos() {

  return(
    <div className='ListaDeProductos-contenedor'>
        <CardProducto 
        id='1' 
        imagen='TV' 
        nombre='TV' 
        precio='2.000.000' 
        descripcion='producto para el hogar'
        estadoCarrito='añadir al carrito'
        />
        <CardProducto 
        id='2' 
        imagen='TV' 
        nombre='TV' 
        precio='2.200.000' 
        descripcion='producto para el hogar'
        estadoCarrito='añadir al carrito'
        />
    </div>
)
}

export default ListaDeProductos;