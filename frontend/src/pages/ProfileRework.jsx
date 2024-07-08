import { useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import Button from '@mui/material/Button';

const Profile = () => {
  const { userData, isLoggedIn } = useAuth();
  const [avatar, setAvatar] = useState(userData.avatar || '../src/assets/images/default-avatar.png');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setAvatar(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 pt-20 text-gray-200">
      {/* Title bar*/}
      <div className="mflex flex-row justify-center">
        <h1 className="cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text p-4 pt-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
          Profile
        </h1>
      </div>

      {/* Profile image bar */}
      <div className="flex flex-row justify-center">
        {/* profile image container */}
        <div className="flex flex-col justify-center">
          {/* profile image */}
          <div className="avatar">
            <div className="mx-auto w-28 rounded-full ring-4 ring-teal-700 ring-offset-2 ring-offset-pink-800">
              <img
                src={isLoggedIn && userData.avatar ? avatar : '../src/assets/images/default-avatar.png'}
                alt="Profile Image"
                className="object-fit-cover rounded-full object-cover"
              />
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
                <input type="file" id="profile-image-input" className="hidden" onChange={handleImageChange} />
              </div>
            </div>
          </div>

          {/* --7. Name this bar */}
          <div className="flex flex-row justify-center"></div>

          {/* add endpoints for title and name*/}
          <div className="flex cursor-pointer flex-row justify-center">
            <div className="flex flex-col">
              <h1 className="cursor-default bg-gradient-to-br from-yellow-950 to-yellow-500 bg-clip-text pt-4 text-center font-cthulhumbus text-2xl font-medium leading-tight text-transparent sm:text-2xl md:text-4xl">
                {userData.title || 'The infamous'}
              </h1>
              <h1 className="cursor-default bg-gradient-to-br from-teal-500 to-green-800 bg-clip-text py-2 text-center font-cthulhumbus text-3xl font-medium leading-tight text-transparent sm:text-4xl md:text-5xl">
                {userData.username || 'Lord of the Gym'}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* --7. Name this bar */}
      <div className="flex flex-row justify-center">
        <div className="-mt-8 flex justify-center">
          <Button
            type="submit"
            variant="contained"
            href="/edituserdata"
            sx={{ mt: 3, mb: 2, backgroundColor: '#831843', color: 'white' }}>
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
