# AI Study Planner

**Intelligent Full-Stack Study Planning and Task Management System**

AI Study Planner is a full-stack web application designed to help students organize academic tasks, prioritize deadlines, and structure their study schedules.

The platform combines a **React frontend, Flask REST API backend, SQLite database, and rule-based recommendation engine** to provide task management and intelligent study-planning assistance through a unified application.

---

## Overview

Managing assignments, examinations, quizzes, and multiple academic deadlines can make it difficult to maintain a structured study routine.

AI Study Planner addresses this problem by combining traditional task management with intelligent scheduling logic.

The application allows students to:

- Create and manage academic tasks
- Assign priorities to tasks
- Track deadlines
- Store task information
- Generate study recommendations
- View structured study plans through an interactive interface

---

## Key Capabilities

- Academic task management
- Priority-based task organization
- Deadline-aware study planning
- Intelligent study recommendations
- React-based interactive interface
- Flask REST API backend
- SQLite data persistence
- Modular application architecture
- Extensible recommendation framework

---

## System Architecture

```text
                    User
                     |
                     v
              React Frontend
                     |
                     v
              Flask REST API
                     |
          +----------+----------+
          |                     |
          v                     v
    Task Management        SQLite Database
          |
          v
   Recommendation Engine
          |
          v
   Intelligent Study Plan
          |
          v
      User Interface
```

---

## Core Components

### 1. React Frontend

The frontend provides an interactive interface for managing academic activities.

The interface supports:

- Task creation
- Task editing
- Task deletion
- Task visualization
- Study schedule management
- Dynamic interaction with the backend

The frontend is built using **React with Vite**.

---

### 2. Flask Backend

The backend provides the application API and handles the core business logic.

Responsibilities include:

- Task management
- API request handling
- Data persistence
- Recommendation processing
- Communication between the frontend and database

The backend is implemented using **Flask**.

---

### 3. SQLite Database

SQLite provides lightweight persistent storage for application data.

The database stores information required for:

- Academic tasks
- Priorities
- Deadlines
- Study-planning information

---

### 4. Recommendation Engine

The recommendation engine uses predefined scheduling logic to analyze task information and generate study suggestions.

The recommendation process considers factors such as:

- Task priority
- Deadline
- Study requirements

The current implementation uses a **rule-based recommendation approach**, providing a foundation that can later be extended with machine-learning techniques.

---

## Application Workflow

```text
Create Academic Tasks
          |
          v
Store Task Information
          |
          v
Analyze Priority & Deadline
          |
          v
Apply Scheduling Logic
          |
          v
Generate Study Recommendations
          |
          v
Display Study Plan
```

---

## API

The application provides REST-based backend endpoints for task management and study recommendations.

| Endpoint | Purpose |
|---|---|
| `/tasks` | Create, retrieve, update, and delete study tasks |
| `/ai/suggestions` | Generate study recommendations |

---

## Example Use Case

### Student Tasks

```text
Assignment
Priority: High
Deadline: Tomorrow

Quiz
Priority: Medium
Deadline: Three Days
```

### Generated Study Plan

```text
08:00 – 10:00
Assignment

10:30 – 11:30
Quiz Revision

17:00 – 18:00
Practice Problems
```

The example demonstrates how task information can be converted into a structured study schedule.

---

## Technology Stack

| Category | Technology |
|---|---|
| Frontend | React |
| Frontend Tooling | Vite |
| Backend | Flask |
| Programming Languages | Python, JavaScript |
| Database | SQLite |
| API Architecture | REST |
| Styling | HTML5, CSS3 |
| Recommendation Logic | Rule-Based AI |

---

## Project Structure

```text
ai-study-planner/
│
├── frontend/          # React frontend application
│
├── backend/           # Flask backend and API
│
├── agents.md          # AI workflow documentation
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/thrishikav9-del/ai-study-planner.git
cd ai-study-planner
```

---

### 2. Backend Setup

Navigate to the backend:

```bash
cd backend
```

Install the Python dependencies:

```bash
pip install -r requirements.txt
```

Start the Flask application:

```bash
python app.py
```

---

### 3. Frontend Setup

Open a new terminal and navigate to the frontend:

```bash
cd frontend
```

Install the JavaScript dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend can then be accessed through the local development URL provided by Vite.

---

## Development Workflow

The application follows a simple full-stack development flow:

```text
React UI
   |
   | HTTP Requests
   v
Flask REST API
   |
   +---- Task Management
   |
   +---- Recommendation Logic
   |
   v
SQLite Database
```

---

## Applications

AI Study Planner can be used for:

- Academic planning
- Assignment management
- Exam preparation
- Student productivity
- Task prioritization
- Intelligent scheduling
- Educational technology research

---

## Advantages

- Combines frontend, backend, database, and AI logic in one application
- Simple and intuitive task-management workflow
- Priority-aware study planning
- Lightweight SQLite-based storage
- Modular architecture
- Easy to extend with more advanced recommendation techniques

---

## Limitations

- Current recommendations are based on predefined rules
- No machine-learning personalization in the current implementation
- Scheduling quality depends on the available task information
- SQLite is intended for lightweight application usage
- The current project is primarily designed as an academic full-stack prototype

---

## Future Enhancements

Potential extensions include:

- Machine-learning-based personalized recommendations
- User authentication
- Calendar integration
- Email and notification reminders
- Cloud deployment
- Mobile application
- Study analytics dashboard
- Personalized learning patterns
- Adaptive scheduling based on historical study behavior

---

## Documentation

Additional implementation and AI workflow information is available in:

**`agents.md`**

---

## Research Perspective

AI Study Planner explores how intelligent scheduling logic can be integrated into a conventional full-stack application.

The project combines:

```text
Frontend Development
        +
REST API Design
        +
Database Management
        +
Rule-Based AI
        +
Academic Task Planning
```

This provides a foundation for extending traditional productivity applications toward more adaptive and personalized study systems.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Disclaimer

AI Study Planner was developed for educational purposes to demonstrate full-stack web development and AI-assisted study planning.

The recommendations are intended to support organization and time management and should not replace individual academic judgment or planning.

---

## Author

**Vullasa Thrishika**

B.Tech Artificial Intelligence  
Amrita Vishwa Vidyapeetham
