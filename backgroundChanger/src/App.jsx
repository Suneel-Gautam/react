import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const array = ["Apple", "Orange", "Banana"];
  const buttons = [
    {
      name: "green",
      bgColor: "bg-green-700",
      textColor: "text-white",
    },
    {
      name: "red",
      bgColor: "bg-red-700",
      textColor: "text-white",
    },
    {
      name: "blue",
      bgColor: "bg-blue-700",
      textColor: "text-white",
    },
    {
      name: "olive",
      bgColor: "bg-olive-200",
      textColor: "text-black",
    },
    {
      name: "gray",
      bgColor: "bg-gray-700",
      textColor: "text-white",
    },
    {
      name: "yellow",
      bgColor: "bg-yellow-600",
      textColor: "text-white",
    },
  ];
  const [color, setColor] = useState("");
  const [bgColor, setbgColor] = useState("");
  return (
    <div className={`h-screen p-10 ${color} ${bgColor}`}>
      <div className="flex flex-col gap-7 ">
        {array.map((item, index) => {
          return <Card key={index} name={item} color={color} />;
        })}
      </div>

      <div className="flex gap-10 m-10 border px-8 py-4 rounded-full absolute  bottom-0 right-0 left-0 bg-white">
        {buttons.map((item, index) => {
          return (
            <button
              className={`py-2 px-8  rounded-full cursor-pointer ${item.bgColor} ${item.textColor} hover:scale-105 transition-all duration-200 ease-out`}
              key={index}
              onClick={() => {
                setColor(item.textColor);
                setbgColor(item.bgColor);
                console.log(color);
                console.log(bgColor);
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
