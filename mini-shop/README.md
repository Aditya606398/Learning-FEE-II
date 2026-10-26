# Mini Shop (React + React Router + Redux Toolkit)

## Run it
    npm install
    npm run dev

Then open the link shown in the terminal (usually http://localhost:5173).

## Folder structure
    src/
      main.jsx          -> Provider + BrowserRouter
      App.jsx           -> Routes
      store.js          -> configureStore()
      cartSlice.js      -> createSlice() with 5 reducers
      data/products.js  -> 8 sample products
      components/Navbar.jsx
      pages/Home.jsx, Products.jsx, Cart.jsx, About.jsx
      index.css         -> theme + styles
