import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import { Play, Brain, Target, Cpu, Eye } from 'lucide-react';

const iconMap = {
  Brain: Brain,
  Target: Target,
  Cpu: Cpu,
  Eye: Eye
};

export default function Learn() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/modules')
      .then(res => res.json())
      .then(data => {
        setModules(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch modules:', err);
        setLoading(false);
      });
  }, []);
  if (loading) return <div style={{ textAlign: 'center', padding: '5rem' }}>Loading Modules...</div>;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Learning Modules</h1>
        <p style={{ color: 'var(--text-muted)' }}>Select a module to start your AI adventure.</p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
        gap: '2rem' 
      }}>
        {modules.map(module => (
          <Card 
            key={module.id}
            title={module.title}
            description={module.description}
            icon={iconMap[module.icon]}
          >
            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Badge text={module.difficulty} color={module.difficulty === 'Beginner' ? 'var(--success)' : module.difficulty === 'Intermediate' ? 'var(--warning)' : 'var(--danger)'} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Module 1</span>
              </div>
              
              <ProgressBar progress={module.progress} label="Progress" />
              
              <button 
                className={`btn ${module.progress === 100 ? 'btn-secondary' : 'btn-primary'}`} 
                style={{ width: '100%', marginTop: '1.5rem' }}
              >
                {module.progress === 100 ? 'Review' : module.progress > 0 ? 'Continue' : 'Start Learning'}
                <Play size={16} fill="currentColor" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
