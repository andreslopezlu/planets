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
    data: planetEarth
  },
  jupiter: {
    title: `Jupiter`,
    data: planetJupiter
  },
  mars: {
    title: `Mars`,
    data: planetMars
  },
  neptune: {
    title: `Neptune`,
    data: planetNeptune
  },
  saturn: {
    title: `Saturn`,
    data: planetSaturn
  },
  uranus: {
    title: `Uranus`,
    data: planetUranus
  },
  venus: {
    title: `Venus`,
    data: planetVenus
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

  title.innerText = planetInfo.title
}
