# AI Study Planner

**Intelligent Full-Stack Study Planning and Task Management System**

AI Study Planner is a full-stack web application designed to help students organize academic tasks, prioritize study schedules, and improve productivity through intelligent task management. The platform combines a modern React frontend, a Flask backend, and an AI-driven recommendation engine to provide personalized study planning and scheduling assistance.

The system enables students to manage daily academic activities while receiving intelligent recommendations that support effective time management and structured learning.

---

## Overview

Managing coursework, assignments, examinations, and personal study schedules can be challenging, particularly when multiple deadlines overlap. Traditional task management applications often provide only static scheduling features without considering task importance or study priorities.

AI Study Planner addresses this challenge by integrating intelligent scheduling with a full-stack architecture. The application combines task management, recommendation logic, and a responsive user interface to create a centralized academic planning platform.

---

## Key Features

- Intelligent study schedule recommendations
- Academic task creation, editing, and deletion
- Priority-based task organization
- Responsive full-stack web interface
- RESTful backend API
- Modular application architecture
- Scalable AI recommendation framework

---

## System Architecture

The application follows a modular three-layer architecture.

```text
               User Interface (React)
                        │
                        ▼
                Flask REST API Backend
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
  Task Management   SQLite Database   AI Recommendation Engine
                        │
                        ▼
                Intelligent Study Plan
```

---

## Core Components

### Frontend

The frontend is developed using React and provides an interactive interface for managing study activities.

Features include:

- Task dashboard
- Study schedule management
- User interaction
- Dynamic updates

---

### Backend

The backend is implemented using Flask and exposes RESTful APIs for managing application data.

Responsibilities include:

- Task management
- Business logic
- Data persistence
- API communication

---

### AI Recommendation Engine

The recommendation engine analyzes task information and generates intelligent study suggestions based on predefined scheduling logic.

The recommendation module supports:

- Task prioritization
- Study scheduling
- Productivity optimization

---

## Technology Stack

| Category | Technology |
|-----------|------------|
| Frontend | React (Vite) |
| Backend | Flask |
| Programming Language | Python, JavaScript |
| Database | SQLite |
| API | REST |
| Styling | HTML5, CSS3 |
| AI Logic | Rule-Based Recommendation Engine |

---

## Project Structure

```text
ai-study-planner/
│
├── frontend/          # React frontend
├── backend/           # Flask backend
├── agents.md          # AI workflow documentation
├── README.md
├── LICENSE
└── .gitignore
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/thrishikav9-del/ai-study-planner.git

cd ai-study-planner
```

---

### Backend Setup

```bash
cd backend

pip install -r requirements.txt

python app.py
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/tasks` | Create, retrieve, update, and delete study tasks |
| `/ai/suggestions` | Generate intelligent study recommendations |

---

## Workflow

The application follows the workflow below:

1. Create study tasks.
2. Store tasks in the backend database.
3. Analyze task information.
4. Generate intelligent study recommendations.
5. Display optimized schedules through the frontend.

---

## Example Use Case

**Student Input**

```text
Assignment
Priority: High
Deadline: Tomorrow

Quiz
Priority: Medium
Deadline: Three Days
```

↓

**AI Recommendation**

```text
Study Plan

08:00 – 10:00
Assignment

10:30 – 11:30
Quiz Revision

17:00 – 18:00
Practice Problems
```

---

## Applications

- Academic Planning
- Student Productivity
- Personal Task Management
- Intelligent Scheduling
- Educational Technology

---

## Advantages

- Simple and intuitive user interface
- Intelligent study recommendations
- Modular full-stack architecture
- Easy to extend with advanced AI models
- Lightweight and scalable

---

## Future Enhancements

- User authentication
- Calendar integration
- Email and notification reminders
- Machine learning-based recommendation engine
- Cloud deployment
- Mobile application
- Analytics dashboard

---

## Documentation

Additional implementation details and AI workflow documentation are available in:

- `agents.md`

---

## License

This project is licensed under the MIT License.

---

## Disclaimer

This project was developed for educational purposes to demonstrate full-stack web development and AI-assisted study planning. The recommendation engine is intended to support study organization and should not replace individual academic planning.

---

## Author

**Thrishika**

B.Tech Computer Science and Engineering (Artificial Intelligence)

Amrita Vishwa Vidyapeetham
