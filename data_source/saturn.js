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
