import { useState } from "react";
import Fiction from "./Components/Fiction";
import NonFiction from "./Components/NonFiction";

function App() {
  const [book, setBook] = useState(true);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      
      <h1>📚 Mini Book Store</h1>

      <button
        data-testid="toggle-btn"
        onClick={() => setBook(!book)}
        style={{
          padding: "10px 20px",
          margin: "20px 0",
          cursor: "pointer"
        }}
      >
        {book ? "Show Non-Fiction" : "Show Fiction"}
      </button>

      <div data-testid="conditional-container">
        {book ? <Fiction /> : <NonFiction />}
      </div>

    </div>
  );
}

export default App;