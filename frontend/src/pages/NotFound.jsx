import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotFoundImage from '../assets/images/404.avif';
import Shoggoth from '../assets/images/workouts/shoggoth.webp';

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-svh bg-black text-gray-200">
        {/* window bar */}
        <div className="flex flex-row justify-start bg-black">
          {/* icon button container*/}
          <div className="flex flex-row">
            {/* link container*/}
            <div className="flex flex-row justify-center text-teal-100">
              <button onClick={() => navigate('/')} className="m-2 font-semibold text-teal-600">
                Home
              </button>
            </div>
          </div>
        </div>

        {/* -- 1. Page title goes here --*/}
        <div className="flex flex-row justify-center">
          <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus text-4xl font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            404 - Not Found
          </h1>
        </div>

        {/* -- 3. Name this bar */}
        <div className="flex flex-row justify-center">
          <img src={NotFoundImage} alt="404 not found" />
        </div>

        {/* --6. Wrap flex box for tiles*/}
        <div className="flex flex-wrap justify-center bg-green-900">{/* --7. Add content here-- */}</div>

        <div className="bg-black">
          {/* Button */}
          <div className="flex flex-row justify-center">
            <button
              onClick={() => navigate('/home')}
              className="mt-2 rounded-full border border-white bg-pink-900 px-4 py-2 text-white transition-transform hover:scale-110">
              Go Back
            </button>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            <p>or be digested by Shoggoth</p>
            <img src={Shoggoth} alt="404 not found" className="-mt-11 scale-75" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
