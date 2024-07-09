import { useEffect, useState } from 'react';
import UICardLarge from '../assets/components/UICardLarge';
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import React from 'react';
import UICard from '../assets/components/UICard';

const activeworkout = [
  {
    // Maximize Your Strength Card
    image: '/src/assets/images/workouts/Beginner_Fullbody_Workout.jpg',
    heading: 'Beginner Fullbody Workout',
    subheading: 'A lone tribute to the muscle deity',
    // other props...
  },
];

const cards = [
  {
    // Maximize Your Strength Card
    image: '/src/assets/images/firstlogin.jpeg',
    heading: 'Mike',
    subheading: 'First Incantation of Fitness',
    // other props...
  },
  {
    // Built Up Your Stamina Card
    image: '/src/assets/images/firstplancreated.jpeg',
    heading: 'Malte',
    subheading: 'First Incantation of Fitness',
    // other props...
  },
  {
    // Grow Your Muscles Card
    image: '/src/assets/images/weekendworkout.jpeg',
    heading: 'Walter',
    subheading: 'Weekend Workout Cultist',
    // other props...
  },
];

const Dashboard = () => {
  const { userData, checkUser } = useAuth();
  const [expandedElement, setExpandedElements] = useState(null);
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
          const today = new Date().toISOString().split('T')[0];
          console.log('Today:', today);

          // Log userData to check the structure
          console.log('UserData:', userData);

          const progressTracking = userData.progressTracking?.find(
            (progressTracking) => progressTracking.workoutId === activeWorkoutData.id,
          );

          console.log('ProgressTracking:', progressTracking);

          const todaysProgress = progressTracking?.progress?.find((day) => {
            const dayDate = new Date(day.day).toISOString().split('T')[0];
            console.log('Comparing:', dayDate, 'with', today);
            return dayDate === today;
          });

          console.log('TodaysProgress:', todaysProgress);

          setTodaysDoneExercises(todaysProgress?.exercisesOfTheDay || []);

          // Check if the workout is completed
          if (todaysProgress?.exercisesOfTheDay?.length === activeWorkoutData.exercises.length) {
            setWorkoutCompleted(true);
          } else {
            setWorkoutCompleted(false);
          }
        }
        console.log(workoutCompleted);
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
  }, [userData]);

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

  // UICard large settings
  var settingslarge = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
  };

  // UICard small settings
  var settingssmall = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '35%',
  };

  return (
    <div className="container mx-auto mb-8 flex min-h-svh flex-col bg-gradient-to-br from-black to-blue-950 p-4">
      <div className="mt-16 flex flex-col justify-center">
        <div className="flex cursor-pointer flex-col justify-center">
          <div className="flex flex-col">
            <h1 className="cursor-default bg-gradient-to-br from-teal-500 to-green-800 bg-clip-text py-2 text-center font-cthulhumbus text-3xl font-medium leading-tight text-transparent sm:text-4xl md:text-5xl">
              Welcome Dear <br /> {userData.fullName}!
            </h1>
          </div>
          <div className="flex items-center justify-center">
            {(!workoutCompleted && (
              <button
                className="rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 p-2 text-center"
                onClick={() => activateWorkout(activeWorkout)}>
                Start Workout!
              </button>
            )) || (
              <div className="mb-2 w-4/5 rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 p-2 text-center font-cthulhumbus text-2xl">
                <span className="text-xl">Your workout for the day is complete!</span> <br />
                <span>Cthulhu is pleased!</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text pt-2 text-start font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            Active workout
          </h2>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-row">
            {activeworkout.map((activeworkout, index) => (
              <div key={index}>
                <UICardLarge
                  image={activeworkout.image}
                  heading={activeworkout.heading}
                  subheading={activeworkout.subheading}
                />
              </div>
            ))}
          </div>
        </div>

        <h2 className="cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text text-start font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
          Workout Selection
        </h2>

        <div className="px-4">
          <Slider {...settingslarge}>
            {cards.map((card, index) => (
              <div key={index}>
                <UICardLarge image={card.image} heading={card.heading} subheading={card.subheading} />
              </div>
            ))}
          </Slider>
        </div>
        <br />
        <br />
        <div className="flex flex-col">
          <h2 className="cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text text-start font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            Other Cultists&apos; Achievments
          </h2>
        </div>
        <div className="px-4">
          <Slider {...settingssmall}>
            {cards.map((card, index) => (
              <div key={index}>
                <UICard image={card.image} heading={card.heading} subheading={card.subheading} />
              </div>
            ))}
          </Slider>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Dashboard;
