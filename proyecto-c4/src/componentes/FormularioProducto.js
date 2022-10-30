import React from "react";
import { Form, FormGroup, Label, Input, FormText, Button} from "reactstrap"

function FormularioProducto(){
    return(
        <Form>
            <FormGroup>
                <Label> ref: </Label>
                <Input
                id="Id"
                name="id"
                placeholder="Referencia del producto"
                type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label > Nombre: </Label>
                <Input
                id="nombre"
                name="nombre"
                placeholder="Nombre del producto"
                type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label > Precio: </Label>
                <Input
                id="precio"
                name="precio"
                placeholder="Precio del producto"
                type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label > Descripcion: </Label>
                <Input
                id="Descripcion"
                name="Descripcion"
                placeholder="Descripcion del producto"
                type="textarea"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile"> Imagen </Label>
                <Input id="imagen" name="imagen" type="file" />
                <FormText>
                Porfavor cargue la imagen en formato (.png).
                </FormText>
            </FormGroup>
            <Button> Agregar </Button>
        </Form>
    )
}

export default FormularioProducto;