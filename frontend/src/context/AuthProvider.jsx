import { createContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);
  const [userData, setUserData] = useState({});

  const setIsLoggedIn = (loggedIn) => {
    setIsLoggedInState(loggedIn);
    if (loggedIn) {
      // Optionally, you could also store the 'isLoggedIn' state in a cookie
      Cookies.set('isLoggedIn', 'true', { expires: 1 }); // Expires in 1 day
    } else {
      Cookies.remove('isLoggedIn'); // Remove the cookie on logout
    }
  };

  const checkUser = useCallback(async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/profile/me`, {
        withCredentials: true,
      });

      if (response.data && response.data._id) {
        setIsLoggedIn(true);
        setUserData(response.data);
      } else {
        setIsLoggedIn(false);
        setUserData({});
      }
    } catch (error) {
      setIsLoggedIn(false);
      setUserData({});
      console.error(error);
    }
  }, []);

  useEffect(() => {
    // Check if the 'isLoggedIn' cookie exists and set the initial login state accordingly
    const isLoggedInCookie = Cookies.get('isLoggedIn');
    if (isLoggedInCookie === 'true') {
      checkUser();
    }
  }, [checkUser]);

  const values = {
    isLoggedIn,
    userData,
    setIsLoggedIn,
    setUserData,
    checkUser,
  };

  console.log(isLoggedIn, userData);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
