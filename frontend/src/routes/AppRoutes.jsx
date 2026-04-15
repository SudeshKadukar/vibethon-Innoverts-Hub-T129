import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Learn from '../pages/Learn'
import Dashboard from '../pages/Dashboard'
import Playground from '../pages/Playground'
import Leaderboard from '../pages/Leaderboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Quiz from '../pages/Quiz'
import Game from '../pages/Game'
import Simulation from '../pages/Simulation'
import SpamGame from '../games/SpamGame'
import DecisionTreeGame from '../games/DecisionTreeGame'
import ClassificationGame from '../games/ClassificationGame'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/games" element={<Game />} />
      <Route path="/simulation" element={<Simulation />} />
      <Route path="/games/spam" element={<SpamGame />} />
      <Route path="/games/tree" element={<DecisionTreeGame />} />
      <Route path="/games/classify" element={<ClassificationGame />} />
    </Routes>
  )
}
