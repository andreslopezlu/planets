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
}

const updateTextContent = (element, content) => (element.innerText = content)

const updateLinkContent = (link, url, content) => {
  link.text = content
  link.href = url
}
