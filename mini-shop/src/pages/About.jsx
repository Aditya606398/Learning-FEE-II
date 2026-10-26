import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Mini Shop</h1>
      <p>
        Mini Shop is a small online store built as a learning project. We sell
        everyday items like headphones, bags, shoes and more at friendly prices.
      </p>
      <p>This app is built with React, React Router and Redux Toolkit.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  );
}

export default About;
