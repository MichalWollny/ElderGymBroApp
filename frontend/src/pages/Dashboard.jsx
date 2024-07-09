import { useEffect, useState } from 'react';
import UICardLarge from '../assets/components/UICardLarge';
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import gymLordImage from '../assets/images/gymLord.png';

const cards = [
  {
    image: gymLordImage,
    heading: 'Active workout heading endpoint',
    subheading: 'Active workout subheading endpoint',
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
    if (!userData || !userData.username) {
      checkUser(); // Fetch user data if not already available
    }
  }, [userData, checkUser]);

  const toggleElement = () => {
    setExpandedElements(!expandedElement);
  };

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
          if (todaysProgress?.exercisesOfTheDay?.length == activeWorkoutData.exercises.length) {
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

  return (
    <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 pt-20 text-gray-200">
      <div className="flex flex-row justify-center"></div>

      <div className="flex cursor-pointer flex-col justify-center">
        <div className="flex flex-col">
          <h1 className="cursor-default bg-gradient-to-br from-teal-500 to-green-800 bg-clip-text py-2 text-center font-cthulhumbus text-3xl font-medium leading-tight text-transparent sm:text-4xl md:text-5xl">
            Welcome Dear {userData.fullName || 'No Name'}
          </h1>
        </div>
        <div className="flex items-center justify-center">
          {(!workoutCompleted && (
            <button
              className="rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center"
              onClick={() => activateWorkout(activeWorkout)}>
              Start Workout!
            </button>
          )) || (
            <div className="mb-2 w-4/5 rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 p-2 text-center font-cthulhumbus text-2xl">
              <span className="text-xl">Yor workout for the the day is complete!</span> <br />
              <span>Cthulhu is pleased!</span>
            </div>
          )}
        </div>
      </div>

      <h2 className="px-4 font-cthulhumbus">Active workout</h2>

      {cards.map((card, index) => (
        <UICardLarge key={index} image={card.image} heading={card.heading} className="" subheading={card.subheading} />
      ))}

      <br />
      <div className="flex flex-col items-start justify-start">
        Expander Tryout
        <button className="px-4 font-cthulhumbus" onClick={toggleElement}>
          Cult News
        </button>
        {expandedElement && (
          <>
            <p>1 Lorem ipsum dolor sit amet.</p>
            <div className="carousel-item">
              <img className="w-24" src={gymLordImage} alt="Pizza" />
            </div>
            <p>2 In dolorum veritatis dolores.</p>
            <div className="carousel-item">
              <img className="mx-2 w-24" src={gymLordImage} alt="Pizza" />
            </div>
            <p>3 Odit necessitatibus totam.</p>
            <div className="carousel-item">
              <img className="mx-2 w-24" src={gymLordImage} alt="Pizza" />
            </div>
          </>
        )}
      </div>
      <br />

      <h2 className="px-4 py-2 font-cthulhumbus">Cult News</h2>
      <div className="flex flex-col">
        <div className="carousel carousel-center w-full">
          <div id="item1" className="carousel-item">
            <img className="w-40" src={gymLordImage} alt="Pizza" />
          </div>

          <div id="item2" className="carousel-item">
            <img className="w-40" src={gymLordImage} alt="Pizza" />
          </div>

          <div id="item3" className="carousel-item">
            <img className="w-40" src={gymLordImage} alt="Pizza" />
          </div>

          <div id="item4" className="carousel-item">
            <img className="w-40" src={gymLordImage} alt="Pizza" />
          </div>
        </div>

        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Dashboard;
