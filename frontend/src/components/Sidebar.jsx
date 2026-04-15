import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Gamepad2, GraduationCap, Cpu, HelpCircle, FlaskConical, Trophy } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ isOpen, closeSidebar }) {
  const location = useLocation();
  const menuItems = [
    { path: '/learn', label: 'Learning Paths', icon: <GraduationCap size={20} /> },
    { path: '/playground', label: 'Code Playground', icon: <Cpu size={20} /> },
    { path: '/quiz', label: 'Quiz', icon: <HelpCircle size={20} /> },
    { path: '/games', label: 'Mini Games', icon: <Gamepad2 size={20} /> },
    { path: '/simulation', label: 'Simulations', icon: <FlaskConical size={20} /> },
    { path: '/leaderboard', label: 'Leaderboard', icon: <Trophy size={20} /> },
    { path: '/dashboard', label: 'My Progress', icon: <LayoutDashboard size={20} /> },
  ];

  return (
    <aside className={`sidebar glass ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-nav">
        {menuItems.map(item => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`sidebar-link ${location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
