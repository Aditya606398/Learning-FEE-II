const products = [
  {
    name: "Margherita Pizza",
    desc: "Wood-fired, fresh basil & mozzarella",
    price: "₹299",
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
    accent: "#f97316", // orange
  },
  {
    name: "Classic Cheeseburger",
    desc: "Double patty with melted cheddar",
    price: "₹199",
    qty: 2,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
    accent: "#ef4444", // red
  },
  {
    name: "Salmon Sushi Platter",
    desc: "Fresh salmon nigiri & maki rolls",
    price: "₹449",
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80",
    accent: "#14b8a6", // teal
  },
];

function ProductCard({ name, desc, price, qty, image, accent }) {
  return (
    <div
      style={{
        width: "300px",
        border: `1px solid ${accent}55`,
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#252525",
        color: "white",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
        transition: "transform 0.3s ease",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            backgroundColor: accent,
            color: "#111827",
            fontSize: "12px",
            fontWeight: "700",
            padding: "4px 10px",
            borderRadius: "999px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Food
        </span>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#2d2d2d",
          borderTop: `3px solid ${accent}`,
        }}
      >
        <h2
          style={{
            margin: "0 0 8px 0",
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          {name}
        </h2>

        <p
          style={{
            margin: "0 0 12px 0",
            color: "#9ca3af",
            fontSize: "14px",
          }}
        >
          {desc}
        </p>

        <h3
          style={{
            margin: "8px 0",
            color: accent,
            fontSize: "20px",
          }}
        >
          Price: {price}
        </h3>

        <h3
          style={{
            margin: "8px 0 0 0",
            color: "#d1d5db",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          Quantity: {qty}
        </h3>
      </div>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        padding: "40px",
        background:
          "linear-gradient(135deg, #111827 0%, #1e293b 50%, #312e81 100%)",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
}

export default App;
