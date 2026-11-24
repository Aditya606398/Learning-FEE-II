import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const[products,setProducts] = useState([]);
  const [skip,setSkip] = useState(0);
  const [name,setName] = useState("");
  const [cat, setCat] = useState("");

useEffect(() => {
  let endpoint = `https://dummyjson.com/products?limit=5&skip=${skip}`;

  if (cat.trim()) {
    endpoint = `https://dummyjson.com/products/category/${cat.trim()}?limit=5&skip=${skip}`;
  } else if (name.trim()) {
    endpoint = `https://dummyjson.com/products/search?q=${name}&limit=5&skip=${skip}`;
  }

  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data.products);
      console.log(data);
    })
    .catch((err) => console.error("Error fetching products: ", err));
}, [skip, name, cat]);


  function handleNext() {
    setSkip((prevSkip) => prevSkip + 5);
  }

  function handlePrev() {
    if (skip - 5 < 0) {
      setSkip(0);
    }
    else {
      setSkip((prevSkip) => prevSkip - 5);
    }
  }

  function handleSearchChange(e) {
    setName(e.target.value);
    setCat("");
    setSkip(0);
  }

  function handleCatChange(e) {
    setCat(e.target.value);
    setName("");
    setSkip(0);
  }

  return (
    <>
      <h1>ShopSmart</h1>
      <input type='text' placeholder='Search by name...' value={name} onChange={handleSearchChange}/>
      <input type='text' placeholder='Search by category...' value={cat} onChange={handleCatChange}/>
      <ol>
        {products.map((product) => (
          <li key = {product.id}><img src={product.images[0]} height={60}></img> {product.title} -${product.price}</li>
        ))}
      </ol>
      <span>Page: {skip / 5 + 1}</span>
      <br></br>
      <button onClick={handleNext} disabled={products.length < 5}>Next</button>
      <button onClick={handlePrev} disabled={skip === 0}>Previous</button>
    </>
  )
}

export default App
