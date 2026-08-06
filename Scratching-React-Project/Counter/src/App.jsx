import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter-box">
        <h1>Counter App</h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button
            className="minus"
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
          >
            -
          </button>

          <button
            className="plus"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>

        <button
          className="reset"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;