import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import config from './config.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CurrencyChart = ({ fromCurrency, toCurrency }) => {
  const [chartData, setChartData] = useState(null);

  
  const getDateRange = (days) => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days);
    const formatDate = (date) => date.toISOString().split('T')[0];
    return { startDate: formatDate(startDate), endDate: formatDate(endDate) };
  };

  const { startDate, endDate } = getDateRange(6);

  useEffect(() => {
    const fetchTimeseriesData = async () => {
      const url = `https://api.currencybeacon.com/v1/timeseries?api_key=${config.apiKey}&start_date=${startDate}&end_date=${endDate}&base=${fromCurrency}&symbols=${toCurrency}`;

      try {
        const response = await axios.get(url);
        const data = response.data.response;

        const labels = Object.keys(data).sort();
        const values = labels.map(date => data[date][toCurrency]);

        setChartData({
          labels,
          datasets: [
            {
              label: `Exchange Rate for ${fromCurrency} to ${toCurrency}`,
              data: values,
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
              fill: true,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching timeseries data', error);
      }
    };

    fetchTimeseriesData();
  }, [startDate, endDate, fromCurrency, toCurrency]);

  return (
    <div className="chart-container">
      {chartData ? <Line data={chartData} /> : <p>Loading chart data...</p>}
    </div>
  );
};

export default CurrencyChart;
