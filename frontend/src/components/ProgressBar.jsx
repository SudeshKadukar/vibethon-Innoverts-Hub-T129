export default function ProgressBar({ progress, label, color = 'var(--success)' }) {
  return (
    <div className="progress-container" style={{ width: '100%' }}>
      {label && <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
        <span style={{ color: 'var(--text-muted)' }}>{label}</span>
        <span style={{ fontWeight: '600' }}>{Math.round(progress)}%</span>
      </div>}
      <div style={{ height: '8px', background: 'var(--surface)', borderRadius: '999px', overflow: 'hidden' }}>
        <div 
          style={{ 
            height: '100%', 
            width: `${Math.max(0, Math.min(100, progress))}%`, 
            background: color,
            transition: 'width 0.5s ease-out',
            boxShadow: `0 0 10px ${color}`
          }} 
        />
      </div>
    </div>
  );
}
