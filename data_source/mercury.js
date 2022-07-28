const basePlanetMercury = '../assets/images/planets/mercury'
  
const planetMercury = {  
  overviewContent: {
    data: `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Mercury_(planet)`,
    },
    images: [`${basePlanetMercury}/general.svg`],
  },
  internalStructure: {
    data: `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure`,
    },
    images: [`${basePlanetMercury}/internal.svg`],
  },
  surfaceGeology: {
    data: `Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology`,
    },
    images: [`${basePlanetMercury}/general.svg`, `${basePlanetMercury}/geo.png`],
  },
  meaasures: {
    rotation: 58.6,
    revolution: 87.97,
    radius: 2439.7,
    temperature: 430
  }
}
