import growmusclesvg from '../assets/icons/svg/flexedbiceps.svg';

import Button from '@mui/material/Button';

// images
// import cthuhluCave from '/src/assets/images/cthuhluCave.png';
import whatsyourgoal from '../assets/images/chosegoal.jpg';

const cards = [
  {
    // Maximize Your Strength Card
    image: '/src/assets/images/grow muscle.jpg',
    heading: 'Grow Your Muscles',
    subheading: '4 - 10 Reps',
    // other props...
  },
  {
    // Built Up Your Stamina Card
    image: '/src/assets/images/buildupyourstamina.jpg',
    heading: 'Built Up Your Stamina',
    subheading: '15 - 20+ Reps',
    // other props...
  },
  {
    // Grow Your Muscles Card
    image: '/src/assets/images/maximizeyourstrength.jpg',
    heading: 'Maximize Your Strength',
    subheading: '8 - 15 Reps',
    // other props...
  },
];

function Testpage() {
  return (
    <>
      <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 text-gray-200">
        {/* window bar */}
        <div className="flex flex-row justify-start from-black to-blue-950">
          {/* icon button container*/}
          <div className="flex flex-row">
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
        </div>

        {/* Page title bar */}
        <div className="flex flex-row justify-center">
          <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            What's your goal
          </h1>
        </div>

        {/* Image bar */}

        {/* -- Content section */}
        <div className="flex flex-wrap justify-center">
          {/* Cards grid */}
          <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-4 p-4">
            {cards.map((card, index) => (
              <div key={index} className="m-2 h-full">
                <div className="h-auto transform rounded-t-lg border-4 border-solid border-teal-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 object-cover transition-transform duration-300 ease-in-out hover:scale-110">
                  <img src={card.image} alt={card.heading} className="h-auto w-64 rounded object-cover" />
                  <div className="flex h-auto flex-grow flex-col items-center border-2 border-solid border-pink-800 p-2 text-white">
                    {/* <h3 className="font-cthulhumbus">{card.heading}</h3> */}

                    <p className="text-center font-cthulhumbus text-xl text-teal-500">{card.subheading}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <ul className="steps">
            <li className="step text-xs">Start your journey</li>
            <li className="step step-info text-xs">What's your goal</li>
            <li className="step text-xs">Set your grind</li>
          </ul>
        </div>

        {/* --7. Name this bar */}
        <div className="flex flex-row justify-center">
          <div className="mt-2 flex justify-center">
            <Button
              type="submit"
              variant="contained"
              href="/setyourgrind"
              sx={{ mt: 1, mb: 2, backgroundColor: 'teal', color: 'white' }}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testpage;
