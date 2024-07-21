import React from 'react';

const CurrencyInput = ({ amount, currency, onAmountChange, onCurrencyChange, currencies, disabled }) => {
  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={onAmountChange}
        disabled={disabled}
      />
      <select value={currency} onChange={onCurrencyChange}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
