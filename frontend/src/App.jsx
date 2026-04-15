import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="app-container">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="main-layout">
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}
        <main className="content animate-fade-in">
          <AppRoutes />
        </main>
      </div>
    </div>
  )
}

export default App
