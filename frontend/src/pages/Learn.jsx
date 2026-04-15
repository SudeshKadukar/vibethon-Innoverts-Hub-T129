import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import { Play, Brain, Target, Cpu, Eye } from 'lucide-react';
import { modules as localModules } from '../data/modulesData';

const iconMap = {
  Brain: Brain,
  Target: Target,
  Cpu: Cpu,
  Eye: Eye
};

export default function Learn() {
  const [modules, setModules] = useState(localModules);

  useEffect(() => {
    fetch('http://localhost:5000/api/modules')
      .then(res => {
        if (!res.ok) throw new Error('Server error');
        return res.json();
      })
      .then(data => setModules(data))
      .catch(() => {
        // Backend offline — using local data already set
      });
  }, []);

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📚 Learning Paths</h1>
        <p style={{ color: 'var(--text-muted)' }}>Select a module to begin your AI/ML journey.</p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        gap: '1.5rem',
      }}>
        {modules.map(module => {
          const IconComponent = iconMap[module.icon] || Brain;
          const difficultyColor =
            module.difficulty === 'Beginner' ? 'var(--success)' :
            module.difficulty === 'Intermediate' ? 'var(--warning)' :
            'var(--danger)';

          return (
            <div key={module.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'rgba(79,70,229,0.15)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0
                }}>
                  <IconComponent size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{module.title}</h3>
                  <Badge text={module.difficulty} color={difficultyColor} />
                </div>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                {module.description}
              </p>

              {/* Progress */}
              <ProgressBar progress={module.progress} label={`Progress: ${module.progress}%`} />

              {/* CTA Button */}
              <button
                className={`btn ${module.progress === 100 ? 'btn-secondary' : 'btn-primary'}`}
                style={{ width: '100%', marginTop: 'auto' }}
              >
                {module.progress === 100 ? '✅ Review' : module.progress > 0 ? '▶ Continue' : '🚀 Start Learning'}
                <Play size={14} fill="currentColor" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
