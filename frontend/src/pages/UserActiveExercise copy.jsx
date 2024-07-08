import React from 'react';

const UserActiveExercise = () => {
  return (
    <div className="m-4 border-4 border-solid border-black bg-white p-4 font-cthulhumbus text-black">
      <h2>Exercise Name</h2>
      <p>Placeholder for Exercise Image</p>

      <div className="m-2 border-2 border-solid border-black p-2">
        <p className="pb-2">Set 1</p>
        <label>Weight</label>
        <input
          type="text"
          placeholder="Input Weight"
          className="block w-full rounded-md border-0 bg-white py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <label>Reps</label>
        <input
          type="text"
          placeholder="Rep Number"
          className="block w-full rounded-md border-0 bg-white py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="m-2 border-2 border-solid border-black p-2">
        <p className="pb-2">Set 2</p>
        <label>Weight</label>
        <input
          type="text"
          placeholder="Input Weight"
          className="block w-full rounded-md border-0 bg-white py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <label>Reps</label>
        <input
          type="text"
          placeholder="Rep Number"
          className="block w-full rounded-md border-0 bg-white py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="m-2 border-2 border-solid border-black p-2">
        <p className="pb-2">Set 3</p>
        <label>Weight</label>
        <input
          type="text"
          placeholder="Input Weight"
          className="block w-full rounded-md border-0 bg-white py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <label>Reps</label>
        <input
          type="text"
          placeholder="Rep Number"
          className="block w-full rounded-md border-0 bg-white py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <form action="submit">
        <button
          type="submit"
          className="rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-600 to-zinc-900 text-center">
          Complete Exercise
        </button>
      </form>
    </div>
  );
};

export default UserActiveExercise;
