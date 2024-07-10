import { useAuth } from '../context/AuthProvider';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import UserActiveExercise from './UserActiveExercise';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel2.css';
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeExercise, setActiveExercise] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0); // Initialize selectedIndex to 0
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [activeWorkout, setActiveWorkoutState] = useState(null);

  useEffect(() => {
    if (!userData || !userData.username) {
      checkUser();
    }
  }, [userData, checkUser]);

  useEffect(() => {
    if (userData && userData.username) {
      setIsLoading(false);
    }
  }, [userData]);

  useEffect(() => {
    const updateActiveWorkout = async () => {
      setIsLoading(true);
      try {
        const response = await axios.patch(
          `${import.meta.env.VITE_API_URL}/me/workouttracking/setActiveWorkout`,
          { workoutId: hardcodedWorkouts[selectedIndex].id },
          {
            withCredentials: true,
          },
        );

        if (response.data.activeWorkout && response.data.activeWorkout.exercises.length > 0) {
          setActiveWorkoutState(response.data.activeWorkout.id);
        }
      } catch (error) {
        setError(error.message);
        console.error(error);
        setIsLoading(false);
        // toast.error('Failed to load active workout');
      }
    };

    if (hardcodedWorkouts.length > 0) {
      updateActiveWorkout();
    }
  }, [selectedIndex, hardcodedWorkouts]);

  const handleWorkoutClick = (exercise, index) => {
    setActiveExercise(exercise);
    setSelectedIndex(index);
    setCurrentSlide(index);
  };

  const handleAfterChange = (current) => {
    handleWorkoutClick(hardcodedWorkouts[current], current);
  };

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
    initialSlide: selectedIndex, // Set initialSlide to selectedIndex
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

  return (
    <div className="flex flex-col items-center pb-2 font-cthulhumbus">
      <div className="mt-0 w-full max-w-screen-sm">
        <h2 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text px-4 py-2 pt-2 text-center font-cthulhumbus text-3xl font-medium leading-tight text-transparent md:text-4xl">
          Choose your workout:
        </h2>

        <div className="pb-6">
          <Slider {...settings} className="max-w-full" ref={sliderRef}>
            {hardcodedWorkouts.map((workout, index) => (
              <div
                key={workout.id || index}
                id={`item-${index}`}
                className={`carousel-item flex flex-col items-center px-2 ${index === selectedIndex ? 'selected' : ''}`}
                onClick={() => handleWorkoutClick(workout, index)}>
                <img
                  src={getImage(workoutImages, workout.name)}
                  alt={workout.name}
                  className="rounded-t-lg shadow-lg"
                />
                <p className="mt-2 text-center text-xs text-white">{workout.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SetActiveWorkout;
