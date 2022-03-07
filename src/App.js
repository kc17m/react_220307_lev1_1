
import './App.css';
import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((initial) => {
      return initial + 1;
    })
  }

  function decrement() {
    setCount((initial) => {
      return initial - 1;
    })
  }

  function res() {
    setCount((initial) => {
      return initial = 0;
    })
  }


  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <h1><button onClick={increment}>+</button></h1>
      <h1><button onClick={decrement}>-</button></h1>
      <h1><button onClick={res}>Reset</button></h1>


    </div>
  );

}

export default App
