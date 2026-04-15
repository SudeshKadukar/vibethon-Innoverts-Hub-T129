import { Link } from 'react-router-dom';
import { BrainCircuit, BookOpen, User, Trophy, LogIn, LogOut, Menu } from 'lucide-react';
import { getUser, logout } from '../services/authService';
import './Navbar.css';

export default function Navbar({ toggleSidebar }) {
  const user = getUser();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <nav className="navbar glass">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="mobile-menu-btn" onClick={toggleSidebar}>
          <Menu size={24} color="var(--text)" />
        </button>
        <Link to="/" className="navbar-brand">
          <BrainCircuit className="logo-icon" size={28} />
          <span className="logo-text text-gradient">AIML PlayLab</span>
        </Link>
      </div>
      <div className="navbar-menu">
        <Link to="/learn" className="nav-item">
          <BookOpen size={18} /> <span className="nav-text">Modules</span>
        </Link>
        <Link to="/leaderboard" className="nav-item">
          <Trophy size={18} /> <span className="nav-text">Leaderboard</span>
        </Link>
        {user ? (
          <>
            <Link to="/dashboard" className="nav-item">
              <div className="nav-avatar">{user.name.charAt(0).toUpperCase()}</div>
              <span className="nav-text">{user.name}</span>
            </Link>
            <button className="nav-item nav-btn" onClick={handleLogout}>
              <LogOut size={18} /> <span className="nav-text">Logout</span>
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary">
            <LogIn size={18} /> <span className="nav-text">Sign In</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
