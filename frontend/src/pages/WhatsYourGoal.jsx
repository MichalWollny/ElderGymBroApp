import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';

// images
// import cthuhluCave from '/src/assets/images/cthuhluCave.png';
import whatsyourgoal from '../assets/images/chosegoal.jpg';

//components
import UICard from '/src/assets/components/UICard';

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
        {/* <div className="flex flex-row justify-center text-gray-200">
          <img src={cthuhluCave} alt="Landing Page Image" className="m-2 max-w-10" />
        </div> */}
        <Card sx={{ maxWidth: '100vw' }}>
          <CardMedia
            sx={{
              width: '100vw', // take up full width
              height: '28vh',
              objectFit: 'fit', // make the image cover the entire container
            }}
            image={whatsyourgoal}
            title="Whats-your-Goal"
          />
        </Card>

        {/* -- Content section */}
        <div className="flex flex-wrap justify-center">
          {/* Cards grid */}
          <div className="grid grid-flow-row auto-rows-max grid-cols-2 p-4">
            {cards.map((card, index) => (
              <UICard
                class="md:scale-150"
                key={index}
                image={card.image}
                heading={card.heading}
                subheading={card.subheading}
              />
            ))}
          </div>
        </div>

        {/* --7. Name this bar */}
        <div className="flex flex-row justify-center">
          <div className="-mt-8 flex justify-center">
            <Button
              type="submit"
              variant="contained"
              href="/setyourgrind"
              sx={{ mt: 3, mb: 2, backgroundColor: 'teal', color: 'white' }}>
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
export default WhatsYourGoal;
