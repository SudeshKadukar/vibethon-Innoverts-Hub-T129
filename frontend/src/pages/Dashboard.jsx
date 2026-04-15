import ProgressBar from '../components/ProgressBar';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { Award, TrendingUp, Clock, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Time Spent', value: '12h 45m', icon: Clock, color: 'var(--primary)' },
    { label: 'Completion', value: '38%', icon: TrendingUp, color: 'var(--success)' },
    { label: 'Achievements', value: '7', icon: Award, color: 'var(--warning)' },
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Welcome back, Explorer!</h1>
          <p style={{ color: 'var(--text-muted)' }}>Here's what you've been up to lately.</p>
        </div>
        <Badge text="Pro Member" color="var(--secondary)" />
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', 
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {stats.map((stat, i) => (
          <div key={i} className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: `color-mix(in srgb, ${stat.color} 15%, transparent)`,
              color: stat.color
            }}>
              <stat.icon size={24} />
            </div>
            <div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{stat.label}</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700' }}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <Card title="Continue Learning" description="Your active modules">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: '500' }}>Supervised Learning</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>45%</span>
              </div>
              <ProgressBar progress={45} color="var(--primary)" />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: '500' }}>Neural Networks</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>10%</span>
              </div>
              <ProgressBar progress={10} color="var(--secondary)" />
            </div>
          </div>
        </Card>

        <Card title="Achievements" description="Recent badges">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="glass" style={{ width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 0.5rem', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: 'var(--warning)' }}>
                <Award size={30} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '600' }}>Quick Learner</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="glass" style={{ width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 0.5rem', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: 'var(--success)' }}>
                <CheckCircle size={30} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '600' }}>First Module</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
