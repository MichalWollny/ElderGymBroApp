import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { PiBarbell } from 'react-icons/pi';
import { BsBarChart } from 'react-icons/bs';
import { GoPerson, GoTrophy } from 'react-icons/go';

const BottomNav = () => {
  // activeIndex, speicherung des geraden aktiven Navpkts.
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  //Path festlegen
  const navItems = [
    { label: 'Home', icon: <AiOutlineHome />, path: '/home' },
    { label: 'Workouts', icon: <PiBarbell />, path: '/workouts' },
    { label: 'Progress', icon: <BsBarChart />, path: '/progress' },
    { label: 'Trophys', icon: <GoTrophy />, path: '/trophys' },
    { label: 'Profile', icon: <GoPerson/>, path: '/profile' },
  ];
  //Path übergeben
  const handleNavigation = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <nav className="fixed bottom-0 z-50 flex h-16 w-full items-center justify-around rounded-t-3xl bg-gray-900 shadow-md">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex cursor-pointer flex-col items-center text-xs ${index === activeIndex ? 'text-teal-300' : 'text-gray-400'}`}
          onClick={() => handleNavigation(index, item.path)}>
          <div className="text-2xl">{item.icon}</div>
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;
