import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CurrencyChart from './CurrencyChart';

const App = () => {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        setRates(response.data.rates);
        setError(null);
      } catch (err) {
        setError('Failed to fetch exchange rates');
      }
    };
    fetchRates();
  }, [fromCurrency]);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const convertCurrency = (amount, fromRate, toRate) => {
    return (amount / fromRate) * toRate;
  };

  const convertedAmount = convertCurrency(amount, rates[fromCurrency], rates[toCurrency]);

  return (
    <div className="app-container">
      <h1>Currency Converter</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="input-group">
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
        />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <input
          type="number"
          value={convertedAmount}
          disabled
        />
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <CurrencyChart fromCurrency={fromCurrency} toCurrency={toCurrency}/>
    </div>
  );
};

export default App;
