const config = {
  'ph': {
    name: 'Philippines',
    data: [
      {
        bu: 'RLC',
        count: 261,
        color: '#005FC6'
      },
      {
        bu: 'URC',
        count: 47,
        color: '#BA0001'
      },
      {
        bu: 'CEB',
        count: 35,
        color: '#EEAF00'
      },
      {
        bu: 'JGSOC',
        count: 2,
        color: '#008638'
      },
      {
        bu: 'JG Summit',
        count: 1,
        color: '#1CB0E3'
      },
    ]
  },
  'my': {
    name: 'Malaysia',
    data: [
      {
        bu: 'CEB',
        count: 2,
        color: '#EEAF00'
      },
      {
        bu: 'URC',
        count: 3,
        color: '#BA0001'
      },
    ]
  },
  'th': {
    name: 'Thailand',
    data: [
      {
        bu: 'CEB',
        count: 1,
        color: '#EEAF00'
      },
      {
        bu: 'URC',
        count: 6,
        color: '#BA0001'
      },
    ]
  },
  'br': {
    name: 'Brunei',
    data: [
      {
        bu: 'CEB',
        count: 1,
        color: '#EEAF00'
      },
    ]
  },
  'cn': {
    name: 'China',
    data: [
      {
        bu: 'CEB',
        count: 6,
        color: '#EEAF00'
      },
      {
        bu: 'URC',
        count: 2,
        color: '#BA0001'
      },
    ]
  },
  'id': {
    name: 'Indonesia',
    data: [
      {
        bu: 'CEB',
        count: 2,
        color: '#EEAF00'
      },
      {
        bu: 'URC',
        count: 2,
        color: '#BA0001'
      },
    ]
  },
  'vn': {
    name: 'Vietnam',
    data: [
      {
        bu: 'CEB',
        count: 3,
        color: '#EEAF00',
        text: 'Began flights to Danang'
      },
      {
        bu: 'URC',
        count: 4,
        color: '#BA0001'
      },
    ]
  },
  'jp': {
    name: 'Japan',
    data: [
      {
        bu: 'CEB',
        count: 5,
        color: '#EEAF00'
      },
    ]
  },
  'sk': {
    name: 'South Korea',
    data: [
      {
        bu: 'CEB',
        count: 2,
        color: '#EEAF00'
      },
    ]
  },
  'mc': {
    name: 'Macau',
    data: [
      {
        bu: 'CEB',
        count: 1,
        color: '#EEAF00'
      },
    ]
  },
  'sg': {
    name: 'Singapore',
    data: [
      {
        bu: 'CEB',
        count: 1,
        color: '#EEAF00'
      },
      {
        bu: 'URC',
        count: 1,
        color: '#BA0001'
      },
    ]
  },
  'tw': {
    name: 'Taiwan',
    data: [
      {
        bu: 'CEB',
        count: 1,
        color: '#EEAF00'
      },
    ]
  },
  'ua': {
    name: 'United Arab Emirates',
    data: [
      {
        bu: 'CEB',
        count: 1,
        color: '#EEAF00'
      },
    ]
  },
  'au': {
    name: 'Australia',
    data: [
      {
        bu: 'CEB',
        count: 2,
        color: '#EEAF00'
      },
    ]
  },
  'hk': {
    name: 'Hong Kong',
    data: [
      {
        bu: 'CEB',
        count: 2,
        color: '#EEAF00'
      },
      {
        bu: 'URC',
        count: 1,
        color: '#BA0001'
      },
    ]
  },
  'mm': {
    name: 'Myanmar',
    data: [
      {
        bu: 'URC',
        count: 1,
        color: '#BA0001'
      },
    ]
  },
  'la': {
    name: 'Laos',
    data: [
      {
        bu: 'URC',
        count: 2,
        color: '#BA0001'
      },
    ]
  },
  'kh': {
    name: 'Cambodia',
    data: [
      {
        bu: 'URC',
        count: 1,
        color: '#BA0001'
      },
    ]
  },
}

function createTooltip(event, code) {
  let data = config[code]
  // Create the tooltip element
  const tooltip = document.createElement('div');
  let title = document.createElement('p')
  title.classList.add('tooltip-title')
  title.textContent = data.name
  let rows = document.createElement('ul')
  rows.classList.add('rows')
  for(let segment of data.data) {
    let row = document.createElement('li')
    row.classList.add('row')
    if(segment.text) {
      let str = `${segment.bu}<ul class="nested"><li>${segment.text}</li></ul>`
      row.innerHTML = str
    } else {
      row.textContent = segment.bu
    }
    row.dataset.count = segment.count
    row.setAttribute('style', `--bg: ${segment.color}`)
    rows.appendChild(row)
  }
  tooltip.appendChild(title)
  tooltip.appendChild(rows)
  tooltip.classList.add('tooltip'); // Add a CSS class for styling (optional)

  document.body.appendChild(tooltip);

  // Position the tooltip near the clicked path
  const body = document.body;
  const path = event.target; // Get the clicked path element from the event object
  const rect = path.getBoundingClientRect();
  const tooltipdimensions = tooltip.getBoundingClientRect()
  if(window.matchMedia("(max-width: 768px)").matches) {
    const svgBox = document.querySelector('svg').getBoundingClientRect()
    tooltip.style.left = `${window.pageXOffset + 32}px`;
    tooltip.style.top = `${svgBox.top + document.documentElement.scrollTop +
        svgBox.height - tooltipdimensions.height - 16}px`;
  } else {
    tooltip.style.left = `${rect.left + window.pageXOffset + 14}px`;
    tooltip.style.top = `${rect.top + window.pageYOffset + 14}px`;
  }

  // Remove the tooltip on click outside
  document.querySelector('svg').addEventListener('click', removeTooltip);

  function removeTooltip(evt) {
    if(!evt.target.classList.contains('dot')) {
      body.removeChild(tooltip);
    }
  }
}
document.querySelectorAll('.dot').forEach(el => {
  el.addEventListener('click', evt => {
    document.querySelectorAll('.tooltip').forEach(el => {
      document.body.removeChild(el)
    })
    const message = el.id.split('_')[0]
    createTooltip(evt, message)
  })
})
