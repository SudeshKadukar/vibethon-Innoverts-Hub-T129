export default function Card({ title, description, children, icon: Icon, className = '' }) {
  return (
    <div className={`glass-card ${className}`} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
      {Icon && <div className="card-icon" style={{ marginBottom: '1rem', color: 'var(--primary)' }}><Icon size={32} /></div>}
      {title && <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text)' }}>{title}</h3>}
      {description && <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>{description}</p>}
      <div className="card-content" style={{ marginTop: 'auto' }}>
        {children}
      </div>
    </div>
  );
}
