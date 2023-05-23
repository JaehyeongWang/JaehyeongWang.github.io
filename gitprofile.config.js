// gitprofile.config.js

const config = {
  github: {
    username: 'JaehyeongWang', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'jahyeng0224@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'Java',
    'JavaScript',
    'TypeScript',
    'Python',
    'Kotlin',
    'R',
    'HTML',
    'CSS',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Github',
    'Docker',
    'AWS',
    'Azure',
    'Notion',
    'Slack',
    'Jandi'
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ],
  education: [
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Principles of Economics I',
      from: '2018',
      to: '2018',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Principles of Economics II',
      from: '2018',
      to: '2018',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Microeconomics',
      from: '2018',
      to: '2018',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Macroeconomics',
      from: '2018',
      to: '2018',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Mathematics for Economics',
      from: '2018',
      to: '2018',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Econometrics',
      from: '2018',
      to: '2018',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Statistical Analysis for Economics',
      from: '2018',
      to: '2018',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Economic History',
      from: '2018',
      to: '2018',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Introduction to Financial Accounting',
      from: '2020',
      to: '2020',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Asset Pricing',
      from: '2021',
      to: '2021',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Foreign Exchange Market',
      from: '2021',
      to: '2021',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Labor Economics',
      from: '2021',
      to: '2021',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Game Theory and Application',
      from: '2021',
      to: '2021',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Economics Individual Research 1',
      from: '2021',
      to: '2021',
    },
    {
      institution: 'SungKyunKwan Univ. Economics',
      degree: 'Thesis writing in humanities and social sciences using Python',
      from: '2021',
      to: '2021',
    },
    
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
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
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],

    // Custom theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
