import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Total price = sum of (price x quantity) for every item
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Empty cart message
  if (items.length === 0) {
    return (
      <div className="empty">
        <h1>Your cart is empty</h1>
        <button className="btn" onClick={() => navigate("/products")}>
          Go to Products
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>

      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>₹{item.price} each</p>
          </div>

          <div className="qty">
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          </div>

          <p className="item-total">₹{item.price * item.quantity}</p>

          <button
            className="btn btn-danger"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-footer">
        <h2>Total: ₹{total}</h2>
        <button className="btn btn-danger" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
