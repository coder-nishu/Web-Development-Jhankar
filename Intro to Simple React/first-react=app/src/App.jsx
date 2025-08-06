import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Actor from "./Actor";
import "./App.css";

export default function App() {
  // const [count, setCount] = useState(0)
  const actors = [
   "Shakib Khan",
   "Apu Biswas",
   "Siam Ahmed",
   "Pori Moni",
   "Jaya Ahsan"
  ]
  return (
    <>
      {/* <div>
          <h1>This is a latest mobile price list</h1>
          <Device name="iphone" price="$999" />
          <Device name="Samsung" price="$699" />
          <Device name="redmi" price="$896" />
        </div> */}
      {
        actors.map(actor =>
          <Actor name={actor}></Actor>
        )
      }
    </>
  );
}

function Device(props) {
  const { name, price } = props;
  return (
    <div>
      <h3>Device: {name}</h3>
      <h6>price: {price}</h6>
    </div>
  );
}
