const ProductItem = ({ data, addToCart }) => {
    let { nombre, valor, stock, imagen, id} = data;
    return (
      <div style={{ border: "thin solid gray", padding: "3rem" }}>
        <h4>{nombre}</h4>
        <h5>$ {valor}.00</h5>
        <h6>stock: {stock}</h6>
        <h7>{imagen}</h7>
        <button onClick={() => addToCart(id)}>Agregar</button>
      </div>
    );
  };
  
  export default ProductItem;