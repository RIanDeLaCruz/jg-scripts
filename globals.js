Chart.defaults.plugins.tooltip.backgroundColor = '#FFFFFF'
Chart.defaults.plugins.tooltip.titleColor = '#737B8E'
Chart.defaults.plugins.tooltip.bodyColor = '#000'
Chart.defaults.plugins.tooltip.borderColor = '#90C8D8'
Chart.defaults.plugins.tooltip.borderWidth = 1
Chart.defaults.plugins.tooltip.titleFont.family = "'Rethink Sans', sans-serif"
Chart.defaults.plugins.tooltip.bodyFont.family = "'Rethink Sans', sans-serif"
Chart.defaults.plugins.tooltip.titleFont.size = 14
Chart.defaults.plugins.tooltip.bodyFont.size = 16
Chart.defaults.plugins.tooltip.titleFont.weight = 400
Chart.defaults.plugins.tooltip.usePointStyle = true
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
      ctx.font = 'bold 14px Rethink Sans'
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
      ctx.font = 'bold 14px Rethink Sans'
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

const getOrCreateLegendList = (chart, id) => {
  const legendContainer = document.getElementById(id);
  let listContainer = legendContainer.querySelector('ul');

  if (!listContainer) {
    listContainer = document.createElement('ul');
    listContainer.style.display = 'flex';
    listContainer.style.flexDirection = 'row';
    listContainer.style.margin = 0;
    listContainer.style.padding = 0;

    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};

const htmlLegendPlugin = {
  id: 'htmlLegend',
  afterUpdate(chart, args, options) {
    const ul = getOrCreateLegendList(chart, options.containerID);

    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    // Reuse the built-in legendItems generator
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    items.forEach(item => {
      console.log(item)
      if(item.text) {
        const li = document.createElement('li');
        li.style.alignItems = 'center';
        li.style.cursor = 'pointer';
        li.style.display = 'flex';
        li.style.flexDirection = 'row';
        li.style.marginLeft = '10px';

        li.onclick = () => {
          const {type} = chart.config;
          if (type === 'pie' || type === 'doughnut') {
            // Pie and doughnut charts only have a single dataset and visibility is per item
            chart.toggleDataVisibility(item.index);
          } else {
            chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
          }
          chart.update();
        };

        // Color box
        const boxSpan = document.createElement('span');
        boxSpan.style.background = item.fillStyle;
        boxSpan.style.borderColor = item.strokeStyle;
        boxSpan.style.borderWidth = item.lineWidth + 'px';
        boxSpan.style.display = 'inline-block';
        boxSpan.style.flexShrink = 0;
        boxSpan.style.height = '20px';
        boxSpan.style.marginRight = '10px';
        boxSpan.style.width = '20px';

        // Text
        const textContainer = document.createElement('p');
        textContainer.style.color = item.fontColor;
        textContainer.style.margin = 0;
        textContainer.style.padding = 0;
        textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

        const text = document.createTextNode(item.text);
        textContainer.appendChild(text);

        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
      }
    });
  }
};
