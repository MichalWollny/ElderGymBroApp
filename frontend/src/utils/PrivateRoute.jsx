import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const PrivateRoute = () => {
  const { isLoggedIn, checkUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      await checkUser();
      setLoading(false);
    };
    verifyUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>Loading...</div>; // or a spinner/loader
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/accessdenied" />;
};

export default PrivateRoute;
