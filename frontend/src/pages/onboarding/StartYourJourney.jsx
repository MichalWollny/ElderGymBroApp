import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

// images
import startJourney from '../../assets/images/startjourney.jpeg';

function StartYourJourney() {
  return (
    <>
      <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 text-gray-200">
        {/* window bar */}
        <div className="flex flex-row justify-start from-black to-blue-950">
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
                  className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* --1. Page title goes here --*/}
        <div className="flex flex-row justify-center">
          <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            Start Your Journey
          </h1>
        </div>

        {/* Image bar */}
        <Card sx={{ maxWidth: '100vw' }}>
          <CardMedia
            sx={{
              width: '100vw', // take up full width
              height: '28vh',
              objectFit: 'cover', // make the image cover the entire container
            }}
            image={startJourney}
            title="start-your-journey"
          />
        </Card>

        {/* Content bar*/}
        <div className="flex flex-wrap justify-center">{/* -- 5. grid-flow-row auto-rows-max -- */}</div>

        {/* --7. Name this bar */}
        <div className="flex flex-row justify-center">
          <div className="mt-2 flex justify-center">
            <Button
              type="submit"
              variant="contained"
              href="/whatsyourgoal"
              sx={{ mt: 1, mb: 2, backgroundColor: 'teal', color: 'white' }}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default StartYourJourney;
