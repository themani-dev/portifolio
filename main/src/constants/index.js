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
  wellsfargo,
  essenvia,

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
    description: 'I was responsible for designing backend RESTful and GraphQL APIs for secure data retrieval for frontend applications, utilizing frameworks and services such as AWS, Python, the Serverless Framework, Lambda, S3, MongoDB, API Gateway, Cognito, CodePipeline, Amplify, and PostgreSQL. I successfully designed, developed, deployed, and tested comprehensive data solutions, including user registration, secure login, two-factor authentication, and payment portal integration. I implemented robust security measures to protect user data, including a secure login system and two-factor authentication via AWS Cognito, and integrated a seamless payment portal using Stripe. I managed the entire data lifecycle, from concept to deployment, ensuring timely delivery and adherence to project specifications, and collaborated closely with data scientists, stakeholders, and developers to align the data infrastructure with business goals using agile development practices. Additionally, I enabled CI/CD pipelines with AWS CodePipeline, reducing manual effort by three hours, constructed relational databases to store transactional details, facilitated the management of digital identities using AWS IAM, and interpreted data requirements to fulfill customer needs.',
  },
  {
    title: 'Systems Engineer - Data N Analytics',
    company_name: 'Infosys',
    icon: infosys,
    iconBg: '#333333',
    date: 'Feb 2020 - Feb 2021',
    description: 'I was responsible for generating daily reports on production environment status and addressing ad-hoc client requirements using frameworks and services such as DataFlow, Cloud Functions, Airflow, BigQuery, Tableau, Google Data Studio, and CI/CD. I implemented Python-based automation to produce daily inbound file status reports, which reduced manual effort by 90% and significantly enhanced operational efficiency by ensuring the timely delivery of accurate reports. Additionally, I consistently fulfilled ad-hoc client requirements promptly, contributing to a 10% increase in profits. I developed CI/CD pipelines utilizing CodeBuild and GitHub to automate code deployment, thereby improving security compliance and eliminating manual intervention. Operating in an Agile environment, I prioritized customer feedback and involvement throughout the development process. Moreover, I designed and implemented Tableau dashboards to analyze and visualize revenue generation from advertising campaigns, providing actionable insights that facilitated data-driven decision-making and optimized revenue strategies for the e-commerce organization.',
  },
  {
    title: 'Senior Systems Engineer - Data Engineering',
    company_name: 'Infosys',
    icon: infosys,
    iconBg: '#333333',
    date: 'Feb 2021 - July 2022',
    description: 'I enabled data modeling and multigrain insights on sales and advertisements running on an e-commerce portal using frameworks and services such as Google Cloud Platform, Python, DBT, Composer-Airflow, Flask, Cloud Functions, Cloud Run, BigQuery, Firestore, and DataFlow. I built a highly scalable 4-layer architecture (raw, curated, semantic, and consumption) to handle large workloads effectively and developed and maintained data pipelines and analytics solutions on GCP for efficient data processing and warehousing. I created data models and implemented automated data validation checks to ensure data quality, managed and optimized Firestore databases to ingest metadata for inbound files, reducing error rates by 30%, and utilized SQL and NoSQL databases to query and analyze datasets. I developed a data scraping tool with Flask and Pandas that reduced manual efforts by 70%, achieved metadata-driven orchestration of data pipelines with Composer (Airflow) for ETL operations, and leveraged DBT for data transformation, enabling modular and maintainable SQL codebases. Additionally, I created automated scripts to monitor daily file loading in cloud storage, improving efficiency and reducing processing time by 60% for internal reporting and interpretation. I collaborated with cross-functional teams to gather requirements and deliver data solutions that meet business needs and worked with business stakeholders to identify and understand key performance indicators, creating data models to support their needs.',
  },
  {
    title: 'Data Engineer',
    company_name: 'Essenvia',
    icon: essenvia,
    iconBg: '#333333',
    date: 'Sep 2022 - July 2024',
    description: '',
  },
  {
    title: 'Data Engineer',
    company_name: 'Wells Fargo',
    icon: wellsfargo,
    iconBg: '#333333',
    date: 'Sep 2024 - Present',
    description: 'designed and optimized PySpark ETL pipelines for large-scale data processing and analytics, structuring databases and data warehouses to efficiently handle transactional and analytics data. Leveraging DBT, I built and optimized data transformation workflows, ensuring data consistency, quality, and performance. I developed modular, reusable DBT models to enhance query performance and maintainability, while implementing DBT tests to improve data accuracy and integrity, reducing production issues by 20%. Additionally, I automated DBT runs with Airflow DAGs, streamlining orchestration and ensuring timely data availability for business reports.',
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
