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


let delayed = null
let inflation = new Chart(document.querySelector('#inflation'), {
  plugins: [ChartDataLabels],
  type: 'line',
  data: {
    labels: [
      '1/1/2023', '2/1/2023', '3/1/2023',
      '4/1/2023', '5/1/2023', '6/1/2023',
      '7/1/2023', '8/1/2023', '9/1/2023',
      '10/1/2023', '11/1/2023', '12/1/2023'
    ],
    datasets: [
      {
        label: 'Overall Inflation',
        data: [ 9, 9, 8, 7, 6, 5, 5, 5, 6, 5, 4, 4 ],
        backgroundColor: '#90C8D8',
        borderColor: '#90C8D8',
        datalabels: {
          color: '#90C8D8',
        },
      },
      {
        label: 'Rice Inflation',
        data: [
          2.7, 2.2, 2.6,
          2.9, 3.4, 3.6,
          4.2, 8.7, 17.9,
          3.2, 15.8, 19.6
        ],
        backgroundColor: '#2DA574',
        borderColor: '#2DA574',
        datalabels: {
          color: '#2DA574',
        }
      }
    ]
  },
  options: {
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 20
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



let tourist = new Chart(document.querySelector('#tourist'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: [2019, 2020, 2021, 2022, 2023],
    datasets: [
      {
        data: [482.15, 82.24, 8.49, 214.58, 482.54],
        label: 'Tourist Receipts in the PH',
        type: 'line',
        backgroundColor: '#2DA574',
        borderColor: '#2DA574',
        yAxisID: 'y1',
        datalabels: {
          display: false
        },
        pointStyle: 'circle'
      },
      {
        data: [ 8.26, 1.48, 0.16, 2.03, 5.45 ],
        label: 'Tourist Arrivals in the PH',
        backgroundColor: [
          '#2C64CF',
          '#2C64CF',
          '#2C64CF',
          '#2C64CF',
          '#08358D'
        ],
        borderColor: '#2C64CF',
        borderRadius: 8,
        yAxisID: 'y'
      }
    ],
  },
  options: {
    interaction: {
      mode: 'index',
      intersect: false
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        stacked: true
      },
      y: {
        beginAtZero: true,
        max: 10
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right'
      }
    },
    plugins: {
      tooltip: {
        titleColor: '#737B8E',
        titleFont: {
          size: 14,
          weight: 400
        },
        bodyFont: {
          size: 16
        },
        usePointStyle: true,
      },
      legend: {
        onClick: null,
        labels: {
          filter: item => item.text,
          usePointStyle: true,
          boxWidth: 6
        }
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        font: {
          weight: 'bold',
          size: 14
        },
        formatter: function (value, context) {
            return value; // Display the actual data value
        },
      }
    }
  }
})
