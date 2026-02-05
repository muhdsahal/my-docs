import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import { isLoggedIn, logout } from '../utils/auth';

export default function AuthLink() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedIn());

    const onStorage = () => {
      setLoggedIn(isLoggedIn());
    };

    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  if (loggedIn) {
    return (
      <button
        onClick={logout}
        style={{
          background: 'none',
          border: 'none',
          color: 'inherit',
          cursor: 'pointer',
          fontSize: 'inherit',
        }}
      >
        Logout
      </button>
    );
  }

  return <Link to="/login">Login</Link>;
}