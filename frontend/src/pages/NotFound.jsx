import NotFoundImage from '../assets/images/404.avif';
import Shoggoth from '../assets/images/workouts/shoggoth.webp';

function NotFound() {
  return (
    <>
      <div className="min-h-svh bg-black text-gray-200">
        {/* window bar */}
        <div className="flex flex-row justify-start bg-black">
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
                  className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* -- 1. Page title goes here --*/}
        <div className="flex flex-row justify-center">
          <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
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
            <button className="mt-2 rounded-full border border-white bg-pink-900 px-4 py-2 text-white transition-transform hover:scale-110">
              <a href="/home">Go Back</a>
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
