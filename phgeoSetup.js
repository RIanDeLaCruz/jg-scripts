(function config() {
  const config = {
    'luz': {
      name: 'Philippines',
      data: [
        {
          bu: 'RLC',
          count: 197,
          color: '#005FC6',
          text: "Launched Westin Manila Sonata Hotel, Le Pont, Haraya, Sierra Valley Gardens 4, Springdale Batangas, Calamba 2A, and 1 workable facility in Cyberscape Omega"
        },
        {
          bu: 'URC',
          count: 34,
          color: '#BA0001'
        },
        {
          bu: 'CEB',
          count: 12,
          color: '#EEAF00',
          text: 'Restarted flights to Laoag'
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
    'vis': {
      name: 'Visayas',
      data: [
      {
        bu: 'RLC',
        count: 42,
        color: '#005FC6',
        text: 'Launched NuStar Mall and Mantawi Residences'
      },
      {
        bu: 'URC',
        count: 11,
        color: '#BA0001'
      },
        {
          bu: 'CEB',
          count: 10,
          color: '#EEAF00'
        },
      ]
    },
    'min': {
      name: 'Mindanao',
      data: [
        {
          bu: 'RLC',
          count: 22,
          color: '#005FC6'
        },
      {
        bu: 'URC',
        count: 2,
        color: '#BA0001'
      },
        {
          bu: 'CEB',
          count: 13,
          color: '#EEAF00'
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
    if(code == 'luz') {
      const rlcTooltip = `
          <p>
            Launched <strong>Westin Manila Sonata Hotel</strong>, <strong>Le Pont</strong>, <strong>Haraya</strong>, <strong>Sierra Valley Gardens 4</strong>, <strong>Springdale Batangas</strong>, <strong>Calamba 2A</strong>, and <strong>1 workable facility</strong> in <strong>Cyberscape Omega</strong>
          </p>
      `
      const cebTooltip = `
          <p><strong>Cebu Pacific</strong> restored flights to <strong>Laoag</strong>.</p>
      `
      const rlcDiv = document.createElement('div')
      rlcDiv.classList.add('rlc')
      rlcDiv.innerHTML = rlcTooltip
      tooltip.appendChild(rlcDiv)

      const cebDiv = document.createElement('div')
      cebDiv.classList.add('ceb')
      cebDiv.innerHTML = cebTooltip
      tooltip.appendChild(cebDiv)
    }
    if(code == 'vis') {
      const rlcTooltip = `
      `
      const rlcDiv = document.createElement('div')
      rlcDiv.classList.add('rlc')
      rlcDiv.innerHTML = rlcTooltip
      tooltip.appendChild(rlcDiv)
    }

    document.body.appendChild(tooltip);
    console.log(tooltip)

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
      if(!evt.target.parentNode.classList.contains('dot')) {
        document.body.removeChild(tooltip);
      }
    }
  }
  document.querySelectorAll('.dot.ph').forEach(el => {
    el.addEventListener('click', evt => {
      document.querySelectorAll('.tooltip').forEach(el => {
        document.body.removeChild(el)
      })
      createTooltip(evt, evt.currentTarget.id)
    })
  })
}())
