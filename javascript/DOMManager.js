const knownHash = {
  planets: ['mercury', 'earth', 'jupiter', 'mars', 'neptune', 'saturn', 'uranus', 'venus'],
  sections: ['overviewContent', 'internalStructure', 'surfaceGeology'],
}

// Listen to hash changes, and start DOM modifications

window.addEventListener('hashchange', function() {
	const newHash = new URL(document.URL).hash
  const currentPlanetOptions = newHash ? newHash.split('#')[1].split('-') : undefined
  const currentPlanet = currentPlanetOptions ? currentPlanetOptions[0] : undefined
  const currentSection = currentPlanetOptions ? currentPlanetOptions[1] : undefined

  updateDOMPlanetInfo(currentPlanet, currentSection)
});


// Thia for onload at Body
// It update hash to a default value, if initial is no hash at URL

const checkPlanet = () => {
  const curentUrl = new URL(document.URL)
  const newHash = curentUrl.hash
  const currentPlanetOptions = newHash ? newHash.split('#')[1].split('-') : undefined
  const currentPlanet = currentPlanetOptions ? currentPlanetOptions[0] : undefined
  const currentSection = currentPlanetOptions ? currentPlanetOptions[1] : undefined

  if(!newHash) {
    const URLToGo = new URL(document.URL)

    URLToGo.hash = '#earth-overviewContent'
    return document.location.href = URLToGo
  }
  
  updateDOMPlanetInfo(currentPlanet, currentSection)
}
