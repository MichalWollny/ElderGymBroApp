import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Importing images
import growMuscleImage from '../../assets/images/growmuscle.jpg';
import buildStaminaImage from '../../assets/images/buildupyourstamina.jpg';
import maximizeStrengthImage from '../../assets/images/maximizeyourstrength.jpg';
import weightGainImage from '../../assets/images/weightgain.jpeg';

const cards = [
  {
    // Grow Your Muscle Card
    image: growMuscleImage,
    heading: 'Grow Your Muscles',
    subheading: '8 - 15 Reps',
    // other props...
  },
  {
    // Built Up Your Stamina Card
    image: buildStaminaImage,
    heading: 'Build Your Stamina',
    subheading: '15 - 20+ Reps',
    // other props...
  },
  {
    // Maximize your Strength Card
    image: maximizeStrengthImage,
    heading: 'Maximize Your Strength',
    subheading: '4 - 10 Reps',
    // other props...
  },
  {
    // Achieve Weight Loss Card
    image: weightGainImage,
    heading: 'Achieve Weight Loss',
    subheading: '15 - 30+ Reps',
    // other props...
  },
];

function WhatsYourGoal() {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  // Open card handler
  const openCard = (card) => {
    setActiveCard(card);
  };

  // Close modal handler
  const closeModal = () => {
    setActiveCard(null);
  };

  const updateAimAndNavigate = async () => {
    try {
      // Assuming activeCard.heading contains the workout aim you want to update
      const workoutAim = activeCard.heading; // Extract the necessary data before the request

      await axios.patch(
        `${import.meta.env.VITE_API_URL}/profile/me/workoutAim`,
        { workoutAim }, // Only pass the extracted data
        { withCredentials: true },
      );

      // Navigate to /setyourgrind after successful update
      navigate('/gender');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 text-gray-200">
        {/* window bar */}
        <div className="flex flex-row justify-start from-black to-blue-950">
          {/* icon button container*/}
          <div className="flex flex-row">
            {/* link container*/}
            <div className="flex flex-row justify-center text-teal-100">
              <a href="/setyourgrind" className="m-2 font-semibold text-teal-600">
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
        </div>

        {/* Page title bar */}
        <div className="flex flex-row justify-center">
          <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus text-2xl font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            What&apos;s your goal
          </h1>
        </div>

        {/* -- Content section */}
        <div className="flex flex-wrap justify-center">
          {/* Cards grid */}
          <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-2 p-2">
            {cards.map((card, index) => (
              <div key={index} className="m-1 h-full" onClick={() => openCard(card)}>
                {/* Card content */}
                <div className="h-auto transform rounded-t-lg border-4 border-solid border-teal-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 object-cover transition-transform duration-300 ease-in-out hover:scale-110">
                  <img src={card.image} alt={card.heading} className="h-80 w-56 rounded object-cover object-[top]" />
                  <div className="flex h-auto flex-grow flex-col items-center border-2 border-solid border-pink-800 p-2 text-white">
                    <p className="text-center font-cthulhumbus text-xl text-teal-500">{card.subheading}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for active card */}
        {activeCard && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-40"
            onClick={closeModal}>
            <div
              className="flex max-w-xs flex-col rounded-lg bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 object-cover p-4 text-gray-800 shadow-lg"
              onClick={(e) => e.stopPropagation()}>
              <img
                src={activeCard.image}
                alt={activeCard.heading}
                className="h-96 w-auto rounded-lg object-cover object-[top]"
              />

              <div className="mt-4">
                <h3 className="text-center font-cthulhumbus text-2xl font-bold text-teal-500">{activeCard.heading}</h3>
                <p className="text-center font-cthulhumbus text-base font-bold text-teal-500">
                  {activeCard.subheading} = repetitions
                </p>
              </div>
              <div className="mt-4 flex justify-between">
                <button onClick={closeModal} className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
                  Close
                </button>
                <button
                  onClick={updateAimAndNavigate}
                  className="rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600">
                  Choose this
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col pb-2 pt-2">
          <ul className="steps">
            <li className="step text-xs">
              <Link to="/startyourjourney">Start</Link>
            </li>
            <li className="step text-xs">
              <Link to="/setyourgrind">Grind?</Link>
            </li>
            <li className="step step-info text-xs">Goal?</li>
            <li className="step text-xs">
              <Link to="/gender">Beeing?</Link>
            </li>
            <li className="step text-xs">
              <Link to="/setup">Go!</Link>
            </li>
          </ul>
        </div>

        {/* --7. Name this bar */}
        {/* <div className="flex flex-row justify-center">
          <div className="mt-2 flex justify-center">
            <Button
              type="submit"
              variant="contained"
              href="/setyourgrind"
              sx={{ mt: 1, mb: 2, backgroundColor: 'teal', color: 'white' }}>
              Next
            </Button>
          </div>
        </div> */}
      </div>
    </>
  );
}
export default WhatsYourGoal;
