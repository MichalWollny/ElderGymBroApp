import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

// images
import cthulhuGrind from '/src/assets/images/cthulhuGrind.png';
import setgrind from '../assets/images/setgrind.jpeg';

//components
import UICard from '/src/assets/components/UICard';

const cards = [
  {
    // Maximize Your Strength Card
    image: '/src/assets/icons/svg/number1.svg',
    heading: 'per week',
    subheading: 'A lone tribute to the muscle deity',
    // other props...
  },
  {
    // Built Up Your Stamina Card
    image: '/src/assets/icons/svg/number2.svg',
    heading: 'per week',
    subheading: 'Strengthening tributes',
    // other props...
  },
  {
    // Grow Your Muscles Card
    image: '/src/assets/icons/svg/number3.svg',
    heading: 'per week',
    subheading: 'A ritual of unleashing',
    // other props...
  },
  {
    // Grow Your Muscles Card
    image: '/src/assets/icons/svg/number4.svg',
    heading: 'per week',
    subheading: 'Echoes of my power in your veins!',
    // other props...
  },
];

function SetYourGrind() {
  return (
    <>
      <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 text-gray-200">
        {/* window bar */}
        <div className="flex flex-row justify-start from-black to-blue-950">
          {/* icon button container*/}
          <div className="flex flex-row">
            {/* link container*/}
            <div className="flex flex-row justify-center text-teal-100">
              <a href="/whatsyourgoal" className="m-2 font-semibold text-teal-600">
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

        {/* Title bar */}
        <div className="flex flex-row justify-center">
          <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            Set Your Grind
          </h1>
        </div>

        {/* Image bar */}
        {/* <div className="flex flex-row justify-center">
          <img src={cthulhuGrind} alt="Landing Page Image" className="m-2 w-36" />
        </div> */}
        <Card sx={{ maxWidth: '100vw' }}>
          <CardMedia
            sx={{
              width: '100vw', // take up full width
              height: '28vh',
              objectFit: 'fit', // make the image cover the entire container
            }}
            image={setgrind}
            title="cthuluGrind"
          />
        </Card>

        {/* -- Content section */}
        <div className="flex flex-wrap justify-center">
          {/* -- 5. grid-flow-row auto-rows-max -- */}
          <div className="grid grid-flow-row auto-rows-max grid-cols-2 p-4">
            {cards.map((card, index) => (
              <UICard key={index} image={card.image} heading={card.heading} className="" subheading={card.subheading} />
            ))}
          </div>
        </div>

        {/* --7. Name this bar */}
        <div className="flex flex-row justify-center"></div>

        {/* --7. Name this bar */}
        <div className="flex flex-row justify-center">
          <div className="-mt-8 flex justify-center">
            <Button
              type="submit"
              variant="contained"
              href="/Profilerework"
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

export default SetYourGrind;
