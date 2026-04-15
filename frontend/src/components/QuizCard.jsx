import { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import Card from './Card';

export default function QuizCard({ question, options, correctIndex, explanation, onNext }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (index) => {
    if (revealed) return;
    setSelected(index);
    setRevealed(true);
  };

  const isCorrect = selected === correctIndex;

  const handleNext = () => {
    setSelected(null);
    setRevealed(false);
    onNext(isCorrect);
  };

  return (
    <Card>
      <h3 style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text)' }}>
        {question}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {options.map((opt, i) => {
          let bg = 'var(--surface)';
          let border = 'var(--border)';
          let color = 'var(--text)';

          if (revealed && i === correctIndex) {
            bg = 'rgba(16,185,129,0.15)';
            border = 'var(--success)';
            color = 'var(--success)';
          } else if (revealed && i === selected && !isCorrect) {
            bg = 'rgba(239,68,68,0.15)';
            border = 'var(--danger)';
            color = 'var(--danger)';
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.875rem 1rem', borderRadius: '8px',
                background: bg, border: `1.5px solid ${border}`,
                color, cursor: revealed ? 'default' : 'pointer',
                textAlign: 'left', fontFamily: 'Inter, sans-serif',
                fontSize: '0.95rem', transition: 'all 0.2s', width: '100%'
              }}
            >
              <span style={{
                width: '28px', height: '28px', borderRadius: '50%',
                border: `1.5px solid ${border}`, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8rem', fontWeight: '700', flexShrink: 0,
                background: revealed && i === correctIndex ? 'var(--success)' :
                  revealed && i === selected && !isCorrect ? 'var(--danger)' : 'transparent',
                color: revealed && (i === correctIndex || (i === selected && !isCorrect)) ? 'white' : 'inherit'
              }}>
                {['A', 'B', 'C', 'D'][i]}
              </span>
              <span style={{ flex: 1 }}>{opt}</span>
              {revealed && i === correctIndex && <CheckCircle size={18} color="var(--success)" />}
              {revealed && i === selected && !isCorrect && <XCircle size={18} color="var(--danger)" />}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div style={{
          marginTop: '1.25rem', padding: '1rem', borderRadius: '8px',
          background: isCorrect ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
          border: `1px solid ${isCorrect ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`
        }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
            <strong style={{ color: 'var(--text)' }}>{isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong>{' '}
            {explanation}
          </p>
        </div>
      )}

      {revealed && (
        <button className="btn btn-primary" style={{ marginTop: '1.25rem', width: '100%' }}
          onClick={handleNext}>
          Next Question <ArrowRight size={18} />
        </button>
      )}
    </Card>
  );
}
