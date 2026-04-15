export default function Badge({ text, color = 'var(--primary)' }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '600',
      backgroundColor: `color-mix(in srgb, ${color} 20%, transparent)`,
      color: color,
      border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`
    }}>
      {text}
    </span>
  );
}
