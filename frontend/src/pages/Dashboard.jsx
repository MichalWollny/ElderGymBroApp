//components
import { Box, LinearProgress, Typography } from '@mui/material';
import UICardLarge from '../assets/components/UICardLarge';
import UICard from '/src/assets/components/UICard'

const cards = [
  {
    // My total workouts card
    image: '/src/assets/icons/svg/energy.svg',
    heading: 'My total workouts',
    subheading: 'subheading',
    // other props...
  },
  {
    // My training weeks card
    image: '/src/assets/icons/svg/flame.svg',
    heading: 'My training weeks',
    subheading: 'subheading',
    // other props...
  },
  {
    // My active plan card
    image: '/src/assets/icons/svg/flash.svg',
    heading: 'My active plan',
    subheading: 'Subheading',
    // other props...
  },
  {
    // My trophies card
    image: '/src/assets/icons/svg/trophy.svg',
    heading: 'My trophies',
    subheading: 'subheading',
    // other props...
  },
];


function Dashboard() {

  return (
    <>
    <div class="container">
    <div className="flex flex-row justify-start bg-gray-900">
      <div className="flex flex-row justify-center text-teal-100">
        <a href="/setyourgrind" className="m-2 font-semibold text-teal-600">
          <svg xmlns="http://www.w3.org/2000/svg"
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

    {/* Title bar*/}
    <div className="flex flex-row justify-center">
      <h1 className="cursor-default bg-gradient-to-br p-4 from-white to-gray-400 bg-clip-text pt-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
        Dashboard
      </h1>
    </div>

        {/* Greetings bar */}
        <div className="my flex flex-col justify-center">
          {/* Greetings */}
          <div className="flex cursor-pointer flex-row justify-center">
            <div className="flex flex-col">
              {/* <h2 className="text-center text-xl font-semibold text-teal-700">-=|</h2> */}
              {/* <h2 className="text-center text-xl font-normal font-cthulhumbus italic text-teal-700">The infamous</h2> */}
              <h1 className="cursor-default bg-gradient-to-br from-teal-500 to-green-800 bg-clip-text pt-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-2xl md:text-4xl">
                Cthulhu Wishes You Death and Destruction,
              </h1>
              <br/>
              <h2 className="cursor-default bg-gradient-to-br from-yellow-950 to-yellow-500 bg-clip-text pt-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-2xl md:text-4xl">
                The infamous
              </h2>
              <h2 className="cursor-default bg-gradient-to-br from-teal-500 to-green-800 bg-clip-text py-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-4xl md:text-5xl">
                Lord of the Gym
              </h2>
              {/* <h2 className="text-center text-xl font-semibold text-teal-700">|=-</h2> */}
            </div>
          </div>
         </div> 

         <label htmlFor="camp-week">Choose a week in May or June:</label>
         <input type="week" name="week" id="camp-week" min="2018-W18" max="2018-W26" required />


    {/* Content grid */}
    <div className="relative grid min-h-svh place-content-center place-items-center overflow-hidden px-4 pt-5 text-gray-200 md:pt-10">  

        {cards.map((card, index) => (
          <UICardLarge
          key={index} 
          image={card.image}
          heading={card.heading} 
          className=""
          subheading={card.subheading}
           />
        ))}
    </div>

        {/* Content bar */}
      <div className="flex flex-wrap justify-center">

        {cards.map((card, index) => (
              <UICardLarge
              key={index} 
              image={card.image}
              heading={card.heading} 
              className=""
              subheading={card.subheading}
          />
        ))}
      </div>
      
    </div>
    </>
  );
}

export default Dashboard;
