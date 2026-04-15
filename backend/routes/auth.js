const express = require('express');
const router = express.Router();

// Simulated user store (in-memory)
const users = [];

// POST /api/auth/register
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const exists = users.find(u => u.email === email);
  if (exists) {
    return res.status(409).json({ error: 'User already exists.' });
  }
  const user = { id: users.length + 1, name, email, password }; // Never store plain passwords in production!
  users.push(user);
  res.status(201).json({ id: user.id, name: user.name, email: user.email });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials.' });
  }
  res.json({ id: user.id, name: user.name, email: user.email });
});

module.exports = router;
