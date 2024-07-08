import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuth } from '../../context/AuthProvider';

const UserBar = () => {
  const { userData, setUserData, isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`, {}, { withCredentials: true });
      console.log('Logout response:', response.data);
      console.log('Logout successful, you have escaped... for now', response);
      Cookies.remove('token'); // Clear the cookie on the client side
      setIsLoggedIn(false);
      setUserData({});
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
      console.error('Logout failed, you will never leave the cult!', error.message);
    }
  };

  // activeIndex, storing the currently active nav item index
  const [activeIndex, setActiveIndex] = useState(0);

  // Define paths
  const navItems = [
    {
      // label: 'Logout',
      icon: (
        <button className="flex h-12 w-12 items-center" onClick={logOut}>
          <img className="h-auto min-w-12" src="../src/assets/icons/logout1.png" alt="Logout" />
        </button>
      ),
      path: '/',
    },
    {
      icon: (
        <div>
          {isLoggedIn && userData ? (
            <p className="text-center text-teal-700" style={{ zIndex: 2 }}>
              <span className="mb-0 pb-0 text-lg">{userData.username || 'No username'}</span> <br />
              <span className="mt-0 pt-0 text-sm">{userData.awards?.title || 'No title'}</span>
            </p>
          ) : (
            <p className="text-center text-teal-700">Loading...</p>
          )}
        </div>
      ),
    },
    {
      label: 'Profile',
      icon: (
        <div className="size-fit h-12 w-12 rounded-full border-4 border-solid border-black bg-black">
          {isLoggedIn && userData ? (
            <img
              className="border-1 rounded-full border-solid border-white bg-white"
              src={userData.avatar || '../src/assets/images/default-avatar.png'}
              alt="Avatar"
            />
          ) : (
            <div className="border-1 rounded-full border-solid border-white bg-white">
              <span>Loading...</span>
            </div>
          )}
        </div>
      ),
      path: '/profile',
    },
  ];

  // Handle navigation
  const handleNavigation = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <nav className="bg-to-transparent fixed top-0 z-50 flex h-20 w-full items-center justify-between rounded-b-3xl bg-gray-900 font-cthulhumbus shadow-md">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex cursor-pointer flex-col items-center pl-5 pr-5 pt-2 text-xs ${
            index === activeIndex ? 'text-teal-300' : 'text-gray-400'
          }`}
          onClick={() => handleNavigation(index, item.path)}>
          <div className="text-2xl">{item.icon}</div>
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default UserBar;
