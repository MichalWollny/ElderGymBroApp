import { useAuth } from '../context/AuthProvider';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import UserActiveExercise from './UserActiveExercise';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'daisyui/dist/full.css';
import useFetchData from '../utils/FetchData';

const workoutImages = import.meta.glob('../assets/images/workouts/*.jpg', { eager: true });

const getImage = (images, name) => {
  const key = Object.keys(images).find((key) => key.includes(name.replace(/ /g, '_')));
  return key ? images[key].default : null;
};

const SetActiveWorkout = () => {
  const { hardcodedWorkouts } = useFetchData();
  const { userData, checkUser } = useAuth();
  const [activeWorkout, setActiveWorkout] = useState({ exercises: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeExercise, setActiveExercise] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [completedExercises, setCompletedExercises] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!userData || !userData.username) {
      checkUser();
    }
  }, [userData, checkUser]);

  useEffect(() => {
    const setActiveWorkout = async () => {
      setIsLoading(true);
      try {
        const response = await axios.patch(
          `${import.meta.env.VITE_API_URL}/me/workouttracking/setActiveWorkout`,
          { workoutId: `1` },
          {
            withCredentials: true,
          },
        );

        if (response.data.activeWorkout.exercises.length > 0) {
          setSelectedIndex(0);
          setActiveExercise(response.data.activeWorkout.exercises[0]);
        }
      } catch (error) {
        setError(error.message);
        console.error(error);
        setIsLoading(false);
        toast.error('Failed to load active workout');
      }
    };

    if (userData && userData.username) {
      setActiveWorkout();
    }
  }, [userData, checkUser]);

  const handleExerciseClick = (exercise, index) => {
    setActiveExercise(exercise);
    setSelectedIndex(index);
  };

  const handleAfterChange = (current) => {
    handleExerciseClick(hardcodedWorkouts.id[current], current);
  };

  //   console.log(current);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
    arrows: false,
    accessibility: true,
    focusOnSelect: true,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20%',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20%',
        },
      },
    ],
  };

  console.log(hardcodedWorkouts);

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-black to-blue-950 pt-0 font-cthulhumbus">
      <div className="mt-6 w-full max-w-screen-sm">
        <h2 className="px-4 py-2 text-center font-cthulhumbus text-xl text-white">Choose your workout:</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="pb-6">
            <Slider {...settings} className="max-w-full" ref={sliderRef}>
              {hardcodedWorkouts.map((workout, index) => (
                <div
                  key={workout.id || index}
                  id={`item-${index}`}
                  className={`carousel-item flex flex-col items-center px-2 ${index === selectedIndex ? 'selected' : ''}`}
                  onClick={() => handleExerciseClick(workout, index)}>
                  <img
                    src={getImage(workoutImages, workout.name)}
                    alt={workout.name}
                    className="rounded-t-lg shadow-lg"
                  />

                  <button className="mb-2 h-auto w-4/5 rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 p-2 text-center font-cthulhumbus text-xl">
                    Activate Workout
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default SetActiveWorkout;
