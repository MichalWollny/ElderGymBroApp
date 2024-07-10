import { useAuth } from '../context/AuthProvider';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import UserActiveExercise from './UserActiveExercise';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import Confetti from 'react-confetti';
import doneImage from '../assets/images/finished.png';
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
    const getActiveWorkout = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/me/workouttracking/getActiveWorkout`, {
          withCredentials: true,
        });
        setActiveWorkout(response.data.activeWorkout);
        setIsLoading(false);
        if (response.data.activeWorkout.exercises.length > 0) {
          setSelectedIndex(0);
          setActiveExercise(response.data.activeWorkout.exercises[0]);
        }
      } catch (error) {
        setError(error.message);
        console.error(error);
        setIsLoading(false);
      }
    };

    if (userData && userData.username) {
      getActiveWorkout();
    }
  }, [userData]);

  const handleExerciseClick = (exercise, index) => {
    setActiveExercise(exercise);
    setSelectedIndex(index);
  };

  const handleAfterChange = (current) => {
    handleExerciseClick(activeWorkout.exercises[current], current);
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
        {' '}
        {/* Adjust margin to make space for the progress bar */}
        <h2 className="px-4 py-2 text-center font-cthulhumbus text-xl text-white">Exercise List</h2>
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
                  {/* <img
                    src={`../src/assets/images/Exercises/${workout.name.replace(/ /g, '_')}/images/0.jpg`}
                    alt={exercise.name}
                    className={`h-auto w-full max-w-xs rounded-md ${completedExercises.includes(index) ? 'grayscale' : ''}`}
                  /> */}
                  <img
                    src={getImage(workoutImages, hardcodedWorkouts.name)}
                    alt={hardcodedWorkouts.name}
                    className="rounded-t-lg shadow-lg"
                  />
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
