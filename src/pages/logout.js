import React, {useEffect} from 'react';

export default function Logout() {
  useEffect(() => {
    try {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_uuid');
      localStorage.removeItem('user_type');
    } catch (e) {
      // ignore
    }
    window.location.replace('/login');
  }, []);

  return null;
}
