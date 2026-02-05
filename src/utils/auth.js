export function isLoggedIn() {
  if (typeof window === 'undefined') return false;
  return Boolean(localStorage.getItem('access'));
}

export function logout() {
  if (typeof window === 'undefined') return;

  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
  localStorage.removeItem('user_id');
  localStorage.removeItem('user_uuid');
  localStorage.removeItem('user_type');

  try {
    window.dispatchEvent(new Event('storage'));
  } catch {}

  window.location.replace('/login');
}