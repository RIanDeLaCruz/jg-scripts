(function config() {
  const config = {
    'ph': {
      name: 'Philippines',
      data: [
        {
          bu: 'Robinsons Land Corp.',
          count: 261,
          color: '#005FC6'
        },
        {
          bu: 'Univeral Robina Corp.',
          count: 47,
          color: '#BA0001'
        },
        {
          bu: 'Cebu Air Inc.',
          count: 35,
          color: '#EEAF00'
        },
        {
          bu: 'JG Summit Olefins Corp.',
          count: 2,
          color: '#008638'
        },
        {
          bu: 'JG Summit Holdings',
          count: 1,
          color: '#1CB0E3'
        },
      ]
    },
    'my': {
      name: 'Malaysia',
      data: [
        {
          bu: 'Cebu Air Inc.',
          count: 2,
          color: '#EEAF00'
        },
        {
          bu: 'Univeral Robina Corp.',
          count: 3,
          color: '#BA0001'
        },
      ]
    },
    'th': {
      name: 'Thailand',
      data: [
        {
          bu: 'Cebu Air Inc.',
          count: 1,
          color: '#EEAF00'
        },
        {
          bu: 'Univeral Robina Corp.',
          count: 6,
          color: '#BA0001'
        },
      ]
    },
    'br': {
      name: 'Brunei',
      data: [
        {
          bu: 'Cebu Air Inc.',
          count: 1,
          color: '#EEAF00'
        },
      ]
    },
    'cn': {
      name: 'China',
      data: [
        {
          bu: 'Cebu Air Inc.',
          count: 6,
          color: '#EEAF00'
        },
        {
          bu: 'Univeral Robina Corp.',
          count: 2,
          color: '#BA0001'
        },
      ]
    },
    'id': {
      name: 'Indonesia',
      data: [
        {
          bu: 'Cebu Air Inc.',
          count: 2,
          color: '#EEAF00'
        },
        {
          bu: 'Univeral Robina Corp.',
          count: 2,
          color: '#BA0001'
        },
      ]
    },
    'vn': {
      name: 'Vietnam',
      data: [
      {
        bu: 'Cebu Air Inc.',
        count: 3,
        color: '#EEAF00',
        text: 'Began flights to Danang'
      },
        {
          bu: 'Univeral Robina Corp.',
          count: 4,
          color: '#BA0001'
        },
      ]
    },
    'jp': {
      name: 'Japan',
      data: [
      {
        bu: 'Cebu Air Inc.',
        count: 5,
        color: '#EEAF00'
      },
      ]
    },
    'sk': {
      name: 'South Korea',
      data: [
        {
          bu: 'Cebu Air Inc.',
          count: 2,
          color: '#EEAF00'
        },
      ]
    },
    'mc': {
      name: 'Macau',
      data: [
      {
        bu: 'Cebu Air Inc.',
        count: 1,
        color: '#EEAF00'
      },
      ]
    },
    'sg': {
      name: 'Singapore',
      data: [
        {
          bu: 'Cebu Air Inc.',
          count: 1,
          color: '#EEAF00'
        },
        {
          bu: 'Univeral Robina Corp.',
          count: 1,
          color: '#BA0001'
        },
      ]
    },
    'tw': {
      name: 'Taiwan',
      data: [
        {
          bu: 'Cebu Air Inc.',
          count: 1,
          color: '#EEAF00'
        },
      ]
    },
    'ua': {
      name: 'United Arab Emirates',
      data: [
        {
          bu: 'Cebu Air Inc.',
          count: 1,
          color: '#EEAF00'
        },
      ]
    },
    'au': {
      name: 'Australia',
      data: [
        {
          bu: 'Cebu Air Inc.',
          count: 2,
          color: '#EEAF00'
        },
      ]
    },
    'hk': {
      name: 'Hong Kong',
      data: [
        {
          bu: 'Cebu Air Inc.',
          count: 2,
          color: '#EEAF00'
        },
      {
        bu: 'Univeral Robina Corp.',
        count: 1,
        color: '#BA0001'
      },
      ]
    },
    'mm': {
      name: 'Myanmar',
      data: [
        {
          bu: 'Univeral Robina Corp.',
          count: 1,
          color: '#BA0001'
        },
      ]
    },
    'la': {
      name: 'Laos',
      data: [
      {
        bu: 'Univeral Robina Corp.',
        count: 2,
        color: '#BA0001'
      },
      ]
    },
    'kh': {
      name: 'Cambodia',
      data: [
        {
          bu: 'Univeral Robina Corp.',
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
      row.dataset.count = segment.count
      row.setAttribute('style', `--bg: ${segment.color}`)
      row.innerHTML = `<span>${segment.count}</span>${segment.bu}`
      rows.appendChild(row)
    }
    tooltip.appendChild(title)
    tooltip.appendChild(rows)
    tooltip.classList.add('tooltip'); // Add a CSS class for styling (optional)
    if(code == 'vn') {
      const cebTooltip = `
          <img src="/ceb.png" alt="" />
          <p><strong>Cebu Pacific</strong> began flights to <strong>Danang</strong>.</p>
      `
      const cebDiv = document.createElement('div')
      cebDiv.classList.add('textRow')
      cebDiv.classList.add('ceb')
      cebDiv.innerHTML = cebTooltip
      tooltip.appendChild(cebDiv)
    }

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
    document.body.addEventListener('click', removeTooltip);

    function removeTooltip(evt) {
      if(!evt.target.classList.contains('dot')) {
        body.removeChild(tooltip);
      }
    }
  }
  document.querySelectorAll('.dot.world').forEach(el => {
    el.addEventListener('click', evt => {
      document.querySelectorAll('.tooltip').forEach(el => {
        document.body.removeChild(el)
      })
      const message = el.id.split('_')[0]
      createTooltip(evt, message)
    })
  })
}())
