const yearLabels = [
  'Philippines', 'Vietnam', 'Indonesia',
  'Malaysia', 'Thailand', 'Singapore'
]

let gdp = new Chart(document.querySelector('#gdp'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [
      {
        label: 'Cash Dividends',
        data: [ 5.60, 5.05, 5.04, 3.70, 1.90, 1.20 ],
        backgroundColor: [
          '#E7E670',
          '#90C8D8',
          '#90C8D8',
          '#90C8D8',
          '#90C8D8',
          '#90C8D8'
        ],
        borderRadius: 8
      }
    ]
  },
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          drawTicks: false,
          display: false,
        },
        ticks: {
          display: false
        }
      },
      y: {
        grid: {
          display: false,
          drawBorder: false
        }
      }
    },
    responsive: true,
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
          return `${value} %`
        }
      }
    }
  }
})



