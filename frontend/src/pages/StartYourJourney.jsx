

import Button from '@mui/material/Button';

// images
import startYourJourney from '/src/assets/images/startYourJourney.jpeg';

//components
import UICard from '/src/assets/components/UICard'

const cards = [
  {
    // Gender card
    image: '/src/assets/icons/svg/gendermark.svg',
    heading: 'Gender',
    subheading: 'Reveal your cosmic entity',
    // other props...
  },
  {
    // Gym experience card
    image: '/src/assets/icons/svg/gymexperience.svg',
    heading: 'Gym Experience',
    subheading: 'Recite your story of suffering',
    // other props...
  },
  {
    // Grow your muscles card
    // image: '/src/assets/icons/svg/equipment.svg',
    image: '/src/assets/icons/svg/equipment.svg',
    heading: 'Equipment',
    subheading: 'Select your device of torture',
    // other props...
  },
];
function StartYourJourney() {
  return (
    <>
    <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 text-gray-200">
      {/* window bar */}
      <div className="flex flex-row justify-start bg-gray-900">
        {/* icon button container*/}
        <div className="flex flex-row">
          {/* link container*/}
          <div className="flex flex-row justify-center text-teal-100">
            <a href="/" className="m-2 font-semibold text-teal-600">
              {/* icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </a>
          </div>
        </div>
      </div>

        {/* --1. Page title goes herer --*/}
        <div className="flex flex-row justify-center">
          <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            Start Your Journey
          </h1>
        </div>

        {/* Image bar */}
        <div className="flex flex-row justify-center text-gray-200">
          <img src={startYourJourney} alt="Landing Page Image" className="m-2 w-24" />
        </div>

        {/* Content bar*/}
        <div className="flex flex-wrap justify-center">
          {/* <div className="flex flex-wrap justify-center text-gray-200"></div> */}

        {/* -- 5. grid-flow-row auto-rows-max -- */}
        <div className="grid grid-flow-row p-4 -mt-4 auto-rows-max grid-cols-2">
              {cards.map((card, index) => (
              <UICard
              class="md:scale-150"
                key={index} 
                image={card.image} 
                heading={card.heading} 
                subheading={card.subheading}/>
              ))}
            </div>
          </div>

          {/* --7. Name this bar */}
          <div className="flex flex-row justify-center">
            <div className="-mt-8 flex justify-center">
              <Button type="submit" variant="contained" href="/whatsyourgoal" sx={{ mt: 3, mb: 2, backgroundColor: 'teal', color: 'white' }}>
              Next
              </Button>
              {/* <button className="rounded-full border border-white bg-pink-900 px-4 py-2 text-white">
                <a href="/whatsyourgoal">Next</a>
              </button> */}
            </div>
          </div>

      </div>
    </>
  );
}
export default StartYourJourney;
