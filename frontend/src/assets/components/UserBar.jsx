import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuth } from '../../context/AuthProvider';
import StyledCircularProgressbar from './CircularProgress';

const UserBar = () => {
  const { userData, setUserData, isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  // activeIndex, storing the currently active nav item index
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle navigation
  const handleNavigation = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };

  console.log(userData.awards);

  return (
    <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-gray-900 font-cthulhumbus shadow-md">
      {/* Wrapper div to center the username */}
      <div className="flex w-full items-center justify-center">
        {isLoggedIn && userData ? (
          <p className="text-center text-teal-700" style={{ zIndex: 2 }}>
            <span className="mb-0 pb-0 text-lg">{userData.username || 'No username'}</span> <br />
            <span className="mt-0 cursor-default bg-gradient-to-br from-yellow-950 to-yellow-500 bg-clip-text pt-4 text-center font-cthulhumbus text-sm font-medium leading-tight text-transparent sm:text-2xl md:text-4xl">
              {userData.awards?.title || 'No title'}
            </span>
          </p>
        ) : (
          <p className="text-center text-teal-700">Loading...</p>
        )}
      </div>
      <div className="relative h-auto w-20 font-cthulhumbus">
        {/* <img
          src="../src/assets/icons/levelbackground2.png"
          alt="Level Background"
          className="absolute inset-0 left-12 top-4 -m-10 h-[210%] w-[210%] object-cover"
        /> */}
        <div className="relative z-10 flex h-full items-center justify-center">
          {isLoggedIn && userData ? (
            <StyledCircularProgressbar
              value={userData.awards?.progress}
              text={userData.awards?.level}
              className="pr-5"
              background={true}
              strokeWidth={15}
              backgroundPadding={0}
            />
          ) : (
            <p className="text-center text-teal-700">Loading...</p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default UserBar;
