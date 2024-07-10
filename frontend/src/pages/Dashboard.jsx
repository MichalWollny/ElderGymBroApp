import { useEffect, useState } from 'react';
import UICardLarge from '../assets/components/UICardLarge';
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel2.css';
import SetActiveWorkout from './SetActiveWorkout';

// Importing images directly
import beginnerFullbodyWorkoutImage from '../assets/images/workouts/Beginner_Fullbody_Workout.jpg';
import firstLoginImage from '../assets/images/firstlogin.jpeg';
import firstPlanCreatedImage from '../assets/images/firstplancreated.jpeg';
import weekendWorkoutImage from '../assets/images/weekendworkout.jpeg';

const initialActiveWorkout = [
  {
    // Maximize Your Strength Card
    image: beginnerFullbodyWorkoutImage,
    heading: 'Beginner Fullbody Workout',
    subheading: 'A lone tribute to the muscle deity',
  },
];

const initialCards = [
  {
    // Maximize Your Strength Card
    image: firstLoginImage,
    heading: 'Mike',
    subheading: 'First Incantation of Fitness',
  },
  {
    // Built Up Your Stamina Card
    image: firstPlanCreatedImage,
    heading: 'Malte',
    subheading: 'First Incantation of Fitness',
  },
  {
    // Grow Your Muscles Card
    image: weekendWorkoutImage,
    heading: 'Walter',
    subheading: 'Weekend Workout Cultist',
  },
];

const Dashboard = ({ workouts }) => {
  const { userData, checkUser } = useAuth();
  const navigate = useNavigate();
  const [activeWorkout, setActiveWorkout] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [workoutExercises, setWorkoutExercises] = useState([]);
  const [todaysDoneExercises, setTodaysDoneExercises] = useState([]);
  const [workoutCompleted, setWorkoutCompleted] = useState(false);

  useEffect(() => {
    checkUser(); // Fetch the latest user data when the component is loaded
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getActiveWorkout = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/me/workouttracking/getActiveWorkout`, {
          withCredentials: true,
        });

        const activeWorkoutData = response.data.activeWorkout;
        setActiveWorkout(activeWorkoutData || {});
        setWorkoutExercises(activeWorkoutData?.exercises || []);

        if (userData && activeWorkoutData) {
          const today = new Date().toISOString().split('T')[0]; // Ensure date comparison format is correct
          // console.log('Today:', today);

          // Log userData to check the structure
          // console.log('UserData:', userData);

          const progressTracking = userData.progressTracking?.find(
            (progressTracking) => progressTracking.workoutId === activeWorkoutData.id,
          );

          // console.log('ProgressTracking:', progressTracking);

          const todaysProgress = progressTracking?.progress?.find((day) => {
            const dayDate = new Date(day.day).toISOString().split('T')[0];
            // console.log('Comparing:', dayDate, 'with', today);
            return dayDate === today;
          });

          // console.log('TodaysProgress:', todaysProgress);

          setTodaysDoneExercises(todaysProgress?.exercisesOfTheDay || []);

          // Check if the workout is completed
          if (todaysProgress?.exercisesOfTheDay?.length === activeWorkoutData.exercises.length) {
            setWorkoutCompleted(true);
          } else {
            setWorkoutCompleted(false);
          }
        }
        // console.log(workoutCompleted);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching active workout:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userData) {
      getActiveWorkout();
    }
  }, [userData, workoutCompleted]);

  const activateWorkout = async (activeWorkout) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/me/workouttracking/addWorkoutProgress`,
        {
          workoutId: `${activeWorkout.id}`,
          progress: [],
        },
        {
          withCredentials: true,
        },
      );

      // Navigate to /userworkout after successful tracking update
      navigate('/userworkout');
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    // Show loading state while fetching data
    return <div>Loading...</div>;
  }

  if (error) {
    // Show error state
    return <div>Error: {error}</div>;
  }

  if (!userData || !userData.username) {
    // Show loading state while fetching data
    return <div>Loading user data...</div>;
  }

  // Slider settings
  const settings = {
    className: 'center',
    dots: true,
    infinite: false, // Make the slider non-infinite
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30%', // Decrease padding to make images smaller
    arrows: false, // Hide the default arrows
    accessibility: true, // Enable keyboard navigation
    focusOnSelect: true, // Focus on select to enable keyboard interaction
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          centerMode: true,
          centerPadding: '30%', // Decrease padding to make images smaller
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30%', // Decrease padding to make images smaller
        },
      },
    ],
  };

  return (
    <div className="container mx-auto flex min-h-screen flex-col bg-gradient-to-br from-black to-blue-950 p-4 pb-24 text-white">
      <div className="mt-16 flex flex-col items-center justify-center">
        <div className="flex cursor-pointer flex-col items-center justify-center">
          <div className="flex flex-col items-center">
          <h2 className="pt-2 sm: md:pt-8 cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center font-cthulhumbus text-3xl font-medium leading-tight text-transparent md:text-4xl">
              Welcome Dear <br /> {userData.fullName}!
            </h2>
          </div>
        </div>

        {/* <div className="mt-2 w-full">
          <hr className="my-4 w-full border-gray-500 opacity-50" />
          <h2 className="cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text pt-2 text-center font-cthulhumbus text-3xl font-medium leading-tight text-transparent md:text-4xl">
            Active Workout
          </h2>
        </div> */}
        <hr className="my-4 w-full border-gray-500 opacity-50" />
        <div className="w-full px-4">
          {' '}
          {/* Wrap the SetActiveWorkout component */}
          <SetActiveWorkout />
        </div>

        <div className="mt-0 flex items-center justify-center">
          {!workoutCompleted ? (
            <button
              className="rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 p-3 text-center"
              onClick={() => activateWorkout(activeWorkout)}>
              Start Workout
            </button>
          ) : (
            <div className="mb-2 w-4/5 rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 p-4 text-center font-cthulhumbus text-2xl">
              <span className="text-xl">Your workout for the day is complete!</span> <br />
              <span>Cthulhu is pleased!</span>
            </div>
          )}
        </div>

        <div className="mt-8 w-full">
          <hr className="my-4 w-full border-gray-500 opacity-50" />
          <h2 className="cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center font-cthulhumbus text-3xl font-medium leading-tight text-transparent md:text-4xl">
            Other Cultists&apos; Achievements
          </h2>
        </div>

        <div className="mt-4 w-full px-4">
          <Slider {...settings}>
            {initialCards.map((card, index) => (
              <div key={index} className="carousel-item">
                <img src={card.image} alt={card.heading} className="mx-auto rounded-lg" />
                <h3 className="text-center text-xl font-medium">{card.heading}</h3>
                <p className="text-center text-sm">{card.subheading}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
