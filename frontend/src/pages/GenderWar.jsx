import maleImage from '../assets/images/gender/male.jpeg';
import femaleImage from '../assets/images/gender/female.jpg';
import eldritchHorrorImage from '../assets/images/gender/horror.jpeg';
import blobImage from '../assets/images/gender/blob.jpg';
import otherImage from '../assets/images/gender/other.jpg';

const genders = [
  {
    name: 'Male',
    image: maleImage,
  },
  {
    name: 'Female',
    image: femaleImage,
  },
  {
    name: 'Eldritch',
    image: eldritchHorrorImage,
  },
  {
    name: 'Blob',
    image: blobImage,
  },
  {
    name: 'Other',
    image: otherImage,
  },
];

function GenderWar() {
  return (
    <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 text-gray-200">
      {/* window bar */}
      <div className="flex flex-row justify-start">
        {/* icon button container*/}

        {/* link container*/}
        <div className="flex flex-row justify-center">
          <a href="/startyourjourney" className="m-2 font-semibold text-teal-600">
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

      {/* Page title bar */}
      <h2 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center font-cthulhumbus text-2xl font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
        Choose your gender
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {genders.map((gender) => (
          <div
            key={gender.name}
            className="mx-auto max-w-xs overflow-hidden rounded border-teal-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 object-cover text-gray-800 shadow-lg">
            <img className="w-full" src={gender.image} alt={gender.name} />
            <div className="px-6 py-2 text-center">
              <div className="font-cthulhumbus text-lg font-bold text-teal-500">{gender.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenderWar;
