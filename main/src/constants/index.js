import {
  frontend,
  backend,
  ux,
  prototyping,

  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  kelhel,

  infosys,

  airflow,
  dbt,
  docker,
  python,
  git,
  postgresql,
  django,
  kafka,
  mongodb,
  mysql,
  tableau,
  powerbi,
  snowflake,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'Blog',
    title: 'Blog',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Python Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Data Analytics',
    icon: ux,
  },
  {
    title: 'Scalable Data Pipeline',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'DBT',
    icon: dbt,
  },
  {
    name: 'Apace Airflow',
    icon: airflow,
  },
  {
    name: 'Tableau',
    icon: tableau,
  },
  {
    name: 'PowerBI',
    icon: powerbi,
  },
  {
    name: 'PySpark',
    icon: python,
  },
  {
    name: 'Apache Kafka',
    icon: kafka,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'SQL Server',
    icon: mysql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Snowflake',
    icon: snowflake,
  },
  {
    name: 'git',
    icon: git,
  },

  {
    name: 'docker',
    icon: docker,
  },

];

const experiences = [
  {
    title: 'Firmware Developer',
    company_name: 'Glean Solutions',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2018 - Jan 2020',
  },
  {
    title: 'Data Engineer',
    company_name: 'Infosys',
    icon: infosys,
    iconBg: '#333333',
    date: 'Feb 2020 - July 2022',
  },
  {
    title: 'Data Engineer',
    company_name: 'Freelancing',
    icon: kelhel,
    iconBg: '#333333',
    date: 'July 2022 - Present',
  },

];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
