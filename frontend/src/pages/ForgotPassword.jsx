import React from 'react';
import cthulupassword from '../assets/images/cthulupassword.png';

function ForgotPassword() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* window bar */}
      <div className="flex flex-row justify-start bg-gray-900">
        {/* icon button container*/}
        <div className="flex flex-row">
          {/* link container*/}
          <div className="flex flex-row justify-center text-teal-100">
            <a href="/" className="m-2 font-semibold text-teal-600">
              {/* icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-row justify-center">
        <h1 className="p-2 text-center font-cthulhumbus text-3xl font-medium leading-tight text-teal-800 sm:text-3xl md:text-4xl">
          Forgot Password{' '}
        </h1>
      </div>
      <div className="mt-10 flex flex-col place-items-center text-center">
        <p className="font-cthulhumbus text-xl">Forgot Password?</p>
        <img src={cthulupassword} alt="Cthulu Forgot Password" className="mt-9 size-72" />
        <p className="mt-4 text-xs font-light tracking-wide text-slate-400">
          No problem! Please enter your e-mail address to receive a <br /> link to reset your password. Follow the
          instructions in the <br /> email to create a new password.
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
