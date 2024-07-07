import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

// images
import startJourney from '../../assets/images/startjourney.jpeg';

function StartYourJourney() {
  return (
    <>
      <div className="relative min-h-svh bg-gradient-to-br from-black to-blue-950 text-gray-200">
        {/* window bar */}
        <div className="flex flex-row justify-start from-black to-blue-950">
          {/* icon button container*/}
          <div className="flex flex-row">
            {/* link container*/}
            <div className="flex flex-row justify-center text-teal-100">
              <a href="/login" className="m-2 font-semibold text-teal-600">
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

        {/* --1. Page title goes here --*/}
        <div className="flex flex-row justify-center">
          <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus text-2xl font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            Start Your Journey
          </h1>
        </div>

        {/* Image */}
        <Card sx={{ maxWidth: '100svw' }}>
          <CardMedia
            sx={{
              width: '100svw', // take up full width
              height: '28svh',
              objectFit: 'cover', // make the image cover the entire container
            }}
            image={startJourney}
            className="rounded-lg"
            title="start-your-journey"
          />
        </Card>

        {/* Content bar*/}
        <div
          className="mt-4 flex flex-wrap justify-center rounded-lg bg-[#0a3d62] p-4 text-white shadow-lg"
          style={{
            fontFamily: 'Papyrus, fantasy',
            backgroundSize: 'cover',
          }}>
          <p className="text-center text-xl">
            Before you embark on this journey, we must first delve into the depths of your mortal shell with 3 quick
            questions.
            <br /> <br />
            Prepare yourself, for the ancient ones are watching!
            <br />
          </p>
        </div>

        {/* --7. Stepper */}
        <div className="absolute inset-x-0 bottom-4">
          <div className="flex flex-col">
            <ul className="steps">
              <li className="step step-info text-xs">Start</li>
              <li className="step text-xs">
                <Link to="/setyourgrind">Grind?</Link>
              </li>
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
          {/* --8. Next Button */}
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
      </div>
    </>
  );
}
export default StartYourJourney;
