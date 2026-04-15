import { useState } from 'react';
import { quizData } from '../data/quizData';
import QuizCard from '../components/QuizCard';
import ProgressBar from '../components/ProgressBar';
import { Brain, RotateCcw } from 'lucide-react';

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (currentQ < quizData.length - 1) {
      setCurrentQ(i => i + 1);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div style={{ maxWidth: '600px', margin: '3rem auto', textAlign: 'center' }}>
        <div className="glass-card" style={{ padding: '3rem' }}>
          <Brain size={60} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Quiz Complete!</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>You answered all {quizData.length} questions.</p>
          <button className="btn btn-primary" onClick={restart}>
            <RotateCcw size={18} /> Try Again
          </button>
        </div>
      </div>
    );
  }

  const q = quizData[currentQ];

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>AI/ML Knowledge Quiz</h1>
        <ProgressBar progress={((currentQ) / quizData.length) * 100} label={`Question ${currentQ + 1} of ${quizData.length}`} />
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
