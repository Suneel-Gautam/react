import "./App.css";

function App() {
  return (
    <div className="h-screen bg-black text-white flex justify-center items-start pt-40">
      <div className=" border-1 p-4 rounded-xl w-3xl bg-gray-800 ">
        <h1 className="text-2xl">Password Generator </h1>

        <div className="flex mt-4">
          <input
            type="text"
            className="border bg-white text-black outline-none rounded-r-none rounded-md  p-2 w-[100%]"
          />
          <button className="bg-blue-800 px-8 py-4 rounded-md rounded-l-none cursor-pointer hover:bg-blue-700 transition-all duration-200 ease-in-out">
            copy
          </button>
        </div>

        <div className="mt-6 flex gap-12">
          <div className="flex gap-2 items-center">
            <input type="range" name="" id="" min={0} max={100} />
            <div className="text-xl">length(5)</div>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" className="border" />
            <div className="text-xl">Number</div>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" className="border" />
            <div className="text-xl">Char</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
