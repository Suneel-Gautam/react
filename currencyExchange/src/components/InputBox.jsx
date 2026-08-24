function InputBox({
  label,
  amount,
  onAmountChanges,
  onCurrencyChanges,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountdisable = false,
  currencydisable = false,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountdisable}
          value={amount}
          onChange={(e) =>
            onAmountChanges &&
            onAmountChanges(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          onChange={(e) =>
            onCurrencyChanges && onCurrencyChanges(e.target.value)
          }
          value={selectedCurrency}
          disabled={currencydisable}
        >
          {currencyOptions.map((currency, index) => {
            return (
              <option key={index} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
export default InputBox;
