// Mock data for terminal portfolio

export const personalInfo = {
  name: "Manikanta Reddy Kallam",
  username: "mani",
  title: "Data Engineer",
  email: "kallammanikantareddy@gmail.com",
  linkedin: "https://linkedin.com/in/themani-dev/",
  github: "https://github.com/themani-dev",
  location: "Remote",
  bio: "Passionate Data Engineer specializing in building scalable data pipelines and robust backend systems. Experienced in designing distributed systems that process millions of events daily. Strong advocate for clean code and engineering excellence."
};

export const skills = {
  "Data Engineering": [
    "Apache Spark",
    "Apache Kafka",
    "Apache Airflow",
    "ETL/ELT Pipelines",
    "Data Warehousing",
    "Stream Processing",
    "Snowflake",
    "BigQuery"
  ],
  "Backend Development": [
    "Python",
    "Java",
    "FastAPI",
    "Django",
    "REST APIs",
    "GraphQL",
    "Microservices",
    "SQL/NoSQL"
  ],
  "Cloud & DevOps": [
    "AWS (S3, Lambda, EC2, RDS)",
    "Azure (Data Factory, Databricks)",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD (Jenkins, GitHub Actions)",
    "Monitoring (Datadog, Grafana)"
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
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Cassandra",
    "DynamoDB",
    "Elasticsearch"
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
    title: "Customer Churn Prediction System",
    description: "Built end-to-end ML pipeline for predicting customer churn with automated feature engineering, model training, and deployment. Implemented A/B testing framework for model evaluation.",
    techStack: ["Python", "XGBoost", "Scikit-learn", "MLflow", "FastAPI", "PostgreSQL"],
    impact: "Identified at-risk customers with 87% accuracy. Helped retention team reduce churn by 18%.",
    github: "https://github.com/themani-dev/churn-prediction-ml",
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
    company: "TechCorp Solutions",
    location: "Remote",
    duration: "Jan 2023 - Present",
    responsibilities: [
      "Architected and maintained data pipelines processing 10TB+ data daily",
      "Led migration from batch to real-time streaming architecture using Kafka",
      "Mentored team of 4 junior engineers on best practices and code reviews",
      "Reduced pipeline failures by 60% through robust error handling and monitoring"
    ]
  },
  {
    id: 2,
    title: "Data Engineer",
    company: "DataFlow Analytics",
    location: "Hybrid",
    duration: "Mar 2021 - Dec 2022",
    responsibilities: [
      "Built ETL pipelines integrating data from 15+ sources into centralized warehouse",
      "Optimized SQL queries reducing execution time by 70%",
      "Implemented data quality framework catching 95% of data anomalies",
      "Collaborated with ML team to productionize 5 machine learning models"
    ]
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "StartupHub Inc",
    location: "On-site",
    duration: "Jun 2019 - Feb 2021",
    responsibilities: [
      "Developed RESTful APIs using Python FastAPI serving 1M+ requests/day",
      "Designed database schema and optimized indexes for PostgreSQL",
      "Implemented caching layer with Redis reducing API latency by 50%",
      "Containerized applications using Docker and orchestrated with Kubernetes"
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