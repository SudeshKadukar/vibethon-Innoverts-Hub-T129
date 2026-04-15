const STORAGE_KEY = 'aiml_playlab';

export function getProgress() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { modules: {}, quizScores: [], gameScores: [] };
}

export function saveModuleProgress(moduleId, progress) {
  const data = getProgress();
  data.modules[moduleId] = progress;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function saveQuizScore(quizId, score) {
  const data = getProgress();
  data.quizScores.push({ quizId, score, date: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function saveGameScore(gameId, score) {
  const data = getProgress();
  data.gameScores.push({ gameId, score, date: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}
