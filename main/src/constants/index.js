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
    name: 'GCP-Trio',
    description: 'A Google cloud based 3-layer ELT pipeline Architecture to ingest petabytes of data',
    tags: [
      {
        name: 'Airflow',
        color: 'blue-text-gradient',
      },
      {
        name: 'DBT',
        color: 'green-text-gradient',
      },
      {
        name: 'Python',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/manireddy1997',
    demo: 'https://manireddy1997.github.io/',
  },
  {
    id: 'project-2',
    name: 'Dashboard',
    description:
      'An automated pipeline to provide insights on uber data',
    tags: [
      {
        name: 'GCP',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'Looker',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/manireddy1997',
    demo: 'https://manireddy1997.github.io/',
  },
  {
    id: 'project-3',
    name: 'Serverless Pipeline',
    description: 'A Low cost pipeline to deliver high scalable solution for data analysis',
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
    repo: 'https://github.com/manireddy1997',
    demo: 'https://manireddy1997.github.io/',
  },
  {
    id: 'project-4',
    name: 'planner.io',
    description: `An userfriendly planner for planning your day`,
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'aws cognito',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/manireddy1997',
    demo: 'https://manireddy1997.github.io/',
  },
  {
    id: 'project-5',
    name: 'Amphibot',
    description:
      'An underwater survellience robot to monitor marine life and mineral deposits',
    tags: [
      {
        name: 'Raspbian',
        color: 'blue-text-gradient',
      },
      {
        name: 'openCV',
        color: 'green-text-gradient',
      },
      {
        name: 'android',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/manireddy1997',
    demo: 'https://manireddy1997.github.io/',
  },
];

export { services, technologies, experiences, projects };
