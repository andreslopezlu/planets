const basePathNeptune = '../assets/images/planets/neptune'  
  
const planetNeptune = {
  overviewContent: {
    data: `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Neptune`,
    },
    images: [`${basePathNeptune}/general.svg`],
  },
  internalStructure: {
    data: `Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.`,
    source: {
      label: `Wikipedia`,
      url: `https://en.wikipedia.org/wiki/Neptune#Internal_structure`,
    },
    images: [`${basePathNeptune}/internal.svg`],
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
