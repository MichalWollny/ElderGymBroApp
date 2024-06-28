

import MenuAppBar from '../assets/components/MenuAppBar';
import BottomAppBar from '../assets/components/BottomAppBar';
import { BottomNavigation } from '@mui/material';

import Button from '@mui/material/Button';

//images
import avatarImage5 from '../assets/images/gymLord.png';

//components
import UICard from '/src/assets/components/UICard'

const cards = [
  {
    // My total workouts card
    image: '/src/assets/icons/svg/energy.svg',
    heading: 'My total workouts',
    subheading: 'subheading',
    // other props...
  },
  {
    // My training weeks card
    image: '/src/assets/icons/svg/flame.svg',
    heading: 'My training weeks',
    subheading: 'subheading',
    // other props...
  },
  {
    // My active plan card
    image: '/src/assets/icons/svg/flash.svg',
    heading: 'My active plan',
    subheading: 'Subheading',
    // other props...
  },
  {
    // My trophies card
    image: '/src/assets/icons/svg/trophy.svg',
    heading: 'My trophies',
    subheading: 'subheading',
    // other props...
  },
];


const Profile = () => {
  return (
    <div className="min-h-svh bg-gradient-to-br from-black to-green-950 text-gray-200">

      <div className="flex flex-row justify-start bg-gray-900">

        <div className="flex flex-row">

          <div className="flex flex-row justify-center text-teal-100">
            <a href="/setyourgrind" className="m-2 font-semibold text-teal-600">

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

      {/* Title bar*/}
      <div className="flex flex-row justify-center">
        <h1 className="cursor-default bg-gradient-to-br p-4 from-white to-gray-400 bg-clip-text pt-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
          Profile
        </h1>
      </div>

      {/* Profile image bar */}
      <div className="flex flex-row justify-center">
        {/* profile image container */}
        <div className="my flex flex-col justify-center">
          {/* profile image */}
          <div className="avatar">
            <div className="mx-auto w-28 rounded-full ring-4 ring-white ring-offset-2 ring-offset-sky-300">
              <img src={avatarImage5} alt="Profile Image" className="object-fit-cover rounded-full object-cover" />
            </div>
          </div>

          {/* round buttons bar */}
          <div className="flex flex-row justify-center">

            {/* edit profile image */}
            <div className="-mr-22 -mt-6">
              <div className="absolute max-w-12 cursor-pointer rounded-full bg-pink-900 p-2 transition-transform hover:scale-110">
                <label htmlFor="profile-image-input" className="flex cursor-pointer flex-col items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>
                </label>
                <input
              type="file"
              id="profile-image-input"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = (event) => {
                  const imgSrc = event.target.result;
                  profileimg(imgSrc);
                };
                reader.readAsDataURL(file);
              }}
            />
              </div>
              
            </div>
            
          </div>

        {/* --7. Name this bar */}
        <div className="flex flex-row justify-center">

        </div>

          {/* add endpoints for title and name*/}
          <div className="flex cursor-pointer flex-row justify-center">
            <div className="flex flex-col">
              {/* <h2 className="text-center text-xl font-semibold text-teal-700">-=|</h2> */}
              {/* <h2 className="text-center text-xl font-normal font-cthulhumbus italic text-teal-700">The infamous</h2> */}
              <h1 className="cursor-default bg-gradient-to-br from-yellow-950 to-yellow-500 bg-clip-text pt-4 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-2xl md:text-4xl">
                The infamous
              </h1>
              <h1 className="cursor-default bg-gradient-to-br from-teal-500 to-green-800 bg-clip-text py-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-4xl md:text-5xl">
                Lord of the Gym
              </h1>
              {/* <h2 className="text-center text-xl font-semibold text-teal-700">|=-</h2> */}
            </div>
          </div>
        </div>
      </div>

      {/* -- Content bar */}
      <div className="flex flex-wrap justify-center">

      {/* -- 5. grid-flow-row auto-rows-max -- */}
      <div className="grid p-6 pt-0 grid-flow-row auto-rows-max grid-cols-2">
          {cards.map((card, index) => (
            <UICard
            key={index} 
            image={card.image}
            heading={card.heading} 
            className=""
            subheading={card.subheading}
            />
          ))}
        </div>
      </div>

      {/* --7. Name this bar */}
      <div className="flex flex-row justify-center">
        <div className="-mt-8 flex justify-center">
          <Button type="submit" variant="contained" href="/edituserdata" sx={{ mt: 3, mb: 2, backgroundColor: '#831843', color: 'white' }}>
          Edit
          </Button>
          {/* <button className="rounded-full border border-white bg-pink-900 px-4 py-2 text-white">
            <a href="/whatsyourgoal">Next</a>
          </button> */}
        </div>
      </div>

    </div>
    
    
  );
};

export default Profile;
