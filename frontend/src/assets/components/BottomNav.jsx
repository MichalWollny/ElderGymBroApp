import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { PiBarbell } from 'react-icons/pi';
import { BsBarChart } from 'react-icons/bs';
import { GoPerson, GoTrophy } from 'react-icons/go';

const BottomNav = () => {
  // activeIndex, speicherung des geraden aktiven Navpkts.
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Memoize navItems to prevent unnecessary re-renders
  const navItems = useMemo(
    () => [
      { label: 'Home', icon: <AiOutlineHome />, path: '/home' },
      { label: 'Workouts', icon: <PiBarbell />, path: '/workouts' },
      { label: 'Progress', icon: <BsBarChart />, path: '/progress' },
      { label: 'Trophies', icon: <GoTrophy />, path: '/trophys' },
      { label: 'Profile', icon: <GoPerson />, path: '/profile' },
    ],
    [],
  );

  // Update active index based on current location
  useEffect(() => {
    const currentPath = location.pathname;
    const index = navItems.findIndex(
      (item) => item.path === currentPath || (item.paths && item.paths.includes(currentPath)),
    );
    setActiveIndex(index);
  }, [location, navItems]);

  //Path übergeben
  const handleNavigation = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <nav className="fixed bottom-0 z-50 flex h-16 w-full items-center justify-around rounded-t-3xl bg-gray-900 shadow-md lg:h-20 lg:justify-center lg:space-x-8">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex cursor-pointer flex-col items-center text-xs ${index === activeIndex ? 'text-teal-300' : 'text-gray-400'} lg:text-base`}
          onClick={() => handleNavigation(index, item.path)}>
          <div className="text-2xl lg:text-3xl">{item.icon}</div>
          <span className="hidden lg:block">{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;
