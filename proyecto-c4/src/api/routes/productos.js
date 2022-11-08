const {Router} = require('express');
const router = new Router();
const _ = require('underscore');

const productos = require('../sample.json');

router.get("/", (req, res) => {
    res.json(productos);
});


router.post('/', (req, res) => {
    const id = productos.length + 1;
    const { nombre, valor, Stock, calificacion, imagen } = req.body;
    const newProducto = { ...req.body, id };
    if (nombre && valor && Stock && calificacion && imagen) {
        productos.push(newProducto);
        res.json(productos);
    } else {
        res.status(500).json({error: 'Se ha presentado un error, revisa que se haya enviado todos los campos.'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, valor, Stock, calificacion, imagen } = req.body;
    if (id && nombre && valor && Stock && calificacion && imagen) {
        _.each(productos, (producto, i) => {
            if (producto.id === id) {
                producto.nombre = nombre;
                producto.valor = valor;
                producto.Stock = Stock;
                producto.calificacion = calificacion;
                producto.imagen = imagen;
            }
        });
        res.json(productos);
    } else {
        res.status(500).json({error: 'Se ha presentado un error, revisa que se haya enviado todos los campos.'});
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
        _.each(productos, (producto, i) => {
            if (producto.id == id) {
                productos.splice(i, 1);
            }
        });
        res.send(productos);
    });

module.exports = router;