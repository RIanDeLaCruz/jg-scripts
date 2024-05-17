const yearLabels = [ '2019', '2020', '2021', '2022', '2023' ]

const topLabels = {
  id: 'topLabels',
  afterDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, scales: { x, y } } = chart
    chart.data.datasets[0].data.forEach((datapoint, datapointIndex) => {
      const datasetArray = []
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        datasetArray.push(dataset.data[datapointIndex])
      })

      const totalSum = function(total, values) {
        return total+values
      }
      let sum = datasetArray.reduce(totalSum, 0)
      ctx.font = 'bold 14px Arial'
      ctx.fillStyle = '#08358D'
      ctx.textAlign = 'center'
      ctx.fillText(
        sum.toFixed(1),
        x.getPixelForValue(datapointIndex),
        chart.getDatasetMeta(4).data[datapointIndex].y - 8
      )
    })
  }
}

const coreLabel = {
  id: 'coreLabel',
  afterDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, scales: { x, y } } = chart
    chart.data.datasets[0].data.forEach((datapoint, datapointIndex) => {
      const datasetArray = []
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        if(dataset.label) {
          datasetArray.push(dataset.data[datapointIndex])
        }
      })

      const totalSum = function(total, values) {
        return total+values
      }
      let sum = datasetArray.reduce(totalSum, 0)
      ctx.font = 'bold 14px Arial'
      ctx.fillStyle = '#08358D'
      ctx.textAlign = 'center'
      ctx.fillText(
        sum.toFixed(1),
        x.getPixelForValue(datapointIndex),
        chart.getDatasetMeta(6).data[datapointIndex].y - 8
      )
    })
  }
}

let fyRevenue = new Chart(document.querySelector('#fyr'), {
  plugins: [ChartDataLabels, topLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [
      {
        label: 'URC',
        data: [ 114.4, 113.2, 117.0, 149.9, 158.4 ],
        backgroundColor: [
          '#DA3553BF',
          '#DA3553BF',
          '#DA3553BF',
          '#DA3553BF',
          '#DA3553'
        ],
        datalabels: {
          color: '#FFF6F8',
        },
        borderRadius: 8
      },
      {
        label: 'RLC',
        data: [ 33.5, 27.5, 35.6, 43.4, 39.0 ],
        backgroundColor: [
          '#004C97BF',
          '#004C97BF',
          '#004C97BF',
          '#004C97BF',
          '#004C97'
        ],
        datalabels: {
          color: '#FFF6F8',
        },
        borderRadius: 8
      },
      {
        label: 'CEB',
        data: [ 84.8, 22.6, 15.7, 56.8, 90.6 ],
        backgroundColor: [
          '#E7E670BF',
          '#E7E670BF',
          '#E7E670BF',
          '#E7E670BF',
          '#E7E670'
        ],
        datalabels: {
          color: '#08358D',
        },
        borderRadius: 8
      },
      {
        label: 'JGSOC',
        data: [ 29.1, 21.3, 40.3, 36.0, 38.0 ],
        backgroundColor: [
          '#2DA574BF',
          '#2DA574BF',
          '#2DA574BF',
          '#2DA574BF',
          '#2DA574'
        ],
        datalabels: {
          color: '#FFF6F8',
        },
        borderRadius: 8
      },
      {
        label: 'Others',
        data: [ 15.4, 10.5, 12.7, 15.8, 17.7 ],
        backgroundColor: [
          '#9AB8F4BF',
          '#9AB8F4BF',
          '#9AB8F4BF',
          '#9AB8F4BF',
          '#9AB8F4'
        ],
        datalabels: {
          color: '#08358D',
        },
        borderRadius: 8
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        stacked: true
      },
      y: {
        beginAtZero: true,
        stacked: true
      },
    },
    responsive: true,
    plugins: {
      legend: {
        onClick: null,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        offset: -28,
        font: {
          weight: 'bold',
          size: 14
        },
        formatter: function (value, context) {
            return value; // Display the actual data value
        },
        display: function(context) {
          if (window.matchMedia('(hover:hover)').matches) {
            return context.active
          } else {
            return true
          }
        }
      }
    }
  }
})

let delayed = null

let coreNI = new Chart(document.querySelector('#coreNI'), {
  plugins: [ChartDataLabels, coreLabel],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [
      {
        data: [ 25.3, 0.5, 3.5, 6.2, 19.6 ],
        type: 'line',
        order: 0,
        backgroundColor: '#2C64CF',
        borderColor: '#2C64CF',
        borderRadius: 8
      },
      {
        label: 'JGSOC',
        data: [ -1.5, -2.4, -1.7, -13.8, -12.9 ],
        backgroundColor: '#2DA574',
        datalabels: {
          color: '#FFF6F8',
        },
        borderRadius: 8
      },
      {
        label: 'URC',
        data: [ 6.0, 6.4, 5.8, 6.4, 6.7 ],
        backgroundColor: '#DA3553',
        datalabels: {
          color: '#FFF6F8',
        },
        borderRadius: 8
      },
      {
        label: 'RLC',
        data: [ 5.3, 3.3, 4.8, 6.1, 8.2 ],
        backgroundColor: '#004C97',
        datalabels: {
          color: '#FFF6F8',
        },
        borderRadius: 8
      },
      {
        label: 'CEB',
        data: [ 6.0, -14.8, -14.9, -7.3, 5.2 ],
        backgroundColor: '#E7E670',
        datalabels: {
          color: '#08358D',
        },
        borderRadius: 8
      },
      {
        label: 'RBank',
        data: [ 0.4, 0.6, 0.7, 0.8, 0.4 ],
        backgroundColor: '#A8DB80',
        datalabels: {
          color: '#FFF6F8',
        },
        borderRadius: 8
      },
      {
        label: 'Others',
        data: [ 9.0, 7.4, 8.8, 14.0, 12.0 ],
        backgroundColor: '#9AB8F4',
        datalabels: {
          color: '#08358D',
        },
        borderRadius: 8
      },
    ],
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
          display: false
        },
        stacked: true
      },
      y: {
        beginAtZero: true,
        stacked: true
      },
    },
    plugins: {
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
        offset: -28,
        font: {
          weight: 'bold',
          size: 14
        },
        formatter: function (value, context) {
            return value; // Display the actual data value
        },
        display: function(context) {
          if (window.matchMedia('(hover:hover)').matches) {
            return context.active
          } else {
            return true
          }
        }
      }
    }
  }
})

let cashDividends = new Chart(document.querySelector('#cashDividends'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
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

let assets = new Chart(document.querySelector('#assets'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'Total Assets (in Php billion)',
      data: [ 928, 1000, 1024, 1073, 1113 ],
      backgroundColor: [
        '#C7BB24',
        '#C7BB24',
        '#C7BB24',
        '#C7BB24',
        '#39394D'
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
        beginAtZero: true
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
        color: '#39394D',
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

let currentRatio = new Chart(document.querySelector('#currentRatio'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'Total Assets (in Php billion)',
      data: [ 0.96, 1.02, 1.03, 0.98, 1.01 ],
      backgroundColor: [
        '#90C8D8',
        '#90C8D8',
        '#90C8D8',
        '#90C8D8',
        '#F3FEFC'
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
        beginAtZero: true
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
        color: '#39394D',
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

let debtRatio = new Chart(document.querySelector('#debtRatio'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'Total Assets (in Php billion)',
      data: [ 0.67, 0.78, 0.68, 0.77, 0.68 ],
      backgroundColor: [
        '#C7BB24',
        '#C7BB24',
        '#C7BB24',
        '#C7BB24',
        '#E7E670'
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
        beginAtZero: true
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
        color: '#39394D',
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
