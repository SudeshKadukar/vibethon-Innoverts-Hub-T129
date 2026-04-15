import { useState } from 'react';
import { quizData } from '../data/quizData';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

export default function QuizCard({ question, options, correctIndex, explanation, onNext }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (index) => {
    if (revealed) return;
    setSelected(index);
    setRevealed(true);
  };

  const isCorrect = selected === correctIndex;

  return (
    <Card>
      <h3 style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>{question}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {options.map((opt, i) => {
          let bg = 'var(--surface)';
          let border = 'var(--border)';
          if (revealed && i === correctIndex) { bg = 'rgba(16,185,129,0.15)'; border = 'var(--success)'; }
          else if (revealed && i === selected && !isCorrect) { bg = 'rgba(239,68,68,0.15)'; border = 'var(--danger)'; }

          return (
            <button key={i} onClick={() => handleSelect(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.875rem 1rem', borderRadius: '8px',
                background: bg, border: `1px solid ${border}`,
                color: 'var(--text)', cursor: revealed ? 'default' : 'pointer',
                textAlign: 'left', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
                transition: 'all 0.2s'
              }}
            >
              {revealed && i === correctIndex && <CheckCircle size={18} color="var(--success)" />}
              {revealed && i === selected && !isCorrect && i !== correctIndex && <XCircle size={18} color="var(--danger)" />}
              {opt}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '8px', background: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.2)' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text)' }}>{isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong>{' '}
            {explanation}
          </p>
        </div>
      )}

      {revealed && (
        <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}
          onClick={() => { setSelected(null); setRevealed(false); onNext(); }}>
          Next Question <ArrowRight size={18} />
        </button>
      )}
    </Card>
  );
}
