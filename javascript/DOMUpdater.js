const updateDOMPlanetInfo = (planet, section) => {
  const planetInfo = planetsData[planet]
  const {
    title,
    info,
    source,
    btnOverviewContent,
    btnInternalStructure,
    btnSurfaceGeology,
    mainImage,
    complementaryInage,
    rotation,
    revolution,
    radius,
    temperature,
  } = getDOMObjects()

  updateTextContent(title, planetInfo.title)
  updateTextContent(info, planetInfo.data[section].data)
  updateLinkContent(source, planetInfo.data[section].source.url, planetInfo.data[section].source.label)
  updateTextContent(rotation, `${planetInfo.data.meaasures.rotation} DAYS`)
  updateTextContent(revolution, `${planetInfo.data.meaasures.revolution} DAYS`)
  updateTextContent(radius, `${planetInfo.data.meaasures.radius} KM`)
  updateTextContent(temperature, `${planetInfo.data.meaasures.temperature}°C`)
  activateSectionButton([btnOverviewContent, btnInternalStructure, btnSurfaceGeology], section)

  console.log(planetInfo.data[section].images)
  console.log(planetInfo.data[section].images[0])
  console.log(planetInfo.data[section].images[1])
  updateImages(
    [mainImage, complementaryInage],
    planetInfo.data[section].images,
    [`draw of ${planet}`, `an image about geology of ${planet}`],
  )
}

const updateTextContent = (element, content) => (element.innerText = content)

const updateLinkContent = (link, url, content) => {
  link.text = content
  link.href = url
}

const activateSectionButton = (buttons, section) => {
  buttons.forEach(button => {
    const buttonClasses = button.classList
    
    buttonClasses.remove('btn-section--active')
    if(button.id === `btn-${section}`) buttonClasses.add('btn-section--active')
  })
}

const selectInfoGroup = (section) => {
  const curentUrl = new URL(document.URL)
  const newHash = curentUrl.hash
  const currentPlanetOptions = newHash ? newHash.split('#')[1].split('-') : undefined
  const currentPlanet = currentPlanetOptions ? currentPlanetOptions[0] : undefined

  curentUrl.hash = `#${currentPlanet}-${section}`
  const newUrl = curentUrl.href
  document.location.href = newUrl
}

const updateImages = (containers, sources, alts) => {
  console.log(containers)
  console.log(sources)
  console.log(alts)

  containers.forEach(container => {
    const index = containers.indexOf(container)
    const source = sources[index]
    const alt = alts[index]
    const containerClasses = container.classList

    console.log(index)
    console.log(container)
    
    containerClasses.remove('img--hidded')
    container.src = source || ''
    container.alt = alt || ''

    if(!source) containerClasses.add('img--hidded')
  })
}
 