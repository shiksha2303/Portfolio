# 💼 Shiksha Sondik — Data Analyst & Software Engineering Portfolio

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
[![Power BI](https://img.shields.io/badge/Power_BI-Analytics-F2C811?logo=powerbi&logoColor=black&style=for-the-badge)](https://powerbi.microsoft.com/)
[![SQL](https://img.shields.io/badge/SQL-MySQL_%7C_3NF_Schema-4479A1?logo=mysql&logoColor=white&style=for-the-badge)](https://www.mysql.com/)
[![Python](https://img.shields.io/badge/Python-Pandas_%7C_NumPy-3776AB?logo=python&logoColor=white&style=for-the-badge)](https://www.python.org/)

> **Live Portfolio:** https://portfolio-shikshasondik-23.vercel.app/
A modern, responsive, and performance-optimized portfolio website showcasing full-stack engineering and data analytics capabilities. Built with **React 18**, **Tailwind CSS**, and **Recharts**, featuring an interactive Business Intelligence console, verified projects, and an interactive ATS-compatible resume viewer.

---

## 🌟 Key Highlights & Features

### 1. 📊 Flagship Project: Pan-India Retail & Consumer Sales Analytics Dashboard
* **Domain:** Enterprise Business Intelligence & Indian Retail Analytics (`Power BI`, `SQL`, `DAX`, `Excel`).
* **Interactive Console:** Live Recharts-powered dashboard preview with quarterly filter controls (`Q1`, `Q2`, `Q3`, `Q4 Festive Surge`).
* **5-Stage Analytics Narrative:** Problem Formulation → Schema Architecture → DAX Modeling → Actionable Insights → Strategic Recommendations.
* **Production-Ready Queries & Formulas:**
  * **SQL Star Schema:** Fact table joined with `Dim_Region` (Indian Zonal/State hubs), `Dim_Date`, `Dim_Category`, and `Dim_Channel`.
  * **Power BI DAX Measures:** Dynamic time-intelligence (`YoY Revenue Growth %`, `Gross Margin %`, `Tier-2/3 Contribution %`).
* **Indian Market Insights:** Multi-zone analysis across North (Delhi NCR/UP), West (MH/Gujarat), South (KA/TN/TS), and East (WB/Bihar) with festive season demand modeling.

### 2. 📄 Interactive Resume Viewer & 1-Click ATS Text Copy
* Full-screen modal presenting verified academic credentials, internships, project highlights, and categorized skills.
* **1-Click ATS Copy Button:** Instantly copies clean, plain-text resume formatted specifically for applicant tracking systems.
* **Print & Export Ready:** Custom CSS print styles for crisp document generation.

### 3. 🛠️ Featured Full-Stack Projects
* **PunchIn — Attendance & Payroll Management System:** Normalized 3rd Normal Form (3NF) relational database design supporting organizations of up to 50+ staff with automated gross/net compensation calculations.
* **RouteSure — Smart Route Optimisation Web App:** Real-time multi-waypoint pathfinding engine integrating Maps APIs with live distance, ETA calculation, and fastest/safest/shortest route filters.

### 4. 🏢 Professional Experience & Social Impact
* **BCCL (Coal India Limited) — Web Development Intern:** Requirement research and frontend reporting components for coal truck telemetry logistics.
* **Womenite — Social Intern (End Period Poverty Campaign):** Grassroots research, content design, and community awareness outreach impacting 200+ individuals.

---

## 🧰 Technical Skills Taxonomy

| Category | Technologies & Tools |
| :--- | :--- |
| **Programming Languages** | Python, SQL, JavaScript (ES6+), C, C++, Java, HTML5, CSS3 |
| **Data Analytics & BI** | Power BI, DAX, Tableau, Advanced Excel, MS Office, Google Analytics, KPI Reporting |
| **Database & Modeling** | MySQL, DBMS, ETL Pipelines, Data Modelling, Normalised Schema Design (3NF) |
| **AI / ML & Data Science** | Python (Pandas, NumPy), Data Cleaning, Data Wrangling, EDA, Data Visualisation |
| **Web & Mobile Technologies** | React.js, Node.js, Bootstrap, Responsive Design, REST APIs, DOM Manipulation, UI/UX |
| **Methodologies & Tools** | Git, GitHub, VS Code, Agile/Scrum, SDLC, Version Control, DSA, OOP, Requirements Research |
| **Languages** | English (Professional), Hindi (Native), German (Intermediate B1) |

---

## 📁 Repository Structure

```plaintext
portfolio/
├── public/                # Static assets & icons
├── src/
│   ├── components/
│   │   ├── about/         # Career objective & background narrative
│   │   ├── casestudy/     # Flagship India-Centric BI Case Study & Interactive Dashboard
│   │   ├── common/        # Shared SVG icons & UI elements
│   │   ├── contact/       # Contact inquiry form & direct connection cards
│   │   ├── education/     # Academic degree, leadership achievements & languages
│   │   ├── experience/    # BCCL (Coal India) & Womenite internship timeline
│   │   ├── hero/          # Value proposition, quick pillars & hero CTAs
│   │   ├── layout/        # Responsive header navbar & footer
│   │   ├── projects/      # PunchIn & RouteSure featured project cards
│   │   ├── resume/        # Full-screen interactive resume modal & ATS copy
│   │   └── skills/        # Searchable & categorized technical skills grid
│   ├── data/
│   │   └── resumeData.js  # Single source of truth for resume & project metadata
│   ├── App.jsx            # Main application root
│   ├── index.css          # Tailwind directives, glassmorphism & dark theme styles
│   └── main.jsx           # React DOM entrypoint
├── index.html             # HTML5 entry with meta SEO tags
├── package.json           # Scripts and dependencies
├── tailwind.config.js     # Tailwind typography & slate/cyan palette configuration
└── vite.config.js         # Vite configuration with vendor chunk splitting
```

---

## 💻 Local Development Setup

To run this project locally on your machine:

### Prerequisites
* **Node.js** (v18.0 or higher recommended)
* **npm** or **yarn**

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shiksha2303/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📬 Contact & Connect

* **Author:** Shiksha Sondik
* **Email:** [shikshasondik@gmail.com](mailto:shikshasondik@gmail.com)
* **LinkedIn:** [linkedin.com/in/shiksha-sondik-3449a8233](https://www.linkedin.com/in/shiksha-sondik-3449a8233/)
* **GitHub:** [github.com/shiksha2303](https://github.com/shiksha2303)
* **Documentation** .[https://drive.google.com/file/d/1da5IFvcZFYpdqAZW_j0Q27MsWAjMP-lT/view?usp=drive_link] (https://drive.google.com/file/d/1da5IFvcZFYpdqAZW_j0Q27MsWAjMP-lT/view?usp=drive_link)
--- 


⭐ *If you find this portfolio project insightful or helpful, feel free to star this repository!*
