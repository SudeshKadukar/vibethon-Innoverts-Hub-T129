import { useState } from 'react';
import Card from '../components/Card';
import { Play, RotateCcw, AlertCircle } from 'lucide-react';

export default function Playground() {
  const [code, setCode] = useState('// Write a simple array filter to find even numbers\nconst numbers = [1, 2, 3, 4, 5, 6];\n\nconst evens = numbers.filter(n => n % 2 === 0);\nreturn evens;');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  const runCode = () => {
    setError(null);
    setOutput('');
    try {
      // DANGEROUS IN PROD: using new Function for demo sandbox purposes
      const execute = new Function(code);
      const result = execute();
      setOutput(JSON.stringify(result, null, 2));
    } catch (err) {
      setError(err.toString());
    }
  };

  const resetCode = () => {
    setCode('// Write a simple array filter to find even numbers\nconst numbers = [1, 2, 3, 4, 5, 6];\n\nconst evens = numbers.filter(n => n % 2 === 0);\nreturn evens;');
    setOutput('');
    setError(null);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 150px)' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem' }}>Code Playground</h1>
        <p style={{ color: 'var(--text-muted)' }}>Test your JavaScript logic skills right in the browser.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1 }}>
        <Card title="Editor" style={{ display: 'flex', flexDirection: 'column' }}>
          <textarea 
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{ 
              width: '100%', 
              height: '300px', 
              backgroundColor: '#1E1E1E', 
              color: '#D4D4D4',
              fontFamily: 'monospace',
              padding: '1rem',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              resize: 'none',
              marginBottom: '1rem'
            }}
            spellCheck="false"
          />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-primary" onClick={runCode}>
              <Play size={18} fill="currentColor" /> Run Code
            </button>
            <button className="btn btn-secondary" onClick={resetCode}>
              <RotateCcw size={18} /> Reset
            </button>
          </div>
        </Card>

        <Card title="Output">
          <div style={{ 
            width: '100%', 
            height: '300px', 
            backgroundColor: '#000', 
            borderRadius: '8px',
            padding: '1rem',
            overflowY: 'auto',
            border: '1px solid var(--border)'
          }}>
            {error ? (
              <div style={{ color: 'var(--danger)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <AlertCircle size={20} style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>{error}</span>
              </div>
            ) : (
              <pre style={{ color: 'var(--success)', margin: 0 }}>{output ? `> ${output}` : '> Waiting for execution...'}</pre>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
