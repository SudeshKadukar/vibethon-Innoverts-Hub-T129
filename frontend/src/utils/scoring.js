export function calculateQuizScore(answers, correctAnswers) {
  let correct = 0;
  answers.forEach((ans, i) => {
    if (ans === correctAnswers[i]) correct++;
  });
  return {
    correct,
    total: correctAnswers.length,
    percentage: Math.round((correct / correctAnswers.length) * 100)
  };
}

export function calculateXP(score, multiplier = 1) {
  return Math.round(score * 10 * multiplier);
}

export function getLevelFromXP(xp) {
  if (xp >= 5000) return 'Master';
  if (xp >= 3000) return 'Expert';
  if (xp >= 1500) return 'Advanced';
  if (xp >= 500) return 'Intermediate';
  return 'Beginner';
}
