import { useState, useEffect } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]); 
  const [rate, setRate] = useState(null);

  useEffect(() => {
    // Flag to handle cleanup/race conditions
    let ignore = false;

    // Fetch the Bitcoin price for the selected currency
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then(response => response.json())
      .then(data => {
        // Only update state if the component is still mounted and
        // this is the latest request (not an outdated one)
        if (!ignore) {
          setRate(data.bitcoin[currency.toLowerCase()]);
        }
      })
      .catch(error => {
        if (!ignore) {
          console.error("Error fetching Bitcoin data:", error);
          setRate(null);
        }
      });

    // Cleanup function that runs when the component unmounts
    // or before the effect runs again due to dependency changes
    return () => {
      ignore = true; // Set flag to ignore any in-progress fetch results
    };
  }, [currency]); // Re-run effect when currency changes

  const options = currencies.map(curr =>
    <option value={curr} key={curr}>{curr}</option>
  );

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {rate !== null ? (
        <p>1 Bitcoin = {rate} {currency}</p>
      ) : (
        <p>Loading rate...</p>
      )}
    </div>
  );
}

export default BitcoinRates;