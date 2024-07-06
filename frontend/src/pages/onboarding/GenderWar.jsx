import maleImage from '../../assets/images/gender/male.jpeg';
import femaleImage from '../../assets/images/gender/female.jpg';
import eldritchHorrorImage from '../../assets/images/gender/horror.jpeg';
import blobImage from '../../assets/images/gender/blob.jpg';
import otherImage from '../../assets/images/gender/other.jpg';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Modal, Box } from '@mui/material';

const genders = [
  {
    name: 'Male',
    server: 'male',
    image: maleImage,
  },
  {
    name: 'Female',
    server: 'female',
    image: femaleImage,
  },
  {
    name: 'Eldritch',
    server: 'elder thing',
    image: eldritchHorrorImage,
  },
  {
    name: 'Blob',
    server: 'blob',
    image: blobImage,
  },
  {
    name: 'Other',
    server: 'other',
    image: otherImage,
  },
];

const elderGodMessages = [
  'The elder gods do not approve of your boring choice',
  'The elder gods sigh, their interest waning at your ordinary choice',
  'The void whispers, ‘Is that all you can muster?’',
  'The stars align, only to reveal their disappointment in your common selection',
  'The ancient ones stir in their slumber, unimpressed by your mundane choice',
  'The abyss gazes back, indifferent to your conventional selection',
  'The cosmic horrors yawn at your predictable decision',
];

const otherGenderMessages = [
  'The ancient ones murmur in approval, their dark whispers echoing through the void',
  'The stars align, casting an eerie glow of satisfaction upon your choice',
  'The cosmic horrors nod in silent agreement, their approval palpable',
  'The void hums with a sinister delight, acknowledging your decision',
  'The elder gods smile, their approval resonating through the fabric of reality',
  'The abyss stirs, pleased with the path you have chosen',
  'The eldritch forces converge, their approval a dark blessing upon your choice',
];

const GenderWar = () => {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);
  // Additional state to manage animation
  const [animationClass, setAnimationClass] = useState('');
  const [randomMessage, setRandomMessage] = useState('');

  useEffect(() => {
    if (open) {
      setAnimationClass('opacity-100'); // Fully visible
    } else if (!open && selectedGender !== null) {
      setAnimationClass('opacity-0'); // Fully transparent
    }
  }, [open, selectedGender]);

  const handleOpen = (gender) => {
    setSelectedGender(gender);
    setSelectedImage(gender.image);
    setOpen(true);
    setAnimationClass('opacity-0'); // Start transparent
    setTimeout(() => setAnimationClass('opacity-100 transition-opacity duration-200'), 10); // Then animate to fully visible

    // Check if the selected gender is Male or Female and set a random message
    if (gender.name === 'Male' || gender.name === 'Female') {
      const randomIndex = Math.floor(Math.random() * elderGodMessages.length);
      setRandomMessage(elderGodMessages[randomIndex]);
    } else {
      const randomIndex = Math.floor(Math.random() * otherGenderMessages.length);
      setRandomMessage(otherGenderMessages[randomIndex]);
    }
  };

  const handleClose = () => {
    setAnimationClass('opacity-0 transition-opacity duration-0'); // Animate to transparent
    setTimeout(() => {
      setOpen(false);
      setSelectedGender(null);
    }, 0); // Then close the modal after the animation
  };

  const updateGenderAndNavigate = async (genderName) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/profile/me/gender`,
        {
          gender: genderName,
        },
        {
          withCredentials: true,
        },
      );

      // Navigate to /setup after successful update
      navigate('/setup');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 text-gray-200">
      {/* window bar */}
      <div className="flex flex-row justify-start">
        {/* link container*/}
        <div className="flex flex-row justify-center text-teal-100">
          <a href="/startyourjourney" className="m-2 font-semibold text-teal-600">
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </a>
        </div>
      </div>

      {/* Page title bar */}
      <div className="flex flex-row justify-center">
        <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus text-2xl font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
          Choose your gender
        </h1>
      </div>

      <div>
        {/* Cards */}
        <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {genders.map((gender) => (
            <div
              key={gender.name}
              className="mx-auto max-w-xs transform cursor-pointer overflow-hidden rounded border-teal-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 object-cover text-gray-800 shadow-lg transition duration-500 hover:scale-105"
              onClick={() => handleOpen(gender)}>
              <img className="w-full" src={gender.image} alt={gender.name} />
              <div className="px-6 py-2 text-center">
                <div className="font-cthulhumbus text-lg font-bold text-teal-500">{gender.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              height: 'auto',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
            className={`${animationClass} mx-auto max-w-lg`}>
            {/* Modal content */}
            {/* Conditional rendering to check if selectedGender is not null */}
            {selectedGender && selectedGender.name !== 'Male' && selectedGender.name !== 'Female' && (
              <div
                className={`cursor-pointer overflow-hidden rounded border-teal-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 object-cover text-gray-800 shadow-lg ${selectedImage === 'male' || selectedImage === 'female' ? 'grayscale' : ''}`}>
                <div className="px-6 py-2 text-center">
                  <div className="font-cthulhumbus text-lg font-bold text-teal-500">{randomMessage}</div>
                </div>
                <img src={selectedImage} alt={selectedGender.name} />
                <div className="px-6 py-2 text-center">
                  <div className="font-cthulhumbus text-lg font-bold text-teal-500">{selectedGender.name}</div>
                  <button
                    onClick={() => updateGenderAndNavigate(selectedGender.server)}
                    className="mt-4 rounded bg-teal-500 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-teal-600">
                    This is me
                  </button>
                </div>
              </div>
            )}
            {selectedGender && (selectedGender.name === 'Male' || selectedGender.name === 'Female') && (
              <div
                className={`cursor-pointer overflow-hidden rounded border-teal-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 object-cover text-gray-800 shadow-lg`}>
                <div className="px-6 py-2 text-center">
                  <div className="font-cthulhumbus text-lg font-bold text-teal-500">{randomMessage}</div>
                </div>
                <img className="grayscale" src={selectedImage} alt={selectedGender.name} />
                <div className="px-6 py-2 text-center">
                  <div className="font-cthulhumbus text-lg font-bold text-teal-500 grayscale">
                    {selectedGender.name}
                  </div>
                </div>
              </div>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default GenderWar;
