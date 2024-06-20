import stamina from '/src/assets/images/stamina.png';
import gymLord from '/src/assets/images/gymLord.png';
import ygolonac from '/src/assets/images/ygolonac.png';
import cardioRiot from '/src/assets/images/cardioRiot.png';

import { useState } from 'react';
import { Paper } from '@mui/material';

const containerItems = [
  { id: 'gymLord', imgSrc: gymLord, text: 'Muscle Worship' },
  { id: 'ygolonac', imgSrc: ygolonac, text: 'Fat Fight' },
  { id: 'stamina', imgSrc: stamina, text: 'Stamina Destruction' },
  { id: 'cardioRiot', imgSrc: cardioRiot, text: 'Cardio Crusade' },
];

const ContainerItem = ({ id, imgSrc, text, selected, onClick }) => (
  <Paper
    elevation={selected ? 12 : 2}
    onClick={() => onClick(id)}
    square={false}
    className={`m-2 transition-transform duration-300 ease-in-out ${selected ? 'scale-105' : ''}`}>
    <input id={id} className="sr-only" type="radio" name="radio" />
    <label
      htmlFor={id}
      className="flex cursor-pointer flex-col items-center bg-gray-700 p-6 hover:bg-gray-600 focus:bg-gray-600">
      <img src={imgSrc} alt="Landing Page Image" className="mx-auto w-full md:w-1/2" />
      <div className="mt-2 text-center">
        <span className="text-3xl text-gray-300">{text}</span>
      </div>
    </label>
  </Paper>
);

function Onboarding() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (id) => {
    setSelectedItem(id);
  };

  return (
    <>
      <div className="relative grid place-content-center place-items-center overflow-hidden bg-gray-900 px-4 py-3 text-gray-200">
        <h2 className="font-serif text-6xl font-bold italic text-purple-500">Cultist,</h2>
        <h2 className="pb-3 text-center font-serif text-4xl font-medium italic text-green-400">
          which dark blessing do you seek?
        </h2>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            {containerItems.map((item) => (
              <ContainerItem key={item.id} {...item} selected={item.id === selectedItem} onClick={handleItemClick} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Onboarding;
