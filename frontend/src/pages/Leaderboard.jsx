import { Trophy, Medal, Crown, TrendingUp } from 'lucide-react';
import Badge from '../components/Badge';

const leaderboardData = [
  { rank: 1, name: 'Priya Sharma', score: 2850, level: 'Master', avatar: '🧠' },
  { rank: 2, name: 'Arjun Patel', score: 2670, level: 'Expert', avatar: '🤖' },
  { rank: 3, name: 'Sarah Chen', score: 2540, level: 'Expert', avatar: '🚀' },
  { rank: 4, name: 'Omar Hassan', score: 2310, level: 'Advanced', avatar: '💡' },
  { rank: 5, name: 'Emily Davis', score: 2180, level: 'Advanced', avatar: '⚡' },
  { rank: 6, name: 'You', score: 1450, level: 'Intermediate', avatar: '🎯' },
  { rank: 7, name: 'Alex Kim', score: 1320, level: 'Intermediate', avatar: '🧬' },
  { rank: 8, name: 'Lisa Wang', score: 1100, level: 'Beginner', avatar: '🌱' },
];

const rankIcons = {
  1: <Crown size={20} color="#FFD700" />,
  2: <Medal size={20} color="#C0C0C0" />,
  3: <Medal size={20} color="#CD7F32" />,
};

export default function Leaderboard() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          <Trophy size={32} style={{ verticalAlign: 'middle', color: 'var(--warning)', marginRight: '0.75rem' }} />
          Global Leaderboard
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Compete with learners worldwide and climb the ranks.</p>
      </header>

      <div className="glass-card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '1rem 1.5rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '500', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Rank</th>
              <th style={{ padding: '1rem 1.5rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '500', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Player</th>
              <th style={{ padding: '1rem 1.5rem', textAlign: 'right', color: 'var(--text-muted)', fontWeight: '500', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Score</th>
              <th style={{ padding: '1rem 1.5rem', textAlign: 'right', color: 'var(--text-muted)', fontWeight: '500', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Level</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player) => (
              <tr 
                key={player.rank}
                style={{ 
                  borderBottom: '1px solid var(--border)',
                  backgroundColor: player.name === 'You' ? 'rgba(79, 70, 229, 0.1)' : 'transparent',
                  transition: 'background 0.2s'
                }}
              >
                <td style={{ padding: '1rem 1.5rem', fontWeight: '700' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {rankIcons[player.rank] || <span style={{ color: 'var(--text-muted)' }}>#{player.rank}</span>}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{player.avatar}</span>
                    <span style={{ fontWeight: player.name === 'You' ? '700' : '500', color: player.name === 'You' ? 'var(--primary)' : 'var(--text)' }}>{player.name}</span>
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem', fontWeight: '600' }}>
                    <TrendingUp size={16} color="var(--success)" />
                    {player.score.toLocaleString()}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <Badge 
                    text={player.level} 
                    color={
                      player.level === 'Master' ? '#FFD700' :
                      player.level === 'Expert' ? 'var(--secondary)' :
                      player.level === 'Advanced' ? 'var(--primary)' :
                      player.level === 'Intermediate' ? 'var(--success)' : 'var(--text-muted)'
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
