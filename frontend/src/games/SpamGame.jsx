import { useState } from 'react';
import Card from '../components/Card';
import { ShieldCheck, ShieldAlert, Check, X } from 'lucide-react';

const emails = [
  { id: 1, text: "Congratulations! You've won a $1000 Gift Card. Click here to claim!", isSpam: true },
  { id: 2, text: "Hey, are we still meeting for coffee at 3 PM today?", isSpam: false },
  { id: 3, text: "URGENT: Your account has been compromised. Log in immediately to verify.", isSpam: true },
  { id: 4, text: "Don't forget to submit the monthly report by EOD.", isSpam: false },
];

export default function SpamGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(null);

  const handleChoice = (choice) => {
    const isCorrect = choice === emails[currentIndex].isSpam;
    if (isCorrect) setScore(s => s + 10);
    setShowResult(isCorrect ? 'correct' : 'wrong');
    
    setTimeout(() => {
      setShowResult(null);
      if (currentIndex < emails.length - 1) {
        setCurrentIndex(i => i + 1);
      } else {
        alert(`Game Over! Your score: ${score + (isCorrect ? 10 : 0)}`);
        setCurrentIndex(0);
        setScore(0);
      }
    }, 1000);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 className="text-gradient">Spam or Ham?</h1>
        <p>Help the AI classifier identify spam emails!</p>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem' }}>Score: {score}</div>
      </header>

      <Card>
        <div style={{ padding: '2rem', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', marginBottom: '2rem', border: '1px solid var(--border)' }}>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', textAlign: 'center' }}>"{emails[currentIndex].text}"</p>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            className="btn btn-primary" 
            style={{ flex: 1, backgroundColor: 'var(--danger)' }}
            onClick={() => handleChoice(true)}
            disabled={showResult !== null}
          >
            <ShieldAlert size={20} /> Spam
          </button>
          <button 
            className="btn btn-primary" 
            style={{ flex: 1, backgroundColor: 'var(--success)' }}
            onClick={() => handleChoice(false)}
            disabled={showResult !== null}
          >
            <ShieldCheck size={20} /> Not Spam
          </button>
        </div>

        {showResult && (
          <div style={{ 
            marginTop: '1.5rem', 
            textAlign: 'center', 
            color: showResult === 'correct' ? 'var(--success)' : 'var(--danger)',
            fontSize: '1.2rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            {showResult === 'correct' ? <Check /> : <X />}
            {showResult === 'correct' ? 'Correct!' : 'Incorrect!'}
          </div>
        )}
      </Card>
    </div>
  );
}
