import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

const Popularroutes = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Register necessary chart elements and scales
    Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    // Data
    const data = {
      labels: ['Route A-B', 'Route D-X','Route E-U','Route S-J','Route A-C'],
      datasets: [
        {
          label: 'Rides',
          data: [3900, 1900,1500,639,57],
          backgroundColor: ['rgba(231,234,255)', 'rgba(231,234,255)'],
        },
      ],
    };

    // Options
    const options = {
      indexAxis: 'y', // Display as horizontal bar chart
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
        },
      },
    };

    // Destroy existing chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create new chart instance
    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default Popularroutes;
