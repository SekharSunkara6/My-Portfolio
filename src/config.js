// src/config.js

module.exports = {
  siteTitle: 'Sekhar Sunkara',
  siteDescription:
    'Sekhar Sunkara is an incoming Software Developer, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Sekhar Sunkara, Sekhar, Sunkara, SekharSunkara, software engineer, web developer, javascript, python, java, BVCEC, Odalarevu',
  siteUrl: 'https://sekharsunkaraportfolio.netlify.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sekhar Sunkara',
  location: 'Indore, India',
  email: 'sekharsunkara2002@gmail.com',
  github: 'https://github.com/SekharSunkara6',
  RenderHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/SekharSunkara6',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sekhar-sunkara-1b869b1a8',
    },
    {
      name: 'Vercel',
      url: 'https://vercel.com/sunkara-purnasekhars-projects',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sekhar__sunkara/',
    },
    {
      name: 'IconRender',
      url: 'https://dashboard.render.com/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
