import { Link } from 'react-router-dom';
import { BrainCircuit, BookOpen, User, Trophy, LogIn, LogOut } from 'lucide-react';
import { getUser, logout } from '../services/authService';
import './Navbar.css';

export default function Navbar() {
  const user = getUser();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <nav className="navbar glass">
      <Link to="/" className="navbar-brand">
        <BrainCircuit className="logo-icon" size={28} />
        <span className="logo-text text-gradient">AIML PlayLab</span>
      </Link>
      <div className="navbar-menu">
        <Link to="/learn" className="nav-item"><BookOpen size={18} /> Modules</Link>
        <Link to="/leaderboard" className="nav-item"><Trophy size={18} /> Leaderboard</Link>
        {user ? (
          <>
            <Link to="/dashboard" className="nav-item">
              <div className="nav-avatar">{user.name.charAt(0).toUpperCase()}</div>
              {user.name}
            </Link>
            <button className="nav-item nav-btn" onClick={handleLogout}><LogOut size={18} /> Logout</button>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
            <LogIn size={18} /> Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
