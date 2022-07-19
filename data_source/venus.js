const basePathVenus = '../assets/images/planets/venus'  
  
const nameOfVenus = {
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
