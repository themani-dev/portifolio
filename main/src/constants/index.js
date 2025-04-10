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
  paloaltosoft,
  itact,

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
    title: 'Software Developer Intern',
    company_name: 'PaloAlto Soft',
    icon: paloaltosoft,
    iconBg: '#333333',
    date: 'Mar 2019 - Jan 2020',
  },
  {
    title: 'Systems Engineer - Data N Analytics',
    company_name: 'Infosys',
    icon: infosys,
    iconBg: '#333333',
    date: 'Feb 2020 - Feb 2021',
  },
  {
    title: 'Senior Systems Engineer - Data Engineering',
    company_name: 'Infosys',
    icon: infosys,
    iconBg: '#333333',
    date: 'Feb 2021 - July 2022',
  },
  {
    title: 'Data Engineer',
    company_name: 'PaloAlto Soft',
    icon: paloaltosoft,
    iconBg: '#333333',
    date: 'Sep 2022 - July 2024',
  },
  {
    title: 'Data Engineer',
    company_name: 'Itact Tech',
    icon: itact,
    iconBg: '#333333',
    date: 'Sep 2024 - Present',
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
      'An automated pipeline to provide insights on Crime records in Sanfrancisco',
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
    repo: 'https://github.com/manireddy1997/CrimeAnalysisSF#an-analytics-on-the-sanfrancisco-crimes',
    demo: 'https://public.tableau.com/app/profile/manikanta.reddy.kallam/viz/SFCrimeAnalytics/plain?publish=yes',
  },
  {
    id: 'project-3',
    name: 'Brain Tumor Detection',
    description: 'A project on early detection of Brain tumors using CNN and DeepLabV3',
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
    repo: 'https://github.com/themani-dev',
    demo: 'https://themani-dev.github.io/',
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
    repo: 'https://github.com/themani-dev',
    demo: 'https://themani-dev.github.io/',
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
    repo: 'https://github.com/themani-dev',
    demo: 'https://themani-dev.github.io/',
  },
];

export { services, technologies, experiences, projects };
