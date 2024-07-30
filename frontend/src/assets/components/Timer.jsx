import React from 'react';
import { BsStopwatch } from 'react-icons/bs';
import { GrPowerReset } from 'react-icons/gr';

export default function Timer({ milliseconds, seconds, minutes, changeSeconds, changeMinutes, resetTimer }) {
  return (
    <div className="container mx-auto mt-2 flex w-full max-w-xs flex-row items-center justify-center rounded-[5px] bg-[#222] py-2 pb-0 text-[#eee] shadow-[5px_4px_6px_rgba(0,0,0,0.4)] md:max-w-md md:flex-row lg:max-w-lg">
      {/* {minutes !== 0 && seconds !== 0 && milliseconds !== 0 ? (
        <div>
          <div className="mb-4 mr-1 flex flex-col md:mb-0">
            <label className="mb-2 text-xs">Minutes</label>
            <input
              value={minutes}
              onChange={changeMinutes}
              className="w-[80px] rounded-[5px] border-none px-2 py-0 text-center text-[2rem] font-semibold text-white outline-none hover:bg-[#928f8f] md:w-[100px] md:text-[2.5rem]"
            />
          </div>
          <div className="mb-4 mr-1 flex flex-col md:mb-0">
            <label className="mb-2 text-xs">Seconds</label>
            <input
              value={seconds}
              onChange={changeSeconds}
              className="w-[80px] rounded-[5px] border-none px-2 py-0 text-center text-[2rem] font-semibold text-white outline-none hover:bg-[#928f8f] md:w-[100px] md:text-[2.5rem]"
            />
          </div>
          <div className="mb-4 flex flex-col md:mb-0">
            <label className="mb-2 text-xs">Milliseconds</label>
            <input
              value={milliseconds}
              readOnly={true}
              className="w-[80px] rounded-[5px] border-none px-2 py-0 text-center text-[2rem] font-semibold text-white outline-none hover:bg-[#928f8f] md:w-[100px] md:text-[2.5rem]"
            />
          </div>
        </div>
      ) : (
        <>
          <span className="text-auto p-1">Back to the grind lazy bones! Cthulhu is watching! </span>
          <button
            className="m-1 flex items-center justify-center rounded-3xl bg-red-600 px-3 py-1 text-xl font-medium text-white shadow-md transition ease-in-out hover:bg-red-500"
            onClick={resetTimer}>
            <GrPowerReset />
          </button>
        </>
      )} */}
      <div className="flex flex-row">
        <div className="mb-4 mr-1 flex flex-col md:mb-0">
          <label className="mb-2 text-xs">Minutes</label>
          <input
            value={minutes}
            onChange={changeMinutes}
            className="w-[80px] rounded-[5px] border-none px-2 py-0 text-center text-[2rem] font-semibold text-white outline-none hover:bg-[#928f8f] md:w-[100px] md:text-[2.5rem]"
          />
        </div>
        <div className="mb-4 mr-1 flex flex-col md:mb-0">
          <label className="mb-2 text-xs">Seconds</label>
          <input
            value={seconds}
            onChange={changeSeconds}
            className="w-[80px] rounded-[5px] border-none px-2 py-0 text-center text-[2rem] font-semibold text-white outline-none hover:bg-[#928f8f] md:w-[100px] md:text-[2.5rem]"
          />
        </div>
        <div className="mb-4 flex flex-col md:mb-0">
          <label className="mb-2 text-xs">Milliseconds</label>
          <input
            value={milliseconds}
            readOnly={true}
            className="w-[80px] rounded-[5px] border-none px-2 py-0 text-center text-[2rem] font-semibold text-white outline-none hover:bg-[#928f8f] md:w-[100px] md:text-[2.5rem]"
          />
        </div>
      </div>
    </div>
  );
}
