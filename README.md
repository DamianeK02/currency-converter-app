# Currency Converter App

## Overview
Currency Converter App is a React-based web application that allows users to convert currencies and visualize exchange rate trends. Users can input an amount, select currencies to convert between, and view a historical chart of exchange rates.

## Features
- **Currency Conversion**: Convert amounts between various currencies.
- **Real-time Exchange Rates**: Fetch the latest exchange rates for selected currencies.
- **Historical Data Visualization**: View historical exchange rates on a line chart.
- **Error Handling**: Display error messages when data fetching fails.

## Installation

### Prerequisites
- Node.js
- npm

### Steps
1. **Clone the repository**:
    ```bash
    git clone https://gitlab.com/DamianeK02/currency-converter-app.git
    cd currency-converter-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up the API key**:
   - Open `config.js`.
   - Replace `'your_currencybeacon_api_key'` with your actual currencybeacon API key:
    ```javascript
    const config = {
      apiKey: 'your_currencybeacon_api_key'
    };
    
    export default config;
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

## Project Structure
```bash
currency-converter
│ README.md
│ package.json
│ .gitignore
│
├───public
│ index.html
│ favicon.ico
│
├───src
│ App.js
│ App.css
│ config.js
│ index.js
│ CurrencyChart.js
│ CurrencyInput.js
│ ErrorMessage.js
```

## Usage
1. Open the application in your browser.
2. Enter the amount you wish to convert.
3. Select the currencies to convert from and to.
4. View the converted amount.
5. Check the historical exchange rates on the chart.

## Dependencies
- **React**: A JavaScript library for building user interfaces.
- **axios**: A promise-based HTTP client for the browser and Node.js.
- **chart.js**: A JavaScript library for creating charts.
- **currencybeacon API**: API for fetching currency exchange rates and historical data.

## Contributing
If you wish to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push your branch to your forked repository.
4. Create a pull request with a description of your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- currencybeacon for providing the currency data API.
