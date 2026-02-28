// Mock data for terminal portfolio

export const personalInfo = {
  name: "Manikanta Reddy Kallam",
  username: "mani",
  title: "Data Engineer",
  email: "kallammanikantareddy@gmail.com",
  linkedin: "https://linkedin.com/in/themani-dev/",
  github: "https://github.com/themani-dev",
  location: "San Francisco, CA",
  bio: "Passionate Data Engineer specializing in building scalable data pipelines and robust backend systems. Experienced in designing distributed systems that process millions of events daily. Strong advocate for clean code and engineering excellence."
};

export const skills = {
  "Data Engineering": [
    "Apache Spark",
    "Apache Kafka",
    "Apache Airflow",
    "ETL/ELT Pipelines",
    "Data Warehousing",
    "Stream Processing"
  ],
  "Backend Development": [
    "Python",
    "Java",
    "FastAPI",
    "Django",
    "REST APIs",
    "GraphQL",
    "KQL",
    "Microservices",
    "SQL/NoSQL"
  ],
  "Cloud & DevOps": [
    "AWS (S3, Lambda, Athena, RDS)",
    "GCP (Dataflow, BigQuery)",
    "Azure (Data Factory, Databricks)",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD (Jenkins, GitHub Actions)",
    "Monitoring (Prometheus, Grafana)"
  ],
  "Machine Learning": [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "MLflow",
    "Feature Engineering",
    "Model Deployment"
  ],
  "Databases": [
    "Snowflake",
    "BigQuery",
    "Redshift",
    "DataBricks Delta Lake",
    "PostgreSQL",
    "MongoDB",
    "DynamoDB"
  ],
  "Reporting & Visualization": [
    "Tableau",
    "Power BI",
    "Looker",
    "Quicksight",
    "Matplotlib",
    "Streamlit"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Real-Time Data Pipeline for E-Commerce Analytics",
    description: "Built a scalable real-time data processing pipeline handling 2M+ events/day. Implemented streaming architecture using Kafka and Spark Streaming for instant analytics and customer insights.",
    techStack: ["Apache Kafka", "Spark Streaming", "Python", "AWS S3", "PostgreSQL", "Docker"],
    impact: "Reduced data latency from 4 hours to real-time, enabling instant business decisions. Improved data accuracy by 45%.",
    github: "https://github.com/themani-dev/realtime-analytics-pipeline",
    demo: null,
    category: "Data Engineering"
  },
  {
    id: 2,
    title: "ML-Powered Recommendation Engine",
    description: "Designed and deployed a collaborative filtering recommendation system using deep learning. Integrated with production APIs serving 100K+ daily recommendations with <50ms latency.",
    techStack: ["TensorFlow", "FastAPI", "Redis", "Docker", "Kubernetes", "MLflow"],
    impact: "Increased user engagement by 35% and revenue by 22%. Achieved 89% prediction accuracy.",
    github: "https://github.com/themani-dev/ml-recommendation-engine",
    demo: "https://demo-recommender.example.com",
    category: "Machine Learning"
  },
  {
    id: 3,
    title: "Distributed ETL Framework",
    description: "Architected a modular ETL framework for processing multi-source data (APIs, databases, files). Automated data quality checks and orchestrated complex workflows using Airflow.",
    techStack: ["Apache Airflow", "Python", "Pandas", "Great Expectations", "Snowflake", "dbt"],
    impact: "Reduced manual ETL work by 80%. Processes 500GB+ data daily with 99.9% uptime.",
    github: "https://github.com/themani-dev/distributed-etl-framework",
    demo: null,
    category: "Data Engineering"
  },
  {
    id: 4,
    title: "CNN-Based Brain Tumor Detection",
    description: "Developed a convolutional neural network (CNN) model for detecting brain tumors from MRI scans. Implemented end-to-end pipeline including data preprocessing, model training, and deployment.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "FastAPI", "Deeplabv3"],
    impact: "Achieved 92% accuracy in tumor detection, significantly improving early diagnosis and treatment planning.",
    github: "https://github.com/themani-dev/cnn-brain-tumor-detection",
    demo: null,
    category: "Machine Learning"
  },
  {
    id: 5,
    title: "Cloud Data Warehouse Migration",
    description: "Led migration of legacy on-premise data warehouse to cloud-native solution. Designed star schema, optimized queries, and implemented incremental loading strategies.",
    techStack: ["Snowflake", "Python", "dbt", "Terraform", "AWS", "Apache Airflow"],
    impact: "Reduced infrastructure costs by 40%. Improved query performance by 10x.",
    github: "https://github.com/themani-dev/cloud-dwh-migration",
    demo: null,
    category: "Data Engineering"
  }
];

export const experience = [
  {
    id: 1,
    title: "Senior Data Engineer",
    company: "Digital Ocean",
    location: "Remote",
    duration: "Sep 2025 - Present",
    responsibilities: [
      "Scaled multi-node Prometheus monitoring pipelines to process billions of log and time-series records, improving AI/ML infrastructure observability across regions and clusters.",
      "Built 3–6 month capacity forecasting models by user, region, cluster, and VM type, reducing unexpected shortages by 30%.",
      "Architected a TB-scale Snowflake data warehouse for infrastructure logs and time-series analytics supporting capacity and reliability insights.",
      "Automated end-to-end data pipelines using Airflow, Snowpipe, DBT, and Python to power Looker and Grafana dashboards for data-driven capacity planning."
    ]
  },
  {
    id: 2,
    title: "Senior Data Engineer",
    company: "TekAssembly Corporation",
    location: "Hybrid",
    duration: "May 2025 - Aug 2025",
    responsibilities: [
      "Architected and maintained data pipelines processing 10TB+ data daily",
      "Led migration from batch to real-time streaming architecture using Kafka",
      "Mentored team of 4 junior engineers on best practices and code reviews",
      "Reduced pipeline failures by 60% through robust error handling and monitoring"
    ]
  },
  {
    id: 3,
    title: "Data Engineer",
    company: "WellsFargo",
    location: "Remote",
    duration: "Sep 2024 - Apr 2025",
    responsibilities: [
      "Developed RESTful APIs using Python FastAPI serving 1M+ requests/day",
      "Engineered robust ETL processes with AWS Glue and Kinesis, orchestrating scalable ingestion and transformation of high-volume financial data into optimized AWS architecture, improving processing efficiency by 30%.",
      "Implemented caching layer with Redis reducing API latency by 50%",
      "Deployed serverless backend architectures on AWS Fargate and CodeArtifact, reducing infrastructure overhead and supporting scalable, cost-efficient data services."
    ]
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "Essenvia Inc",
    location: "Remote",
    duration: "Oct 2023 - July 2024",
    responsibilities: [
      "Structured Databases and datawarehouse for ingesting transactional Data and analytics Data.",
      "Configured secure data storage and access control using Google Cloud Storage (GCS) with IAM roles and service accounts to manage permissions and ensure compliance.",
      "Configured and optimized BigQuery warehouses, applying advanced partitioning and DBT refactoring to boost query performance by 30% on transactional and analytical datasets.",
      "Automated data validations via DBT and orchestrated production workflows using Apache Airflow, reducing data incidents by 20% and ensuring timely data delivery."
    ]
  },
  {
    id: 5,
    title: "Senior Systems Engineer",
    company: "Infosys Ltd",
    location: "Hyderabad, India",
    duration: "Feb 2020 - July 2022",
    responsibilities: [
      "Architected a four-layer medallion data lakehouse (raw, curated, semantic, consumption) handling petabyte-scale e-commerce data across multiple geographies, supporting 50–80TB data warehousing.",
      "Built and managed modular data pipelines in GCP, utilizing DBT for scalable SQL-based transformations and Airflow Composer for orchestration, reducing daily ETL processing times by 60%.",
      "Created data models and implemented automated data validation checks to ensure data quality.",
      "Managed and optimized Firestore databases to ingest metadata for inbound files, supporting real-time tracking and validation to avoid error rate by 30%."
    ]
  }
];

export const asciiArt = `
███╗   ███╗ █████╗ ███╗   ██╗██╗
████╗ ████║██╔══██╗████╗  ██║██║
██╔████╔██║███████║██╔██╗ ██║██║
██║╚██╔╝██║██╔══██║██║╚██╗██║██║
██║ ╚═╝ ██║██║  ██║██║ ╚████║██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝
`;

export const BOOT_LINES = [
  { text: "> initializing portfolio...", delay: 0 },
  { text: "> loading modules: [data-pipelines, distributed-systems, cloud-infra]", delay: 400 },
  { text: "> validating environment... OK", delay: 800 },
  { text: "> connecting to database clusters... OK", delay: 1200 },
  { text: "> loading project manifests... OK", delay: 1600 },
  { text: "> compiling experience graph... OK", delay: 2000 },
  { text: "> welcome, visitor.", delay: 2400 },
  { text: asciiArt, delay: 2800, isAscii: true },
  { text: "", delay: 2800 },
];

export const helpText = [
  { command: "help", description: "Display all available commands" },
  { command: "about", description: "Learn more about me" },
  { command: "skills", description: "View my technical skills" },
  { command: "projects", description: "Explore my projects" },
  { command: "experience", description: "View my work experience" },
  { command: "contact", description: "Get in touch with me" },
  { command: "resume", description: "View/download my resume" },
  { command: "clear", description: "Clear the terminal" },
  { command: "sudo hire mani", description: "???" }
];