let options = {
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          drawTicks: false,
          display: false
        },
        ticks: {
          padding: -24,
          z: 1,
          color: '#F9FCFF',
          font: {
            size: 14
          }
        }
      },
      y: {
        border: {
          display: false
        },
        grid: {
          drawTicks: false,
          display: false
        },
        ticks: {
          display: false
        },
        beginAtZero: true,
        max: 170
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
        color: '#2C64CF',
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
let yearLabels = [ '2022', '2023' ]

let urcRevenue = new Chart(document.querySelector('#urcRevenue'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'URC',
      data: [149.9, 158.4],
      backgroundColor: [
        '#08358D',
        '#2C64CF'
      ],
      borderRadius: 8
    }]
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 32,
        left: 0,
        right: 0
      }
    },
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
          padding: -24,
          z: 1,
          color: '#F9FCFF',
          font: {
            size: 14
          }
        }
      },
      y: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false
        },
        ticks: {
          display: false
        },
        beginAtZero: true,
        max: 170
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
        color: '#2C64CF',
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

let rlcRevenue = new Chart(document.querySelector('#rlcRevenue'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'RLC',
      data: [45.2, 39.0],
      backgroundColor: [
        '#08358D',
        '#2C64CF'
      ],
      borderRadius: 8
    }]
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20
      }
    },
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
          padding: -24,
          z: 1,
          color: '#F9FCFF',
          font: {
            size: 14
          }
        }
      },
      y: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false
        },
        ticks: {
          display: false
        },
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
        color: '#2C64CF',
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

let cebRevenue = new Chart(document.querySelector('#cebRevenue'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'CEB',
      data: [56.8, 90.6],
      backgroundColor: [
        '#08358D',
        '#2C64CF'
      ],
      borderRadius: 8
    }]
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20
      }
    },
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
          padding: -24,
          z: 1,
          color: '#F9FCFF',
          font: {
            size: 14
          }
        }
      },
      y: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false
        },
        ticks: {
          display: false
        },
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
        color: '#2C64CF',
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

let jgsocRevenue = new Chart(document.querySelector('#jgsocRevenue'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'JGSoc',
      data: [36.0, 38.0],
      backgroundColor: [
        '#08358D',
        '#2C64CF'
      ],
      borderRadius: 8
    }]
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20
      }
    },
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
          padding: -24,
          z: 1,
          color: '#F9FCFF',
          font: {
            size: 14
          }
        }
      },
      y: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false
        },
        ticks: {
          display: false
        },
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
        color: '#2C64CF',
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

let urcIncome = new Chart(document.querySelector('#urcIncome'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'URC',
      data: [6.4, 6.7],
      backgroundColor: [
        '#08358D',
        '#2C64CF'
      ],
      borderRadius: 8
    }]
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 32,
        left: 0,
        right: 0
      }
    },
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
          padding: -24,
          z: 1,
          color: '#F9FCFF',
          font: {
            size: 14
          }
        }
      },
      y: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false
        },
        ticks: {
          display: false
        },
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
        color: '#2C64CF',
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

let rlcIncome = new Chart(document.querySelector('#rlcIncome'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'RLC',
      data: [6.1, 8.2],
      backgroundColor: [
        '#08358D',
        '#2C64CF'
      ],
      borderRadius: 8
    }]
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20
      }
    },
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
          padding: -24,
          z: 1,
          color: '#F9FCFF',
          font: {
            size: 14
          }
        }
      },
      y: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false
        },
        ticks: {
          display: false
        },
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
        color: '#2C64CF',
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

let cebIncome = new Chart(document.querySelector('#cebIncome'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'CEB',
      data: [-7.3, 5.2],
      backgroundColor: [
        '#08358D',
        '#2C64CF'
      ],
      borderRadius: 8
    }]
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20
      }
    },
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
          padding: -24,
          z: 1,
          color: '#2C64CF',
          font: {
            size: 14
          }
        }
      },
      y: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false
        },
        ticks: {
          display: false
        },
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
        color: '#2C64CF',
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

let jgsocIncome = new Chart(document.querySelector('#jgsocIncome'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: yearLabels,
    datasets: [{
      label: 'JGSoc',
      data: [-13.8, -12.9],
      backgroundColor: [
        '#08358D',
        '#2C64CF'
      ],
      borderRadius: 8
    }]
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20
      }
    },
    scales: {
      x: {
        grid: {
          drawTicks: false,
          display: false,
        },
        ticks: {
          z: 1,
          color: '#2C64CF',
          font: {
            size: 14
          }
        }
      },
      y: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false
        },
        ticks: {
          display: false
        },
        min: -15
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        anchor: 'start',
        align: 'end',
        offset: -24,
        color: '#2C64CF',
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
