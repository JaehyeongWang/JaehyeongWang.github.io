// gitprofile.config.js

const config = {
  github: {
    username: 'JaehyeongWang', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 12, // How many projects to display.
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
      company: '1st student council, Planning and support for department events, etc.',
      position: 'Economics Student Council',
      from: 'March 2018',
      to: 'February 2019',
      companyLink: '',
    },
    {
      company: 'Sergeant, signal man, etc,',
      position: 'Republic of Korea Army',
      from: 'January 2019',
      to: 'September 2020',
      companyLink: '',
    },
    {
      company: 'Trust asset, mezzanine contract, and credit facility management support by PBS team',
      position: 'Samsung Securities',
      from: 'December 2021',
      to: 'June 2022',
      companyLink: '',
    },
    {
      company: 'Sungkyunkwan University Convergence Foundation Project 1st Prize',
      position: '"TrashFree", the New Concept Garbage Collection Service',
      from: 'June 2022',
      to: 'August 2022',
      companyLink: '',
    },
    {
      company: 'Financial Supervisory Service',
      position: 'Financial Education Volunteer Group',
      from: 'August 2022',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Sungkyunkwan University 2022 AI Idea Service Contest 1st prize in business idea category',
      position: '"ANVY", Search word recommendation service for developers',
      from: 'December 2022',
      to: 'January 2023',
      companyLink: '',
    },
    {
      company: 'CFO, Developer, Advancing various businesses including ANVY',
      position: 'Kyung Hee University Campus Town',
      from: 'March 2023',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Word Processor User',
      year: 'May 2019',
      link: ''
    },
    {
      name: 'Certified Distribution Management Level-II',
      year: 'July 2019',
      link: ''
    },
    {
      name: 'Information Technology Qualification',
      year: 'August 2019',
      link: ''
    },
    {
      name: 'Craftsman Motor Vehicles Maintenance',
      year: 'December 2019',
      link: ''
    },
    {
      name: 'Craftsman Cook, Korean Food',
      year: 'August 2020',
      link: ''
    },
    {
      name: 'Computer Specialist in Spreadsheet & Database Level-I',
      year: 'May 2022',
      link: ''
    },
    {
      name: 'Investment asset manager license',
      year: 'June 2022',
      link: ''
    },
    {
      name: 'SQLd',
      year: 'June 2022',
      link: ''
    },
    {
      name: 'TEPS 377',
      year: 'February 2023',
      link: ''
    },
    {
      name: 'OPIc English IM2',
      year: 'March 2023',
      link: ''
    },
  ],
  education: [
    {degree: 'Principles of Economics I'},
    {degree: 'Principles of Economics II'},
    {degree: 'Microeconomics'},
    {degree: 'Macroeconomics'},
    {degree: 'Mathematics for Economics'},
    {degree: 'Econometrics'},
    {degree: 'Statistical Analysis for Economics'},
    {degree: 'Economic History'},
    {degree: 'Introduction to Financial Accounting'},
    {degree: 'Asset Pricing'},
    {degree: 'Foreign Exchange Market'},
    {degree: 'Labor Economics'},
    {degree: 'Game Theory and Application'},
    {degree: 'Economics Individual Research 1'},
    {degree: 'Thesis writing in humanities and social sciences using Python'},
    {degree: 'Data Structures'},
    {degree: 'Algorithms'},
    {degree: 'Logic Circuits'},
    {degree: 'System Program'},
    {degree: 'Computer Architectures'},
    {degree: 'Software Engineering'},
    {degree: 'Computer Networks'},
    {degree: 'Operating System'},
    {degree: 'Programming Languages'},
    {degree: 'Database'},
    {degree: 'Machine Learning'},
    {degree: 'Robust System Design with Big Data Analytics and Artificial Intelligence'},
    {degree: 'Machine Learning and Deep Learning'},
    {degree: 'Seminar in Computer Engineering'},
    {degree: 'Artificial Intelligence Project'},
    {degree: 'Java Programming Practice'},
    {degree: 'Mobile App Programming Practice'},
    {degree: 'Open Source Software Practice'},
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
