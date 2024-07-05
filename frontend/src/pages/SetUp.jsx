import setUp from '../assets/images/startYourJourney.jpeg';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import CardMedia from '@mui/material/CardMedia';

function SetUp() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-gray-200">
        {/* window bar */}
        <div className="flex flex-row justify-start bg-gray-950">
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
        <Card sx={{ maxWidth: '100vw' }}>
          <CardMedia
            sx={{
              width: '100vw', // take up full width
              height: '50vh', // take up half height
              objectFit: 'cover', // make the image cover the entire container
            }}
            image={setUp}
            title="start-your-journey"
          />
        </Card>
        <div>
          <p className="text-teal mt-4 text-center text-4xl font-medium text-teal-800">
            Consistency Is <br /> the Key To progress.
            <br /> Don't Give Up!
          </p>
        </div>
        <div className="mt-4 bg-teal-600 p-4">
          <p className="text-center font-cthulhumbus text-sm leading-7 tracking-wide text-slate-300">
            "Embrace the struggle, for true power awakens in perseverance. The void rewards the relentless!"
          </p>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            variant="contained"
            href="/startyourjourney"
            sx={{ mt: 4, mb: 2, backgroundColor: 'teal', color: 'white' }}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default SetUp;
