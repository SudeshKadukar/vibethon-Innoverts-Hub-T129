const LEADERBOARD_KEY = 'aiml_leaderboard';

const defaultLeaderboard = [
  { name: 'Priya Sharma', score: 2850 },
  { name: 'Arjun Patel', score: 2670 },
  { name: 'Sarah Chen', score: 2540 },
  { name: 'Omar Hassan', score: 2310 },
  { name: 'Emily Davis', score: 2180 },
];

export function getLeaderboard() {
  const data = localStorage.getItem(LEADERBOARD_KEY);
  return data ? JSON.parse(data) : defaultLeaderboard;
}

export function addScore(name, score) {
  const board = getLeaderboard();
  board.push({ name, score });
  board.sort((a, b) => b.score - a.score);
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(board));
  return board;
}
