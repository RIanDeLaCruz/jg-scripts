const yearLabels = [ '2019', '2020', '2021', '2022', '2023' ]

let meralco = new Chart(document.querySelector('#meralco'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'Meralco Dividends',
      data: [5.4, 5.0, 4.3, 5.1, 5.8],
      backgroundColor: [
        '#9AB8F4',
        '#9AB8F4',
        '#9AB8F4',
        '#9AB8F4',
        '#2C64CF'
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
            return value; // Display the actual data value
        }
      }
    }
  }
})

let sgl = new Chart(document.querySelector('#sgl'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'Singapore Land Dividends',
      data: [ 0.7, 0.8, 0.7, 0.7, 0.8 ],
      backgroundColor: [
        '#9AB8F4',
        '#9AB8F4',
        '#9AB8F4',
        '#9AB8F4',
        '#2C64CF'
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
        max: 0.9
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
            return value; // Display the actual data value
        }
      }
    }
  }
})

let pldt = new Chart(document.querySelector('#pldt'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'PLDT Dividends',
      data: [ 1.2, 1.9, 2.0, 2.8, 2.6 ],
      backgroundColor: [
        '#9AB8F4',
        '#9AB8F4',
        '#9AB8F4',
        '#9AB8F4',
        '#2C64CF'
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
            return value; // Display the actual data value
        }
      }
    }
  }
})
