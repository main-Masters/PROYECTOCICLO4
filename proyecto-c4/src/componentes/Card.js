import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"
import '../hojas-de-estilo/ListaDeProductos.css';

function CardProducto(props){

    return(
      <Card  className="Card-contenedor" >
        <img
            className="img"
            alt="Foto de TV"
            src={require(`../imagenes/${props.imagen}.png`)}
        />
        <CardBody>
            <CardTitle tag="h5"> {props.nombre} - {props.id} </CardTitle>
            <CardSubtitle  className="mb-2 text-muted" tag="h6" >
            {props.precio}
            </CardSubtitle>
            <CardText> {props.descripcion} </CardText>
            <Button> {props.estadoCarrito} </Button>
        </CardBody>
      </Card>
    )
}
export default CardProducto;