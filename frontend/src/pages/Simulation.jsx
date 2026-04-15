import { simulationData } from '../data/simulationData';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { FlaskConical, Play } from 'lucide-react';

export default function Simulation() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          <FlaskConical size={32} style={{ verticalAlign: 'middle', marginRight: '0.75rem', color: 'var(--success)' }} />
          Real-World Simulations
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Apply your knowledge to real-world AI/ML scenarios.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
        {simulationData.map(sim => (
          <Card key={sim.id} title={sim.title} description={sim.description}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Badge text={sim.category} color="var(--primary)" />
                <Badge 
                  text={sim.difficulty} 
                  color={sim.difficulty === 'Beginner' ? 'var(--success)' : sim.difficulty === 'Intermediate' ? 'var(--warning)' : 'var(--danger)'} 
                />
              </div>
              <button className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
                <Play size={16} fill="currentColor" /> Launch
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
