import './App.css'
import Productcard from './Productcard'

function App() {
  const a = 24;
  const b = 14;
  const name = "Aditya";
  const flag = false;
  const student = {
    name: "pikachu",
    age: 18
  }
  const url = "https://www.google.com/";
  const fruits = ["apple", "mango", "banana"];
  function greet() {
    return "Welcome";
  }

  return (
    <>
      <h1>Hello React!</h1>
      <br></br>
      <p>{a + b}</p>
      <br></br>
      <p>Name: {name}</p>
      <br></br>
      <p ClassName="text">hello</p>
      <br></br>
      <p>{greet()}</p>
      <br></br>
      <p>{name.toUpperCase()}</p>
      <br></br>
      <p>{flag ? "true value" : "false value"}</p>
      <br></br>
      <p>{student.name}</p>
      <br></br>
      <p>{fruits[1]}</p>
      <br></br>
      <p>{fruits.join("*")}</p>
      <br></br>
      <p style={{ color: "red", fontSize: "22px" }}>Ashok Chitkara</p>
      <br></br>
      <a href={url} target="_blank"><img src="https://static.vecteezy.com/system/resources/thumbnails/028/667/072/small/google-logo-icon-symbol-free-png.png" style={{ width: "200px", height: "75px" }}></img></a>
      <div style={{ border: 1, borderColor: "white", width: "15vh", height: "25vh" }}>Namaste</div>
      <ul>
        <li>{fruits[0]}</li>
        <li>{fruits[1]}</li>
        <li>{fruits[2]}</li>
      </ul>

      <ul>
        {fruits.map((fruit,index)=> {
          // return <li >{fruit}</li>
          return <li key = {index}>{fruit}</li>
        })}
      </ul>


        <Productcard/>
    </>
  );
}

export default App;