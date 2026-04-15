const USER_KEY = 'aiml_user';

export function login(email, password) {
  // Simulated auth — in production, call a real API
  const user = { email, name: email.split('@')[0], loggedIn: true };
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  return user;
}

export function register(name, email, password) {
  const user = { email, name, loggedIn: true };
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  return user;
}

export function logout() {
  localStorage.removeItem(USER_KEY);
}

export function getUser() {
  const data = localStorage.getItem(USER_KEY);
  return data ? JSON.parse(data) : null;
}

export function isLoggedIn() {
  return !!getUser();
}
