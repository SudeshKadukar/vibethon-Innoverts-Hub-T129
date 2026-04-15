# 🧠 AIML-PlayLab

> **Master AI & ML Through Play** — An interactive, gamified learning platform for Artificial Intelligence and Machine Learning.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📚 **Learning Modules** | Structured lessons from beginner to advanced AI/ML topics |
| 💻 **Code Playground** | Write, test, and run JavaScript logic directly in the browser |
| 🎮 **Mini Games** | Spam Classifier, Decision Tree Builder, Image Classifier |
| ❓ **Quizzes** | Test your knowledge with instant feedback and explanations |
| 🧪 **Real-World Simulations** | Spam filters, house price predictors, self-driving car logic |
| 📊 **Dashboard** | Track your learning progress, achievements, and stats |
| 🏆 **Leaderboard** | Compete with learners worldwide |
| 🔐 **Authentication** | Login/Register with localStorage-based session simulation |

---

## 🗂 Project Structure

```
AIML-PlayLab/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/    # Navbar, Sidebar, Card, Badge, ProgressBar, QuizCard
│   │   ├── pages/         # Home, Learn, Dashboard, Playground, Quiz, Game, Simulation, Leaderboard, Login, Register
│   │   ├── games/         # SpamGame, DecisionTreeGame, ClassificationGame
│   │   ├── data/          # modulesData, quizData, gameData, simulationData
│   │   ├── services/      # authService, storageService, leaderboardService
│   │   ├── utils/         # helpers, scoring
│   │   └── routes/        # AppRoutes
│   └── package.json
├── backend/           # Express.js API server (optional)
│   ├── server.js
│   ├── routes/
│   └── models/
├── README.md
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+ and **npm**

### Frontend
```bash
cd frontend
npm install
npm run dev
```
The app will be available at `http://localhost:5173/`

### Backend (Optional)
```bash
cd backend
npm install
node server.js
```
The API will be available at `http://localhost:5000/`

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, React Router, Lucide Icons |
| Styling | Vanilla CSS with Glassmorphism design system |
| Backend | Node.js, Express.js, CORS |
| Storage | localStorage (client-side persistence) |

---

## 📸 Pages Overview

- **Home** — Hero landing with feature highlights and call-to-action
- **Learn** — Module cards with progress tracking and difficulty badges
- **Playground** — Split-pane code editor with live output console
- **Quiz** — Multi-choice questions with reveal explanations
- **Games** — Hub linking to Spam Classifier, Decision Tree, Image Classifier
- **Simulations** — Real-world AI scenario cards
- **Dashboard** — Stats overview, active modules, achievement badges
- **Leaderboard** — Ranked table with avatars, scores, and level badges

---

## 📄 License

This project is for educational purposes.
