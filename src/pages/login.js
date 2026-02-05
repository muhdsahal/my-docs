import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { isLoggedIn } from '../utils/auth';

export default function Login() {
  const { siteConfig } = useDocusaurusContext();
  const apiBaseFromConfig = siteConfig.customFields.API_BASE_URL;

  if (typeof window !== 'undefined' && isLoggedIn()) {
    window.location.replace('/');
    return null;
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLoginUrl = () => {
    if (apiBaseFromConfig) {
      return `${apiBaseFromConfig.replace(/\/$/, '')}/api/v1/users/login/`;
    }
    return '/api/v1/users/login/';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(getLoginUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        const data = json.data || {};

        if (data.access) localStorage.setItem('access', data.access);
        if (data.refresh) localStorage.setItem('refresh', data.refresh);
        if (data.id) localStorage.setItem('user_id', String(data.id));
        if (data.uuid) localStorage.setItem('user_uuid', data.uuid);
        if (data.user_type) localStorage.setItem('user_type', data.user_type);

        try {
          window.dispatchEvent(new Event('storage'));
        } catch {}

        window.location.replace('/');
      } else {
        setError(json.message || 'Login failed');
      }
    } catch (err) {
      setError(err.message || 'Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Login">
      <main style={{ display: 'flex', justifyContent: 'center', paddingTop: 80 }}>
        <form onSubmit={handleSubmit} style={{ width: 360 }}>
          <h2>Login</h2>

          <label style={{ display: 'block', marginBottom: 8 }}>
            Username or Email
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: '100%', padding: 8, marginTop: 4 }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: 8 }}>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: 8, marginTop: 4 }}
            />
          </label>

          <div style={{ height: 24 }}>
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </div>

          <button
            type="submit"
            className="button button--primary"
            disabled={loading}
            style={{ width: '100%' }}
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>
        </form>
      </main>
    </Layout>
  );
}