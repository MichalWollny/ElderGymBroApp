import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  return (
    <nav className="fixed py-2 top-0 z-50 flex w-full items-center justify-between bg-gray-900 font-cthulhumbus shadow-md">
     
      {/* Wrapper div to center the username */}
      <div className="grid grid-cols-3 w-full">
        <div></div>
        {isLoggedIn && userData ? (
          
        <div className="" style={{ zIndex: 2 }}>
          <div className='flex flex-col items-center justify-center'>
            <div className="mt-2  text-center cursor-default bg-gradient-to-br from-yellow-950 to-yellow-500 bg-clip-text font-cthulhumbus text-xl font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
              {userData.username || 'No username'}
            </div>
            <div className="mt-0 text-center text-nowrap cursor-default bg-gradient-to-br from-teal-500 to-green-800 bg-clip-text font-cthulhumbus text-lg font-medium leading-tight text-transparent sm:text-2xl md:text-xl">
              {userData.awards?.title || 'No title'}
            </div>
          </div>
        </div>

        ) : (
          <p className="text-center text-teal-700">Loading...</p>
        )}
          <div className="flex flex-col justify-center ml-6">
          <div className="mx-auto mt-2 w-8 sm:w-12 md:w-16">
            {isLoggedIn && userData ? (
              <StyledCircularProgressbar
                value={userData.awards?.progress}
                text={userData.awards?.level}
                className=""
                background={true}
                strokeWidth={15}
                backgroundPadding={0}
              />
            ) : (
              <p className="text-center text-teal-500">Loading...</p>
            )}
            </div>
            <p className="text-center pt-1 text-xs font-cthulhumbus text-teal-500">Karma</p>
            </div>
      </div>
    </nav>
  );
};

export default UserBar;
