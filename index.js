const basePathEarth = '../assets/images/planets/earth'
  
const planetEarth = {  
  overviewContent: {
    data: `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Earth`,
    },
    image: `${basePathEarth}/general.svg`,
  },
  internalStructure: {
    data: `Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Earth#Internal_structure`,
    },
    image: `${basePathEarth}/internal.svg`,
  },
  surfaceGeology: {
    data: `The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Earth#Surface`,
    },
    images: [`${basePathEarth}/general.svg`, `${basePathEarth}/geo.png`],
  },
  meaasures: {
    rotation: 0.99,
    revolution: 365.26,
    radius: 6371,
    temperature: 16
  }
}

const basePathJupiter = '../assets/images/planets/jupiter'  
  
const planetJupiter = {
  overviewContent: {
    data: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Jupiter`,
    },
    image: `${basePathJupiter}/general.svg`,
  },
  internalStructure: {
    data: `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Jupiter#Internal_structure`,
    },
    image: `${basePathJupiter}/internal.svg`,
  },
  surfaceGeology: {
    data: `The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices`,
    },
    images: [`${basePathJupiter}/general.svg`, `${basePathJupiter}/geo.png`],
  },
  meaasures: {
    rotation: 9.93,
    revolution: 11.86,
    radius: 69911,
    temperature: -108,
  }
}

const basePathMars = '../assets/images/planets/mars'  
  
const planetMars = {
  overviewContent: {
    data: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Mars`,
    },
    image: `${basePathMars}/general.svg`,
  },
  internalStructure: {
    data: `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Mars#Internal_structure`,
    },
    image: `${basePathMars}/internal.svg`,
  },
  surfaceGeology: {
    data: `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Mars#Surface_geology`,
    },
    images: [`${basePathMars}/general.svg`, `${basePathMars}/geo.png`],
  },
  meaasures: {
    rotation: 1.03,
    revolution: 1.88,
    radius: 3389.5,
    temperature: -28,
  }
}

const basePathNeptune = '../assets/images/planets/neptune'  
  
const planetNeptune = {
  overviewContent: {
    data: `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Neptune`,
    },
    image: `${basePathNeptune}/general.svg`,
  },
  internalStructure: {
    data: `Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Neptune#Internal_structure`,
    },
    image: `${basePathNeptune}/internal.svg`,
  },
  surfaceGeology: {
    data: `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Neptune#Atmosphere`,
    },
    images: [`${basePathNeptune}/general.svg`, `${basePathNeptune}/geo.png`],
  },
  meaasures: {
    rotation: 16.08,
    revolution: 164.79,
    radius: 24622,
    temperature: -201,
  }
}

const basePathSaturn = '../assets/images/planets/saturn'  
  
const planetSaturn = {
  overviewContent: {
    data: `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Saturn`,
    },
    image: `${basePathSaturn}/general.svg`,
  },
  internalStructure: {
    data: `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Saturn#Internal_structure`,
    },
    image: `${basePathSaturn}/internal.svg`,
  },
  surfaceGeology: {
    data: `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Saturn#Atmosphere`,
    },
    images: [`${basePathSaturn}/general.svg`, `${basePathSaturn}/geo.png`],
  },
  meaasures: {
    rotation: 10.8,
    revolution: 29.46,
    radius: 58232,
    temperature: -138,
  }
}

const basePathUranus = '../assets/images/planets/uranus'  
  
const planetUranus = {
  overviewContent: {
    data: `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Uranus`,
    },
    image: `${basePathUranus}/general.svg`,
  },
  internalStructure: {
    data: `The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Uranus#Internal_structure`,
    },
    image: `${basePathUranus}/internal.svg`,
  },
  surfaceGeology: {
    data: `The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Uranus#Atmosphere`,
    },
    images: [`${basePathUranus}/general.svg`, `${basePathUranus}/geo.png`],
  },
  meaasures: {
    rotation: 17.2,
    revolution: 84,
    radius: 25362,
    temperature: -195,
  }
}

const basePathVenus = '../assets/images/planets/venus'  
  
const planetVenus = {
  overviewContent: {
    data: `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Venus`,
    },
    image: `${basePathVenus}/general.svg`,
  },
  internalStructure: {
    data: `The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Venus#Internal_structure`,
    },
    image: `${basePathVenus}/internal.svg`,
  },
  surfaceGeology: {
    data: `Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Venus#Surface_geology`,
    },
    images: [`${basePathVenus}/general.svg`, `${basePathVenus}/geo.png`],
  },
  meaasures: {
    rotation: 243,
    revolution: 224.7,
    radius: 6051.8,
    temperature: 471,
  }
}


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

