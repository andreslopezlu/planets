// This section merge all planets data, simulating the parsed answer of an API

import '../data_source/earth';
import '../data_source/jupiter';
import '../data_source/mars';
import '../data_source/neptune';
import '../data_source/saturn';
import '../data_source/uranus';
import '../data_source/venus';
import '../data_source/mercury';

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
  mercury: {
    title: `Mercury`,
    data: {...planetMercury}
  },
}


// This section enable DOM upgrade

import './DOMObjects';
import './DOMUpdater';
import './DOMManager';
