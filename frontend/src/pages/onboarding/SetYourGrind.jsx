import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import axios from 'axios';

// images
import setgrind from '../../assets/images/setgrind.jpeg';
import beginner from '../../assets/images/beginner.png';
import intermediate from '../../assets/images/intermediate.png';
import advanced from '../../assets/images/advanced2.jpg';

const cards = [
  {
    name: 'Beginner',
    server: 'beginner',
    image: beginner,
    subheading: (
      <>
        {'3× trainings a week:'}
        <br />
        {'Strengthening tributes'}
      </>
    ),
  },
  {
    name: 'Intermediate',
    server: 'intermediate',
    image: intermediate,
    subheading: (
      <>
        {'4-5× trainings a week:'}
        <br />
        {'A ritual of unleashing'}
      </>
    ),
  },
  {
    name: 'Advanced',
    server: 'advanced',
    image: advanced,
    subheading: (
      <>
        {'5-6× trainings a week:'}
        <br />
        {'Echoes of my power in your veins!'}
      </>
    ),
  },
];

function SetYourGrind() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChoose = async () => {
    try {
      // console.log('Attempting to update fitness level to:', selectedCard.server); // Debugging
      // const response = await axios.patch(
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/profile/me/fitnessLevel`,
        { fitnessLevel: selectedCard.server },
        { withCredentials: true },
      );

      // console.log('Update response:', response); // Debugging
      navigate('/whatsyourgoal');
    } catch (error) {
      console.error('Error updating fitness level:', error);
    }
  };

  return (
    <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 text-gray-200">
      <div className="flex flex-row justify-start">
        <div className="flex flex-row justify-center text-teal-100">
          <Link to="/startyourjourney" className="m-2 font-semibold text-teal-600">
            {/* Back icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <h2 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus text-2xl font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
          Set Your Grind
        </h2>
      </div>

      <img src={setgrind} alt="Set Your Grind" className="rounded-lg" />

      <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.name}
            className="mx-auto max-w-xs transform cursor-pointer overflow-hidden rounded border-teal-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 object-cover text-gray-800 shadow-lg transition duration-500 hover:scale-105"
            onClick={() => handleOpen(card)}>
            <img
              className="h-36 w-96 object-cover font-cthulhumbus text-lg font-bold"
              src={card.image}
              alt={card.name}
            />
            <div className="px-6 py-2 text-center">
              <div className="font-cthulhumbus text-lg font-bold text-teal-500">{card.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying selected card */}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: 'auto',
            bgcolor: 'darkslategray',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
            p: 1.5, // Adjusted padding for consistency
            borderRadius: '20px', // Added borderRadius for a softer look
          }}
          className="bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-gray-800 shadow-lg">
          {selectedCard && (
            <>
              <Typography
                id="card-title"
                variant="h6"
                component="h2"
                sx={{
                  fontFamily: 'font-cthulhumbus',
                  fontSize: '3rem',
                  fontWeight: 'bold', // font-bold
                  color: '#81E6D9', // text-teal-300
                  textAlign: 'center', // Center the text
                }}>
                {selectedCard.name}
              </Typography>
              <img
                src={selectedCard.image}
                alt={selectedCard.name}
                style={{ width: '100%', maxHeight: '15rem', objectFit: 'cover', borderRadius: '5px' }} // Added borderRadius to the image for consistency
              />
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: '1.125rem',
                  fontWeight: 'bold', // font-bold
                  color: '#ffffff', // Changed to white for higher contrast
                  textAlign: 'center', // Center the text
                }}>
                {selectedCard.subheading}
              </Typography>
              <div className="mt-2 flex justify-between">
                <Button
                  variant="contained"
                  onClick={handleClose}
                  sx={{
                    backgroundColor: '#2D3748', // Equivalent to bg-gray-800
                    px: '8px', // px-2
                    color: 'white', // text-white
                    '&:hover': {
                      backgroundColor: '#4A5568', // Adjusted for hover effect, assuming gray.700
                    },
                    mt: 1,
                    textTransform: 'none', // Removes uppercase text transformation
                  }}>
                  Close
                </Button>
                <Button
                  onClick={handleChoose}
                  variant="contained"
                  sx={{
                    backgroundColor: '#38B2AC', // This is the hex code for TailwindCSS's bg-teal-500
                    color: 'white', // Ensures text is white
                    '&:hover': {
                      backgroundColor: '#319795', // A darker teal for hover, similar to Tailwind's hover:bg-teal-400
                    },
                    mt: 1,
                    textTransform: 'none', // Removes uppercase text transformation
                  }}>
                  I&apos;m in!
                </Button>
              </div>
            </>
          )}
        </Box>
      </Modal>

      <div className="mt-4 flex flex-col pb-4">
        <ul className="steps">
          <li className="step text-xs">
            <Link to="/startyourjourney">Start</Link>
          </li>
          <li className="step step-info text-xs">Grind?</li>
          <li className="step text-xs">
            <Link to="/whatsyourgoal">Goal?</Link>
          </li>
          <li className="step text-xs">
            <Link to="/gender">Beeing?</Link>
          </li>
          <li className="step text-xs">
            <Link to="/setup">Go!</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SetYourGrind;
