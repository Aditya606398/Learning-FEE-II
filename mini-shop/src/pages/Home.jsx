import { useNavigate } from "react-router-dom";

function Home() {
  // useNavigate lets us change pages from code (e.g. on button click)
  const navigate = useNavigate();

  return (
    <div className="banner">
      <h1>Welcome to Mini Shop</h1>
      <p>Simple products, simple prices. Start shopping today!</p>
      <div className="banner-buttons">
        <button className="btn btn-light" onClick={() => navigate("/products")}>
          Shop Products
        </button>
        <button className="btn btn-light" onClick={() => navigate("/cart")}>
          View Cart
        </button>
      </div>
    </div>
  );
}

export default Home;
