const getDOMObjects = () => {


  // planet-portrait__board section

  const title = document.getElementById('planet-name')
  const info = document.getElementById('planet-info')
  const source = document.getElementById('planet-info-source')
  const btnOverviewContent = document.getElementById('btn-overviewContent')
  const btnInternalStructure = document.getElementById('btn-internalStructure')
  const btnSurfaceGeology = document.getElementById('btn-surfaceGeology')


  // planet-portrait__image section

  const mainImage = document.getElementById('planet-principal-image')
  const complementaryInage = document.getElementById('planet-second-image')


  // planet-cards section

  const rotation = document.getElementById('rotation')
  const revolution = document.getElementById('revolution')
  const radius = document.getElementById('radius')
  const temperature = document.getElementById('temperature')


  return {
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
  }
}
