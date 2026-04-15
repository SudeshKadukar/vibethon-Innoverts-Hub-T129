import { useState } from 'react';
import { quizData } from '../data/quizData';
import QuizCard from '../components/QuizCard';
import ProgressBar from '../components/ProgressBar';
import Badge from '../components/Badge';
import { Brain, RotateCcw, Trophy } from 'lucide-react';

const levelColors = {
  Basic: 'var(--success)',
  Moderate: 'var(--warning)',
  Advanced: 'var(--danger)',
  Expert: '#a855f7'
};

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = (wasCorrect) => {
    if (wasCorrect) setCorrectCount(c => c + 1);
    if (currentQ < quizData.length - 1) {
      setCurrentQ(i => i + 1);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setCorrectCount(0);
    setFinished(false);
  };

  const percentage = Math.round((correctCount / quizData.length) * 100);
  const grade =
    percentage >= 90 ? '🏆 Expert!' :
    percentage >= 70 ? '🥇 Great!' :
    percentage >= 50 ? '🥈 Good!' :
    '📚 Keep Practicing!';

  if (finished) {
    return (
      <div style={{ maxWidth: '550px', margin: '3rem auto', textAlign: 'center' }}>
        <div className="glass-card" style={{ padding: '3rem' }}>
          <Trophy size={64} color="var(--warning)" style={{ marginBottom: '1.5rem' }} />
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Quiz Complete!</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            You answered {correctCount} out of {quizData.length} correctly.
          </p>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem', fontWeight: '800' }}>{percentage}%</div>
          <div style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{grade}</div>
          <ProgressBar progress={percentage} color={percentage >= 70 ? 'var(--success)' : 'var(--warning)'} />
          <button className="btn btn-primary" onClick={restart} style={{ marginTop: '2rem', width: '100%' }}>
            <RotateCcw size={18} /> Try Again
          </button>
        </div>
      </div>
    );
  }

  const q = quizData[currentQ];

  return (
    <div style={{ maxWidth: '750px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h1 style={{ fontSize: '2rem' }}>🧠 AI/ML Quiz</h1>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Badge text={q.level} color={levelColors[q.level] || 'var(--primary)'} />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              {currentQ + 1} / {quizData.length}
            </span>
          </div>
        </div>
        <ProgressBar progress={((currentQ) / quizData.length) * 100} />
      </header>

      <QuizCard
        key={q.id}
        question={q.question}
        options={q.options}
        correctIndex={q.correctIndex}
        explanation={q.explanation}
        onNext={handleNext}
      />
    </div>
  );
}
