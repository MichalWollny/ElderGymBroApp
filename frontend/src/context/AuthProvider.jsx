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
      // console.log('checkUser called');
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/profile/me`, {
        withCredentials: true,
      });

      if (response.data && response.data._id) {
        setIsLoggedIn(true);
        setUserData(response.data);
        // console.log('User data:', response.data);
      } else {
        setIsLoggedIn(false);
        setUserData({});
      }
    } catch (error) {
      setIsLoggedIn(false);
      setUserData({});
      console.error('Error in checkUser:', error);
    }
  };

  useEffect(() => {
    if (didMount.current) {
      // This block ensures the effect runs only after the initial render
      return;
    }

    didMount.current = true;
    const token = Cookies.get('token');
    // console.log('Token from cookies:', token); // Log the token value

    if (token) {
      // console.log('Token exists, calling checkUser');
      checkUser();
    } else {
      // console.log('No token found, not calling checkUser');
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
