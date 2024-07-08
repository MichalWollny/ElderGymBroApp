import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { PiBarbell } from 'react-icons/pi';
import { BsBarChart } from 'react-icons/bs';
import { GoTrophy } from 'react-icons/go';
import { useAuth } from '../../context/useAuth';
import axios from 'axios';
import backgroundImage from '../images/textfield2.png';

const UserBar = () => {
  const { userData, isLoggedIn, setIsLoggedIn } = useAuth();

  const logOut = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
        {},
        {
          withCredentials: true,
        },
      );
      console.log('Logout successful, you have escaped... for now', response);
      // Navigate to /login screen
      navigate('/login');
    } catch (error) {
      console.error('Logout failer, you will never leave the cult!', error.message);
    }
  };

  // activeIndex, speicherung des geraden aktiven Navpkts.
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  //Path festlegen
  const navItems = [
    {
      // label: 'Logout',
      icon: (
        <div className="flex h-12 w-12 items-center" onClick={logOut}>
          <img className="h-auto min-w-16" src="../src/assets/icons/logout1.png" alt="" />
        </div>
      ),
      path: '/login',
    },
    {
      icon: (
        // <div className="bg-[url(`../src/assets/images/textfield2.png`)]">
        // <div
        //   style={{
        //     backgroundImage: `url(${backgroundImage})`,
        //     backgroundSize: 'contain',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundPosition: 'center',
        //     width: '100%', // Adjust based on your layout needs
        //     height: '100px', // Example height, adjust as necessary
        //   }}
        //   className="flex items-center justify-center overflow-visible bg-no-repeat">
        <div>
          <p className="text-center text-teal-700" style={{ zIndex: 2 }}>
            <span className="mb-0 pb-0 text-lg">{userData.username}</span> <br />
            <span className="mt-0 pt-0 text-sm">{userData.awards.title}</span>
          </p>{' '}
          {/* Ensure text color contrasts with background */}
        </div>
      ),
    },
    {
      label: 'Profile',
      icon: (
        <div className="size-fit h-12 w-12 rounded-full border-4 border-solid border-black bg-black">
          <img
            className="border-1 rounded-full border-solid border-white bg-white"
            src={`${userData.avatar}`}
            alt={`${userData.gender}`}
          />
        </div>
      ),
      path: '/profile',
    },
  ];

  //Path übergeben
  const handleNavigation = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <nav className="bg-to-transparent fixed top-0 z-50 flex h-20 w-full items-center justify-between rounded-b-3xl bg-gray-900 font-cthulhumbus shadow-md">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex cursor-pointer flex-col items-center pl-5 pr-5 pt-2 text-xs ${index === activeIndex ? 'text-teal-300' : 'text-gray-400'}`}
          onClick={() => handleNavigation(index, item.path)}>
          <div className="text-2xl">{item.icon}</div>
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default UserBar;
