import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const handleConvert = (e) => {
    e.preventDefault();
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form on>
              <div className="w-full mb-1">
                <InputBox
                  label={"from"}
                  amount={amount}
                  onAmountChanges={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                  currencyOptions={options}
                  onCurrencyChanges={(currency) => setFrom(currency)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
                  Swap
                </button>
              </div>
              <div className="w-full mb-1">
                <InputBox
                  label={"to"}
                  amount={convertedAmount}
                  amountdisable
                  selectedCurrency={to}
                  currencyOptions={options}
                  onCurrencyChanges={(currency) => setTo(currency)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={handleConvert}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
