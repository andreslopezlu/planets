const basePathJupiter = '../assets/images/planets/jupiter'  
  
const planetJupiter = {
  overviewContent: {
    data: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Jupiter`,
    },
    images: [`${basePathJupiter}/general.svg`],
  },
  internalStructure: {
    data: `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Jupiter#Internal_structure`,
    },
    images: [`${basePathJupiter}/internal.svg`],
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
