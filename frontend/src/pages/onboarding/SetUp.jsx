import setUp from '../../assets/images/startYourJourney.jpeg';
import { useAuth } from '../../context/useAuth';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SetUp() {
  const navigate = useNavigate();
  const { checkUser, userData } = useAuth();

  const handleStartClick = async () => {
    try {
      // Ensure checkUser() is completed before proceeding
      await checkUser();

      // Proceed with the rest of the code
      const { gender, fitnessLevel, workoutAim } = await userData;

      // Scenario 1: All fields are filled
      if (gender !== '' && fitnessLevel !== '' && workoutAim !== '') {
        toast.success('🎉 All set up. Happy grinding.');
        navigate('/home');
      }
      // Scenario 2: Otherwise, at least one field is empty
      else {
        toast.info('🚀 Answer all questions');
        // No navigation in this case
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-teal-500">
        {/* window bar */}
        <div className="flex flex-row justify-start bg-gray-950">
          {/* icon button container*/}
          <div className="flex flex-row">
            {/* link container*/}
            <div className="flex flex-row justify-center text-teal-100">
              <a href="/gender" className="m-2 font-semibold text-teal-600 hover:text-teal-400">
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <Card sx={{ maxWidth: '100svw', background: 'transparent', boxShadow: 'none' }}>
          <CardMedia
            component="img"
            image={setUp}
            alt="Start Your Journey"
            sx={{
              width: '100svw',
              height: '45svh',
              objectFit: 'cover',
            }}
          />
        </Card>
        <div>
          <p className="text-teal mt-4 text-center text-4xl font-semibold text-teal-400">
            Consistency is <br /> the key to progress.
            <br /> Don&apos;t give up!
          </p>
        </div>
        <div className="mt-4 bg-teal-800 p-4">
          <p className="text-center font-cthulhumbus text-sm leading-7 tracking-wide text-slate-300">
            &quot;Embrace the struggle, for true power awakens in perseverance. The void rewards the relentless!&quot;
          </p>
        </div>

        {/* --7. Stepper */}
        <div className="mt-6 flex flex-col">
          <ul className="steps">
            <li className="step text-xs">
              <Link to="/startyourjourney">Start</Link>
            </li>
            <li className="step text-xs">
              <Link to="/setyourgrind">Grind?</Link>
            </li>
            <li className="step text-xs">
              <Link to="/whatsyourgoal">Goal?</Link>
            </li>

            <li className="step text-xs">
              <Link to="/gender">Beeing?</Link>
            </li>
            <li className="step step-info text-xs">Go!</li>
          </ul>
        </div>

        <div className="-mt-4 flex justify-center">
          <Button
            type="submit"
            variant="contained"
            onClick={handleStartClick}
            sx={{ mt: 4, mb: 2, backgroundColor: 'teal', color: 'white' }}>
            Start
          </Button>
        </div>
      </div>
    </>
  );
}

export default SetUp;
