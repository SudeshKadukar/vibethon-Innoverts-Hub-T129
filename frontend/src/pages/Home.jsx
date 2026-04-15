import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="home-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <section className="hero" style={{ 
        padding: '4rem 0', 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div className="badge glass" style={{ 
          padding: '0.5rem 1rem', 
          borderRadius: '20px', 
          fontSize: '0.9rem', 
          color: 'var(--primary)',
          marginBottom: '2rem',
          fontWeight: '600'
        }}>
          ✨ The Future of Learning is Here
        </div>
        <h1 className="text-gradient" style={{ 
          fontSize: '4rem', 
          fontWeight: '800', 
          lineHeight: '1.1',
          marginBottom: '1.5rem'
        }}>
          Master AI & ML <br /> Through Play.
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-muted)', 
          maxWidth: '600px', 
          marginBottom: '3rem' 
        }}>
          Interactive simulations, gamified coding, and real-world AI challenges. 
          Start your journey from zero to AI hero today.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/learn" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
            Get Started <ArrowRight size={20} />
          </Link>
          <a href="#features" className="btn btn-secondary" style={{ padding: '1rem 2rem' }}>
            Explore Features
          </a>
        </div>
      </section>

      <section id="features" style={{ padding: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Why PlayLab?</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
          gap: '2rem' 
        }}>
          <Card 
            title="Gamified Learning" 
            description="Complex concepts simplified through engaging mini-games and interactive visualizers."
            icon={Zap}
          />
          <Card 
            title="Real-World Sims" 
            description="Practice AI in real environments—from spam filters to self-driving car logic."
            icon={Shield}
          />
          <Card 
            title="Live Coding" 
            description="Write, test, and deploy ML models directly in your browser with our built-in playground."
            icon={Sparkles}
          />
        </div>
      </section>
    </div>
  );
}
