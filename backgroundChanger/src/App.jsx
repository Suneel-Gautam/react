import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const array = ["Apple","Orange","Banana"];
  return (
    <>
      <h1 className="text-2xl text-amber-700">Hello world!!!!</h1>
      <div className="flex flex-col gap-7 m-10">
        {array.map((item) => {
          return <Card name={item} />;
        })}
      </div>

      <></>
    </>
  );
}

export default App;
