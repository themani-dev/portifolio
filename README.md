<div align="center">

```
███╗   ███╗ █████╗ ███╗   ██╗██╗
████╗ ████║██╔══██╗████╗  ██║██║
██╔████╔██║███████║██╔██╗ ██║██║
██║╚██╔╝██║██╔══██║██║╚██╗██║██║
██║ ╚═╝ ██║██║  ██║██║ ╚████║██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝
```

# Portfolio — Manikanta Reddy Kallam

**Data Engineer** | Building scalable data pipelines & robust backend systems

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![GCP](https://img.shields.io/badge/GCP-Cloud_Run-4285F4?style=flat-square&logo=googlecloud&logoColor=white)](https://cloud.google.com/run)

[Live Demo](https://themani.dev) · [LinkedIn](https://linkedin.com/in/themani-dev/) · [GitHub](https://github.com/themani-dev)

</div>

---

## Overview

A full-stack developer portfolio with a unique **dual-mode interface** — visitors can explore through an interactive **Terminal CLI** or switch to a polished **GUI mode**, all wrapped in a hacker-inspired dark theme.

**Terminal Mode** — A fully functional CLI where visitors type commands like `about`, `skills`, `projects`, and `experience` to navigate the portfolio. Complete with a boot sequence, tab-completion, command history, and matrix rain effects.

**GUI Mode** — A modern, animated single-page layout with smooth scroll navigation, section spy, and responsive design for all devices.

## Screenshots

> _Add screenshots of both Terminal and GUI modes here._

## Features

- **Dual Interface** — Seamlessly toggle between Terminal CLI and GUI views with animated transitions
- **Interactive Terminal** — Boot sequence animation, tab-completion, arrow-key command history, and easter eggs (`sudo hire mani`)
- **Visual Effects** — Matrix rain background, floating code particles, gradient neon accents
- **Contact Form** — Backend-powered form that stores messages in MongoDB
- **Command Analytics** — Tracks terminal command usage with aggregated summaries
- **Responsive Design** — Mobile-first layout with collapsible navigation
- **Smooth Animations** — Powered by Framer Motion throughout both modes

## Tech Stack

### Frontend
| | |
|---|---|
| **Framework** | React 19 with CRACO |
| **Styling** | Tailwind CSS 3.4, custom terminal theme |
| **UI Components** | Radix UI primitives, shadcn/ui |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Routing** | React Router v7 |
| **Font** | JetBrains Mono |

### Backend
| | |
|---|---|
| **Framework** | Python FastAPI |
| **Database** | MongoDB (Motor async driver) |
| **Validation** | Pydantic v2 |
| **Server** | Uvicorn |

### Infrastructure
| | |
|---|---|
| **Containers** | Docker (multi-stage builds) |
| **CI/CD** | Google Cloud Build |
| **Hosting** | Google Cloud Run |
| **Web Server** | Nginx (frontend) |

## Project Structure

```
portifolio/
├── frontend/
│   └── main/
│       ├── src/
│       │   ├── components/
│       │   │   ├── GUI/              # GUI mode sections
│       │   │   │   ├── Hero.jsx
│       │   │   │   ├── About.jsx
│       │   │   │   ├── Skills.jsx
│       │   │   │   ├── Projects.jsx
│       │   │   │   ├── Experience.jsx
│       │   │   │   ├── Contact.jsx
│       │   │   │   └── Footer.jsx
│       │   │   ├── CommandOutputs/   # Terminal mode outputs
│       │   │   ├── Terminal.jsx      # Terminal interface
│       │   │   ├── PortfolioGUI.jsx  # GUI interface
│       │   │   ├── MatrixRain.jsx    # Matrix rain effect
│       │   │   └── CodeParticles.jsx # Floating code particles
│       │   ├── data/
│       │   │   └── constants.js      # Portfolio content & data
│       │   └── App.js                # Mode toggle & routing
│       ├── Dockerfile
│       ├── tailwind.config.js
│       └── package.json
├── backend/
│   ├── server.py                     # FastAPI app & status routes
│   ├── routes/
│   │   ├── contact.py                # Contact form endpoint
│   │   └── analytics.py              # Command analytics endpoint
│   ├── models/                       # Pydantic models
│   ├── Dockerfile
│   └── requirements.txt
└── cloudbuild.yml                    # GCP Cloud Build config
```

## Getting Started

### Prerequisites

- **Node.js** >= 16 & **Yarn**
- **Python** >= 3.11
- **MongoDB** instance (local or Atlas)

### Backend

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your MONGO_URL and DB_NAME

# Start the server
uvicorn server:app --reload --port 8000
```

The API will be available at `http://localhost:8000`. Visit `/docs` for the interactive Swagger UI.

### Frontend

```bash
# Navigate to frontend
cd frontend/main

# Install dependencies
yarn install

# Set backend URL
echo "REACT_APP_BACKEND_URL=http://localhost:8000" > .env

# Start development server
yarn start
```

The app will open at `http://localhost:3000`.

### Docker

```bash
# Backend
docker build -t portfolio-backend ./backend
docker run -p 8000:8000 --env-file backend/.env portfolio-backend

# Frontend
docker build -t portfolio-frontend ./frontend/main
docker run -p 80:80 portfolio-frontend
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/` | Health check |
| `POST` | `/api/status` | Create status check |
| `GET` | `/api/status` | List status checks |
| `POST` | `/api/contact` | Submit contact form |
| `POST` | `/api/analytics/command` | Track command usage |
| `GET` | `/api/analytics/summary` | Get analytics summary |

## Terminal Commands

```
$ help

  help          Display all available commands
  about         Learn more about me
  skills        View my technical skills
  projects      Explore my projects
  experience    View my work experience
  contact       Get in touch with me
  resume        View/download my resume
  clear         Clear the terminal
  sudo hire mani   ???
```

## Deployment

The project uses **Google Cloud Build** for CI/CD. Pushing to the main branch triggers an automated build and deploy to **Cloud Run**.

```bash
gcloud builds submit --config cloudbuild.yml
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with** ☕ **by Manikanta Reddy Kallam**

[LinkedIn](https://linkedin.com/in/themani-dev/) · [GitHub](https://github.com/themani-dev) · [Email](mailto:kallammanikantareddy@gmail.com)

</div>
