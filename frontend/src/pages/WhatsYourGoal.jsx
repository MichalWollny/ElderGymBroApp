
// components
import UICard from './UICard';

// images
import cthuhluCave from '/src/assets/images/cthuhluCave.png';


const cards = [
  {
    // Maximize Your Strength Card
    image: '/src/assets/icons/svg/brandcthulhu.svg',
    heading: 'Maximize Your Strength',
    subheading: '4 - 10 Reps',
    // other props...
  },
  {
    // Built Up Your Stamina Card
    image: '/src/assets/icons/svg/heartadd.svg',
    heading: 'Built Up Your Stamina',
    subheading: '15 - 20+ Reps',
    // other props...
  },
  {
    // Grow Your Muscles Card
    image: '/src/assets/icons/svg/flexedbiceps.svg',
    heading: 'Grow Your Muscles',
    subheading: '8 - 15 Reps',
    // other props...
  },
];

function WhatsYourGoal() {
  return (
    <>
    <div className="min-h-svh bg-gradient-to-br from-black to-green-950 text-gray-200">
        {/* window bar */}
        <div className="flex flex-row justify-start bg-gray-900">
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
                  className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* --1. Choose your Ordeal bar--*/}
        <div className="flex flex-row justify-center">
          <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            Choose Your Ordeal
          </h1>
        </div>

        {/* Content bar*/}
        <div className="flex flex-row justify-center">
          <img src={cthuhluCave} alt="Landing Page Image" className="m-2 w-64" />
        </div>

        {/* Content bar */}
        <div className="flex flex-wrap justify-center">


          <div className="flex flex-wrap justify-center">
            {cards.map((card, index) => (
              <UICard 
              key={index} 
              image={card.image}
              heading={card.heading} 
              subheading={card.subheading} />
            ))}
            </div>
          </div>


        {/* Content section 3 */}
        <div className="flex flex-row justify-center">
          {/* 8. Add content here-- */}

        </div>

        {/* --7. Name this bar */}
        <div className="flex flex-row justify-center">
          <div className="mt-6 flex justify-center">
            <button className="rounded-full border border-white bg-pink-900 px-4 py-2 text-white">
              <a href="/setyourgrind">Next</a>
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default WhatsYourGoal;
