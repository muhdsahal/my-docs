import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import { isLoggedIn } from '../utils/auth';

export default function Root({ children }) {
  const location = useLocation();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Allow login page without auth
    if (location.pathname === '/login') {
      setChecked(true);
      return;
    }

    // If not logged in → redirect
    if (!isLoggedIn()) {
      window.location.replace('/login');
      return;
    }

    setChecked(true);
  }, [location.pathname]);

  // Prevent page flash before auth check
  if (!checked) {
    return null; // or loading spinner
  }

  return children;
}