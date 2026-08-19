import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFCHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) str += "0123456789";
    if (isChar) str += "!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [isNumber, isChar, length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      passwordGenerator();
    }, 0);

    return () => clearTimeout(timer);
  }, [isNumber, isChar, length, passwordGenerator]);

  return (
    <div className="h-screen bg-black text-white flex justify-center items-start pt-40">
      <div className=" border p-4 rounded-xl w-3xl bg-gray-800 ">
        <h1 className="text-2xl">Password Generator </h1>
        <div className="flex mt-4">
          <input
            type="text"
            className="border bg-white text-black outline-none rounded-r-none rounded-md  p-2 w-full"
            value={password}
            placeholder="Password"
            disabled
          />
          <button className="bg-blue-800 px-8 py-4 rounded-md rounded-l-none cursor-pointer hover:bg-blue-700 transition-all duration-200 ease-in-out">
            copy
          </button>
        </div>
        <div className="mt-6 flex gap-12">
          <div className="flex gap-2 items-center">
            <input
              type="range"
              name=""
              id=""
              min={0}
              max={100}
              onChange={(e) => setLength(e.target.value)}
            />
            <div className="text-xl">length({length})</div>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="border"
              value={isNumber}
              onChange={() => setIsNumber((prev) => !prev)}
            />
            <div className="text-xl">Number</div>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="border"
              value={isChar}
              onChange={() => setIsChar((prev) => !prev)}
            />
            <div className="text-xl">Char</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
