import React, { useState, useEffect } from 'react';
import { BsFillPlayFill, BsPauseFill, BsStopFill } from 'react-icons/bs';
import Timer from './Timer';

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  // End of Time
  const [showEndScreen, setShowEndScreen] = useState({
    show: false,
    message: 'Break is over get back to work!',
  });

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((milliseconds) => milliseconds - 1);
        } else if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
          setMilliseconds(99);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
          setMilliseconds(99);
        } else {
          // Timer has reached 0:0:0
          // setShowEndScreen({ ...showEndScreen, show: true });
          setIsRunning(false);
          clearInterval(interval);
        }
      }, 10);
    }

    if (minutes === 0 && seconds === 0 && milliseconds === 0) {
      // setShowEndScreen({ ...showEndScreen, show: true });
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, isRunning]);

  // Start Pause & Stop functions
  // Start
  function startTimer() {
    if (minutes !== 0 || seconds !== 0 || milliseconds !== 0) {
      setIsRunning(true);
      // setShowEndScreen({ ...showEndScreen, show: false });
    } else {
      window.alert('Add Time.');
    }
  }

  // Pause
  const pauseTimer = () => {
    setIsRunning(false);
  };

  // Stop
  const stopTimer = () => {
    resetTimer();
    setShowEndScreen({ ...showEndScreen, show: false });
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMilliseconds(0);
    setSeconds(30);
    setMinutes(1);
  };

  // Handlers
  const changeSeconds = (e) => {
    setSeconds(e.target.value);
  };
  const changeMinutes = (e) => {
    setMinutes(e.target.value);
  };

  return (
    <div className="container mx-auto flex flex-col text-center">
      {/* {showEndScreen.show ? (
        <h1 className="text-4xl font-medium my-12 text-light">
          {showEndScreen.message}
        </h1>
      ) : null} */}

      <Timer
        milliseconds={milliseconds}
        seconds={seconds}
        minutes={minutes}
        changeSeconds={changeSeconds}
        changeMinutes={changeMinutes}
        resetTimer={resetTimer}
      />
      <div className="flex flex-row items-center justify-center">
        {!isRunning && (
          <button
            className="m-1 flex items-center justify-center rounded bg-blue-600 px-3 py-1 text-xl font-medium text-white shadow-md transition ease-in-out hover:bg-blue-500"
            onClick={startTimer}>
            <BsFillPlayFill />
          </button>
        )}
        {isRunning && (
          <button
            className="m-1 flex items-center justify-center rounded bg-yellow-500 px-3 py-1 text-xl font-medium text-black shadow-md transition ease-in-out hover:bg-yellow-400"
            onClick={pauseTimer}>
            <BsPauseFill />
          </button>
        )}
        <button
          className="m-1 flex items-center justify-center rounded bg-red-600 px-3 py-1 text-xl font-medium text-white shadow-md transition ease-in-out hover:bg-red-500"
          onClick={stopTimer}>
          <BsStopFill />
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
