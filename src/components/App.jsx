import React, { useState } from "react";

function App() {
  //let count = 0;

  const [count, countState] = useState(0);

  function increase() {
    countState(count + 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
export default App;
