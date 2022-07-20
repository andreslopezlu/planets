const basePathMars = '../assets/images/planets/mars'  
  
const planetMars = {
  overviewContent: {
    data: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Mars`,
    },
    images: [`${basePathMars}/general.svg`],
  },
  internalStructure: {
    data: `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Mars#Internal_structure`,
    },
    images: [`${basePathMars}/internal.svg`],
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
