import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { Gamepad2, ShieldAlert, Network, Tag } from 'lucide-react';

const gamesList = [
  { 
    id: 'spam', title: 'Spam or Ham?', path: '/games/spam',
    description: 'Train a spam classifier by labeling emails as spam or legitimate.',
    difficulty: 'Beginner', icon: ShieldAlert, color: 'var(--danger)'
  },
  { 
    id: 'tree', title: 'Decision Tree Builder', path: '/games/tree',
    description: 'Navigate nodes of a decision tree to reach correct classifications.',
    difficulty: 'Intermediate', icon: Network, color: 'var(--warning)'
  },
  { 
    id: 'classify', title: 'Image Classifier', path: '/games/classify',
    description: 'Act as a CNN and classify images into the correct categories.',
    difficulty: 'Advanced', icon: Tag, color: 'var(--secondary)'
  }
];

export default function Game() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          <Gamepad2 size={32} style={{ verticalAlign: 'middle', marginRight: '0.75rem', color: 'var(--secondary)' }} />
          Mini Games
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Learn AI/ML concepts through interactive games.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {gamesList.map(game => (
          <Card key={game.id} title={game.title} description={game.description} icon={game.icon}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
              <Badge text={game.difficulty} color={game.color} />
              <Link to={game.path} className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
                Play Now
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
