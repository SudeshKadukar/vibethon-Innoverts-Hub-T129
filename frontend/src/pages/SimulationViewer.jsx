import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft, Play, RotateCcw, Activity, Terminal, FlaskConical } from 'lucide-react';
import { simulationData } from '../data/simulationData';

export default function SimulationViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  
  const sim = simulationData.find(s => s.id === id);

  useEffect(() => {
    if (!sim) {
      navigate('/simulation');
    }
  }, [sim, navigate]);

  if (!sim) return null;

  const handleRun = () => {
    setIsRunning(true);
    setLogs([`Initializing ${sim.title} environment...`, 'Loading dataset...', 'Compiling model geometry...']);
    
    // Mock simulation progress
    setTimeout(() => setLogs(l => [...l, 'Dataset loaded (10,432 records).']), 800);
    setTimeout(() => setLogs(l => [...l, 'Training model parameters...']), 1500);
    setTimeout(() => setLogs(l => [...l, 'Epoch 1/5 - Loss: 0.8432']), 2200);
    setTimeout(() => setLogs(l => [...l, 'Epoch 5/5 - Loss: 0.1104']), 3500);
    setTimeout(() => {
      setLogs(l => [...l, 'Simulation complete! Accuracy metric achieved: 94.2%']);
      setIsRunning(false);
    }, 4500);
  };

  const handleReset = () => {
    setLogs([]);
    setIsRunning(false);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '2rem' }}>
      <button 
        className="btn" 
        onClick={() => navigate('/simulation')}
        style={{ background: 'transparent', padding: 0, marginBottom: '2rem', color: 'var(--text-muted)' }}
      >
        <ArrowLeft size={20} /> Back to Simulations
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>
        
        {/* Sidebar Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: '800' }}>{sim.title}</h1>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>{sim.description}</p>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', background: 'rgba(79,70,229,0.15)', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600' }}>{sim.category}</span>
              <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', background: 'var(--surface-light)', fontSize: '0.85rem' }}>{sim.difficulty}</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-primary" onClick={handleRun} disabled={isRunning} style={{ flex: 1 }}>
                {isRunning ? <Activity size={18} className="animate-pulse" /> : <Play size={18} fill="currentColor" />}
                {isRunning ? 'Running...' : 'Run Simulation'}
              </button>
              <button className="btn btn-secondary" onClick={handleReset} disabled={isRunning}>
                <RotateCcw size={18} />
              </button>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Terminal size={18} color="var(--primary)" /> Execution Logs
            </h3>
            <div style={{ 
              background: '#090a0f', 
              borderRadius: '8px', 
              padding: '1rem', 
              height: '300px', 
              overflowY: 'auto',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              color: '#34d399',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              {logs.length === 0 ? (
                <span style={{ color: 'var(--text-muted)' }}>Waiting to start...</span>
              ) : (
                logs.map((log, i) => (
                  <div key={i} style={{ marginBottom: '0.5rem', opacity: 0.8 }}>
                    <span style={{ color: '#60a5fa' }}>[{new Date().toLocaleTimeString()}]</span> {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Main Vis Window */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', minHeight: '600px' }}>
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>Live Visualization</h3>
          </div>
          
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Visualizer Background grid */}
            <div style={{ 
              position: 'absolute', inset: 0, opacity: 0.05,
              backgroundImage: 'linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />
            
            {isRunning ? (
              <div style={{ textAlign: 'center', zIndex: 1 }}>
                <Activity size={64} color="var(--primary)" style={{ animation: 'bounce 2s infinite' }} />
                <h3 style={{ marginTop: '1rem', color: 'var(--primary)' }}>Computing Vectors...</h3>
              </div>
            ) : logs.length > 0 ? (
              <div style={{ textAlign: 'center', zIndex: 1, animation: 'fadeIn 0.5s ease-out' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '4px solid var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--success)' }}>94%</span>
                </div>
                <h3>Simulation Passed</h3>
                <p style={{ color: 'var(--text-muted)' }}>Model generalized successfully on test suite.</p>
              </div>
            ) : (
              <div style={{ textAlign: 'center', zIndex: 1, color: 'var(--text-muted)' }}>
                <FlaskConical size={48} style={{ opacity: 0.5, marginBottom: '1rem' }} />
                <h3>Ready to Simulate</h3>
                <p>Click "Run Simulation" to execute the model pipeline.</p>
              </div>
            )}
            
            <style>{`
              @keyframes bounce {
                0%, 100% { transform: translateY(-10px); }
                50% { transform: translateY(10px); }
              }
            `}</style>
          </div>
        </div>

      </div>
    </div>
  );
}
