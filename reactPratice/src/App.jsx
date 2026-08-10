import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Welcome Here</h1>
      <div>
        <h2>{count}</h2>
        <button
          onClick={() => {
            if (count < 20) {
              setCount(count + 1);
            }
          }}
        >
          Add number
        </button>
        <br />
        <button
          onClick={() => {
            if(count > 0){
              setCount(count - 1);
            }
          }}
        >
          Decrease number
        </button>
      </div>
    </>
  );
}

export default App;
