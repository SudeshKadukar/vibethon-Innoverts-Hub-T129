import { useState } from 'react';
import Card from '../components/Card';
import { Tag, Sparkles, AlertCircle } from 'lucide-react';

const images = [
  { id: 1, type: 'cat', url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80', desc: 'Furry creature with whiskers' },
  { id: 2, type: 'dog', url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=80', desc: 'Loyal companion, floppy ears' },
  { id: 3, type: 'bird', url: 'https://images.unsplash.com/photo-1444464666168-e0d16ed37322?w=400&q=80', desc: 'Feathered aviator' }
];

export default function ClassificationGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleClassify = (predictedType) => {
    const actualType = images[currentIndex].type;
    if (predictedType === actualType) {
      alert('Correct Classification!');
      setScore(s => s + 15);
    } else {
      alert(`Wrong! It was a ${actualType}. Neural network needs retraining...`);
    }

    if (currentIndex < images.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      alert(`Simulation Complete. Final Score: ${score + (predictedType === actualType ? 15 : 0)}`);
      setCurrentIndex(0);
      setScore(0);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 className="text-gradient">Image Classifier Sandbox</h1>
        <p>Act as a Convolutional Neural Network (CNN) and tag these images.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
          <div className="badge glass" style={{ fontSize: '1.2rem', color: 'var(--success)' }}>
            <Sparkles size={18} /> Model Accuracy Score: {score}
          </div>
        </div>
      </header>

      <Card>
        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src={images[currentIndex].url} 
            alt="To classify" 
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              height: '300px', 
              objectFit: 'cover', 
              borderRadius: '8px',
              border: '2px dashed var(--border)',
              marginBottom: '2rem'
            }} 
          />

          <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Select Predicted Label:</h3>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['cat', 'dog', 'bird', 'car'].map(label => (
              <button 
                key={label}
                className="btn btn-secondary" 
                onClick={() => handleClassify(label)}
                style={{ textTransform: 'capitalize', padding: '0.75rem 2rem' }}
              >
                <Tag size={16} /> {label}
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
