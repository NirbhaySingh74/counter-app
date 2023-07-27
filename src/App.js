import "./App.css";
import React, { useState } from "react";
import Header from "./component/Header";

function App() {
  const [num, setNum] = useState(1);
  function inc() {
    setNum(num+1);
  }

  function dec() {
    setNum(num-1);
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <h1 className="heading">{num}</h1>
        <div className="buttons">
          <button onClick={inc}>Increment</button>
          <button onClick={dec}>deccrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
