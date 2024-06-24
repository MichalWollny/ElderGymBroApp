// import stamina from '/src/assets/images/stamina.avif';
// import gymLord from '/src/assets/images/gymLord.avif';
// import ygolonac from '/src/assets/images/ygolonac.avif';
// import cardioRiot from '/src/assets/images/cardioRiot.avif';
// import cardioRiot from '/src/assets/images/cardioRiot.avif';
// import cthuhluCave from '/src/assets/images/cthuhluCave.png';
import cthulhuGrind from '/src/assets/images/cthulhuGrind.png';

// const containerItems = [
//   { id: 'gymLord', imgSrc: gymLord, text: 'Muscle Worship' },
//   { id: 'ygolonac', imgSrc: ygolonac, text: 'Fat Fight' },
//   { id: 'stamina', imgSrc: stamina, text: 'Stamina Destruction' },
//   { id: 'cardioRiot', imgSrc: cardioRiot, text: 'Cardio Crusade' },
// ];

function SetYourGrind() {
  return (
    <>
      <div className="min-h-svh bg-gray-950 text-gray-200">
        {/* window bar */}
        <div className="flex flex-row justify-start bg-gray-900">
          {/* icon button container*/}
          <div className="flex flex-row">
            {/* link container*/}
            <div className="flex flex-row justify-center text-teal-100">
              <a href="/startyourjourney" className="m-2 font-semibold text-teal-600">
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

        {/* --1. Set your Grind  bar--*/}
        <div className="flex flex-row justify-center">
          <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            Set Your Grind
          </h1>
        </div>

        {/* Content bar*/}
        <div className="flex flex-row justify-center bg-red-900">
          <img src={cthulhuGrind} alt="Landing Page Image" className="m-2 w-80" />
        </div>

        {/* -- Content bar */}
        <div className="flex flex-wrap justify-center bg-green-900">
          {/* 1x per Week card*/}
          <div className="flex flex-wrap justify-center">
            <div className="card glass m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform lg:card-side hover:scale-110">
              <div className="flex min-w-36 flex-col items-center justify-center">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g clip-path="url(#clip0_429_11003)">
                      {' '}
                      <path
                        d="M12 20V4L9 7"
                        stroke="#2B777D"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>{' '}
                    </g>{' '}
                    <defs>
                      {' '}
                      <clipPath id="clip0_429_11003">
                        {' '}
                        <rect width="24" height="24" fill="white"></rect>{' '}
                      </clipPath>{' '}
                    </defs>{' '}
                  </g>
                </svg>
              </div>
              <div className="card-body">
                <div className="flex flex-col items-center">
                  <h2 className="card-title py-2 font-cthulhumbus">per Week</h2>
                  <p className="py-1 font-cthulhumbus text-sm text-pink-800">"A lone tribute to the muscle deity"</p>

                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* 2x per Week card*/}
          <div className="flex flex-row justify-center">
            <div className="card glass m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform lg:card-side hover:scale-110">
              <div className="flex min-w-36 flex-col items-center justify-center">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g clip-path="url(#clip0_429_10997)">
                      {' '}
                      <path
                        d="M8 8C8 6.97631 8.39052 5.95262 9.17157 5.17157C10.7337 3.60947 13.2663 3.60947 14.8284 5.17157C16.3905 6.73366 16.3905 9.26632 14.8284 10.8284L9.17157 16.4853C8.42143 17.2354 8 18.2528 8 19.3137L8 20L16 20"
                        stroke="#2B777D"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>{' '}
                    </g>{' '}
                    <defs>
                      {' '}
                      <clipPath id="clip0_429_10997">
                        {' '}
                        <rect width="24" height="24" fill="white"></rect>{' '}
                      </clipPath>{' '}
                    </defs>{' '}
                  </g>
                </svg>
              </div>
              <div className="card-body">
                <div className="flex flex-col items-center">
                  <h2 className="card-title py-2 font-cthulhumbus">per Week</h2>
                  <p className="py-1 font-cthulhumbus text-sm text-pink-800">"Strengthening tributes"</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* 3x per Week card*/}
          <div className="flex flex-wrap justify-center">
            <div className="card glass m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform lg:card-side hover:scale-110">
              <div className="flex min-w-36 flex-col items-center justify-center">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g clip-path="url(#clip0_429_10996)">
                      {' '}
                      <path
                        d="M8 19.0004C8.83566 19.6281 9.87439 20 11 20C13.7614 20 16 17.7614 16 15C16 12.2386 13.7614 10 11 10L16 4H8"
                        stroke="#2B777D"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>{' '}
                    </g>{' '}
                    <defs>
                      {' '}
                      <clipPath id="clip0_429_10996">
                        {' '}
                        <rect width="24" height="24" fill="white"></rect>{' '}
                      </clipPath>{' '}
                    </defs>{' '}
                  </g>
                </svg>
              </div>
              <div className="card-body">
                <div className="flex flex-col items-center">
                  <h2 className="card-title py-2 font-cthulhumbus">per Week</h2>
                  <p className="py-1 font-cthulhumbus text-sm text-pink-800">"Thrice a week, a ritual of unleashing"</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* 4x per Week card*/}
          <div className="flex flex-wrap justify-center">
            <div className="card glass m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform lg:card-side hover:scale-110">
              <div className="flex min-w-36 flex-col items-center justify-center">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g clip-path="url(#clip0_429_11105)">
                      {' '}
                      <path
                        d="M10 4L8.47845 11.6078C8.23093 12.8453 9.17752 14 10.4396 14H16M16 14V8M16 14V20"
                        stroke="#2B777D"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>{' '}
                    </g>{' '}
                    <defs>
                      {' '}
                      <clipPath id="clip0_429_11105">
                        {' '}
                        <rect width="24" height="24" fill="white"></rect>{' '}
                      </clipPath>{' '}
                    </defs>{' '}
                  </g>
                </svg>
              </div>
              <div className="card-body">
                <div className="flex flex-col items-center">
                  <h2 className="card-title py-2 font-cthulhumbus">per Week</h2>
                  <p className="py-1 font-cthulhumbus text-sm text-pink-800">"Echoes of my power in your veins!"</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --7. Name this bar */}
        <div className="flex flex-row justify-center bg-blue-900">
          {/* --8. Add content here-- */}
          <div>Content section 3</div>
        </div>

        {/* --7. Name this bar */}
        <div className="flex flex-row justify-center bg-yellow-900">
          <div className="mt-6 flex justify-center">
            <button className="rounded-full border border-white bg-pink-900 px-4 py-2 text-white">
              <a href="/ProfileRework">Next</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetYourGrind;
