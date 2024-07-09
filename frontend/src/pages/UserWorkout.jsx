import { useAuth } from '../context/AuthProvider';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie
import UserActiveExercise from './UserActiveExercise';

const UserWorkout = () => {
  const { userData, checkUser } = useAuth();
  const [activeWorkout, setActiveWorkout] = useState({ exercises: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeExercise, setActiveExercise] = useState(null);

  useEffect(() => {
    if (!userData || !userData.username) {
      checkUser(); // Fetch user data if not already available
    }
  }, [userData, checkUser]);

  if (!userData || !userData.username) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  useEffect(() => {
    const getActiveWorkout = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/me/workouttracking/getActiveWorkout`, {
          withCredentials: true,
        });
        setActiveWorkout(response.data.activeWorkout);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        console.error(error);
        setIsLoading(false);
      }
    };
    getActiveWorkout();
  }, []);

  console.log('This is the active workout:', activeWorkout);

  const handleExerciseClick = (exercise) => (event) => {
    console.log('The chosen Exercise', exercise);
    setActiveExercise(exercise);
  };

  useEffect(() => {}, []);

  return (
    // Background Container
    <div className="container mx-auto mb-8 flex flex-col items-center bg-gradient-to-br from-black to-blue-950 bg-repeat-y pt-20 font-cthulhumbus">
      <div className="min-w-full bg-[url('../src/assets/images/mistBG.webp')] bg-repeat-x">
        <h2 className="px-4 py-2 font-cthulhumbus">Exercise List</h2>
        <div className="carousel-center flex h-full w-24 flex-row">
          {activeWorkout.exercises.map((exercise, index) => (
            <div
              key={exercise.id || index}
              id={`item-${index}`}
              className="carousel-item flex size-fit flex-col active:border-4 active:border-red-500"
              onClick={handleExerciseClick(exercise)}>
              <img
                src={`../src/assets/images/Exercises/${exercise.name.replace(/ /g, '_')}/images/0.jpg`}
                alt={exercise.name}
                className="h-auto w-20 rounded-md"
              />
              <p className="text-sm">{exercise.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        {/* <UserActiveExercise /> */}
        {activeExercise ? (
          <UserActiveExercise exercise={activeExercise} activeWorkout={activeWorkout} />
        ) : (
          <p>Choose an Exercise</p>
        )}
      </div>
    </div>
  );
};

export default UserWorkout;
