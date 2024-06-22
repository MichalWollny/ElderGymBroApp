import profileimg from '../assets/images/Profiletestlogo.jpeg';

import avatarImage from '../assets/images/avatar.avif';
import avatarImage2 from '../assets/images/avatar2.avif';
import avatarImage3 from '../assets/images/avatar3.avif';
import avatarImage4 from '../assets/images/gymLord.avif';

// passing svgs does not work
import icnEneryg from '../assets/icons/svg/energy.svg';
import icnTrophy from '../assets/icons/svg/trophy.svg';
import icnDumbbell from '../assets/icons/svg/dumbbell.svg';
import icnFlash from '../assets/icons/svg/flash.svg';
import icnFlame from '../assets/icons/svg/flame.svg';


const Profile = () => {
  return (
    <div className=" px-4 py-3 text-gray-200  bg-gray-950">
      <div className="rounded p-4 pt-8 shadow-md">

        {/* window bar */}
        <div className='flex flex-row justify-start bg-gray-900'>

          {/* icon button container*/}
          <div className='flex flex-row'>
            {/* link container*/}
            <div className= 'flex flex-row justify-center text-teal-100'>
              <a href="/" class="m-2 font-semibold text-teal-600">
                {/* icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* window name bar*/}
        <div className="flex flex-row justify-center">
          <h1 className="pt-3 text-2xl font-semibold text-teal-600">Profile</h1>
        </div>

        {/* profile image bar */}
        <div className='flex flex-row justify-center'>

          {/* Profile image Container */}
          <div className="my-8 flex flex-col justify-center">
            <div className="col-3 avatar">
              <div className="ring-primary ring-offset-base-200 mx-auto w-32 rounded-full ring ring-offset-2 cursor-pointer transition-transform">
                <img src={profileimg} alt="Profile Image" className="object-fit-cover rounded-full object-cover" />
              </div>
            </div>

        {/* Edit Profile Image */}
        <button className="mt-1 rounded px-3 py-1 text-xs font-medium text-teal-700 sm:ml-4">
          <label htmlFor="profile-image-input" className="cursor-pointer underline sm:no-underline">
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
            Edit Profile Image
          </label>
        </button>

        {/* add endpoints for title and name*/}
        <div className='flex flex-col justify-center'>
          <div className='flex flex-row'>
            <h2 className="mb-8 text-center text-2xl font-semibold text-teal-700">-=|</h2>
            <h2 className="mb-8 text-center text-2xl font-normal italic text-teal-700">The infamous</h2>
            <h2 className="mb-8 text-center text-2xl font-semibold text-teal-700">&nbsp;</h2>
            <h2 className="mb-8 text-center text-2xl font-semibold text-teal-700">user name</h2>
            <h2 className="mb-8 text-center text-2xl font-semibold text-teal-700">|=-</h2>
          </div>
        </div>
        
        <div className='row-4 col-5 col-span-2'>
        <div className='flex flex-row'>
        {/* Button TOTAL WORKOUTS */}
        <div className="mb-4 flex justify-between space-x-6">
                  {/* <div className="fixed rounded-full p-2 text-gray-800 bg-teal-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                  </div>  */}
              </div>
            </div>









 
          </div>
          </div>


        </div>

        {/* grid for buttons*/}
        <div className="grid grid-cols-3 rows-6 place-content-center place-items-center overflow-hidden bg-gray-950 px-4 pt-5 text-gray-200 md:pt-10">





        </div>
          <div className='row-4'>

            <div className='flex flex-wrap justify-center'>

              <div className="card lg:card-side rounded-lg p-10 m-2 bg-gray-900 shadow-xl">

                  <div className="ring-primary ring-offset-base-200 mx-auto w-32 rounded-full ring ring-offset-2">
                    <img src={profileimg} alt="Profile Image" className="object-fit-cover rounded-full object-cover" />
                  </div>

                <div className="card-body">
                <h2 className="card-title py-2">Total Workouts</h2>
                <p className="font-thin py-1">Subheading</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
                </div>
              </div>

              <div className="card lg:card-side rounded-lg p-10 m-2 bg-gray-900 shadow-xl">
                <figure className='p-2 max-w-80'><img src={avatarImage2} alt="Album"/></figure>
                <div className="card-body">
                <h2 className="card-title py-1">Total Workouts</h2>
                <p className="font-thin py-1">Subheading</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
                </div>
              </div>

              <div className="card lg:card-side rounded-lg p-10 m-2 bg-gray-900 shadow-xl">
                <figure className='p-2 max-w-80'><img src={avatarImage3} alt="Album"/></figure>
                <div className="card-body">
                <h2 className="card-title py-1">Total Workouts</h2>
                <p className="font-thin py-1">Subheading</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
                </div>
              </div>

              <div className="card lg:card-side rounded-lg p-10 m-2 bg-gray-900 shadow-xl">
                <figure className='p-2 max-w-80'><img src={avatarImage4} alt="Album"/></figure>
                <div className="card-body">
                <h2 className="card-title py-1">Total Workouts</h2>
                <p className="font-thin py-1">Subheading</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
                </div>
              </div>
            
            </div>

        </div>

        {/* Edit Userdata Button */}
        <div className="row-5 col-3 col-span-2 mt-10 flex justify-center">

          
          <button className="rounded-full border border-white bg-pink-900 px-4 py-2 text-white">Edit Userdata</button>
        </div>

        
      </div>


     </div> 
  );
};

export default Profile;
