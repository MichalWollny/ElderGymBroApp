import { useContext, createContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const didMount = useRef(false);

  const checkUser = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/profile/me`, {
        withCredentials: true,
      });

      if (response.data && response.data._id) {
        setIsLoggedIn(true);
        setUserData(response.data);
        return response.data; // Return the user data
      } else {
        setIsLoggedIn(false);
        setUserData({});
        return {}; // Return empty object if no user data
      }
    } catch (error) {
      setIsLoggedIn(false);
      setUserData({});
      console.error('Error in checkUser:', error);
      return {}; // Return empty object in case of error
    }
  };

  useEffect(() => {
    if (didMount.current)
      // This block ensures the effect runs only after the initial render
      return;

    didMount.current = true;
    const token = Cookies.get('token');

    if (token) {
      checkUser();
    }
  }, []);

  const values = {
    isLoggedIn,
    userData,
    setIsLoggedIn,
    setUserData,
    checkUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
