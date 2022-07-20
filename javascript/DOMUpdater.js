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

  console.log(title)

  // const title = document.getElementById('planet-name')
  // const tag = document.getElementById('tag-earth')
  // const principalImg = document.getElementById('planet-principal-image')
  // const secondarImg = document.getElementById('planet-second-image')


  // title.innerText = planetInfo.title
  // principalImg.src = planetInfo.data.surfaceGeology.images[0]
  // secondarImg.src = planetInfo.data.surfaceGeology.images[1]
  // tag.addClass('active')
  updateTextContent(title, planetInfo.title)
  updateTextContent(info, planetInfo.data[section].data)
}

const updateTextContent = (element, content) => (element.innerText = content)