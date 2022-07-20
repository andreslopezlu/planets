window.addEventListener('hashchange', function() {
	const newHash = new URL(document.URL).hash
  const currentPlanetOptions = newHash.split('#')[1].split('-')
  const currentPlanet = currentPlanetOptions[0]
  const currentSection = currentPlanetOptions[1]

  updateDOMPlanetInfo(currentPlanet, currentSection)
});




// Thia for onload at Body
// overviewContent, internalStructure, surfaceGeology

const checkPlanet = () => {
  const curentUrl = new URL(document.URL)
  const currentHash = curentUrl.hash
  const currentPlanet = currentHash.split('#')[1]

  if(!currentPlanet) {
    const URLToGo = new URL(document.URL)

    URLToGo.hash = '#earth'
    return document.location.href = URLToGo
  }

  updateDOMPlanetInfo(currentPlanet)
}