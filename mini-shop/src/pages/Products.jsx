import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";
import products from "../data/products";

function Products() {
  // useDispatch gives us the function used to send actions to the store
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <button className="btn" onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
