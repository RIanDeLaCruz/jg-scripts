Chart.defaults.plugins.tooltip.backgroundColor = '#FFFFFF'
Chart.defaults.plugins.tooltip.titleColor = '#000'
Chart.defaults.plugins.tooltip.bodyColor = '#000'
Chart.defaults.plugins.tooltip.borderColor = '#90C8D8'
Chart.defaults.plugins.tooltip.borderWidth = 1
Chart.defaults.plugins.tooltip.titleFont.family = "'Rethink Sans', sans-serif"
Chart.defaults.font.family = "'Rethink Sans', sans-serif"
const ticks = {
                  color: '#08358D',
                  font: {
                    weight: 'bold'
                  }
}
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
