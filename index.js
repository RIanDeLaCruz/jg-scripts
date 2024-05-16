const ctx = document.getElementById('myChart');

new Chart(ctx, {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: [ '2019', '2020', '2021', '2022', '2023' ],
    datasets: [{
      label: 'Cash Dividends',
      data: [ 0.37, 0.38, 0.38, 0.40, 0.40 ],
      backgroundColor: [
        '#2C64CF',
        '#2C64CF',
        '#2C64CF',
        '#2C64CF',
        '#08358D'
      ],
      borderRadius: 8
    }]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        max: 0.45
      }
    },
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        offset: 8,
        color: [
          '#2C64CF',
          '#2C64CF',
          '#2C64CF',
          '#2C64CF',
          '#08358D'
        ],
        font: {
          weight: 'bold',
          size: 14
        },
        formatter: function (value, context) {
            return value; // Display the actual data value
        }
      }
    }
  }
});
