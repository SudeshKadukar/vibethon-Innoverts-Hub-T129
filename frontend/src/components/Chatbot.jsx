import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm the PlayLab Guide Bot 🤖. Ask me anything about the platform!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const getBotResponse = (msg) => {
    const lower = msg.toLowerCase();
    
    if (lower.includes('hello') || lower.includes('hi ') || lower === 'hi') {
      return "Hello there! How can I help you explore AI and Machine Learning today?";
    }
    if (lower.includes('games') || lower.includes('play')) {
      return "We have several mini-games to help you learn! Check out the 'Mini Games' section in the sidebar to try the Spam Classifier or Decision Tree game.";
    }
    if (lower.includes('learn') || lower.includes('course') || lower.includes('path') || lower.includes('module')) {
      return "Our 'Learning Paths' offer structured modules from Beginner to Advanced. Just click the book icon in the sidebar!";
    }
    if (lower.includes('quiz')) {
      return "Ready to test your knowledge? Hit the 'Quiz' section on the left to tackle questions from Basic to Expert levels.";
    }
    if (lower.includes('simulation') || lower.includes('real-world') || lower.includes('real world')) {
      return "Simulations let you see AI in action! Our new Simulation lab shows live execution logs and dataset modeling. Look for the Flask icon in the menu.";
    }
    if (lower.includes('leaderboard') || lower.includes('score') || lower.includes('rank')) {
      return "The Leaderboard tracks top learners based on XP earned from modules and games. Keep practicing to climb the ranks!";
    }
    if (lower.includes('playground') || lower.includes('code')) {
      return "The Code Playground lets you write and experiment with Python/ML code right in your browser.";
    }
    if (lower.includes('about') || lower.includes('what is this')) {
      return "AIML PlayLab is a gamified interactive platform designed to teach Artificial Intelligence and Machine Learning through play, simulations, and hands-on coding.";
    }

    return "I'm still learning! 🤔 Try asking me about 'games', 'learning paths', 'quizzes', 'simulations', or 'leaderboard'.";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { text: userText, sender: 'user' }]);
    setInput('');

    // Simulate typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: getBotResponse(userText), sender: 'bot' }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="btn-primary"
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem',
          width: '60px', height: '60px', borderRadius: '50%',
          display: isOpen ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 20px rgba(79,70,229,0.4)', border: 'none',
          cursor: 'pointer', zIndex: 999, transition: 'transform 0.2s'
        }}
      >
        <MessageSquare size={28} color="white" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="glass-card"
          style={{
            position: 'fixed', bottom: '2rem', right: '2rem',
            width: '350px', height: '500px', maxWidth: 'calc(100vw - 2rem)',
            display: 'flex', flexDirection: 'column', zIndex: 1000,
            overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
          }}
        >
          {/* Header */}
          <div style={{
            background: 'var(--primary)', padding: '1rem',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 'bold' }}>
              <Bot size={20} /> PlayLab Guide
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div style={{
            flex: 1, padding: '1rem', overflowY: 'auto',
            display: 'flex', flexDirection: 'column', gap: '1rem',
            background: 'rgba(15,17,26,0.6)'
          }}>
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', gap: '0.5rem',
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                  maxWidth: '85%'
                }}
              >
                <div style={{ 
                  width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                  background: msg.sender === 'user' ? 'var(--secondary)' : 'var(--primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {msg.sender === 'user' ? <User size={16} color="white" /> : <Bot size={16} color="white" />}
                </div>
                <div style={{
                  background: msg.sender === 'user' ? 'var(--surface)' : 'rgba(79,70,229,0.2)',
                  border: `1px solid ${msg.sender === 'user' ? 'var(--border)' : 'rgba(79,70,229,0.3)'}`,
                  padding: '0.75rem', borderRadius: '12px',
                  borderTopRightRadius: msg.sender === 'user' ? '4px' : '12px',
                  borderTopLeftRadius: msg.sender === 'bot' ? '4px' : '12px',
                  fontSize: '0.9rem', lineHeight: '1.4', color: 'var(--text)'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form 
            onSubmit={handleSend}
            style={{ 
              padding: '1rem', borderTop: '1px solid var(--border)', 
              background: 'var(--surface-light)', display: 'flex', gap: '0.5rem' 
            }}
          >
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              style={{
                flex: 1, background: 'var(--background)', border: '1px solid var(--border)',
                borderRadius: '20px', padding: '0.5rem 1rem', color: 'var(--text)',
                outline: 'none', fontFamily: 'inherit'
              }}
            />
            <button 
              type="submit" 
              className="btn-primary" 
              style={{ 
                width: '40px', height: '40px', borderRadius: '50%', padding: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
              }}
              disabled={!input.trim()}
            >
              <Send size={16} style={{ marginLeft: '-2px' }} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
