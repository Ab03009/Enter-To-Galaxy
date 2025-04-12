import { Planet } from './types';

export const planets: Planet[] = [
  {
    id: '1',
    name: 'Nova Prime',
    shortDesc: 'The jewel of the Andromeda Galaxy',
    description: 'A terrestrial super-Earth with floating cities and crystal forests that glow during the triple moonset.',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&auto=format&fit=crop',
    temperature: '-50°C to 30°C',
    dayLength: '36 Earth hours',
    atmosphere: 'Nitrogen-rich, breathable with assistance',
    orbitPeriod: '425 Earth days',
    funFacts: [
      'Home to the largest known crystal formation in the galaxy',
      'Atmospheric phenomena create daily rainbow auroras',
      'Native flora communicates through bioluminescent signals'
    ]
  },
  {
    id: '2',
    name: 'Chronos',
    shortDesc: 'Where time flows differently',
    description: 'A mysterious planet where relativistic effects cause time to pass at different rates depending on your location.',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800&auto=format&fit=crop',
    temperature: '-180°C to -150°C',
    dayLength: 'Varies by location',
    atmosphere: 'Dense methane clouds',
    orbitPeriod: '1,200 Earth days',
    funFacts: [
      'One day in the highlands equals one week in the valleys',
      'Gravity waves create visible ripples in the sky',
      'Ancient ruins suggest advanced temporal engineering'
    ]
  },
  {
    id: '3',
    name: 'Helios Magna',
    shortDesc: 'The eternal daylight world',
    description: 'Orbiting three stars, this desert world never experiences true darkness and has developed unique ecosystems adapted to constant light.',
    image: 'https://images.unsplash.com/photo-1614314089507-7fa6a79fdc41?w=800&auto=format&fit=crop',
    temperature: '35°C to 70°C',
    dayLength: 'Perpetual daylight',
    atmosphere: 'Thin, high oxygen content',
    orbitPeriod: '873 Earth days',
    funFacts: [
      'Native species have evolved natural solar shielding',
      'Underground cities protect inhabitants from the heat',
      'Rare minerals form only under triple starlight'
    ]
  },
  {
    id: '4',
    name: 'Aquarius Prime',
    shortDesc: 'The ocean world',
    description: 'A planet covered entirely in liquid water, with floating cities and deep-sea civilizations.',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800&auto=format&fit=crop',
    temperature: '10°C to 25°C',
    dayLength: '48 Earth hours',
    atmosphere: 'Dense, high humidity',
    orbitPeriod: '290 Earth days',
    funFacts: [
      'Home to bioluminescent marine life',
      'Underwater volcanoes create new islands yearly',
      'Ancient underwater ruins suggest previous civilizations'
    ]
  },
  {
    id: '5',
    name: 'Terra Nova',
    shortDesc: 'Earth\'s twin',
    description: 'A planet remarkably similar to Earth, but with double the gravity and unique purple vegetation.',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&auto=format&fit=crop',
    temperature: '-5°C to 35°C',
    dayLength: '24.5 Earth hours',
    atmosphere: 'Oxygen-nitrogen mix',
    orbitPeriod: '368 Earth days',
    funFacts: [
      'Purple chlorophyll evolved due to its star\'s spectrum',
      'Inhabitants have developed stronger bone structure',
      'Floating mountains contain anti-gravity minerals'
    ]
  }
];