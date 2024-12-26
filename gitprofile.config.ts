// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'benmuma', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Relevant Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['benmuma/benmuma.github.io', 'benmuma/benmuma', 'benmuma/PTR_GroundStation_firmware_benja', 'benmuma/CV_benja'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      //header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of benmuma',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Benjamin-Muñoz',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'mail.benjamu@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/benmuma/CV_benja/raw/main/CV_Dec.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C/C++',
    'VHDL',
    'LaTeX',
    'Matlab',
    'Altium Designer',
    'PSIM',
  ],
  experiences: [
        {
      company: 'Faraday Rocketry UPV',
      position: 'Avionics Engineer',
      from: 'Nov 2024',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/faraday-rocketry-upv/posts/?feedView=all',
    },
        {
      company: 'Energy Student',
      position: 'Telecommunications Manager',
      from: 'Sep 2023',
      to: 'Sep 2024',
      companyLink: 'https://www.linkedin.com/company/energy-student/posts/?feedView=all',
    },
    {
      company: 'Energy Student',
      position: 'Wind Energy Team Member',
      from: 'Sep 2022',
      to: 'Jul 2023',
      companyLink: 'https://www.linkedin.com/company/energy-student/posts/?feedView=all',
    },
    {
      company: 'Optimiza Tecnología S.L.',
      position: 'Technical Solutions Assistant',
      from: 'Mar 2021',
      to: 'Jun 2021',
      companyLink: 'https://optimizatecnologia.net/',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Florida Universitaria',
      degree: 'Industrial and automatic electronic engineering',
      from: '2021',
      to: 'Present',
    },
    {
      institution: 'Florida Universitaria',
      degree: 'Superior Module in Automation and Industrial Robotics',
      from: '2019',
      to: '2021',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:''},
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
          '' },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
