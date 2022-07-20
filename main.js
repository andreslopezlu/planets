import './data_source/earth';
import './data_source/jupiter';
import './data_source/mars';
import './data_source/neptune';
import './data_source/saturn';
import './data_source/uranus';
import './data_source/venus';

const planetsData ={
  earth: {
    title: `Earth`,
    data: {...planetEarth}
  },
  jupiter: {
    title: `Jupiter`,
    data: {...planetJupiter}
  },
  mars: {
    title: `Mars`,
    data: {...planetMars}
  },
  neptune: {
    title: `Neptune`,
    data: {...planetNeptune}
  },
  saturn: {
    title: `Saturn`,
    data: {...planetSaturn}
  },
  uranus: {
    title: `Uranus`,
    data: {...planetUranus}
  },
  venus: {
    title: `Venus`,
    data: {...planetVenus}
  },
}


window.addEventListener('hashchange', function() {
	const newHash = new URL(document.URL).hash
  const currentPlanet = newHash.split('#')[1]

  updateDOMPlanetInfo(currentPlanet)
});

const updateDOMPlanetInfo = (planet) => {
  const planetInfo = planetsData[planet]

  const title = document.getElementById('planet-name')
  const tag = document.getElementById('tag-earth')
  const principalImg = document.getElementById('planet-principal-image')
  const secondarImg = document.getElementById('planet-second-image')


  title.innerText = planetInfo.title
  principalImg.src = planetInfo.data.surfaceGeology.images[0]
  secondarImg.src = planetInfo.data.surfaceGeology.images[1]
  tag.addClass('active')
}


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
