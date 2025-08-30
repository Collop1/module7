import { useState, useContext } from "react";
import { useBitcoinRates } from "../hooks/useBitcoinRates";
import Emoji from './Emoji';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { rate, error, loading } = useBitcoinRates(currency);
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
      {/* Show rate if available */}
      {rate !== null && !error && (
        <p>1 Bitcoin = {rate} {currency} <Emoji /></p>
      )}
      
      {/* Show loading message if loading and no error */}
      {loading && !error && (
        <p>Loading rate...</p>
      )}
      
      {/* Show error message if there is an error */}
      {error && (
        <p>{error}</p>
      )}
    </div>
  );
}

export default BitcoinRates;