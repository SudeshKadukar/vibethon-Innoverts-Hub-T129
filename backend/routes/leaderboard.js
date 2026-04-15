const express = require('express');
const router = express.Router();

// In-memory leaderboard
let leaderboard = [
  { rank: 1, name: 'Priya Sharma', score: 2850, level: 'Master' },
  { rank: 2, name: 'Arjun Patel', score: 2670, level: 'Expert' },
  { rank: 3, name: 'Sarah Chen', score: 2540, level: 'Expert' },
  { rank: 4, name: 'Omar Hassan', score: 2310, level: 'Advanced' },
  { rank: 5, name: 'Emily Davis', score: 2180, level: 'Advanced' },
];

// GET leaderboard
router.get('/', (req, res) => {
  res.json(leaderboard);
});

// POST new score
router.post('/', (req, res) => {
  const { name, score } = req.body;
  if (!name || score === undefined) {
    return res.status(400).json({ error: 'Name and score are required.' });
  }
  leaderboard.push({ name, score, level: 'Unranked' });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.map((entry, i) => ({ ...entry, rank: i + 1 }));
  res.status(201).json(leaderboard);
});

module.exports = router;
