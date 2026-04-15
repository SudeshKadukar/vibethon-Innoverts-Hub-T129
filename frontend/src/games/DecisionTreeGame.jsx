import { useState } from 'react';
import Card from '../components/Card';
import { Network, ArrowRightCircle } from 'lucide-react';

export default function DecisionTreeGame() {
  const [currentNode, setCurrentNode] = useState(0);
  const [score, setScore] = useState(0);

  const treeData = [
    { 
      question: "Is the weather sunny?", 
      yesId: 1, 
      noId: 2, 
      desc: "Root Node: Analyze the primary condition."
    },
    { 
      question: "Is the humidity > 70%?", 
      yesId: 'result-no-play', 
      noId: 'result-play', 
      desc: "Branch: High humidity makes it uncomfortable."
    },
    { 
      question: "Is it raining strongly?", 
      yesId: 'result-no-play', 
      noId: 'result-play', 
      desc: "Branch: Light rain might be acceptable."
    }
  ];

  const handleDecision = (nodeId) => {
    if (typeof nodeId === 'string') {
      alert(nodeId === 'result-play' ? 'Final Decision: Play Outside!' : 'Final Decision: Stay Inside!');
      setCurrentNode(0);
      setScore(s => s + 5);
    } else {
      setCurrentNode(nodeId);
      setScore(s => s + 2);
    }
  };

  const currentLevel = treeData[currentNode];

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', textAlign: 'center' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 className="text-gradient">Decision Tree Builder</h1>
        <p>Navigate the nodes to reach a conclusion classification.</p>
        <div style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>Points: {score}</div>
      </header>

      <Card icon={Network} title={`Node ID: ${currentNode}`} description={currentLevel?.desc}>
        <div style={{ padding: '2rem 0', fontSize: '1.25rem', fontWeight: '500' }}>
          {currentLevel ? currentLevel.question : "End of tree reached."}
        </div>

        {currentLevel && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
            <button 
              className="btn btn-primary" 
              onClick={() => handleDecision(currentLevel.yesId)}
              style={{ padding: '0.75rem 2.5rem' }}
            >
              Yes <ArrowRightCircle size={18} />
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => handleDecision(currentLevel.noId)}
              style={{ padding: '0.75rem 2.5rem' }}
            >
              No <ArrowRightCircle size={18} />
            </button>
          </div>
        )}
      </Card>
    </div>
  );
}
