import './App.css'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <main className="content animate-fade-in">
          <AppRoutes />
        </main>
      </div>
    </div>
  )
}

export default App
