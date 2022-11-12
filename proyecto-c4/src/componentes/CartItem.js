const CartItem = ({ data, delFromCart }) => {
    let { id, nombre, valor, quantity } = data;
  
    return (
      <div style={{ borderBottom: "thin solid gray" }}>
        <h4>{nombre}</h4>
        <h5>
          ${valor}.00 x {quantity} = ${valor * quantity}.00
        </h5>
        <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
        <br />
        <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
        <br />
        <br />
      </div>
    );
  };
  
  export default CartItem;