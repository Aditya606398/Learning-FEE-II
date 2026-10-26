import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  // Read the cart items from the Redux store
  const items = useSelector((state) => state.cart.items);

  // Total number of units in the cart (for the badge)
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <h2 className="logo">Mini Shop</h2>
      <div className="nav-links">
        {/* NavLink adds the "active" class to the current page's link */}
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart ({cartCount})</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
