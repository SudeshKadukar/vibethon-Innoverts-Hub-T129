const express = require('express');
const cors = require('cors');
require('dotenv').config();

const modulesRoute = require('./routes/modules');
const leaderboardRoute = require('./routes/leaderboard');
const authRoute = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/modules', modulesRoute);
app.use('/api/leaderboard', leaderboardRoute);
app.use('/api/auth', authRoute);

// Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'AIML-PlayLab API is running',
    endpoints: ['/api/modules', '/api/leaderboard', '/api/auth/login', '/api/auth/register']
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found.' });
});

app.listen(PORT, () => {
  console.log(`✅ AIML-PlayLab server running at http://localhost:${PORT}`);
});
